const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Course' // Referência ao modelo Course
    },
    questionText: {
        type: String,
        required: true
    },
    options: [{
        text: {
            type: String,
            required: true
        },
        isCorrect: {
            type: Boolean,
            required: true
        }
    }]
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
