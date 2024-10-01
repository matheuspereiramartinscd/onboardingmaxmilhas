import styles from './Header.module.css';
import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import logo from './assets/logo.png';
import gear from './assets/gear.png'; // Placeholder image
import maxmilhasLogo from './assets/maxmilhas-logo.png';
import coin_icon from './assets/coin_icon.png';
import { Link } from 'react-router-dom';

const Header = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true); // Loading state

    // Define the API URL
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
            setLoading(false); // Set loading to false after fetching data
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

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="Logo" className={styles.logo} />
                <img src={maxmilhasLogo} alt="Maxmilhas logo" className={styles.newLogo} />
            </div>
            {/* Render Navigation only if user data is loaded */}
            {userData && !loading && <Navigation />}
            <div className={styles.userInfo} style={{ visibility: loading ? 'hidden' : 'visible' }}>
                {userData && (
                    <>
                        <img
                            src={`${apiUrl}/${userData.photo}`}
                            alt="User"
                            className={styles.userPhoto}
                        />
                        <div className={styles.userDetails}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span className={styles.username}>{userData.name || 'Nome Indisponível'}</span>
                                <Link to={`/edit-user/${userData.id}`} className={styles.editButton}>Editar</Link>
                            </div>
                            <div className={styles.pointsContainer}>
                                <img src={coin_icon} alt="Coin icon" className={styles.coinIcon} />
                                <span className={styles.points}>{userData.points} pts</span>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
