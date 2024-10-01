const express = require('express');
const multer = require('multer');
const path = require('path');
const User = require('../models/User');
const router = express.Router();

// Configuração do multer para armazenamento de arquivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
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
            photo: req.file ? req.file.path : 'uploads/user_photo.png',
            score: 0,
            courses: [
                { course: 'cockpit', progress: 0, lessons: [] },
                { course: 'milhas', progress: 0, lessons: [] },
                { course: 'historia', progress: 0, lessons: [] },
                { course: 'nocao', progress: 0, lessons: [] },
                { course: 'ofertantes', progress: 0, lessons: [] },
                { course: 'tour_virtual', progress: 0, lessons: [] }
            ]
        });

        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar usuário', error: error.message });
    }
});

// Rota para atualizar um usuário
router.put('/:userId', upload.single('photo'), async (req, res) => {
    const { userId } = req.params;
    const { name } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        user.name = name || user.name;
        if (req.file) {
            user.photo = req.file.path;
        }

        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar usuário', error: error.message });
    }
});

// Rota para atualizar a pontuação do usuário
router.put('/:id/score', async (req, res) => {
    const { id } = req.params;
    const scoreUpdate = Number(req.body.score);

    if (isNaN(scoreUpdate)) {
        return res.status(400).json({ message: 'Pontuação deve ser um número' });
    }

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        user.score += scoreUpdate;
        await user.save();
        res.status(200).json({ score: user.score });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar a pontuação', error: error.message });
    }
});

// Rota para buscar progresso de um curso específico do usuário
router.get('/:userId/progress/:course', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        const courseProgress = user.courses.find(c => c.course === req.params.course);
        if (!courseProgress) {
            return res.status(404).json({ error: 'Progresso do curso não encontrado' });
        }

        res.json(courseProgress);
    } catch (error) {
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

router.delete('/users/delete-course/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Course.findByIdAndDelete(id);
        res.status(200).json({ message: 'Curso deletado com sucesso!' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar curso', error });
    }
});

// Endpoint para deletar uma lição de um curso

module.exports = router;
