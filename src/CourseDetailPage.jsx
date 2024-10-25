import styles from './CourseDetailPage.module.css';
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import cursocockpit00 from './assets/Cursos/Cockpit/cursocockpit00.jpg';
import cursocockpit01 from './assets/Cursos/Cockpit/cursocockpit01.jpg';
import cursocockpit02 from './assets/Cursos/Cockpit/cursocockpit02.jpg';
import cursocockpit03 from './assets/Cursos/Cockpit/cursocockpit03.jpg';
import cursocockpit04 from './assets/Cursos/Cockpit/cursocockpit04.jpg';
import cursocockpit05 from './assets/Cursos/Cockpit/cursocockpit05.jpg';
import cursocockpit06 from './assets/Cursos/Cockpit/cursocockpit06.jpg';
import cursocockpit07 from './assets/Cursos/Cockpit/cursocockpit07.jpg';
import cursocockpit08 from './assets/Cursos/Cockpit/cursocockpit08.jpg';
import cursocockpit09 from './assets/Cursos/Cockpit/cursocockpit09.jpg';
import cursocockpit10 from './assets/Cursos/Cockpit/cursocockpit10.jpg';
import cursocockpit11 from './assets/Cursos/Cockpit/cursocockpit11.jpg';
import cursocockpit12 from './assets/Cursos/Cockpit/cursocockpit12.jpg';
import cursocockpit13 from './assets/Cursos/Cockpit/cursocockpit13.jpg';
import cursocockpit14 from './assets/Cursos/Cockpit/cursocockpit14.jpg';
import cursocockpit15 from './assets/Cursos/Cockpit/cursocockpit15.jpg';
import cursocockpit16 from './assets/Cursos/Cockpit/cursocockpit16.jpg';
import cursocockpit17 from './assets/Cursos/Cockpit/cursocockpit17.jpg';
import cursocockpit18 from './assets/Cursos/Cockpit/cursocockpit18.jpg';
import cursocockpit19 from './assets/Cursos/Cockpit/cursocockpit19.jpg';
import cursocockpit20 from './assets/Cursos/Cockpit/cursocockpit20.jpg';
import cursocockpit21 from './assets/Cursos/Cockpit/cursocockpit21.jpg';
import cursocockpit22 from './assets/Cursos/Cockpit/cursocockpit22.jpg';
import cursocockpit23 from './assets/Cursos/Cockpit/cursocockpit23.jpg';
import cursocockpit24 from './assets/Cursos/Cockpit/cursocockpit24.jpg';
import cursocockpit25 from './assets/Cursos/Cockpit/cursocockpit25.jpg';
import cursocockpit26 from './assets/Cursos/Cockpit/cursocockpit26.jpg';
import cursocockpit27 from './assets/Cursos/Cockpit/cursocockpit27.jpg';
import cursocockpit28 from './assets/Cursos/Cockpit/cursocockpit28.jpg';
import cursocockpit29 from './assets/Cursos/Cockpit/cursocockpit29.jpg';
import cursocockpit30 from './assets/Cursos/Cockpit/cursocockpit30.jpg';
import cursocockpit31 from './assets/Cursos/Cockpit/cursocockpit31.jpg';
import cursocockpit32 from './assets/Cursos/Cockpit/cursocockpit32.jpg';
import cursocockpit33 from './assets/Cursos/Cockpit/cursocockpit33.jpg';
import cursocockpit34 from './assets/Cursos/Cockpit/cursocockpit34.jpg';
import cursocockpit35 from './assets/Cursos/Cockpit/cursocockpit35.jpg';
import cursocockpit36 from './assets/Cursos/Cockpit/cursocockpit36.jpg';
import cursocockpit37 from './assets/Cursos/Cockpit/cursocockpit37.jpg';
import cursocockpit38 from './assets/Cursos/Cockpit/cursocockpit38.jpg';
import cursocockpit39 from './assets/Cursos/Cockpit/cursocockpit39.jpg';
import cursocockpit40 from './assets/Cursos/Cockpit/cursocockpit40.jpg';
import cursocockpit41 from './assets/Cursos/Cockpit/cursocockpit41.jpg';
import cursocockpit42 from './assets/Cursos/Cockpit/cursocockpit42.jpg';
import cursocockpit43 from './assets/Cursos/Cockpit/cursocockpit43.jpg';
import cursocockpit44 from './assets/Cursos/Cockpit/cursocockpit44.jpg';
import cursocockpit45 from './assets/Cursos/Cockpit/cursocockpit45.jpg';
import cursocockpit46 from './assets/Cursos/Cockpit/cursocockpit46.jpg';
import cursocockpit47 from './assets/Cursos/Cockpit/cursocockpit47.jpg';
import cursocockpit48 from './assets/Cursos/Cockpit/cursocockpit48.jpg';
import cursocockpit49 from './assets/Cursos/Cockpit/cursocockpit49.jpg';
import cursocockpit50 from './assets/Cursos/Cockpit/cursocockpit50.jpg';
import cursocockpit51 from './assets/Cursos/Cockpit/cursocockpit51.jpg';
import cursocockpit52 from './assets/Cursos/Cockpit/cursocockpit52.jpg';
import cursocockpit53 from './assets/Cursos/Cockpit/cursocockpit53.jpg';
import cursocockpit54 from './assets/Cursos/Cockpit/cursocockpit54.jpg';
import cursocockpit55 from './assets/Cursos/Cockpit/cursocockpit55.jpg';
import cursocockpit56 from './assets/Cursos/Cockpit/cursocockpit56.jpg';
import cursocockpit57 from './assets/Cursos/Cockpit/cursocockpit57.jpg';
import cursocockpit58 from './assets/Cursos/Cockpit/cursocockpit58.jpg';
import cursocockpit59 from './assets/Cursos/Cockpit/cursocockpit59.jpg';
import cursocockpit60 from './assets/Cursos/Cockpit/cursocockpit60.jpg';
import cursocockpit61 from './assets/Cursos/Cockpit/cursocockpit61.jpg';
import cursocockpit62 from './assets/Cursos/Cockpit/cursocockpit62.jpg';
import cursocockpit63 from './assets/Cursos/Cockpit/cursocockpit63.jpg';
import cursocockpit64 from './assets/Cursos/Cockpit/cursocockpit64.jpg';
import cursocockpit65 from './assets/Cursos/Cockpit/cursocockpit65.jpg';
import cursocockpit66 from './assets/Cursos/Cockpit/cursocockpit66.jpg';
import cursocockpit67 from './assets/Cursos/Cockpit/cursocockpit67.jpg';
import cursocockpit68 from './assets/Cursos/Cockpit/cursocockpit68.jpg';
import cursocockpit69 from './assets/Cursos/Cockpit/cursocockpit69.jpg';
import cursocockpit70 from './assets/Cursos/Cockpit/cursocockpit70.jpg';
import cursocockpit71 from './assets/Cursos/Cockpit/cursocockpit71.jpg';
import cursocockpit72 from './assets/Cursos/Cockpit/cursocockpit72.jpg';
import cursocockpit73 from './assets/Cursos/Cockpit/cursocockpit73.jpg';
import cursocockpit74 from './assets/Cursos/Cockpit/cursocockpit74.jpg';
import cursocockpit75 from './assets/Cursos/Cockpit/cursocockpit75.jpg';
import cursocockpit76 from './assets/Cursos/Cockpit/cursocockpit76.jpg';
import cursocockpit77 from './assets/Cursos/Cockpit/cursocockpit77.jpg';
import cursocockpit78 from './assets/Cursos/Cockpit/cursocockpit78.jpg';
import cursocockpit79 from './assets/Cursos/Cockpit/cursocockpit79.jpg';
import cursocockpit80 from './assets/Cursos/Cockpit/cursocockpit80.jpg';
import cursocockpit81 from './assets/Cursos/Cockpit/cursocockpit81.jpg';
import cursocockpit82 from './assets/Cursos/Cockpit/cursocockpit82.jpg';
import cursocockpit83 from './assets/Cursos/Cockpit/cursocockpit83.jpg';
import cursocockpit84 from './assets/Cursos/Cockpit/cursocockpit84.jpg';
import cursocockpit85 from './assets/Cursos/Cockpit/cursocockpit85.jpg';
import cursocockpit86 from './assets/Cursos/Cockpit/cursocockpit86.jpg';
import cursocockpit87 from './assets/Cursos/Cockpit/cursocockpit87.jpg';
import cursocockpit88 from './assets/Cursos/Cockpit/cursocockpit88.jpg';
import cursocockpit89 from './assets/Cursos/Cockpit/cursocockpit89.jpg';
import cursocockpit90 from './assets/Cursos/Cockpit/cursocockpit90.jpg';
import cursocockpit91 from './assets/Cursos/Cockpit/cursocockpit91.jpg';
import cursocockpit92 from './assets/Cursos/Cockpit/cursocockpit92.jpg';
import cursocockpit93 from './assets/Cursos/Cockpit/cursocockpit93.jpg';
import cursocockpit94 from './assets/Cursos/Cockpit/cursocockpit94.jpg';
import cursocockpit95 from './assets/Cursos/Cockpit/cursocockpit95.jpg';
import cursocockpit96 from './assets/Cursos/Cockpit/cursocockpit96.jpg';
import cursocockpit97 from './assets/Cursos/Cockpit/cursocockpit97.jpg';
import cursocockpit98 from './assets/Cursos/Cockpit/cursocockpit98.jpg';
import cursocockpit99 from './assets/Cursos/Cockpit/cursocockpit99.jpg';
import cursocockpit100 from './assets/Cursos/Cockpit/cursocockpit100.jpg';
import cursocockpit101 from './assets/Cursos/Cockpit/cursocockpit101.jpg';
import cursocockpit102 from './assets/Cursos/Cockpit/cursocockpit102.jpg';
import cursocockpit103 from './assets/Cursos/Cockpit/cursocockpit103.jpg';
import cursocockpit104 from './assets/Cursos/Cockpit/cursocockpit104.jpg';
import cursocockpit105 from './assets/Cursos/Cockpit/cursocockpit105.jpg';
import cursocockpit106 from './assets/Cursos/Cockpit/cursocockpit106.jpg';
import cursocockpit107 from './assets/Cursos/Cockpit/cursocockpit107.jpg';
import cursocockpit108 from './assets/Cursos/Cockpit/cursocockpit108.jpg';
import cursocockpit109 from './assets/Cursos/Cockpit/cursocockpit109.jpg';
import cursocockpit110 from './assets/Cursos/Cockpit/cursocockpit110.jpg';
import cursocockpit111 from './assets/Cursos/Cockpit/cursocockpit111.jpg';
import cursoemissoesazul00 from './assets/Cursos/Emissoesazul/cursoemissoesazul00.jpg';
import cursoemissoesazul01 from './assets/Cursos/Emissoesazul/cursoemissoesazul01.jpg';
import cursoemissoesazul02 from './assets/Cursos/Emissoesazul/cursoemissoesazul02.jpg';
import cursoemissoesazul03 from './assets/Cursos/Emissoesazul/cursoemissoesazul03.jpg';
import cursoemissoesazul04 from './assets/Cursos/Emissoesazul/cursoemissoesazul04.jpg';
import cursoemissoesazul05 from './assets/Cursos/Emissoesazul/cursoemissoesazul05.jpg';
import cursoemissoesazul06 from './assets/Cursos/Emissoesazul/cursoemissoesazul06.jpg';
import cursoemissoesazul07 from './assets/Cursos/Emissoesazul/cursoemissoesazul07.jpg';
import cursoemissoesazul08 from './assets/Cursos/Emissoesazul/cursoemissoesazul08.jpg';
import cursoemissoesgol00 from './assets/Cursos/Emissoesgol/cursoemissoesgol00.jpg';
import cursoemissoesgol01 from './assets/Cursos/Emissoesgol/cursoemissoesgol01.jpg';
import cursoemissoesgol02 from './assets/Cursos/Emissoesgol/cursoemissoesgol02.jpg';
import cursoemissoesgol03 from './assets/Cursos/Emissoesgol/cursoemissoesgol03.jpg';
import cursoemissoesgol04 from './assets/Cursos/Emissoesgol/cursoemissoesgol04.jpg';
import cursoemissoesgol05 from './assets/Cursos/Emissoesgol/cursoemissoesgol05.jpg';
import cursoemissoesgol06 from './assets/Cursos/Emissoesgol/cursoemissoesgol06.jpg';
import cursoemissoesgol07 from './assets/Cursos/Emissoesgol/cursoemissoesgol07.jpg';
import cursoemissoesgol08 from './assets/Cursos/Emissoesgol/cursoemissoesgol08.jpg';
import cursoemissoesgol09 from './assets/Cursos/Emissoesgol/cursoemissoesgol09.jpg';
import cursoemissoesgol10 from './assets/Cursos/Emissoesgol/cursoemissoesgol10.jpg';
import cursoemissoesgol11 from './assets/Cursos/Emissoesgol/cursoemissoesgol11.jpg';
import cursoemissoesgol12 from './assets/Cursos/Emissoesgol/cursoemissoesgol12.jpg';
import cursoemissoesgol13 from './assets/Cursos/Emissoesgol/cursoemissoesgol13.jpg';
import cursoemissoesgol14 from './assets/Cursos/Emissoesgol/cursoemissoesgol14.jpg';
import cursoemissoesgol15 from './assets/Cursos/Emissoesgol/cursoemissoesgol15.jpg';
import cursoemissoesgol16 from './assets/Cursos/Emissoesgol/cursoemissoesgol16.jpg';
import cursoemissoesgol17 from './assets/Cursos/Emissoesgol/cursoemissoesgol17.jpg';
import cursoemissoeslatam00 from './assets/Cursos/Emissoeslatam/cursoemissoeslatam00.jpg';
import cursoemissoeslatam01 from './assets/Cursos/Emissoeslatam/cursoemissoeslatam01.jpg';
import cursoemissoeslatam02 from './assets/Cursos/Emissoeslatam/cursoemissoeslatam02.jpg';
import cursoemissoeslatam03 from './assets/Cursos/Emissoeslatam/cursoemissoeslatam03.jpg';
import cursoemissoeslatam04 from './assets/Cursos/Emissoeslatam/cursoemissoeslatam04.jpg';
import cursoemissoeslatam05 from './assets/Cursos/Emissoeslatam/cursoemissoeslatam05.jpg';
import cursoemissoeslatam06 from './assets/Cursos/Emissoeslatam/cursoemissoeslatam06.jpg';
import cursoemissoeslatam07 from './assets/Cursos/Emissoeslatam/cursoemissoeslatam07.jpg';
import cursoemissoeslatam08 from './assets/Cursos/Emissoeslatam/cursoemissoeslatam08.jpg';
import cursoemissoeslatam09 from './assets/Cursos/Emissoeslatam/cursoemissoeslatam09.jpg';
import cursoemissoeslatam10 from './assets/Cursos/Emissoeslatam/cursoemissoeslatam10.jpg';
import cursoemissoeslatam11 from './assets/Cursos/Emissoeslatam/cursoemissoeslatam11.jpg';
import cursoemissoeslatam12 from './assets/Cursos/Emissoeslatam/cursoemissoeslatam12.jpg';
import cursoemissoeslatam13 from './assets/Cursos/Emissoeslatam/cursoemissoeslatam13.jpg';
import cursoemissoeslatam14 from './assets/Cursos/Emissoeslatam/cursoemissoeslatam14.jpg';
import cursoemissoeslatam15 from './assets/Cursos/Emissoeslatam/cursoemissoeslatam15.jpg';
import cursoemissoeslatam16 from './assets/Cursos/Emissoeslatam/cursoemissoeslatam16.jpg';
import cursoemissoeslatam17 from './assets/Cursos/Emissoeslatam/cursoemissoeslatam17.jpg';
import cursoemissoeslatam18 from './assets/Cursos/Emissoeslatam/cursoemissoeslatam18.jpg';
import cursoemissoeslatam19 from './assets/Cursos/Emissoeslatam/cursoemissoeslatam19.jpg';
import cursoemissoeslatam20 from './assets/Cursos/Emissoeslatam/cursoemissoeslatam20.jpg';
import cursoemissoeslatam21 from './assets/Cursos/Emissoeslatam/cursoemissoeslatam21.jpg';
import cursoemissoeslatam22 from './assets/Cursos/Emissoeslatam/cursoemissoeslatam22.jpg';
import cursoemissoeslatam23 from './assets/Cursos/Emissoeslatam/cursoemissoeslatam23.jpg';
import cursoemissoeslatam24 from './assets/Cursos/Emissoeslatam/cursoemissoeslatam24.jpg';
import cursoemissoeslatam25 from './assets/Cursos/Emissoeslatam/cursoemissoeslatam25.jpg';
import cursoemissoeslatam26 from './assets/Cursos/Emissoeslatam/cursoemissoeslatam26.jpg';
import cursoemissoeslatam27 from './assets/Cursos/Emissoeslatam/cursoemissoeslatam27.jpg';
import cursoemissoeslatam28 from './assets/Cursos/Emissoeslatam/cursoemissoeslatam28.jpg';
import cursoemissoeslatam29 from './assets/Cursos/Emissoeslatam/cursoemissoeslatam29.jpg';
import cursoferramentas00 from './assets/Cursos/Ferramentas/cursoferramentas00.jpg';
import cursoferramentas01 from './assets/Cursos/Ferramentas/cursoferramentas01.jpg';
import cursoferramentas02 from './assets/Cursos/Ferramentas/cursoferramentas02.jpg';
import cursoferramentas03 from './assets/Cursos/Ferramentas/cursoferramentas03.jpg';
import cursoferramentas04 from './assets/Cursos/Ferramentas/cursoferramentas04.jpg';
import cursoferramentas05 from './assets/Cursos/Ferramentas/cursoferramentas05.jpg';
import cursoferramentas06 from './assets/Cursos/Ferramentas/cursoferramentas06.jpg';
import cursoferramentas07 from './assets/Cursos/Ferramentas/cursoferramentas07.jpg';
import cursoferramentas08 from './assets/Cursos/Ferramentas/cursoferramentas08.jpg';
import cursoferramentas10 from './assets/Cursos/Ferramentas/cursoferramentas10.jpg';
import cursoferramentas11 from './assets/Cursos/Ferramentas/cursoferramentas11.jpg';
import cursoferramentas12 from './assets/Cursos/Ferramentas/cursoferramentas12.jpg';
import cursoferramentas13 from './assets/Cursos/Ferramentas/cursoferramentas13.jpg';
import cursoferramentas14 from './assets/Cursos/Ferramentas/cursoferramentas14.jpg';
import cursoferramentas15 from './assets/Cursos/Ferramentas/cursoferramentas15.jpg';
import cursoferramentas16 from './assets/Cursos/Ferramentas/cursoferramentas16.jpg';
import cursoferramentas17 from './assets/Cursos/Ferramentas/cursoferramentas17.jpg';
import cursoferramentas18 from './assets/Cursos/Ferramentas/cursoferramentas18.jpg';
import cursoferramentas19 from './assets/Cursos/Ferramentas/cursoferramentas19.jpg';
import cursoferramentas20 from './assets/Cursos/Ferramentas/cursoferramentas20.jpg';
import cursohistoria00 from './assets/Cursos/Historia/cursohistoria00.jpg';
import cursohistoria01 from './assets/Cursos/Historia/cursohistoria01.jpg';
import cursohistoria02 from './assets/Cursos/Historia/cursohistoria02.jpg';
import cursohistoria03 from './assets/Cursos/Historia/cursohistoria03.jpg';
import cursohistoria04 from './assets/Cursos/Historia/cursohistoria04.jpg';
import cursohistoria05 from './assets/Cursos/Historia/cursohistoria05.jpg';
import cursohistoria06 from './assets/Cursos/Historia/cursohistoria06.jpg';
import cursohistoria07 from './assets/Cursos/Historia/cursohistoria07.jpg';
import cursohistoria08 from './assets/Cursos/Historia/cursohistoria08.jpg';
import cursohistoria09 from './assets/Cursos/Historia/cursohistoria09.jpg';
import cursohistoria10 from './assets/Cursos/Historia/cursohistoria10.jpg';
import cursohistoria11 from './assets/Cursos/Historia/cursohistoria11.jpg';
import cursohistoria12 from './assets/Cursos/Historia/cursohistoria12.jpg';
import cursohistoria13 from './assets/Cursos/Historia/cursohistoria13.jpg';
import cursohistoria14 from './assets/Cursos/Historia/cursohistoria14.jpg';
import cursohistoria15 from './assets/Cursos/Historia/cursohistoria15.jpg';
import cursohistoria16 from './assets/Cursos/Historia/cursohistoria16.jpg';
import cursohistoria17 from './assets/Cursos/Historia/cursohistoria17.jpg';
import cursohistoria18 from './assets/Cursos/Historia/cursohistoria18.jpg';
import cursohistoria19 from './assets/Cursos/Historia/cursohistoria19.jpg';
import cursohistoria20 from './assets/Cursos/Historia/cursohistoria20.jpg';
import cursohistoria21 from './assets/Cursos/Historia/cursohistoria21.jpg';
import cursohistoria22 from './assets/Cursos/Historia/cursohistoria22.jpg';
import cursohistoria23 from './assets/Cursos/Historia/cursohistoria23.jpg';
import cursohistoria24 from './assets/Cursos/Historia/cursohistoria24.jpg';
import cursohistoria25 from './assets/Cursos/Historia/cursohistoria25.jpg';
import cursohistoria26 from './assets/Cursos/Historia/cursohistoria26.jpg';
import cursohistoria27 from './assets/Cursos/Historia/cursohistoria27.jpg';
import cursomilhas00 from './assets/Cursos/Milhas/cursomilhas00.jpg';
import cursomilhas01 from './assets/Cursos/Milhas/cursomilhas01.jpg';
import cursomilhas02 from './assets/Cursos/Milhas/cursomilhas02.jpg';
import cursomilhas03 from './assets/Cursos/Milhas/cursomilhas03.jpg';
import cursomilhas04 from './assets/Cursos/Milhas/cursomilhas04.jpg';
import cursomilhas05 from './assets/Cursos/Milhas/cursomilhas05.jpg';
import cursomilhas06 from './assets/Cursos/Milhas/cursomilhas06.jpg';
import cursomilhas07 from './assets/Cursos/Milhas/cursomilhas07.jpg';
import cursomilhas08 from './assets/Cursos/Milhas/cursomilhas08.jpg';
import cursoinformatica00 from './assets/Cursos/Nocao/cursoinformatica00.jpg';
import cursoinformatica01 from './assets/Cursos/Nocao/cursoinformatica01.jpg';
import cursoinformatica02 from './assets/Cursos/Nocao/cursoinformatica02.jpg';
import cursoinformatica03 from './assets/Cursos/Nocao/cursoinformatica03.jpg';
import cursoinformatica04 from './assets/Cursos/Nocao/cursoinformatica04.jpg';
import cursoinformatica05 from './assets/Cursos/Nocao/cursoinformatica05.jpg';
import cursoinformatica06 from './assets/Cursos/Nocao/cursoinformatica06.jpg';
import cursoinformatica07 from './assets/Cursos/Nocao/cursoinformatica07.jpg';
import cursoinformatica08 from './assets/Cursos/Nocao/cursoinformatica08.jpg';
import cursoinformatica09 from './assets/Cursos/Nocao/cursoinformatica09.jpg';
import cursoinformatica10 from './assets/Cursos/Nocao/cursoinformatica10.jpg';
import cursoofertantes00 from './assets/Cursos/Ofertantes/cursoofertantes00.jpg';
import cursoofertantes01 from './assets/Cursos/Ofertantes/cursoofertantes01.jpg';
import cursoofertantes02 from './assets/Cursos/Ofertantes/cursoofertantes02.jpg';
import cursoofertantes03 from './assets/Cursos/Ofertantes/cursoofertantes03.jpg';
import cursoofertantes04 from './assets/Cursos/Ofertantes/cursoofertantes04.jpg';
import cursoofertantes05 from './assets/Cursos/Ofertantes/cursoofertantes05.jpg';
import cursoprejuizos00 from './assets/Cursos/Prejuizos/cursoprejuizos00.jpg';
import cursoprejuizos01 from './assets/Cursos/Prejuizos/cursoprejuizos01.jpg';
import cursoprejuizos02 from './assets/Cursos/Prejuizos/cursoprejuizos02.jpg';
import cursoprejuizos03 from './assets/Cursos/Prejuizos/cursoprejuizos03.jpg';
import cursoprejuizos04 from './assets/Cursos/Prejuizos/cursoprejuizos04.jpg';
import cursoprejuizos05 from './assets/Cursos/Prejuizos/cursoprejuizos05.jpg';
import cursoprejuizos06 from './assets/Cursos/Prejuizos/cursoprejuizos06.jpg';
import cursotour00 from './assets/Cursos/Tour_virtual/cursotour00.jpg';



