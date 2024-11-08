import styles from './QuizResultsPage.module.css';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import emailjs from 'emailjs-com'; // Importação do EmailJS
import Header from './Header';

const QuizResultsPage = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { score, totalQuestions, answers, questions } = state;

    const percentage = (score / totalQuestions) * 100;
    const [points, setPoints] = useState(0);
    const [pointsAwarded, setPointsAwarded] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    useEffect(() => {
        if (percentage === 100) {
            setPoints(2000);
        } else if (percentage >= 90) {
            setPoints(1600);
        } else if (percentage >= 70) {
            setPoints(1400);
        } else if (percentage >= 60) {
            setPoints(1200);
        } else if (percentage >= 50) {
            setPoints(1000);
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const recipients = 'matheuspereiramartins1993@gmail.com, matheus.pereira@maxmilhas.com.br'; // Adicione os e-mails aqui

        const templateParams = {
            to_email: recipients,
            from_name: name,
            from_email: email,
            message: comment
        };

        emailjs.send(
            'service_jtzc7mg', // Substitua pelo seu Service ID
            'template_ijmx5cd', // Substitua pelo seu Template ID
            templateParams, // Passagem do objeto templateParams com as variáveis associadas
            '2HDsj1HNfrgCYTIS8' // Substitua pela sua Public Key
        )
        .then(() => {
            alert("Comentário enviado com sucesso!");
            setName('');
            setEmail('');
            setComment('');
        })
        .catch((error) => {
            console.error('Erro ao enviar comentário:', error);
            alert("Erro ao enviar o comentário. Tente novamente.");
        });
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
                                const isSelected = option === answers[index];
                                const isCorrect = option === item.correctAnswer;
                                return (
                                    <div key={idx} className={styles.option}>
                                        {isSelected ? (
                                            isCorrect ? (
                                                <span className={styles.correctIcon}>✔️</span>
                                            ) : (
                                                <span className={styles.incorrectIcon}>❌</span>
                                            )
                                        ) : (
                                            <span className={styles.optionLetter}>{String.fromCharCode(65 + idx)}. </span>
                                        )}
                                        <span className={styles.optionText}>{option}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
                    <div className={styles.feedbackSection}>
                <h3>Dúvida ou sugestões? Envie um comentário.</h3>
                <form onSubmit={handleSubmit} className={styles.feedbackForm}>
                    <label>
                        Nome:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </label>
                    <label>
                        E-mail:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </label>
                    <label>
                        Comentário:
                        <textarea value={comment} onChange={(e) => setComment(e.target.value)} required />
                    </label>
                    <button type="submit">Enviar</button>
                </form>
            </div>
            </div>
        </div>
    );
};

export default QuizResultsPage;
