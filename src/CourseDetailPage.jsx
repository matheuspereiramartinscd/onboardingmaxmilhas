import styles from './CourseDetailPage.module.css';
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import screenImage from './assets/screen.jpg';
import screenImage2 from './assets/screenImage2.jpg';
import screenImage3 from './assets/screenImage3.jpg';
import screenImage4 from './assets/screenImage4.jpg';
import cockpittelalogin from './assets/Cursos/Cockpit/cockpittelalogin.jpg';
import cockpittelainicial from './assets/Cursos/Cockpit/cockpittelainicial.jpg';
import cockpitmenulateral from './assets/Cursos/Cockpit/cockpitmenulateral.png';
import bemvindocockpit from './assets/Cursos/Cockpit/bemvindocockpit.jpg';
import cockpiticones from './assets/Cursos/Cockpit/cockpiticones.png';


const coursesData = {
    'cockpitsystem': 'Cockpit',
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
        videoUrl: 'https://www.youtube.com/embed/5pvnt5PhiWs',
        description: (
                        <div>
                            <h1 style={{ marginTop:'10px', marginBottom:'30px' }}>Olá! </h1>
                            <p>Estamos muito felizes em tê-lo conosco neste curso dedicado ao sistema Cockpit da Maxmilhas, uma plataforma inovadora que transforma a maneira como as passagens aéreas são emitidas e gerenciadas. O Cockpit é uma ferramenta administrativa essencial que conecta ofertantes de milhas e clientes, facilitando todo o processo de emissão de bilhetes aéreos.</p>

                            <p style={{ marginTop:'30px', marginBottom:'30px' }}>Durante este curso, você terá a oportunidade sobre as funcionalidades e nos recursos que o Cockpit oferece. O objetivo é garantir que você tenha um entendimento claro de como navegar pelo sistema e aproveitar ao máximo suas capacidades. Exploraremos desde a compra de passagens, passando pela gestão de transações, até o uso eficiente das milhas disponíveis.</p>

                            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>O que esperar do curso</h2>
                            <p>Ao longo das aulas, vamos abordar tópicos fundamentais, incluindo:</p>
                            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                                <li><strong>Introdução ao aistema Cockpit:</strong> Compreenderemos a interface do sistema, suas principais funcionalidades e como acessá-lo corretamente.</li>
                                <li><strong>Emissão de passagens:</strong> Aprenderemos o processo completo de emissão de passagens aéreas, desde a criação de transações até a finalização com o envio do e-ticket ao cliente.</li>
                                <li><strong>Cancelamentos:</strong> Discutiremos os procedimentos necessários para cancelar passagens quando necessário.</li>
                                <li><strong>Busca e snálise de ofertantes:</strong> Veremos como encontrar ofertantes disponíveis e analisar suas propostas, sempre visando a melhor viabilidade e lucro para as transações.</li>
                            </ul>


                            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={bemvindocockpit} alt="Imagem do Sistema Cockpit 1"></img> 
                            <p style={{ marginTop:'10px', marginBottom:'30px' }}>Este curso é projetado para ser interativo e prático, com exemplos reais e exercícios que ajudarão a solidificar seu aprendizado. Ao final do curso, você estará apto a utilizar o sistema Cockpit com confiança, otimizando suas operações e melhorando a experiência dos clientes da Maxmilhas.</p>

                            <p style={{ marginTop:'30px', marginBottom:'30px' }}>Prepare-se para uma jornada de aprendizado repleta de insights e práticas valiosas. Estamos ansiosos para começar essa experiência com você e ajudá-lo a se tornar um expert no uso do Cockpit da Maxmilhas!</p>
                        </div>
                     )
                },
