const express = require('express');
const multer = require('multer');
const path = require('path');
const User = require('../models/User'); // Make sure your User model is defined correctly
const router = express.Router();

// Configuração do multer para armazenamento de arquivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Pasta onde os arquivos serão salvos
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Nome do arquivo
    }
});

const upload = multer({ storage: storage });

// Rota para buscar todos os usuários
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar usuários', error: error.message });
    }
});

// Rota para buscar um usuário pelo ID
router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar usuário', error: error.message });
    }
});

// Rota para criar um novo usuário
router.post('/', upload.single('photo'), async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const newUser = new User({
            name,
            email,
            password,
            photo: req.file ? req.file.path : 'uploads/user_photo.png', // Se uma foto não foi enviada, usa a imagem padrão
            score: 0, // Pontuação inicial
            courses: [
                {
                    "course": "cockpitsystem",
                    "progress": 0,
                    "lessons": [
                        {"title": "Cockpit", "completed": false},
                        {"title": "Menu lateral", "completed": false},
                        {"title": "Menu lateral - Cockpit", "completed": false},
                        {"title": "Menu lateral - Milhas", "completed": false},
                        {"title": "Detalhes da oferta", "completed": false},
                        {"title": "Abas do Cockpit", "completed": false},
                        {"title": "Opções de pesquisa de transações", "completed": false},
                        {"title": "Transações", "completed": false},
                        {"title": "Transação completa", "completed": false},
                        {"title": "Comentários", "completed": false}
                    ]
                },
                {
                    "course": "milhas",
                    "progress": 0,
                    "lessons": [
                        {"title": "Milhas", "completed": false},
                        {"title": "Regulamentação da venda de milhas", "completed": false},
                        {"title": "Precificação das milhas", "completed": false},
                        {"title": "Como acumular milhas", "completed": false},
                        {"title": "Como utilizar milhas", "completed": false},
                        {"title": "Principais programas de fidelidade", "completed": false},
                        {"title": "Validade das milhas", "completed": false}
                    ]
                },
                {
                    "course": "historia",
                    "progress": 0,
                    "lessons": [
                        {"title": "História da fundação da empresa", "completed": false},
                        {"title": "Principais marcos e conquistas", "completed": false},
                        {"title": "Cultura organizacional", "completed": false},
                        {"title": "Valores e missão da empresa", "completed": false},
                        {"title": "Como a empresa se posiciona no mercado", "completed": false},
                        {"title": "Estrutura hierárquica e equipes", "completed": false},
                        {"title": "Políticas de inclusão e diversidade", "completed": false}
                    ]
                },
                {
                    "course": "nocao",
                    "progress": 0,
                    "lessons": [
                        {"title": "Navegadores de internet", "completed": false},
                        {"title": "Extensões de navegador", "completed": false},
                        {"title": "Navegação Anônima", "completed": false},
                        {"title": "Cookies", "completed": false},
                        {"title": "Uso de VPNs", "completed": false},
                        {"title": "Simuladores Android", "completed": false},
                        {"title": "CCleaner e manutenção do sistema", "completed": false},
                        {"title": "Ferramentas de captura de tela", "completed": false},
                        {"title": "Google Sheets e planilhas do Excel", "completed": false},
                        {"title": "Criando Senhas Seguras", "completed": false},
                        {"title": "Autenticação de Dois Fatores (2FA)", "completed": false}
                    ]
                },
                {
                    "course": "ofertantes",
                    "progress": 0,
                    "lessons": [
                        {"title": "Ofertantes", "completed": false},
                        {"title": "Buscando ofertantes pelo milhas", "completed": false},
                        {"title": "Saldo, razão, média e quantidade de CPFs", "completed": false},
                        {"title": "Milhas da venda, valor ofertante e valor unitário", "completed": false},
                        {"title": "Valor da compra, valor pago e taxa de embarque", "completed": false},
                        {"title": "Categoria de ofertantes - Smiles", "completed": false},
                        {"title": "Categoria de ofertantes - Azul", "completed": false},
                        {"title": "Categoria de ofertantes - Latam", "completed": false},
                        {"title": "Beneficiários no cadastro tudo azul", "completed": false},
                        {"title": "Validação de ofertas", "completed": false},
                        {"title": "Ofertantes de revenda", "completed": false},
                        {"title": "Ofertantes liminares", "completed": false},
                        {"title": "Ofertantes PJ", "completed": false}
                    ]
                },
                {
                    "course": "tour_virtual",
                    "progress": 0,
                    "lessons": [
                        {"title": "Localização da sede", "completed": false},
                        {"title": "Área de recepção e atendimento", "completed": false},
                        {"title": "Área de refeição e descanso", "completed": false},
                        {"title": "Cozinha", "completed": false},
                        {"title": "Deck", "completed": false},
                        {"title": "Fumo dromo", "completed": false},
                        {"title": "Sala de operações", "completed": false},
                        {"title": "Localização dos times", "completed": false},
                        {"title": "Área de TI e suporte", "completed": false}
                    ]
                },
                {
                    "course": "emissoes",
                    "progress": 0,
                    "lessons": [
                        {"title": "Lógica de negócio", "completed": false},
                        {"title": "Iniciando transações", "completed": false},
                        {"title": "Calculadora de prejuízos", "completed": false},
                        {"title": "Troca de ofertantes", "completed": false},
                        {"title": "Alterando quantidade de milhas", "completed": false},
                        {"title": "Alterando dados dos passageiros", "completed": false},
                        {"title": "Cartões de crédito", "completed": false},
                        {"title": "Emissões manuais", "completed": false},
                        {"title": "Emissões semiautomáticas", "completed": false},
                        {"title": "Emissões automáticas", "completed": false},
                        {"title": "Inserindo etickets", "completed": false},
                        {"title": "Cancelando transações", "completed": false},
                        {"title": "Checagem", "completed": false},
                        {"title": "FNC 15", "completed": false},
                        {"title": "Bagagens", "completed": false},
                        {"title": "Voos nacionais e internacionais", "completed": false}
                    ]
                },
                {
                    "course": "emissoeslatam",
                    "progress": 0,
                    "lessons": [
                        {"title": "Iniciando transações na LATAM", "completed": false},
                        {"title": "Categoria de ofertantes", "completed": false},
                        {"title": "Comentários", "completed": false},
                        {"title": "Motivos de troca de ofertante", "completed": false},
                        {"title": "Cancelamento e reembolso", "completed": false},
                        {"title": "Tratativa em aumento de milhas e voo indisponível", "completed": false},
                        {"title": "Emissões automáticas", "completed": false},
                        {"title": "Emissões manuais", "completed": false},
                        {"title": "Acessando a conta do ofertante com a Bifrost", "completed": false},
                        {"title": "Erros de login", "completed": false},
                        {"title": "Erros de pagamento", "completed": false},
                        {"title": "Verificando extrato", "completed": false},
                        {"title": "Latam wallet e tripcase", "completed": false},
                        {"title": "Transações 24 horas", "completed": false},
                        {"title": "Voos internacionais", "completed": false},
                        {"title": "Bagagem", "completed": false}
                    ]
                },
                {
                    "course": "emissoesgol",
                    "progress": 0,
                    "lessons": [
                        {"title": "Iniciando transações na Gol", "completed": false},
                        {"title": "Categoria de ofertantes", "completed": false},
                        {"title": "Comentários", "completed": false},
                        {"title": "Motivos de troca de ofertante", "completed": false},
                        {"title": "Cancelamento e reembolso", "completed": false},
                        {"title": "Site da Gol", "completed": false},
                        {"title": "Tratativa em aumento de milhas e voo indisponível", "completed": false},
                        {"title": "Emissões automáticas", "completed": false},
                        {"title": "Emissões manuais", "completed": false},
                        {"title": "Simulador Android", "completed": false},
                        {"title": "Código para pagamento", "completed": false},
                        {"title": "Bagagem", "completed": false},
                        {"title": "Cancelando reservas", "completed": false}
                    ]
                },
                {
                    "course": "emissoesazul",
                    "progress": 0,
                    "lessons": [
                        {"title": "Iniciando transações na Azul", "completed": false},
                        {"title": "Categoria de ofertantes", "completed": false},
                        {"title": "Comentários", "completed": false},
                        {"title": "Motivos de troca de ofertante", "completed": false},
                        {"title": "Site da Azul", "completed": false},
                        {"title": "Cancelamento e reembolso", "completed": false},
                        {"title": "Tratativa em aumento de milhas e voo indisponível", "completed": false},
                        {"title": "Beneficiários", "completed": false},
                        {"title": "Emissões automáticas", "completed": false},
                        {"title": "Emissões manuais", "completed": false},
                        {"title": "Consultando reservas", "completed": false},
                        {"title": "Bagagem", "completed": false},
                        {"title": "Cancelando reservas", "completed": false}
                    ]
                },
                {
                    "course": "prejuizos",
                    "progress": 0,
                    "lessons": [
                        {"title": "Impactos dos prejuízos", "completed": false},
                        {"title": "Tipos mais comuns de prejuízos", "completed": false},
                        {"title": "Emissões duplicadas", "completed": false},
                        {"title": "Emissões na conta errada", "completed": false},
                        {"title": "Transação cancelada e localizador ativo", "completed": false},
                        {"title": "Aumento sem tratativa ou com tratativa indevida", "completed": false},
                        {"title": "Dicas para evitar prejuízos", "completed": false}
                    ]
                },
                {
                    "course": "ferramentas",
                    "progress": 0,
                    "lessons": [
                        {"title": "Ponto online", "completed": false},
                        {"title": "Qulture.rocks", "completed": false},
                        {"title": "Convenia", "completed": false},
                        {"title": "Metabase", "completed": false},
                        {"title": "Receita Federal", "completed": false},
                        {"title": "Tripcase", "completed": false},
                        {"title": "Zendesk", "completed": false},
                        {"title": "Slack", "completed": false}
                    ]
                }
            ]
        });

        await newUser.save();
        res.status(201).json(newUser); // Retorna o usuário criado
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar usuário', error: error.message });
    }
});

