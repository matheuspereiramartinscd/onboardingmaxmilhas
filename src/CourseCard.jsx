import styles from './CourseCard.module.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const CourseCard = ({ imageUrl, title, description, onStartCourse }) => {
    const navigate = useNavigate();

    return (
        <article className={styles.courseCard}>
            <img src={imageUrl} alt={`${title} course thumbnail`} className={styles.courseImage} />
            <div className={styles.courseContent}>
                <h3 className={styles.courseTitle}>{title}</h3>
                <p className={styles.courseDescription}>{description}</p>
            </div>
            <button
                className={styles.startButton}
                onClick={onStartCourse}
            >
                Iniciar
            </button>
        </article>
    );
};

export default CourseCard;
