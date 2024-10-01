// /models/Score.js
const mongoose = require('mongoose');

// Definindo o esquema de pontuação
const ScoreSchema = new mongoose.Schema({
    userId: {
        type: String, // ID do usuário que a pontuação pertence
        required: true
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course', // Referência ao modelo Course
        required: true
    },
    points: {
        type: Number,
        default: 0 // Pontuação inicial
    },
    progress: {
        type: Number,
        default: 0 // Progresso inicial
    }
});

// Criando o modelo
const Score = mongoose.model('Score', ScoreSchema);

module.exports = Score;