const coursesData = {
    'cockpitsystem': 'Cockpit',
    'milhas': 'Milhas',
    'historia': 'História da Empresa e Cultura',
    'ofertantes': 'Ofertantes',
    'tour_virtual': 'Tour Virtual da Empresa',
    'nocao': 'Noções de Informática',
    'prejuizos': 'Prejuizos',
    'emissoes': 'Emissões',
    'emissoeslatam': 'Emissões na LATAM',
    'emissoesgol': 'Emissões na Gol',
    'emissoesazul': 'Emissões na Azul',
    'ferramentas': 'Ferramentas Auxiliares',

};

const lessonsData = {
    'bem-vindo-curso-cockpit': {
        title: 'Bem-vindo ao curso de Cockpit!',
        videoUrl: 'https://www.youtube.com/embed/5pvnt5PhiWs',
        description: (
                        <div>
                            <h1 style={{ marginTop:'10px', marginBottom:'30px' }}>Olá! </h1>
                            <p>Estamos muito felizes em tê-lo conosco neste curso dedicado ao sistema Cockpit da Maxmilhas, uma plataforma inovadora que transforma a maneira como as passagens aéreas são emitidas e gerenciadas. O Cockpit é uma ferramenta administrativa essencial que conecta ofertantes de milhas e clientes, facilitando todo o processo de emissão de bilhetes aéreos.</p>

                            <p style={{ marginTop:'30px', marginBottom:'30px' }}>Durante este curso, você terá a oportunidade sobre as funcionalidades e nos recursos que o Cockpit oferece. O objetivo é garantir que você tenha um entendimento claro de como navegar pelo sistema e aproveitar ao máximo suas capacidades. Exploraremos desde a compra de passagens, passando pela gestão de transações, até o uso eficiente das milhas disponíveis.</p>

                            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>O que esperar do curso</h2>
                            <p>Ao longo das aulas, vamos abordar tópicos fundamentais, incluindo:</p>
                            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                                <li><strong>Introdução ao aistema Cockpit:</strong> Compreenderemos a interface do sistema, suas principais funcionalidades e como acessá-lo corretamente.</li>
                                <li><strong>Emissão de passagens:</strong> Aprenderemos o processo completo de emissão de passagens aéreas, desde a criação de transações até a finalização com o envio do e-ticket ao cliente.</li>
                                <li><strong>Cancelamentos:</strong> Discutiremos os procedimentos necessários para cancelar passagens quando necessário.</li>
                                <li><strong>Busca e snálise de ofertantes:</strong> Veremos como encontrar ofertantes disponíveis e analisar suas propostas, sempre visando a melhor viabilidade e lucro para as transações.</li>
                            </ul>


                            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit00} alt="Imagem do sistema Cockpit"></img>
                            <p style={{ marginTop:'10px', marginBottom:'30px' }}>Este curso é projetado para ser interativo e prático, com exemplos reais e exercícios que ajudarão a solidificar seu aprendizado. Ao final do curso, você estará apto a utilizar o sistema Cockpit com confiança, otimizando suas operações e melhorando a experiência dos clientes da Maxmilhas.</p>

                            <p style={{ marginTop:'30px', marginBottom:'30px' }}>Prepare-se para uma jornada de aprendizado repleta de insights e práticas valiosas. Estamos ansiosos para começar essa experiência com você e ajudá-lo a se tornar um expert no uso do Cockpit da Maxmilhas!</p>
                        </div>
                     )
                },
