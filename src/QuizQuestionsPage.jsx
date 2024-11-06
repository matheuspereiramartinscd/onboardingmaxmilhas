import styles from './QuizQuestionsPage.module.css';
import React, { useState, useEffect } from 'react';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header';

const courses = [
    {
        id: 'sistema',
        title: "Cockpit",
        questions: [
            { question: "Qual é o principal propósito do Cockpit na Maxmilhas?", options: ["Emitir bilhetes aéreos", "Gerar relatórios financeiros", "Acompanhar viagens", "Controlar as bagagens"], correctAnswer: "Emitir bilhetes aéreos" },
            { question: "O que o sistema Cockpit permite gerenciar?", options: ["Transações de emissão", "Apenas clientes", "Apenas milhas", "Reservas de hotéis"], correctAnswer: "Transações de emissão" },
            { question: "Como os colaboradores acessam o sistema Cockpit?", options: ["Com senha pessoal", "Com e-mail corporativo", "Com CPF", "Com número de telefone"], correctAnswer: "Com e-mail corporativo" },
            { question: "Qual opção no menu lateral permite iniciar a emissão de passagens?", options: ["Clientes", "Cockpit", "Criar transação", "Relatórios"], correctAnswer: "Cockpit" },
            { question: "O que os indicadores no Cockpit mostram?", options: ["Dados de vendas", "Status das emissões", "Horários dos voos", "Informações de clientes"], correctAnswer: "Status das emissões" },
            { question: "Qual é uma das funções disponíveis no menu lateral do Cockpit?", options: ["Inserção de crédito", "Gerenciamento de redes sociais", "Cadastro de produtos", "Configuração de sistemas"], correctAnswer: "Inserção de crédito" },
            { question: "Qual é a primeira tela que o colaborador vê ao acessar o Cockpit?", options: ["Tela de relatórios", "Tela de login", "Tela inicial", "Tela de configurações"], correctAnswer: "Tela inicial" },
            { question: "Qual é a função da opção 'Milhas' no menu lateral do Cockpit?", options: ["Emitir passagens", "Buscar ofertantes", "Gerar relatórios", "Gerenciar usuários"], correctAnswer: "Buscar ofertantes" },
            { question: "Quais são os critérios de filtragem disponíveis na busca de ofertantes?", options: ["Login, Status, Companhia aérea", "Nome, E-mail, Telefone", "Saldo, CPF, Média", "Tipo de oferta, Estratégia 2FA"], correctAnswer: "Login, Status, Companhia aérea" },
            { question: "Qual status indica que um ofertante está pronto para ser utilizado em transações?", options: ["Inativo - CPF divergente", "Ativo - liberado", "Bloqueado - Não atende celular", "Pendente - Divergência na oferta paga"], correctAnswer: "Ativo - liberado" },
            { question: "Quais tipos de oferta podem ser filtrados na busca avançada?", options: ["Venda convencional, Venda rápida, Revenda", "Ativo, Bloqueado, Inativo", "Milhas, CPF, E-mail", "Login, Nome, Telefone"], correctAnswer: "Venda convencional, Venda rápida, Revenda" },
            { question: "O que é exibido na tela de busca após realizar a busca de um ofertante?", options: ["Login, Categoria, Status", "Nome, Telefone, E-mail", "ID da transação, Voo, Data do Voo", "Observações, Histórico, Documentos"], correctAnswer: "Login, Categoria, Status" },
            { question: "Qual informação é apresentada na seção de 'Dados do vendedor'?", options: ["Saldo de milhas", "Nome, CPF, E-mail, Telefone", "Código da transação", "Histórico de vendas"], correctAnswer: "Nome, CPF, E-mail, Telefone" },
            { question: "Para que serve a seção de 'Observações' no Cockpit?", options: ["Registrar comentários sobre transações", "Visualizar dados do vendedor", "Gerar relatórios de vendas", "Filtrar ofertantes"], correctAnswer: "Registrar comentários sobre transações" },
            { question: "Qual é a primeira etapa para iniciar uma pesquisa no Cockpit?", options: ["Clicar no botão Emitir", "Selecionar uma aba", "Inserir o número do pedido", "Ativar o filtro de milhas"], correctAnswer: "Selecionar uma aba" },
{ question: "O que o botão 'Filtrar' faz no Cockpit?", options: ["Retorna todas as transações", "Processa as opções de filtro selecionadas", "Exclui transações", "Exibe apenas transações internacionais"], correctAnswer: "Processa as opções de filtro selecionadas" },
{ question: "Qual é o objetivo da pesquisa por 'Transação' no Cockpit?", options: ["Identificar o número do pedido", "Visualizar detalhes do voo", "Encontrar informações do cliente", "Acessar relatórios financeiros"], correctAnswer: "Visualizar detalhes do voo" },
{ question: "Como o analista pode filtrar transações com base no valor de milhas?", options: ["Usando o campo de 'Valor mínimo de milhas'", "Inserindo o valor no campo de pesquisa", "Definindo o 'Valor máximo de milhas'", "Selecionando a opção 'Internacional'"], correctAnswer: "Definindo o 'Valor máximo de milhas'" },
{ question: "Quais meios de pagamento estão disponíveis no Cockpit?", options: ["Transferência bancária e PayPal", "Cartão de crédito e SafetyPay", "Apenas cartão de crédito", "Apenas transferência bancária"], correctAnswer: "Cartão de crédito e SafetyPay" },
{ question: "Qual é a funcionalidade da opção 'Emitindo' no Cockpit?", options: ["Iniciar novas transações", "Buscar transações em processo de emissão", "Cancelar transações", "Exibir transações concluídas"], correctAnswer: "Buscar transações em processo de emissão" },
{ question: "O que a opção 'Recompra' permite no Cockpit?", options: ["Selecionar transações recentes", "Filtrar voos internacionais", "Identificar transações canceladas que foram compradas novamente", "Acessar relatórios de vendas"], correctAnswer: "Identificar transações canceladas que foram compradas novamente" },
{ question: "O que é exibido na página de Transação completa do Cockpit?", options: ["Informações detalhadas da transação", "Histórico de vendas", "Relatórios financeiros", "Detalhes da companhia aérea"], correctAnswer: "Informações detalhadas da transação" },
{ question: "Qual é o propósito do botão de lançar cobrança na Transação completa?", options: ["Cancelar a transação", "Lançar cobranças adicionais", "Visualizar detalhes da transação", "Editar dados do voo"], correctAnswer: "Lançar cobranças adicionais" },
{ question: "Quais dados são apresentados sob 'Dados financeiros' na Transação completa?", options: ["Dados do comprador", "Número do voo", "Valor total da transação", "Saldo de milhas disponíveis"], correctAnswer: "Valor total da transação" },
{ question: "O que o botão de cancelar transação permite ao usuário fazer?", options: ["Emitir um novo bilhete", "Cancelar completamente a transação atual", "Alterar dados do passageiro", "Consultar logs de transações"], correctAnswer: "Cancelar completamente a transação atual" },
{ question: "Qual informação é necessária para selecionar um motivo de cancelamento?", options: ["Número do voo", "Data da partida", "Motivo específico de cancelamento", "Nome do passageiro"], correctAnswer: "Motivo específico de cancelamento" },
{ question: "Qual é a função do botão de editar informações do voo?", options: ["Alterar dados do passageiro", "Modificar detalhes do voo", "Cancelar a transação", "Buscar voos alternativos"], correctAnswer: "Modificar detalhes do voo" },
{ question: "O que deve ser confirmado pelo usuário antes de cancelar uma transação?", options: ["Número de milhas restantes", "Motivo do cancelamento e estorno", "Tipo de companhia aérea", "Dados do vendedor"], correctAnswer: "Motivo do cancelamento e estorno" },

           

        ]
    },
    {
        id: 'milhas',
        title: "Milhas",
        questions: [
            { question: "O que são milhas aéreas?", options: ["Pontos acumulados em programas de fidelidade", "Taxas de embarque", "Bônus de cartões de crédito", "Descontos em passagens"], correctAnswer: "Pontos acumulados em programas de fidelidade" },
            { question: "Como as milhas aéreas podem ser acumuladas?", options: ["Apenas através de voos", "Compras em lojas parceiras", "Utilização de cartões de crédito", "Todas as opções acima"], correctAnswer: "Todas as opções acima" },
            { question: "O que pode ser trocado pelas milhas acumuladas?", options: ["Apenas passagens aéreas", "Upgrades de classe", "Produtos e serviços", "Todas as opções acima"], correctAnswer: "Todas as opções acima" },
            { question: "Qual é a principal consideração sobre a validade das milhas?", options: ["Elas não expiram nunca", "Podem expirar após um período de inatividade", "Sempre valem por um ano", "São válidas apenas para um único voo"], correctAnswer: "Podem expirar após um período de inatividade" },
            { question: "Por que é importante entender as regras do programa de fidelidade?", options: ["Para maximizar a utilização das milhas acumuladas", "Para garantir passagens de graça", "Para evitar taxas adicionais", "Para saber quando comprar bilhetes"], correctAnswer: "Para maximizar a utilização das milhas acumuladas" },
            { question: "Quais aspectos legais devem ser considerados ao vender milhas?", options: ["Políticas do programa de fidelidade", "Código de Defesa do Consumidor", "Obrigações fiscais", "Todas as opções acima"], correctAnswer: "Todas as opções acima" },
            { question: "O que é um marketplace de milhas?", options: ["Uma plataforma para comprar e vender milhas", "Um programa de fidelidade", "Um tipo de cartão de crédito", "Um serviço de aluguel de carros"], correctAnswer: "Uma plataforma para comprar e vender milhas" },
            { question: "Qual é o principal fator que influencia a precificação das milhas aéreas?", options: ["Demanda e oferta", "Tipo de companhia aérea", "Validade das milhas", "Promoções e ofertas"], correctAnswer: "Demanda e oferta" },
            { question: "Como a validade das milhas afeta seu preço?", options: ["Milhas não expiram nunca", "Milhas próximas da expiração valem menos", "Milhas com validade longa são mais baratas", "Não tem impacto"], correctAnswer: "Milhas próximas da expiração valem menos" },
            { question: "Qual tipo de tarifa acumula mais milhas?", options: ["Tarifa econômica", "Tarifa promocional", "Tarifa de classe executiva", "Tarifa de grupo"], correctAnswer: "Tarifa de classe executiva" },
            { question: "O que é o custo por milheiro (CPM)?", options: ["Preço pago por cada 1.000 milhas", "Valor total das milhas", "Preço de mercado das milhas", "Taxa de conversão"], correctAnswer: "Preço pago por cada 1.000 milhas" },
            { question: "Como podem ser acumuladas milhas utilizando cartões de crédito?", options: ["Por gastos cotidianos", "Apenas por voos", "Apenas por compras em lojas", "Não é possível"], correctAnswer: "Por gastos cotidianos" },
            { question: "Quais serviços podem oferecer acúmulo de milhas além de voos?", options: ["Reservas de hotéis e aluguel de carros", "Compras em supermercados", "Serviços de streaming", "Todas as opções acima"], correctAnswer: "Todas as opções acima" },
            { question: "O que são 'clubes de milhas'?", options: ["Programas que oferecem milhas mensais por assinatura", "Companhias aéreas de baixo custo", "Agências de viagens", "Plataformas de compra de milhas"], correctAnswer: "Programas que oferecem milhas mensais por assinatura" },
            { question: "Qual é o programa de fidelidade da GOL Linhas Aéreas?", options: ["LATAM Pass", "TudoAzul", "Smiles", "AAdvantage"], correctAnswer: "Smiles" },
            { question: "Qual é o principal benefício do Club Smiles?", options: ["Acesso a salas VIP", "Acúmulo mensal de milhas", "Check-in prioritário", "Desconto em passagens"], correctAnswer: "Acúmulo mensal de milhas" },
            { question: "O que é o LATAM Pass?", options: ["Um programa de recompensas de hotéis", "Um programa de fidelidade da LATAM Airlines", "Um cartão de crédito", "Um clube de milhas da GOL"], correctAnswer: "Um programa de fidelidade da LATAM Airlines" },
            { question: "Qual programa de fidelidade permite acúmulo de milhas com a TAP Air Portugal?", options: ["Miles&Go", "Executive Club", "TudoAzul", "AAdvantage"], correctAnswer: "Miles&Go" },
            { question: "Como a validade das milhas é determinada?", options: ["Por meio da quantidade de milhas acumuladas", "Pelo nível de fidelidade do cliente", "Pela frequência de voos", "Pelo tipo de cartão de crédito"], correctAnswer: "Pelo nível de fidelidade do cliente" },
            { question: "Quantos meses as milhas do Latam Pass geralmente são válidas?", options: ["12 meses", "18 meses", "24 meses", "36 meses"], correctAnswer: "24 meses" },
            { question: "Qual estratégia pode ajudar a evitar a perda de milhas por vencimento?", options: ["Utilizar ou vender as milhas adquiridas", "Acumular mais milhas", "Evitar utilizar as milhas", "Pagar uma taxa de renovação"], correctAnswer: "Utilizar ou vender as milhas adquiridas" }
           
        ]

    },
    {
        id: 'ofertantes',
        title: "Ofertantes",
        questions: [
   
            { question: "O que são ofertantes de milhas?", options: ["Empresas que vendem passagens aéreas", "Indivíduos ou entidades que vendem milhas acumuladas", "Clientes da Maxmilhas", "Agências de viagem"], correctAnswer: "Indivíduos ou entidades que vendem milhas acumuladas" },
{ question: "Qual é o principal benefício para os viajantes ao comprar milhas de ofertantes?", options: ["Redução do custo da passagem aérea", "Acúmulo de mais milhas", "Acesso a voos exclusivos", "Pagamento facilitado"], correctAnswer: "Redução do custo da passagem aérea" },
{ question: "Qual papel a Maxmilhas desempenha na relação entre ofertantes e compradores?", options: ["Intermediação das transações", "Venda direta de milhas", "Garantia de voos exclusivos", "Análise de crédito"], correctAnswer: "Intermediação das transações" },
{ question: "Como os ofertantes contribuem para a competitividade da Maxmilhas?", options: ["Facilitando transações rápidas", "Aumentando a variedade de preços", "Fornecendo voos gratuitos", "Excluindo milhas expiradas"], correctAnswer: "Aumentando a variedade de preços" },
{ question: "Qual tipo de transação permite comprar milhas por um valor abaixo da passagem?", options: ["Venda convencional", "Compra parcelada", "Revenda", "Troca de milhas"], correctAnswer: "Revenda" },
{ question: "O que significa 'Venda rápida' no contexto dos tipos de oferta?", options: ["Transações com pagamento antecipado", "Ofertas com transações rápidas", "Ofertas com desconto para milhas acumuladas", "Promoções de milhas"], correctAnswer: "Ofertas com transações rápidas" },
{ question: "Qual opção de estratégia 2FA pode ser usada para verificar transações?", options: ["E-mail", "Senha", "CPF", "Cartão de crédito"], correctAnswer: "E-mail" },
{ question: "O que representa o saldo de milhas em um programa de fidelidade?", options: ["A quantidade total de milhas disponíveis para um ofertante", "O valor financeiro total das milhas", "O número de clientes cadastrados no programa", "A quantidade de CPFs autorizados"], correctAnswer: "A quantidade total de milhas disponíveis para um ofertante" },
{ question: "Qual é o principal benefício de manter um saldo elevado de milhas?", options: ["Aumenta as chances de vendas", "Reduz custos de transação", "Garante prioridade no atendimento", "Facilita o controle de CPFs"], correctAnswer: "Aumenta as chances de vendas" },
{ question: "O que é a razão em termos de milhas e CPFs?", options: ["A média de vendas realizadas", "A quantidade de milhas por CPF disponível", "O saldo médio de milhas", "A porcentagem de milhas resgatadas"], correctAnswer: "A quantidade de milhas por CPF disponível" },
{ question: "Como é calculada a média de milhas por CPF?", options: ["Dividindo as milhas totais pelo número de CPFs", "Multiplicando o número de CPFs pelas milhas médias", "Somando o saldo e a razão", "Subtraindo as milhas não utilizadas"], correctAnswer: "Dividindo as milhas totais pelo número de CPFs" },
{ question: "Qual é a importância de se calcular a média de milhas por CPF?", options: ["Para equilibrar vendas e milhas pessoais", "Para maximizar o número de CPFs", "Para aumentar o saldo total", "Para facilitar a troca de milhas"], correctAnswer: "Para equilibrar vendas e milhas pessoais" },
{ question: "Qual é o impacto de ter mais CPFs disponíveis para um ofertante?", options: ["Maior capacidade de venda de milhas", "Menos demanda por passagens", "Redução no saldo de milhas", "Menor controle de transações"], correctAnswer: "Maior capacidade de venda de milhas" },
{ question: "Onde é possível consultar o saldo, razão e quantidade de CPFs de um ofertante?", options: ["Na página de troca de ofertantes e busca de ofertantes pelo Milhas", "Na página de relatórios financeiros", "No site oficial da Gol", "Na aba de atendimento ao cliente"], correctAnswer: "Na página de troca de ofertantes e busca de ofertantes pelo Milhas" },
{ question: "Como os membros do Latam Pass podem acumular pontos?", options: ["Ao voar com a LATAM e parceiros", "Realizando compras em lojas online", "Com transferências bancárias", "Através de doações"], correctAnswer: "Ao voar com a LATAM e parceiros" },
{ question: "Qual a vantagem de se atingir a categoria Platinum no Latam Pass?", options: ["Acesso a áreas VIP", "Descontos em passagens", "Milhas ilimitadas", "Benefícios apenas em voos internacionais"], correctAnswer: "Acesso a áreas VIP" },
{ question: "Como os pontos Latam Pass podem ser resgatados?", options: ["Em passagens aéreas e upgrades", "Somente em produtos parceiros", "Em descontos de hospedagem", "Para adquirir milhas de outra companhia"], correctAnswer: "Em passagens aéreas e upgrades" },
{ question: "Quem pode utilizar as milhas de um membro no programa TudoAzul?", options: ["Somente o titular", "Beneficiários cadastrados", "Qualquer pessoa", "Apenas familiares de primeiro grau"], correctAnswer: "Beneficiários cadastrados" },
{ question: "Quais são as principais verificações na validação automática de ofertas?", options: ["Fraude e saldo divergente", "Análise de pagamento", "Verificação de beneficiários", "Comparação de promoções"], correctAnswer: "Fraude e saldo divergente" },
{ question: "Qual é o principal objetivo da validação manual de ofertas?", options: ["Aprovar todas as ofertas", "Analisar ofertas complexas ou com irregularidades", "Rejeitar todas as ofertas automáticas", "Confirmar o pagamento do cliente"], correctAnswer: "Analisar ofertas complexas ou com irregularidades" },
{ question: "Qual é a importância da validação de ofertas na MaxMilhas?", options: ["Proteger usuários e manter a integridade do mercado", "Aprovar todas as transações automaticamente", "Eliminar fraudes em transações de produtos", "Aumentar a quantidade de milhas disponíveis"], correctAnswer: "Proteger usuários e manter a integridade do mercado" }


          
        ]
    },
    {
        id: 'tour_virtual',
        title: "Tour Virtual da Empresa",
        questions: [
            { question: "Onde está localizada a sede da MaxMilhas?", options: ["Rua Matias Cardoso, 169 - Belo Horizonte, MG", "Avenida Paulista, São Paulo, SP", "Rua da Consolação, Rio de Janeiro, RJ", "Praça da Liberdade, Belo Horizonte, MG"], correctAnswer: "Rua Matias Cardoso, 169 - Belo Horizonte, MG" },

            { question: "Qual é a localização do setor de recepção e atendimento da MaxMilhas?", options: ["11º andar", "Térreo", "5º andar", "12º andar"], correctAnswer: "11º andar" },
            
            { question: "Qual é o principal objetivo do espaço de recepção e atendimento?", options: ["Oferecer um ambiente agradável para visitantes", "Realizar reuniões com clientes", "Armazenar documentos", "Área de descanso para colaboradores"], correctAnswer: "Oferecer um ambiente agradável para visitantes" },
            
            { question: "O que é registrado no sistema de controle de entrada da recepção?", options: ["Os visitantes", "As entregas", "Os funcionários", "Os fornecedores"], correctAnswer: "Os visitantes" },
            
            { question: "O que a área de espera oferece aos visitantes?", options: ["Assentos confortáveis e Wi-Fi gratuito", "Alimentos e bebidas", "Serviço de impressão", "Espaço de coworking"], correctAnswer: "Assentos confortáveis e Wi-Fi gratuito" },
            
            { question: "Onde estão localizadas as telas de exibição na área de espera?", options: ["No ambiente dinâmico", "Na cozinha", "No deck ao ar livre", "Na área de refeição"], correctAnswer: "No ambiente dinâmico" },
            
            { question: "Qual o objetivo principal da área de refeição e descanso no 11º andar?", options: ["Oferecer conforto e bem-estar aos colaboradores", "Realizar reuniões formais", "Treinar novos funcionários", "Organizar eventos"], correctAnswer: "Oferecer conforto e bem-estar aos colaboradores" },
            
            { question: "Que itens estão disponíveis na área de refeição para os colaboradores?", options: ["Geladeiras, micro-ondas e cafeteiras", "Cadeiras de massagem", "Lousa para anotações", "Sala de ginástica"], correctAnswer: "Geladeiras, micro-ondas e cafeteiras" },
            
            { question: "Qual é a principal finalidade da cozinha localizada no 11º andar?", options: ["Uso exclusivo para funcionários autorizados", "Serviço de catering", "Preparação de refeições para visitantes", "Armazenamento de materiais de escritório"], correctAnswer: "Uso exclusivo para funcionários autorizados" },
            
            { question: "Onde fica o deck ao ar livre na sede da MaxMilhas?", options: ["No 11º andar", "No 5º andar", "No 15º andar", "No 2º andar"], correctAnswer: "No 11º andar" },
            
            { question: "O que o deck ao ar livre oferece aos colaboradores?", options: ["Espaço para relaxamento e descontração", "Espaço para prática de esportes", "Sala de ginástica", "Biblioteca"], correctAnswer: "Espaço para relaxamento e descontração" },
            
            { question: "Qual é um dos benefícios de utilizar o deck no 11º andar?", options: ["Ambiente agradável para reuniões informais", "Atividades físicas monitoradas", "Curso de formação interna", "Sessões de meditação guiada"], correctAnswer: "Ambiente agradável para reuniões informais" },
            
            { question: "O deck do 11º andar contribui para qual aspecto do ambiente?", options: ["Ambiente leve e arejado", "Melhoria nas vendas", "Planejamento financeiro", "Controle de acessos"], correctAnswer: "Ambiente leve e arejado" },
            
            { question: "Qual é a vantagem de ter áreas de descanso na MaxMilhas?", options: ["Promover bem-estar e socialização", "Aumentar as vendas", "Armazenar documentos importantes", "Organizar eventos para clientes"], correctAnswer: "Promover bem-estar e socialização" },
            
            { question: "Por que o deck é importante para a equipe da MaxMilhas?", options: ["Proporciona um espaço para pausas e descontração", "Serve como área de alimentação", "É um local para arquivos importantes", "Espaço exclusivo para reuniões formais"], correctAnswer: "Proporciona um espaço para pausas e descontração" },
            { question: "Onde está localizada a sede da MaxMilhas?", options: ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Brasília"], correctAnswer: "Belo Horizonte" },
            { question: "Em que andar fica a recepção e atendimento da MaxMilhas?", options: ["10º andar", "11º andar", "12º andar", "Térreo"], correctAnswer: "11º andar" },
            { question: "Qual é o objetivo da área de operações no 10º andar?", options: ["Atender clientes", "Gerenciar operações diárias", "Armazenar documentos", "Fazer reuniões"], correctAnswer: "Gerenciar operações diárias" },
            { question: "Como a sala de operações da MaxMilhas é descrita?", options: ["Clássica e tranquila", "Moderna e tecnológica", "Rústica e simples", "Pequena e isolada"], correctAnswer: "Moderna e tecnológica" },
            { question: "Qual é o principal uso das salas de reunião na MaxMilhas?", options: ["Eventos sociais", "Reuniões e brainstorming", "Armazenamento de arquivos", "Descanso dos funcionários"], correctAnswer: "Reuniões e brainstorming" },
            { question: "Quantas salas de reunião existem no 10º andar da MaxMilhas?", options: ["2", "3", "4", "5"], correctAnswer: "4" },
            { question: "Qual sala de reunião do 11º andar é dedicada a reuniões estratégicas?", options: ["Sala Nova York", "Sala Roma", "Sala São Paulo", "Sala 3"], correctAnswer: "Sala Roma" },
            { question: "O que caracteriza o auditório na sede da MaxMilhas?", options: ["É pequeno e reservado", "É um espaço para eventos e treinamentos", "É exclusivo para o time de TI", "É utilizado como área de descanso"], correctAnswer: "É um espaço para eventos e treinamentos" },
            { question: "Onde está localizado o time de emissões no 10º andar?", options: ["No lado esquerdo", "No centro da sala", "No lado direito", "Em uma sala separada"], correctAnswer: "No centro da sala" },
            { question: "Qual é a principal responsabilidade do time de chat e atendimento na MaxMilhas?", options: ["Controlar orçamentos", "Oferecer suporte ao cliente", "Gerenciar finanças", "Planejar estratégias"], correctAnswer: "Oferecer suporte ao cliente" },
            { question: "Em que área o time de financeiro está alocado no 10º andar?", options: ["No lado esquerdo", "No centro da sala", "No lado direito", "Em uma sala específica"], correctAnswer: "Em uma sala específica" },
            { question: "Qual é a função do suporte de TI na MaxMilhas?", options: ["Gerar relatórios financeiros", "Auxiliar nas operações do Cockpit", "Manter a infraestrutura tecnológica", "Fazer atendimento ao cliente"], correctAnswer: "Manter a infraestrutura tecnológica" },
            { question: "A área de TI e suporte é responsável por:", options: ["Organizar eventos", "Controlar vendas", "Garantir o funcionamento dos sistemas", "Planejar estratégias de marketing"], correctAnswer: "Garantir o funcionamento dos sistemas" },
                        
        ]
    },
    {
        id: 'historia',
        title: "História da Empresa e Cultura",
        questions: [
            { question: "Em que ano a MaxMilhas foi fundada?", options: ["2011", "2012", "2013", "2014"], correctAnswer: "2013" },
            { question: "Qual era o objetivo principal da MaxMilhas ao ser criada?", options: ["Aumentar o uso de milhas aéreas", "Reduzir o custo de passagens", "Conectar pessoas em viagens", "Gerar mais pontos em programas de fidelidade"], correctAnswer: "Reduzir o custo de passagens" },
            { question: "Como a MaxMilhas conecta vendedores e compradores?", options: ["Por meio de um sistema de pontos", "Através de uma plataforma online", "Com atendimento telefônico", "Apenas pessoalmente"], correctAnswer: "Através de uma plataforma online" },
            { question: "Qual foi um dos principais diferenciais da MaxMilhas?", options: ["Oferecer voos gratuitos", "Permitir venda e compra de milhas", "Criar seu próprio programa de fidelidade", "Concentrar-se em voos internacionais"], correctAnswer: "Permitir venda e compra de milhas" },
            { question: "Qual foi o reconhecimento recebido pela MaxMilhas em 2017?", options: ["Prêmio de Melhor Empresa de Turismo", "Startup do Ano", "Melhor Atendimento ao Cliente", "Empresa com Maior Crescimento"], correctAnswer: "Startup do Ano" },
            { question: "Qual foi o marco financeiro que a MaxMilhas alcançou em 2014?", options: ["Entrou na Bolsa de Valores", "Alcançou break-even", "Fez sua primeira aquisição", "Mudou para um novo escritório"], correctAnswer: "Alcançou break-even" },
            { question: "Quantas passagens a MaxMilhas emitiu desde seu lançamento?", options: ["Mais de 1 milhão", "Mais de 3 milhões", "Mais de 5 milhões", "Mais de 6 milhões"], correctAnswer: "Mais de 6 milhões" },
            { question: "A MaxMilhas foi reconhecida pelo Great Place to Work (GPTW) em qual categoria?", options: ["Inovação no Trabalho", "Melhor Empresa de Turismo", "Melhor Empresa para Trabalhar", "Empresa de Maior Impacto Social"], correctAnswer: "Melhor Empresa para Trabalhar" },
            { question: "A expansão da equipe MaxMilhas é reflexo de quê?", options: ["Baixa demanda no mercado", "Alta demanda e confiança nos serviços", "Concorrência com outras empresas", "Redução do número de clientes"], correctAnswer: "Alta demanda e confiança nos serviços" },
            { question: "Qual objetivo a MaxMilhas busca alcançar com seu impacto social?", options: ["Aumentar o uso de milhas aéreas", "Tornar viagens mais acessíveis", "Ser a maior empresa de milhas", "Acumular mais milhas para clientes"], correctAnswer: "Tornar viagens mais acessíveis" },
            { question: "O que motivou a criação da MaxMilhas?", options: ["Facilitar a venda de milhas aéreas", "Conectar empresas de aviação", "Oferecer voos internacionais", "Gerar fidelidade ao cliente"], correctAnswer: "Facilitar a venda de milhas aéreas" },
            { question: "Qual premiação da MaxMilhas envolveu uma revista?", options: ["Startup do Ano", "Great Place to Work", "E-Commerce Brasil de Inovação", "Melhor Empresa de Turismo"], correctAnswer: "E-Commerce Brasil de Inovação" },
            { question: "Qual serviço adicional a MaxMilhas oferece além da emissão de passagens com milhas?", options: ["Compra de milhas", "Comparação de preços com companhias aéreas", "Reserva de hotéis", "Aluguel de veículos"], correctAnswer: "Comparação de preços com companhias aéreas" },
            { question: "Qual é o principal valor que orienta a MaxMilhas em sua missão de tornar viagens mais acessíveis?", options: ["Propósito claro", "Crescimento pessoal", "Valorização do colaborador", "Inovação"], correctAnswer: "Propósito claro" },
{ question: "Qual característica da cultura da MaxMilhas promove a criação de novas ideias e aprendizado?", options: ["Transparência e ética", "Inovação e agilidade", "Foco no cliente", "Diversidade e inclusão"], correctAnswer: "Inovação e agilidade" },
{ question: "Qual benefício a MaxMilhas oferece aos colaboradores para que possam vivenciar as experiências oferecidas aos clientes?", options: ["Milhas para viagens", "Treinamentos semanais", "Convênios com escolas", "Auxílio-moradia"], correctAnswer: "Milhas para viagens" },
{ question: "Qual prêmio a MaxMilhas recebeu que atesta a qualidade do seu ambiente de trabalho?", options: ["Melhores Empresas para Trabalhar", "Prêmio RA 1000", "Prêmio de Inovação Tecnológica", "Empresas de Sucesso"], correctAnswer: "Melhores Empresas para Trabalhar" },
{ question: "Qual é o foco principal do atendimento ao cliente na MaxMilhas?", options: ["Rapidez nas transações", "Excelência e personalização", "Vendas exclusivas", "Descontos de fidelidade"], correctAnswer: "Excelência e personalização" },
{ question: "Qual selo a MaxMilhas recebeu no Reclame Aqui?", options: ["RA 1000", "Excelência em Atendimento", "Selo de Qualidade", "Top 10 Atendimento"], correctAnswer: "RA 1000" },
{ question: "Qual valor guia a MaxMilhas a promover um ambiente de trabalho onde todos se sentem incluídos e respeitados?", options: ["Diversidade e inclusão", "Crescimento pessoal", "Inovação e agilidade", "Foco no cliente"], correctAnswer: "Diversidade e inclusão" },
{ question: "Como a MaxMilhas incentiva o desenvolvimento dos colaboradores?", options: ["Com treinamentos e mentorias", "Apenas com feedbacks", "Com cursos externos", "Com aumento de salário"], correctAnswer: "Com treinamentos e mentorias" },
{ question: "Qual é o modelo de negócio único que destaca a MaxMilhas no mercado de passagens?", options: ["Conexão entre vendedores de milhas e compradores de passagens", "Venda direta de passagens aéreas", "Promoção de viagens exclusivas", "Ofertas de pacotes turísticos"], correctAnswer: "Conexão entre vendedores de milhas e compradores de passagens" },
{ question: "Em que a MaxMilhas investe continuamente para aprimorar a experiência do usuário?", options: ["Tecnologia e inovação", "Parcerias com hotéis", "Marketing e publicidade", "Descontos para clientes frequentes"], correctAnswer: "Tecnologia e inovação" },
{ question: "Qual verbo-chave reflete o compromisso da MaxMilhas em oferecer as melhores soluções aos clientes?", options: ["Amar", "Aproximar", "Arriscar", "Acelerar"], correctAnswer: "Amar" },
{ question: "Qual é a missão da MaxMilhas que envolve conectar clientes e vendedores de milhas?", options: ["Aproximar", "Arriscar", "Amar", "Acelerar"], correctAnswer: "Aproximar" },
{ question: "O que a MaxMilhas busca ao encorajar a ousadia e a tomada de decisões corajosas?", options: ["Arriscar", "Aproximar", "Acelerar", "Amar"], correctAnswer: "Arriscar" },
{ question: "Qual é a principal responsabilidade da alta direção na MaxMilhas?", options: ["Gerenciar as operações diárias", "Definir a estratégia global", "Realizar atendimentos aos clientes", "Desenvolver campanhas publicitárias"], correctAnswer: "Definir a estratégia global" },
{ question: "Qual é a função principal das gerências na MaxMilhas?", options: ["Liderar equipes de atendimento", "Supervisionar áreas específicas", "Desenvolver software", "Garantir conformidade legal"], correctAnswer: "Supervisionar áreas específicas" },
{ question: "Qual equipe é responsável pela emissão de passagens na MaxMilhas?", options: ["Equipe de tecnologia", "Equipe de operações", "Equipe financeira", "Equipe de marketing"], correctAnswer: "Equipe de operações" },
{ question: "Qual o foco da equipe de atendimento ao cliente da MaxMilhas?", options: ["Garantir segurança dos dados", "Resolver dúvidas e fornecer suporte", "Gerenciar finanças", "Criar estratégias de marketing"], correctAnswer: "Resolver dúvidas e fornecer suporte" },
{ question: "Qual o principal objetivo da equipe de marketing da MaxMilhas?", options: ["Aumentar a visibilidade da marca", "Analisar dados financeiros", "Gerenciar emissão de passagens", "Atender aos clientes"], correctAnswer: "Aumentar a visibilidade da marca" },
{ question: "Quem é responsável pela plataforma tecnológica da MaxMilhas?", options: ["Equipe de operações", "Equipe de tecnologia", "Equipe de análise de dados", "Equipe jurídica"], correctAnswer: "Equipe de tecnologia" },
{ question: "Qual o papel da equipe de análise de dados na MaxMilhas?", options: ["Controlar receitas e despesas", "Realizar emissões de passagens", "Fornecer insights estratégicos", "Atuar no atendimento ao cliente"], correctAnswer: "Fornecer insights estratégicos" },
{ question: "Qual equipe gerencia as finanças da MaxMilhas?", options: ["Equipe de operações", "Equipe financeira", "Equipe de análise de dados", "Alta direção"], correctAnswer: "Equipe financeira" },
{ question: "Qual é a responsabilidade da equipe jurídica na MaxMilhas?", options: ["Proteger os dados dos clientes", "Garantir conformidade legal", "Desenvolver campanhas de marketing", "Gerenciar operações diárias"], correctAnswer: "Garantir conformidade legal" },
{ question: "Como a MaxMilhas promove a colaboração entre as equipes?", options: ["Impondo regras rígidas", "Estimulando inovação e comunicação aberta", "Usando sistemas de controle", "Limitando interações entre setores"], correctAnswer: "Estimulando inovação e comunicação aberta" },
{ question: "O que significa o termo 'Cérebro de Branding' na MaxMilhas?", options: ["Uma equipe de marketing", "Uma ferramenta que centraliza a estratégia de marca", "Um setor da alta direção", "Um software de análise de dados"], correctAnswer: "Uma ferramenta que centraliza a estratégia de marca" },
{ question: "Qual é o principal compromisso da MaxMilhas?", options: ["Garantir satisfação financeira", "Oferecer formas inteligentes de viajar mais", "Ser a líder em viagens a negócios", "Focar no desenvolvimento tecnológico"], correctAnswer: "Oferecer formas inteligentes de viajar mais" },
{ question: "Como a MaxMilhas se diferencia no mercado?", options: ["Pela exclusividade dos serviços", "Por oferecer uma experiência intuitiva e preços competitivos", "Por limitar seu público a viajantes de negócios", "Por ser exclusivamente uma agência de viagens"], correctAnswer: "Por oferecer uma experiência intuitiva e preços competitivos" },

        ]
    },
    {
        id: 'nocao',
        title: "Noções de Informática",
        questions: [
            { question: "Qual é a função principal de um navegador de internet?", options: ["Acessar sites na web", "Criar documentos", "Executar programas", "Armazenar arquivos"], correctAnswer: "Acessar sites na web" },

            { question: "Qual é o navegador mais popular, conhecido por sua velocidade e integração com a conta do Google?", options: ["Mozilla Firefox", "Opera GX", "Google Chrome", "Microsoft Edge"], correctAnswer: "Google Chrome" },
            
            { question: "Qual o atalho no Chrome para abrir o histórico de navegação?", options: ["Ctrl + T", "Ctrl + W", "Ctrl + H", "Ctrl + Shift + N"], correctAnswer: "Ctrl + H" },
            
            { question: "Qual a finalidade da navegação anônima ou privada?", options: ["Salvar favoritos", "Armazenar histórico", "Bloquear anúncios", "Navegar sem salvar histórico ou cookies"], correctAnswer: "Navegar sem salvar histórico ou cookies" },
            
            { question: "Para acessar um site seguro, o que você deve observar no início do endereço do site?", options: ["ftp://", "http://", "https://", "www."], correctAnswer: "https://" },
            
            { question: "O que são extensões de navegador?", options: ["Sites na web", "Pequenos programas que adicionam funcionalidades", "Sistemas operacionais", "Aplicativos de segurança"], correctAnswer: "Pequenos programas que adicionam funcionalidades" },
            
            { question: "Como habilitar uma extensão para funcionar em modo anônimo no Google Chrome?", options: ["Vá até Configurações > Segurança", "Acesse chrome://extensions/ e ative o modo desenvolvedor", "Acesse chrome://extensions/ e ative a opção permitir em modo anônimo", "Arraste a extensão para a barra de endereços"], correctAnswer: "Acesse chrome://extensions/ e ative a opção permitir em modo anônimo" },
            { "question": "O que são cookies?", "options": ["Arquivos de texto armazenados no navegador", "Programas de software", "Imagens de sites", "Vídeos de navegação"], "correctAnswer": "Arquivos de texto armazenados no navegador" },
{ "question": "Qual é a função dos cookies de preferências?", "options": ["Armazenar dados de login", "Guardar preferências de idioma e layout", "Rastrear a atividade do usuário", "Controlar o tempo de navegação"], "correctAnswer": "Guardar preferências de idioma e layout" },
{ "question": "O que são cookies de sessão?", "options": ["Cookies que permanecem no navegador por tempo indeterminado", "Cookies que desaparecem ao fechar o navegador", "Cookies utilizados apenas para publicidade", "Cookies que armazenam dados de forma permanente"], "correctAnswer": "Cookies que desaparecem ao fechar o navegador" },
{ "question": "Qual é a principal preocupação com cookies de terceiros?", "options": ["Aumentam a velocidade de navegação", "Comprometem a segurança do navegador", "Rastreiam a atividade do usuário em vários sites", "Facilitam o login automático"], "correctAnswer": "Rastreiam a atividade do usuário em vários sites" },
{ "question": "Qual é a função de um cookie persistente?", "options": ["Guardar informações temporariamente", "Permitir o login automático em várias visitas", "Desaparecer ao fechar o navegador", "Aumentar a largura de banda da conexão"], "correctAnswer": "Permitir o login automático em várias visitas" },
{ "question": "Como os cookies ajudam na personalização da experiência de navegação?", "options": ["Impedindo que sites sejam acessados", "Lembrando preferências e informações do usuário", "Aumentando a velocidade de download", "Bloqueando anúncios"], "correctAnswer": "Lembrando preferências e informações do usuário" },
{ "question": "Por que é importante gerenciar cookies?", "options": ["Para aumentar a velocidade do navegador", "Para proteger a privacidade online", "Para evitar downloads automáticos", "Para melhorar a qualidade da imagem"], "correctAnswer": "Para proteger a privacidade online" },
{ question: "O que é uma VPN?", options: ["Rede privada virtual", "Serviço de e-mail", "Sistema de backup", "Antivírus"], correctAnswer: "Rede privada virtual" },
{ question: "Qual é a principal função de uma VPN?", options: ["Aumentar a velocidade da internet", "Criar uma conexão segura", "Compartilhar arquivos", "Limitar o acesso à internet"], correctAnswer: "Criar uma conexão segura" },
{ question: "Qual é uma vantagem do uso de uma VPN?", options: ["Acesso a redes públicas", "Maior privacidade online", "Redução de custos de internet", "Aumento de sinal Wi-Fi"], correctAnswer: "Maior privacidade online" },
{ question: "O que é criptografia em uma VPN?", options: ["O processo de aumentar a velocidade da conexão", "A técnica de ocultar dados durante a transmissão", "Uma forma de acessar a internet rapidamente", "Um método de compartilhar arquivos"], correctAnswer: "A técnica de ocultar dados durante a transmissão" },
{ question: "Qual é um tipo de VPN?", options: ["VPN de acesso remoto", "VPN de backup", "VPN de armazenamento", "VPN de comunicação"], correctAnswer: "VPN de acesso remoto" },
{ question: "Para que serve a VPN de site a site?", options: ["Conectar redes locais de diferentes escritórios", "Aumentar a velocidade da internet", "Bloquear sites indesejados", "Armazenar dados na nuvem"], correctAnswer: "Conectar redes locais de diferentes escritórios" },
{ question: "Qual ferramenta de VPN é utilizada pela MaxMilhas para superar bloqueios em sites de companhias aéreas?", options: ["AVG Secure VPN", "NordVPN", "ExpressVPN", "CyberGhost"], correctAnswer: "AVG Secure VPN" },
{ question: "Qual é a função principal das ferramentas de captura de tela na MaxMilhas?", options: ["Registrar informações visuais", "Editar vídeos", "Criar apresentações", "Enviar e-mails"], correctAnswer: "Registrar informações visuais" },
{ question: "Qual ferramenta nativa do Windows é utilizada para capturar a tela?", options: ["Lightshot", "Snipping Tool", "Photoshop", "Paint"], correctAnswer: "Snipping Tool" },
{ question: "Como você pode capturar um e-ticket utilizando as ferramentas de captura?", options: ["Através de um aplicativo de vídeo", "Utilizando Snipping Tool ou Lightshot", "Fazendo uma captura de som", "Mandando um e-mail"], correctAnswer: "Utilizando Snipping Tool ou Lightshot" },
{ question: "Qual é uma das funções do CCleaner?", options: ["Capturar telas", "Remover arquivos temporários", "Editar imagens", "Criar backups de arquivos"], correctAnswer: "Remover arquivos temporários" },
{ question: "Qual é o atalho padrão para usar a Ferramenta de Captura no Windows 10/11?", options: ["Ctrl + C", "Alt + S", "Windows + Shift + S", "Print Screen"], correctAnswer: "Windows + Shift + S" },
{ question: "Qual simulador Android é conhecido por sua leveza e alto desempenho?", options: ["BlueStacks", "LDPlayer 9", "NoxPlayer", "Genymotion"], correctAnswer: "LDPlayer 9" },
{ question: "Para que os simuladores Android são utilizados na MaxMilhas?", options: ["Apenas para jogos", "Para emular a experiência de dispositivos móveis", "Para edição de vídeos", "Para programação"], correctAnswer: "Para emular a experiência de dispositivos móveis" },
{ question: "Qual é o principal objetivo da segurança da informação?", options: ["Proteger dados contra acessos não autorizados", "Aumentar a velocidade da internet", "Reduzir custos operacionais", "Facilitar a comunicação interna"], correctAnswer: "Proteger dados contra acessos não autorizados" },
{ question: "Quais são os três pilares fundamentais da segurança da informação?", options: ["Confidencialidade, integridade e disponibilidade", "Autenticidade, segurança e transparência", "Privacidade, confiabilidade e acessibilidade", "Veracidade, controle e rastreabilidade"], correctAnswer: "Confidencialidade, integridade e disponibilidade" },
{ question: "O que deve ser evitado ao criar senhas?", options: ["Utilizar combinações de letras e números", "Usar informações pessoais como data de nascimento", "Trocar senhas periodicamente", "Utilizar autenticação de dois fatores"], correctAnswer: "Usar informações pessoais como data de nascimento" },
{ question: "Qual prática deve ser adotada para proteger dispositivos?", options: ["Deixar o dispositivo desbloqueado em locais públicos", "Utilizar senhas e bloqueios de tela", "Instalar software de fontes desconhecidas", "Desativar atualizações de segurança"], correctAnswer: "Utilizar senhas e bloqueios de tela" },
{ question: "O que é phishing?", options: ["Uma técnica de proteção de dados", "Um tipo de ataque que tenta enganar o usuário para obter informações sensíveis", "Uma ferramenta de segurança da informação", "Um tipo de software antivírus"], correctAnswer: "Um tipo de ataque que tenta enganar o usuário para obter informações sensíveis" },
{ question: "Qual é a finalidade da LGPD?", options: ["Regular a coleta, armazenamento e tratamento de dados pessoais", "Aumentar a velocidade da internet", "Facilitar a comunicação interna", "Reduzir os custos operacionais"], correctAnswer: "Regular a coleta, armazenamento e tratamento de dados pessoais" },
{ question: "Qual ferramenta é utilizada na MaxMilhas para comunicação interna segura?", options: ["Slack", "Metabase", "Zendesk", "AVG Secure VPN"], correctAnswer: "Slack" }


            
        ]
    },
    {
        id: 'prejuizos',
        title: "Prejuízos",
        questions: [
            { question: "O que são prejuízos financeiros?", options: ["Aumento de receitas", "Perda financeira em operações ou investimentos", "Lucro líquido da empresa", "Reservas de emergência"], correctAnswer: "Perda financeira em operações ou investimentos" },
            { question: "Qual é um dos impactos diretos dos prejuízos na empresa?", options: ["Aumento do lucro", "Comprometimento do fluxo de caixa", "Facilidade de financiamento", "Melhoria na reputação"], correctAnswer: "Comprometimento do fluxo de caixa" },
            { question: "Qual dos seguintes fatores contribui para os prejuízos na MaxMilhas?", options: ["Aumento de vendas", "Emissão na conta errada", "Redução de custos operacionais", "Investimentos bem-sucedidos"], correctAnswer: "Emissão na conta errada" },
            { question: "Qual tipo de prejuízo ocorre quando uma passagem é emitida mais de uma vez?", options: ["Emissão na conta errada", "Emissão duplicada", "Transação cancelada", "Aumento indevido de milhas"], correctAnswer: "Emissão duplicada" },
            { question: "O que significa 'transação cancelada com localizador ativo'?", options: ["Transação concluída com sucesso", "Cancelamento de uma transação sem impacto", "Cancelamento sem remoção do localizador, resultando em possíveis custos adicionais", "Transação reembolsada totalmente"], correctAnswer: "Cancelamento sem remoção do localizador, resultando em possíveis custos adicionais" },
            { question: "Qual é um dos tipos comuns de prejuízos identificados na MaxMilhas?", options: ["Aumento das vendas", "Emissão na conta errada", "Transferência de milhas bem-sucedida", "Promoções de milhas"], correctAnswer: "Emissão na conta errada" },
            { question: "O que é essencial para minimizar prejuízos na empresa?", options: ["Aumento de investimentos", "Implementação de medidas preventivas e treinamento adequado", "Expansão das operações", "Redução de custos"], correctAnswer: "Implementação de medidas preventivas e treinamento adequado" },
            { question: "O que é uma emissão duplicada?", options: ["Uma passagem emitida corretamente", "Quando a mesma transação é emitida mais de uma vez", "Emissão de passagens em contas diferentes", "Cancelamento de uma passagem"], correctAnswer: "Quando a mesma transação é emitida mais de uma vez" },
{ question: "Qual é a principal causa das emissões duplicadas?", options: ["Falta de checagem no log automático", "Verificação rigorosa", "Processo de treinamento adequado", "Controle de qualidade das emissões"], correctAnswer: "Falta de checagem no log automático" },
{ question: "Qual ação deve ser tomada ao identificar uma emissão duplicada?", options: ["Emitir uma nova passagem", "Cancelar a transação anterior", "Alterar os dados da nova transação", "Ignorar o erro"], correctAnswer: "Cancelar a transação anterior" },
{ question: "O que pode resultar de uma emissão na conta errada?", options: ["Confusão no gerenciamento das reservas", "Aumento de receitas", "Melhoria na experiência do cliente", "Redução de custos operacionais"], correctAnswer: "Confusão no gerenciamento das reservas" },
{ question: "Por que as emissões na conta errada ocorrem?", options: ["Falta de atenção do analista", "Processos automatizados", "Verificações constantes", "Comunicação eficaz"], correctAnswer: "Falta de atenção do analista" },
{ question: "Qual é um passo importante para evitar emissões na conta errada?", options: ["Realizar uma verificação no extrato do ofertante", "Emitir passagens rapidamente", "Aumentar o número de transações", "Simplificar o processo de emissão"], correctAnswer: "Realizar uma verificação no extrato do ofertante" },
{ question: "Qual a importância do treinamento para os analistas?", options: ["Aumentar a quantidade de emissões", "Minimizar erros e melhorar a eficiência do processo de emissão", "Reduzir o tempo de trabalho", "Eliminação de controles"], correctAnswer: "Minimizar erros e melhorar a eficiência do processo de emissão" },
{ question: "O que ocorre quando uma transação é cancelada sem verificação?", options: ["O cancelamento é bem-sucedido", "Um localizador ativo permanece", "O cliente é informado automaticamente", "Não há impacto na reserva"], correctAnswer: "Um localizador ativo permanece" },
{ question: "Qual é a principal causa de uma transação cancelada com localizador ativo?", options: ["Verificação excessiva", "Falta de checagem no log automático", "Atualização de dados", "Comunicação com o cliente"], correctAnswer: "Falta de checagem no log automático" },
{ question: "Como deve ser tratada uma transação cancelada em até 24 horas?", options: ["Aguarda-se o retorno do cliente", "Contato com a companhia aérea para cancelamento sem custo", "Realiza-se nova emissão", "Ignora-se a transação"], correctAnswer: "Contato com a companhia aérea para cancelamento sem custo" },
{ question: "O que acontece quando há um aumento de milhas e a emissão é realizada sem correção?", options: ["O cliente recebe reembolso", "A quantidade de milhas utilizada permanece incorreta", "O sistema cancela automaticamente", "Não há consequências"], correctAnswer: "A quantidade de milhas utilizada permanece incorreta" },
{ question: "Qual é uma ação importante para tratar um aumento sem tratativa?", options: ["Alterar a quantidade de milhas no sistema administrativo", "Emitir a passagem imediatamente", "Comunicar apenas a equipe", "Esperar feedback do cliente"], correctAnswer: "Alterar a quantidade de milhas no sistema administrativo" },
{ question: "O que deve ser inserido no fluxo de processo de emissão em relação à quantidade de milhas?", options: ["Um passo que exige checagem da quantidade de milhas", "Um botão para ignorar aumentos", "Uma tabela de referência", "Nada, pois não é necessário"], correctAnswer: "Um passo que exige checagem da quantidade de milhas" },
{ question: "Por que é importante treinar a equipe sobre as verificações de milhas?", options: ["Para aumentar a carga de trabalho", "Para garantir a eficiência no atendimento ao cliente", "Para evitar erros e garantir a precisão nas transações", "Para reduzir o número de passagens emitidas"], correctAnswer: "Para evitar erros e garantir a precisão nas transações" }

            
        ]
    },
    {
        id: 'emissoes',
        title: "Emissões",
        questions: [
            { question: "Qual é o primeiro passo do processo de transação na Maxmilhas?", options: ["Análise do pagamento", "Compra de passagem no site", "Criação da transação no Cockpit", "Envio do localizador ao cliente"], correctAnswer: "Compra de passagem no site" },
            { question: "Quanto tempo pode levar a análise do pagamento após a compra?", options: ["Imediatamente", "Até 12 horas", "24 horas", "48 horas"], correctAnswer: "Até 12 horas" },
            { question: "O que ocorre após a aprovação do pagamento?", options: ["A transação é cancelada", "A transação é criada no Cockpit", "O cliente recebe um reembolso", "Nada acontece"], correctAnswer: "A transação é criada no Cockpit" },
            { question: "Qual é o objetivo principal do Cockpit na Maxmilhas?", options: ["Emitir passagens", "Gerenciar o atendimento ao cliente", "Conectar ofertantes de milhas", "Realizar pagamentos"], correctAnswer: "Conectar ofertantes de milhas" },
            { question: "Qual é a finalidade do localizador enviado ao cliente?", options: ["Acompanhar a viagem", "Realizar o pagamento", "Alterar a reserva", "Emitir novas passagens"], correctAnswer: "Acompanhar a viagem" },
            { question: "O que deve ser feito para iniciar transações no Cockpit?", options: ["Contatar o cliente", "Efetuar login no sistema", "Aguarda-se o pagamento", "Verificar as milhas disponíveis"], correctAnswer: "Efetuar login no sistema" },
            { question: "Quais informações podem ser registradas nos comentários das transações?", options: ["Detalhes do voo", "Dados pessoais do cliente", "Informações sobre a emissão", "Status de pagamento"], correctAnswer: "Informações sobre a emissão" },
            { question: "Qual é o primeiro passo após iniciar uma transação no Cockpit?", options: ["Verificar a tarifa", "Acessar o site da companhia aérea", "Confirmar a data do voo", "Emitir o bilhete"], correctAnswer: "Acessar o site da companhia aérea" },
{ question: "O que deve ser confirmado ao buscar pelo voo no site da companhia aérea?", options: ["O nome do passageiro", "O número do voo", "A quantidade de milhas", "O CPF do ofertante"], correctAnswer: "O número do voo" },
{ question: "Por que é importante verificar a tarifa no site da companhia aérea?", options: ["Para alterar o número do voo", "Para evitar problemas na emissão", "Para adicionar mais milhas", "Para cancelar a transação"], correctAnswer: "Para evitar problemas na emissão" },
{ question: "O que deve ser feito se houver um aumento na quantidade de milhas durante a verificação?", options: ["Atualizar as milhas no Cockpit", "Emitir um novo bilhete", "Remover o ofertante", "Cancelar a transação"], correctAnswer: "Atualizar as milhas no Cockpit" },
{ question: "Qual é a primeira ação ao cancelar uma transação por voo indisponível?", options: ["Atualizar a página", "Trocar o ofertante", "Selecionar o motivo do cancelamento", "Confirmar o cancelamento"], correctAnswer: "Trocar o ofertante" },
{ question: "Qual informação é essencial para cadastrar passageiros no site da companhia aérea?", options: ["Data de nascimento", "Número do voo", "Horário do voo", "Limite do cartão"], correctAnswer: "CPF" },
{ question: "O que deve ser revisado na página de pagamento antes de finalizar a compra?", options: ["Dados do passageiro", "Número do cartão de crédito", "Informações do voo", "Dados do ofertante"], correctAnswer: "Informações do voo" },
{ question: "O que é um e-ticket?", options: ["Um bilhete físico", "Um comprovante digital da compra", "Um código de acesso ao voo", "Uma etiqueta de bagagem"], correctAnswer: "Um comprovante digital da compra" },
{ question: "Qual informação NÃO está incluída no e-ticket?", options: ["Número do voo", "Data e hora da partida", "Número da mala", "Dados do passageiro"], correctAnswer: "Número da mala" },
{ question: "Como deve ser capturado o e-ticket?", options: ["Imprimindo-o", "Usando uma ferramenta de captura de tela", "Salvando em formato PDF", "Enviando por e-mail"], correctAnswer: "Usando uma ferramenta de captura de tela" },
{ question: "Qual é a primeira ação a ser realizada após a confirmação do pagamento?", options: ["Retornar ao Cockpit", "Capturar o e-ticket", "Fazer upload do e-ticket", "Iniciar a emissão automática"], correctAnswer: "Capturar o e-ticket" },
{ question: "Qual é a função do botão 'Inserir e-ticket' no Cockpit?", options: ["Emitir um novo e-ticket", "Registrar o e-ticket capturado", "Cancelar a transação", "Visualizar detalhes do voo"], correctAnswer: "Registrar o e-ticket capturado" },
{ question: "O que deve ser feito se aparecer uma mensagem de erro na checagem automática?", options: ["Ignorar a mensagem", "Verificar os dados inseridos", "Repetir o processo de inserção", "Registrar o erro no sistema"], correctAnswer: "Verificar os dados inseridos" },
{ question: "Qual é o propósito das emissões semi-automáticas?", options: ["Emitir passagens sem supervisão", "Combinar automação com supervisão humana", "Facilitar a emissão manual de passagens", "Gerar relatórios financeiros"], correctAnswer: "Combinar automação com supervisão humana" },
{ question: "Qual é a função principal da aba de Erro após pagamento?", options: ["Emitir bilhetes aéreos", "Gerenciar transações com problemas", "Controlar as bagagens", "Registrar pagamentos"], correctAnswer: "Gerenciar transações com problemas" },
{ question: "O que deve ser verificado na conta do ofertante para transações com erro?", options: ["Saldo disponível", "Status da emissão da passagem", "Número de milhas acumuladas", "Data da compra"], correctAnswer: "Status da emissão da passagem" },
{ question: "Qual ação deve ser tomada se a passagem não tiver sido emitida após um erro?", options: ["Encerrar a transação", "Emitir a passagem manualmente", "Aguardar mais um dia", "Contactar o suporte"], correctAnswer: "Emitir a passagem manualmente" },
{ question: "O que a aba Erro/Aumento monitora?", options: ["Transações finalizadas", "Transações com aumento de milhas ou erros", "Histórico de emissões", "Dados do cliente"], correctAnswer: "Transações com aumento de milhas ou erros" },
{ question: "Qual é o prazo para monitorar transações na aba Erro/Aumento?", options: ["30 minutos", "1 a 2 horas", "24 horas", "Imediatamente"], correctAnswer: "1 a 2 horas" },
{ question: "Qual é a primeira etapa para adicionar bagagens em uma transação da Gol?", options: ["Contatar o suporte", "Acessar o site da Gol", "Emitir um novo e-ticket", "Cancelar a passagem"], correctAnswer: "Acessar o site da Gol" },
{ question: "Por que é importante adicionar bagagens corretamente?", options: ["Para evitar erros de pagamento", "Para garantir a experiência tranquila no aeroporto", "Para aumentar as milhas", "Para finalizar a compra mais rápido"], correctAnswer: "Para garantir a experiência tranquila no aeroporto" },
{ question: "Qual é a função principal da aba de checagem?", options: ["Emitir bilhetes aéreos", "Gerenciar transações pendentes devido a erros", "Registrar pagamentos", "Adicionar bagagens"], correctAnswer: "Gerenciar transações pendentes devido a erros" },
{ question: "O que deve ser verificado na aba de checagem?", options: ["Dados de pagamento e informações do cartão", "Informações do cliente", "Transações anteriores", "Estatísticas de vendas"], correctAnswer: "Dados de pagamento e informações do cartão" },
{ question: "Qual ação deve ser tomada se os dados estiverem incorretos na aba de checagem?", options: ["Cancelar e reemitir a passagem", "Notificar o cliente", "Aguardar mais um dia", "Emitir o bilhete normalmente"], correctAnswer: "Cancelar e reemitir a passagem" },
{ question: "Quando uma transação é marcada como suspeita de fraude, o que deve ser feito?", options: ["Emitir a passagem imediatamente", "Verificar cuidadosamente antes da emissão", "Cancelar a transação", "Aguardar autorização do gerente"], correctAnswer: "Verificar cuidadosamente antes da emissão" },
{ question: "Qual método de pagamento permite prosseguir com a emissão sem verificações adicionais?", options: ["Cartão de crédito", "Payme ou Pagar.me", "Transferência bancária", "Boleto"], correctAnswer: "Payme ou Pagar.me" },
{ question: "O que deve ser feito se encontrar um e-mail de contestação de pagamento no Zendesk?", options: ["Emitir a passagem", "Notificar o grupo de prevenção", "Cancelar a transação", "Prosseguir com a emissão após notificação"], correctAnswer: "Não emitir a passagem nesse caso" },
{ question: "Qual é o procedimento padrão se uma transação foi feita com dados incorretos?", options: ["Cancelar o localizador e refazer a emissão", "Emitir a passagem novamente", "Notificar o cliente", "Aguardar mais um dia"], correctAnswer: "Cancelar o localizador e refazer a emissão" }


            

        ]
    },
    {
        id: 'emissoeslatam',
        title: "Emissoes LATAM",
        questions: [
            { question: "Qual é o primeiro passo para iniciar a emissão de passagens no Cockpit da Maxmilhas?", options: ["Selecionar a aba Completo", "Efetuar login", "Escolher a companhia aérea", "Iniciar emissões"], correctAnswer: "Efetuar login" },
            { question: "Qual opção deve ser selecionada no menu lateral para acessar as funcionalidades completas de emissão?", options: ["Emissões", "Cockpit", "Relatórios", "Configurações"], correctAnswer: "Cockpit" },
            { question: "O que é necessário fazer após escolher uma aba para emissões no Cockpit?", options: ["Aplicar opções de filtragem", "Efetuar logout", "Acessar o suporte", "Visualizar o histórico"], correctAnswer: "Aplicar opções de filtragem" },
            { question: "Quais tipos de pontos os membros do Latam Pass podem acumular ao voar?", options: ["Pontos de bônus e pontos qualificáveis", "Pontos de milhas e pontos de desconto", "Pontos internacionais e locais", "Pontos de viagem e pontos promocionais"], correctAnswer: "Pontos de bônus e pontos qualificáveis" },
            { question: "Qual categoria do Latam Pass oferece benefícios como acesso a salas VIP?", options: ["Gold", "Latam Pass", "Diamante", "Platinum"], correctAnswer: "Platinum" },
            { question: "O que os membros do Latam Pass podem fazer com seus pontos acumulados?", options: ["Trocar por passagens aéreas", "Realizar check-in", "Criar novos voos", "Cancelar passagens"], correctAnswer: "Trocar por passagens aéreas" },
            { question: "O que indica o comentário 'Erro: usuário e/ou senha inválidos'?", options: ["Problema na conexão com a internet", "Credenciais fornecidas não foram aceitas", "Sistema fora do ar", "Erro no código de emissão"], correctAnswer: "Credenciais fornecidas não foram aceitas" },
            { question: "Qual é a função principal da Bifrost na emissão de bilhetes da Latam?", options: ["Salvar sessões para login", "Emitir bilhetes aéreos", "Criar relatórios de milhas", "Gerar alertas de voos"], correctAnswer: "Salvar sessões para login" },
{ question: "Qual é o primeiro passo para acessar a conta do ofertante usando a Bifrost?", options: ["Inserir o CPF do ofertante", "Conectar ao IP do ofertante", "Abrir o site da Latam", "Salvar a sessão"], correctAnswer: "Inserir o CPF do ofertante" },
{ question: "O que deve ser feito se não houver uma sessão salva na Bifrost?", options: ["Acessar a conta manualmente", "Reiniciar o aplicativo", "Desconectar do IP", "Aguardar um tempo"], correctAnswer: "Acessar a conta manualmente" },
{ question: "Qual é a importância de salvar a sessão após o login na Latam?", options: ["Facilitar futuras emissões", "Aumentar a segurança do login", "Permitir acesso a relatórios", "Alterar dados do ofertante"], correctAnswer: "Facilitar futuras emissões" },
{ question: "Qual é o passo correto para deslogar do ofertante?", options: ["Fechar o navegador", "Deslogar na extensão e no aplicativo", "Reiniciar o computador", "Desconectar da internet"], correctAnswer: "Deslogar na extensão e no aplicativo" },
{ question: "O que deve ser verificado após iniciar uma transação no Cockpit?", options: ["Dados do voo e quantidade de milhas", "Saldo do CPF", "Histórico de emissões", "Tarifas de outros voos"], correctAnswer: "Dados do voo e quantidade de milhas" },
{ question: "Qual é uma solução para o erro de busca no site da Latam?", options: ["Pesquisar em dinheiro primeiro", "Limpar o histórico do navegador", "Aumentar a velocidade da internet", "Trocar de computador"], correctAnswer: "Pesquisar em dinheiro primeiro" },
{ question: "Qual motivo pode ser selecionado se a senha do ofertante atual estiver incorreta?", options: ["Saldo insuficiente", "Conta bloqueada", "Senha incorreta", "Erro de pagamento"], correctAnswer: "Senha incorreta" },
{ question: "Quando é necessário trocar de ofertante devido à falta de CPFs disponíveis?", options: ["Saldo insuficiente", "Sem beneficiários (CPFs) disponíveis", "Conta bloqueada", "Erro de pagamento"], correctAnswer: "Sem beneficiários (CPFs) disponíveis" },
{ question: "O que acontece se a conta do ofertante estiver bloqueada na LATAM?", options: ["Nada acontece", "Oferta vai para 'Inativo - forbidden'", "Emissão é permitida", "Ofertante é removido automaticamente"], correctAnswer: "Oferta vai para 'Inativo - forbidden'" },
{ question: "Qual motivo deve ser utilizado se o ofertante não atende o telefone/WhatsApp?", options: ["Conta bloqueada", "Erro de pagamento", "Não atende o Telefone/WhatsApp", "Saldo insuficiente"], correctAnswer: "Não atende o Telefone/WhatsApp" },
{ question: "Qual é uma das opções de motivo para troca de ofertante?", options: ["Problema na bagagem", "Saldo positivo", "Erro de pagamento", "Alteração de horário"], correctAnswer: "Erro de pagamento" },
{ question: "Qual ação deve ser realizada se houver um problema ao localizar o voo?", options: ["Trocar de ofertante", "Confirmar a reserva", "Cancelar a transação", "Atualizar a página"], correctAnswer: "Trocar de ofertante" },
{ question: "O que deve ser feito se houver um aumento de milhas inesperado?", options: ["Ignorar", "Realizar o cancelamento", "Trocar de ofertante", "Aumentar o número de milhas"], correctAnswer: "Realizar o cancelamento" },
{ question: "Qual é o primeiro passo para iniciar uma transação no Cockpit?", options: ["Inserir código da transação na extensão", "Acessar o site da companhia aérea", "Iniciar a transação no Cockpit", "Capturar o e-ticket"], correctAnswer: "Iniciar a transação no Cockpit" },
{ question: "Qual é a função da extensão do navegador para emissões semi-automáticas?", options: ["Gerar relatórios financeiros", "Preencher dados da transação", "Registrar e-tickets", "Realizar pagamentos"], correctAnswer: "Preencher dados da transação" },
{ question: "O que deve ser feito após a inserção do código da transação na extensão?", options: ["Fechar a extensão", "Acessar o site da companhia aérea", "Emitir o bilhete", "Revisar os dados do passageiro"], correctAnswer: "Acessar o site da companhia aérea" },
{ question: "Por que é importante revisar os dados preenchidos pela extensão?", options: ["Para evitar erros", "Para aumentar a velocidade da emissão", "Para simplificar o processo", "Para gerar mais e-tickets"], correctAnswer: "Para evitar erros" },
{ question: "Qual é a funcionalidade da opção 'Histórico' na extensão?", options: ["Visualizar dados do passageiro", "Revisar emissões anteriores", "Emitir novos bilhetes", "Gerar cartões de crédito"], correctAnswer: "Revisar emissões anteriores" },
{ question: "O que deve ser capturado após o pagamento?", options: ["O código da transação", "A confirmação do pagamento", "O e-ticket", "O histórico de transações"], correctAnswer: "O e-ticket" },
{ question: "Qual é a informação essencial a ser inserida durante o cadastro do passageiro?", options: ["Número do voo", "CPF", "Data de emissão", "E-mail do passageiro"], correctAnswer: "CPF" },
{ question: "O que é um e-ticket?", options: ["Um tipo de cartão de embarque", "Um comprovante de pagamento", "Um bilhete aéreo eletrônico", "Um voucher de desconto"], correctAnswer: "Um bilhete aéreo eletrônico" },
{ question: "Qual informação NÃO está presente no e-ticket?", options: ["Dados do passageiro", "Número do voo", "Data de retorno", "Taxas de bagagem"], correctAnswer: "Data de retorno" },
{ question: "Qual ferramenta pode ser usada para capturar o e-ticket?", options: ["Microsoft Word", "Captura e Esboço", "Navegador de Internet", "Photoshop"], correctAnswer: "Captura e Esboço" },
{ question: "O que fazer após fazer o upload do e-ticket?", options: ["Registrar o e-ticket no sistema", "Imprimir o e-ticket", "Enviar o e-ticket por e-mail", "Excluir o e-ticket"], correctAnswer: "Registrar o e-ticket no sistema" },
{ question: "Qual é a primeira etapa após a confirmação do pagamento da passagem?", options: ["Fazer o upload do e-ticket", "Gerar o e-ticket", "Cancelar a passagem", "Verificar a disponibilidade do voo"], correctAnswer: "Gerar o e-ticket" },
{ question: "O que significa a mensagem 'Sucesso: e-ticket inserido com sucesso'?", options: ["Todos os dados estão incorretos", "O e-ticket foi cancelado", "O e-ticket foi registrado corretamente", "O pagamento falhou"], correctAnswer: "O e-ticket foi registrado corretamente" },
{ question: "Qual é uma razão válida para cancelar um e-ticket?", options: ["Alterar a data do voo", "Erro na emissão do bilhete", "Trocar de companhia aérea", "Aumentar a quantidade de milhas"], correctAnswer: "Erro na emissão do bilhete" },


        ]
    },
    {
        id: 'emissoesgol',
        title: "Emissoes Gol",
        questions: [
            { question: "Qual é o primeiro passo para iniciar a emissão de passagens no Cockpit?", options: ["Escolher uma aba para emissões", "Efetuar login", "Selecionar 'Completo'", "Iniciar emissão"], correctAnswer: "Efetuar login" },
            { question: "O que deve ser feito após efetuar login no Cockpit?", options: ["Selecionar a opção 'Completo'", "Acessar o menu de ajuda", "Emitir bilhetes", "Conectar ao programa de fidelidade"], correctAnswer: "Selecionar a opção 'Completo'" },
            { question: "Qual é a função da aba 'Completo' no Cockpit?", options: ["Acessar funcionalidades básicas", "Acessar funcionalidades completas de emissão", "Verificar saldo de milhas", "Gerar relatórios financeiros"], correctAnswer: "Acessar funcionalidades completas de emissão" },
            { question: "O que deve ser feito antes de iniciar uma emissão no Cockpit?", options: ["Aplicar filtros", "Conectar ao Wi-Fi", "Verificar o saldo de milhas", "Ler os termos de uso"], correctAnswer: "Aplicar filtros" },
            { question: "Qual é um dos benefícios do programa de fidelidade Smiles?", options: ["Acumular pontos em compras", "Gerar relatórios de viagem", "Emitir bilhetes de forma automática", "Controlar o embarque de passageiros"], correctAnswer: "Acumular pontos em compras" },
            { question: "Como os membros do programa Smiles acumulam milhas?", options: ["Somente por voos", "Através de voos e compras em parceiros", "Apenas em promoções", "Exclusivamente com a Gol"], correctAnswer: "Através de voos e compras em parceiros" },
            { question: "Qual é a categoria mais alta do programa Smiles?", options: ["Prata", "Ouro", "Diamante", "Smiles"], correctAnswer: "Diamante" },
            { question: "Qual é o primeiro passo após iniciar uma transação no Cockpit?", options: ["Verificar o saldo de milhas", "Acessar o site da companhia aérea", "Emitir o bilhete aéreo", "Trocar de ofertante"], correctAnswer: "Acessar o site da companhia aérea" },
{ question: "Qual informação deve ser confirmada ao buscar pelo voo?", options: ["Número do cartão de crédito", "Data do voo", "Nome do passageiro", "Cidade de origem"], correctAnswer: "Data do voo" },
{ question: "O que deve ser verificado em relação às milhas?", options: ["Se as milhas são transferíveis", "Se a quantidade de milhas está correta", "Se as milhas estão expiradas", "Se as milhas são suficientes para a troca"], correctAnswer: "Se a quantidade de milhas está correta" },
{ question: "Por que é importante verificar a tarifa selecionada?", options: ["Para evitar erros de pagamento", "Para garantir que o voo seja emitido", "Para saber o valor em dinheiro", "Para confirmar a identidade do ofertante"], correctAnswer: "Para evitar erros de pagamento" },
{ question: "Qual é um dos motivos válidos para a troca de ofertante?", options: ["Alteração de endereço", "Senha incorreta", "Mudança de data do voo", "Transferência de milhas"], correctAnswer: "Senha incorreta" },
{ question: "O que acontece se a conta do ofertante atual estiver bloqueada?", options: ["A oferta é mantida", "A oferta é excluída", "A oferta fica inativa", "O processo é reiniciado"], correctAnswer: "A oferta fica inativa" },
{ question: "Qual motivo deve ser escolhido se houver um erro de pagamento?", options: ["Problema ao localizar voo", "Erro de pagamento", "Saldo insuficiente", "Cadastro pendente"], correctAnswer: "Erro de pagamento" },
{ question: "Qual é o primeiro passo a ser tomado se o voo está indisponível ou houve aumento de milhas?", options: ["Iniciar o cancelamento", "Remover o ofertante", "Atualizar a página", "Selecionar o motivo do cancelamento"], correctAnswer: "Remover o ofertante" },
{ question: "O que deve ser feito após remover o ofertante?", options: ["Iniciar o cancelamento", "Atualizar a página", "Escolher o motivo do cancelamento", "Finalizar a transação"], correctAnswer: "Atualizar a página" },
{ question: "Qual botão deve ser clicado para iniciar o processo de cancelamento da transação?", options: ["Emitir automaticamente", "Cancelar", "Trocar ofertante", "Confirmar cancelamento"], correctAnswer: "Cancelar" },
{ question: "Qual motivo pode ser selecionado ao solicitar o cancelamento por aumento de milhas?", options: ["Voo indisponível na CIA", "Transação abaixo da receita mínima", "Desistência pelo cliente", "Erro no site da CIA"], correctAnswer: "Aumento de milhas" },
{ question: "Qual ação deve ser tomada após selecionar o motivo do cancelamento?", options: ["Confirmar cancelamento", "Retornar o saldo de milhas", "Iniciar emissões automáticas", "Verificação do log de emissão"], correctAnswer: "Responder às perguntas" },
{ question: "O que o usuário deve fazer após a emissão automática ser iniciada?", options: ["Monitorar o status da transação", "Atualizar a página", "Remover o ofertante", "Finalizar a transação"], correctAnswer: "Monitorar o status da transação" },
{ question: "Qual ferramenta deve ser utilizada para salvar uma cópia do e-ticket como comprovante?", options: ["Captura de tela", "E-mail", "Impressão", "Transferência para o celular"], correctAnswer: "Captura de tela" },
{ question: "Qual é a principal diferença entre a emissão manual e a emissão automática de passagens aéreas?", options: ["A emissão manual é feita automaticamente", "A emissão automática requer login do ofertante", "A emissão manual envolve inserção manual de dados", "A emissão automática permite edição de dados"], correctAnswer: "A emissão manual envolve inserção manual de dados" },
{ question: "Por que é importante verificar a quantidade de milhas antes de prosseguir com a emissão manual?", options: ["Para garantir que o sistema esteja atualizado", "Para evitar problemas na viagem", "Para confirmar o cadastro do passageiro", "Para evitar pagamentos duplicados"], correctAnswer: "Para evitar problemas na viagem" },
{ question: "Qual informação é essencial para a identificação do passageiro nas companhias aéreas?", options: ["Nome completo", "Endereço", "Número do cartão de crédito", "Data de nascimento"], correctAnswer: "Número do cartão de crédito" },
{ question: "Qual é o primeiro passo ao acessar a página de pagamento?", options: ["Conferir dados do voo e da compra", "Adicionar cartão de crédito", "Gerar cartão de crédito virtual", "Revisar informações do passageiro"], correctAnswer: "Conferir dados do voo e da compra" },
{ question: "O que deve ser verificado antes de adicionar o cartão de crédito na página de pagamento?", options: ["Dados do voo", "Limite do cartão", "Dados do passageiro", "Forma de pagamento"], correctAnswer: "Dados do voo" },
{ question: "O que deve ser feito após a confirmação do pagamento?", options: ["Salvar uma cópia do e-ticket", "Verificar dados do cartão", "Cadastrar novo passageiro", "Adicionar milhas ao programa de fidelidade"], correctAnswer: "Salvar uma cópia do e-ticket" },
{ question: "Qual é a mensagem de sucesso que aparece após o e-ticket ser inserido corretamente no Cockpit?", options: ["Erro na checagem: Dados incorretos", "Sucesso: E-ticket inserido com sucesso", "Transação cancelada", "Dados do voo estão errados"], correctAnswer: "Sucesso: E-ticket inserido com sucesso" },
{ question: "Como os ofertantes podem receber o código de verificação para pagamentos com milhas Gol Smiles?", options: ["Apenas via e-mail", "Apenas via SMS", "Via e-mail ou SMS", "Apenas pelo Cockpit"], correctAnswer: "Via e-mail ou SMS" },
{ question: "Qual é o primeiro passo para acessar o código de verificação enviado por e-mail?", options: ["Acessar o site da Gol", "Ir até a transação no Cockpit", "Confirmar o pagamento", "Registrar o e-ticket"], correctAnswer: "Ir até a transação no Cockpit" },
{ question: "O que deve ser feito após confirmar o pagamento da passagem?", options: ["Capturar o e-ticket", "Enviar o código de verificação", "Cancelar a transação", "Acessar o Cockpit novamente"], correctAnswer: "Capturar o e-ticket" },
{ question: "O que é necessário preencher ao inserir o e-ticket no Cockpit?", options: ["Nome do passageiro", "Número do e-ticket", "Código de verificação", "Data da viagem"], correctAnswer: "Número do e-ticket" },
{ question: "Qual mensagem aparece se todos os dados do e-ticket forem inseridos corretamente?", options: ["Erro na checagem", "Sucesso: e-ticket inserido com sucesso", "Código de verificação inválido", "Dados do voo incorretos"], correctAnswer: "Sucesso: e-ticket inserido com sucesso" },
{ question: "Quando é necessário cancelar um e-ticket?", options: ["Quando o pagamento é confirmado", "Quando há erro na emissão do bilhete", "Após o voo realizado", "Quando o código de verificação não é recebido"], correctAnswer: "Quando há erro na emissão do bilhete" },
{ question: "Qual é o primeiro passo para cancelar um e-ticket na Gol?", options: ["Acessar o site oficial da Gol", "Localizar o e-ticket no Cockpit", "Contactar o atendimento ao cliente", "Acessar a seção de reembolsos"], correctAnswer: "Acessar o site oficial da Gol" }

            
        ]
    },
    {
        id: 'emissoesazul',
        title: "Emissoes Azul",
        questions: [
            { question: "Quais passos são necessários para iniciar a emissão de passagens no Cockpit?", options: ["Efetuar login e selecionar 'Completo'", "Escolher uma companhia aérea e aguardar", "Emitir bilhetes automaticamente", "Contatar o suporte técnico"], correctAnswer: "Efetuar login e selecionar 'Completo'" },
            { question: "O que é o programa TudoAzul?", options: ["Um sistema de emissão de passagens", "Um programa de fidelidade da Azul Linhas Aéreas", "Uma plataforma de reservas de hotéis", "Uma aplicação para gerenciamento de viagens"], correctAnswer: "Um programa de fidelidade da Azul Linhas Aéreas" },
            { question: "Qual é um dos principais benefícios do TudoAzul?", options: ["Acúmulo de pontos para resgates", "Acesso a voos internacionais", "Descontos em locadoras de veículos", "Transferências de milhas entre contas"], correctAnswer: "Acúmulo de pontos para resgates" },
            { question: "Como os membros do TudoAzul podem utilizar seus pontos?", options: ["Apenas para passagens aéreas", "Para passagens, upgrades e experiências", "Para compras em lojas físicas", "Para voos apenas dentro do Brasil"], correctAnswer: "Para passagens, upgrades e experiências" },
            { question: "O que indica um comentário 'Erro ao preencher dados dos passageiros'?", options: ["Problema na emissão do e-ticket", "Erro na inserção das informações dos passageiros", "Transação cancelada", "Aguarda aprovação do analista"], correctAnswer: "Erro na inserção das informações dos passageiros" },
            { question: "O que significa 'Milhas insuficientes' em uma transação?", options: ["Saldo de milhas é suficiente para a compra", "Saldo de milhas não é suficiente para completar a transação", "As milhas estão bloqueadas", "As milhas foram expiradas"], correctAnswer: "Saldo de milhas não é suficiente para completar a transação" },
            { question: "Qual a importância de verificar o extrato do ofertante após uma transação?", options: ["Para saber quantas milhas foram acumuladas", "Para evitar duplicidade na emissão da passagem", "Para receber pontos bônus", "Para acessar promoções especiais"], correctAnswer: "Para evitar duplicidade na emissão da passagem" },
            { question: "Qual é o primeiro passo após iniciar uma transação no Cockpit?", options: ["Emitir o bilhete", "Verificar dados do voo e milhas", "Trocar de ofertante", "Cancelar a transação"], correctAnswer: "Verificar dados do voo e milhas" },
{ question: "O que deve ser feito ao acessar o site da companhia aérea?", options: ["Fazer logout", "Confirmar saldo de milhas", "Fazer login com os dados do ofertante", "Emitir o bilhete"], correctAnswer: "Fazer login com os dados do ofertante" },
{ question: "Qual informação deve ser confirmada ao buscar pelo voo?", options: ["A data do voo", "O preço do bilhete", "O número de passageiros", "A classe do assento"], correctAnswer: "A data do voo" },
{ question: "O que fazer se houver um aumento de milhas após a verificação?", options: ["Prosseguir com a emissão", "Ajustar a transação ou buscar alternativas", "Trocar de ofertante", "Cancelar a transação"], correctAnswer: "Ajustar a transação ou buscar alternativas" },
{ question: "Qual é uma das opções de motivo para troca de ofertante?", options: ["Erro de pagamento", "Mudança de voo", "Viagem cancelada", "Desejo de reembolso"], correctAnswer: "Erro de pagamento" },
{ question: "Qual é a importância de escolher o motivo correto para a troca de ofertante?", options: ["Melhorar a experiência do cliente", "Impactar na validade da oferta e uso do saldo de milhas", "Aumentar o número de milhas", "Facilitar a emissão do bilhete"], correctAnswer: "Impactar na validade da oferta e uso do saldo de milhas" },
{ question: "O que deve ser feito se o voo estiver indisponível?", options: ["Trocar de ofertante", "Remover o ofertante e cancelar a transação", "Emitir o bilhete assim mesmo", "Esperar 24 horas para verificar novamente"], correctAnswer: "Remover o ofertante e cancelar a transação" },
{ question: "Qual é a primeira etapa para iniciar a emissão automática no Cockpit?", options: ["Clique em Emitir automaticamente", "Verifique o log de emissão", "Escolha um ofertante", "Acesse a aba de status"], correctAnswer: "Clique em Emitir automaticamente" },
{ question: "O que deve ser verificado antes de iniciar a emissão automática?", options: ["A quantidade de milhas", "O log de emissão automática e comentários", "O código da transação", "A lista de ofertantes"], correctAnswer: "O log de emissão automática e comentários" },
{ question: "Qual é a principal função da extensão do navegador para emissões semi-automáticas?", options: ["Gerar relatórios", "Facilitar o preenchimento de dados da transação", "Emitir passagens automaticamente", "Controlar o saldo de milhas"], correctAnswer: "Facilitar o preenchimento de dados da transação" },
{ question: "Após o pagamento na emissão semi-automática, o que deve ser capturado como comprovante?", options: ["A fatura de pagamento", "O e-ticket", "O histórico de transações", "A mensagem de erro"], correctAnswer: "O e-ticket" },
{ question: "Qual é um dos passos necessários na emissão manual?", options: ["Acessar a lista de passageiros", "Inserir dados do cartão de crédito", "Verificar a quantidade de milhas", "Emitir o e-ticket automaticamente"], correctAnswer: "Verificar a quantidade de milhas" },
{ question: "O que deve ser conferido na página de pagamento durante a emissão manual?", options: ["Nome do passageiro", "Número do e-ticket", "Taxa de embarque", "Código da transação"], correctAnswer: "Taxa de embarque" },
{ question: "Qual é uma das mensagens de erro possíveis ao inserir o e-ticket no Cockpit?", options: ["E-ticket inserido com sucesso", "Erro na checagem: Verifique os dados inseridos", "Transação concluída", "E-ticket não encontrado"], correctAnswer: "Erro na checagem: Verifique os dados inseridos" },
{ question: "Qual é o número máximo de beneficiários que um cliente do Nível Diamante pode cadastrar no programa Azul fidelidade?", options: ["5", "6", "7", "8"], correctAnswer: "8" },
{ question: "Qual é o tempo de carência para alteração de beneficiários no programa Azul fidelidade?", options: ["30 dias", "60 dias", "90 dias", "7 dias"], correctAnswer: "30 dias" },
{ question: "O que deve ser feito antes de cadastrar um novo beneficiário no programa Azul fidelidade?", options: ["Verificar o saldo de pontos", "Confirmar a exclusão de um beneficiário", "Acessar o perfil no aplicativo", "Alterar a senha do aplicativo"], correctAnswer: "Acessar o perfil no aplicativo" },
{ question: "Qual é a primeira informação que deve ser inserida ao cadastrar um passageiro no site da companhia aérea?", options: ["Sobrenome", "Data de nascimento", "Nome", "CPF"], correctAnswer: "Nome" },
{ question: "Para voos internacionais, que informação é necessária além do nome completo do passageiro?", options: ["Data de nascimento", "Número do RG", "Número do passaporte", "Email"], correctAnswer: "Número do passaporte" },
{ question: "Qual deve ser feito antes de adicionar bagagens para uma transação no Cockpit?", options: ["Acessar a transação desejada", "Confirmar o cadastro do passageiro", "Verificar a disponibilidade de voos", "Emitir o bilhete aéreo"], correctAnswer: "Acessar a transação desejada" },
{ question: "O que deve ser registrado no Cockpit após adicionar bagagens no site da companhia aérea?", options: ["Valor pago pela bagagem", "Número da reserva", "Data da viagem", "Nome do passageiro"], correctAnswer: "Valor pago pela bagagem" },
{ question: "Qual é a primeira etapa ao acessar a página de pagamento para finalizar a compra?", options: ["Adicionar cartão de crédito", "Conferir dados do voo e da compra", "Gerar cartão de crédito virtual", "Efetuar o pagamento"], correctAnswer: "Conferir dados do voo e da compra" },
{ question: "O que deve ser verificado em relação à taxa de embarque na página de pagamento?", options: ["Se está correta", "Se é maior que o valor da passagem", "Se não é cobrada", "Se é cobrada em milhas"], correctAnswer: "Se está correta" },
{ question: "Qual informação é necessária para gerar um cartão de crédito virtual?", options: ["Nome do passageiro", "Valor da passagem", "Taxa de embarque", "Data do voo"], correctAnswer: "Taxa de embarque" },
{ question: "O que deve ser feito após preencher os dados do cartão de crédito virtual?", options: ["Gerar o e-ticket", "Efetuar o pagamento", "Adicionar novo cartão", "Voltar ao Cockpit"], correctAnswer: "Efetuar o pagamento" },
{ question: "O que é gerado automaticamente após o pagamento da passagem?", options: ["Recibo de pagamento", "E-ticket", "Cartão de crédito virtual", "Confirmação de e-mail"], correctAnswer: "E-ticket" },
{ question: "Qual é a primeira informação a ser inserida ao registrar o e-ticket no sistema?", options: ["Login do programa de fidelidade", "Número do e-ticket", "Dados do passageiro", "Valor da bagagem"], correctAnswer: "Número do e-ticket" },
{ question: "O que deve ser feito se o sistema retornar uma mensagem de erro na checagem automática?", options: ["Registrar o e-ticket novamente", "Verificar os dados inseridos", "Cancelar a compra", "Consultar a companhia aérea"], correctAnswer: "Verificar os dados inseridos" },



        ]
    },
    {
        id: 'ferramentas',
        title: "Ferramentas Auxiliares",
        questions: [
            { question: "O que é o Slack?", options: ["Uma plataforma de videoconferência", "Uma ferramenta de gerenciamento de projetos", "Uma plataforma de comunicação colaborativa", "Um sistema de gerenciamento de tarefas"], correctAnswer: "Uma plataforma de comunicação colaborativa" },

            { question: "Qual é uma das principais funcionalidades do Slack?", options: ["Edição de vídeos", "Criação de gráficos", "Canais públicos e privados", "Armazenamento de dados"], correctAnswer: "Canais públicos e privados" },
            
            { question: "Como os usuários podem se comunicar de forma mais pessoal no Slack?", options: ["Por meio de canais", "Por meio de mensagens diretas", "Por meio de videoconferências", "Por meio de e-mails"], correctAnswer: "Por meio de mensagens diretas" },
            
            { question: "O Slack permite integração com quais tipos de ferramentas?", options: ["Apenas ferramentas de chat", "Ferramentas de BI apenas", "Diversas ferramentas e aplicativos", "Apenas ferramentas de produtividade"], correctAnswer: "Diversas ferramentas e aplicativos" },
            
            { question: "Qual é um dos benefícios do uso do Slack?", options: ["Redução do tempo de férias", "Comunicação rápida e eficiente", "Menos necessidade de internet", "Aumento de reuniões presenciais"], correctAnswer: "Comunicação rápida e eficiente" },
            
            { question: "Como os usuários alteram seu status no Slack?", options: ["Pelo menu de configurações", "Alterando a foto de perfil", "Por meio do painel de controle", "Alterando seu status diretamente no perfil"], correctAnswer: "Alterando seu status diretamente no perfil" },
            
            { question: "Qual ícone representa um usuário ausente no Slack?", options: ["Verde", "Amarelo", "Vermelho", "Cinza"], correctAnswer: "Amarelo" },
            { question: "Qual é o principal propósito do Qulture.Rocks?", options: ["Transformar a cultura organizacional", "Gerenciar finanças da empresa", "Controlar o tempo de trabalho", "Emitir bilhetes aéreos"], correctAnswer: "Transformar a cultura organizacional" },
            
            { question: "Como o Qulture.Rocks promove a comunicação entre colaboradores e gestores?", options: ["Por meio de e-mails", "Através de feedback contínuo", "Usando videoconferências", "Realizando reuniões mensais"], correctAnswer: "Através de feedback contínuo" },
            
            { question: "Qual é uma funcionalidade do Qulture.Rocks relacionada ao reconhecimento dos colaboradores?", options: ["Gestão de metas", "Feedback anual", "Reconhecimento e recompensa", "Análises financeiras"], correctAnswer: "Reconhecimento e recompensa" },
            
            { question: "Qual ferramenta permite o registro de ponto dos colaboradores?", options: ["Qulture.Rocks", "iFractal Ponto Online", "Google Drive", "Slack"], correctAnswer: "iFractal Ponto Online" },
            
            { question: "O que o iFractal Ponto Online ajuda a monitorar em tempo real?", options: ["Desempenho financeiro", "Jornada de trabalho dos colaboradores", "Feedback dos clientes", "Metas de vendas"], correctAnswer: "Jornada de trabalho dos colaboradores" },
            
            { question: "Qual é um dos benefícios da integração do iFractal com a folha de pagamento?", options: ["Facilita o registro de horas", "Aumenta o número de folgas", "Melhora a comunicação entre departamentos", "Evita erros na apuração de horas trabalhadas"], correctAnswer: "Evita erros na apuração de horas trabalhadas" },
            
            { question: "Como os colaboradores podem solicitar folgas no iFractal Ponto Online?", options: ["Por e-mail", "Diretamente pela plataforma", "Através de um formulário físico", "Pelo Slack"], correctAnswer: "Diretamente pela plataforma" },
            { question: "Qual é o objetivo da consulta de dados do passageiro na Receita Federal?", options: ["Emitir passagens aéreas", "Verificar informações do passageiro", "Criar novas viagens", "Acessar e-tickets"], correctAnswer: "Verificar informações do passageiro" },

            { question: "O que é necessário inserir no site da Receita Federal para consultar os dados do passageiro?", options: ["Nome completo e CPF", "CPF e data de nascimento", "E-mail e data de nascimento", "Número da passagem e CPF"], correctAnswer: "CPF e data de nascimento" },
            
            { question: "Quais informações podem ser retornadas ao consultar na Receita Federal?", options: ["Nome completo, data de nascimento e situação cadastral do CPF", "Endereço e telefone", "Histórico de viagens", "Nome do pai e mãe"], correctAnswer: "Nome completo, data de nascimento e situação cadastral do CPF" },
            
            { question: "Quando o TripCase é especialmente útil?", options: ["Quando a companhia aérea gera um localizador", "Quando a companhia aérea não gera um localizador", "Durante o check-in", "Na emissão de bilhetes"], correctAnswer: "Quando a companhia aérea não gera um localizador" },
            
            { question: "Qual é uma funcionalidade do TripCase?", options: ["Emitir passagens", "Buscar e acessar e-tickets", "Registrar ponto", "Enviar feedback"], correctAnswer: "Buscar e acessar e-tickets" },
            
            { question: "Como os usuários podem organizar suas viagens no TripCase?", options: ["Criando uma nova viagem", "Consultando a Receita Federal", "Acessando o e-mail", "Registrando no papel"], correctAnswer: "Criando uma nova viagem" },
            
            { question: "Quais alertas os usuários recebem do TripCase?", options: ["Mudanças de status de voos", "Promoções de passagens", "Ofertas de hotéis", "Notificações de restaurantes"], correctAnswer: "Mudanças de status de voos" },
            { question: "Qual é a principal função do Zendesk?", options: ["Gerenciar o atendimento ao cliente", "Emitir passagens aéreas", "Criar campanhas de marketing", "Registrar ponto dos funcionários"], correctAnswer: "Gerenciar o atendimento ao cliente" },

{ question: "O que acontece quando um cliente entra em contato com a empresa pelo Zendesk?", options: ["A solicitação é ignorada", "É criada uma nova conta", "Uma solicitação é convertida em um 'ticket'", "A conversa é encerrada"], correctAnswer: "Uma solicitação é convertida em um 'ticket'" },

{ question: "Qual funcionalidade do Zendesk permite que os clientes encontrem respostas para perguntas frequentes?", options: ["Base de conhecimento", "Chat ao vivo", "Registro de ponto", "Central de atendimento"], correctAnswer: "Base de conhecimento" },

{ question: "Como o Zendesk melhora a experiência do cliente?", options: ["Proporcionando um atendimento mais ágil e eficaz", "Aumentando o número de vendas", "Reduzindo custos", "Eliminando o suporte ao cliente"], correctAnswer: "Proporcionando um atendimento mais ágil e eficaz" },

{ question: "Qual recurso do Zendesk permite comunicação em tempo real com os clientes?", options: ["Base de conhecimento", "Tickets", "Chat ao vivo", "Relatórios"], correctAnswer: "Chat ao vivo" },

{ question: "Qual é um dos benefícios do uso do Zendesk?", options: ["Melhoria na experiência do cliente", "Aumento no tempo de espera", "Diminuição no número de tickets", "Eliminação do suporte ao cliente"], correctAnswer: "Melhoria na experiência do cliente" },

{ question: "Onde pode ser acessado o Zendesk?", options: ["https://maxmilhas.zendesk.com/agent/dashboard", "https://maxmilhas.com", "https://zendesk.com", "https://maxmilhas.com/zendesk"], correctAnswer: "https://maxmilhas.zendesk.com/agent/dashboard" },

        ]
    }
];

const getRandomQuestions = (questions, limit = 10) => {
    if (questions.length <= limit) {
        return questions;
    }

    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, limit);
};

