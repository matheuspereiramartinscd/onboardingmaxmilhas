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

    // Lógica para calcular pontos com base na porcentagem
    useEffect(() => {
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
            const pointsAlreadyAwarded = localStorage.getItem('pointsAwarded'); // Check if points were awarded

            if (userId && points > 0 && !pointsAwarded) {
                try {
                    // Use uma URL dinâmica com base no ambiente
                    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
                    await axios.put(`${apiUrl}/api/users/${userId}/score`, {
                        score: points // Enviar a quantidade de pontos
                    }, {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        },
                    });
                    console.log('Pontuação atualizada com sucesso!');
                    setPointsAwarded(true);
                    localStorage.setItem('pointsAwarded', 'true'); // Set flag in localStorage
                } catch (error) {
                    console.error('Erro ao atualizar a pontuação:', error);
                }
            }
        };

        updateUserPoints();
    }, [points, pointsAwarded]);

    const handleRetakeQuiz = () => {
        localStorage.removeItem('pointsAwarded'); // Reset the points awarded flag
        setPointsAwarded(false);
        navigate('/quiz'); // Navigate to the quiz page
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
                            {item.options.map((option, idx) => (
                                <div key={idx} className={styles.option}>
                                    {option[0] === answers[index] ? (
                                        answers[index] === item.correctAnswer ? (
                                            <span className={styles.correctIcon}>✔️</span>
                                        ) : (
                                            <span className={styles.incorrectIcon}>❌</span>
                                        )
                                    ) : (
                                        <span className={styles.optionLetter}>{option[0]}. </span>
                                    )}
                                    <span className={styles.optionText}>{option.slice(3)}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuizResultsPage;