'bem-vindo-curso-emissoes': {
    title: 'Bem-vindo ao curso de emissões!',
    videoUrl: 'https://www.youtube.com/embed/5pvnt5PhiWs',
    description: (
        <div>
            <h1 style={{ marginTop:'10px', marginBottom:'30px' }}>Olá! </h1>
            <p>Estamos muito felizes em tê-lo conosco neste curso dedicado ao processo de emissões da Maxmilhas, onde você aprenderá como gerenciar e realizar a emissão de passagens aéreas de forma prática e eficiente.</p>

            <p style={{ marginTop:'30px', marginBottom:'30px' }}>Este curso foi desenvolvido para equipá-lo com o conhecimento necessário para operar todas as etapas de uma emissão, desde a verificação de voos até o cancelamento de bilhetes quando necessário.</p>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>O que esperar do curso</h2>
            <p>Durante este curso, abordaremos os seguintes tópicos:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Introdução às emissões:</strong> Entenderemos o que envolve o processo de emissão, desde a análise dos dados até a conclusão da transação.</li>
                <li><strong>Emissão manual:</strong> Exploraremos o procedimento de emissões manuais, quando necessário, garantindo que você saiba como proceder caso o sistema não conclua automaticamente.</li>
                <li><strong>Cancelamento de e-tickets:</strong> Aprenderemos como cancelar um bilhete de maneira adequada e os motivos pelos quais o cancelamento pode ser necessário, como erros de emissão, voo indisponível ou solicitação do passageiro.</li>
                <li><strong>Adição de bagagem:</strong> Você saberá como adicionar bagagens extras em uma transação diretamente no site da companhia aérea e como informar o valor da bagagem no sistema.</li>
                <li><strong>Validade das milhas:</strong> Discutiremos como verificar e gerenciar a validade das milhas de um cliente, evitando que milhas expiradas afetem as emissões.</li>
                <li><strong>Ferramentas de suporte:</strong> Veremos como utilizar os recursos auxiliares, como Cockpit, para otimizar suas operações e garantir uma melhor experiência para o cliente.</li>
            </ul>
            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit00} alt="Imagem do sistema Cockpit"></img>

            <p style={{ marginTop:'10px', marginBottom:'30px' }}>Este curso foi desenhado para ser prático e envolvente, com exercícios e exemplos reais que o ajudarão a fixar o conteúdo.</p>

            <p style={{ marginTop:'30px', marginBottom:'30px' }}>Ao final, você estará preparado para lidar com todas as etapas do processo de emissão, seja para resolver problemas de voo, ajustar milhas ou cancelar transações quando necessário.</p>

            <p style={{ marginTop:'30px', marginBottom:'30px' }}>Estamos animados para compartilhar esse conhecimento com você e ajudá-lo a se tornar um especialista no processo de emissões da Maxmilhas. Prepare-se para uma experiência de aprendizado rica e dinâmica!</p>
        </div>
    )
},
'bem-vindo-curso-emissoesazul': {
    title: 'Bem-vindo ao curso de emissões da Azul!',
    videoUrl: 'https://www.youtube.com/embed/5pvnt5PhiWs',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Olá!</h1>
            <p>Estamos muito felizes em tê-lo conosco neste curso dedicado ao processo de emissões de passagens da Azul. Aqui, você aprenderá a utilizar de forma eficiente as ferramentas e sistemas necessários para gerenciar todo o processo de emissão, garantindo que os clientes recebam suas passagens utilizando milhas de forma segura e ágil.</p>

            <p style={{ marginTop: '30px', marginBottom: '30px' }}>O programa de fidelidade da Azul é um dos mais dinâmicos do mercado, e durante este curso você adquirirá conhecimentos sobre como realizar emissões, gerenciar beneficiários, conferir milhas e solucionar eventuais problemas de emissão.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>O que esperar do curso</h2>
            <p>Ao longo deste curso, exploraremos os seguintes tópicos:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Introdução ao programa de fidelidade da Azul:</strong> Entenda como funciona o sistema de milhas da Azul, desde a acumulação até a emissão de passagens para diferentes níveis de clientes (básico, topázio, safira e diamante).</li>
                <li><strong>Processo de emissão:</strong> Vamos te guiar no passo a passo para realizar emissões de passagens da Azul, desde a consulta de disponibilidade de voos até a finalização do e-ticket.</li>
                <li><strong>Gerenciamento de beneficiários:</strong> Você aprenderá como cadastrar e gerenciar os beneficiários do cliente no programa de fidelidade, levando em conta as recentes mudanças de limite e prazo de carência.</li>
                <li><strong>Cancelamento de e-tickets:</strong> Exploraremos as razões para o cancelamento de um e-ticket, como erros de emissão ou solicitações de clientes, e o processo para realizar o cancelamento diretamente no site da Azul.</li>
                <li><strong>Validade de milhas e extrato:</strong> Descubra como verificar a validade das milhas dos clientes e consultar o extrato de pontos no sistema da Azul para evitar problemas durante o processo de emissão.</li>
                <li><strong>Adição de bagagem:</strong> Aprenda como adicionar bagagens extras durante o processo de emissão e como garantir que o pagamento e os detalhes sejam devidamente registrados.</li>
            </ul>

            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit00} alt="Imagem do sistema Cockpit" />

            <p style={{ marginTop: '10px', marginBottom: '30px' }}>Este curso foi elaborado para ser prático, com exercícios reais que o ajudarão a consolidar seu aprendizado. Ao final, você estará preparado para lidar com todos os aspectos das emissões da Azul, oferecendo aos clientes um atendimento de excelência e garantindo que suas passagens sejam emitidas de maneira eficiente e sem complicações.</p>

            <p style={{ marginTop: '30px', marginBottom: '30px' }}>Estamos entusiasmados em começar essa jornada com você e esperamos que, ao final, você se torne um especialista em emissões no programa de fidelidade da Azul!</p>
        </div>
    )
},

'bem-vindo-curso-emissoesgol': {
    title: 'Bem-vindo ao curso de emissões da GOL!',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Bem-vindo ao curso - Emissões da GOL</h1>
            <p>Estamos muito felizes em tê-lo conosco neste curso focado no processo de emissões de passagens da GOL. Ao longo deste treinamento, você aprenderá todas as etapas necessárias para emitir passagens aéreas utilizando milhas no programa de fidelidade Smiles, garantindo uma experiência eficiente e segura para os clientes.</p>

            <p>O programa Smiles da GOL é amplamente utilizado, e entender como operar no sistema é fundamental para realizar emissões com sucesso. Durante o curso, abordaremos desde a consulta de voos e milhas, até a solução de problemas e cancelamentos de passagens.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>O que esperar do curso</h2>
            <p>Neste curso, exploraremos os seguintes tópicos:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Introdução ao programa Smiles:</strong> Compreenda como funciona o programa de fidelidade da GOL, os diferentes níveis de clientes (Smiles, Prata, Ouro e Diamante), e como as milhas são acumuladas e utilizadas.</li>
                <li><strong>Processo de emissão de passagens:</strong> Você aprenderá o passo a passo para emitir passagens da GOL, desde a consulta de disponibilidade de voos, até a confirmação e envio do e-ticket ao cliente.</li>
                <li><strong>Cancelamento de passagens:</strong> Serão explorados os motivos mais comuns para o cancelamento de e-tickets, como erros na emissão ou solicitações de clientes, e como realizar o processo diretamente no site da GOL.</li>
                <li><strong>Consulta de extrato e histórico de milhas:</strong> Aprenda a acessar o extrato de milhas do cliente e a verificar o histórico de transações, garantindo a precisão na emissão e nos cálculos.</li>
            </ul>

            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit00} alt="Imagem do sistema Cockpit" />

            <p>Este curso foi desenvolvido para ser prático e dinâmico, com exemplos reais que reforçam o aprendizado de cada etapa. Ao concluir, você estará totalmente apto a realizar emissões de passagens da GOL utilizando o programa Smiles, oferecendo uma experiência impecável aos clientes.</p>

            <p>Estamos entusiasmados por embarcar nesta jornada com você e temos certeza de que, ao final, você estará pronto para realizar emissões com confiança e eficiência no sistema da GOL.</p>
        </div>
    )
},

'bem-vindo-curso-emissoes-latam': {
    title: 'Bem-vindo ao curso de emissões da LATAM!',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Olá!</h1>
            <p>Estamos muito felizes em tê-lo conosco neste curso focado no processo de emissões de passagens da LATAM. Ao longo deste treinamento, você aprenderá todas as etapas necessárias para emitir passagens aéreas utilizando milhas no programa de fidelidade LATAM Pass, garantindo uma experiência eficiente e segura para os clientes.</p>

            <p style={{ marginTop: '30px', marginBottom: '30px' }}>O programa LATAM Pass é amplamente utilizado, e entender como operar no sistema é fundamental para realizar emissões com sucesso. Durante o curso, abordaremos desde a consulta de voos e milhas até a solução de problemas, incluindo erros de pagamento e busca de voo.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>O que esperar do curso</h2>
            <p>Neste curso, exploraremos os seguintes tópicos:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Introdução ao programa LATAM Pass:</strong> Compreenda como funciona o programa de fidelidade da LATAM, os diferentes níveis de clientes e como as milhas são acumuladas e utilizadas.</li>
                <li><strong>Uso da VPN Bifrost:</strong> Aprenderemos a utilizar a VPN Bifrost para acessar a conta do ofertante, permitindo que você efetue logins com segurança e evite bloqueios durante o processo de emissão.</li>
                <li><strong>Processo de emissão de passagens:</strong> Você aprenderá o passo a passo para emitir passagens da LATAM, desde a consulta de disponibilidade de voos até a confirmação e envio do e-ticket ao cliente.</li>
                <li><strong>Adição de bagagem:</strong> Serão mostrados os procedimentos para adicionar bagagens extras durante a emissão da passagem e como registrar o valor pago de forma correta no sistema.</li>
                <li><strong>Solução de problemas:</strong> Vamos explorar as estratégias para solucionar erros comuns de pagamento e problemas na busca de voos, garantindo que você esteja preparado para lidar com qualquer situação que possa surgir.</li>
                <li><strong>Validade das milhas:</strong> Entenda como consultar e verificar a validade das milhas no programa LATAM Pass, além de como garantir que os clientes utilizem suas milhas dentro do prazo correto.</li>
                <li><strong>Consulta de extrato e histórico de milhas:</strong> Aprenda a acessar o extrato de milhas do cliente e a verificar o histórico de transações, garantindo a precisão na emissão e nos cálculos.</li>
            </ul>

            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit00} alt="Imagem do sistema Cockpit" />

            <p style={{ marginTop: '10px', marginBottom: '30px' }}>Este curso é projetado para ser interativo e prático, com exemplos reais e exercícios que ajudarão a solidificar seu aprendizado. Ao final do curso, você estará apto a utilizar o sistema Cockpit com confiança, otimizando suas operações e melhorando a experiência dos clientes da Maxmilhas.</p>

            <p style={{ marginTop: '30px', marginBottom: '30px' }}>Prepare-se para uma jornada de aprendizado repleta de insights e práticas valiosas. Estamos ansiosos para começar essa experiência com você e ajudá-lo a se tornar um expert no uso do Cockpit da Maxmilhas!</p>
        </div>
    )
},

'bem-vindo-curso-ferramentas-auxiliares': {
    title: 'Bem-vindo ao curso de ferramentas auxiliares!',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Bem-vindo ao Curso - Ferramentas Auxiliares</h1>
            <p>Estamos muito felizes em tê-lo conosco neste curso dedicado ao uso de ferramentas auxiliares essenciais para otimizar seu trabalho na MaxMilhas. Ao longo deste treinamento, você aprenderá a utilizar plataformas como Slack, Metabase, Convenia, Qulture.rocks e Zendesk, fundamentais para melhorar a comunicação, a gestão de dados e a experiência do cliente.</p>

            <p style={{ marginTop: '30px', marginBottom: '30px' }}>Neste curso, você adquirirá habilidades práticas que facilitarão o seu dia a dia, ajudando a garantir uma operação mais eficiente e integrada.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>O que esperar do curso</h2>
            <p>Neste curso, exploraremos os seguintes tópicos:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Introdução ao Slack:</strong> Aprenda como utilizar o Slack para comunicação interna, gerenciamento de projetos e colaboração em equipe. Abordaremos funcionalidades como canais, mensagens diretas e integração com outras ferramentas.</li>
                <li><strong>Explorando o Metabase:</strong> Descubra como utilizar o Metabase para consultar e analisar dados da MaxMilhas. Você aprenderá a criar relatórios, visualizar métricas e extrair informações valiosas para a tomada de decisões.</li>
                <li><strong>Uso do Convenia:</strong> Entenda como o Convenia pode facilitar a gestão de benefícios e a comunicação com os colaboradores. Veremos como utilizar a plataforma para gerenciar folhas de pagamento, férias e outros aspectos administrativos.</li>
                <li><strong>Qulture.rocks para gestão de desempenho:</strong> Aprenda a usar o Qulture.rocks para definir e acompanhar metas de desempenho, feedbacks e desenvolvimento de talentos na equipe. Focaremos em como essa ferramenta pode ajudar a criar uma cultura de alta performance.</li>
                <li><strong>Zendesk para atendimento ao cliente:</strong> Explore o Zendesk como uma solução de atendimento ao cliente. Você aprenderá a criar tickets, gerenciar solicitações e utilizar relatórios para melhorar a experiência do usuário.</li>
            </ul>

            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit00} alt="Imagem das ferramentas auxiliares" />

            <p style={{ marginTop: '10px', marginBottom: '30px' }}>Este curso foi desenvolvido para ser prático e interativo, com exemplos e exercícios que reforçam o aprendizado de cada ferramenta. Ao final, você estará totalmente apto a utilizar essas plataformas para melhorar sua eficiência e a qualidade do atendimento na MaxMilhas.</p>

            <p style={{ marginTop: '30px', marginBottom: '30px' }}>Estamos entusiasmados por embarcar nesta jornada com você e temos certeza de que, ao final, você estará preparado para utilizar essas ferramentas auxiliares com confiança e competência.</p>
        </div>
    )
},

'bem-vindo-curso-historia': {
    title: 'Bem-vindo ao curso de história da empresa e cultura!',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Bem-vindo ao Curso - História da Empresa e Cultura</h1>
            <p>Estamos muito felizes em tê-lo conosco neste curso dedicado à rica história da MaxMilhas. Ao longo deste treinamento, você terá a oportunidade de explorar a fundação da empresa, os principais marcos e conquistas, além de entender a cultura organizacional, os valores e a missão que nos guiam.</p>

            <p style={{ marginTop: '30px', marginBottom: '30px' }}>Compreender a trajetória da MaxMilhas é essencial para fortalecer seu conhecimento sobre a empresa e alinhá-lo com nossos princípios e objetivos. Neste curso, abordaremos a evolução da MaxMilhas ao longo dos anos e como a nossa cultura influencia o dia a dia de trabalho.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>O que esperar do curso</h2>
            <p>Neste curso, exploraremos os seguintes tópicos:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>História da fundação:</strong> Conheça a história da fundação da MaxMilhas, desde a ideia inicial até a concretização do projeto. Vamos abordar os desafios enfrentados e as decisões que moldaram o início da nossa jornada.</li>
                <li><strong>Principais marcos e conquistas:</strong> Descubra os momentos mais significativos da nossa trajetória, incluindo lançamentos de produtos, expansão de serviços e reconhecimento no mercado. Vamos destacar os marcos que definiram a nossa história e contribuíram para o nosso crescimento.</li>
                <li><strong>Cultura organizacional:</strong> Entenda a cultura que permeia a Maxmilhas. Abordaremos os aspectos que tornam nosso ambiente de trabalho único, incluindo práticas de colaboração, inovação e inclusão que promovem um forte espírito de equipe.</li>
                <li><strong>Valores e missão:</strong> Conheça os valores que guiam nossas ações e decisões, além da missão que nos inspira a entregar sempre o melhor aos nossos clientes. Vamos discutir como esses princípios estão incorporados no nosso dia a dia.</li>
                <li><strong>Guia da marca:</strong> Aprenda sobre a identidade visual e a comunicação da marca MaxMilhas. Vamos explorar os elementos que constituem nossa imagem, como cores, tipografia e a linguagem utilizada para transmitir nossa mensagem ao mercado.</li>
            </ul>

            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit00} alt="Imagem da história e cultura da empresa" />

            <p style={{ marginTop: '10px', marginBottom: '30px' }}>Este curso foi desenvolvido para ser informativo e envolvente, com conteúdos que vão enriquecer sua compreensão sobre a MaxMilhas. Ao final, você estará preparado para representar a empresa com orgulho e alinhamento aos nossos valores e missão.</p>

            <p style={{ marginTop: '30px', marginBottom: '30px' }}>Estamos entusiasmados por embarcar nesta jornada com você e temos certeza de que, ao final, você terá uma visão abrangente da história e da cultura da MaxMilhas.</p>
        </div>
    )
},

