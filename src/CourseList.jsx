import styles from './CourseList.module.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from './CourseCard';

// Definindo os cursos sem as lições inicialmente
const courses = [
    {
        id: 'cockpit',
        imageUrl: require('./assets/card-cockpit.jpg'),
        title: "Cockpit",
        description: "O cockpit é um sistema web especializado na emissão de passagens aéreas.",
    },
    {
        id: 'milhas',
        imageUrl: require('./assets/card-milhas.jpg'),
        title: "Milhas",
        description: "O curso de Milhas oferece uma introdução ao universo das milhas aéreas.",
    },
    {
        id: 'historia',
        imageUrl: require('./assets/card-historia.jpg'),
        title: "História da Empresa e Cultura",
        description: "O curso oferece uma visão detalhada da trajetória da Maxmilhas.",
    },
    {
        id: 'ofertantes',
        imageUrl: require('./assets/card-ofertantes.jpg'),
        title: "Ofertantes",
        description: "O curso aborda o papel crucial dos ofertantes no ecossistema da Maxmilhas.",
    },
    {
        id: 'tour_virtual',
        imageUrl: require('./assets/card-tour.jpg'),
        title: "Tour Virtual da Empresa",
        description: "O curso oferece uma experiência imersiva e interativa.",
    },
    {
        id: 'nocao',
        imageUrl: require('./assets/card-informatica.jpg'),
        title: "Noções de Informática",
        description: "O curso oferece uma base essencial para o uso eficiente de computadores.",
    },
];

const CourseList = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false); // Para controle de loading

    const handleStartCourse = async (id) => {
        setLoading(true); // Inicia o loading

        try {
            const response = await fetch(`http://localhost:5000/api/cursos/${id}/lições`); // URL da sua API
            if (!response.ok) {
                throw new Error("Erro ao buscar lições");
            }
            const lessons = await response.json(); // Supondo que a resposta seja um array de lições

            if (lessons.length > 0) {
                navigate(`/curso/${id}/${lessons[0].title}`); // Navega para a primeira lição
            } else {
                alert("Este curso está em construção. Por favor, volte mais tarde.");
            }
        } catch (error) {
            console.error("Erro ao carregar as lições:", error);
            alert("Não foi possível carregar as lições do curso. Tente novamente mais tarde.");
        } finally {
            setLoading(false); // Finaliza o loading
        }
    };

    return (
        <section className={styles.courseList}>
            <h2 className={styles.emissionsTitle}>Emissões</h2>
            <div className={styles.cardsContainer}>
                {courses.map((course) => (
                    <CourseCard
                        key={course.id}
                        imageUrl={course.imageUrl}
                        title={course.title}
                        description={course.description}
                        onStartCourse={() => handleStartCourse(course.id)} // Chama a função para iniciar o curso
                    />
                ))}
            </div>
            {loading && <p>Carregando...</p>} {/* Exibe uma mensagem de carregamento */}
        </section>
    );
};

export default CourseList;