'bem-vindo-curso-emissoes': {
    title: 'Bem-vindo ao curso de emissões!',
    videoUrl: 'https://www.youtube.com/embed/5pvnt5PhiWs',
    description: (
        <div>
            <h1 style={{ marginTop:'10px', marginBottom:'30px' }}>Olá! </h1>
            <p>Estamos muito felizes em tê-lo conosco neste curso dedicado ao processo de emissões da Maxmilhas, onde você aprenderá como gerenciar e realizar a emissão de passagens aéreas de forma prática e eficiente.</p>

            <p style={{ marginTop:'30px', marginBottom:'30px' }}>Este curso foi desenvolvido para equipá-lo com o conhecimento necessário para operar todas as etapas de uma emissão, desde a verificação de voos até o cancelamento de bilhetes quando necessário.</p>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>O que esperar do curso</h2>
            <p>Durante este curso, abordaremos os seguintes tópicos:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Introdução às emissões:</strong> Entenderemos o que envolve o processo de emissão, desde a análise dos dados até a conclusão da transação.</li>
                <li><strong>Emissão manual:</strong> Exploraremos o procedimento de emissões manuais, quando necessário, garantindo que você saiba como proceder caso o sistema não conclua automaticamente.</li>
                <li><strong>Cancelamento de e-tickets:</strong> Aprenderemos como cancelar um bilhete de maneira adequada e os motivos pelos quais o cancelamento pode ser necessário, como erros de emissão, voo indisponível ou solicitação do passageiro.</li>
                <li><strong>Adição de bagagem:</strong> Você saberá como adicionar bagagens extras em uma transação diretamente no site da companhia aérea e como informar o valor da bagagem no sistema.</li>
                <li><strong>Validade das milhas:</strong> Discutiremos como verificar e gerenciar a validade das milhas de um cliente, evitando que milhas expiradas afetem as emissões.</li>
                <li><strong>Ferramentas de suporte:</strong> Veremos como utilizar os recursos auxiliares, como Cockpit, para otimizar suas operações e garantir uma melhor experiência para o cliente.</li>
            </ul>

            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src='./assets/Cursos/Cockpit/cursocockpit00.jpg' alt="Imagem do sistema Cockpit"></img>

            <p style={{ marginTop:'10px', marginBottom:'30px' }}>Este curso foi desenhado para ser prático e envolvente, com exercícios e exemplos reais que o ajudarão a fixar o conteúdo.</p>

            <p style={{ marginTop:'30px', marginBottom:'30px' }}>Ao final, você estará preparado para lidar com todas as etapas do processo de emissão, seja para resolver problemas de voo, ajustar milhas ou cancelar transações quando necessário.</p>

            <p style={{ marginTop:'30px', marginBottom:'30px' }}>Estamos animados para compartilhar esse conhecimento com você e ajudá-lo a se tornar um especialista no processo de emissões da Maxmilhas. Prepare-se para uma experiência de aprendizado rica e dinâmica!</p>
        </div>
    )
},


    'Cockpit': {
        title: 'Cockpit',
        videoUrl: 'https://www.youtube.com/embed/5pvnt5PhiWs',
        description: (
                        <div>
                            <h1 style={{ marginTop:'10px', marginBottom:'30px' }}>O que é o Cockpit? </h1>
                            <p>O Cockpit é um sistema administrativo utilizado pela Maxmilhas para realizar a emissão de bilhetes aéreos utilizando milhas vendidas pelos ofertantes para compradores e clientes da Maxmilhas. Neste sistema, é possível:
                            </p>
                            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'40px', marginBottom:'30px' }}>
                                <li><strong>Emitir Bilhetes Aéreos:</strong> Gerar passagens aéreas com base nas milhas disponibilizadas pelos ofertantes, facilitando o processo de compra para os clientes.</li>
                                <li><strong>Gerenciar Transações:</strong> Acompanhar e gerenciar todas as transações de emissão, desde a compra até a entrega do e-ticket ao cliente.
                                </li>
                                <li><strong>Selecionar Ofertantes:</strong> Escolher entre diferentes vendedores de milhas, analisando a viabilidade e o lucro de cada transação para otimizar as ofertas.</li>
                                <li><strong>Realizar Cancelamentos:</strong> Efetuar o cancelamento de passagens já emitidas, caso necessário.</li>
                                <li><strong>Buscar Ofertantes Disponíveis:</strong> Encontrar ofertantes com milhas disponíveis para as emissões, permitindo uma operação mais ágil.
                                </li>
                                <li><strong>Verificar Passagens Emitidas:</strong> Checar o status e os detalhes das passagens já emitidas pelo sistema, garantindo um controle eficaz.
                                </li>
                                <li><strong>Acessar Múltiplas Companhias Aéreas:</strong> Emitir passagens para diversas companhias aéreas, incluindo Latam, Gol, Azul, TAP, OTA e outras, ampliando as opções para os clientes.
                                </li>
                                <li><strong>Login Seguro:</strong> Acessar o sistema de forma segura utilizando e-mail corporativo, garantindo que apenas colaboradores autorizados possam gerenciar as operações.
                                </li>
                            </ul>

                            <h2>Tela de Login:</h2>
                            <p style={{ marginTop:'10px', marginBottom:'30px' }}>Na tela de login é necessário utilizar e-mail corporativo das maxmilhas para acessar o sistema, garantindo que apenas colaboradores autorizados possam gerenciar as transações e processos de emissão de passagens.
                            </p>
                            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cockpittelalogin} alt="Imagem do Sistema Cockpit 1"></img>
                            <h2>Tela inicial:</h2>
                            <p style={{ marginTop:'10px', marginBottom:'30px' }}>Na tela inicial do sistema Cockpit, o colaborador tem acesso a um menu lateral com diversas opções, como Cockpit, Inserção de crédito, Cadastros, Clientes, Milhas, entre outras. Esse menu permite a navegação entre as principais funcionalidades do sistema. As informações e funcionalidades correspondentes a cada item selecionado no menu são exibidas no painel à direita.
                            </p>
                            <img style={{ marginTop:'30px', marginBottom:'30px' }} className={styles.image} src={cockpittelainicial} alt="Imagem do Sistema Cockpit 1"></img>       
                     
                        </div>
                     )
                },
    'Menu lateral': {
        title: 'Menu lateral',
        videoUrl: 'https://www.youtube.com/embed/5pvnt5PhiWs',
        description: (
                        <div>
                            <h1 style={{ marginTop:'10px', marginBottom:'30px' }}>Menu lateral</h1>
                                <p>No painel esquerdo do Cockpit, é possível encontrar o menu lateral que apresenta diversas opções, facilitando a navegação pelo sistema.
                            </p>
                            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cockpitmenulateral} alt="Imagem do Sistema Cockpit 1"></img>
                            <p style={{ marginTop:'10px', marginBottom:'30px' }}>As opções disponíveis incluem:</p>
                            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px', }}>
                             
                                <li><strong>Cockpit:</strong> Acesso à tela principal do sistema, onde são gerenciadas as atividades.</li>
                                <li><strong>Inserção de Crédito:</strong> Função para adicionar créditos ao sistema, possibilitando a realização de transações.</li>
                                <li><strong>Cadastros:</strong> Área para gerenciar cadastros de clientes, ofertantes e outros dados relevantes.</li>
                                <li><strong>Clientes:</strong> Visualização e gerenciamento das informações dos clientes da Maxmilhas.</li>
                                <li><strong>Milhas:</strong> Consulta e gestão das milhas disponíveis e suas respectivas transações.</li>
                                <li><strong>Criar Transação:</strong> Iniciar o processo de emissão de passagens aéreas.</li>
                                <li><strong>E-mail Marketing:</strong> Gerenciar campanhas de e-mail marketing direcionadas aos clientes.</li>
                                <li><strong>Cupom:</strong> Gerenciar cupons de desconto e promoções disponíveis.</li>
                                <li><strong>Status dos Voos:</strong> Acompanhar o status atual dos voos das companhias aéreas.</li>
                                <li><strong>Relatórios:</strong> Acesso a relatórios detalhados sobre transações e atividades do sistema.</li>
                                <li><strong>Indicadores:</strong> Visualização de indicadores de desempenho e métricas relevantes.</li>
                                <li><strong>Cartões de Crédito:</strong> Gerenciar os cartões de crédito utilizados para as transações.</li>
                                <li><strong>Ofertantes:</strong> Consultar e gerenciar os ofertantes disponíveis para as transações.</li>
                                <li><strong>Cancelamentos:</strong> Efetuar cancelamentos de passagens emitidas quando necessário.</li>
                            </ul>
                            <p style={{ marginTop:'10px', marginBottom:'20px' }}>Para realizar emissões no sistema Cockpit, as opções utilizadas serão apenas Cockpit e Milhas. As demais são utilizadas em outros setores ou para controle interno.
                            </p>
                            
                            <h2>Icones</h2>
                            <p style={{ marginTop:'10px', marginBottom:'30px' }}>Acima do menu lateral existem 4 icones que são referentes à pagina inicial do cockpit, clientes, milhas e busca de transações por código.
                            </p>
                            <img style={{ marginTop:'30px', marginBottom:'30px' }} className={styles.image} src={cockpiticones} alt="Imagem do Sistema Cockpit 1"></img>       
                     
                        </div>
                     )
                },            

};


const capitalizeFirstLetter = (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
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

    // Função para encontrar a primeira lição disponível
    const getFirstAvailableLesson = () => {
        return lessons.find(l => !l.completed)?.title;
    };

    return (
        <div className={styles.courseDetail}>
            <h2 className={styles.courseTitle}>{pageTitle}</h2>
            <hr className={styles.separator} />
            <div className={styles.contentContainer}>
                <div className={styles.videoContainer}>
                    <h2 className={styles.lessonTitle}>{capitalizeFirstLetter(lessonData.title)}</h2>
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
                <h1 className={styles.title}>{capitalizeFirstLetter(lessonData.title)}</h1>
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

                {isWelcomeRoute && (
                    <button
                        className={styles.completeButton}
                        onClick={() => {
                            const firstAvailableLesson = getFirstAvailableLesson();
                            if (firstAvailableLesson) {
                                navigate(`/curso/${id}/${firstAvailableLesson}`);
                                window.scrollTo(0, 0);
                            }
                        }}
                    >
                        Iniciar Curso
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