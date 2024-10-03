import styles from './QuizQuestionsPage.module.css';
import React, { useState, useEffect } from 'react';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header';

const courses = [
    {
        id: 'cockpit',
        title: "Cockpit",
        questions: [
            { question: "Qual é o principal propósito de um cockpit?", options: ["Controlar a aeronave", "Servir comida", "Armazenar bagagem", "Fornecer acomodação"], correctAnswer: "Controlar a aeronave" },
            { question: "Qual instrumento mede a altitude?", options: ["Altímetro", "Indicador de Velocidade", "Bússola", "Indicador de Direção"], correctAnswer: "Altímetro" },
            { question: "O que o manche controla em uma aeronave?", options: ["Velocidade", "Altitude", "Direção", "Combustível"], correctAnswer: "Direção" },
            { question: "Qual sistema é usado para navegar a aeronave?", options: ["GPS", "Wi-Fi", "Bluetooth", "Rádio"], correctAnswer: "GPS" },
            { question: "O que o acelerador controla?", options: ["Altitude", "Velocidade", "Direção", "Navegação"], correctAnswer: "Velocidade" },
            { question: "Qual é a função de um display de cockpit?", options: ["Mostrar dados de voo", "Servir comida", "Armazenar equipamentos", "Nenhuma das anteriores"], correctAnswer: "Mostrar dados de voo" },
            { question: "Qual instrumento indica a velocidade do ar?", options: ["Altímetro", "Indicador de Velocidade", "Indicador de Taxa de Subida", "Indicador de Direção"], correctAnswer: "Indicador de Velocidade" },
            { question: "Qual é o principal propósito dos controles de voo?", options: ["Comunicar-se com o controle de tráfego", "Controlar a trajetória de voo da aeronave", "Ajustar a temperatura da cabine", "Gerenciar o consumo de combustível"], correctAnswer: "Controlar a trajetória de voo da aeronave" },
            { question: "O que o sistema de piloto automático faz?", options: ["Voa a aeronave automaticamente", "Controla o trem de pouso", "Navega manualmente", "Nenhuma das anteriores"], correctAnswer: "Voa a aeronave automaticamente" },
            { question: "Qual instrumento mostra a taxa de subida ou descida da aeronave?", options: ["Indicador de Taxa de Subida", "Altímetro", "Indicador de Velocidade", "Indicador de Direção"], correctAnswer: "Indicador de Taxa de Subida" },
            { question: "Qual é a principal função do sistema de comunicação de rádio?", options: ["Entreter os passageiros", "Comunicar-se com outras aeronaves", "Navegar", "Ajustar a pressão da cabine"], correctAnswer: "Comunicar-se com outras aeronaves" },
            { question: "Qual é a função do sistema de gerenciamento de voo (FMS)?", options: ["Gerenciar combustível", "Controlar o piloto automático", "Fornecer informações de navegação", "Todas as anteriores"], correctAnswer: "Todas as anteriores" },
            { question: "Qual controle é usado para ajustar o ângulo de ataque da aeronave?", options: ["Manche", "Acelerador", "Rudder", "Flaps"], correctAnswer: "Manche" },
            { question: "O que o indicador de direção mostra?", options: ["Altitude", "Velocidade", "Direção", "Nível de combustível"], correctAnswer: "Direção" },
            { question: "Qual é o propósito do indicador de trem de pouso?", options: ["Mostrar a posição do trem de pouso", "Medir a velocidade", "Indicar o nível de combustível", "Comunicar-se com o controle de tráfego aéreo"], correctAnswer: "Mostrar a posição do trem de pouso" },
            { question: "Qual instrumento é usado para medir a potência do motor?", options: ["Tachômetro", "Altímetro", "Indicador de Velocidade", "Indicador de Taxa de Subida"], correctAnswer: "Tachômetro" },
            { question: "Qual é o papel do co-piloto?", options: ["Pilotar a aeronave sozinho", "Assistir o capitão", "Gerenciar a tripulação", "Todas as anteriores"], correctAnswer: "Assistir o capitão" },
            { question: "Qual é a principal função do altímetro?", options: ["Medir altitude", "Mostrar velocidade", "Indicar direção", "Gerenciar combustível"], correctAnswer: "Medir altitude" },
            { question: "O que o GPS fornece aos pilotos?", options: ["Dados de navegação", "Desempenho do motor", "Temperatura da cabine", "Nenhuma das anteriores"], correctAnswer: "Dados de navegação" },
            { question: "Qual é o propósito do indicador de combustível?", options: ["Medir a quantidade de combustível", "Indicar altitude", "Mostrar velocidade", "Exibir direção"], correctAnswer: "Medir a quantidade de combustível" },
            { question: "O que os flaps fazem?", options: ["Aumentar a sustentação", "Diminuir a resistência", "Controlar a velocidade", "Todas as anteriores"], correctAnswer: "Aumentar a sustentação" },
            { question: "Qual é a função do sistema de oxigênio em um cockpit?", options: ["Resfriar o cockpit", "Fornecer oxigênio de emergência", "Manter a pressão da cabine", "Nenhuma das anteriores"], correctAnswer: "Fornecer oxigênio de emergência" },
            { question: "O que o transmissor de localização de emergência (ELT) faz?", options: ["Ajuda na navegação", "Envia sinais de socorro", "Mede altitude", "Controla o piloto automático"], correctAnswer: "Envia sinais de socorro" },
            { question: "Qual instrumento indica a taxa de subida ou descida da aeronave?", options: ["Indicador de Taxa de Subida", "Altímetro", "Indicador de Velocidade", "Indicador de Direção"], correctAnswer: "Indicador de Taxa de Subida" },
            { question: "Qual é o papel do manche de controle?", options: ["Controlar a velocidade", "Ajustar a altitude", "Dirigir a aeronave", "Gerenciar o combustível"], correctAnswer: "Dirigir a aeronave" },
            { question: "O que o sistema de aviso de estol faz?", options: ["Indica níveis de combustível", "Avisa sobre um estol iminente", "Controla o trem de pouso", "Mede altitude"], correctAnswer: "Avisa sobre um estol iminente" },
            { question: "Qual sistema é responsável por controlar o pitch, roll e yaw da aeronave?", options: ["Sistema de controle de voo", "Sistema de navegação", "Sistema de comunicação", "Nenhuma das anteriores"], correctAnswer: "Sistema de controle de voo" },
            { question: "Qual é a função do sistema de trim?", options: ["Estabilizar a aeronave", "Controlar a velocidade", "Gerenciar combustível", "Ajustar a altitude"], correctAnswer: "Estabilizar a aeronave" },
            { question: "O que o sistema de radar faz?", options: ["Mede a velocidade", "Detecta padrões climáticos", "Indica altitude", "Controla o piloto automático"], correctAnswer: "Detecta padrões climáticos" },
            { question: "Qual é o propósito do gravador de dados de voo?", options: ["Registrar parâmetros de voo", "Medir a velocidade", "Controlar o trem de pouso", "Indicar níveis de combustível"], correctAnswer: "Registrar parâmetros de voo" },
            { question: "O que o sistema de comunicação faz?", options: ["Fornece navegação", "Permite comunicação piloto a piloto", "Gerencia a pressão da cabine", "Controla o piloto automático"], correctAnswer: "Permite comunicação piloto a piloto" },
            { question: "Qual instrumento mostra a posição da aeronave em relação ao horizonte?", options: ["Indicador de atitude", "Indicador de direção", "Altímetro", "Indicador de velocidade"], correctAnswer: "Indicador de atitude" },
            { question: "Qual é a principal função do radar meteorológico?", options: ["Mostrar altitude", "Detectar padrões climáticos", "Indicar velocidade", "Controlar o trem de pouso"], correctAnswer: "Detectar padrões climáticos" },
            { question: "Qual controle ajusta o yaw da aeronave?", options: ["Rudder", "Elevador", "Aileron", "Acelerador"], correctAnswer: "Rudder" },
            { question: "O que o horizonte artificial indica?", options: ["Velocidade", "Altitude", "Pitch e roll", "Direção"], correctAnswer: "Pitch e roll" },
            { question: "Qual é o propósito do indicador de pressão da cabine?", options: ["Indicar altitude", "Mostrar altitude da cabine", "Controlar potência do motor", "Nenhuma das anteriores"], correctAnswer: "Mostrar altitude da cabine" },
            { question: "O que o indicador de temperatura do motor mede?", options: ["Temperatura do combustível", "Temperatura da cabine", "Temperatura do motor", "Nenhuma das anteriores"], correctAnswer: "Temperatura do motor" },
            { question: "Qual é a função do painel de controle de eletricidade?", options: ["Controlar sistemas elétricos", "Gerenciar combustível", "Controlar o piloto automático", "Nenhuma das anteriores"], correctAnswer: "Controlar sistemas elétricos" },
            { question: "Qual é a principal função do transponder?", options: ["Identificar a aeronave para o controle de tráfego", "Medir a velocidade", "Indicar altitude", "Controlar o trem de pouso"], correctAnswer: "Identificar a aeronave para o controle de tráfego" },
            { question: "O que o altímetro barométrico mede?", options: ["Pressão atmosférica", "Altura da cabine", "Temperatura do motor", "Nenhuma das anteriores"], correctAnswer: "Pressão atmosférica" },
            { question: "Qual instrumento é usado para medir a distância percorrida pela aeronave?", options: ["Odômetro", "Indicador de velocidade", "Altímetro", "Navegador"], correctAnswer: "Odômetro" },
            { question: "Qual é a função do sistema de navegação por satélite?", options: ["Aumentar a velocidade", "Fornecer informações de localização", "Controlar o piloto automático", "Medir altitude"], correctAnswer: "Fornecer informações de localização" },
            { question: "Qual é o principal propósito do controle de temperatura da cabine?", options: ["Resfriar o cockpit", "Ajustar a temperatura interna", "Indicar velocidade", "Controlar combustível"], correctAnswer: "Ajustar a temperatura interna" },
            { question: "O que a luz de aviso de motor indica?", options: ["Problemas no motor", "Falha no trem de pouso", "Nível baixo de combustível", "Nenhuma das anteriores"], correctAnswer: "Problemas no motor" },
            { question: "Qual é o principal propósito do sistema de emergência de energia?", options: ["Fornecer energia em caso de falha", "Controlar o piloto automático", "Indicar altitude", "Gerenciar combustível"], correctAnswer: "Fornecer energia em caso de falha" },
            { question: "Qual é a função da tela de vidro da cabine?", options: ["Mostrar dados de voo", "Servir como espelho", "Armazenar informações", "Indicar temperatura"], correctAnswer: "Mostrar dados de voo" },
            { question: "O que o sistema de pressão do combustível faz?", options: ["Controla o fluxo de combustível", "Indica temperatura", "Gerencia o nível de combustível", "Nenhuma das anteriores"], correctAnswer: "Controla o fluxo de combustível" },
            { question: "Qual é o papel do painel de controle de luz?", options: ["Controlar as luzes da cabine", "Indicar velocidade", "Medir altitude", "Nenhuma das anteriores"], correctAnswer: "Controlar as luzes da cabine" },
            { question: "Qual é a função do botão de teste de sistemas?", options: ["Verificar o funcionamento dos sistemas", "Controlar o piloto automático", "Gerenciar o nível de combustível", "Ajustar a temperatura"], correctAnswer: "Verificar o funcionamento dos sistemas" },

            { question: "Qual é a função do botão de luz de pista?", options: ["Controlar as luzes da pista", "Indicar altitude", "Medir velocidade", "Nenhuma das anteriores"], correctAnswer: "Controlar as luzes da pista" },
            { question: "Qual é o propósito do painel de controle de flaps?", options: ["Ajustar os flaps da aeronave", "Controlar a velocidade", "Indicar altitude", "Gerenciar combustível"], correctAnswer: "Ajustar os flaps da aeronave" },
            { question: "O que o indicador de velocidade de subida mostra?", options: ["Taxa de subida", "Altitude", "Temperatura do motor", "Velocidade"], correctAnswer: "Taxa de subida" },
            { question: "Qual é a função do painel de controle de combustível?", options: ["Gerenciar o nível de combustível", "Indicar temperatura", "Controlar a velocidade", "Nenhuma das anteriores"], correctAnswer: "Gerenciar o nível de combustível" },
            { question: "Qual é o papel do sistema de controle de tráfego aéreo?", options: ["Gerenciar o tráfego aéreo", "Controlar o piloto automático", "Indicar altitude", "Gerenciar combustível"], correctAnswer: "Gerenciar o tráfego aéreo" },
            { question: "Qual é a função do sistema de navegação de emergência?", options: ["Fornecer dados de navegação em caso de falha", "Controlar a velocidade", "Indicar altitude", "Gerenciar o combustível"], correctAnswer: "Fornecer dados de navegação em caso de falha" },

        ]
    },
    {
        id: 'milhas',
        title: "Milhas",
        questions: [
            {
                question: "O que são milhas aéreas?",
                options: ["Um tipo de moeda", "Um programa de fidelidade", "Um sistema de transporte", "Uma forma de pagamento"],
                correctAnswer: "Um programa de fidelidade"
            },
            {
                question: "Como acumular milhas?",
                options: ["Voando com companhias aéreas parceiras", "Comprando produtos em lojas", "Usando cartões de crédito", "Todas as anteriores"],
                correctAnswer: "Todas as anteriores"
            },
            {
                question: "Qual a validade das milhas acumuladas?",
                options: ["Um ano", "Dois anos", "Cinco anos", "Dependendo da companhia aérea"],
                correctAnswer: "Dependendo da companhia aérea"
            },
            {
                question: "O que é um upgrade de cabine?",
                options: ["Mudar de assento", "Subir para uma classe superior", "Trocar de voo", "Cancelar o voo"],
                correctAnswer: "Subir para uma classe superior"
            },
            {
                question: "Qual é a principal vantagem de acumular milhas?",
                options: ["Economizar dinheiro", "Viajar de graça", "Trocar por produtos", "Melhorar o atendimento"],
                correctAnswer: "Viajar de graça"
            },
            {
                question: "Como as milhas podem ser resgatadas?",
                options: ["Por meio de agências de viagem", "Diretamente no site da companhia aérea", "Em lojas físicas", "Não podem ser resgatadas"],
                correctAnswer: "Diretamente no site da companhia aérea"
            },
            {
                question: "Qual é o principal programa de milhas no Brasil?",
                options: ["Smiles", "TudoAzul", "LATAM Pass", "Multiplus"],
                correctAnswer: "Smiles"
            },
            {
                question: "O que são milhas qualificáveis?",
                options: ["Milhas que podem ser trocadas por dinheiro", "Milhas que contam para status de elite", "Milhas expiradas", "Milhas de voos cancelados"],
                correctAnswer: "Milhas que contam para status de elite"
            },
            {
                question: "É possível transferir milhas entre contas?",
                options: ["Sim, sempre", "Não, nunca", "Sim, mas com taxas", "Somente em casos especiais"],
                correctAnswer: "Sim, mas com taxas"
            },
            {
                question: "Qual fator não influencia na quantidade de milhas acumuladas?",
                options: ["Distância do voo", "Classe do assento", "Tempo de conexão", "Preço da passagem"],
                correctAnswer: "Tempo de conexão"
            },
            {
                question: "O que são milhas bônus?",
                options: ["Milhas acumuladas por promoções", "Milhas expiradas", "Milhas de voos internacionais", "Milhas de voos nacionais"],
                correctAnswer: "Milhas acumuladas por promoções"
            },
            {
                question: "Qual é o principal objetivo dos programas de milhagem?",
                options: ["Aumentar o número de passageiros", "Oferecer voos baratos", "Estimular a fidelidade dos clientes", "Facilitar trocas de passagens"],
                correctAnswer: "Estimular a fidelidade dos clientes"
            },
            {
                question: "O que é um bilhete prêmio?",
                options: ["Um bilhete com desconto", "Um bilhete que utiliza milhas", "Um bilhete com upgrade", "Um bilhete de volta"],
                correctAnswer: "Um bilhete que utiliza milhas"
            },
            {
                question: "É possível acumular milhas ao viajar de ônibus?",
                options: ["Sim, em algumas companhias", "Não, nunca", "Sim, sempre", "Somente em viagens internacionais"],
                correctAnswer: "Sim, em algumas companhias"
            },
            {
                question: "Qual fator pode fazer as milhas expirarem?",
                options: ["Falta de atividade na conta", "Uso de milhas", "Mudança de endereço", "Compra de passagens"],
                correctAnswer: "Falta de atividade na conta"
            },
            {
                question: "As milhas podem ser usadas para reservar hotéis?",
                options: ["Sim, em alguns programas", "Não, nunca", "Somente em companhias aéreas", "Sim, mas com limitações"],
                correctAnswer: "Sim, em alguns programas"
            },
            {
                question: "O que significa 'milhas aéreas não são moeda' em termos de uso?",
                options: ["Não podem ser trocadas por dinheiro", "Podem ser usadas para pagar taxas", "Só podem ser trocadas por passagens", "Não têm valor fixo"],
                correctAnswer: "Não podem ser trocadas por dinheiro"
            },
            {
                question: "Qual é a diferença entre milhas e pontos?",
                options: ["Nada, são a mesma coisa", "Pontos são mais valiosos", "Milhas são acumuladas por voos, pontos por compras", "Pontos têm mais validade"],
                correctAnswer: "Milhas são acumuladas por voos, pontos por compras"
            },
            {
                question: "O que significa 'resgate de milhas' em um programa de fidelidade?",
                options: ["Acumular milhas", "Trocar milhas por produtos ou serviços", "Transferir milhas", "Vender milhas"],
                correctAnswer: "Trocar milhas por produtos ou serviços"
            },
            {
                question: "As milhas podem ser utilizadas para comprar passagens de outras companhias?",
                options: ["Sim, sempre", "Não, somente dentro da mesma aliança", "Sim, mas com taxas adicionais", "Não, nunca"],
                correctAnswer: "Não, somente dentro da mesma aliança"
            },
            {
                question: "Qual é a principal desvantagem de usar milhas?",
                options: ["Dificuldade em encontrar disponibilidade", "Altas taxas de resgate", "Validade curta", "Todas as anteriores"],
                correctAnswer: "Todas as anteriores"
            },
            {
                question: "O que é um programa de fidelidade?",
                options: ["Um serviço de transporte", "Um sistema de acúmulo de pontos", "Um clube de viagens", "Um sistema de descontos"],
                correctAnswer: "Um sistema de acúmulo de pontos"
            },
            {
                question: "Qual é a melhor maneira de acumular milhas rapidamente?",
                options: ["Voar com frequência", "Comprar produtos em lojas parceiras", "Usar cartões de crédito", "Todas as anteriores"],
                correctAnswer: "Todas as anteriores"
            },
            {
                question: "As milhas podem ser utilizadas para upgrades de classe?",
                options: ["Sim, em alguns programas", "Não, nunca", "Somente em voos internacionais", "Sim, mas com limitações"],
                correctAnswer: "Sim, em alguns programas"
            },
            {
                question: "Qual é a diferença entre milhas e cashback?",
                options: ["Milhas são acumuladas por voos, cashback é dinheiro de volta", "Milhas não têm valor, cashback tem", "Ambas são a mesma coisa", "Milhas não podem ser trocadas por dinheiro, cashback pode"],
                correctAnswer: "Milhas são acumuladas por voos, cashback é dinheiro de volta"
            },
            {
                question: "O que é um cartão de crédito co-branded?",
                options: ["Um cartão que acumula milhas de um programa específico", "Um cartão que oferece cashback", "Um cartão de desconto", "Um cartão para viagens internacionais"],
                correctAnswer: "Um cartão que acumula milhas de um programa específico"
            },
            {
                question: "As milhas podem ser usadas para comprar produtos?",
                options: ["Sim, em alguns programas", "Não, nunca", "Sim, mas somente eletrônicos", "Sim, mas somente em lojas físicas"],
                correctAnswer: "Sim, em alguns programas"
            },
            {
                question: "O que é uma parceria entre companhias aéreas?",
                options: ["Quando duas companhias operam voos juntos", "Quando duas companhias compartilham milhas", "Quando duas companhias oferecem tarifas baixas", "Quando duas companhias oferecem pacotes de viagem"],
                correctAnswer: "Quando duas companhias compartilham milhas"
            },
            {
                question: "Qual é a principal razão pela qual as pessoas acumulam milhas?",
                options: ["Para trocar por passagens", "Para obter status de elite", "Para ganhar produtos grátis", "Para economizar dinheiro"],
                correctAnswer: "Para trocar por passagens"
            },
            {
                question: "O que acontece com as milhas se a companhia aérea falir?",
                options: ["Elas continuam válidas", "Elas expiram", "Elas podem ser transferidas", "Elas são perdidas"],
                correctAnswer: "Elas são perdidas"
            },
            {
                question: "Qual é um fator que pode aumentar a quantidade de milhas acumuladas?",
                options: ["Voos em classe econômica", "Participação em promoções", "Viagens de última hora", "Não fazer check-in online"],
                correctAnswer: "Participação em promoções"
            },
            {
                question: "O que são milhas promocionais?",
                options: ["Milhas que podem ser trocadas por produtos", "Milhas acumuladas em promoções específicas", "Milhas que não expiram", "Milhas de voos cancelados"],
                correctAnswer: "Milhas acumuladas em promoções específicas"
            },
            {
                question: "Como verificar o saldo de milhas?",
                options: ["Através do aplicativo da companhia aérea", "Por telefone", "Através de agências de viagem", "Não é possível verificar"],
                correctAnswer: "Através do aplicativo da companhia aérea"
            },
            {
                question: "Qual é a principal diferença entre milhas e dinheiro?",
                options: ["Milhas são intransferíveis, dinheiro é", "Milhas têm validade, dinheiro não", "Ambas podem ser usadas para compras", "Milhas não podem ser usadas em todas as transações"],
                correctAnswer: "Milhas têm validade, dinheiro não"
            },
            {
                question: "As milhas podem ser usadas para comprar bilhetes de eventos?",
                options: ["Sim, em alguns programas", "Não, nunca", "Somente para eventos de viagem", "Sim, mas somente em eventos de companhias aéreas"],
                correctAnswer: "Sim, em alguns programas"
            },
            {
                question: "O que significa 'status de elite' em programas de milhagem?",
                options: ["Mais milhas acumuladas", "Acesso a benefícios exclusivos", "Mais opções de resgate", "Acesso a voos mais baratos"],
                correctAnswer: "Acesso a benefícios exclusivos"
            },
            {
                question: "O que é um programa de lealdade?",
                options: ["Um programa de acumulação de pontos", "Um programa de descontos", "Um programa de viagens", "Um programa de cashback"],
                correctAnswer: "Um programa de acumulação de pontos"
            },
            {
                question: "Como as milhas são calculadas em voos internacionais?",
                options: ["Baseado na distância", "Baseado no preço do bilhete", "Baseado no tempo de voo", "Baseado no número de passageiros"],
                correctAnswer: "Baseado na distância"
            },
            {
                question: "As milhas podem ser usadas para obter acesso a salas VIP?",
                options: ["Sim, em alguns programas", "Não, nunca", "Sim, mas somente para voos internacionais", "Sim, mas somente para clientes de elite"],
                correctAnswer: "Sim, em alguns programas"
            },
            {
                question: "Qual é um erro comum ao usar milhas?",
                options: ["Não verificar a validade", "Trocar muitas milhas de uma vez", "Reservar com muita antecedência", "Usar milhas em voos de curta distância"],
                correctAnswer: "Não verificar a validade"
            },
            {
                question: "O que é uma promoção de milhas dobradas?",
                options: ["Acumular o dobro de milhas em um voo", "Trocar milhas por passagens", "Perder milhas mais rapidamente", "Vender milhas"],
                correctAnswer: "Acumular o dobro de milhas em um voo"
            },
            {
                question: "Qual é o termo para milhas que foram utilizadas?",
                options: ["Milhas gastas", "Milhas resgatadas", "Milhas expiradas", "Milhas perdidas"],
                correctAnswer: "Milhas resgatadas"
            }
        ]

    },
    {
        id: 'ofertantes',
        title: "Ofertantes",
        questions: [
            {
                question: "Qual é o papel dos ofertantes na Maxmilhas?",
                options: ["Vender passagens aéreas", "Oferecer serviços de hotel", "Gerar ofertas de passagens", "Gerenciar milhas"],
                correctAnswer: "Gerar ofertas de passagens"
            },
            {
                question: "Quem pode ser considerado ofertante?",
                options: ["Companhias aéreas", "Agências de viagens", "Clientes", "Todas as anteriores"],
                correctAnswer: "Todas as anteriores"
            },
            {
                question: "Qual a importância dos ofertantes?",
                options: ["Aumentar a concorrência", "Reduzir preços", "Melhorar a qualidade do serviço", "Todas as anteriores"],
                correctAnswer: "Todas as anteriores"
            },
            {
                question: "Os ofertantes têm acesso a quais informações?",
                options: ["Dados de vendas", "Milhas acumuladas", "Preços de passagens", "Nenhuma das anteriores"],
                correctAnswer: "Preços de passagens"
            },
            {
                question: "Como os ofertantes contribuem para a Maxmilhas?",
                options: ["Criando promoções", "Oferecendo suporte", "Gerando relatórios", "Apenas vendendo passagens"],
                correctAnswer: "Criando promoções"
            },
            {
                question: "O que é necessário para se tornar um ofertante?",
                options: ["Registro no site", "Experiência em vendas", "Aprovação da Maxmilhas", "Todas as anteriores"],
                correctAnswer: "Registro no site"
            },
            {
                question: "Como os ofertantes podem maximizar suas vendas?",
                options: ["Ajustando preços", "Melhorando o atendimento", "Criando ofertas atrativas", "Todas as anteriores"],
                correctAnswer: "Todas as anteriores"
            },
            {
                question: "Os ofertantes podem alterar os preços das passagens?",
                options: ["Sim, livremente", "Não, estão fixos", "Sim, com aprovação", "Somente em promoções"],
                correctAnswer: "Sim, com aprovação"
            },
            {
                question: "Qual é um benefício de ser um ofertante na Maxmilhas?",
                options: ["Acesso a um grande público", "Aumento de milhas", "Comissão fixa", "Exclusividade de vendas"],
                correctAnswer: "Acesso a um grande público"
            },
            {
                question: "Como os ofertantes podem promover suas ofertas?",
                options: ["Utilizando redes sociais", "Email marketing", "Ofertas limitadas", "Todas as anteriores"],
                correctAnswer: "Todas as anteriores"
            },
            {
                question: "Os ofertantes têm acesso a relatórios de desempenho?",
                options: ["Sim, sempre", "Não, nunca", "Somente para algumas vendas", "Apenas trimestralmente"],
                correctAnswer: "Sim, sempre"
            },
            {
                question: "Qual a principal função dos ofertantes?",
                options: ["Criar promoções de passagens", "Gerar receita para a Maxmilhas", "Analisar dados de vendas", "Realizar atendimento ao cliente"],
                correctAnswer: "Criar promoções de passagens"
            },
            {
                question: "Os ofertantes podem cancelar suas ofertas?",
                options: ["Sim, a qualquer momento", "Não, são permanentes", "Sim, mas com aviso prévio", "Somente se não venderem"],
                correctAnswer: "Sim, mas com aviso prévio"
            },
            {
                question: "Qual é um desafio comum enfrentado pelos ofertantes?",
                options: ["Falta de visibilidade", "Baixa demanda", "Concorrência alta", "Todas as anteriores"],
                correctAnswer: "Todas as anteriores"
            },
            {
                question: "Os ofertantes podem colaborar entre si?",
                options: ["Sim, sempre", "Não, é proibido", "Somente em promoções especiais", "Somente se forem da mesma companhia"],
                correctAnswer: "Sim, sempre"
            },
            {
                question: "Como os ofertantes podem se manter atualizados sobre o mercado?",
                options: ["Participando de eventos", "Acompanhando tendências", "Fazendo pesquisas de mercado", "Todas as anteriores"],
                correctAnswer: "Todas as anteriores"
            },
            {
                question: "Qual é a principal razão pela qual os ofertantes trabalham com a Maxmilhas?",
                options: ["Acesso a clientes", "Comissões altas", "Reconhecimento de marca", "Todos os acima"],
                correctAnswer: "Todos os acima"
            },
            {
                question: "Os ofertantes podem definir suas próprias condições de venda?",
                options: ["Sim, sem restrições", "Não, são padronizadas", "Sim, mas dentro de diretrizes", "Somente em vendas diretas"],
                correctAnswer: "Sim, mas dentro de diretrizes"
            },
            {
                question: "Qual é um fator que pode influenciar o sucesso de um ofertante?",
                options: ["Preço", "Qualidade do atendimento", "Marketing eficaz", "Todas as anteriores"],
                correctAnswer: "Todas as anteriores"
            },
            {
                question: "Os ofertantes podem participar de promoções da Maxmilhas?",
                options: ["Sim, sempre", "Não, nunca", "Somente se solicitarem", "Apenas em ocasiões especiais"],
                correctAnswer: "Sim, sempre"
            },
            {
                question: "Como os ofertantes devem lidar com feedback dos clientes?",
                options: ["Ignorar", "Responder de forma construtiva", "Apenas se for positivo", "Responder apenas se for negativo"],
                correctAnswer: "Responder de forma construtiva"
            },
            {
                question: "Qual é a importância do atendimento ao cliente para os ofertantes?",
                options: ["Fidelização", "Resolução de problemas", "Imagem da marca", "Todas as anteriores"],
                correctAnswer: "Todas as anteriores"
            },
            {
                question: "Os ofertantes têm acesso a treinamento?",
                options: ["Sim, sempre", "Não, nunca", "Apenas para novos ofertantes", "Somente online"],
                correctAnswer: "Sim, sempre"
            },
            {
                question: "Qual é um recurso que os ofertantes podem usar para otimizar suas ofertas?",
                options: ["Análises de dados", "Redes sociais", "Promoções sazonais", "Todas as anteriores"],
                correctAnswer: "Todas as anteriores"
            },
            {
                question: "Qual é a função dos gestores de ofertas?",
                options: ["Supervisionar os ofertantes", "Gerar relatórios de vendas", "Criar estratégias de marketing", "Todos os acima"],
                correctAnswer: "Todos os acima"
            },
            {
                question: "Os ofertantes podem escolher os destinos que querem oferecer?",
                options: ["Sim, livremente", "Não, são fixos", "Sim, com algumas restrições", "Somente em épocas específicas"],
                correctAnswer: "Sim, com algumas restrições"
            },
            {
                question: "Qual é um benefício de participar de uma aliança de ofertantes?",
                options: ["Aumento de visibilidade", "Maior concorrência", "Menores comissões", "Mais limitações"],
                correctAnswer: "Aumento de visibilidade"
            },
            {
                question: "Como os ofertantes podem ajustar suas estratégias de venda?",
                options: ["Analisando dados de vendas", "Mudando preços", "Ajustando promoções", "Todas as anteriores"],
                correctAnswer: "Todas as anteriores"
            },
            {
                question: "Qual é o impacto das avaliações dos clientes sobre os ofertantes?",
                options: ["Não tem impacto", "Pode melhorar ou prejudicar a reputação", "Aumenta as vendas", "Reduz as vendas"],
                correctAnswer: "Pode melhorar ou prejudicar a reputação"
            },
            {
                question: "Os ofertantes devem estar cientes de tendências de mercado?",
                options: ["Sim, sempre", "Não, nunca", "Somente em sua área de atuação", "Apenas se forem novos"],
                correctAnswer: "Sim, sempre"
            },
            {
                question: "Qual é o papel das plataformas digitais para os ofertantes?",
                options: ["Facilitar vendas", "Gerar relatórios", "Melhorar o marketing", "Todas as anteriores"],
                correctAnswer: "Todas as anteriores"
            },
            {
                question: "Os ofertantes podem se beneficiar de análises de mercado?",
                options: ["Sim, isso os ajuda a tomar decisões", "Não, não é necessário", "Somente se forem grandes empresas", "Apenas se forem novos"],
                correctAnswer: "Sim, isso os ajuda a tomar decisões"
            },
            {
                question: "Qual é uma estratégia eficaz para aumentar as vendas?",
                options: ["Promoções", "Descontos", "Marketing digital", "Todas as anteriores"],
                correctAnswer: "Todas as anteriores"
            },
            {
                question: "Os ofertantes têm acesso a ferramentas de marketing?",
                options: ["Sim, sempre", "Não, nunca", "Somente em épocas específicas", "Apenas se solicitarem"],
                correctAnswer: "Sim, sempre"
            },
            {
                question: "Qual é o impacto da tecnologia no trabalho dos ofertantes?",
                options: ["Facilita processos", "Aumenta a concorrência", "Melhora o atendimento", "Todas as anteriores"],
                correctAnswer: "Todas as anteriores"
            },
            {
                question: "Os ofertantes podem ter acesso a consultorias?",
                options: ["Sim, dependendo da situação", "Não, nunca", "Apenas para grandes empresas", "Sempre que solicitarem"],
                correctAnswer: "Sim, dependendo da situação"
            },
            {
                question: "Qual é a importância do networking para os ofertantes?",
                options: ["Criar parcerias", "Aumentar a visibilidade", "Trocar informações", "Todas as anteriores"],
                correctAnswer: "Todas as anteriores"
            },
            {
                question: "Os ofertantes podem adaptar suas ofertas ao feedback dos clientes?",
                options: ["Sim, sempre", "Não, é proibido", "Somente se forem negativos", "Apenas se solicitarem"],
                correctAnswer: "Sim, sempre"
            },
            {
                question: "Qual é um risco de ser um ofertante?",
                options: ["Baixas vendas", "Alta concorrência", "Mudanças nas regulamentações", "Todas as anteriores"],
                correctAnswer: "Todas as anteriores"
            },
            {
                question: "Como os ofertantes podem se destacar no mercado?",
                options: ["Oferecendo preços competitivos", "Criando promoções inovadoras", "Oferecendo excelente atendimento", "Todas as anteriores"],
                correctAnswer: "Todas as anteriores"
            },
            {
                question: "Qual é a relação entre ofertantes e companhias aéreas?",
                options: ["Colaborativa", "Competitiva", "Indiferente", "Nenhuma das anteriores"],
                correctAnswer: "Colaborativa"
            },
            {
                question: "Os ofertantes podem usar estratégias de fidelização?",
                options: ["Sim, para manter clientes", "Não, é restrito", "Apenas para novos clientes", "Somente se forem grandes empresas"],
                correctAnswer: "Sim, para manter clientes"
            }
        ]
    },
    {
        id: 'tour_virtual',
        title: "Tour Virtual da Empresa",
        questions: [
            {
                question: "O que é um tour virtual?",
                options: ["Uma visita guiada presencial", "Um vídeo promocional", "Uma experiência online", "Um jogo"],
                correctAnswer: "Uma experiência online"
            },
            {
                question: "Qual é o objetivo do tour virtual?",
                options: ["Divulgar a empresa", "Treinar funcionários", "Realizar vendas", "Nenhuma das anteriores"],
                correctAnswer: "Divulgar a empresa"
            },
            {
                question: "Quais recursos são geralmente incluídos em um tour virtual?",
                options: ["Imagens estáticas", "Vídeos", "Interatividade", "Todas as anteriores"],
                correctAnswer: "Todas as anteriores"
            },
            {
                question: "Como um tour virtual pode beneficiar os clientes?",
                options: ["Oferecendo informações detalhadas", "Facilitando a decisão de compra", "Proporcionando uma experiência imersiva", "Todas as anteriores"],
                correctAnswer: "Todas as anteriores"
            },
            {
                question: "Um tour virtual é útil apenas para empresas de turismo?",
                options: ["Sim", "Não", "Apenas para empresas grandes", "Depende da empresa"],
                correctAnswer: "Não"
            },
        ]
    },
    {
        id: 'historia',
        title: "História da Empresa e Cultura",
        questions: [
            {
                question: "Quando a Maxmilhas foi fundada?",
                options: ["2010", "2012", "2015", "2018"],
                correctAnswer: "2012"
            },
            {
                question: "Qual é a missão da Maxmilhas?",
                options: ["Vender passagens aéreas", "Revolucionar o mercado de milhas", "Oferecer promoções", "Fornecer assistência ao cliente"],
                correctAnswer: "Revolucionar o mercado de milhas"
            },
            {
                question: "Qual é um dos valores fundamentais da Maxmilhas?",
                options: ["Inovação", "Economia", "Tradição", "Austeridade"],
                correctAnswer: "Inovação"
            },
            {
                question: "Como a Maxmilhas se destaca no mercado?",
                options: ["Por suas promoções", "Por seu atendimento ao cliente", "Por seu site intuitivo", "Todas as anteriores"],
                correctAnswer: "Todas as anteriores"
            },
            {
                question: "Qual o principal foco da cultura da Maxmilhas?",
                options: ["Clientes", "Funcionários", "Ações sociais", "Lucros"],
                correctAnswer: "Clientes"
            },
        ]
    },
    {
        id: 'nocao',
        title: "Noções de Informática",
        questions: [
            {
                question: "Qual é o principal componente de um computador?",
                options: ["Teclado", "Monitor", "Processador", "Mouse"],
                correctAnswer: "Processador"
            },
            {
                question: "O que é um sistema operacional?",
                options: ["Software que controla o hardware", "Um tipo de hardware", "Um programa de jogos", "Um aplicativo de edição de texto"],
                correctAnswer: "Software que controla o hardware"
            },
            {
                question: "Qual é a função do teclado?",
                options: ["Imprimir documentos", "Inserir dados", "Armazenar arquivos", "Conectar à internet"],
                correctAnswer: "Inserir dados"
            },
            {
                question: "O que é a internet?",
                options: ["Uma rede de computadores", "Um programa de computador", "Um jogo online", "Uma aplicação de software"],
                correctAnswer: "Uma rede de computadores"
            },
            {
                question: "Qual é a finalidade de um antivírus?",
                options: ["Proteger contra vírus", "Aumentar a velocidade do computador", "Fazer backup de arquivos", "Desinstalar programas"],
                correctAnswer: "Proteger contra vírus"
            },
        ]
    },
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
