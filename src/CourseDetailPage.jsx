import styles from './CourseDetailPage.module.css';
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import screenImage from './assets/screen.jpg';
import screenImage2 from './assets/screenImage2.jpg';

const coursesData = {
    'cockpit': 'Cockpit',
    'milhas': 'Milhas',
    'historia': 'História da Empresa e Cultura',
    'ofertantes': 'Ofertantes',
    'tour_virtual': 'Tour Virtual da Empresa',
    'nocao': 'Noções de Informática'
};

// Exemplo de lições predefinidas
const lessonsData = {
    'bem-vindo-curso-cockpit': {
        title: 'Bem-vindo ao curso de Cockpit!',
        videoUrl: 'https://www.youtube.com/embed/2mRlUWNIPzo',
        description: (
            <div>
                <p className={styles.contentParagraph}>Bem-vindo ao nosso sistema de gerenciamento de milhas!</p>
                <img src={screenImage2} alt="Descrição da Imagem" className={styles.image} />
            </div>
        )
    },
    'bem-vindo-curso-milhas': {
        title: 'Bem-vindo ao curso de Milhas',
        videoUrl: 'https://www.youtube.com/embed/2mRlUWNIPzo',
        description: (
            <div>
                <p className={styles.contentParagraph}>Bem-vindo ao curso de milhas!</p>
                <img src={screenImage2} alt="Descrição da Imagem" className={styles.image} />
            </div>
        )
    },
    'bem-vindo-curso-ofertantes': {
        title: 'Bem-vindo ao curso de ofertantes!',
        videoUrl: 'https://www.youtube.com/embed/2mRlUWNIPzo',
        description: (
            <div>
                <p className={styles.contentParagraph}>Bem-vindo ao curso de ofertantes!</p>
                <img src={screenImage2} alt="Descrição da Imagem" className={styles.image} />
            </div>
        )
    },
    'bem-vindo-curso-historia': {
        title: 'Bem-vindo ao curso de historia!',
        videoUrl: 'https://www.youtube.com/embed/2mRlUWNIPzo',
        description: (
            <div>
                <p className={styles.contentParagraph}>Bem-vindo ao curso de historia</p>
                <img src={screenImage2} alt="Descrição da Imagem" className={styles.image} />
            </div>
        )
    },
    'bem-vindo-curso-tour_virtual': {
        title: 'Bem-vindo ao curso de tour_virtual!',
        videoUrl: 'https://www.youtube.com/embed/2mRlUWNIPzo',
        description: (
            <div>
                <p className={styles.contentParagraph}>Bem-vindo ao curso Tour Virtual!</p>
                <img src={screenImage2} alt="Descrição da Imagem" className={styles.image} />
            </div>
        )
    },
    'bem-vindo-curso-nocao': {
        title: 'Bem-vindo ao curso de Noções de Informática',
        videoUrl: 'https://www.youtube.com/embed/2mRlUWNIPzo',
        description: (
            <div>
                <p className={styles.contentParagraph}>Bem-vindo ao curso Noções de Informática</p>
                <img src={screenImage2} alt="Descrição da Imagem" className={styles.image} />
            </div>
        )
    },
    /*'cockpit': {
        title: 'Cockpit',
        videoUrl: 'https://www.youtube.com/embed/watch?v=3Df-26ZtIPA',
        description: (
            <div>
                <p className={styles.contentParagraph}>Cockpit</p>
                <img src={screenImage2} alt="Descrição da Imagem" className={styles.image} />
            </div>
        )
    },
    'ofertantes': {
        title: 'Ofertantes',
        videoUrl: 'https://www.youtube.com/embed/watch?v=3Df-26ZtIPA',
        description: (
            <div>
                <p className={styles.contentParagraph}>Ofertantes</p>
                <img src={screenImage2} alt="Descrição da Imagem" className={styles.image} />
            </div>
        )
    },
    'comentarios': {
        title: 'Comentários',
        videoUrl: 'https://www.youtube.com/embed/watch?v=3Df-26ZtIPA',
        description: (
            <div>
                <p className={styles.contentParagraph}>Comentários</p>
                <img src={screenImage2} alt="Descrição da Imagem" className={styles.image} />
            </div>
        )
    },
    'prejuizos': {
        title: 'Prejuízos',
        videoUrl: 'https://www.youtube.com/embed/watch?v=3Df-26ZtIPA',
        description: (
            <div>
                <p className={styles.contentParagraph}>Prejuízos</p>
                <img src={screenImage2} alt="Descrição da Imagem" className={styles.image} />
            </div>
        )
    },
    */
};

const defaultLessons = [
    /*{ title: 'bem-vindo-curso', duration: 5, completed: false },
    { title: 'cockpit', duration: 4, completed: false },
    { title: 'ofertantes', duration: 4, completed: false },
    { title: 'comentarios', duration: 10, completed: false },
    { title: 'prejuizos', duration: 10, completed: false },*/
];

