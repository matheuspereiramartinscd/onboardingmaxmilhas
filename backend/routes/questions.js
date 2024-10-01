const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// Rota para obter perguntas de um curso específico
router.get('/:courseId', async (req, res) => {
    try {
        const questions = await Question.find({ courseId: req.params.courseId });
        res.json(questions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Rota para criar uma nova pergunta
router.post('/', async (req, res) => {
    const question = new Question({
        courseId: req.body.courseId,
        questionText: req.body.questionText,
        options: req.body.options
    });

    try {
        const newQuestion = await question.save();
        res.status(201).json(newQuestion);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
