import styles from './Header.module.css';
import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import logo from './assets/logo.png';
import gear from './assets/gear.png'; // Placeholder image
import maxmilhasLogo from './assets/maxmilhas-logo.png';
import coin_icon from './assets/coin_icon.png';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom'; // Importar o hook de navegação

const Header = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); // Hook para navegação

    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';

    const fetchUserData = async (storedUserEmail) => {
        try {
            const response = await fetch(`${apiUrl}/user/${storedUserEmail}`, {
                method: 'GET',
                cache: 'no-store'
            });

            if (!response.ok) {
                throw new Error('Erro ao buscar dados do usuário');
            }

            const data = await response.json();
            if (data) {
                setUserData({
                    id: data.id,
                    name: data.name,
                    photo: data.photo || 'uploads/user_photo.png',
                    points: data.points || 0,
                });

                localStorage.setItem('userId', data.id);
                localStorage.setItem('userName', data.name);
                localStorage.setItem('userPhoto', data.photo || 'uploads/user_photo.png');
                localStorage.setItem('userPoints', data.points || 0);
            }
        } catch (error) {
            console.error('Erro ao buscar dados do usuário:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const storedUserEmail = localStorage.getItem('userEmail');

        if (storedUserEmail) {
            fetchUserData(storedUserEmail);
        }

        const interval = setInterval(() => {
            if (storedUserEmail) {
                fetchUserData(storedUserEmail);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Função para fazer logout
    const handleLogout = () => {
        localStorage.clear(); // Limpar todos os dados do localStorage
        navigate('/login'); // Redirecionar para a página de login
    };

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="Logo" className={styles.logo} />
                <img src={maxmilhasLogo} alt="Maxmilhas logo" className={styles.newLogo} />
            </div>

            {userData && !loading && <Navigation />}

            <div className={styles.userInfo} style={{ visibility: loading ? 'hidden' : 'visible' }}>
                {userData && (
                    <>
                        <img
                            src={`${apiUrl}/${userData.photo}`}
                            alt="User"
                            className={styles.userPhoto}
                            onError={(e) => { e.target.src = '/assets/user_photo.png'; }}
                        />
                        <div className={styles.userDetails}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span className={styles.username}>{userData.name || 'Nome Indisponível'}</span>

                            </div>
                            <div className={styles.pointsContainer}>
                                <img src={coin_icon} alt="Coin icon" className={styles.coinIcon} />
                                <span className={styles.points}>{userData.points} pts</span>
                            </div>
                        </div>

                        {/* Botão de Logout */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                            <Link to={`/edit-user/${userData.id}`} className={styles.editButton}>Editar</Link>
                            {/* Botão de Logout */}
                            <button onClick={handleLogout} className={styles.editButton} style={{ marginTop: '8px', }}>
                                Logout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
