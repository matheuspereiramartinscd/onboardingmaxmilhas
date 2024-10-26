import styles from './FAQPage.module.css'; // Usando o mesmo CSS para manter o estilo
import React from 'react';
import Header from './Header';


const FAQPage = () => {
    // Lista de 20 perguntas e respostas frequentes
    const faqs = [
        { question: "Como posso acessar as informações detalhadas da transação?", answer: "Clique no botão 'Transação completa' para acessar uma página com todas as informações e ações relevantes da transação." },
        { question: "O que é saldo disponível?", answer: "O saldo disponível é a quantidade de milhas que ainda está disponível na conta do vendedor para realizar novas transações." },
        { question: "O que significa 'valor unitário' na transação?", answer: "O valor unitário se refere ao preço cobrado por milheiro na transação específica." },
        { question: "Quais dados do passageiro são necessários para a transação?", answer: "Os dados incluem tratamento, primeiro e segundo nome, sufixo, CPF e RG do passageiro." },
        { question: "Como posso iniciar a emissão do bilhete aéreo?", answer: "Clique no botão 'Iniciar Emissão' na página da transação para dar início ao processo de emissão do bilhete." },
        { question: "Como posso visualizar dados de fidelidade?", answer: "O botão para visualizar dados de fidelidade fornece acesso rápido às informações completas do programa de fidelidade do ofertante ou comprador." },
        { question: "Quais informações são exibidas ao clicar na caixa de informações sobre o voo?", answer: "Exibe dados sobre passageiros, detalhes do voo, e permite busca na Maxmilhas ou na companhia aérea." },
        { question: "O que é o botão de código GOL?", answer: "Esse botão busca o código necessário para realizar o pagamento na GOL, enviado ao cliente por e-mail ou SMS." },
        { question: "Como posso adicionar comentários à transação?", answer: "Há uma seção que permite inserir novos comentários, facilitando a documentação e comunicação entre a equipe." },
        { question: "O que fazer se o ofertante não atende o telefone?", answer: "Se o ofertante não atende, você pode trocar o ofertante por outro que esteja disponível para contato." },
        { question: "O que é o botão de trocar ofertante?", answer: "Este botão permite selecionar um motivo específico para trocar o ofertante atual, caso necessário." },
        { question: "Como visualizar o histórico de logs de emissão automática?", answer: "Você pode clicar no botão de logs de emissão automática para ver todos os registros e comentários do processo de emissão." },
        { question: "Qual é o prazo para cancelamento de uma transação?", answer: "O prazo para cancelamento pode variar de acordo com a companhia aérea e as políticas de venda. Geralmente, recomenda-se realizar o cancelamento o mais rápido possível." },
        { question: "Como posso garantir que a transação foi concluída com sucesso?", answer: "Após a finalização da transação, verifique o status e as informações de pagamento. O sistema deve confirmar a conclusão da emissão." },
        { question: "O que é necessário para emitir passagens internacionais?", answer: "Para emitir passagens internacionais, você precisará de documentos específicos, como passaporte válido e, em alguns casos, visto." },
        { question: "Como posso iniciar o processo de emissão automática de passagens?", answer: "Para iniciar o processo de emissão automática, clique no botão Emitir automaticamente no sistema. Isso acionará o sistema para emitir as passagens utilizando as informações previamente inseridas." },
        { question: "Por que é importante verificar o log de emissão antes de iniciar a emissão automática?", answer: "Verificar o log de emissão é essencial para identificar se a transação já foi emitida ou se ocorreu um erro de pagamento. Essa etapa ajuda a evitar a duplicidade de emissões." },
        { question: "Quais informações devem ser revisadas antes de prosseguir com a transação semi-automática?", answer: "Antes de prosseguir, revise cuidadosamente todas as informações preenchidas pela extensão da transação semi-automática, garantindo que os dados do passageiro e da transação estejam corretos." },
        { question: "O que devo fazer se uma transação apresentar erro após o pagamento durante a emissão automática?", answer: "Se uma transação apresentar erro após o pagamento, acesse a conta do ofertante associada para verificar se a passagem foi emitida. Se não tiver sido emitida, siga os procedimentos para a emissão manual." },
        { question: "Como deve ser documentado um erro ocorrido durante o processo de emissão automática?", answer: "Após verificar o status da passagem, copie e cole o extrato da conta do ofertante nos comentários da transação. Isso fornece um registro claro do que ocorreu durante o processo de pagamento." }
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
