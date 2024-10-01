const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const coursesRouter = require('./routes/courses');
const questionsRouter = require('./routes/questions');
const rankingRouter = require('./routes/ranking');
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const User = require('./models/User');
require('dotenv').config(); // Ensure your .env is set up correctly.

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Setup static file serving for uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Initialize multer for handling file uploads
const upload = multer({ dest: 'uploads/' }); // Change destination if needed

// MongoDB connection URI
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/onboarding_system'; // Ensure to use your actual MongoDB URI.

// Connect to MongoDB
async function connectToDatabase() {
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    } catch (err) {

        process.exit(1); // Exit the process if unable to connect
    }
}

// Route for adding a new course to all users
app.put('/api/users/add-course', async (req, res) => {
    const { courseName } = req.body; // O nome do novo curso a ser adicionado

    if (!courseName) {
        return res.status(400).json({ message: 'Nome do curso é necessário' });
    }

    try {
        // Atualiza todos os usuários, adicionando o novo curso ao array de cursos
        await User.updateMany({}, {
            $addToSet: {
                courses: { course: courseName, progress: 0, lessons: [] } // Inicializa o progresso e as lições
            }
        });

        res.status(200).json({ message: `Curso '${courseName}' adicionado a todos os usuários.` });
    } catch (error) {
        console.error('Erro ao adicionar curso a todos os usuários:', error);
        res.status(500).json({ message: 'Erro ao adicionar curso', error: error.message });
    }
});

// Route for updating lessons of an existing course for all users
app.put('/api/users/update-course-lessons', async (req, res) => {
    const { courseName, newLesson } = req.body; // O nome do curso e a nova lição a ser adicionada

    if (!courseName || !newLesson || !newLesson.title) {
        return res.status(400).json({ message: 'Nome do curso e nova lição (com título) são necessários' });
    }

    try {
        // Atualiza as lições do curso em todos os usuários
        const result = await User.updateMany(
            { 'courses.course': courseName }, // Busca os usuários que têm o curso
            { $addToSet: { 'courses.$[elem].lessons': newLesson } }, // Adiciona a nova lição
            { arrayFilters: [{ 'elem.course': courseName }] } // Aplica o filtro ao array de cursos
        );

        // Verifica se alguma atualização foi feita
        if (result.modifiedCount > 0) {
            res.status(200).json({ message: `Lição '${newLesson.title}' adicionada ao curso '${courseName}' em todos os usuários.` });
        } else {
            res.status(404).json({ message: `Nenhum usuário encontrado com o curso '${courseName}' para atualizar.` });
        }
    } catch (error) {
        console.error('Erro ao atualizar lições do curso:', error);
        res.status(500).json({ message: 'Erro ao atualizar lições do curso', error: error.message });
    }
});

// Start the server
async function startServer() {
    await connectToDatabase();

    // Use routes
    app.use('/api/courses', coursesRouter);
    app.use('/api/questions', questionsRouter);
    app.use('/api/ranking', rankingRouter);
    app.use('/api/auth', authRouter);
    app.use('/api/users', usersRouter);

    // Start the server
    app.listen(PORT, () => {

    });
}

// Route for getting user by email (if needed, can be part of usersRouter)
app.get('/user/:email', async (req, res) => {
    try {
        const userEmail = req.params.email;
        const user = await User.findOne({ email: userEmail });
        if (user) {
            res.json({
                id: user._id,
                name: user.name,
                photo: user.photo,
                points: user.score,
            });
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (err) {
        console.error('Error fetching user:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Deletar um curso pelo nome do curso
app.delete('/api/users/delete-course/:courseName', async (req, res) => {
    const { courseName } = req.params;

    try {
        // Atualiza todos os usuários removendo o curso correspondente
        const result = await User.updateMany(
            {},
            { $pull: { courses: { course: courseName } } } // Remove o curso pelo nome
        );

        res.status(200).send(`Cursos deletados com sucesso. ${result.modifiedCount} usuários afetados.`);
    } catch (error) {
        console.error('Erro ao deletar curso em massa:', error);
        res.status(500).send('Erro ao deletar curso.');
    }
});

app.put('/api/users/update-score/:userId', async (req, res) => {
    const { userId } = req.params;
    const { score } = req.body; // O novo score a ser atualizado

    if (typeof score !== 'number') {
        return res.status(400).json({ message: 'Score deve ser um número' });
    }

    try {
        const user = await User.findByIdAndUpdate(userId, { score }, { new: true });

        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        res.status(200).json({ message: 'Score atualizado com sucesso', user });
    } catch (error) {
        console.error('Erro ao atualizar score do usuário:', error);
        res.status(500).json({ message: 'Erro ao atualizar score', error: error.message });
    }
});

app.put('/api/users/add-points/:userId', async (req, res) => {
    const { userId } = req.params;
    const { points } = req.body; // Os pontos a serem adicionados

    // Verifica se os pontos são um número
    if (typeof points !== 'number') {
        return res.status(400).json({ message: 'Os pontos devem ser um número' });
    }

    try {
        // Encontra o usuário e atualiza o score
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        // Adiciona os pontos ao score existente
        user.score += points;

        await user.save();
        res.status(200).json({ message: 'Pontos adicionados com sucesso', user });
    } catch (error) {
        console.error('Erro ao adicionar pontos ao score do usuário:', error);
        res.status(500).json({ message: 'Erro ao adicionar pontos', error: error.message });
    }
})

// Route to delete a lesson
app.delete('/api/users/delete-lesson/:courseName/:lessonTitle', async (req, res) => {
    const { courseName, lessonTitle } = req.params;

    try {
        await User.updateMany(
            { 'courses.course': courseName },
            { $pull: { 'courses.$.lessons': { title: lessonTitle } } }
        );
        res.status(200).send({ message: `Lição "${lessonTitle}" deletada do curso "${courseName}" de todos os usuários.` });
    } catch (error) {
        res.status(500).send({ message: 'Erro ao deletar lição.', error });
    }
});

// Start the server
startServer();
