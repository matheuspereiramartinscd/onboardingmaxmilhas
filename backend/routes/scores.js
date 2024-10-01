// /routes/scores.js
const express = require('express');
const router = express.Router();
const Score = require('../models/Score');

// Rota para obter a pontuação de um usuário em um curso específico
router.get('/:userId/:courseId', async (req, res) => {
    try {
        const score = await Score.findOne({
            userId: req.params.userId,
            courseId: req.params.courseId
        });
        res.json(score || { points: 0, progress: 0 }); // Retorna zero se não existir
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Rota para atualizar a pontuação
router.post('/', async (req, res) => {
    const { userId, courseId, points, progress } = req.body;

    try {
        const score = await Score.findOneAndUpdate(
            { userId, courseId },
            { points, progress },
            { new: true, upsert: true } // Cria um novo registro se não existir
        );
        res.json(score);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
