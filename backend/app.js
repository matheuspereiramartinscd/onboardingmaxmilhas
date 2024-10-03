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

// Route to replicate courses and lessons from one user to all others
app.post('/api/users/replicate-courses/:userId', async (req, res) => {
    const { userId } = req.params; // ID do usuário de origem para replicar os cursos

    try {
        // Buscar o usuário que será usado como base para replicar cursos e lições
        const sourceUser = await User.findById(userId);

        if (!sourceUser) {
            return res.status(404).json({ message: 'Usuário de origem não encontrado.' });
        }

        const sourceCourses = sourceUser.courses; // Cursos e lições a serem replicados

        // Atualiza todos os usuários, exceto o de origem, para replicar os cursos e lições
        const resultSet = await User.updateMany(
            { _id: { $ne: userId } }, // Exclui o usuário de origem da replicação
            { $set: { courses: sourceCourses } } // Define os cursos como os do usuário de origem
        );

        // Remove cursos adicionais de todos os outros usuários
        await User.updateMany(
            { _id: { $ne: userId } },
            { $pull: { courses: { course: { $nin: sourceCourses.map(course => course.course) } } } }
        );

        res.status(200).json({
            message: `Cursos e lições replicados de ${sourceUser.name} para ${resultSet.modifiedCount} usuários com sucesso.`
        });
    } catch (error) {
        console.error('Erro ao replicar cursos e lições:', error);
        res.status(500).json({ message: 'Erro ao replicar cursos e lições', error: error.message });
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

app.post('/api/users/:userId/add-lesson/:courseName', async (req, res) => {
    const { userId, courseName } = req.params;
    const { lessonTitle } = req.body;

    // Validação do corpo da requisição
    if (!lessonTitle) {
        return res.status(400).send({ message: 'Título da lição é obrigatório.' });
    }

    try {
        const result = await User.updateOne(
            { _id: userId, 'courses.course': courseName }, // Busca o usuário pelo ID e pelo curso
            {
                $push: {
                    'courses.$.lessons': { title: lessonTitle, completed: false } // Adiciona a lição ao curso do usuário
                }
            }
        );

        // Verifica se a atualização foi bem-sucedida
        if (result.nModified === 0) {
            return res.status(404).send({ message: 'Usuário ou curso não encontrado.' });
        }

        res.status(200).send({ message: `Lição "${lessonTitle}" adicionada ao curso "${courseName}" do usuário.` });
    } catch (error) {
        res.status(500).send({ message: 'Erro ao adicionar lição.', error });
    }
});



// Add multer to handle file uploads


// Modify the route to handle user updates with file uploads
app.put('/api/users/:id', upload.single('photo'), async (req, res) => {
    const { id } = req.params; // ID do usuário a ser atualizado
    const { name } = req.body; // O novo nome a ser atualizado
    const photoPath = req.file ? req.file.path : null; // Caminho da nova foto se existir

    try {
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        // Atualiza o usuário com o novo nome e, se houver, o novo caminho da foto
        user.name = name || user.name; // Atualiza o nome se novo nome for fornecido
        if (photoPath) {
            user.photo = photoPath; // Atualiza a foto se nova foto for fornecida
        }

        await user.save(); // Salva as alterações
        res.status(200).json({ message: 'Usuário atualizado com sucesso', user });
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        res.status(500).json({ message: 'Erro ao atualizar usuário', error: error.message });
    }
});


// Start the server
startServer();