const QuizQuestionsPage = () => {

    const { courseId } = useParams();
    const navigate = useNavigate();
    const course = courses.find(c => c.id === courseId);

    const [questionsToShow, setQuestionsToShow] = useState([]);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        if (course) {
            const questions = getRandomQuestions(course.questions);
            setQuestionsToShow(questions);
            setAnswers(Array(questions.length).fill(null));
        }
    }, [course]);

    if (!course) {
        return (
            <div className={styles.errorContainer}>
                <h2>Curso não encontrado</h2>
                <button onClick={() => navigate('/quiz')}>Voltar para a lista de quizzes</button>
            </div>
        );
    }
    const handleAnswerChange = (questionIndex, answer) => {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = answer;
        setAnswers(newAnswers);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const score = answers.reduce((acc, answer, index) => {
            return answer === questionsToShow[index].correctAnswer ? acc + 1 : acc;
        }, 0);

        navigate('/results', {
            state: {
                score,
                totalQuestions: questionsToShow.length,
                answers,
                questions: questionsToShow,
            },
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const getLetter = (index) => {
        return String.fromCharCode(65 + index); // 65 é o código ASCII para 'A'
    };

    return (
        <div className={styles.quizPage}>
            <div className={styles.titleContainer}>
                <h2 className={styles.stylizedTitle}>Quiz</h2>
                <hr className={styles.separator} />
            </div>
            <div className={styles.quizContainer}>
                <h1 className={styles.pageTitle}>{course.title}</h1>
                <form onSubmit={handleSubmit} className={styles.quizForm}>
                    {questionsToShow.map((item, index) => (
                        <div key={index} className={styles.questionCard}>
                            <div className={styles.questionBlock}>
                                <div className={styles.questTitle}>{index + 1}. {item.question}</div>
                                <div className={styles.options}>
                                    {item.options.map((option, idx) => (
                                        <label key={idx} className={styles.option}>
                                            <input
                                                type="radio"
                                                name={`question-${index}`}
                                                value={option}
                                                checked={answers[index] === option}
                                                onChange={() => handleAnswerChange(index, option)}
                                                className={styles.radioInput}
                                            />
                                            <span className={styles.optionText}><span className={styles.marginRight}>{getLetter(idx)}.</span> {option}</span> {/* Adiciona a letra */}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className={styles.containerbutton}>
                        <button type="submit" className={styles.submitButton}>Enviar Respostas</button>
                    </div>
                </form>
            </div >
        </div >
    );
};


export default QuizQuestionsPage;
