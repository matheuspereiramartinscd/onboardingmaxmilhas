const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Definição do esquema do usuário
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        default: '/uploads/user_photo.png' // Ajustado para corresponder ao que você mencionou
    },
    score: {
        type: Number,
        default: 0 // Pontuação inicial padrão
    },
    courses: [{ // Campo para armazenar os cursos do usuário
        course: {
            type: String,
            required: true
        },
        progress: {
            type: Number,
            default: 0 // Progresso inicial padrão
        },
        lessons: [{ // Campo para armazenar as aulas e seu status
            title: String,
            completed: { type: Boolean, default: false }
        }]
    }]
});

// Método para hash da senha antes de salvar o usuário
UserSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

// Método para comparar a senha
UserSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Criando o modelo
const User = mongoose.model('User', UserSchema);

module.exports = User;
