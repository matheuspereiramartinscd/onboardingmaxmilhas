import styles from './QuizCard.module.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuizCard = ({ imageUrl, title, title2, description, courseId, isDisabled, onStart }) => {
    const navigate = useNavigate();

    const handleStartClick = () => {
        if (!isDisabled) {
            onStart(); // Chama a função de rolagem
            navigate(`/quiz/${courseId}`); // Navega para a página do quiz
        }
    };

    return (
        <div className={styles.quizCard}>
            <img src={imageUrl} alt={`${title} course thumbnail`} className={styles.courseImage} />
            <div className={styles.courseContent}>
                <div className={styles.cardHeader}>
                    <h3 className={styles.cardTitle2}>{title2}</h3>
                </div>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDescription}>{description}</p>
                {isDisabled ? (
                    <button className={styles.disabledButton} disabled>
                        Complete o curso para iniciar o quiz.
                    </button>
                ) : (
                    <button className={styles.startButton} onClick={handleStartClick}>
                        Iniciar
                    </button>
                )}
            </div>
        </div>
    );
};

export default QuizCard;