'bem-vindo-curso-milhas': {
    title: 'Bem-vindo ao curso de milhas!',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Bem-vindo ao Curso - Milhas</h1>
            <p>Estamos muito felizes em tê-lo conosco neste curso dedicado ao fascinante universo das milhas e programas de fidelidade. Ao longo deste treinamento, você aprenderá tudo sobre a regulamentação das milhas, os diferentes programas disponíveis e como maximizar o uso das milhas para garantir benefícios e vantagens nas suas viagens.</p>

            <p style={{ marginTop: '30px', marginBottom: '30px' }}>Compreender as nuances do mundo das milhas é fundamental para proporcionar uma experiência enriquecedora aos nossos clientes e otimizar o uso de suas fidelidades. Neste curso, abordaremos as principais características e regras que envolvem o acúmulo e a utilização de milhas.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>O que esperar do curso</h2>
            <p>Neste curso, exploraremos os seguintes tópicos:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>O que são milhas:</strong> Entenda o conceito de milhas e como elas funcionam dentro do contexto dos programas de fidelidade. Vamos discutir as diferentes formas de acumulação e a sua importância para os viajantes.</li>
                <li><strong>Regulamentação das milhas:</strong> Conheça as leis e normas que regem o uso das milhas no Brasil, garantindo que você compreenda os direitos e deveres dos consumidores e das companhias aéreas.</li>
                <li><strong>Programas de fidelidade:</strong> Explore os diversos programas de fidelidade disponíveis no mercado, suas características e como funcionam. Vamos abordar as vantagens e desvantagens de cada um, para que você possa orientar os clientes na escolha mais adequada.</li>
                <li><strong>Validade das milhas:</strong> Aprenda a consultar e verificar a validade das milhas acumuladas, incluindo os fatores que podem impactar a expiração das milhas e como garantir que os clientes utilizem suas milhas antes do vencimento.</li>
            </ul>

            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit00} alt="Imagem do curso sobre milhas" />

            <p style={{ marginTop: '10px', marginBottom: '30px' }}>Este curso é projetado para ser interativo e prático, com exemplos reais e exercícios que ajudarão a solidificar seu aprendizado. Ao final do curso, você estará apto a utilizar o sistema Cockpit com confiança, otimizando suas operações e melhorando a experiência dos clientes da MaxMilhas.</p>

            <p style={{ marginTop: '30px', marginBottom: '30px' }}>Prepare-se para uma jornada de aprendizado repleta de insights e práticas valiosas. Estamos ansiosos para começar essa experiência com você e ajudá-lo a se tornar um expert no uso do Cockpit da MaxMilhas!</p>
        </div>
    )
},


'bem-vindo-curso-nocao': {
    title: 'Bem-vindo ao curso de noções de informática!',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Bem-vindo ao Curso - Noções de informática</h1>
            <p>Estamos muito felizes em tê-lo conosco neste curso dedicado às noções fundamentais de informática. Ao longo deste treinamento, você aprenderá sobre navegadores de internet, extensões, cookies, conectividade e redes, além de como utilizar VPNs e garantir a segurança da informação.</p>

            <p style={{ marginTop: '30px', marginBottom: '30px' }}>Dominar esses conceitos é essencial para navegar de forma segura e eficiente no mundo digital, seja para uso pessoal ou profissional. Neste curso, abordaremos cada um desses tópicos de forma prática e acessível, proporcionando uma base sólida para suas atividades diárias.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>O que esperar do curso</h2>
            <p>Neste curso, exploraremos os seguintes tópicos:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Navegadores de internet:</strong> Compreenda como funcionam os principais navegadores de internet, suas características e como utilizá-los de maneira eficaz. Vamos discutir dicas e truques para melhorar sua experiência de navegação.</li>
                <li><strong>Extensões e plugins:</strong> Aprenda sobre as extensões e plugins disponíveis para navegadores, como instalá-los e utilizá-los para aumentar a funcionalidade e a produtividade durante a navegação.</li>
                <li><strong>Cookies:</strong> Entenda o que são cookies, como funcionam e quais implicações eles têm na sua privacidade e na experiência de navegação. Vamos discutir também como gerenciar as configurações de cookies nos navegadores.</li>
                <li><strong>Conectividade e redes:</strong> Explore os conceitos básicos de conectividade e redes, incluindo tipos de redes, como se conectar a elas e resolver problemas comuns de conectividade.</li>
                <li><strong>VPNs:</strong> Aprenda a utilizar VPNs (Redes Privadas Virtuais) para navegar de forma segura e proteger sua privacidade online. Vamos abordar a configuração e os benefícios de usar uma VPN.</li>
                <li><strong>Segurança da informação:</strong> Descubra as melhores práticas para garantir a segurança da informação, incluindo como proteger seus dados pessoais, reconhecer fraudes online e utilizar ferramentas de segurança.</li>
            </ul>

            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit00} alt="Imagem do curso sobre noções de informática" />

            <p style={{ marginTop: '10px', marginBottom: '30px' }}>Este curso foi desenvolvido para ser prático e interativo, com exemplos que facilitarão a compreensão de cada tema abordado. Ao final, você estará totalmente apto a utilizar a informática de maneira segura e eficiente no seu dia a dia.</p>

            <p style={{ marginTop: '30px', marginBottom: '30px' }}>Estamos entusiasmados por embarcar nesta jornada com você e temos certeza de que, ao final, você terá uma visão abrangente sobre noções de informática e como aplicá-las de forma eficaz.</p>
        </div>
    )
},

'bem-vindo-curso-ofertantes': {
    title: 'Bem-vindo ao curso - ofertantes!',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Bem-vindo ao curso - ofertantes</h1>
            <p>Estamos muito felizes em tê-lo conosco neste curso dedicado à compreensão e à gestão de ofertantes no mercado de milhas. Ao longo deste treinamento, você aprenderá sobre os diferentes tipos de ofertantes, como interagir com eles de forma eficaz e otimizar a utilização das milhas disponíveis.</p>

            <p style={{ marginTop: '30px', marginBottom: '30px' }}>Compreender os ofertantes e seus processos é essencial para maximizar os benefícios dos programas de fidelidade e para garantir uma operação eficiente. Neste curso, abordaremos os principais aspectos que envolvem a atuação dos ofertantes e como gerenciar suas interações.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>O que esperar do curso</h2>
            <p>Neste curso, exploraremos os seguintes tópicos:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Tipos de ofertantes:</strong> Conheça os diferentes tipos de ofertantes de milhas, como companhias aéreas, plataformas de troca e revendedores, e entenda suas características e funções no mercado.</li>
                <li><strong>Saldo e razão:</strong> Aprenda a analisar o saldo de milhas dos ofertantes e a razão pela qual algumas ofertas são mais vantajosas do que outras, permitindo uma escolha mais informada.</li>
                <li><strong>Média e quantidade de CPFs:</strong> Compreenda como a média de milhas oferecidas e a quantidade de CPFs registrados impactam as oportunidades de troca e como isso pode ser utilizado a seu favor.</li>
                <li><strong>Programas de fidelidade:</strong> Explore os principais programas de fidelidade disponíveis, suas regras, benefícios e como interagir de maneira eficaz com os ofertantes para maximizar suas vantagens.</li>
            </ul>

            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit00} alt="Imagem do curso sobre ofertantes" />

            <p style={{ marginTop: '10px', marginBottom: '30px' }}>Este curso foi desenvolvido para ser prático e informativo, com exemplos do mundo real que ajudarão a reforçar o aprendizado de cada tópico. Ao final, você estará preparado para identificar, gerenciar e otimizar suas interações com os ofertantes, contribuindo para uma experiência excepcional na utilização de milhas.</p>

            <p style={{ marginTop: '30px', marginBottom: '30px' }}>Estamos entusiasmados por embarcar nesta jornada com você e temos certeza de que, ao final, você terá as ferramentas necessárias para lidar com ofertantes e melhorar a qualidade das operações da Maxmilhas.</p>
        </div>
    )
},

'bem-vindo-curso-prejuizos': {
    title: 'Bem-vindo ao curso - prejuízos!',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Bem-vindo ao curso - prejuízos</h1>
            <p>Estamos muito felizes em tê-lo conosco neste curso dedicado à identificação e à gestão de prejuízos na emissão de passagens. Ao longo deste treinamento, você aprenderá sobre os tipos mais comuns de prejuízos que podem ocorrer, como emitir passagens corretamente e minimizar riscos para a empresa.</p>

            <p style={{ marginTop: '30px', marginBottom: '30px' }}>Compreender os fatores que levam a prejuízos é essencial para garantir uma operação eficiente e para oferecer um atendimento de qualidade aos nossos clientes. Neste curso, abordaremos os principais problemas que podem surgir durante o processo de emissão e como solucioná-los.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>O que esperar do curso</h2>
            <p>Neste curso, exploraremos os seguintes tópicos:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Tipos mais comuns de prejuízos:</strong> Conheça os principais tipos de prejuízos que podem ocorrer na emissão de passagens, incluindo as causas e consequências associadas a cada um deles.</li>
                <li><strong>Emissões duplicadas:</strong> Aprenda a identificar e evitar emissões duplicadas, compreendendo os processos e ferramentas disponíveis para minimizar esse risco.</li>
                <li><strong>Emissões na conta errada:</strong> Entenda como as emissões podem ser direcionadas para contas incorretas e quais medidas podem ser tomadas para corrigir esses erros.</li>
                <li><strong>Aumento sem tratativa:</strong> Discuta a questão dos aumentos inesperados e como gerenciar essas situações, incluindo a importância da comunicação com os clientes e a documentação adequada.</li>
            </ul>

            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit00} alt="Imagem do curso sobre prejuízos" />

            <p style={{ marginTop: '10px', marginBottom: '30px' }}>Este curso foi desenvolvido para ser prático e informativo, com exemplos do mundo real que ajudarão a reforçar o aprendizado de cada tópico. Ao final, você estará preparado para identificar e gerenciar prejuízos na emissão de passagens de forma eficaz, contribuindo para a eficiência operacional da MaxMilhas.</p>

            <p style={{ marginTop: '30px', marginBottom: '30px' }}>Estamos entusiasmados por embarcar nesta jornada com você e temos certeza de que, ao final, você terá as ferramentas necessárias para lidar com prejuízos e melhorar a qualidade do serviço prestado.</p>
        </div>
    )
},

'bem-vindo-curso-tour': {
    title: 'Bem-vindo ao curso - tour virtual!',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Bem-vindo ao curso - tour virtual</h1>
            <p>Estamos muito felizes em tê-lo conosco neste curso dedicado a apresentar as instalações da MaxMilhas através de um tour virtual. Ao longo deste treinamento, você terá a oportunidade de conhecer nossa sede, localizada em Belo Horizonte, e explorar as diversas áreas que compõem nosso ambiente de trabalho.</p>

            <p style={{ marginTop: '30px', marginBottom: '30px' }}>O tour virtual é uma ferramenta essencial para que você se familiarize com o espaço, a cultura e as práticas que tornam a MaxMilhas um lugar especial para se trabalhar. Este curso foi projetado para fornecer uma visão abrangente das nossas instalações e como elas contribuem para a nossa missão e valores.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>O que esperar do curso</h2>
            <p>Neste curso, exploraremos os seguintes tópicos:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Localização da sede da Maxmilhas:</strong> Conheça a localização da nossa sede na Rua Matias Cardoso, 169 - Santo Agostinho, Belo Horizonte - MG. Vamos falar sobre a importância da localização e como ela facilita o acesso de colaboradores e clientes.</li>
                <li><strong>Área de recepção e atendimento - 11º andar:</strong> Explore a área de recepção e atendimento, onde garantimos uma recepção calorosa aos nossos visitantes e clientes. Vamos destacar a importância desse espaço para a experiência do usuário.</li>
                <li><strong>Área de refeição e descanso - 11º andar:</strong> Descubra nossa área de refeição e descanso, um espaço dedicado ao bem-estar e à alimentação dos colaboradores, promovendo um ambiente saudável e produtivo.</li>
                <li><strong>Cozinha - 11º andar:</strong> Conheça nossa cozinha, onde são preparadas as refeições para a equipe. Vamos discutir como a alimentação saudável é parte da cultura da MaxMilhas.</li>
                <li><strong>Deck - 11º andar:</strong> Explore o deck, um espaço ao ar livre que proporciona um ambiente agradável para relaxamento e interação entre os colaboradores.</li>
            </ul>

            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit00} alt="Imagem do curso sobre tour virtual" />

            <p style={{ marginTop: '10px', marginBottom: '30px' }}>Este curso foi desenvolvido para ser interativo e envolvente, utilizando recursos visuais que facilitarão a sua imersão no ambiente da MaxMilhas. Ao final, você terá uma visão completa das nossas instalações e como elas refletem a cultura e os valores da empresa.</p>

            <p style={{ marginTop: '30px', marginBottom: '30px' }}>Estamos entusiasmados por embarcar nesta jornada com você e temos certeza de que, ao final, você se sentirá mais conectado com o ambiente de trabalho da MaxMilhas.</p>
        </div>
    )
},

