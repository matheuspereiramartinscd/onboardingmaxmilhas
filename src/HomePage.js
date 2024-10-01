import styles from './HomePage.module.css';
import React, { useState, useEffect } from 'react';
import CourseList from './CourseList';
import Header from './Header';
import { Link } from 'react-router-dom'; // Importar Link

const HomePage = () => {
    const [cursos, setCursos] = useState([]);

    // Defina a URL da API
    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/courses';

    useEffect(() => {
        console.log('Component HomePage loaded');
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => setCursos(data))
            .catch(error => console.error('Erro ao carregar cursos:', error));
    }, []);

    return (
        <div className={styles.homePage}>

            <h2 className={styles.courseTitle}>Cursos</h2>
            <hr className={styles.separator} />
            <CourseList cursos={cursos} />
        </div>
    );
};

export default HomePage;
