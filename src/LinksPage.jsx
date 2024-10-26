import styles from './LinksPage.module.css'; // Usando o mesmo CSS para manter o estilo
import React from 'react';
import Header from './Header';

const LinksPage = () => {
    // Lista de links úteis
    const links = [
        {
            title: "Cockpit",
            url: "https://admin.maxmilhas.com.br/admin",
            description: "Sistema de gestão para operações da MaxMilhas."
        },
        {
            title: "Slack",
            url: "https://slack.com/intl/pt-br/workspace-signin",
            description: "Plataforma de comunicação e colaboração em equipe."
        },
        {
            title: "Zendesk",
            url: "https://maxmilhas.zendesk.com/agent/dashboard",
            description: "Ferramenta de suporte ao cliente da MaxMilhas."
        },
        {
            title: "Qulture.Rocks",
            url: "https://app.qulture.rocks/users/sign_in#/company/178/one-page/contracts/809862",
            description: "Plataforma de gestão de desempenho e cultura organizacional."
        },
        {
            title: "Convenia",
            url: "https://colaborador.convenia.com.br/meus-holerites",
            description: "Portal para acesso a holerites e informações trabalhistas."
        },
        {
            title: "Metabase",
            url: "https://bi.maxmilhas.com.br/",
            description: "Ferramenta de análise de dados e relatórios."
        },
        {
            title: "Receita Federal",
            url: "https://servicos.receita.fazenda.gov.br/servicos/cpf/consultasituacao/consultapublica.asp",
            description: "Consulta de situação cadastral de CPF na Receita Federal."
        },
        {
            title: "Tripcase",
            url: "https://www.tripcase.com/web2/trips",
            description: "Aplicativo para gerenciamento de viagens."
        },
        {
            title: "Bagagem GOL",
            url: "https://b2c.voegol.com.br/minhas-viagens/encontrar-viagem",
            description: "Consulta sobre informações de bagagem da GOL."
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
