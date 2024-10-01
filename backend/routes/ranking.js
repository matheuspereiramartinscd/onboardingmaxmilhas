// backend/routes/ranking.js
const express = require('express');
const Ranking = require('../models/Ranking');

const router = express.Router();

// Rota para obter todos os colaboradores
router.get('/', async (req, res) => {
    try {
        const rankings = await Ranking.find();
        res.json(rankings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Rota para criar um novo colaborador (para popular a coleção)
router.post('/', async (req, res) => {
    const { name, photoUrl, points } = req.body;

    const newRanking = new Ranking({
        name,
        photoUrl,
        points,
    });

    try {
        const savedRanking = await newRanking.save();
        res.status(201).json(savedRanking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