const CourseDetailPage = () => {
    const { id, lesson } = useParams();
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);
    const [lessons, setLessons] = useState(defaultLessons);
    const [lessonData, setLessonData] = useState({});

    useEffect(() => {
        const fetchUserProgress = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/users/${localStorage.getItem('userId')}/progress/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                const { progress, lessons } = response.data;
                setProgress(progress);
                setLessons(lessons.length > 0 ? lessons : defaultLessons);
            } catch (error) {
                console.error('Erro ao buscar progresso do usuário:', error);
                setLessons(defaultLessons);
            }
        };

        const fetchLessonData = () => {
            const lessonInfo = lessonsData[lesson] || {
                title: lesson.replace(/-/g, ' ').toUpperCase(),
                videoUrl: '',
                description: 'Esta é uma lição recém-criada. Em breve, mais informações estarão disponíveis.'
            };
            setLessonData(lessonInfo);
        };

        fetchUserProgress();
        fetchLessonData();
    }, [id, lesson]);

    const handleCompleteLesson = async () => {
        const currentIndex = lessons.findIndex(l => l.title === lesson);
        if (currentIndex < 0 || currentIndex >= lessons.length) {
            console.log('Aula inválida.');
            return;
        }

        // Verifique se a aula já foi completada
        if (lessons[currentIndex].completed) {
            console.log('Esta aula já foi concluída.');
            return; // Saia se a aula já estiver completa
        }

        const updatedLessons = lessons.map((l, index) =>
            index === currentIndex ? { ...l, completed: true } : l
        );

        setLessons(updatedLessons);
        const progressIncrement = 100 / lessons.length;

        try {
            // Obtenha o progresso e o score atuais do usuário
            const { data: { progress: currentProgress, score: currentScore } } = await axios.get(`${process.env.REACT_APP_API_URL}/api/users/${localStorage.getItem('userId')}/progress/${id}`, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });

            // Adicione 50 pontos ao score usando o endpoint apropriado
            await axios.put(`${process.env.REACT_APP_API_URL}/api/users/add-points/${localStorage.getItem('userId')}`, {
                points: 50
            }, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });

            // Calcule o novo progresso
            const newProgress = Math.min(currentProgress + progressIncrement, 100);
            localStorage.setItem('userProgress', JSON.stringify({ ...JSON.parse(localStorage.getItem('userProgress')) || {}, [id]: newProgress }));

            await axios.put(`${process.env.REACT_APP_API_URL}/api/users/${localStorage.getItem('userId')}/progress/${id}`, {
                progress: newProgress,
                lessons: updatedLessons
            }, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });

            setProgress(newProgress);

            if (newProgress === 100) {
                console.log(`Quiz do curso ${id} desbloqueado!`);
            }

            if (currentIndex + 1 < lessons.length) {
                const nextLesson = lessons[currentIndex + 1].title;
                navigate(`/curso/${id}/${nextLesson}`);
                window.scrollTo(0, 0);
            }
        } catch (error) {
            console.error('Erro ao atualizar progresso:', error);
        }
    };

    const handleResetProgress = async () => {
        const resetLessons = defaultLessons.map(lesson => ({ ...lesson, completed: false }));
        setLessons(resetLessons);
        setProgress(0);

        localStorage.setItem('userProgress', JSON.stringify({ ...JSON.parse(localStorage.getItem('userProgress')) || {}, [id]: 0 }));

        try {
            await axios.put(`${process.env.REACT_APP_API_URL}/api/users/${localStorage.getItem('userId')}/progress/${id}`, {
                progress: 0,
                lessons: resetLessons
            }, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });
        } catch (error) {
            console.error('Erro ao reiniciar progresso:', error);
        }
    };

    const pageTitle = coursesData[id] || 'Curso desconhecido';

    return (
        <div className={styles.courseDetail}>

            <h2 className={styles.courseTitle}>{pageTitle}</h2>
            <hr className={styles.separator} />
            <div className={styles.contentContainer}>
                <div className={styles.videoContainer}>
                    <h2 className={styles.lessonTitle}>{lessonData.title}</h2>
                    {lessonData.videoUrl && (
                        <iframe
                            src={lessonData.videoUrl}
                            title="Video Aula"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    )}
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.progressPanel}>
                        <h2 className={styles.progressLabel}>Progresso do curso</h2>
                        <div className={styles.progressBarContainer}>
                            <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
                        </div>
                        <div className={styles.progressPercentage}>{Math.round(progress)}% concluído</div>
                        <button className={styles.resetButton} onClick={handleResetProgress}>Reiniciar Progresso</button>
                    </div>

                    <div className={styles.checklist}>
                        <h2>Aulas</h2>
                        <hr className={styles.checklistSeparator} />
                        {lessons.map((lesson, index) => (
                            <div key={index} className={styles.lessonItem}>
                                <Link to={`/curso/${id}/${lesson.title}`}>
                                    {lesson.completed ? '✔️' : '⚪️'} {lessonsData[lesson.title]?.title || lesson.title.replace(/-/g, ' ').toUpperCase()}
                                </Link>
                                <div className={styles.durationBox}>{lesson.duration}m</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{lessonData.title}</h1>
                <p className={styles.description}>
                    {lessonData.description}
                </p>

                <button
                    className={styles.completeButton}
                    onClick={handleCompleteLesson}
                >
                    Concluir Aula
                </button>

                {/* Mensagem informando sobre o status do quiz */}
                {progress < 100 ? (
                    <p style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '20px',
                        fontSize: '16px',
                        color: 'grey'
                    }}>
                        Complete o curso para acessar o quiz. Progresso atual: {Math.round(progress)}%.
                    </p>
                ) : (
                    <p style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '20px',
                        fontSize: '16px',
                        color: 'green'
                    }}>
                        Parabéns! Você completou o curso. O quiz foi desbloqueado!
                    </p>
                )}
            </div>
        </div>
    );
};

export default CourseDetailPage;
