import styles from './QuizResultsPage.module.css';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

const QuizResultsPage = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { score, totalQuestions, answers, questions } = state;

    const percentage = (score / totalQuestions) * 100;
    const [points, setPoints] = useState(0);
    const [pointsAwarded, setPointsAwarded] = useState(false);

    useEffect(() => {
        // Calcular pontos com base na porcentagem
        if (percentage === 100) {
            setPoints(15000);
        } else if (percentage >= 90) {
            setPoints(9000);
        } else if (percentage >= 70) {
            setPoints(7000);
        } else if (percentage >= 60) {
            setPoints(6000);
        } else if (percentage >= 50) {
            setPoints(5000);
        } else {
            setPoints(0);
        }
    }, [percentage]);

    let message;
    if (percentage < 30) {
        message = "Infelizmente, sua pontuação foi muito baixa. É importante revisar o material e praticar mais para melhorar seu conhecimento.";
    } else if (percentage < 50) {
        message = "Você teve um desempenho abaixo do esperado. Considere dedicar mais tempo aos estudos para fortalecer sua compreensão.";
    } else if (percentage < 70) {
        message = "Bom trabalho! Você está no caminho certo, mas ainda há espaço para melhorias. Continue praticando e você verá progresso.";
    } else if (percentage < 90) {
        message = "Excelente! Você se destacou! Continue assim e busque sempre expandir seus conhecimentos.";
    } else {
        message = "Impressionante! Você é um verdadeiro expert! Mantenha o bom trabalho e inspire outros a aprender.";
    }

    useEffect(() => {
        const updateUserPoints = async () => {
            const userId = localStorage.getItem('userId');
            const pointsAlreadyAwarded = localStorage.getItem('pointsAwarded');

            if (userId && points > 0 && !pointsAwarded) {
                try {
                    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
                    await axios.put(`${apiUrl}/api/users/${userId}/score`, {
                        score: points
                    }, {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        },
                    });
                    console.log('Pontuação atualizada com sucesso!');
                    setPointsAwarded(true);
                    localStorage.setItem('pointsAwarded', 'true');
                } catch (error) {
                    console.error('Erro ao atualizar a pontuação:', error);
                }
            }
        };

        updateUserPoints();
    }, [points, pointsAwarded]);

    const handleRetakeQuiz = () => {
        localStorage.removeItem('pointsAwarded');
        setPointsAwarded(false);
        navigate('/quiz');
    };

    return (
        <div className={styles.resultsPage}>
            <div className={styles.titleContainer}>
                <h1 className={styles.newTitle}>Resultados do Quiz</h1>
                <hr className={styles.separator} />
            </div>
            <div className={styles.resultsContainer}>
                <div className={styles.scoreBox}>
                    <h2 className={styles.scoreText}>Pontuação: {score}/{totalQuestions}</h2>
                    <h3 className={`${styles.percentageText} ${percentage >= 50 ? styles.success : styles.failure}`}>
                        Acertos: {percentage.toFixed(2)}%
                    </h3>
                    <h3 className={styles.scorePoints}>
                        Você ganhou {points} pontos.
                    </h3>
                    <p className={styles.message}>{message}</p>
                    <button onClick={handleRetakeQuiz} className={styles.retakeButton}>Tentar Novamente</button>
                </div>
                {questions.map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.questionBlock} ${answers[index] === item.correctAnswer ? styles.correct : styles.incorrect}`}
                    >
                        <div className={styles.questTitle}>{index + 1}. {item.question}</div>
                        <div className={styles.options}>
                            {item.options.map((option, idx) => {
                                const isSelected = option === answers[index]; // Verifica se a opção foi selecionada
                                const isCorrect = option === item.correctAnswer; // Verifica se a opção é correta

                                return (
                                    <div key={idx} className={styles.option}>
                                        {isSelected ? (
                                            isCorrect ? (
                                                <span className={styles.correctIcon}>✔️</span> // Ícone verde para resposta correta
                                            ) : (
                                                <span className={styles.incorrectIcon}>❌</span> // Ícone vermelho para resposta errada
                                            )
                                        ) : (
                                            <span className={styles.optionLetter}>{String.fromCharCode(65 + idx)}. </span> // Letra da opção se não selecionada
                                        )}
                                        <span className={styles.optionText}>{option}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuizResultsPage;