/*Curso Cockpit */
'Cockpit': {
    title: 'O que é o Cockpit?',
    videoUrl: 'https://www.youtube.com/embed/yVtaIBcQs-k',
    description: (
        <div>
            <h1 style={{ marginTop:'10px', marginBottom:'30px' }}>O que é o Cockpit?</h1>
            <p>O Cockpit é um sistema administrativo utilizado pela Maxmilhas para realizar a emissão de bilhetes aéreos utilizando milhas vendidas pelos ofertantes para compradores e clientes da Maxmilhas. Neste sistema, é possível:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Emitir bilhetes aéreos:</strong> Gerar passagens aéreas com base nas milhas disponibilizadas pelos ofertantes, facilitando o processo de compra para os clientes.</li>
                <li><strong>Gerenciar transações:</strong> Acompanhar e gerenciar todas as transações de emissão, desde a compra até a entrega do e-ticket ao cliente.</li>
                <li><strong>Selecionar ofertantes:</strong> Escolher entre diferentes vendedores de milhas, analisando a viabilidade e o lucro de cada transação para otimizar as ofertas.</li>
                <li><strong>Realizar cancelamentos:</strong> Efetuar o cancelamento de passagens já emitidas, caso necessário.</li>
                <li><strong>Buscar ofertantes disponíveis:</strong> Encontrar ofertantes com milhas disponíveis para as emissões, permitindo uma operação mais ágil.</li>
                <li><strong>Verificar passagens emitidas:</strong> Checar o status e os detalhes das passagens já emitidas pelo sistema, garantindo um controle eficaz.</li>
                <li><strong>Acessar múltiplas companhias aéreas:</strong> Emitir passagens para diversas companhias aéreas, incluindo Latam, Gol, Azul, TAP, OTA e outras, ampliando as opções para os clientes.</li>
                <li><strong>Login seguro:</strong> Acessar o sistema de forma segura utilizando e-mail corporativo, garantindo que apenas colaboradores autorizados possam gerenciar as operações.</li>
            </ul>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>Tela de login:</h2>
            <p>Na tela de login é necessário utilizar o e-mail corporativo da Maxmilhas para acessar o sistema, garantindo que apenas colaboradores autorizados possam gerenciar as transações e processos de emissão de passagens.</p>
            
            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit01} alt="Imagem do sistema Cockpit"></img>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>Tela inicial:</h2>
            <p>Na tela inicial do sistema Cockpit, o colaborador tem acesso a um menu lateral com diversas opções, como Cockpit, Inserção de crédito, Cadastros, Clientes, Milhas, entre outras. Esse menu permite a navegação entre as principais funcionalidades do sistema. As informações e funcionalidades correspondentes a cada item selecionado no menu são exibidas no painel à direita.</p>
            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit02} alt="Imagem do sistema Cockpit"></img>
        </div>
    )
},
'Menu lateral': {
    title: 'Menu lateral',
    videoUrl: 'https://www.youtube.com/embed/8IsxHg1z7h8',
    description: (
        <div>
            <h1 style={{ marginTop:'10px', marginBottom:'30px' }}>Menu lateral</h1>
            <p>No painel esquerdo do Cockpit, é possível encontrar um menu lateral que apresenta diversas opções, facilitando a navegação pelo sistema.</p>
            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit03} alt="Imagem do menu lateral do Cockpit"></img>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>As opções disponíveis incluem:</h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Cockpit:</strong> Acesso à tela principal do sistema, onde são gerenciadas as atividades.</li>
                <li><strong>Inserção de crédito:</strong> Função para adicionar créditos ao sistema, possibilitando a realização de transações.</li>
                <li><strong>Cadastros:</strong> Área para gerenciar cadastros de clientes, ofertantes e outros dados relevantes.</li>
                <li><strong>Clientes:</strong> Visualização e gerenciamento das informações dos clientes da Maxmilhas.</li>
                <li><strong>Milhas:</strong> Consulta e gestão das milhas disponíveis e suas respectivas transações.</li>
                <li><strong>Criar transação:</strong> Iniciar o processo de emissão de passagens aéreas.</li>
                <li><strong>E-mail marketing:</strong> Gerenciar campanhas de e-mail marketing direcionadas aos clientes.</li>
                <li><strong>Cupom:</strong> Gerenciar cupons de desconto e promoções disponíveis.</li>
                <li><strong>Status dos voos:</strong> Acompanhar o status atual dos voos das companhias aéreas.</li>
                <li><strong>Relatórios:</strong> Acesso a relatórios detalhados sobre transações e atividades do sistema.</li>
                <li><strong>Indicadores:</strong> Visualização de indicadores de desempenho e métricas relevantes.</li>
                <li><strong>Cartões de crédito:</strong> Gerenciar os cartões de crédito utilizados para as transações.</li>
                <li><strong>Ofertantes:</strong> Consultar e gerenciar os ofertantes disponíveis para as transações.</li>
                <li><strong>Cancelamentos:</strong> Efetuar cancelamentos de passagens emitidas quando necessário.</li>
            </ul>

            <p>Para realizar emissões no sistema Cockpit, as opções utilizadas serão apenas Cockpit e Milhas. As demais são utilizadas em outros setores ou para controle interno.</p>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>Ícones:</h2>
            <p>Acima do menu lateral existem 4 ícones que são referentes à página inicial do Cockpit, clientes, milhas e busca de transações por código.</p>
            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit04} alt="Imagem dos ícones do Cockpit"></img>
        </div>
    )
}, 
'Menu lateral - Cockpit': {
    title: 'Menu lateral - Cockpit',
    videoUrl: 'https://www.youtube.com/embed/ygmC4k9JXQA',
    description: (
        <div>
            <h1 style={{ marginTop:'10px', marginBottom:'30px' }}>Menu lateral - Cockpit</h1>
            <p>No menu lateral, a opção Cockpit dá acesso à tela principal do sistema onde é possível iniciar transações, realizar emissões e checagens de bilhetes aéreos.</p>
            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit05} alt="Imagem do menu lateral Cockpit"></img>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>As opções disponíveis incluem:</h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Emissões:</strong> Esta é a tela principal do sistema, onde estão localizadas as abas das diferentes companhias aéreas. Aqui, o analista pode iniciar as transações para emitir passagens aéreas.</li>
                <li><strong>Controle:</strong> Nesta aba, é possível realizar checagens das passagens emitidas e acompanhar as transações que estão em análise, facilitando o monitoramento do processo de emissão.</li>
                <li><strong>Completo:</strong> Tela do sistema completa com as abas de Emissões e Controle. Para realizar emissões utilizaremos o painel Cockpit - Completo.</li>
            </ul>
            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit06} alt="Imagem do painel Cockpit Completo"></img>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>Indicadores no Cockpit</h2>
            <p>No sistema Cockpit da Maxmilhas, os indicadores desempenham um papel importante para o acompanhamento das transações em andamento. Eles fornecem uma visão rápida e clara do status das emissões e da quantidade de passageiros envolvidos.</p>
            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit07} alt="Imagem dos indicadores no Cockpit"></img>

            <h3 style={{ marginTop:'30px', marginBottom:'30px' }}>Número em vermelho:</h3>
            <p>Este indicador exibe a quantidade de transações que estão ativas no sistema. Ele permite que os administradores monitorem o volume de transações e identifiquem possíveis gargalos ou pendências no processo de emissão.</p>

            <h3 style={{ marginTop:'30px', marginBottom:'30px' }}>Número em verde:</h3>
            <p>O número em verde mostra a quantidade de passageiros associados às transações em andamento. Esse indicador é essencial para que a equipe saiba quantas pessoas estão envolvidas nas reservas e tenha uma noção precisa do impacto dessas transações.</p>
        </div>
    )
},
'Menu lateral - Milhas': {
    title: 'Menu lateral - Milhas',
    videoUrl: 'https://www.youtube.com/embed/KPMhTI-ehSU',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Menu lateral - Milhas</h1>
            <p>No menu lateral, a opção Milhas dá acesso à tela de busca de ofertantes. Nesta tela, o analista pode realizar uma busca detalhada dos ofertantes cadastrados na base de dados, utilizando filtros como:</p>
            <ul>
                <li><strong>Login:</strong> Busca pelo login do ofertante.</li>
                <li><strong>Status:</strong> Filtragem pelo status atual do ofertante (ativo, inativo, etc.).</li>
                <li><strong>Companhia aérea:</strong> Seleção da companhia aérea com a qual o ofertante trabalha.</li>
            </ul>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit08} alt="" />
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Caixa de seleção de companhia aérea</h1>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit09} alt="" />

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Nela, é possível visualizar ofertantes de diversas companhias, incluindo:</h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li>Selecionar todos (todas as companhias)</li>
                <li>Azul</li>
                <li>Gol</li>
                <li>Latam</li>
                <li>Air Canada</li>
                <li>Air France</li>
                <li>British Airways</li>
                <li>Copa Airlines</li>
                <li>Delta Air Lines</li>
                <li>Emirates</li>
                <li>Etihad</li>
                <li>Iberia</li>
                <li>KLM</li>
                <li>Latam (Chile)</li>
                <li>LifeMiles</li>
                <li>Qatar Airways</li>
                <li>Singapore Airlines</li>
                <li>TAP</li>
                <li>United Airlines</li>
            </ul>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Caixa de seleção de status</h1>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit10} alt="" />

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>As opções mais utilizadas no contexto de Emissões incluem:</h2>
            <ul>
                <li><strong>Ativo - liberado:</strong> Ofertantes prontos para serem usados em transações.</li>
                <li><strong>Bloqueado - Não atende celular:</strong> Ofertantes bloqueados por falta de contato.</li>
                <li><strong>Em análise - Aguardando análise antifraude:</strong> Ofertas que aguardam verificação de segurança antes de serem usadas.</li>
                <li><strong>Em venda - a emitir:</strong> Ofertantes que já estão em uso para a compra de passagens.</li>
                <li><strong>Inativo - CPF divergente:</strong> Ofertantes desativados devido a divergências no CPF.</li>
                <li><strong>Inativo - Conta bloqueada:</strong> Contas desativadas por bloqueios.</li>
                <li><strong>Inativo - Fraude:</strong> Ofertantes inativos por suspeita de fraude.</li>
                <li><strong>Inativo - Limite de emissões atingido:</strong> Contas suspensas por atingirem o limite de emissões.</li>
                <li><strong>Inativo - Oferta excluída:</strong> Ofertas removidas.</li>
                <li><strong>Inativo - Removido pelo usuário:</strong> Ofertantes desativados por escolha do próprio usuário.</li>
                <li><strong>Inativo - Reprovado:</strong> Ofertas que falharam na análise.</li>
                <li><strong>Pendente - Divergência na oferta paga:</strong> Ofertas pendentes por problemas de pagamento.</li>
                <li><strong>Pendente - Em tratativa:</strong> Ofertas em processo de resolução.</li>
                <li><strong>Pendente - Senha incorreta:</strong> Ofertantes pendentes por falhas de login.</li>
            </ul>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Caixa de seleção de login</h1>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit11} alt="" />

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>A busca por ofertantes pode ser feita pelos seguintes critérios:</h2>
            <ul>
                <li>Login</li>
                <li>Nome</li>
                <li>CPF</li>
                <li>E-mail</li>
                <li>Telefone</li>
            </ul>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Opções avançadas</h1>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Ao clicar na opção Avançado na tela de busca de ofertantes, o sistema Cockpit oferece filtros adicionais para uma pesquisa mais detalhada, permitindo ao analista refinar ainda mais sua busca de ofertantes com base em critérios específicos.</h2>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Campos de busca avançada:</h3>
            <ul>
                <li><strong>Saldo:</strong> Filtrar ofertantes com base no saldo de milhas disponível.</li>
                <li><strong>CPF:</strong> Busca por CPF para localizar ofertantes específicos.</li>
                <li><strong>Razão:</strong> Buscar ofertantes que possuem a razão (milhas/cpf) indicada.</li>
                <li><strong>Média:</strong> Busca pela média definida pelo ofertante na venda de milhas.</li>
                <li><strong>Tipo de oferta:</strong> Definir o tipo de transação que o ofertante está realizando.</li>
                <li><strong>Estratégia 2FA:</strong> Escolher o tipo de verificação em duas etapas para obter os códigos de verificação de segurança.</li>
            </ul>
            

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Tipos de oferta</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit13} alt="Tipos de oferta" />
            <ul>
                <li><strong>Venda convencional:</strong> Ofertas de milhas tradicionais.</li>
                <li><strong>Venda rápida:</strong> Ofertas destinadas a transações rápidas.</li>
                <li><strong>Revenda:</strong> Ofertantes de revenda.</li>
                <li><strong>Pagamento antecipado:</strong> Ofertas que exigem pagamento antecipado.</li>
            </ul>
    
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Estratégia 2FA (Autenticação de dois fatores)</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit14} alt="Estratégia 2FA (Autenticação de dois fatores)" />

            <ul>
                <li><strong>Selecionar todos:</strong> Visualizar ofertantes independentemente da estratégia de verificação.</li>
                <li><strong>WhatsApp:</strong> Código 2FA via WhatsApp.</li>
                <li><strong>Chipeira:</strong> Código 2FA redirecionado para um telefone Maxmilhas e obtido através do e-mail da Chipeira.</li>
                <li><strong>E-mail:</strong> Código 2FA redirecionado para um e-mail Maxmilhas.</li>
            </ul>
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Tela de busca</h2>
            <p>Ao realizar a busca de um ofertante no sistema Cockpit, é exibida uma tela com as principais informações da oferta, permitindo que o analista visualize rapidamente os detalhes essenciais para tomar decisões sobre as transações.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit111} alt="Tela de busca" />

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>As informações retornadas incluem:</h3>
            <ul>
                <li><strong>Nome:</strong> Nome do ofertante.</li>
                <li><strong>Tipo de milhas:</strong> Classificação das milhas.</li>
                <li><strong>Data de validade:</strong> Quando as milhas expiram.</li>
                <li><strong>CPF:</strong> Número do CPF do ofertante.</li>
                <li><strong>Login:</strong> Identificação do ofertante.</li>
                <li><strong>Status:</strong> Status atual da oferta.</li>
                <li><strong>Cia:</strong> Companhia aérea à qual a oferta está vinculada.</li>
                <li><strong>Categoria:</strong> Categoria do ofertante (ex: Latam, Gold, Platinum, etc.).</li>
                <li><strong>Saldo:</strong> Quantidade de milhas disponíveis para a transação.</li>
                <li><strong>Preço:</strong> Valor por milheiro.</li>
                <li><strong>Pagamento:</strong> Método ou status do pagamento associado à oferta.</li>
                <li><strong>Tipo:</strong> Cliente, Maxmilhas, Importação de ofertas, etc.</li>
                <li><strong>Qtd CPF:</strong> Quantidade de CPFs permitidos ou envolvidos na oferta.</li>
                <li><strong>Razão:</strong> Razão da oferta obtida pela equação: Milhas / CPF.</li>
                <li><strong>Média:</strong> Média definida pelo ofertante na venda de milhas.</li>
                <li><strong>Alterado:</strong> Data ou hora da última alteração na oferta.</li>
                <li><strong>Última venda:</strong> Data da última transação realizada por esse ofertante.</li>
            </ul>

        </div>
    ),
},
'Ofertantes': {
    title: 'Ofertantes',
    videoUrl: 'https://www.youtube.com/embed/iihjdr2ZGFk',
    description: (
        <div>
            <h1 style={{ marginTop:'10px', marginBottom:'30px' }}>Ofertantes</h1>
            <p>Ao clicar no login do ofertante, o usuário é redirecionado para uma página que contém os detalhes da oferta. Nesta página, são apresentadas informações abrangentes sobre a oferta específica, permitindo que o analista tenha uma visão clara e completa.</p>

            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit15} alt="Imagem da tela de detalhes da oferta"></img>

            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit16} alt="Imagem da oferta específica"></img>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>Nesta tela é possível verificar:</h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Código da transação:</strong> Código referente à oferta.</li>
            </ul>
            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit17} alt="Imagem do código da transação"></img>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>Última observação:</h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Último motivo para troca de ofertante ou movimentação da oferta.</strong></li>
            </ul>
            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit18} alt="Imagem da última observação"></img>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>Oferta</h2>
            <p>Nesta seção, a tela exibe os dados do vendedor e das milhas vendidas, fornecendo informações essenciais para análise e tomada de decisão.</p>
            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit19} alt="Imagem da seção de oferta"></img>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>Os dados disponíveis incluem:</h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Cia:</strong> Companhia aérea associada à oferta de milhas.</li>
                <li><strong>Saldo:</strong> Quantidade de milhas atualmente disponíveis para transações.</li>
                <li><strong>Prazo de pagamento:</strong> Tempo estabelecido para que o pagamento seja concluído após a realização da transação.</li>
                <li><strong>Razão:</strong> Motivo ou justificativa para a oferta, que pode incluir detalhes sobre condições especiais.</li>
                <li><strong>CPFs:</strong> Lista de CPFs relacionados à oferta, indicando os usuários que podem utilizar as milhas.</li>
                <li><strong>Próximas milhas a expirar:</strong> Informações sobre milhas que estão prestes a expirar, ajudando na gestão do estoque de milhas.</li>
                <li><strong>Tele cadastrado:</strong> Número de telefone cadastrado do ofertante, que pode ser utilizado para contato.</li>
                <li><strong>Categoria:</strong> Classificação da oferta (por exemplo, venda convencional, venda rápida).</li>
                <li><strong>Preço do milheiro:</strong> Valor por milheiro, informando quanto custam as milhas vendidas.</li>
                <li><strong>Múltiplas vendas:</strong> Indicação se a oferta permite múltiplas transações ou vendas de milhas.</li>
                <li><strong>Média:</strong> Média de uso ou desempenho das milhas vendidas, que pode ajudar a identificar padrões de utilização.</li>
                <li><strong>Estratégia 2 fatores:</strong> Método de autenticação em duas etapas que pode ser utilizado para verificar transações, aumentando a segurança das operações.</li>
            </ul>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>Dados do vendedor</h2>
            <p>Nesta seção, são exibidos os dados do vendedor que oferece as milhas, proporcionando informações essenciais para contato e identificação.</p>
            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit20} alt="Imagem dos dados do vendedor"></img>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>Os dados disponíveis incluem:</h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Login:</strong> Identificação única do vendedor no sistema.</li>
                <li><strong>Nome:</strong> Nome completo do vendedor, facilitando a identificação.</li>
                <li><strong>CPF:</strong> Cadastro de Pessoa Física, utilizado para fins de identificação e conformidade.</li>
                <li><strong>E-mail:</strong> Endereço de e-mail do vendedor, que pode ser usado para comunicação.</li>
                <li><strong>Telefone:</strong> Número de telefone cadastrado, permitindo contato direto para quaisquer questões relacionadas à oferta ou transação.</li>
            </ul>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>Editar oferta</h2>
            <p>Na tela de ofertas, os usuários têm a opção de editar as informações de uma oferta existente ao clicar no botão Editar. Essa funcionalidade permite que os analistas atualizem dados relevantes para garantir que as informações estejam sempre precisas e atualizadas. Ao clicar no botão, o usuário é levado a um formulário onde pode modificar os seguintes detalhes:</p>
            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit21} alt="Imagem da edição da oferta"></img>
            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit22} alt="Imagem do formulário de edição"></img>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>Dados de acesso</h2>
            <p>Em dados de acesso é possível obter os dados do ofertante como login e senha na companhia aérea. Para visualizar é necessário utilizar a senha de acesso cadastrada no site da Maxmilhas e o motivo do acesso no campo observação.</p>
            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit23} alt="Imagem dos dados de acesso"></img>
            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit24} alt="Imagem do motivo de acesso"></img>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>Linha do tempo da oferta</h2>
            <p>Nesta seção, é apresentada a evolução da oferta desde sua criação, permitindo que os analistas acompanhem o desempenho e as mudanças ao longo do tempo. As informações geralmente incluem:</p>
            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit25} alt="Imagem da linha do tempo da oferta"></img>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>Vendas</h2>
            <p>Nesta tela, é possível visualizar as últimas transações que foram concluídas utilizando a oferta selecionada. As informações são apresentadas em uma tabela detalhada, que inclui os seguintes dados:</p>
            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit26} alt="Imagem das vendas realizadas"></img>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>ID da transação:</strong> Identificação única da transação realizada.</li>
                <li><strong>Milhas:</strong> Quantidade de milhas utilizadas na emissão da passagem.</li>
                <li><strong>Pax:</strong> Número de passageiros associados à transação.</li>
                <li><strong>Valor cliente:</strong> Valor pago pelo cliente ao ofertante.</li>
                <li><strong>Tx Maxmilhas:</strong> Taxa de serviço cobrada pela Maxmilhas pela intermediação da transação.</li>
                <li><strong>Status:</strong> Situação atual da transação (concluída, pendente, cancelada).</li>
                <li><strong>Data:</strong> Data em que a transação foi realizada.</li>
            </ul>
            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>Observações </h2>
            <p>Neste campo, é possível inserir comentários relacionados às transações. Os analistas podem utilizar essa funcionalidade para registrar observações relevantes, feedback ou informações adicionais sobre cada transação, como:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li>Detalhes sobre situações específicas que ocorreram durante a emissão.</li>
                <li>Comentários sobre a performance do ofertante.</li>
                <li>Notas sobre o atendimento ao cliente ou questões que precisam de acompanhamento.</li>
                <li>Sugestões para melhorias no processo de emissão.</li>
            </ul>
            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit29} alt="Imagem das vendas realizadas"></img>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>Observações salvas</h2>
            <p>Nesta seção, são exibidas as observações que foram feitas anteriormente relacionadas às transações. Aqui, os analistas podem visualizar comentários registrados, permitindo um acompanhamento detalhado das interações e decisões tomadas durante o processo de emissão.
            </p>
            <p>As observações salvas servem para:
            </p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
            <li><strong>Consultar Informações anteriores:</strong> Permitem que a equipe revise comentários feitos em transações passadas, ajudando na continuidade do atendimento ao cliente e no gerenciamento de processos.</li>
                <li><strong>Facilitar a comunicação:</strong> Aumentam a transparência entre os membros da equipe, garantindo que todos estejam cientes de qualquer informação relevante ou feedback recebido.
                </li>
                <li><strong>Analisar tendências:</strong>Podem ser utilizadas para identificar padrões ou problemas recorrentes nas transações, contribuindo para melhorias nos processos e serviços oferecidos.</li>
            </ul>
            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit30} alt="Imagem das vendas realizadas"></img>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>Documentos </h2>
            <p>Na seção de Documentos, é possível obter informações sobre os gestores da oferta, especialmente quando há mais de um gestor envolvido ou quando se trata de uma conta familiar. Esta funcionalidade permite uma melhor gestão e acompanhamento das responsabilidades relacionadas à oferta.</p>
            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit27} alt="Imagem das vendas realizadas"></img>
            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit28} alt="Imagem das vendas realizadas"></img>
        </div>
    )
    
},


