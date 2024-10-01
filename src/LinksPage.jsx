import styles from './LinksPage.module.css'; // Usando o mesmo CSS para manter o estilo
import React from 'react';
import Header from './Header';

const LinksPage = () => {
    // Lista de links úteis
    const links = [
        {
            title: "Google",
            url: "https://www.google.com",
            description: "O motor de busca mais popular do mundo."
        },
        {
            title: "MDN Web Docs",
            url: "https://developer.mozilla.org",
            description: "Documentação abrangente sobre desenvolvimento web."
        },
        {
            title: "W3Schools",
            url: "https://www.w3schools.com/",
            description: "Tutoriais sobre desenvolvimento web."
        },
        {
            title: "CSS Tricks",
            url: "https://css-tricks.com/",
            description: "Dicas e truques sobre CSS."
        },
        {
            title: "Stack Overflow",
            url: "https://stackoverflow.com/",
            description: "Comunidade para perguntas e respostas sobre programação."
        },
        {
            title: "GitHub",
            url: "https://github.com/",
            description: "Plataforma para hospedagem de código-fonte."
        },
        {
            title: "FreeCodeCamp",
            url: "https://www.freecodecamp.org/",
            description: "Cursos gratuitos de programação."
        },
        {
            title: "Frontend Mentor",
            url: "https://www.frontendmentor.io/",
            description: "Desafios de design para desenvolvedores front-end."
        },
        {
            title: "DevDocs",
            url: "https://devdocs.io/",
            description: "Documentação para desenvolvedores."
        },
        {
            title: "Codecademy",
            url: "https://www.codecademy.com/",
            description: "Cursos interativos de programação."
        },
        {
            title: "Udacity",
            url: "https://www.udacity.com/",
            description: "Cursos online e nanodegrees."
        },
        {
            title: "Coursera",
            url: "https://www.coursera.org/",
            description: "Cursos online de universidades renomadas."
        },
        {
            title: "LinkedIn Learning",
            url: "https://www.linkedin.com/learning/",
            description: "Cursos de habilidades profissionais."
        },
        {
            title: "YouTube",
            url: "https://www.youtube.com/",
            description: "Plataforma de vídeos."
        },
        {
            title: "CSS Zen Garden",
            url: "http://www.csszengarden.com/",
            description: "Exemplos de CSS para inspiração."
        },
        {
            title: "React Router",
            url: "https://reactrouter.com/",
            description: "Gerenciamento de rotas para aplicações React."
        },
        {
            title: "Frontend Checklist",
            url: "https://frontendchecklist.io/",
            description: "Lista de verificação para desenvolvedores front-end."
        },
        {
            title: "Lighthouse",
            url: "https://developers.google.com/web/tools/lighthouse",
            description: "Ferramenta para melhorar a qualidade de páginas web."
        },
        {
            title: "Web.dev",
            url: "https://web.dev/",
            description: "Recursos e ferramentas para desenvolvedores web."
        },
        {
            title: "A11y Project",
            url: "https://www.a11yproject.com/",
            description: "Recursos para acessibilidade na web."
        },
        {
            title: "Dev.to",
            url: "https://dev.to/",
            description: "Comunidade de desenvolvedores."
        },
        {
            title: "CSS Battle",
            url: "https://cssbattle.dev/",
            description: "Desafios de CSS divertidos."
        },
    ];

    return (
        <div className={styles.resultsPage}>

            <div className={styles.titleContainer}>
                <h1 className={styles.newTitle}>Links Úteis</h1>
                <hr className={styles.separator} />
            </div>
            <div className={styles.resultsContainer}>
                {links.map((link, index) => (
                    <div key={index} className={styles.linkBlock}>
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.linkText}
                        >
                            {link.title}
                        </a>
                        <span className={styles.linkDescription}>{link.description}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LinksPage;
