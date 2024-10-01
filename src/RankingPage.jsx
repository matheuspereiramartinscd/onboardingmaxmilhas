import styles from './RankingPage.module.css';
import React, { useEffect, useState } from 'react';
import { FaMedal } from 'react-icons/fa'; // Usando o ícone de medalha
import axios from 'axios';
import coin_icon from './assets/coin_icon.png'; // Importando o ícone de moedas
import logo from './assets/logo.png'; // Importe a logo para os placeholders
import gear from './assets/gear.png'; // Importe a logo para os placeholders

// URLs das medalhas
const medalUrls = [
    '/assets/medalha1.png',
    '/assets/medalha2.png',
    '/assets/medalha3.png',
    '/assets/medalha4.png',
    '/assets/medalha5.png',
    '/assets/medalha6.png',
];

const RankingPage = () => {
    const [ranking, setRanking] = useState([]);
    const [loading, setLoading] = useState(true); // Adicione um estado de loading

    useEffect(() => {
        const fetchRanking = async () => {
            try {
                const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
                const response = await axios.get(`${apiUrl}/api/users`);
                const sortedUsers = response.data.sort((a, b) => b.score - a.score);
                setRanking(sortedUsers);
            } catch (error) {
                console.error('Erro ao obter o ranking:', error);
            } finally {
                setLoading(false); // Defina o loading como false após a requisição
            }
        };

        fetchRanking();
    }, []);

    return (
        <div className={styles.rankingPage}>
            <h2 className={styles.pageTitle}>Ranking</h2>
            <hr className={styles.separator} />
            <div className={styles.rankingContainer}>
                {loading ? (
                    // Exibe placeholders enquanto os dados estão carregando
                    Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className={styles.collaboratorCard}>
                            <div className={styles.imageContainer}>
                                <img src={gear} alt="Placeholder" className={styles.userPhoto} />
                                <span className={styles.loadingText}>Carregando....</span>
                            </div>
                            <div className={styles.userInfo}>
                                <span className={styles.userName}>Carregando...</span>
                                <div className={styles.pointsContainer}>
                                    <img src={coin_icon} alt="Coin icon" className={styles.coinsIcon} />
                                    <span className={styles.points}>0</span>
                                    <span className={styles.pointsLabel}> pontos</span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    ranking.length > 0 ? (
                        ranking.map((user, index) => (
                            <div key={user._id} className={styles.collaboratorCard}>
                                <div className={styles.imageContainer}>
                                    {index < 6 ? (
                                        <img src={medalUrls[index]} alt={`Medalha ${index + 1}`} className={styles.medalIcon} />
                                    ) : (
                                        <div className={styles.medalIcon2Container}>
                                            <FaMedal className={`${styles.icon} ${styles.medalIcon2}`} style={{ color: 'silver' }} />
                                        </div>
                                    )}
                                    <img src={`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/${user.photo}`} alt={user.name} className={styles.userPhoto} onError={(e) => { e.target.src = '/assets/user_photo.png'; }} />
                                </div>
                                <div className={styles.userInfo}>
                                    <span className={styles.userName}>{user.name}</span>
                                    <div className={styles.pointsContainer}>
                                        <img src={coin_icon} alt="Coin icon" className={styles.coinsIcon} />
                                        <span className={styles.points}>{user.score}</span>
                                        <span className={styles.pointsLabel}> pontos</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Nenhum colaborador encontrado.</p>
                    )
                )}
            </div>
        </div>
    );
};

export default RankingPage;
