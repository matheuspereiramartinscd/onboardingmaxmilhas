import styles from './Navigation.module.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cursosIcon from './assets/cursosIcon.png';
import rankingIcon from './assets/rankingIcon.png';
import forumIcon from './assets/forumIcon.png';
import quizIcon from './assets/quizIcon.png';
import faqIcon from './assets/faqIcon.png';
import linksIcon from './assets/linksIcon.png';

const Navigation = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className={styles.navigation}>
            <div className={styles.hamburger} onClick={toggleMenu}>
                <div className={`${styles.bar} ${isActive ? styles.change : ''}`}></div>
                <div className={`${styles.bar} ${isActive ? styles.change : ''}`}></div>
                <div className={`${styles.bar} ${isActive ? styles.change : ''}`}></div>
            </div>
            <ul className={`${styles.navList} ${isActive ? styles.active : ''}`}>
                <li className={styles.navItem}>
                    <Link to="/home" className={styles.navLink}>
                        <span className={styles.icon}><img src={cursosIcon} alt="Cursos" /></span>
                        <span className={styles.text}>Cursos</span>
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/quiz" className={styles.navLink}>
                        <span className={styles.icon}><img src={quizIcon} alt="Quiz" /></span>
                        <span className={styles.text}>Quiz</span>
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/ranking" className={styles.navLink}>
                        <span className={styles.icon}><img src={rankingIcon} alt="Ranking de Colaboradores" /></span>
                        <span className={styles.text}>Ranking</span>
                    </Link>
                </li>
                {/* 
<li className={styles.navItem}>
    <Link to="http://localhost/phpBB3/" className={styles.navLink}>
        <span className={styles.icon}><img src={forumIcon} alt="Fórum de dúvidas" /></span>
        <span className={styles.text}>Fórum</span>
    </Link>
</li> 
*/}
                <li className={styles.navItem}>
                    <Link to="/faq" className={styles.navLink}>
                        <span className={styles.icon}><img src={faqIcon} alt="FAQ" /></span>
                        <span className={styles.text}>FAQ</span>
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/links" className={styles.navLink}>
                        <span className={styles.icon}><img src={linksIcon} alt="Links úteis" /></span>
                        <span className={styles.text}>Links</span>
                    </Link>
                </li>
            </ul>
            {isActive && (
                <ul className={styles.dropdown}>
                    <li className={styles.navItem}>
                        <Link to="/home" className={styles.navLink}>Cursos</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="/quiz" className={styles.navLink}>Quiz</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="/ranking" className={styles.navLink}>Ranking</Link>
                    </li>
                    {/*  <li className={styles.navItem}>
                        <Link to="http://localhost/phpBB3/" className={styles.navLink}>Fórum</Link>
                        */}
                    <li className={styles.navItem}>
                        <Link to="/faq" className={styles.navLink}>FAQ</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="/links" className={styles.navLink}>Links</Link>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navigation;