// Rota para atualizar um usuário
router.put('/update/:id', upload.single('photo'), async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        if (req.file) {
            // Atualiza a foto do usuário com o caminho do arquivo local
            user.photo = req.file.path; // Armazena o caminho da foto local
        }

        // Atualiza outros campos do usuário
        user.name = name || user.name;
        user.email = email || user.email;

        await user.save();
        res.status(200).json({ message: 'Usuário atualizado com sucesso!', user });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar o usuário', error });
    }
});

// Rota para atualizar a pontuação do usuário
router.put('/:id/score', async (req, res) => {
    console.log('Incoming Request Body:', req.body); // Log the entire request body

    const { id } = req.params;
    const scoreUpdate = Number(req.body.score); // Use 'score' from the request body

    // Validate score
    if (isNaN(scoreUpdate)) {
        console.log('Invalid score:', req.body.score); // Log the invalid score
        return res.status(400).json({ message: 'Pontuação deve ser um número' });
    }

    try {
        const user = await User.findById(id);
        if (!user) {
            console.log('User not found:', id); // Log if user is not found
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        // Update score
        user.score += scoreUpdate; // Update the user's score
        await user.save();

        console.log('Updated Score:', user.score); // Log the updated score
        res.status(200).json({ score: user.score });
    } catch (error) {
        console.error('Error updating score:', error); // Log any error that occurs
        res.status(500).json({ message: 'Erro ao atualizar a pontuação', error: error.message });
    }
});

// Rota para buscar progresso de um curso específico do usuário
router.get('/:userId/progress/:course', async (req, res) => {
    console.log('Params:', req.params);  // Log incoming parameters

    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            console.log('User not found');
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        console.log('User found:', user);  // Log the found user

        const courseProgress = user.courses.find(c => c.course === req.params.course);
        if (!courseProgress) {
            console.log('Course progress not found for course:', req.params.course);
            return res.status(404).json({ error: 'Progresso do curso não encontrado' });
        }

        res.json(courseProgress);
    } catch (error) {
        console.error('Error fetching course progress:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// Rota para atualizar o progresso de um curso específico do usuário
router.put('/:userId/progress/:course', async (req, res) => {
    const { userId, course } = req.params;
    const { progress, lessons } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        let courseProgress = user.courses.find(c => c.course === course);
        if (!courseProgress) {
            courseProgress = { course, progress: 0, lessons: [] };
            user.courses.push(courseProgress);
        }

        courseProgress.progress = progress !== undefined ? progress : courseProgress.progress;
        courseProgress.lessons = lessons !== undefined ? lessons : courseProgress.lessons;
        await user.save();

        res.status(200).json({ message: 'Progresso atualizado com sucesso!', user });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar progresso', error: error.message });
    }
});

// Endpoint para deletar um curso do usuário
router.delete('/:userId/delete-course/:course', async (req, res) => {
    const { userId, course } = req.params;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        user.courses = user.courses.filter(c => c.course !== course);
        await user.save();

        res.status(200).json({ message: 'Curso deletado com sucesso!' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar curso', error: error.message });
    }
});

// Endpoint para deletar uma lição de um curso
// Implementar a lógica aqui, se necessário

module.exports = router;
