import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleLoginButton from './GoogleLoginButton';
import styles from './LoginPage.module.css';
import logo from './assets/airplane.png';  // Certifique-se de ter uma imagem no caminho correto

function LoginPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const checkLoginStatus = setInterval(() => {
            const token = localStorage.getItem('token');
            if (token) {
                navigate('/home');
            }
        }, 1000);

        return () => clearInterval(checkLoginStatus);
    }, [navigate]);

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginBox}>
                <h1 className={styles.mainTitle}>Onboarding</h1> {/* Título principal */}
                <img src={logo} alt="Logo" className={styles.logoImage} /> {/* Imagem logo */}
                <h2 className={styles.subTitle}>Maxmilhas</h2> {/* Subtítulo */}
                <h3 className={styles.loginText}>Faça login com seu email Maxmilhas</h3> {/* Texto de login */}
                <GoogleLoginButton /> {/* Botão de login Google */}
            </div>
        </div>
    );
}

export default LoginPage;
