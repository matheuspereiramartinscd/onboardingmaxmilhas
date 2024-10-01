import styles from './CourseList.module.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from './CourseCard';

// Definindo os cursos com suas respectivas lições
const courses = [
    {
        id: 'cockpit',
        imageUrl: require('./assets/card-cockpit.jpg'),
        title: "Cockpit",
        description: "O cockpit é um sistema web especializado na emissão de passagens aéreas.",
        lessons: [
            { title: 'bem-vindo-curso-cockpit', completed: false },
        ],
    },
    {
        id: 'milhas',
        imageUrl: require('./assets/card-milhas.jpg'),
        title: "Milhas",
        description: "O curso de Milhas oferece uma introdução ao universo das milhas aéreas.",
        lessons: [
            { title: 'bem-vindo-curso-milhas', completed: false }
        ],
    },
    {
        id: 'historia',
        imageUrl: require('./assets/card-historia.jpg'),
        title: "História da Empresa e Cultura",
        description: "O curso oferece uma visão detalhada da trajetória da Maxmilhas.",
        lessons: [
            { title: 'bem-vindo-curso-historia', completed: false }
        ],
    },
    {
        id: 'ofertantes',
        imageUrl: require('./assets/card-ofertantes.jpg'),
        title: "Ofertantes",
        description: "O curso aborda o papel crucial dos ofertantes no ecossistema da Maxmilhas.",
        lessons: [
            { title: 'bem-vindo-curso-ofertantes', completed: false }
        ],
    },
    {
        id: 'tour_virtual',
        imageUrl: require('./assets/card-tour.jpg'),
        title: "Tour Virtual da Empresa",
        description: "O curso oferece uma experiência imersiva e interativa.",
        lessons: [
            { title: 'bem-vindo-curso-tour', completed: false }
        ],
    },
    {
        id: 'nocao',
        imageUrl: require('./assets/card-informatica.jpg'),
        title: "Noções de Informática",
        description: "O curso oferece uma base essencial para o uso eficiente de computadores.",
        lessons: [
            { title: 'bem-vindo-curso-nocao', completed: false }
        ],
    },
];

// Criando uma nova variável com os títulos dos cursos
const courseTitles = courses.map(course => course.title);

// Exportar ambas as variáveis
export { courses, courseTitles };

const CourseList = () => {
    const navigate = useNavigate();

    const handleStartCourse = (id) => {
        // Encontrar o curso correspondente
        const course = courses.find(course => course.id === id);
        if (course) {
            // Encontrar a primeira lição disponível
            const availableLesson = course.lessons[0]; // Pega a primeira lição, se existir

            if (availableLesson) {
                navigate(`/curso/${id}/${availableLesson.title}`); // Navegar para a primeira lição disponível
            } else {
                alert("Não há lições disponíveis para este curso.");
            }
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
                        onStartCourse={() => handleStartCourse(course.id)} // Chamar a função para iniciar o curso
                    />
                ))}
            </div>
        </section>
    );
};

export default CourseList;
