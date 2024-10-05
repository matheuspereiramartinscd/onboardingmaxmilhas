import styles from './CourseDetailPage.module.css';
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import screenImage from './assets/screen.jpg';
import screenImage2 from './assets/screenImage2.jpg';
import screenImage3 from './assets/screenImage3.jpg';
import screenImage4 from './assets/screenImage4.jpg';

const coursesData = {
    'cockpit': 'Cockpit',
    'milhas': 'Milhas',
    'historia': 'História da Empresa e Cultura',
    'ofertantes': 'Ofertantes',
    'tour_virtual': 'Tour Virtual da Empresa',
    'nocao': 'Noções de Informática',
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
                <h2 className={styles.contentParagraph}>Bem-vindo ao nosso sistema de gerenciamento de milhas!</h2>
                <p className={styles.contentParagraph}>Bem-vindo ao Curso de Cockpit! Neste treinamento, você aprenderá a dominar um sistema administrativo avançado, amplamente utilizado para o gerenciamento e a execução de transações de bilhetes aéreos. Ao longo do curso, você será guiado passo a passo nas funcionalidades que envolvem as principais companhias aéreas do Brasil, como Latam, Gol e Azul, desde a escolha de ofertantes até a substituição de cartões de crédito nas operações.

                    Nosso objetivo é capacitar você a operar o cockpit com eficiência, garantindo que seja possível realizar transações seguras e rápidas. Vamos explorar como iniciar reservas, gerenciar alterações e lidar com os processos mais críticos na venda e modificação de passagens aéreas. Além disso, você terá a oportunidade de aprender como personalizar e otimizar suas preferências, como a escolha de métodos de pagamento.

                    Este curso é ideal para profissionais que buscam expandir suas habilidades no setor de aviação ou qualquer pessoa interessada em compreender como funcionam os bastidores das transações aéreas no ambiente corporativo. Ao final do curso, você estará apto a utilizar o cockpit de forma segura e estratégica, proporcionando uma experiência diferenciada tanto para empresas quanto para clientes.

                    Preparado para decolar nessa jornada de conhecimento?</p>
                <img src={screenImage2} alt="Descrição da Imagem" className={styles.image} />
                <p className={styles.contentParagraph}> Ao final do Curso de Cockpit, você terá a oportunidade de reforçar seu aprendizado participando de um quiz exclusivo. Esse questionário foi desenvolvido para revisar os principais conceitos abordados durante o treinamento, garantindo que você tenha assimilado todas as informações essenciais sobre o sistema de transações de bilhetes aéreos.

                    O quiz será disponibilizado após a conclusão das aulas, cobrindo tópicos como o gerenciamento de transações nas companhias Latam, Gol e Azul, troca de cartões de crédito e a escolha de ofertantes. Ele também servirá como uma ferramenta de autoavaliação, permitindo que você teste seus conhecimentos de forma prática e interativa.

                    Ao concluir o quiz com sucesso, você estará ainda mais preparado para utilizar o cockpit com confiança no ambiente de trabalho.</p>
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
    'Prejuizos': {
        title: 'Prejuizos em emissoes',
        videoUrl: 'https://www.youtube.com/embed/AKA6HIa1TMQ',
        description: (
            <div>
                <h2 className={styles.contentParagraph}>Prejuizo em emissoes - como evitar</h2>
                <p className={styles.contentParagraph}>Para evitar erros no sistema Cockpit, utilizado para emissão de bilhetes aéreos, é importante seguir algumas boas práticas. Primeiramente, tenha atenção redobrada durante o processo de emissão, conferindo cada detalhe, como o nome do passageiro, destino, data e horário do voo. Revisar os dados inseridos antes de finalizar a emissão é essencial para evitar problemas. Além disso, é importante garantir que o sistema esteja atualizado e funcionando corretamente, pois erros técnicos podem causar falhas. Outro ponto é treinar adequadamente os usuários do sistema, assegurando que todos saibam como utilizá-lo corretamente. Evi</p>
                <img src={screenImage3} alt="Descrição da Imagem" className={styles.image} />
            </div>
        )
    },
    'Milhas': {
        title: 'Milhas',
        videoUrl: 'https://www.youtube.com/embed/8G_QpZ7uSRA',
        description: (
            <div>
                <h2 className={styles.contentParagraph}>O que são as milhas?</h2>
                <img src={screenImage4} alt="Descrição da Imagem" className={styles.image} />
                <p className={styles.contentParagraph}>Milhas aéreas são um tipo de recompensa oferecida por companhias aéreas para passageiros que participam de programas de fidelidade. Cada vez que uma pessoa viaja com uma companhia aérea participante ou utiliza serviços parceiros, como hotéis e cartões de crédito específicos, ela acumula milhas. Essas milhas podem ser trocadas por passagens aéreas, upgrades de classe, descontos em serviços e outros benefícios.

                    O sistema funciona como um incentivo para que os clientes continuem viajando com a mesma companhia aérea ou utilizem seus parceiros. O número de milhas acumuladas varia de acordo com a distância voada, a tarifa paga ou o tipo de serviço usado. Algumas companhias também permitem que as milhas sejam transferidas ou compradas, oferecendo maior flexibilidade aos clientes.</p>
            </div>
        )
    },
    'Milhas': {
        title: 'Milhas',
        videoUrl: 'https://www.youtube.com/embed/8G_QpZ7uSRA',
        description: (
            <div>
                <h2 className={styles.contentParagraph}>O que são as milhas?</h2>
                <img src={screenImage4} alt="Descrição da Imagem" className={styles.image} />
                <p className={styles.contentParagraph}>Milhas aéreas são um tipo de recompensa oferecida por companhias aéreas para passageiros que participam de programas de fidelidade. Cada vez que uma pessoa viaja com uma companhia aérea participante ou utiliza serviços parceiros, como hotéis e cartões de crédito específicos, ela acumula milhas. Essas milhas podem ser trocadas por passagens aéreas, upgrades de classe, descontos em serviços e outros benefícios.

                    O sistema funciona como um incentivo para que os clientes continuem viajando com a mesma companhia aérea ou utilizem seus parceiros. O número de milhas acumuladas varia de acordo com a distância voada, a tarifa paga ou o tipo de serviço usado. Algumas companhias também permitem que as milhas sejam transferidas ou compradas, oferecendo maior flexibilidade aos clientes.</p>
            </div>
        )
    },
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

    // Verifica se a rota atual contém "bem-vindo" após o caminho "/curso/"
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

                {/* Renderiza o botão apenas se a rota não contiver "bem-vindo" */}
                {!isWelcomeRoute && (
                    <button
                        className={styles.completeButton}
                        onClick={handleCompleteLesson}
                    >
                        Concluir Aula
                    </button>
                )}

                {/* Mensagem informando sobre o status do quiz */}
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