'Abas do Cockpit': {
    title: 'Abas do Cockpit',
    videoUrl: 'https://www.youtube.com/embed/M6nzXBC7-Jw',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Abas do Cockpit</h1>
            <p>Ao acessar a tela principal do Cockpit por meio do menu lateral, selecionando a opção Cockpit - Completo, o usuário encontrará várias abas que organizam e facilitam a gestão das transações e emissões de bilhetes aéreos.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit31} alt="Abas do Cockpit" />

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>As abas disponíveis são:</h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Emitir Gol:</strong> Aba dedicada para realizar emissões de bilhetes na companhia aérea Gol.</li>
                <li><strong>Emitir Latam:</strong> Para emissões de bilhetes na companhia aérea Latam.</li>
                <li><strong>Emitir Azul:</strong> Para emissões de bilhetes na companhia aérea Azul.</li>
                <li><strong>Emitir (Outras Cias):</strong> Utilizada para emissões em outras companhias aéreas que não sejam Gol, Latam ou Azul.</li>
                <li><strong>Emitir - Erro após pagamento:</strong> Aba para tratar transações que apresentaram erros após o pagamento ser realizado.</li>
                <li><strong>Emitir - Erro/Aumento:</strong> Para lidar com transações que enfrentaram erros ou aumentos de preço durante o processo de emissão.</li>
                <li><strong>Checagem:</strong> Aba onde o analista pode verificar e revisar as transações emitidas, conferindo os detalhes e status dos bilhetes.</li>
                <li><strong>Fila:</strong> Exibe as transações que estão aguardando para serem processadas ou que estão na fila para emissão.</li>
                <li><strong>Pendências - OTA:</strong> Para gerenciar pendências relacionadas a transações feitas por agências de viagens online (OTA).</li>
                <li><strong>Bagagem:</strong> Aba dedicada ao gerenciamento de informações e cobranças relacionadas à bagagem dos passageiros.</li>
                <li><strong>Em Análise:</strong> Transações que estão sendo analisadas, aguardando aprovação ou verificações.</li>
                <li><strong>Emitir clonadas:</strong> Para gerenciar a emissão de transações clonadas ou duplicadas.</li>
                <li><strong>Emitir - cliente parceiro:</strong> Aba destinada a emissões realizadas para clientes parceiros da Maxmilhas.</li>
                <li><strong>A Remarcar:</strong> Exibe as transações que precisam ser remarcadas por algum motivo.</li>
                <li><strong>Emitir transações irmãs:</strong> Para gerenciar a emissão de transações vinculadas ou relacionadas a outras transações, conhecidas como "transações irmãs".</li>
            </ul>
        </div>
    )
},
'Opções de pesquisa de transações': {
    title: 'Opções de pesquisa de transações',
    videoUrl: 'https://www.youtube.com/embed/nuan0J8DdqA',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Opções de pesquisa de transações</h1>
            <p>Ao selecionar uma aba no Cockpit, o sistema apresenta várias opções para pesquisa e filtragem de transações, permitindo que o analista encontre e gerencie as transações de maneira eficiente.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit32} alt="Imagem das opções de pesquisa de transações"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Filtrar</h2>
            <p>Para dar início à pesquisa, o analista deve clicar no botão Filtrar. Essa ação ativa o sistema para processar as opções de filtro selecionadas anteriormente, retornando uma lista de transações que atendem aos critérios estabelecidos.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit33} alt="Imagem do botão Filtrar"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Pesquisa por transação ou order</h2>
            <p>No Cockpit, uma das opções de pesquisa disponíveis permite ao analista buscar informações por meio de Transação ou Order. Essas duas opções são essenciais para a identificação e gerenciamento de transações no sistema.</p>
            <ul>
                <li><strong>Transação:</strong> Refere-se ao ID único da transação gerada no Cockpit, vinculada ao processo de emissão de bilhetes.</li>
                <li><strong>Order:</strong> Representa o número do pedido, gerado no sistema da Maxmilhas, que está associado à compra de passagens aéreas.</li>
            </ul>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit34} alt="Imagem do campo de pesquisa por transação ou order"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Campo "Valor máximo de milhas"</h2>
            <p>Após realizar a busca de transações no Cockpit, o campo de "Valor máximo de milhas" permite ao analista filtrar as transações com base no limite máximo de milhas utilizado. Essa funcionalidade é útil para identificar transações que se enquadram dentro de um valor de milhas específico, facilitando o gerenciamento e priorização de emissões.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit36} alt="Imagem do campo Valor máximo de milhas"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Meio de pagamento</h2>
            <p>No Cockpit, ao realizar uma transação, o analista tem a opção de escolher entre diferentes meios de pagamento, oferecendo flexibilidade e conveniência para completar as emissões.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit37} alt="Imagem dos meios de pagamento disponíveis"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Opções disponíveis incluem</h2>
            <ul>
                <li><strong>Depósito:</strong> Pagamento realizado por meio de uma transferência bancária.</li>
                <li><strong>Cartão de crédito:</strong> Pagamento feito por cartão de crédito para a aquisição das passagens aéreas.</li>
                <li><strong>SafetyPay:</strong> Um método de pagamento online que permite aos clientes realizarem pagamentos diretamente através de seus bancos.</li>
                <li><strong>Paymee:</strong> Uma plataforma de pagamento digital que oferece soluções de pagamento online.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Opção “Dias”</h2>
            <p>No Cockpit, a funcionalidade de opção “dias” permite ao analista filtrar transações com base na data dos voos programados.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit38} alt="Imagem do campo Dias"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Emitindo</h2>
            <p>A opção Emitindo no Cockpit permite ao analista buscar transações que já estão em processo de emissão ou que não estão sendo emitidas na aba correspondente.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit39} alt="Imagem da opção Emitindo"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Recompra</h2>
            <p>A opção Recompra no Cockpit permite ao analista selecionar transações que foram canceladas e posteriormente compradas novamente pelos clientes.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit40} alt="Imagem da opção Recompra"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Ordenar Por</h2>
            <p>A opção Ordenar Por no Cockpit oferece um filtro que permite ao analista escolher como deseja organizar as transações exibidas.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit41} alt="Imagem da opção Ordenar Por"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Internacional</h2>
            <p>A opção Internacional no Cockpit permite ao analista filtrar voos que são classificados como internacionais.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit42} alt="Imagem da opção Internacional"></img>
        </div>
    )
},
'Transações': {
    title: 'Transações',
    videoUrl: 'https://www.youtube.com/embed/z7-aWtNvaLc',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Transações</h1>
            <p>Ao realizar a pesquisa no Cockpit, o sistema retorna uma série de cartões de transações que contêm informações detalhadas sobre cada transação, facilitando o acompanhamento e a gestão.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit43} alt="Imagem dos cartões de transações"></img>
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Cada cartão apresenta os seguintes dados:</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit44} alt="Imagem detalhando os dados do card de transação"></img>
            
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Informações do card de transação</h3>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Voo de ida ou volta:</strong> Indica se a transação é referente ao voo de ida ou volta.</li>
                <li><strong>Número da transação:</strong> Identificação única da transação, essencial para rastreamento e referência.</li>
                <li><strong>Quantidade de horas na aba:</strong> Mostra quanto tempo a transação está na aba atual, ajudando a monitorar prazos e ações necessárias.</li>
                <li><strong>Número de comentários:</strong> Indica quantos comentários foram feitos na transação, permitindo um acompanhamento mais detalhado.</li>
                <li><strong>Classe de voo:</strong> Informação sobre a categoria do voo, como econômica, executiva, etc.</li>
            </ul>
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Dados do comprador:</h3>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Login:</strong> Identificação do comprador.</li>
                <li><strong>Nome:</strong> Nome completo do comprador.</li>
                <li><strong>Telefone:</strong> Número de contato.</li>
                <li><strong>Email:</strong> Endereço de e-mail.</li>
                <li><strong>Botão para visualizar dados do comprador:</strong> Permite acesso rápido às informações detalhadas do comprador.</li>
            </ul>
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Dados do vendedor:</h3>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Login:</strong> Identificação do vendedor.</li>
                <li><strong>Telefone:</strong> Número de contato do vendedor.</li>
                <li><strong>Nome:</strong> Nome do vendedor.</li>
                <li><strong>Cia:</strong> Companhia aérea associada à transação.</li>
                <li><strong>Quantidade de milhas da transação:</strong> Total de milhas utilizadas.</li>
                <li><strong>Preço do milheiro:</strong> Valor cobrado por milheiro entre parênteses.</li>
                <li><strong>Logo da companhia:</strong> Exibe o logotipo da companhia aérea para identificação visual.</li>
                <li><strong>Data e hora do voo:</strong> Informações sobre quando o voo está agendado para ocorrer.</li>
                <li><strong>E-ticket:</strong> Mostra se o bilhete aéreo foi gerado ou está pendente de emissão.</li>
            </ul>
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Dados da transação:</h3>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Data do Voo:</strong> Data em que o voo está programado.</li>
                <li><strong>Gateway:</strong> Método de pagamento utilizado (por exemplo, Paymee).</li>
                <li><strong>Status:</strong> Indica o estado da transação, como capturado, pendente, etc.</li>
                <li><strong>Valor pago pelo cliente:</strong> Quantia que o cliente pagou pela transação.</li>
                <li><strong>MaxPay código:</strong> Código associado à transação de pagamento.</li>
                <li><strong>Order:</strong> Número do pedido.</li>
                <li><strong>Botão de Iniciar Emissão:</strong> Inicia o processo de emissão do bilhete aéreo.</li>
                <li><strong>Botão para enviar para a aba de Erro/Aumento:</strong> Direciona a transação para a aba de erro ou aumento devido a milhas.</li>
                <li><strong>Botão para enviar para a aba de Erro/Aumento por erro:</strong> Redireciona a transação para análise de erro.</li>
                <li><strong>Caixa com último log ou comentário da transação:</strong> Exibe o mais recente log ou comentário relacionado à transação.</li>
                <li><strong>Caixa com último monitoramento do voo:</strong> Mostra informações do último monitoramento do voo na companhia, incluindo:</li>
                <ul>
                    <li><strong>Tarifa do voo:</strong> Custo atual do voo.</li>
                    <li><strong>Valor em milhas:</strong> Quantidade de milhas requeridas para o voo.</li>
                    <li><strong>Valor em OTA:</strong> Valor em milhas através de OTA.</li>
                    <li><strong>Hora e data do último monitoramento:</strong> Registro do último acompanhamento feito.</li>
                </ul>
            </ul>
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Informações detalhadas no card</h3>
            <p>Clicando na seta localizada na parte inferior de um cartão de transação, o sistema exibe informações adicionais, essenciais para a gestão detalhada da operação. Essas informações oferecem uma visão mais completa tanto sobre o comprador quanto sobre o vendedor (ofertante), além de outras funcionalidades úteis para o processo de emissão.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit45} alt="Imagem detalhando informações do card"></img>
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>As informações detalhadas incluem:</h3>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>CPF do comprador:</strong> Exibe o CPF do cliente que adquiriu a passagem, facilitando a verificação da identidade e a correção de possíveis problemas.</li>
                <li><strong>Telefone do ofertante:</strong> Mostra o número de telefone do vendedor de milhas, útil para o contato direto em caso de dúvidas ou problemas.</li>
                <li><strong>Email do ofertante:</strong> Apresenta o endereço de e-mail do vendedor de milhas, outra forma de contato para questões operacionais ou administrativas.</li>
                <li><strong>Número de fidelidade:</strong> Exibe o número do programa de fidelidade associado ao ofertante ou comprador, essencial para a emissão das passagens com milhas.</li>
                <li><strong>Senha multiplus:</strong> Informação da senha utilizada no sistema Multiplus, necessária para acessar as contas de milhas dos ofertantes e concluir a emissão.</li>
                <li><strong>Senha fidelidade:</strong> Adiciona a senha do programa de fidelidade associada ao perfil do ofertante ou comprador, necessária para acessar a conta de milhas e concluir a transação.</li>
                <li><strong>Telefone na companhia:</strong> Número de telefone associado ao perfil de fidelidade do ofertante ou cliente na companhia aérea.</li>
                <li><strong>Email na companhia:</strong> Endereço de e-mail associado ao perfil de fidelidade na companhia aérea.</li>
                <li><strong>Botão para gerar cartão de crédito:</strong> Permite gerar um cartão de crédito virtual utilizado no pagamento da taxa de embarque da transação.</li>
                <li><strong>Botão para inserir e-ticket:</strong> Disponibiliza um campo para inserir manualmente o e-ticket gerado, necessário para o controle da emissão.</li>
                <li><strong>Botão para buscar códigos de verificação para pagamento na cia Gol:</strong> Facilita a obtenção dos códigos de verificação necessários para o pagamento das taxas na companhia aérea Gol.</li>
                <li><strong>Informações sobre a companhia aérea:</strong> Exibe dados detalhados sobre a companhia com a qual o voo será realizado, como:
                    <ul>
                        <li><strong>Nome da companhia:</strong> Nome completo da companhia aérea.</li>
                        <li><strong>Valor total do voo:</strong> Custo total do voo para o cliente.</li>
                        <li><strong>Data de compra:</strong> Dia em que a passagem foi adquirida.</li>
                        <li><strong>Data de vencimento:</strong> Data limite para pagamento da taxa de embarque.</li>
                    </ul>
                </li>
            </ul>
        </div>
    ),
},
'Transação completa': {
    title: 'Transação completa',
    videoUrl: 'https://www.youtube.com/embed/{video_id}',
    description: (
   <div>
            <h3>Transação completa</h3>
            <p>Clicando no botão de Transação completa, é possível acessar uma página com informações detalhadas sobre a transação.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit52} alt="Imagem da página de transação completa" />

            <p>Esta página centraliza todas as informações e ações relevantes relacionadas à transação de venda e emissão de passagens com milhas.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit53} alt="Imagem centralizando informações da transação" />
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit54} alt="Imagem adicional da página de transação" />

            <h3>Abaixo estão os dados e botões disponíveis:</h3>

            <h4>1. Dados gerais da transação</h4>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit55} alt="Imagem dos dados gerais da transação" />
            <p>Número da transação: Identificador único da transação para fácil rastreamento e referência.</p>
            <p>Dados do comprador: Informações completas sobre o comprador da passagem (nome, CPF, telefone, e-mail, etc.).</p>

            <h4>2. Dados Financeiros</h4>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit56} alt="Imagem dos dados financeiros" />
            <p>Taxa de embarque: Valor da taxa de embarque associada ao voo.</p>
            <p>Taxa de bagagem: Valores pagos a mais por bagagem despachada.</p>
            <p>Taxa de serviço: Taxas aplicadas pelos serviços prestados na transação.</p>
            <p>Valor da compra: Valor total da transação.</p>
            <p>Descontos: Aplicação de descontos, se houver, na transação.</p>
            <p>Valor pago: Valor final que foi pago pelo comprador.</p>

            <h4>3. Dados do vendedor e da oferta:</h4>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit57} alt="Imagem dos dados do vendedor e da oferta" />
            <p>Login: Login do ofertante.</p>
            <p>Telefone: Telefone do ofertante.</p>
            <p>Tipo de oferta: Classificação da oferta (ex: convencional, revenda, etc.).</p>
            <p>Milhas da venda: Número de milhas utilizadas na transação.</p>
            <p>Valor do ofertante: Valor total proposto pelo ofertante.</p>
            <p>Saldo disponível: Quantidade de milhas ainda disponíveis na conta do vendedor.</p>
            <p>Valor unitário: Preço por milheiro cobrado na transação.</p>
            <p>Metadata: Informações adicionais sobre a oferta de milhas e o vendedor.</p>

            <h4>4. Botões de ações</h4>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit58} alt="Imagem dos botões de ações" />
            <p>Botão de lançar cobrança: Permite lançar cobranças adicionais ou corrigir valores referentes à transação.</p>
            <p>Botão de cancelar transação: Cancela completamente a transação atual.</p>
            <p>Botão de opções: Exibe opções como busca de código de verificação por e-mail ou SMS.</p>
            <p>Botão de trocar vendedor: Facilita a troca do vendedor de milhas, caso necessário, por problemas como saldo ou conta bloqueada.</p>
            <p>Botão de alterar milhas: Modifica a quantidade de milhas a serem utilizadas na transação.</p>
            <p>Botão de detalhes da oferta: Mostra informações completas sobre a oferta de milhas utilizada.</p>

            <h4>5. Dados do voo</h4>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit59} alt="Imagem dos dados do voo" />
            <p>Dados do voo e milhas para checagem: Exibe os dados do voo (companhia, número do voo, origem, destino, etc.) e milhas associadas para conferência.</p>
            <p>Botão de editar dados do voo: Permite modificar os detalhes do voo, como horários e datas, se necessário.</p>
            <p>Botão de desabilitar checagem automática: Desativa a checagem automática de milhas e voo, oferecendo um processo manual.</p>
            <p>Botão de logs de cancelamento automático: Exibe o histórico de cancelamentos automáticos da transação, caso existam.</p>

            <h4>6. Dados detalhados do voo</h4>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit60} alt="Imagem dos dados detalhados do voo" />
            <p>Companhia aérea: Nome da companhia aérea responsável pelo voo.</p>
            <p>Número do voo: Identificação única do voo.</p>
            <p>Aeroporto de saída: Nome do aeroporto de onde o voo parte.</p>
            <p>Data da partida: Data programada para a partida do voo.</p>
            <p>Hora da partida: Horário programado para a partida do voo.</p>
            <p>Aeroporto de chegada: Nome do aeroporto de destino do voo.</p>
            <p>Hora da chegada: Horário programado para a chegada do voo.</p>
            <p>Alteração involuntária: Indicação se houve alguma alteração involuntária na programação do voo.</p>

            <h4>Botões de ações relacionadas ao voo</h4>
            <p>Botão de editar informações do voo: Altera informações detalhadas sobre o voo, como assento, classe, entre outros.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit61} alt="Imagem do botão de editar informações do voo" />
            <p>Botão de buscar voo: Busca voos alternativos ou atualiza o voo da transação.</p>
            <p>Botão de cancelar voo: Cancela o voo associado à transação.</p>

            <h4>7. Dados do passageiro</h4>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit62} alt="Imagem dos dados do passageiro" />
            <p>Tratamento: (Sr./Sra.) – Forma de tratamento do passageiro.</p>
            <p>Primeiro nome: Nome do passageiro.</p>
            <p>Segundo nome: Nome do meio ou sobrenome do passageiro.</p>
            <p>Sufixo: Sufixo do nome (ex: Jr., Sr., etc.).</p>
            <p>CPF: Cadastro de Pessoa Física do passageiro.</p>
            <p>RG: Registro Geral do passageiro.</p>
            <p>Passaporte: Número do passaporte do passageiro.</p>
            <p>Data de expiração: Data de validade do passaporte.</p>
            <p>País emissor: País que emitiu o passaporte.</p>
            <p>Nacionalidade: Nacionalidade do passageiro.</p>
            <p>Data de nascimento: Data de nascimento do passageiro.</p>
            <p>Telefone: Número de telefone de contato do passageiro.</p>
            <p>Botão de consumir CPF: Consome o CPF do passageiro registrado para emitir a passagem.</p>
            <p>Botão de editar informações dos passageiros: Permite a alteração de dados dos passageiros (nome, documento, etc.).</p>

            <h4>7.1 Botão de editar informações dos passageiros</h4>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit63} alt="Imagem do botão de editar informações dos passageiros" />
            <p>Permite a alteração de dados dos passageiros (nome, documento, etc.).</p>

            <h4>8. Informações de Pagamento e criação da transação</h4>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit64} alt="Imagem das informações de pagamento" />
            <p>Exibição dos dados de pagamento, incluindo método de pagamento e status da transação.</p>
            <p>Botão de criar nova transação: Permite iniciar uma nova transação a partir desta página.</p>
            <p>Botão de detalhes do pagamento: Exibe informações detalhadas sobre a forma de pagamento escolhida.</p>
            <p>Botão de cancelar pagamento: Cancela a forma de pagamento atual e retorna ao estado anterior.</p>
        </div>
    ),
},
'Cancelamento de transações': {
    title: 'Cancelamento de transações',
    videoUrl: 'https://www.youtube.com/embed/qKuSJXLAUdI',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Cancelamento de transações</h1>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit65} alt="Botão para cancelar transação"></img>
            <p>Este botão permite ao usuário cancelar uma transação, apresentando informações sobre o vendedor de milhas, motivos de cancelamento e opções de estorno.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>As opções disponíveis são:</h2>
            <ol style={{ listStyleType: 'decimal', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Informações do vendedor de milhas:</strong> Email do vendedor: Exibe o e-mail do vendedor de milhas associado à transação, facilitando o contato e a verificação de informações.</li>
                <li><strong>Motivo do cancelamento:</strong> O usuário deve selecionar um motivo de cancelamento a partir das seguintes opções:
                    <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '10px', marginBottom: '30px' }}>
                        <li>Voo indisponível na CIA</li>
                        <li>Voo indisponível em um dos trechos</li>
                        <li>Transação com mais de 1 dia na aba</li>
                        <li>Transação abaixo da receita mínima</li>
                        <li>Suspeita de fraude</li>
                        <li>Sem depósito no prazo</li>
                        <li>Re-emissão</li>
                        <li>Problema de pagamento da taxa de embarque</li>
                        <li>OTA - Trecho da irmã com aumento de milhas</li>
                        <li>OTA - Erro</li>
                        <li>OTA - Cartão não autorizado</li>
                        <li>OTA - Alteração de preço / Re-tarifado</li>
                        <li>Falta de ofertante</li>
                        <li>Erro no site da CIA</li>
                        <li>Erro no site - Tarja amarela (CIA amarela)</li>
                        <li>Erro forbidden</li>
                        <li>Dupla autenticação Latam</li>
                        <li>Desistência pelo cliente</li>
                        <li>Desistência - remarcação</li>
                        <li>Desistência - Cancelamento 24h</li>
                        <li>Coronavírus</li>
                        <li>Crédito na CIA</li>
                        <li>Conversão de transação OTA em milhas</li>
                        <li>Bloqueio na conta Latam</li>
                        <li>Aumento de milhas - Após erro senha de resgate</li>
                        <li>Aumento de milhas - Identificação do log</li>
                        <li>Aumento de milhas - Ao tentar emitir</li>
                        <li>Atingindo limite de tentativas por protocolo</li>
                    </ul>
                </li>
                <li><strong>Perguntas adicionais:</strong>
                    <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit67} alt="Perguntas adicionais sobre o cancelamento"></img>
                    <ul style={{ listStyleType: 'none', marginLeft: '30px', marginTop: '10px', marginBottom: '30px' }}>
                        <li>Retornar o saldo de milhas? Opções: Sim ou Não</li>
                        <li>E-ticket foi cancelado na CIA? Opções: Sim ou Não</li>
                        <li>O estorno será realizado? Opções: Sim ou Não</li>
                        <li>Tipo de estorno:
                            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '10px', marginBottom: '30px' }}>
                                <li>Convertido para créditos através do Zendesk</li>
                                <li>Estornar para cartão/conta do Comprador</li>
                                <li>Solicitar estorno diretamente no Pagar.me</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ol>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Ações associadas:</h2>
            <p>Confirmar cancelamento: Após selecionar o motivo, responder às perguntas e revisar as informações, o usuário pode clicar neste botão para confirmar o cancelamento da transação.</p>
            <p>Essa funcionalidade abrangente permite gerenciar o cancelamento de transações de forma eficaz, incluindo a gestão do retorno de milhas e a escolha do método de estorno, garantindo que o processo seja claro e transparente para todas as partes envolvidas.</p>
        </div>
    ),
},
'Troca de ofertante': {
    title: 'Troca de ofertante',
    videoUrl: 'https://www.youtube.com/embed/8fOnyjC0AOE',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Troca de ofertante</h1>
            <p>Este botão abre uma página dedicada à troca do ofertante, apresentando informações relevantes sobre a transação atual e opções para selecionar um novo vendedor de milhas.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit68} alt="Imagem da troca de ofertante"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Dados do voo</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit69} alt="Imagem dos dados do voo"></img>

            <p>Nesta seção, são exibidos os detalhes da transação atual:</p>
            <ul>
                <li><strong>Transação:</strong> Identificação única da transação.</li>
                <li><strong>CIA Aérea:</strong> Nome da companhia aérea associada ao voo.</li>
                <li><strong>Valor da compra:</strong> Valor total da compra realizada.</li>
                <li><strong>Quantidade de milhas:</strong> Total de milhas utilizadas na transação.</li>
                <li><strong>Quantidade de passageiros (Pax):</strong> Número de passageiros associados à transação.</li>
                <li><strong>Razão:</strong> Razão do voo definida por milhas / CPFs.</li>
            </ul>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit70} alt="Imagem da seção de detalhes da transação"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Ofertante Atual</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit71} alt="Imagem do ofertante atual"></img>

            <p>Exibe informações sobre o vendedor de milhas atual:</p>
            <ul>
                <li><strong>Login:</strong> Identificação do ofertante atual.</li>
                <li><strong>Saldo:</strong> Saldo de milhas disponíveis do ofertante.</li>
                <li><strong>Razão:</strong> Razão do ofertante definida por milhas / CPFs.</li>
                <li><strong>Valor:</strong> Valor do milheiro.</li>
                <li><strong>Retornar saldo:</strong> Opção para retornar o saldo de milhas ao ofertante atual.</li>
                <li><strong>Motivo para troca de ofertante:</strong> Campo para descrever o motivo da troca.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Novo ofertante</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit72} alt="Imagem do novo ofertante"></img>

            <p>Nesta seção, o usuário pode buscar por um novo vendedor de milhas:</p>
            <ul>
                <li><strong>Buscar por login:</strong> Campo para inserir o login do novo ofertante desejado.</li>
                <li><strong>Ofertante selecionado:</strong> Exibe as informações do novo ofertante escolhido.</li>
                <li><strong>Enviar e-mail:</strong> Botão para enviar um e-mail ao novo ofertante sobre a troca.</li>
                <li><strong>Saldo:</strong> Saldo de milhas disponíveis do novo ofertante.</li>
                <li><strong>Razão:</strong> Razão do ofertante definida por milhas / CPFs.</li>
                <li><strong>Valor:</strong> Valor das milhas no novo ofertante.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Tabela: Selecionar novo ofertante</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit73} alt="Imagem da tabela de novos ofertantes"></img>

            <p>Uma tabela interativa onde o usuário pode visualizar e selecionar novos ofertantes:</p>
            <ul>
                <li><strong>Caixa de seleção de ofertante:</strong> Permite ao usuário selecionar um ofertante para a troca.</li>
                <li><strong>Login:</strong> Identificação do novo ofertante.</li>
                <li><strong>Tipo:</strong> Tipo de vendedor (ex: individual, empresa).</li>
                <li><strong>Categoria:</strong> Categoria do ofertante (ex: experiente, novo).</li>
                <li><strong>Saldo atual:</strong> Saldo de milhas disponível para o novo ofertante.</li>
                <li><strong>Razão:</strong> Justificativa para a escolha do novo ofertante.</li>
                <li><strong>CPFs disponíveis:</strong> Quantidade de CPFs que o ofertante pode utilizar.</li>
                <li><strong>Telefone:</strong> Número de telefone do novo ofertante para contato.</li>
                <li><strong>Valor do milheiro:</strong> Preço por milha do novo ofertante.</li>
                <li><strong>Valor total:</strong> Valor total calculado para a transação com o novo ofertante.</li>
                <li><strong>Vendas no dia:</strong> Número de vendas realizadas pelo novo ofertante no dia atual.</li>
                <li><strong>Contador com ofertantes elegíveis:</strong> Mostra o número total de ofertantes elegíveis para a troca.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>5. Botão de trocar vendedor</h2>
            <p>Realizar troca de vendedor: Botão que, ao ser clicado, confirma a troca do ofertante e finaliza o processo.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>6. Funcionalidade de acesso a ofertas detalhadas</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit74} alt="Imagem da funcionalidade de acesso a ofertas detalhadas"></img>

            <p>Clicar no nome do ofertante:</p>
            <p>O usuário pode clicar no nome do ofertante segurando a tecla Ctrl. Isso abrirá uma nova página com as ofertas detalhadas do ofertante selecionado. A página de ofertas detalhadas incluirá informações como:</p>
            <ul>
                <li>Descrição das ofertas disponíveis.</li>
                <li>Condições de uso das milhas.</li>
                <li>Informações adicionais relevantes ao ofertante.</li>
            </ul>

            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit75} alt="Imagem da funcionalidade de ofertas detalhadas"></img>

            <p>Esta funcionalidade oferece um fluxo claro para trocar de vendedor, garantindo que todas as informações relevantes estejam disponíveis para facilitar a decisão do usuário e assegurar uma troca eficiente.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Motivos para troca de ofertante</h2>
            <p>A troca de ofertante deve ser feita com atenção, pois um motivo incorreto pode invalidar ofertas e impedir que o saldo de milhas seja utilizado.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit76} alt="Imagem dos motivos para troca de ofertante"></img>

            <h3>Abaixo estão os motivos disponíveis para a troca de ofertante:</h3>
            <ul>
                <li><strong>Senha incorreta:</strong> A senha do ofertante atual está incorreta, impossibilitando a emissão da passagem.</li>
                <li><strong>Saldo insuficiente:</strong> O ofertante atual não possui saldo de milhas suficiente para a transação desejada.</li>
                <li><strong>Sem beneficiários (CPFs) disponíveis:</strong> Não há CPFs disponíveis para serem utilizados na transação.</li>
                <li><strong>Conta bloqueada:</strong> O sistema informa que a conta do ofertante atual está bloqueada, impedindo a emissão. Atenção! Essa opção bloqueia o ofertante e envia para reanálise.</li>
                <li><strong>Não atende o telefone/WhatsApp:</strong> O ofertante atual não responde às tentativas de contato, dificultando a comunicação. Atenção! Essa opção bloqueia o ofertante e envia para reanálise.</li>
                <li><strong>Outros:</strong> Motivo específico que não se encaixa nas opções acima.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Resumo do processo</h2>
            <p>O fluxo da troca de ofertante é estruturado para garantir clareza e eficiência. As informações exibidas e a possibilidade de acessar ofertas detalhadas oferecem ao usuário suporte em sua decisão, assegurando que a troca de ofertante ocorra de maneira eficaz e segura.</p>
        </div>
    ),
},
'Opções': {
    title: 'Opções',
    videoUrl: 'https://www.youtube.com/embed/eSv3nr0fAGc',
    description: (
        <div>
            <h1 style={{ marginTop:'10px', marginBottom:'30px' }}>Opções</h1>
            <p>Essa tela fornece uma interface com várias opções de autoatendimento e serviços relacionados à transação, permitindo ao usuário acessar rapidamente funcionalidades essenciais.</p>
            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit77} alt="Imagem das opções"></img>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>1. Opções de autoatendimento:</h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Gerar URL para o cliente:</strong> Gera um link personalizado para o cliente acessar detalhes da transação, realizar pagamentos ou visualizar informações específicas sobre sua compra.</li>
            </ul>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>2. Categoria de cancelamento:</h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Cancelar milhas:</strong> Fornece a opção de cancelar a utilização das milhas na transação, seja por erro ou solicitação do cliente, e possibilita estornar as milhas para o vendedor.</li>
            </ul>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>3. Informações de pagamento:</h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Dados de pagamento:</strong> Exibe as informações detalhadas sobre os pagamentos realizados, como método de pagamento, data, valor pago e status do pagamento.</li>
                <li><strong>Visualizar recibo:</strong> Permite ao usuário visualizar e baixar o recibo da transação, facilitando o controle financeiro e a conferência de valores.</li>
            </ul>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>4. Códigos para emissão:</h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Buscar código Gol:</strong> Facilita a busca de códigos de verificação necessários para a emissão de passagens na companhia aérea Gol, permitindo completar o processo de forma ágil e automatizada.</li>
            </ul>

            <p>Essa tela de opções concentra ações rápidas e úteis, permitindo tanto o gerenciamento de cancelamentos e pagamentos quanto o suporte para a emissão de passagens, proporcionando uma experiência prática e eficiente.</p>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>Tela de busca de código Gol</h2>
            <p>Esta tela permite ao usuário inserir os dados necessários para receber o código de verificação exigido pela companhia aérea Gol para concluir o pagamento da transação.</p>
            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit78} alt="Imagem da tela de busca de código Gol"></img>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>Campos de inserção:</h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Digite o e-mail do ofertante:</strong> Campo para inserir o e-mail que receberá o código de verificação da Gol.</li>
                <li><strong>Telefone da chipeira:</strong> Alternativamente, o usuário pode inserir o número de telefone associado a uma chipeira (dispositivo utilizado para receber mensagens SMS), para receber o código de verificação por SMS.</li>
            </ul>

            <p>Essa tela oferece uma maneira eficiente de gerenciar e obter os códigos de verificação da Gol, necessários para concluir o pagamento de passagens emitidas com milhas.</p>
        </div>
    )
},
'Alterar milhas': {
    title: 'Alterar milhas',
    videoUrl: 'https://www.youtube.com/embed/CVRql66YW9o',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Alterar milhas</h1>
            <p>Este botão proporciona ao usuário a capacidade de modificar a quantidade de milhas associadas ao voo de ida e volta da transação.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit79} alt="Imagem da tela de alteração de milhas"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Elementos da página de alteração de milhas:</h2>
            <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Voo de ida:</h3>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '10px', marginBottom: '30px' }}>
                <li><strong>Campo para inserir quantidade de milhas:</strong> Permite ao usuário inserir a nova quantidade de milhas para o voo de ida.</li>
                <li><strong>Visualização atual:</strong> Exibe a quantidade atual de milhas para o voo de ida, permitindo que o usuário compare.</li>
            </ul>

            <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Voo de volta:</h3>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '10px', marginBottom: '30px' }}>
                <li><strong>Campo para inserir quantidade de milhas:</strong> Permite ao usuário inserir a nova quantidade de milhas para o voo de volta.</li>
                <li><strong>Visualização atual:</strong> Exibe a quantidade atual de milhas para o voo de volta, ajudando na comparação.</li>
            </ul>

            <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Botão de confirmar alteração:</h3>
            <p>Um botão para confirmar as alterações realizadas nas quantidades de milhas. Ao clicar, o sistema atualiza as informações da transação com os novos valores.</p>

            <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Botão de cancelar:</h3>
            <p>Um botão que permite ao usuário cancelar a operação e retornar à página anterior sem fazer alterações.</p>
        </div>
    )
},
'Calculadora de prejuízos': {
    title: 'Calculadora de prejuízos',
    videoUrl: 'https://www.youtube.com/embed/IBZ-O-HPxtw',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Calculadora de prejuízos</h1>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit80} alt="Imagem da calculadora de prejuízos"></img>
            <p>Ao clicar no ícone da calculadora de prejuízos, uma janela é exibida com a ferramenta de cálculo. Essa calculadora permite avaliar o prejuízo potencial em uma transação específica, considerando o valor atual das milhas na companhia aérea. Para utilizar a calculadora, é necessário que a emissão já tenha sido iniciada.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit81} alt="Imagem da funcionalidade da calculadora de prejuízos"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Funcionalidades da calculadora:</h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '10px', marginBottom: '30px' }}>
                <li><strong>Número da transação:</strong> Um campo para inserir o número da transação em questão.</li>
                <li><strong>Valor de milhas atuais na companhia:</strong> Campo para inserir o valor atualizado das milhas na companhia aérea.</li>
                <li><strong>Botão de calcular:</strong> Após inserir os dados, o botão de "Calcular" processa as informações e exibe o prejuízo estimado.</li>
            </ul>

            <p>Essa ferramenta é essencial para monitorar as transações e garantir que os ofertantes e a Maxmilhas evitem prejuízos significativos durante o processo de emissão de bilhetes aéreos.</p>
        </div>
    )
},


