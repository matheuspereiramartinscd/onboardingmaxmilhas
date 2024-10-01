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
        default: '/uploads/user_photo.png'
    },
    score: {
        type: Number,
        default: 0
    },
    courses: [{
        course: {
            type: String,
            required: true
        },
        progress: {
            type: Number,
            default: 0
        },
        lessons: [{
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
