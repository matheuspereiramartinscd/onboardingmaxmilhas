const mongoose = require('mongoose');

// Definindo o esquema do curso
const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Criando o modelo
const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;
