// backend/models/Ranking.js
const mongoose = require('mongoose');

const rankingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    photoUrl: {
        type: String,
        required: true,
    },
    points: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Ranking', rankingSchema);
