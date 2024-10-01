import styles from './CourseCard.module.css';
import React from 'react';

const CourseCard = ({ imageUrl, title, description, onStartCourse }) => {
    return (
        <article className={styles.courseCard}>
            <img src={imageUrl} alt={`${title} course thumbnail`} className={styles.courseImage} />
            <div className={styles.courseContent}>
                <h3 className={styles.courseTitle}>{title}</h3>
                <p className={styles.courseDescription}>{description}</p>
            </div>
            <button
                className={styles.startButton}
                onClick={onStartCourse} // Chama a função para iniciar o curso
            >
                Iniciar
            </button>
        </article>
    );
};

export default CourseCard;
