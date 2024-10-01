const express = require('express');
const router = express.Router();
const Link = require('../models/link');

// Rota para obter todos os links
router.get('/', async (req, res) => {
    try {
        const links = await Link.find();
        res.json(links);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Rota para criar um novo link
router.post('/', async (req, res) => {
    const link = new Link({
        title: req.body.title,
        url: req.body.url
    });

    try {
        const newLink = await link.save();
        res.status(201).json(newLink);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
