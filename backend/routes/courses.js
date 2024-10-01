const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// Rota para obter todos os cursos
router.get('/', async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Rota para obter um curso específico pelo ID
router.get('/:id', async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ message: 'Curso não encontrado' });
        }
        res.json(course);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Rota para criar um novo curso (opcional)
router.post('/', async (req, res) => {
    const course = new Course({
        title: req.body.title,
        content: req.body.content
    });

    try {
        const newCourse = await course.save();
        res.status(201).json(newCourse);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
