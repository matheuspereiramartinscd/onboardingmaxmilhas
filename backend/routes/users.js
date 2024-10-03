const express = require('express');
const multer = require('multer');
const path = require('path');
const User = require('../models/User'); // Make sure your User model is defined correctly
const router = express.Router();

// Configuração do multer para armazenamento de arquivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Pasta onde os arquivos serão salvos
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Nome do arquivo
    }
});

const upload = multer({ storage: storage });

// Rota para buscar todos os usuários
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar usuários', error: error.message });
    }
});

// Rota para buscar um usuário pelo ID
router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar usuário', error: error.message });
    }
});

// Rota para criar um novo usuário
router.post('/', upload.single('photo'), async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const newUser = new User({
            name,
            email,
            password,
            photo: req.file ? req.file.path : 'uploads/user_photo.png', // Se uma foto não foi enviada, usa a imagem padrão
            score: 0, // Pontuação inicial
            courses: [
                {
                    "course": "cockpit",
                    "progress": 0,
                    "lessons": [
                        {
                            "title": "Prejuizos",
                            "completed": false,

                        },
                        {
                            "title": "Milhas",
                            "completed": false,

                        }
                    ]
                },
                {
                    "course": "milhas",
                    "progress": 0,
                    "lessons": []
                },
                {
                    "course": "historia",
                    "progress": 0,
                    "lessons": []
                },
                {
                    "course": "nocao",
                    "progress": 0,
                    "lessons": []
                },
                {
                    "course": "ofertantes",
                    "progress": 0,
                    "lessons": []
                },
                {
                    "course": "tour_virtual",
                    "progress": 0,
                    "lessons": []
                }
            ]
        });

        await newUser.save();
        res.status(201).json(newUser); // Retorna o usuário criado
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar usuário', error: error.message });
    }
});

// Rota para atualizar um usuário
router.put('/update/:id', upload.single('photo'), async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        if (req.file) {
            // Atualiza a foto do usuário com o caminho do arquivo local
            user.photo = req.file.path; // Armazena o caminho da foto local
        }

        // Atualiza outros campos do usuário
        user.name = name || user.name;
        user.email = email || user.email;

        await user.save();
        res.status(200).json({ message: 'Usuário atualizado com sucesso!', user });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar o usuário', error });
    }
});

// Rota para atualizar a pontuação do usuário
router.put('/:id/score', async (req, res) => {
    console.log('Incoming Request Body:', req.body); // Log the entire request body

    const { id } = req.params;
    const scoreUpdate = Number(req.body.score); // Use 'score' from the request body

    // Validate score
    if (isNaN(scoreUpdate)) {
        console.log('Invalid score:', req.body.score); // Log the invalid score
        return res.status(400).json({ message: 'Pontuação deve ser um número' });
    }

    try {
        const user = await User.findById(id);
        if (!user) {
            console.log('User not found:', id); // Log if user is not found
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        // Update score
        user.score += scoreUpdate; // Update the user's score
        await user.save();

        console.log('Updated Score:', user.score); // Log the updated score
        res.status(200).json({ score: user.score });
    } catch (error) {
        console.error('Error updating score:', error); // Log any error that occurs
        res.status(500).json({ message: 'Erro ao atualizar a pontuação', error: error.message });
    }
});

// Rota para buscar progresso de um curso específico do usuário
router.get('/:userId/progress/:course', async (req, res) => {
    console.log('Params:', req.params);  // Log incoming parameters

    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            console.log('User not found');
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        console.log('User found:', user);  // Log the found user

        const courseProgress = user.courses.find(c => c.course === req.params.course);
        if (!courseProgress) {
            console.log('Course progress not found for course:', req.params.course);
            return res.status(404).json({ error: 'Progresso do curso não encontrado' });
        }

        res.json(courseProgress);
    } catch (error) {
        console.error('Error fetching course progress:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// Rota para atualizar o progresso de um curso específico do usuário
router.put('/:userId/progress/:course', async (req, res) => {
    const { userId, course } = req.params;
    const { progress, lessons } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        let courseProgress = user.courses.find(c => c.course === course);
        if (!courseProgress) {
            courseProgress = { course, progress: 0, lessons: [] };
            user.courses.push(courseProgress);
        }

        courseProgress.progress = progress !== undefined ? progress : courseProgress.progress;
        courseProgress.lessons = lessons !== undefined ? lessons : courseProgress.lessons;
        await user.save();

        res.status(200).json({ message: 'Progresso atualizado com sucesso!', user });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar progresso', error: error.message });
    }
});

// Endpoint para deletar um curso do usuário
router.delete('/:userId/delete-course/:course', async (req, res) => {
    const { userId, course } = req.params;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        user.courses = user.courses.filter(c => c.course !== course);
        await user.save();

        res.status(200).json({ message: 'Curso deletado com sucesso!' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar curso', error: error.message });
    }
});

// Endpoint para deletar uma lição de um curso
// Implementar a lógica aqui, se necessário

module.exports = router;
