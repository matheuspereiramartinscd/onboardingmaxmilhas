import styles from './QuizPage.module.css';
import React, { useState, useEffect } from 'react';
import QuizCard from './QuizCard';

// Função para remover acentos e normalizar o título (apenas para controle interno)
const normalizeTitle = (title) => {
    return title
        .normalize('NFD') // Decompõe caracteres com acentos
        .replace(/[\u0300-\u036f]/g, '') // Remove os acentos
        .toLowerCase()
        .replace(/ /g, '_'); // Substitui espaços por underscores
};

const courses = [
    {
        id: 1,
        imageUrl: require('./assets/card-cockpit.jpg'),
        title: "Cockpitsystem",
        description: "Questões objetivas sobre o cockpit.",
        title2: "Cockpit",
    },
    {
        id: 2,
        imageUrl: require('./assets/card-milhas.jpg'),
        title: "Milhas",
        description: "Questões objetivas sobre milhas.",
        title2: "Milhas",
    },
    {
        id: 3,
        imageUrl: require('./assets/card-historia.jpg'),
        title: "Historia",
        description: "Questões sobre a história da empresa e sua cultura.",
        title2: "História da Empresa e Cultura",
    },
    {
        id: 4,
        imageUrl: require('./assets/card-ofertantes.jpg'),
        title: "Ofertantes",
        description: "Questões sobre o papel dos ofertantes na Maxmilhas.",
        title2: "Ofertantes",
    },
    {
        id: 5,
        imageUrl: require('./assets/card-tour.jpg'),
        title: "Tour_virtual",
        description: "Questões sobre o tour virtual da empresa.",
        title2: "Tour Virtual da Empresa",
    },
    {
        id: 6,
        imageUrl: require('./assets/card-informatica.jpg'),
        title: "Nocao",
        description: "Questões sobre noções básicas de informática.",
        title2: "Noções de Informática",
    },
    {
        id: 7,
        imageUrl: require('./assets/card-emissoes.jpg'),
        title: "Emissoes",
        description: "Questões sobre noções básicas de Emissões.",
        title2: "Emissões",
    },
    {
        id: 8,
        imageUrl: require('./assets/card-emissoeslatam2.jpg'),
        title: "Emissoeslatam",
        description: "Questões sobre noções básicas de Emissões LATAM.",
        title2: "Emissões LATAM",
    },
    {
        id: 9,
        imageUrl: require('./assets/card-emissoesgol2.jpg'),
        title: "Emissoesgol",
        description: "Questões sobre noções básicas de Emissões Gol.",
        title2: "Emissões na Gol",
    },
    {
        id: 10,
        imageUrl: require('./assets/card-emissoesazul2.jpg'),
        title: "Emissoesazul",
        description: "Questões sobre noções básicas de Emissões Azul.",
        title2: "Emissões Azul",
    },
    {
        id: 11,
        imageUrl: require('./assets/card-ferramentas.jpg'),
        title: "Ferramentas",
        description: "Questões sobre noções básicas de Ferramentas Auxiliares.",
        title2: "Ferramentas Auxiliares",
    },
];

const QuizPage = () => {
    const [progress, setProgress] = useState({}); // Armazenar progresso de cada curso

    useEffect(() => {
        // Recupera o progresso de cada curso do localStorage e normaliza as chaves
        const storedProgress = JSON.parse(localStorage.getItem('userProgress')) || {};

        // Criar um objeto de progresso com as chaves normalizadas
        const normalizedProgress = Object.keys(storedProgress).reduce((acc, key) => {
            const normalizedKey = normalizeTitle(key); // Normaliza as chaves do localStorage
            acc[normalizedKey] = storedProgress[key];
            return acc;
        }, {});

        setProgress(normalizedProgress); // Define o progresso normalizado
    }, []);

    // Função para verificar se o quiz está bloqueado
    const isQuizDisabled = (courseId) => {
        return !progress[courseId] || progress[courseId] < 100; // Retorna verdadeiro se o quiz deve estar desativado
    };

    // Função para rolar para o topo da página
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={styles.quizPage}>
            <h2 className={styles.pageTitle}>Quiz</h2>
            <hr className={styles.separator} />
            <div className={styles.quizContainer}>
                <h2 className={styles.pageTitle2}>Testes de conhecimento</h2>
                <div className={styles.cardContainer}>
                    {courses.map(course => {
                        const courseId = normalizeTitle(course.title); // Normaliza o título para desbloqueio
                        return (
                            <QuizCard
                                key={course.id}
                                imageUrl={course.imageUrl}
                                title={course.title} // Exibe o título original
                                description={course.description}
                                title2={course.title2}
                                courseId={courseId} // Passa a propriedade courseId para controle de desbloqueio
                                isDisabled={isQuizDisabled(courseId)} // Passa a propriedade de bloqueio
                                onStart={scrollToTop} // Passa a função de rolagem
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default QuizPage;