/* Curso Emissões */









};


const capitalizeFirstLetter = (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

const CourseDetailPage = () => {
    const { id, lesson } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [progress, setProgress] = useState(0);
    const [lessons, setLessons] = useState([]);
    const [lessonData, setLessonData] = useState({});

    useEffect(() => {
        const fetchUserProgress = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/users/${localStorage.getItem('userId')}/progress/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                const { progress, lessons } = response.data;

                if (lessons && lessons.length > 0) {
                    setLessons(lessons);
                }

                setProgress(progress);
            } catch (error) {
                console.error('Erro ao buscar progresso do usuário:', error);
                setLessons([]);
            }
        };

        const fetchLessonData = () => {
            const lessonInfo = lessonsData[lesson] || {
                title: lesson.replace(/-/g, ' ').toUpperCase(),
                videoUrl: '',
                description: 'Esta é uma lição recém-criada. Em breve, mais informações estarão disponíveis.'
            };
            setLessonData(lessonInfo);
        };

        fetchUserProgress();
        fetchLessonData();
    }, [id, lesson]);

    const handleCompleteLesson = async () => {
        const currentIndex = lessons.findIndex(l => l.title === lesson);
        if (currentIndex < 0 || currentIndex >= lessons.length) {
            console.log('Aula inválida.');
            return;
        }

        if (lessons[currentIndex].completed) {
            console.log('Esta aula já foi concluída.');
            return;
        }

        const updatedLessons = lessons.map((l, index) =>
            index === currentIndex ? { ...l, completed: true } : l
        );

        setLessons(updatedLessons);
        const progressIncrement = 100 / lessons.length;

        try {
            const { data: { progress: currentProgress } } = await axios.get(`${process.env.REACT_APP_API_URL}/api/users/${localStorage.getItem('userId')}/progress/${id}`, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });

            await axios.put(`${process.env.REACT_APP_API_URL}/api/users/add-points/${localStorage.getItem('userId')}`, {
                points: 50
            }, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });

            const newProgress = Math.min(currentProgress + progressIncrement, 100);
            localStorage.setItem('userProgress', JSON.stringify({ ...JSON.parse(localStorage.getItem('userProgress')) || {}, [id]: newProgress }));

            await axios.put(`${process.env.REACT_APP_API_URL}/api/users/${localStorage.getItem('userId')}/progress/${id}`, {
                progress: newProgress,
                lessons: updatedLessons
            }, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });

            setProgress(newProgress);

            if (newProgress === 100) {
                console.log(`Quiz do curso ${id} desbloqueado!`);
            }

            if (currentIndex + 1 < lessons.length) {
                const nextLesson = lessons[currentIndex + 1].title;
                navigate(`/curso/${id}/${nextLesson}`);
                window.scrollTo(0, 0);
            }
        } catch (error) {
            console.error('Erro ao atualizar progresso:', error);
        }
    };

    const handleResetProgress = async () => {
        const resetLessons = lessons.map(lesson => ({ ...lesson, completed: false }));
        setLessons(resetLessons);
        setProgress(0);

        localStorage.setItem('userProgress', JSON.stringify({ ...JSON.parse(localStorage.getItem('userProgress')) || {}, [id]: 0 }));

        try {
            await axios.put(`${process.env.REACT_APP_API_URL}/api/users/${localStorage.getItem('userId')}/progress/${id}`, {
                progress: 0,
                lessons: resetLessons
            }, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });
        } catch (error) {
            console.error('Erro ao reiniciar progresso:', error);
        }
    };

    const pageTitle = coursesData[id] || 'Curso desconhecido';

    const isWelcomeRoute = location.pathname.match(/\/curso\/[^/]*\/bem-vindo/);

    // Função para encontrar a primeira lição disponível
    const getFirstAvailableLesson = () => {
        return lessons.find(l => !l.completed)?.title;
    };

    return (
        <div className={styles.courseDetail}>
            <h2 className={styles.courseTitle}>{pageTitle}</h2>
            <hr className={styles.separator} />
            <div className={styles.contentContainer}>
                <div className={styles.videoContainer}>
                    <h2 className={styles.lessonTitle}>{capitalizeFirstLetter(lessonData.title)}</h2>
                    {lessonData.videoUrl && (
                        <iframe
                            src={lessonData.videoUrl}
                            title="Video Aula"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    )}
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.progressPanel}>
                        <h2 className={styles.progressLabel}>Progresso do curso</h2>
                        <div className={styles.progressBarContainer}>
                            <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
                        </div>
                        <div className={styles.progressPercentage}>{Math.round(progress)}% concluído</div>
                        <button className={styles.resetButton} onClick={handleResetProgress}>Reiniciar Progresso</button>
                    </div>

                    <div className={styles.checklist}>
                        <h2>Aulas</h2>
                        <hr className={styles.checklistSeparator} />
                        {lessons.map((lesson) => (
                            <div key={lesson.title} className={styles.lessonItem}>
                                <Link to={`/curso/${id}/${lesson.title}`}>
                                    {lesson.completed ? '✔️' : '⚪️'} {capitalizeFirstLetter(lessonsData[lesson.title]?.title || lesson.title.replace(/-/g, ' ').toUpperCase())}
                                </Link>
                                <div className={styles.durationBox}>{lesson.duration}m</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{capitalizeFirstLetter(lessonData.title)}</h1>
                <p className={styles.description}>
                    {lessonData.description}
                </p>

                {!isWelcomeRoute && (
                    <button
                        className={styles.completeButton}
                        onClick={handleCompleteLesson}
                    >
                        Concluir Aula
                    </button>
                )}

                {isWelcomeRoute && (
                    <button
                        className={styles.completeButton}
                        onClick={() => {
                            const firstAvailableLesson = getFirstAvailableLesson();
                            if (firstAvailableLesson) {
                                navigate(`/curso/${id}/${firstAvailableLesson}`);
                                window.scrollTo(0, 0);
                            }
                        }}
                    >
                        Iniciar Curso
                    </button>
                )}

                <div className={styles.progressContainer}>
                    {progress < 100 ? (
                        <p className={styles.progressMessage}>
                            Complete o curso para acessar o quiz. Progresso atual: {Math.round(progress)}%.
                        </p>
                    ) : (
                        <p className={styles.quizUnlockedMessage}>
                            Parabéns! Você completou o curso. O quiz foi desbloqueado!
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CourseDetailPage;