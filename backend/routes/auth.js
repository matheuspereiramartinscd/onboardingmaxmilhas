const { OAuth2Client } = require('google-auth-library');
const express = require('express');
const User = require('../models/User');
const router = express.Router();

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Rota para login com Google
router.post('/google-login', async (req, res) => {
    const { id_token } = req.body;

    try {
        const ticket = await client.verifyIdToken({
            idToken: id_token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });
        const payload = ticket.getPayload();

        const email = payload.email;

        // Salvar o email localmente (aqui você pode usar localStorage ou qualquer método que preferir no front-end)
        // Exemplo: localStorage.setItem('userEmail', email);  (No frontend)

        // Verifica se o usuário já existe no banco de dados
        let user = await User.findOne({ email });

        // Se o usuário não existir, cria um novo usuário
        if (!user) {
            user = new User({
                name: email, // Usa o email como nome
                email: email, // Usa o email retornado do Google
                password: 'defaultPassword', // Senha padrão (não será usada, apenas para passar a validação)
                photo: '/uploads/user_photo.png', // Foto padrão
                score: 0, // Inicializa a pontuação em zero
            });
            await user.save(); // Salva o novo usuário no banco de dados
        }

        // Remover a senha do objeto de usuário antes de retornar
        const { password, ...userData } = user.toObject();

        // Retornar o usuário (sem a senha) e uma mensagem de sucesso
        res.status(200).json({ message: 'Login successful', user: userData });
    } catch (error) {
        console.error('Erro ao verificar token do Google:', error);
        res.status(401).json({ message: 'Invalid token' });
    }
});

module.exports = router;
