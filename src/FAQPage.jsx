import styles from './FAQPage.module.css'; // Usando o mesmo CSS para manter o estilo
import React from 'react';
import Header from './Header';


const FAQPage = () => {
    // Lista de 20 perguntas e respostas frequentes
    const faqs = [
        { question: "Como posso resetar minha senha?", answer: "Você pode resetar sua senha clicando no link 'Esqueci minha senha' na página de login." },
        { question: "Quais são os métodos de pagamento aceitos?", answer: "Aceitamos pagamentos via cartão de crédito, débito e PayPal." },
        { question: "Como acessar o suporte técnico?", answer: "Para acessar o suporte técnico, entre em contato através do nosso formulário de contato ou pelo telefone disponibilizado no site." },
        { question: "Posso cancelar minha assinatura a qualquer momento?", answer: "Sim, você pode cancelar sua assinatura a qualquer momento nas configurações de conta." },
        { question: "Como alterar meu email cadastrado?", answer: "Você pode alterar seu email nas configurações de perfil." },
        { question: "Existe um período de teste gratuito?", answer: "Sim, oferecemos um período de teste de 7 dias." },
        { question: "Onde posso ver meus certificados?", answer: "Você pode visualizar seus certificados na seção 'Certificados' do seu perfil." },
        { question: "Como posso participar de um curso?", answer: "Você pode participar de um curso se inscrevendo na página do curso desejado." },
        { question: "Posso baixar as videoaulas?", answer: "No momento, não oferecemos a opção de download de videoaulas." },
        { question: "Há desconto para estudantes?", answer: "Sim, oferecemos um desconto especial para estudantes com comprovante." },
        { question: "Quais são as opções de idiomas disponíveis?", answer: "Atualmente, oferecemos cursos em português e inglês." },
        { question: "Como posso atualizar meus dados pessoais?", answer: "Você pode atualizar seus dados pessoais na página de configurações." },
        { question: "Qual é o tempo médio de conclusão de um curso?", answer: "O tempo varia, mas a maioria dos cursos pode ser concluída em 30 a 60 dias." },
        { question: "Como recebo notificações sobre novos cursos?", answer: "Você pode ativar as notificações nas configurações de notificação em seu perfil." },
        { question: "Os cursos oferecem suporte ao vivo?", answer: "Sim, oferecemos suporte ao vivo para dúvidas durante o curso." },
        { question: "Como funciona o sistema de avaliação?", answer: "Nosso sistema de avaliação é baseado em quizzes e projetos práticos." },
        { question: "Posso acessar os cursos em dispositivos móveis?", answer: "Sim, nossa plataforma é otimizada para acesso em smartphones e tablets." },
        { question: "Como cancelar a renovação automática da assinatura?", answer: "Você pode desativar a renovação automática nas configurações de assinatura." },
        { question: "Posso transferir minha assinatura para outra pessoa?", answer: "No momento, não é possível transferir assinaturas." },
        { question: "Como posso dar feedback sobre um curso?", answer: "Você pode enviar seu feedback na página de avaliação do curso." }
    ];

    return (
        <div className={styles.resultsPage}>

            <div className={styles.titleContainer}>
                <h1 className={styles.newTitle}>Perguntas Frequentes (FAQ)</h1>
                <hr className={styles.separator} />
            </div>
            <div className={styles.resultsContainer}>
                <h2 className={styles.pageTitle2}></h2>
                {faqs.map((faq, index) => (
                    <div key={index} className={styles.questionBlock}>

                        <div className={styles.questTitle}>{index + 1}. {faq.question}</div>
                        <div className={styles.options}>
                            <p className={styles.optionText}>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQPage;
