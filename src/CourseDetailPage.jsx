import styles from './CourseDetailPage.module.css';
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import screenImage from './assets/screen.jpg';
import screenImage2 from './assets/screenImage2.jpg';
import screenImage3 from './assets/screenImage3.jpg';
import screenImage4 from './assets/screenImage4.jpg';
import cockpit01 from './assets/Cursos/Cockpit/cockpit01.jpg';
import cockpit02 from './assets/Cursos/Cockpit/cockpit02.jpg';

const coursesData = {
    'cockpit': 'Cockpit',
    'milhas': 'Milhas',
    'historia': 'História da Empresa e Cultura',
    'ofertantes': 'Ofertantes',
    'tour_virtual': 'Tour Virtual da Empresa',
    'nocao': 'Noções de Informática',
    'prejuizos': 'Prejuizos',
    'emissoes': 'Emissões',
    'emissoeslatam': 'Emissões na LATAM',
    'emissoesgol': 'Emissões na Gol',
    'emissoesazul': 'Emissões na Azul',
    'ferramentas': 'Ferramentas Auxiliares',

};

const lessonsData = {
    'bem-vindo-curso-cockpit': {
        title: 'Bem-vindo ao curso de Cockpit!',
        videoUrl: 'https://www.youtube.com/embed/9HqJlhF4mDs',
        description: (
            <div>
                <h1 style={{ marginTop:'10px', marginBottom:'40px' }}>Bem-vindo ao Curso de Cockpit da Maxmilhas!</h1>
<p>Estamos muito felizes em tê-lo conosco neste curso dedicado ao sistema Cockpit da Maxmilhas, uma plataforma inovadora que transforma a maneira como as passagens aéreas são emitidas e gerenciadas. O Cockpit é uma ferramenta administrativa essencial que conecta ofertantes de milhas e clientes, facilitando todo o processo de emissão de bilhetes aéreos.</p>

<p style={{ marginTop:'40px', marginBottom:'40px' }}>Durante este curso, você terá a oportunidade sobre as funcionalidades e nos recursos que o Cockpit oferece. O objetivo é garantir que você tenha um entendimento claro de como navegar pelo sistema e aproveitar ao máximo suas capacidades. Exploraremos desde a compra de passagens, passando pela gestão de transações, até o uso eficiente das milhas disponíveis.</p>

<h2 style={{ marginTop:'40px', marginBottom:'40px' }}>O que esperar do curso</h2>
<p>Ao longo das aulas, vamos abordar tópicos fundamentais, incluindo:</p>
<ul style={{ listStyleType: 'disc', marginLeft: '80px', marginTop:'40px', marginBottom:'40px' }}>
    <li><strong>Introdução ao Sistema Cockpit:</strong> Compreenderemos a interface do sistema, suas principais funcionalidades e como acessá-lo corretamente.</li>
    <li><strong>Emissão de Passagens:</strong> Aprenderemos o processo completo de emissão de passagens aéreas, desde a criação de transações até a finalização com o envio do e-ticket ao cliente.</li>
    <li><strong>Gerenciamento de Ofertas e Cancelamentos:</strong> Discutiremos como aprovar ofertas de venda de milhas, bem como os procedimentos necessários para cancelar passagens quando necessário.</li>
    <li><strong>Busca e Análise de Ofertantes:</strong> Veremos como encontrar ofertantes disponíveis e analisar suas propostas, sempre visando a melhor viabilidade e lucro para as transações.</li>
    <li><strong>Verificação de Passagens Emitidas:</strong> Entenderemos como checar as passagens já emitidas pelo sistema e acompanhar o status das transações.</li>
</ul>


    <h2>Cockpit</h2>
    <img style={{ marginTop:'10px', marginBottom:'40px' }} className={styles.image} src={cockpit01} alt="Imagem do Sistema Cockpit 1"></img>
    <img style={{ marginTop:'40px', marginBottom:'40px' }} className={styles.image} src={cockpit02} alt="Imagem do Sistema Cockpit 1"></img>       
<p style={{ marginTop:'10px', marginBottom:'40px' }}>Este curso é projetado para ser interativo e prático, com exemplos reais e exercícios que ajudarão a solidificar seu aprendizado. Ao final do curso, você estará apto a utilizar o sistema Cockpit com confiança, otimizando suas operações e melhorando a experiência dos clientes da Maxmilhas.</p>

<p style={{ marginTop:'40px', marginBottom:'40px' }}>Prepare-se para uma jornada de aprendizado repleta de insights e práticas valiosas. Estamos ansiosos para começar essa experiência com você e ajudá-lo a se tornar um expert no uso do Cockpit da Maxmilhas!</p>
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
    'bem-vindo-curso-emissoes': {
        title: 'Bem-vindo ao curso de Emissões',
        videoUrl: 'https://www.youtube.com/embed/2mRlUWNIPzo',
        description: (
            <div>
                <p className={styles.contentParagraph}>Bem-vindo ao curso de emissões</p>
                <img src={screenImage2} alt="Descrição da Imagem" className={styles.image} />
            </div>
        )
    },
    'bem-vindo-curso-emissoeslatam': {
        title: 'Bem-vindo ao curso de emissões LATAM',
        videoUrl: 'https://www.youtube.com/embed/2mRlUWNIPzo',
        description: (
            <div>
                <p className={styles.contentParagraph}>Bem-vindo ao curso de emissões LATAM</p>
                <img src={screenImage2} alt="Descrição da Imagem" className={styles.image} />
            </div>
        )
    },
    'bem-vindo-curso-emissoesgol': {
        title: 'Bem-vindo ao curso de emissões Gol',
        videoUrl: 'https://www.youtube.com/embed/2mRlUWNIPzo',
        description: (
            <div>
                <p className={styles.contentParagraph}>Bem-vindo ao curso de emissões Gol</p>
                <img src={screenImage2} alt="Descrição da Imagem" className={styles.image} />
            </div>
        )
    },
    'bem-vindo-curso-emissoesazul': {
        title: 'Bem-vindo ao curso de emissões Azul',
        videoUrl: 'https://www.youtube.com/embed/2mRlUWNIPzo',
        description: (
            <div>
                <p className={styles.contentParagraph}>Bem-vindo ao curso de emissões Azul</p>
                <img src={screenImage2} alt="Descrição da Imagem" className={styles.image} />
            </div>
        )
    },
    'bem-vindo-curso-ferramentas': {
        title: 'Bem-vindo ao curso de Ferramentas Auxiliares',
        videoUrl: 'https://www.youtube.com/embed/2mRlUWNIPzo',
        description: (
            <div>
                <p className={styles.contentParagraph}>Bem-vindo ao curso de ferramentas auxiliares</p>
                <img src={screenImage2} alt="Descrição da Imagem" className={styles.image} />
            </div>
        )
    },
    'bem-vindo-curso-prejuizos': {
        title: 'Bem-vindo ao curso de Prejuizos',
        videoUrl: 'https://www.youtube.com/embed/2mRlUWNIPzo',
        description: (
            <div>
                <p className={styles.contentParagraph}>Bem-vindo ao curso de Prejuizos</p>
                <img src={screenImage2} alt="Descrição da Imagem" className={styles.image} />
            </div>
        )
    },
};


const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

const CourseDetailPage = () => {
    const { id, lesson } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [progress, setProgress] = useState(0);
    const [lessons, setLessons] = useState([]);
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

                if (lessons && lessons.length > 0) {
                    setLessons(lessons);
                }

                setProgress(progress);
            } catch (error) {
                console.error('Erro ao buscar progresso do usuário:', error);
                setLessons([]);
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

        if (lessons[currentIndex].completed) {
            console.log('Esta aula já foi concluída.');
            return;
        }

        const updatedLessons = lessons.map((l, index) =>
            index === currentIndex ? { ...l, completed: true } : l
        );

        setLessons(updatedLessons);
        const progressIncrement = 100 / lessons.length;

        try {
            const { data: { progress: currentProgress } } = await axios.get(`${process.env.REACT_APP_API_URL}/api/users/${localStorage.getItem('userId')}/progress/${id}`, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });

            await axios.put(`${process.env.REACT_APP_API_URL}/api/users/add-points/${localStorage.getItem('userId')}`, {
                points: 50
            }, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });

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
        const resetLessons = lessons.map(lesson => ({ ...lesson, completed: false }));
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

    const isWelcomeRoute = location.pathname.match(/\/curso\/[^/]*\/bem-vindo/);

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
                        {lessons.map((lesson) => (
                            <div key={lesson.title} className={styles.lessonItem}>
                                <Link to={`/curso/${id}/${lesson.title}`}>
                                    {lesson.completed ? '✔️' : '⚪️'} {capitalizeFirstLetter(lessonsData[lesson.title]?.title || lesson.title.replace(/-/g, ' ').toUpperCase())}
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

                {!isWelcomeRoute && (
                    <button
                        className={styles.completeButton}
                        onClick={handleCompleteLesson}
                    >
                        Concluir Aula
                    </button>
                )}

                <div className={styles.progressContainer}>
                    {progress < 100 ? (
                        <p className={styles.progressMessage}>
                            Complete o curso para acessar o quiz. Progresso atual: {Math.round(progress)}%.
                        </p>
                    ) : (
                        <p className={styles.quizUnlockedMessage}>
                            Parabéns! Você completou o curso. O quiz foi desbloqueado!
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CourseDetailPage;