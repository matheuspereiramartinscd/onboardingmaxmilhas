import styles from './LoginPage.module.css';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleLoginButton from './GoogleLoginButton';
import logo_color from './assets/logo.png';
import logo_black from './assets/logo_black.png';
import maxmilhas_logo from './assets/maxmilhas-logo.png';

function LoginPage() {
    const navigate = useNavigate(); // Cria uma instância do navigate

    useEffect(() => {
        const checkLoginStatus = setInterval(() => {
            const token = localStorage.getItem('token'); // Verifica se o token existe
            if (token) {
                navigate('/home'); // Redireciona para a página home se o token existir
            }
        }, 1000); // Verifica a cada 1 segundo

        return () => clearInterval(checkLoginStatus); // Limpa o intervalo ao desmontar o componente
    }, [navigate]);

    return (
        <main className={styles.loginPage}>
            <div className={styles.container}>
                <section className={styles.leftColumn}>
                    <div className={styles.leftContent}>
                        <img loading="lazy" src={logo_color} className={styles.logo} alt="Company logo" />
                        <div className={styles.welcomeContainer}>
                            <h1 className={styles.welcomeTitle}>Bem-vindo!</h1>
                            <p className={styles.welcomeSubtitle}>ao Onboarding de Emissões</p>
                            <img loading="lazy" src={maxmilhas_logo} className={styles.decorativeImage} alt="" />
                        </div>
                    </div>
                </section>
                <section className={styles.rightColumn}>
                    <div className={styles.loginContainer}>
                        <img loading="lazy" src={logo_black} className={styles.loginLogo} alt="Login section logo" />
                        <h2 className={styles.loginTitle}>Faça login com seu email da Maxmilhas</h2>
                        <div>
                            <GoogleLoginButton /> {/* Atualizado para usar o GoogleLoginButton */}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default LoginPage;
