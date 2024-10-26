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
import cursoemissoes00 from './assets/Cursos/Emissoes/cursoemissoes00.jpg';



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
'Menu lateral cockpit': {
    title: 'Menu lateral cockpit',
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
'Menu lateral milhas': {
    title: 'Menu lateral milhas',
    videoUrl: 'https://www.youtube.com/embed/KPMhTI-ehSU',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Menu lateral - Milhas</h1>
            <p style={{ marginTop: '30px', marginBottom: '30px' }}>No menu lateral, a opção Milhas dá acesso à tela de busca de ofertantes. Nesta tela, o analista pode realizar uma busca detalhada dos ofertantes cadastrados na base de dados, utilizando filtros como:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px', paddingLeft: '20px' }}>
                <li><strong>Login:</strong> Busca pelo login do ofertante.</li>
                <li><strong>Status:</strong> Filtragem pelo status atual do ofertante (ativo, inativo, etc.).</li>
                <li><strong>Companhia aérea:</strong> Seleção da companhia aérea com a qual o ofertante trabalha.</li>
            </ul>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit08} alt="" />
            <h2 style={{ marginTop: '10px', marginBottom: '30px' }}>Caixa de seleção de companhia aérea</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit09} alt="" />

            <p style={{ marginTop: '30px', marginBottom: '30px' }}>Nela, é possível visualizar ofertantes de diversas companhias, incluindo:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px', paddingLeft: '20px' }}>
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
            <h2 style={{ marginTop: '10px', marginBottom: '30px' }}>Caixa de seleção de status</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit10} alt="" />
f
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>As opções mais utilizadas no contexto de Emissões incluem:</h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
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
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li>Login</li>
                <li>Nome</li>
                <li>CPF</li>
                <li>E-mail</li>
                <li>Telefone</li>
            </ul>
            <h2 style={{ marginTop: '10px', marginBottom: '30px' }}>Opções avançadas</h2>

            <p>Ao clicar na opção Avançado na tela de busca de ofertantes, o sistema Cockpit oferece filtros adicionais para uma pesquisa mais detalhada, permitindo ao analista refinar ainda mais sua busca de ofertantes com base em critérios específicos.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Campos de busca avançada:</h3>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Saldo:</strong> Filtrar ofertantes com base no saldo de milhas disponível.</li>
                <li><strong>CPF:</strong> Busca por CPF para localizar ofertantes específicos.</li>
                <li><strong>Razão:</strong> Buscar ofertantes que possuem a razão (milhas/cpf) indicada.</li>
                <li><strong>Média:</strong> Busca pela média definida pelo ofertante na venda de milhas.</li>
                <li><strong>Tipo de oferta:</strong> Definir o tipo de transação que o ofertante está realizando.</li>
                <li><strong>Estratégia 2FA:</strong> Escolher o tipo de verificação em duas etapas para obter os códigos de verificação de segurança.</li>
            </ul>
            

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Tipos de oferta</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit13} alt="Tipos de oferta" />
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px', paddingLeft: '20px' }}>
                <li><strong>Venda convencional:</strong> Ofertas de milhas tradicionais.</li>
                <li><strong>Venda rápida:</strong> Ofertas destinadas a transações rápidas.</li>
                <li><strong>Revenda:</strong> Ofertantes de revenda.</li>
                <li><strong>Pagamento antecipado:</strong> Ofertas que exigem pagamento antecipado.</li>
            </ul>
    
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Estratégia 2FA (Autenticação de dois fatores)</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit14} alt="Estratégia 2FA (Autenticação de dois fatores)" />

            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px', paddingLeft: '20px' }}>
                <li><strong>Selecionar todos:</strong> Visualizar ofertantes independentemente da estratégia de verificação.</li>
                <li><strong>WhatsApp:</strong> Código 2FA via WhatsApp.</li>
                <li><strong>Chipeira:</strong> Código 2FA redirecionado para um telefone Maxmilhas e obtido através do e-mail da Chipeira.</li>
                <li><strong>E-mail:</strong> Código 2FA redirecionado para um e-mail Maxmilhas.</li>
            </ul>
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Tela de busca</h2>
            <p>Ao realizar a busca de um ofertante no sistema Cockpit, é exibida uma tela com as principais informações da oferta, permitindo que o analista visualize rapidamente os detalhes essenciais para tomar decisões sobre as transações.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit111} alt="Tela de busca" />

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>As informações retornadas incluem:</h3>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px', paddingLeft: '20px' }}>
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
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Ofertantes</h1>
            <p>Ao clicar no login do ofertante, o usuário é redirecionado para uma página que contém os detalhes da oferta. Nesta página, são apresentadas informações abrangentes sobre a oferta específica, permitindo que o analista tenha uma visão clara e completa.</p>
            
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit15} alt="Imagem da oferta" />
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit16} alt="Detalhes da oferta" />

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Nesta tela é possível verificar:</h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Código da transação:</strong> Código referente à oferta.</li>
                <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit17} alt="Código da transação" />
                <li><strong>Última observação:</strong> Último motivo para troca de ofertante ou movimentação da oferta.</li>
                <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit18} alt="Última observação" />
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Oferta</h2>
            <p>Nesta seção, a tela exibe os dados do vendedor e das milhas vendidas, fornecendo informações essenciais para análise e tomada de decisão.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit19} alt="Dados da oferta" />

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Os dados disponíveis incluem:</h3>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
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

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Dados do vendedor</h2>
            <p>Nesta seção, são exibidos os dados do vendedor que oferece as milhas, proporcionando informações essenciais para contato e identificação.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit20} alt="Dados do vendedor" />
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Login:</strong> Identificação única do vendedor no sistema.</li>
                <li><strong>Nome:</strong> Nome completo do vendedor, facilitando a identificação.</li>
                <li><strong>CPF:</strong> Cadastro de Pessoa Física, utilizado para fins de identificação e conformidade.</li>
                <li><strong>E-mail:</strong> Endereço de e-mail do vendedor, que pode ser usado para comunicação.</li>
                <li><strong>Telefone:</strong> Número de telefone cadastrado, permitindo contato direto para quaisquer questões relacionadas à oferta ou transação.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Editar oferta</h2>
            <p>Na tela de ofertas, os usuários têm a opção de editar as informações de uma oferta existente ao clicar no botão Editar. Essa funcionalidade permite que os analistas atualizem dados relevantes para garantir que as informações estejam sempre precisas e atualizadas.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit21} alt="Tela de edição da oferta" />
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit22} alt="Formulário de edição da oferta" />

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Dados de acesso</h2>
            <p>Em dados de acesso é possível obter os dados do ofertante como login e senha na companhia aérea. Para visualizar, é necessário utilizar a senha de acesso cadastrada no site da Maxmilhas e o motivo do acesso no campo observação.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit23} alt="Dados de acesso do ofertante" />
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit24} alt="Motivo de acesso do ofertante" />

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Linha do tempo da oferta</h2>
            <p>Nesta seção, é apresentada a evolução da oferta desde sua criação, permitindo que os analistas acompanhem o desempenho e as mudanças ao longo do tempo. As informações geralmente incluem:</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit25} alt="Linha do tempo da oferta" />

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Vendas</h2>
            <p>Nesta tela, é possível visualizar as últimas transações que foram concluídas utilizando a oferta selecionada. As informações são apresentadas em uma tabela detalhada, que inclui os seguintes dados:</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit26} alt="Tabela de vendas" />
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>ID da transação:</strong> Identificação única da transação realizada.</li>
                <li><strong>Milhas:</strong> Quantidade de milhas utilizadas na emissão da passagem.</li>
                <li><strong>Pax:</strong> Número de passageiros associados à transação.</li>
                <li><strong>Valor cliente:</strong> Valor pago pelo cliente ao ofertante.</li>
                <li><strong>Tx Maxmilhas:</strong> Taxa de serviço cobrada pela Maxmilhas pela intermediação da transação.</li>
                <li><strong>Tx embarque:</strong> Valor da taxa de embarque paga para a emissão do bilhete.</li>
                <li><strong>Voo:</strong> Código do voo relacionado à transação.</li>
                <li><strong>Status:</strong> Situação da compra efetuada pelo cliente no momento da consulta.</li>
            </ul>
        </div>
    ),
},

'Abas do cockpit': {
    title: 'Abas do cockpit',
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
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px', paddingLeft: '20px' }}>
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
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px', paddingLeft: '20px' }}>
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

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Ordenar por</h2>
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
                <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
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
                <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
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
            <h1 style={{ marginTop:'10px', marginBottom:'30px' }}>Transação completa</h1>
            <p>Clicando no botão de Transação completa, é possível acessar uma página com informações detalhadas sobre a transação.</p>
            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit52} alt="Imagem da transação completa"></img>
            <p>Esta página centraliza todas as informações e ações relevantes relacionadas à transação de venda e emissão de passagens com milhas.</p>
            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit53} alt="Imagem adicional da transação completa"></img>
            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit54} alt="Imagem adicional da transação completa"></img>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>Abaixo estão os dados e botões disponíveis:</h2>

            <h3 style={{ marginTop:'30px', marginBottom:'30px' }}>1. Dados gerais da transação</h3>
            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit55} alt="Dados gerais da transação"></img>
            <p>Número da transação: Identificador único da transação para fácil rastreamento e referência.</p>
            <p>Dados do comprador: Informações completas sobre o comprador da passagem (nome, CPF, telefone, e-mail, etc.).</p>

            <h3 style={{ marginTop:'30px', marginBottom:'30px' }}>2. Dados Financeiros</h3>
            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit56} alt="Dados financeiros da transação"></img>
            <p>Taxa de embarque: Valor da taxa de embarque associada ao voo.</p>
            <p>Taxa de bagagem: Valores pagos a mais por bagagem despachada.</p>
            <p>Taxa de serviço: Taxas aplicadas pelos serviços prestados na transação.</p>
            <p>Valor da compra: Valor total da transação.</p>
            <p>Descontos: Aplicação de descontos, se houver, na transação.</p>
            <p>Valor pago: Valor final que foi pago pelo comprador.</p>

            <h3 style={{ marginTop:'30px', marginBottom:'30px' }}>3. Dados do vendedor e da oferta:</h3>
            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit57} alt="Dados do vendedor e da oferta"></img>
            <p>Login: Login do ofertante.</p>
            <p>Telefone: Telefone do ofertante.</p>
            <p>Tipo de oferta: Classificação da oferta (ex: convencional, revenda, etc.).</p>
            <p>Milhas da venda: Número de milhas utilizadas na transação.</p>
            <p>Valor do ofertante: Valor total proposto pelo ofertante.</p>
            <p>Saldo disponível: Quantidade de milhas ainda disponíveis na conta do vendedor.</p>
            <p>Valor unitário: Preço por milheiro cobrado na transação.</p>
            <p>Metadata: Informações adicionais sobre a oferta de milhas e o vendedor.</p>

            <h3 style={{ marginTop:'30px', marginBottom:'30px' }}>4. Botões de ações</h3>
            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit58} alt="Botões de ações"></img>
            <p>Botão de lançar cobrança: Permite lançar cobranças adicionais ou corrigir valores referentes à transação.</p>
            <p>Botão de cancelar transação: Cancela completamente a transação atual.</p>
            <p>Botão de opções: Exibe opções como busca de código de verificação por e-mail ou SMS.</p>
            <p>Botão de trocar vendedor: Facilita a troca do vendedor de milhas, caso necessário, por problemas como saldo ou conta bloqueada.</p>
            <p>Botão de alterar milhas: Modifica a quantidade de milhas a serem utilizadas na transação.</p>
            <p>Botão de detalhes da oferta: Mostra informações completas sobre a oferta de milhas utilizada.</p>

            <h3 style={{ marginTop:'30px', marginBottom:'30px' }}>5. Dados do voo</h3>
            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit59} alt="Dados do voo"></img>
            <p>Dados do voo e milhas para checagem: Exibe os dados do voo (companhia, número do voo, origem, destino, etc.) e milhas associadas para conferência.</p>
            <p>Botão de editar dados do voo: Permite modificar os detalhes do voo, como horários e datas, se necessário.</p>
            <p>Botão de desabilitar checagem automática: Desativa a checagem automática de milhas e voo, oferecendo um processo manual.</p>
            <p>Botão de logs de cancelamento automático: Exibe o histórico de cancelamentos automáticos da transação, caso existam.</p>

            <h3 style={{ marginTop:'30px', marginBottom:'30px' }}>6. Dados detalhados do voo</h3>
            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit60} alt="Dados detalhados do voo"></img>
            <p>Companhia aérea: Nome da companhia aérea responsável pelo voo.</p>
            <p>Número do voo: Identificação única do voo.</p>
            <p>Aeroporto de saída: Nome do aeroporto de onde o voo parte.</p>
            <p>Data da partida: Data programada para a partida do voo.</p>
            <p>Hora da partida: Horário programado para a partida do voo.</p>
            <p>Aeroporto de chegada: Nome do aeroporto de destino do voo.</p>
            <p>Hora da chegada: Horário programado para a chegada do voo.</p>
            <p>Alteração involuntária: Indicação se houve alguma alteração involuntária na programação do voo.</p>
            <p>Botão de editar Informações do voo: Altera informações detalhadas sobre o voo, como assento, classe, entre outros.</p>
            <p>Botão de buscar voo: Busca voos alternativos ou atualiza o voo da transação.</p>
            <p>Botão de cancelar voo: Cancela o voo associado à transação.</p>

            <h3 style={{ marginTop:'30px', marginBottom:'30px' }}>6.1 Botão de editar dados do voo</h3>
            <p>Altera informações detalhadas sobre o voo, como assento, classe, entre outros.</p>
            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit61} alt="Botão de editar dados do voo"></img>

            <h3 style={{ marginTop:'30px', marginBottom:'30px' }}>7. Dados do passageiro</h3>
            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src={cursocockpit62} alt="Dados do passageiro"></img>
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
            <p>Botão de adicionar passageiros: Permite a inclusão de novos passageiros à transação.</p>
            <p>Botão de excluir passageiros: Permite a remoção de passageiros da transação.</p>


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
                        <li><strong>Tipo de estorno:</strong>
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
            <p>Confirmar cancelamento: Após selecionar o motivo, responder às perguntas e revisar as informações, o usuário pode clicar neste botão para confirmar o cancelamento da transação.  Essa funcionalidade abrangente permite gerenciar o cancelamento de transações de forma eficaz, incluindo a gestão do retorno de milhas e a escolha do método de estorno, garantindo que o processo seja claro e transparente para todas as partes envolvidas.</p>
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
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
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
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
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
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Buscar por login:</strong> Campo para inserir o login do novo ofertante desejado.</li>
                <li><strong>Ofertante selecionado:</strong> Exibe as informações do novo ofertante escolhido.</li>
                <li><strong>Enviar e-mail:</strong> Botão para enviar um e-mail ao novo ofertante sobre a troca.</li>
                <li><strong>Saldo:</strong> Saldo de milhas disponíveis do novo ofertante.</li>
                <li><strong>Razão:</strong> Razão do ofertante definida por milhas / CPFs.</li>
                <li><strong>Valor:</strong> Valor das milhas no novo ofertante.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Tabela: Selecionar novo ofertante</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit73} alt="Imagem da tabela de novos ofertantes"></img>

            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
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
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li>Descrição das ofertas disponíveis.</li>
                <li>Condições de uso das milhas.</li>
                <li>Informações adicionais relevantes ao ofertante.</li>
            </ul>

            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit75} alt="Imagem da funcionalidade de ofertas detalhadas"></img>

            <p>Esta funcionalidade oferece um fluxo claro para trocar de vendedor, garantindo que todas as informações relevantes estejam disponíveis para facilitar a decisão do usuário e assegurar uma troca eficiente.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Motivos para troca de ofertante</h2>
            <p>A troca de ofertante deve ser feita com atenção, pois um motivo incorreto pode invalidar ofertas e impedir que o saldo de milhas seja utilizado.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit76} alt="Imagem dos motivos para troca de ofertante"></img>

            <h2>Abaixo estão os motivos disponíveis para a troca de ofertante:</h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Senha incorreta:</strong> A senha do ofertante atual está incorreta, impossibilitando a emissão da passagem.</li>
                <li><strong>Saldo insuficiente:</strong> O ofertante atual não possui saldo de milhas suficiente para a transação desejada.</li>
                <li><strong>Sem beneficiários (CPFs) disponíveis:</strong> Não há CPFs disponíveis para serem utilizados na transação.</li>
                <li><strong>Conta bloqueada:</strong> O sistema informa que a conta do ofertante atual está bloqueada, impedindo a emissão. Atenção! Essa opção bloqueia o ofertante e envia para reanálise.</li>
                <li><strong>Não atende o telefone/WhatsApp:</strong> O ofertante atual não responde às tentativas de contato, dificultando a comunicação. Atenção! Essa opção bloqueia o ofertante e envia para reanálise.</li>
                <li><strong>Outros:</strong> Motivo específico que não se encaixa nas opções acima.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Tabela com motivos para troca de ofertante</h2>
            <p>Para consultar os motivos corretos para realizar a troca de ofertante você pode acessar este <a
      href="https://docs.google.com/presentation/d/1jgMuTNj611SpSR1HUlyb_yHfNEtFudmNf_Pd-kZqANE/edit#slide=id.p"
      className={styles.customlink}
      target="_blank" // Abre o link em uma nova aba
      rel="noopener noreferrer" // Melhora a segurança ao abrir um link externo
    >
      material
    </a>  (<a
      href="https://docs.google.com/presentation/d/1jgMuTNj611SpSR1HUlyb_yHfNEtFudmNf_Pd-kZqANE/edit#slide=id.p"
      className={styles.customlink}
      target="_blank" // Abre o link em uma nova aba
      rel="noopener noreferrer" // Melhora a segurança ao abrir um link externo
    >
      https://docs.google.com/presentation/d/1jgMuTNj611SpSR1HUlyb_yHfNEtFudmNf_Pd-kZqANE/edit#slide=id.p
    </a>)</p>
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
'Lógica de negócio': {
    title: 'Lógica de negócio',
    videoUrl: 'https://www.youtube.com/embed/jJ_fHX0ImvI',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Lógica de negócio</h1>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoes00} alt="Imagem da lógica de negócio"></img>

            <p>A lógica de transações da Maxmilhas envolve uma série de etapas estruturadas para garantir que a compra e a emissão de passagens aéreas sejam realizadas de forma eficiente e segura. Abaixo estão os principais passos do processo:</p>
            
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Compra de passagem no site</h2>
            <p>O cliente seleciona a passagem aérea desejada e realiza a compra diretamente no site da Maxmilhas, utilizando dinheiro.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Análise do pagamento</h2>
            <p>Após a compra, o pagamento passa por uma análise de segurança e validação. Esse processo pode levar até 12 horas para ser concluído. Durante esse período, a equipe da Maxmilhas verifica a legitimidade do pagamento.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Criação da transação no cockpit</h2>
            <p>Uma vez que o pagamento é aprovado, a transação é automaticamente criada no sistema Cockpit, a plataforma administrativa da Maxmilhas. O Cockpit conecta ofertantes de milhas e realiza a gestão da emissão de passagens.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Emissão com milhas ofertadas</h2>
            <p>Utilizando as milhas ofertadas pelos vendedores no sistema, a Maxmilhas efetua a emissão das passagens aéreas, garantindo que o cliente obtenha a passagem com o melhor custo-benefício.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>5. Envio do localizador ao cliente</h2>
            <p>Após a emissão da passagem, o cliente recebe o código localizador da sua reserva em até 24 horas. Esse localizador permite que o cliente acompanhe e gerencie a sua viagem diretamente com a companhia aérea.</p>

            <p>Essa sequência de etapas é fundamental para garantir que a compra e emissão de passagens com milhas sejam feitas de maneira ágil e segura, proporcionando uma boa experiência para o cliente.</p>
        </div>
    ),
},
'Iniciando transações': {
    title: 'Iniciando transações',
    videoUrl: 'https://www.youtube.com/embed/ByCL79OseMI',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Iniciando transações</h1>
            <p>Para dar início ao processo de emissão de passagens aéreas utilizando o sistema Cockpit da Maxmilhas, é necessário seguir os seguintes passos:</p>
            
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Efetuar login</h2>
            <p>Acesse o sistema Cockpit utilizando suas credenciais de login.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit01} alt="Imagem de login no Cockpit"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Menu lateral</h2>
            <p>No painel lateral, navegue até a opção Cockpit.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit05} alt="Imagem do menu lateral"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Selecionar "completo"</h2>
            <p>Dentro da opção Cockpit, selecione a aba completa para ter acesso às funcionalidades completas de emissão.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Escolher uma aba para emissões</h2>
            <p>Escolha a aba correspondente onde deseja realizar as emissões (como a aba específica para cada companhia aérea ou categoria de emissão).</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit31} alt="Imagem da aba de emissões"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>5. Filtrar transações</h2>
            <p>Aplique as opções de filtragem de acordo com as transações que você deseja processar, como filtragem por companhia aérea, número de passageiros ou outros critérios disponíveis.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit32} alt="Imagem da filtragem de transações"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>6. Iniciar emissões</h2>
            <p>Após aplicar os filtros, clique no botão Iniciar emissão para começar a processar as transações selecionadas.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit82} alt="Imagem do botão de iniciar emissões"></img>
        </div>
    ),
},
'Observações': {
    title: 'Observações',
    videoUrl: 'https://www.youtube.com/embed/s4ksA7LTy-A',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Tipos de comentários</h1>
            <p>As transações na Maxmilhas incluem um campo de comentários que registra informações importantes sobre cada emissão. Esses comentários são gerados automaticamente pelos logs da emissão ou podem ser inseridos manualmente pelos analistas. Abaixo estão alguns dos principais tipos de comentários que você pode encontrar:</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit51} alt="Imagem de exemplos de comentários de emissão"></img>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Emissão automática ou nome do analista</h3>
            <p>Indica que a transação foi processada automaticamente pelo sistema ou por um analista específico.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Erro indefinido ao aceitar termos de pagamento</h3>
            <p>Refere-se a uma falha inesperada ao tentar aceitar os termos de pagamento.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Troca de ofertante manual</h3>
            <p>Houve uma alteração manual no ofertante devido a uma necessidade específica.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Erro: usuário e/ou senha inválidos</h3>
            <p>As credenciais fornecidas para login não foram aceitas.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>5. Erro ao preencher dados dos passageiros</h3>
            <p>Problema na inserção das informações dos passageiros durante a emissão.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>6. Problema ao localizar voo</h3>
            <p>A tentativa de localizar o voo falhou.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>7. Oferta inválida ou inexistente</h3>
            <p>A oferta relacionada à transação não é válida ou não está disponível.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>8. Erro ao validar detalhes da ordem</h3>
            <p>Falha na verificação dos detalhes da transação.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>9. Passou da página de pagamento: verificar LOC</h3>
            <p>Alerta que a transação avançou além da etapa de pagamento.
            <p style={{ color: 'red' }}>
  <strong>Atenção:</strong> É necessário verificar o extrato do ofertante para confirmar a emissão e evitar duplicidade.
</p>

            </p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>10. Cancelado pelo timeout</h3>
            <p>Transação cancelada devido a um tempo limite excedido.</p>
            <p style={{ color: 'red' }}>
  <strong>Atenção:</strong> É necessário verificar o extrato do ofertante para confirmar a emissão e evitar duplicidade.
</p>

    


            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>11. Inconsistência na quantidade de milhas</h3>
            <p>A quantidade de milhas atribuída não corresponde à expectativa.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>12. Erro ao enviar mensagem para API</h3>
            <p>Erro técnico ao tentar se comunicar com a API de emissão.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>13. Timeout ao tentar login</h3>
            <p>Falha ao fazer login na conta devido a um tempo limite excedido.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>14. Erro ao pular etapa de bagagem</h3>
            <p>Erro inesperado ao tentar avançar na etapa de bagagem.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>15. Voo de ida não encontrado</h3>
            <p>A busca pelo voo de ida não teve sucesso.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>16. Milhas insuficientes</h3>
            <p>Saldo de milhas não é suficiente para completar a transação.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>17. Passageiro sem CPF</h3>
            <p>Um dos passageiros não possui um CPF válido para a emissão.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>18. Erro ao cadastrar beneficiário</h3>
            <p>Houve um problema ao registrar as informações do beneficiário.</p> <p style={{ color: 'red' }}>
  <strong>Atenção:</strong> É necessário verificar se o passageiro foi registrado na lista de beneficiários para evitar queima de CPFs.
</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>19. Taxa de embarque maior</h3>
            <p>Taxa de embarque superior ao valor previsto na transação.</p>
        </div>
    ),
},

'Verificando quantidade de milhas e voo disponível': {
    title: 'Verificando quantidade de milhas e voo disponível',
    videoUrl: 'https://www.youtube.com/embed/Jj2BJ0zaY74',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Verificando quantidade de milhas e voo disponível</h1>
            <p>Após iniciar uma transação no sistema Cockpit, o próximo passo é garantir que os dados estejam alinhados com a realidade da companhia aérea. Para isso, é necessário verificar se o voo e a quantidade de milhas estão corretos.</p>
            
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Acessar o site da companhia aérea</h2>
            <p>Acesse o site da companhia aérea escolhida para a emissão da passagem.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam00} alt="Imagem do site da companhia aérea"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Buscar pelo voo</h2>
            <p>Procure o voo exato que foi inserido no Cockpit, verificando:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Data do voo:</strong> Confirme se a data está correta e se o voo ainda está disponível para emissão.</li>
                <li><strong>Horário do voo:</strong> Verifique se o horário de partida e chegada corresponde ao informado.</li>
                <li><strong>Número do voo:</strong> Confirme o número do voo para garantir que se trata do voo correto.</li>
            </ul>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit83} alt="Imagem da busca pelo voo"></img>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam01} alt="Imagem da busca pelo voo"></img>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam02} alt="Imagem da busca pelo voo"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Verificar milhas</h2>
            <p>Certifique-se de que a quantidade de milhas exigida para a emissão no site da companhia aérea está de acordo com o valor indicado no Cockpit. Caso tenha ocorrido um aumento de milhas, será necessário ajustar a transação ou buscar alternativas.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit84} alt="Imagem da verificação de milhas"></img>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam03} alt="Imagem da verificação de milhas"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Verificar a tarifa</h2>
            <p>Além das milhas, é importante garantir que a tarifa selecionada está correta. Verifique se a tarifa correspondente no site da companhia (Light, Executive, etc.) é a mesma que está registrada no Cockpit. Qualquer divergência na tarifa também deve ser ajustada para evitar problemas na emissão.</p>
            
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Procedimento para aumento de milhas</h2>
            <p>Caso você identifique um aumento na quantidade de milhas exigida para o voo de ida e volta, siga as etapas abaixo para atualizar as informações no Cockpit:</p>
            
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>5. Verificar a quantidade de milhas</h3>
            <p>Acesse o site da companhia aérea e procure pelo voo de ida e volta. Certifique-se de verificar a quantidade de milhas exigida para a emissão do bilhete. Compare com o valor que foi inicialmente registrado no Cockpit.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam04} alt="Imagem da verificação da quantidade de milhas"></img>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>6. Atualizar as milhas no Cockpit</h3>
            <p>Se houver um aumento na quantidade de milhas, retorne ao Cockpit. Localize a transação correspondente e edite a quantidade de milhas para refletir o novo valor exigido pela companhia aérea. Certifique-se de que todas as informações estão corretas antes de salvar as alterações.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam05} alt="Imagem da atualização das milhas no Cockpit"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Resumo do processo</h2>
            <p>O fluxo da verificação da quantidade de milhas e voo disponível é estruturado para garantir clareza e eficiência. As informações exibidas e as etapas para verificar os dados asseguram que a emissão da passagem ocorra de maneira eficaz e segura.</p>
        </div>
    ),
},
'Cadastrando passageiros': {
    title: 'Cadastrando passageiros',
    videoUrl: 'https://www.youtube.com/embed/8fOnyjC0AOE',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Cadastrando passageiros</h1>
            <p>Ao acessar o site da companhia aérea para cadastrar os passageiros, siga as orientações abaixo para garantir que todas as informações sejam inseridas corretamente, de acordo com os dados disponíveis no Cockpit:</p>
            
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Informações do passageiro</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit62} alt="Imagem das informações do passageiro" />

            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Nome:</strong> Insira o primeiro nome do passageiro conforme registrado no Cockpit.</li>
                <li><strong>Sobrenome:</strong> Para voos nacionais, utilize o último sobrenome do passageiro. Para voos internacionais, insira o nome completo.</li>
                <li><strong>Sufixo:</strong> Se aplicável, adicione o sufixo do passageiro (ex.: Jr., Sr., etc.).</li>
                <li><strong>CPF:</strong> Preencha com o CPF do passageiro. Este dado é essencial para identificação nas companhias aéreas. (Atenção! Na cia LATAM, utilize o CPF do ofertante de milhas para poder prosseguir para a página de pagamento).</li>
                <li><strong>RG:</strong> Insira o número do RG do passageiro.</li>
                <li><strong>Passaporte:</strong> Para passageiros estrangeiros ou em voos internacionais, forneça o número do passaporte.</li>
                <li><strong>Data de expiração do passaporte:</strong> Inclua a data de expiração do passaporte, garantindo que ele esteja válido para a viagem.</li>
                <li><strong>País emissor:</strong> Indique o país que emitiu o passaporte.</li>
            </ul>

            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam04} alt="Imagem das informações adicionais" />

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Informações adicionais</h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Data de nascimento:</strong> Insira a data de nascimento do passageiro, conforme registrado no Cockpit.</li>
                <li><strong>E-mail:</strong> Utilize o email do ofertante de milhas. Esse contato é importante para enviar confirmações e informações sobre a passagem.</li>
                <li><strong>Telefone:</strong> Insira o telefone do ofertante de milhas, que será utilizado para eventuais comunicações ou notificações.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Revisão e confirmação</h2>
            <p>Após preencher todos os campos, revise as informações inseridas para garantir que não haja erros.</p>
            <p>A precisão dos dados é importante para evitar problemas durante o embarque e garantir que a emissão da passagem ocorra sem contratempos.</p>
        </div>
    ),
},
'Página de pagamento': {
    title: 'Página de pagamento',
    videoUrl: 'https://www.youtube.com/embed/tp6y3krVXSw',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Página de pagamento</h1>
            <p>Ao acessar a página de pagamento para finalizar a compra da passagem, siga estas etapas para garantir que o processo seja realizado corretamente:</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Conferir dados do voo e da compra</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam05} alt="Imagem da conferência de dados do voo"></img>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam06} alt="Imagem da conferência da compra"></img>

            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Taxa de embarque:</strong> Verifique se a taxa de embarque exibida está correta. Esse valor é fundamental, pois influencia o limite do cartão de crédito virtual que será gerado.</li>
                <li><strong>Pontos:</strong> Confira a quantidade de milhas (pontos) que será utilizada para a compra da passagem.</li>
                <li><strong>Data do voo:</strong> Confirme que a data do voo está correta e corresponde ao que foi escolhido durante a pesquisa.</li>
                <li><strong>Horário:</strong> Verifique o horário de partida e chegada para garantir que está tudo conforme esperado.</li>
                <li><strong>Voo de ida e volta:</strong> Revise os detalhes de ambos os trechos da viagem (ida e volta) para assegurar que não há discrepâncias.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Adicionar cartão de crédito</h2>
            <p>Após verificar todas as informações, clique no botão para adicionar cartão de crédito.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam07} alt="Imagem da adição do cartão de crédito"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Gerar cartão de crédito virtual</h2>
            <p>Voltar ao Cockpit: Navegue de volta até o Cockpit no cartão da transação correspondente.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit86} alt="Imagem do Cockpit"></img>

            <p>Clique no ícone de gerar cartão de crédito. Isso gerará um cartão de crédito virtual que será utilizado para o pagamento da passagem.</p>
            <p><strong>Limite do cartão:</strong> Lembre-se que o limite do cartão de crédito virtual é baseado na taxa de embarque, por isso é importante que esse valor esteja correto.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Preencher dados do cartão</h2>
            <p>Preencha os dados solicitados do cartão de crédito virtual gerado, incluindo:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li>Número do cartão</li>
                <li>Data de validade</li>
                <li>Código de segurança (CVV)</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>5. Efetuar o pagamento</h2>
            <p>Após preencher todas as informações do cartão, clique no botão para efetuar pagamento. Aguarde a confirmação da transação. Se tudo estiver correto, você deverá receber um recibo da compra, que incluirá os detalhes do voo e as informações do pagamento realizado.</p>

            <p>Seguindo estas etapas, você poderá realizar o pagamento de forma eficiente e sem erros, assegurando a finalização da compra da passagem aérea.</p>
        </div>
    ),
},
'E-tickets': {
    title: 'E-tickets',
    videoUrl: 'https://www.youtube.com/embed/U5PpiyU2qjc',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>E-tickets</h1>
            <p>Após finalizar o pagamento da passagem, um e-ticket será gerado automaticamente. O e-ticket contém todas as informações necessárias sobre o voo e serve como comprovante da compra. Siga os passos abaixo para garantir que tudo esteja devidamente registrado:</p>
            
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Gerar o e-ticket</h2>
            <p>Após a confirmação do pagamento, o sistema gerará um e-ticket com os detalhes do voo, incluindo:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li>Número do voo</li>
                <li>Data e hora da partida</li>
                <li>Dados do passageiro</li>
                <li>Taxas e informações de bagagem</li>
            </ul>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam08} alt="Imagem do e-ticket"></img>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam09} alt="Imagem dos dados do e-ticket"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Capturar o e-ticket</h2>
            <p>Utilize uma ferramenta de captura de tela (como Captura e Esboço, Lightshot, ou outra de sua preferência) para salvar uma cópia do e-ticket.</p>
            <p>Dica: Para capturar a tela, você pode usar teclas de atalho como Print Screen ou ferramentas específicas para captura que permitem selecionar apenas a parte da tela desejada.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Voltar ao Cockpit</h2>
            <p>Retorne ao sistema Cockpit no cartão da transação correspondente.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Inserir e-ticket</h2>
            <p>Clique no botão Inserir e-ticket para dar continuidade ao processo de registro do e-ticket.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit87} alt="Imagem da tela de inserção do e-ticket"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>5. Preencher Informações necessárias</h2>
            <p>Digite as seguintes informações na tela de emissão:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li>Número do e-ticket: Insira o número gerado do e-ticket que você capturou.</li>
                <li>Login do programa de fidelidade: Forneça o login que você utilizou para a emissão da passagem.</li>
                <li>Número da compra para a companhia aérea: Insira o número de compra associado ao e-ticket (se aplicável).</li>
                <li>Valor da bagagem paga na companhia aérea: Informe o valor que foi pago por qualquer bagagem adicional.</li>
                <li>Cartão de crédito utilizado: Se solicitado, forneça os dados do cartão de crédito que foi utilizado para a compra.</li>
            </ul>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit88} alt="Imagem da tela de preenchimento das informações do e-ticket"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>6. Fazer upload do e-ticket</h2>
            <p>Faça o upload da captura de tela do e-ticket que você salvou anteriormente. Este passo é importante para garantir que a transação e a emissão estejam devidamente documentadas.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>7. Mensagens de sucesso e erro</h2>
            <p>Após a inserção do e-ticket, o sistema verificará as informações e fornecerá uma mensagem de retorno:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Mensagem de sucesso:</strong> Se todos os dados estiverem corretos, aparecerá a mensagem: "Sucesso: e-ticket inserido com sucesso."</li>
                <li><strong>Mensagem de erro na checagem automática:</strong> Se houver algum erro na validação automática, a mensagem será: "Erro: dados inválidos.".</li>
            </ul>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit89} alt="Imagem da mensagem de sucesso do e-ticket"></img>

            <p>Esta funcionalidade oferece um fluxo claro para garantir que tudo esteja devidamente registrado e que a transação esteja completa.</p>
        </div>
    ),
},
'Emissões automáticas': {
    title: 'Emissões automáticas',
    videoUrl: 'https://www.youtube.com/embed/CgYw48GkkaM',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Emissões automáticas</h1>
            <p>As emissões automáticas facilitam o processo de emissão de passagens, permitindo que a transação seja realizada de forma rápida e eficiente. No entanto, é fundamental seguir algumas orientações para garantir que tudo ocorra sem problemas.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Iniciar emissões automáticas</h2>
            <p>Para iniciar o processo de emissão automática, clique no botão Emitir automaticamente. Este passo aciona o sistema para emitir as passagens de maneira automática, utilizando as informações previamente inseridas.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit90} alt="Imagem para iniciar emissões automáticas" />

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Verificação do log de emissão</h2>
            <p>Importante: Antes de iniciar a emissão automática, verifique o log de emissão automática e comentários. Essa verificação é essencial para identificar se a transação já foi emitida ou se ocorreu um erro de pagamento.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit91} alt="Imagem do log de emissão" />
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit92} alt="Imagem adicional do log de emissão" />
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit51} alt="Imagem de erros no log de emissão" />

            <p>Evite duplicidade: Nunca envie uma transação na emissão automática que já esteja em processo de emissão. O sistema pode gerar passagens duplicadas, resultando em complicações na gestão das reservas.</p>
            <p>Erro após pagamento: Atenção! Caso a transação apresente logs ou comentários de erro após pagamento, é necessário acessar a conta do ofertante de milhas e verificar se o bilhete foi emitido ou não. Após realizar a verificação, copie e cole o extrato do ofertante nos comentários da transação.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Quantidade de milhas e ofertantes</h2>
            <p>Após verificar os logs e comentários, escolha um ofertante de acordo com o saldo, número de passageiros, média e razão definidos para a transação.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Monitoramento do status da transação</h2>
            <p>Após iniciar a emissão automática, monitore o status da transação. Isso pode ser feito acessando a aba de status no Cockpit, onde você poderá ver:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li>Se a emissão foi bem-sucedida.</li>
                <li>Se houve alguma falha ou erro durante o processo.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>5. Mensagens de confirmação</h2>
            <p>Após a emissão automática, aguarde as mensagens de confirmação que indicam o sucesso ou falha do processo:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Sucesso:</strong> Uma mensagem indicando que a emissão foi concluída com êxito.</li>
                <li><strong>Erro:</strong> Caso haja falhas, o sistema fornecerá uma mensagem detalhando o problema, permitindo que você tome as ações corretivas necessárias.</li>
            </ul>

            <p>Esse procedimento assegura que o processo de emissão automática seja realizado de maneira eficiente, minimizando o risco de erros e duplicidades nas transações.</p>
        </div>
    ),
},
'Emissões semiautomáticas': {
    title: 'Emissões semi-automáticas',
    videoUrl: 'https://www.youtube.com/embed/XVJyZSMHCIc',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Emissões semi-automáticas</h1>
            <p>As emissões semi-automáticas oferecem uma maneira prática de gerenciar o processo de emissão de passagens, combinando automação com supervisão humana. A seguir, você encontrará os passos detalhados e as opções disponíveis na extensão para facilitar a emissão.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Iniciar a transação no cockpit</h2>
            <p>Acesse o sistema Cockpit e inicie a transação desejada, garantindo que todas as informações necessárias estejam corretas.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Inserir código da transação na extensão</h2>
            <p>Utilize a extensão do navegador específica para emissões semi-automáticas, que pode ser instalada através do seguinte link: Assistente de Navegação.</p>
            <p>Insira o código da transação do Cockpit na extensão.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit93} alt="Imagem da inserção do código na extensão"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Abertura do site da companhia aérea</h2>
            <p>Após inserir o código, a extensão abrirá automaticamente o site da companhia aérea selecionada e começará a preencher os dados da transação.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Verificação dos dados</h2>
            <p>Importante: Revise cuidadosamente todas as informações preenchidas pela extensão. Confirme se os dados estão corretos antes de prosseguir.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>5. Opções da extensão</h2>
            <p>A extensão possui várias funcionalidades que facilitam o processo de emissão:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Emissão:</strong> Inicia o processo de emissão com os dados fornecidos.</li>
                <li><strong>Pagamento:</strong> Permite que você efetue o pagamento da passagem, digitando o código da compra.</li>
                <li><strong>Histórico:</strong> Acesso ao histórico de transações, permitindo que você revise emissões anteriores.</li>
                <li><strong>Transação manual (Criar):</strong> Permite a criação de uma nova transação manualmente, caso necessário.</li>
                <li><strong>Checagem:</strong> Verifica as informações relacionadas à transação, garantindo que tudo esteja em ordem.</li>
                <li><strong>Chipeira smiles:</strong> Utilizada para obter o código de verificação para pagamento smiles.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>6. Finalização e captura do e-ticket</h2>
            <p>Após o pagamento, a companhia aérea gerará um e-ticket. Use uma ferramenta de captura de tela para salvar uma cópia do e-ticket como comprovante.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>7. Conclusão</h2>
            <p>Após capturar o e-ticket, retorne ao Cockpit para atualizar o status da transação e comunicar a confirmação da emissão aos passageiros.</p>
        </div>
    ),
},

'Erro após pagamento': {
    title: 'Erro após pagamento',
    videoUrl: 'https://www.youtube.com/embed/CltMW0m8Hsw',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Erro após pagamento</h1>
            <p>A aba de erro após pagamento é uma aba importante para gerenciar transações que não foram concluídas corretamente durante o processo de emissão automática. Esta seção permite que você identifique e resolva problemas que podem ocorrer, garantindo que as passagens sejam emitidas corretamente.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit94} alt="Imagem da aba de erro após pagamento"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Identificação de transações com erro</h2>
            <p>Na aba de erro, você encontrará uma lista de transações que tiveram problemas durante o pagamento na emissão automática.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Acesso à conta do ofertante</h2>
            <p>Para cada transação com erro, acesse a conta do ofertante associada à transação. Isso é importante para verificar o status da emissão da passagem.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Verificação da emissão da passagem</h2>
            <p>Verifique se a passagem foi efetivamente emitida. Em alguns casos, mesmo que o pagamento tenha falhado, o bilhete pode ter sido gerado. Certifique-se de que a passagem não esteja emitida antes de prosseguir.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Documentação do erro</h2>
            <p>Após verificar o status da passagem, copie e cole o extrato da conta do ofertante nos comentários da transação. Isso fornece um registro claro do que ocorreu durante o processo de pagamento.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>5. Emissão manual da passagem</h2>
            <p>Se a passagem não tiver sido emitida, prossiga com a emissão da passagem de forma manual. Certifique-se de seguir todos os procedimentos necessários para garantir que a transação seja concluída corretamente.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Conclusão</h2>
            <p>A aba de erro após pagamento é essencial para assegurar que todas as transações sejam devidamente monitoradas e que eventuais problemas sejam rapidamente resolvidos. Este processo ajuda a manter a confiança dos clientes e a eficiência do sistema de emissão.</p>
        </div>
    ),
},
'Erro aumento': {
    title: 'Erro aumento',
    videoUrl: 'https://www.youtube.com/embed/-At_cLorYyw',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Erro/aumento</h1>
            <p>A aba Erro/Aumento é uma funcionalidade importante para gerenciar transações que enfrentam problemas, principalmente relacionadas à Gol. Esta seção permite que você monitore transações que estão aguardando a resolução de aumentos de milhas ou erros no site.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit95} alt="Imagem da aba Erro/Aumento"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Identificação de transações com erro ou aumento</h2>
            <p>Nesta aba, você encontrará uma lista de transações que tiveram aumento de milhas ou algum erro no site. É fundamental ficar atento a essas transações para garantir que sejam tratadas de maneira adequada.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Monitoramento do status</h2>
            <p>As transações listadas nesta aba ficam aguardando por um período de 1 a 2 horas. Durante esse tempo, você deve monitorar o status do voo para verificar se ele volta a ficar disponível ou se as milhas diminuem em caso de aumento.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Ação necessária</h2>
            <p>Após o período de espera, avalie o resultado:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li>Se o voo voltar a ficar disponível: Continue o processo de emissão normalmente.</li>
                <li>Se houver um aumento de milhas: Efetue o cancelamento da transação.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Conclusão</h2>
            <p>A aba Erro/Aumento é essencial para garantir a eficácia na gestão de transações que enfrentam dificuldades, especialmente no caso de aumentos de milhas. O monitoramento cuidadoso dessas transações ajudará a evitar perdas e a otimizar o processo de emissão.</p>
        </div>
    ),
},
'Bagagem gol': {
    title: 'Bagagem Gol',
    videoUrl: 'https://www.youtube.com/embed/-mEn4IfUu-4',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Página de bagagem</h1>
            <p>Na página de bagagem, você encontrará uma lista de transações da Gol que foram finalizadas e, agora, requerem a adição de bagagens. É fundamental garantir que todos os detalhes estejam corretos para evitar problemas na hora do embarque.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit96} alt="Imagem da página de bagagem"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Acesso ao site da Gol</h2>
            <p>Para adicionar as bagagens às suas transações, você precisará acessar o site da Gol. Utilize o seguinte link: Voe Gol - Minhas Viagens.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Processando as adições de bagagem</h2>
            <p>No site, você deverá:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li>Localizar a sua viagem utilizando as informações pertinentes.</li>
                <li>Após encontrar a sua viagem, siga as instruções para adicionar a quantidade de bagagens desejada.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Importância da adição de bagagens</h2>
            <p>A adição correta de bagagens é essencial para garantir que o cliente tenha uma experiência tranquila no aeroporto. A página de bagagem é uma etapa importante na finalização das suas transações com a Gol. Certifique-se de realizar esse processo corretamente para garantir que todas as suas necessidades de viagem sejam atendidas.</p>
        </div>
    ),
},
'Checagem': {
    title: 'Aba de checagem',
    videoUrl: 'https://www.youtube.com/embed/bkYs5oNC5dU',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Aba de checagem</h1>
            <p>A aba de checagem é onde você encontrará transações que ficaram pendentes devido a erros na verificação automática. Essa aba é importante para garantir que todas as informações estejam corretas antes da emissão final do bilhete.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit97} alt="Imagem da aba de checagem"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Verificação das informações</h2>
            <p>Ao acessar a aba, você deve:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li>Verificar se as informações do print da tela inseridas estão corretas. Isso inclui:</li>
                <ul style={{ listStyleType: 'circle', marginLeft: '30px' }}>
                    <li><strong>Nome do passageiro (PAX):</strong> Verifique o nome do passageiro.</li>
                    <li><strong>Dados do voo:</strong> Confira a data, hora e número do voo.</li>
                    <li><strong>Dados de pagamento:</strong> Revise as informações do cartão e valores.</li>
                </ul>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Aprovação manual</h2>
            <p>Após a verificação, você pode:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li>Confirmar manualmente a transação, anotando o motivo da aprovação.</li>
                <li>Ou enviar novamente para a checagem automática se preferir que o sistema realize a verificação.</li>
            </ul>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit98} alt="Imagem de confirmação manual"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Acesso ao extrato do ofertante</h2>
            <p>Se a tela de confirmação não foi inserida:</p>
            <p>É necessário acessar o extrato do ofertante para verificar o bilhete e os dados na conta dele.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Tratamento de dados incorretos</h2>
            <p>Se os dados estiverem errados:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li>Cancelar o bilhete incorreto e reemitir a transação.</li>
                <li>Se não houver como reemitir, a transação deve ser cancelada.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>5. Formulário FNC15</h2>
            <p>Caso a transação tenha sido paga através do Pagar.me, o formulário FNC15 deve ser preenchido para dar seguimento ao processo de cancelamento.</p>

            <p>A aba de checagem é um passo importante para garantir que as informações estejam corretas e que a transação seja finalizada com sucesso. Realize as verificações necessárias e siga os procedimentos para garantir uma experiência de emissão de bilhetes sem problemas.</p>
        </div>
    ),
},
'Suspeita de fraude': {
    title: 'Suspeita de fraude',
    videoUrl: 'https://www.youtube.com/embed/rxWNBBs597g',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Suspeita de fraude</h1>
            <p>As transações marcadas como suspeitas de fraude devem ser verificadas cuidadosamente antes de prosseguir com a emissão.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit98} alt="Imagem de suspeita de fraude"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Método de pagamento</h2>
            <p>Payme ou Pagar.me: Se o método de pagamento for um desses, pode prosseguir com a emissão sem verificações adicionais.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit99} alt="Imagem do método de pagamento"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Cartão de crédito</h2>
            <p>Se o pagamento foi feito com cartão de crédito, siga os passos abaixo:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Verifique o perfil do Cliente:</strong> Abra o perfil do cliente e revise as observações salvas. Essas observações conterão orientações específicas e o motivo pelo qual o cliente está com o status de suspeita de fraude. Exemplo de anotação: “Atenção: não emitir para esse cliente, pois ele não quitou o débito.”</li>
                <li><strong>Zendesk:</strong> Busque no Zendesk usando o código da compra (e não pelo e-mail do cliente). Procure por e-mails com o título "Contestação de Pagamento XXXXXXX - MaxMilhas". A marcação deve ser realizada usando o código da compra com CBK.</li>
                <li><strong>E-mail encontrado:</strong> Se encontrar esse e-mail e a conta continuar marcada como suspeita, significa que o cliente não regularizou o débito. NÃO EMITIR a passagem nesse caso.</li>
                <li><strong>E-mail não encontrado:</strong> Se não houver e-mail relacionado à compra contestada, você pode proceder com a emissão, mas deve notificar o grupo de prevenção.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Marcação como suspeito</h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Alertas específicos:</strong> Se a transação estiver marcada como suspeita com alertas "Recuperação" ou "Ostensiva MM", não deve ser emitida e deve-se notificar o grupo de prevenção imediatamente.</li>
                <li><strong>Marcação por ofertas:</strong> Caso a marcação tenha ocorrido devido a ofertas, as observações indicarão algo como: “[REVENDA] Cobrança - Não emitir ou liberar ofertas antes da quitação do débito.” Nesse caso, também não deve prosseguir com a emissão.</li>
            </ul>

            <p>Essas diretrizes são essenciais para evitar problemas e garantir a segurança das transações.</p>
        </div>
    ),
},
'Fnc 15': {
    title: 'Estorno de transações incorretas',
    videoUrl: 'https://www.youtube.com/embed/pu3o-Ku-NQE',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Estorno de transações incorretas</h1>
            <p>
                Quando uma transação é emitida incorretamente, seja por dados errados, voo incorreto ou quantidade de milhas superior à receita mínima, é necessário tomar medidas corretivas para evitar prejuízos. Um dos principais procedimentos é cancelar o localizador na companhia aérea e emitir a passagem novamente, usando o mesmo ofertante.
            </p>
            
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Situações que exigem ação</h2>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Dados incorretos ou voo incorreto</h3>
            <p>
                Se a transação foi feita com dados do passageiro incorretos ou o voo escolhido foi errado, o procedimento padrão é cancelar o localizador na companhia aérea e refazer a emissão.
            </p>
          
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Quantidade de milhas acima da receita mínima</h3>
            <p>
                Quando a quantidade de milhas utilizada excede a receita mínima, também será necessário cancelar o localizador e refazer a emissão.
            </p>
          
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Ofertante sem milhas ou CPF para emissão</h3>
            <p>
                Caso o ofertante não tenha milhas suficientes ou CPF disponível para nova emissão, será necessário buscar outra solução, como abrir um FNC 15.
            </p>
         
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Aumento de milhas ou voo indisponível</h3>
            <p>
                Se houver aumento nas milhas necessárias para a emissão ou o voo se tornar indisponível, também será preciso cancelar o localizador e refazer a emissão.
            </p>
         
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Estorno via FNC 15</h2>
            <p>
                Quando o método de pagamento utilizado foi Pay.mee ou Pagar.me e a reemissão não for possível, será necessário solicitar um estorno por meio do FNC 15.
            </p>
       
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Procedimento para abrir o FNC 15</h2>
            <p>Acessar o Zendesk da MaxMilhas:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li>Entre na plataforma Zendesk da MaxMilhas para iniciar o processo de estorno.</li>
            </ul>
        
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Criar um novo ticket</h3>
            <p>
                Abra um novo ticket de solicitação, seguindo o procedimento padrão de criação de chamados.
            </p>
         
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Preencher o Formulário FNC 15</h3>
            <p>
                Preencha o formulário FNC 15 de acordo com o tutorial disponível neste    <a
      href="https://docs.google.com/presentation/d/1jgMuTNj611SpSR1HUlyb_yHfNEtFudmNf_Pd-kZqANE/edit#slide=id.p"
      className={styles.customlink}
      target="_blank" // Abre o link em uma nova aba
      rel="noopener noreferrer" // Melhora a segurança ao abrir um link externo
    >
      material
    </a>  (<a
      href="https://docs.google.com/presentation/d/1jgMuTNj611SpSR1HUlyb_yHfNEtFudmNf_Pd-kZqANE/edit#slide=id.p"
      className={styles.customlink}
      target="_blank" // Abre o link em uma nova aba
      rel="noopener noreferrer" // Melhora a segurança ao abrir um link externo
    >
      https://docs.google.com/presentation/d/1jgMuTNj611SpSR1HUlyb_yHfNEtFudmNf_Pd-kZqANE/edit#slide=id.p
    </a>). Certifique-se de seguir todas as instruções corretamente para evitar atrasos no processo de estorno.
            </p>
          
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Documentação do FNC 15</h2>
            <p>
                Após a criação do ticket, copie e cole o número do ticket nas observações da transação.
            </p>
        
            <p>
                O processo FNC 15 é uma ferramenta importante para garantir a resolução de erros em transações que não podem ser corrigidas com emissão imediata. Ao seguir os procedimentos adequados, você assegura a gestão eficiente dos erros e protege tanto a empresa quanto o cliente de prejuízos.
            </p>
        </div>
    ),
},
/* Curso Emissões Latam */

'Categoria de ofertantes latam': {
    title: 'Categoria de ofertantes latam',
    videoUrl: 'https://www.youtube.com/embed/wHHDGOumxaQ',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Programa de fidelidade LATAM Pass</h1>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoofertantes02} alt="Imagem do programa LATAM Pass"></img>
            <p>O Latam Pass é o programa de fidelidade da LATAM Airlines, uma das principais companhias aéreas da América Latina. Criado para premiar os clientes que viajam com a LATAM e suas companhias aéreas parceiras, o programa oferece diversas maneiras de acumular pontos e usufruir de benefícios exclusivos. Vamos explorar as principais características e vantagens do Latam Pass.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Acúmulo de pontos</h2>
            <h3 style={{ marginTop: '10px', marginBottom: '30px' }}>1.1 Como funciona</h3>
            <p>Os membros do Latam Pass acumulam pontos ao voar com a LATAM e suas companhias aéreas parceiras, além de realizar compras em estabelecimentos parceiros. Os pontos acumulados podem ser utilizados para a compra de passagens aéreas, upgrades de classe e outros benefícios.</p>

            <h3 style={{ marginTop: '10px', marginBottom: '30px' }}>1.2 Tipos de pontos</h3>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Pontos qualificáveis:</strong> Acumulados através de voos, que ajudam na progressão de categoria dentro do programa.</li>
                <li><strong>Pontos de bônus:</strong> Concedidos em promoções, parcerias e ofertas especiais, permitindo um acúmulo mais rápido.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Níveis de fidelidade</h2>
            <h3 style={{ marginTop: '10px', marginBottom: '30px' }}>2.1 Categorias de membros</h3>
            <p>O programa Latam Pass possui diferentes níveis de fidelidade, que proporcionam benefícios crescentes conforme o cliente acumula mais pontos e realiza mais voos. As categorias incluem:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Latam Pass:</strong> O nível básico, onde os membros começam a acumular pontos e têm acesso a promoções.</li>
                <li><strong>Gold:</strong> Oferece benefícios adicionais, como pontos de bônus e prioridade no check-in. Atenção! * Os ofertantes da categoria Gold têm mais chances de sucesso no pagamento de transações de voos internacionais e 24 horas *</li>
                <li><strong>Platinum:</strong> Inclui maiores vantagens, como acesso a salas VIP, maior acúmulo de pontos e check-in prioritário. Atenção! * Os ofertantes da categoria Platinum têm mais chances de sucesso no pagamento de transações de voos internacionais e 24 horas *</li>
                <li><strong>Diamante:</strong> O nível mais alto, com benefícios exclusivos, como acesso a salas VIP e milhas adicionais para voos.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Resgate de pontos</h2>
            <h3 style={{ marginTop: '10px', marginBottom: '30px' }}>3.1 Como resgatar</h3>
            <p>Os membros do Latam Pass podem resgatar seus pontos de várias maneiras, incluindo:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Passagens aéreas:</strong> Troca de pontos por passagens em voos da LATAM e de companhias aéreas parceiras.</li>
                <li><strong>Upgrades de classe:</strong> Utilização de pontos para atualizar a classe do voo.</li>
                <li><strong>Produtos e serviços:</strong> Troca de pontos por produtos em lojas parceiras e serviços exclusivos.</li>
            </ul>

            <h3 style={{ marginTop: '10px', marginBottom: '30px' }}>3.2 Promoções de resgate</h3>
            <p>O Latam Pass frequentemente realiza promoções que permitem aos membros resgatar passagens por um número reduzido de pontos, tornando as viagens ainda mais acessíveis.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Parcerias</h2>
            <h3 style={{ marginTop: '10px', marginBottom: '30px' }}>4.1 Parceiros de acúmulo</h3>
            <p>O programa Latam Pass possui parcerias com diversas empresas, permitindo que os membros acumulem pontos em compras e serviços, aumentando ainda mais as oportunidades de ganho.</p>
        </div>
    ),
},
'Acessando a conta do ofertante com a bifrost': {
    title: 'Acessando a conta do ofertante com a bifrost',
    videoUrl: 'https://www.youtube.com/embed/iFL2juaMFoY',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Acessando a conta do ofertante com a bifrost</h1>
            <p>A Bifrost é especificamente utilizada para efetuar logins no site da Latam através de sessões salvas. O processo inclui os seguintes passos:</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Iniciar o aplicativo</h2>
            <p>Iniciar o aplicativo da Bifrost e digitar o CPF do ofertante.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam10} alt="Iniciar o aplicativo Bifrost"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Conectar-se ao IP</h2>
            <p>Conectar-se ao IP do ofertante de milhas associado à transação.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam11} alt="Conectar-se ao IP do ofertante"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Abrir a extensão</h2>
            <p>Abrir a extensão Bifrost no navegador, inserir o CPF do ofertante na extensão.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam12} alt="Abrir a extensão Bifrost"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Login automático</h2>
            <p>A extensão fará o login automático no site da Latam utilizando a sessão salva previamente, permitindo a continuidade da emissão sem interrupções.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam13} alt="Login automático no site da Latam"></img>

            <p>Esse procedimento é fundamental para garantir a eficiência nas operações, especialmente quando os sites impõem restrições.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Criando sessões se não existirem</h2>
            <p>Caso não haja uma sessão salva, siga os passos abaixo para criar uma nova sessão:</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Inserir o CPF do ofertante</h3>
            <p>Na Bifrost, insira o CPF do ofertante. Se não houver sessão salva, aparecerá uma mensagem indicando que o "ofertante não possui sessão salva".</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam14} alt="Inserir o CPF do ofertante"></img>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Login manual</h3>
            <p>Vá ao site da Latam e faça o login manualmente utilizando o login e senha do ofertante.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam15} alt="Login manual no site da Latam"></img>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Salvar a sessão</h3>
            <p>Após efetuar o login, volte para a Bifrost e clique na opção de salvar sessão. Isso permitirá que você utilize essa sessão em futuras emissões.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Deslogando corretamente do ofertante</h2>
            <p>Para deslogar corretamente do ofertante e garantir que a sessão esteja encerrada:</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Logout na extensão</h3>
            <p>Vá até a extensão do navegador da Bifrost e clique em Logout.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam12} alt="Logout na extensão Bifrost"></img>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Logout no aplicativo</h3>
            <p>Após deslogar na extensão, clique em logout e, em seguida, no botão de desligar no aplicativo Bifrost.</p>

            <p>A VPN é uma ferramenta indispensável para garantir a segurança e privacidade no acesso à internet, principalmente no ambiente corporativo. Saber como usar a VPN corretamente é essencial para proteger os dados da empresa, garantindo o acesso seguro a redes e recursos internos de qualquer lugar.</p>
        </div>
    ),
},
'Erro na busca de voo': {
    title: 'Erro na busca de voo',
    videoUrl: 'https://www.youtube.com/embed/N9Kclbm9oKw',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Erro na busca de voo</h1>
            <p>Um dos problemas que pode ocorrer ao pesquisar voos no site da Latam é o erro que indica que "a busca demorou demais". Esse erro pode ser frustrante, mas existem algumas soluções práticas para resolver essa situação e garantir que você consiga realizar a pesquisa de forma eficiente.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Causas do erro</h2>
            <p>Esse erro geralmente ocorre devido a instabilidades na conexão ou problemas temporários no site. Contudo, existem algumas estratégias que você pode adotar para contornar essa situação.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Soluções</h2>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Pesquisar em dinheiro primeiro</h3>
            <p>Uma abordagem inicial é pesquisar o voo utilizando o valor em dinheiro. Siga os passos abaixo:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li>Acesse o site da Latam e busque a opção de pesquisa de voos.</li>
                <li>Insira as informações do voo (origem, destino, datas, etc.) e marque a pesquisa em dinheiro.</li>
                <li>Realize a busca e, assim que os resultados aparecerem, prossiga para a próxima etapa.</li>
            </ul>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam18} alt="Imagem da pesquisa em dinheiro"></img>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Duplicar a aba e marcar a pesquisa por pontos</h3>
            <p>Depois de realizar a pesquisa em dinheiro, siga esses passos:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li>Duplique a aba do navegador onde você está realizando a pesquisa.</li>
                <li>Na nova aba, altere a opção para pesquisa por pontos (milhas).</li>
                <li>Realize a busca novamente. Isso pode ajudar a contornar o erro e permitir que você veja os resultados desejados.</li>
            </ul>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam19} alt="Imagem da duplicação da aba"></img>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Utilizar o 4G do celular</h3>
            <p>Caso as opções acima não funcionem, você pode tentar o seguinte:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li>Desconecte-se do Wi-Fi e ative o roteador com o 4G do seu celular.</li>
                <li>Acesse o site da Latam pelo navegador e realize a pesquisa de voo.</li>
                <li>Encontrando o voo desejado, você pode voltar a se conectar ao Wi-Fi para finalizar a emissão.</li>
            </ul>

            <p>Essas soluções são eficazes para resolver o erro de busca de voo no site da Latam. Tentar diferentes abordagens, como pesquisar em dinheiro primeiro ou usar o 4G, pode ajudar a evitar frustrações e garantir que você consiga emitir suas passagens sem problemas.</p>
        </div>
    ),
},
'Cancelamento por aumento ou voo indisponível': {
    title: 'Cancelamento por aumento ou voo indisponível',
    videoUrl: 'https://www.youtube.com/embed/nfO9rhOVr1E',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Cancelamento por aumento ou voo indisponível</h1>
            <p>Se, após a verificação, você constatar que o voo está indisponível ou houve aumento de milhas, é necessário realizar o cancelamento da transação seguindo os passos abaixo:</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Remover o ofertante</h2>
            <p>Utilize o botão de trocar ofertante para remover o ofertante atual da transação. Isso é importante para evitar problemas futuros na emissão.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit46} alt="Imagem da remoção do ofertante"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Atualizar a página</h2>
            <p>Após remover o ofertante, atualize a página do Cockpit para garantir que todas as alterações sejam refletidas corretamente.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Iniciar o cancelamento</h2>
            <p>Clique no botão cancelar para iniciar o processo de cancelamento da transação.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit65} alt="Imagem do botão de cancelamento"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Escolher o motivo do cancelamento</h2>
            <p>Ao solicitar o cancelamento, selecione o motivo "Voo Indisponível" ou “Aumento de milhas” na lista de opções disponíveis.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit66} alt="Imagem da seleção do motivo do cancelamento"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>5. Confirmar o cancelamento</h2>
            <p>Siga as instruções na tela para confirmar o cancelamento e certifique-se de que todas as etapas foram concluídas corretamente.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Motivo do cancelamento</h2>
            <p>O usuário deve selecionar um motivo de cancelamento a partir das seguintes opções:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Voo indisponível na CIA:</strong> O voo não está disponível na companhia aérea.</li>
                <li><strong>Voo indisponível em um dos trechos:</strong> Um dos trechos do voo solicitado não está disponível.</li>
                <li><strong>Transação com mais de 1 dia na aba:</strong> A transação está na aba há mais de um dia e não foi finalizada.</li>
                <li><strong>Transação abaixo da receita mínima:</strong> O valor da transação não atinge a receita mínima esperada.</li>
                <li><strong>Suspeita de fraude:</strong> A transação levanta suspeitas de fraude, necessitando de cancelamento.</li>
                <li><strong>Sem depósito no prazo:</strong> O depósito não foi realizado dentro do prazo estipulado.</li>
                <li><strong>Re-emissão:</strong> A transação está sendo cancelada para uma re-emissão posterior.</li>
                <li><strong>Problema de pagamento da taxa de embarque:</strong> Houve um erro relacionado ao pagamento da taxa de embarque.</li>
                <li><strong>OTA - Trecho da irmã com aumento de milhas:</strong> A OTA está reportando um aumento nas milhas para um trecho específico.</li>
                <li><strong>OTA - Erro:</strong> Um erro geral ocorreu com a OTA durante o processo.</li>
                <li><strong>OTA - Cartão não autorizado:</strong> O pagamento foi negado devido a um cartão não autorizado.</li>
                <li><strong>OTA - Alteração de preço / Re-tarifado:</strong> O preço da passagem foi alterado ou retarifado.</li>
                <li><strong>Falta de ofertante:</strong> Não há ofertante disponível para prosseguir com a transação.</li>
                <li><strong>Erro no site da CIA:</strong> Ocorreu um erro no site da companhia aérea.</li>
                <li><strong>Erro no site - Tarja amarela (CIA amarela):</strong> Um erro específico no... (completar conforme necessário)</li>
            </ul>
        </div>
    ),
},
'Emissões manuais latam': {
    title: 'Emissões manuais latam',
    videoUrl: 'https://www.youtube.com/embed/pTJiqCFyPCI',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Emissões manuais</h1>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoofertantes03} alt="Imagem da emissão manual"></img>
            <p>A emissão manual é o processo de compra de passagens aéreas onde os dados são inseridos manualmente no sistema, ao contrário das emissões automáticas, que são realizadas de forma automatizada.</p>
            
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Importância</h2>
            <p>Seguir os procedimentos corretos durante a emissão manual é importante para evitar erros que possam resultar em problemas na viagem, como a falta de informações ou dados incorretos.</p>
            
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Verificação de milhas e disponibilidade de voo</h2>
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Passos:</h3>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '10px', marginBottom: '30px' }}>
                <li>Acesse o sistema e verifique a quantidade de milhas disponíveis para o ofertante.</li>
                <li>Confirme a disponibilidade do voo desejado.</li>
            </ul>
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Importante</h3>
            <p>Atualize a quantidade de milhas antes de prosseguir para garantir que a transação possa ser realizada sem contratempos.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Seleção do ofertante</h2>
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Procedimento:</h3>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '10px', marginBottom: '30px' }}>
                <li>Acesse o sistema e localize a lista de ofertantes.</li>
                <li>Selecione o ofertante que deseja utilizar para a transação.</li>
            </ul>
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Relevância</h3>
            <p>Verifique se o ofertante está logado corretamente para evitar erros no cadastro do passageiro.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Cadastro do passageiro no site da companhia aérea</h2>
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Informações a serem inseridas:</h3>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '10px', marginBottom: '30px' }}>
                <li><strong>Nome:</strong> Primeiro nome do passageiro conforme registrado no Cockpit.</li>
                <li><strong>Sobrenome:</strong> Último sobrenome para voos nacionais ou nome completo para voos internacionais.</li>
                <li><strong>Sufixo:</strong> Adicione o sufixo se aplicável (ex.: Jr., Sr., etc.).</li>
                <li><strong>CPF:</strong> Essencial para identificação nas companhias aéreas.</li>
                <li><strong>Nota:</strong> Na LATAM, utilize o CPF do ofertante para prosseguir para a página de pagamento.</li>
                <li><strong>RG:</strong> Número do RG do passageiro.</li>
                <li><strong>Passaporte:</strong> Número do passaporte para passageiros estrangeiros.</li>
                <li><strong>Data de expiração do passaporte:</strong> Verifique se está válido para a viagem.</li>
                <li><strong>País emissor:</strong> Indique o país que emitiu o passaporte.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Página de pagamento</h2>
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Passos:</h3>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '10px', marginBottom: '30px' }}>
                <li>Conferir dados do voo e da compra:</li>
                <ul style={{ listStyleType: 'circle', marginLeft: '30px', marginTop: '10px', marginBottom: '30px' }}>
                    <li>Taxa de embarque: Verifique se está correta.</li>
                    <li>Pontos: Confirme a quantidade de milhas a serem utilizadas.</li>
                    <li>Data do voo: Assegure que está correta.</li>
                    <li>Horário: Verifique horários de partida e chegada.</li>
                    <li>Voo de ida e volta: Revise os detalhes de ambos os trechos.</li>
                </ul>
                <li>Adicionar cartão de crédito:</li>
                <ul style={{ listStyleType: 'circle', marginLeft: '30px', marginTop: '10px', marginBottom: '30px' }}>
                    <li>Clique no botão para adicionar cartão de crédito.</li>
                    <li>Gerar cartão de crédito virtual:</li>
                    <li>Volte ao Cockpit e clique no ícone de gerar cartão de crédito.</li>
                    <li>Lembre-se que o limite do cartão é baseado na taxa de embarque.</li>
                    <li>Preencher dados do cartão:</li>
                    <li>Preencha as informações solicitadas do cartão de crédito virtual gerado.</li>
                </ul>
                <li>Efetuar o pagamento:</li>
                <p>Clique no botão para efetuar o pagamento e aguarde a confirmação da transação.</p>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>E-tickets</h2>
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Processo de geração:</h3>
            <p>Após a confirmação do pagamento, um e-ticket será gerado automaticamente.</p>
        </div>
    ),
},
'Cadastrando passageiros latam': {
    title: 'Cadastrando passageiro no site da companhia aérea',
    videoUrl: 'https://www.youtube.com/embed/Csh0GSrtVgk',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Cadastrando passageiro no site da companhia aérea</h1>
            <p>Ao acessar o site da companhia aérea para cadastrar os passageiros, siga as orientações abaixo para garantir que todas as informações sejam inseridas corretamente, de acordo com os dados disponíveis no Cockpit:</p>
            
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Informações do passageiro</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit50} alt="Imagem das informações do passageiro" />

            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Nome:</strong> Insira o primeiro nome do passageiro conforme registrado no Cockpit.</li>
                <li><strong>Sobrenome:</strong> Para voos nacionais, utilize o último sobrenome do passageiro. Para voos internacionais, insira o nome completo.</li>
                <li><strong>Sufixo:</strong> Se aplicável, adicione o sufixo do passageiro (ex.: Jr., Sr., etc.).</li>
                <li><strong>CPF:</strong> Preencha com o CPF do passageiro. Este dado é essencial para identificação nas companhias aéreas. (Atenção! Na cia LATAM, utilize o CPF do ofertante de milhas para poder prosseguir para a página de pagamento)</li>
                <li><strong>RG:</strong> Insira o número do RG do passageiro.</li>
                <li><strong>Passaporte:</strong> Para passageiros estrangeiros ou em voos internacionais, forneça o número do passaporte.</li>
                <li><strong>Data de expiração do passaporte:</strong> Inclua a data de expiração do passaporte, garantindo que ele esteja válido para a viagem.</li>
                <li><strong>País emissor:</strong> Indique o país que emitiu o passaporte.</li>
            </ul>

            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam04} alt="Imagem das informações adicionais" />

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Informações adicionais</h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Data de nascimento:</strong> Insira a data de nascimento do passageiro, conforme registrado no Cockpit.</li>
                <li><strong>E-mail:</strong> Utilize o email do ofertante de milhas. Esse contato é importante para enviar confirmações e informações sobre a passagem.</li>
                <li><strong>Telefone:</strong> Insira o telefone do ofertante de milhas, que será utilizado para eventuais comunicações ou notificações.</li>
                <li><strong>Voo internacional:</strong> Atenção! Em voos internacionais, é necessário utilizar o nome completo do passageiro, incluindo sobrenomes e sufixos.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Revisão e confirmação</h2>
            <p>Após preencher todos os campos, revise as informações inseridas para garantir que não haja erros.</p>
            <p>A precisão dos dados é importante para evitar problemas durante o embarque e garantir que a emissão da passagem ocorra sem contratempos.</p>
        </div>
    ),
},
'Página de pagamento latam': {
    title: 'Página de pagamento',
    videoUrl: 'https://www.youtube.com/embed/E0PVolTHQRM',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Página de pagamento</h1>
            <p>Ao acessar a página de pagamento para finalizar a compra da passagem, siga estas etapas para garantir que o processo seja realizado corretamente:</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Conferir dados do voo e da compra</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam05} alt="Imagem dos dados do voo e da compra"></img>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam06} alt="Imagem da conferência dos dados do voo"></img>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Taxa de embarque:</strong> Verifique se a taxa de embarque exibida está correta. Esse valor é fundamental, pois influencia o limite do cartão de crédito virtual que será gerado.</li>
                <li><strong>Pontos:</strong> Confira a quantidade de milhas (pontos) que será utilizada para a compra da passagem.</li>
                <li><strong>Data do voo:</strong> Confirme que a data do voo está correta e corresponde ao que foi escolhido durante a pesquisa.</li>
                <li><strong>Horário:</strong> Verifique o horário de partida e chegada para garantir que está tudo conforme esperado.</li>
                <li><strong>Voo de ida e volta:</strong> Revise os detalhes de ambos os trechos da viagem (ida e volta) para assegurar que não há discrepâncias.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Adicionar cartão de crédito</h2>
            <p>Após verificar todas as informações, clique no botão para adicionar cartão de crédito.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam07} alt="Imagem da adição do cartão de crédito"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Gerar cartão de crédito virtual</h2>
            <p>Voltar ao Cockpit: Navegue de volta até o Cockpit no cartão da transação correspondente.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit86} alt="Imagem do Cockpit para gerar cartão de crédito virtual"></img>
            <p>Gerar cartão de crédito: Clique no ícone de cartão de crédito. Isso gerará um cartão de crédito virtual que será utilizado para o pagamento da passagem.</p>
            <p>Limite do cartão: Lembre-se que o limite do cartão de crédito virtual é baseado na taxa de embarque, por isso é importante que esse valor esteja correto.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Preencher dados do cartão</h2>
            <p>Preencha os dados solicitados do cartão de crédito virtual gerado, incluindo:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li>Número do cartão</li>
                <li>Data de validade</li>
                <li>Código de segurança (CVV)</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>5. Efetuar o pagamento</h2>
            <p>Após preencher todas as informações do cartão, clique no botão para efetuar pagamento. Aguarde a confirmação da transação. Se tudo estiver correto, você deverá receber um recibo da compra, que incluirá os detalhes do voo e as informações do pagamento realizado.</p>
            <p>Seguindo estas etapas, você poderá realizar o pagamento de forma eficiente e sem erros, assegurando a finalização da compra da passagem aérea.</p>
        </div>
    ),
},
'Erros de pagamento latam': {
    title: 'Erros de pagamento latam',
    videoUrl: 'https://www.youtube.com/embed/2DGvnOf7uBE',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Erros de pagamento</h1>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam20} alt="Imagem sobre erros de pagamento"></img>
            <p>Durante o processo de emissão de passagens na cia LATAM, podem ocorrer erros no pagamento. Esses erros podem ser causados por diferentes fatores, como dados incorretos ou falhas no sistema. Para garantir que a transação seja concluída com sucesso, é essencial seguir algumas etapas de solução de problemas.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Possíveis soluções para erros de pagamento</h2>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Verificar a taxa de embarque</h3>
            <p>Um erro comum ocorre quando a taxa de embarque não está correta. Verifique o valor exibido na página de pagamento e compare-o com o valor esperado. Se a taxa estiver incorreta, corrija o valor e gere um novo cartão de crédito virtual para realizar o pagamento novamente.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Utilizar os dados do comprador da passagem</h3>
            <p>Outra opção é utilizar os dados do comprador da passagem ao invés do vendedor de milhas para efetuar o pagamento com o cartão virtual. Neste caso, use apenas o número do cartão, o código de segurança (CVV) e a validade do cartão original.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Limpar o histórico do navegador</h3>
            <p>Erros no pagamento podem ocorrer devido a cookies e cache armazenados no navegador. Limpar o histórico do navegador pode ajudar a resolver esse problema. Em seguida, reinicie o navegador.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Reiniciar a Bifrost</h3>
            <p>Caso o erro persista, tente reiniciar o aplicativo Bifrost. Às vezes, um novo login ou reconexão ao IP do ofertante de milhas pode solucionar o problema.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Ofertantes Gold, Platinum e Black para voos internacionais ou de 24h</h3>
            <p>Para emissões de voos internacionais ou de voos com prazo de emissão em 24h, é necessário utilizar ofertantes com status Gold, Platinum ou Black. Isso ajuda a garantir que as milhas e o pagamento sejam aceitos sem complicações.</p>

            <p>Seguindo esses passos, você poderá resolver a maioria dos erros de pagamento que surgem durante a emissão de passagens. Certifique-se de sempre revisar os dados e utilizar as opções adequadas de pagamento para evitar falhas na transação.</p>
        </div>
    ),
},
'E-tickets latam': {
    title: 'E-tickets latam',
    videoUrl: 'https://www.youtube.com/embed/wDAhyYDJibI',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>E-tickets</h1>
            <p>Após finalizar o pagamento da passagem, um e-ticket será gerado automaticamente. O e-ticket contém todas as informações necessárias sobre o voo e serve como comprovante da compra. Siga os passos abaixo para garantir que tudo esteja devidamente registrado:</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Gerar o e-ticket</h2>
            <p>Após a confirmação do pagamento, o sistema gerará um e-ticket com os detalhes do voo, incluindo:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li>Número do voo</li>
                <li>Data e hora da partida</li>
                <li>Dados do passageiro</li>
                <li>Taxas e informações de bagagem</li>
            </ul>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam08} alt="Imagem da geração do e-ticket"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Capturar o e-ticket</h2>
            <p>Utilize uma ferramenta de captura de tela (como Captura e Esboço, Lightshot, ou outra de sua preferência) para salvar uma cópia do e-ticket.</p>
            <p>Dica: Para capturar a tela, você pode usar teclas de atalho como Print Screen ou ferramentas específicas para captura que permitem selecionar apenas a parte da tela desejada.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam09} alt="Imagem da captura do e-ticket"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Voltar ao Cockpit</h2>
            <p>Retorne ao sistema Cockpit no cartão da transação correspondente.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Inserir e-ticket</h2>
            <p>Clique no botão Inserir e-ticket para dar continuidade ao processo de registro do e-ticket.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit87} alt="Imagem do botão Inserir e-ticket"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>5. Preencher informações necessárias</h2>
            <p>Digite as seguintes informações na tela de emissão:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li>Número do e-ticket: Insira o número gerado do e-ticket que você capturou.</li>
                <li>Login do programa de fidelidade: Forneça o login que você utilizou para a emissão da passagem.</li>
                <li>Número da compra para a companhia aérea: Insira o número de compra associado ao e-ticket (se aplicável).</li>
                <li>Valor da bagagem paga na companhia aérea: Informe o valor que foi pago por qualquer bagagem adicional.</li>
                <li>Cartão de crédito utilizado: Se solicitado, forneça os dados do cartão de crédito que foi utilizado para a compra.</li>
            </ul>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit88} alt="Imagem do preenchimento de informações do e-ticket"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>6. Fazer upload do e-ticket</h2>
            <p>Faça o upload da captura de tela do e-ticket que você salvou anteriormente. Este passo é importante para garantir que a transação e a emissão estejam devidamente documentadas.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>7. Mensagens de sucesso e erro</h2>
            <p>Após a inserção do e-ticket, o sistema verificará as informações e fornecerá uma mensagem de retorno:</p>
            <p><strong>Mensagem de sucesso:</strong> Se todos os dados estiverem corretos, aparecerá a mensagem: "Sucesso: e-ticket inserido com sucesso."</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit89} alt="Imagem da mensagem de sucesso na inserção do e-ticket"></img>

            <p><strong>Mensagem de erro na checagem automática:</strong> Se houver algum erro na validação automática, a mensagem será: "Erro na checagem: verifique os dados inseridos."</p>

            <p>Este processo assegura que o e-ticket seja corretamente gerado e registrado, garantindo que todas as informações necessárias estejam disponíveis para referência futura.</p>
        </div>
    ),
},
'Cancelando localizador na companhia latam': {
    title: 'Cancelamento de e-tickets',
    videoUrl: 'https://www.youtube.com/embed/QbZ4f06YAso',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Cancelamento de e-tickets</h1>
            <p>O cancelamento de e-tickets é uma etapa importante que pode ser necessária devido a diversos motivos, como erros na emissão do bilhete ou solicitações dos passageiros. Nesta aula, abordaremos os passos específicos para cancelar e-tickets nas companhias aéreas, com foco na Azul.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Quando cancelar um e-ticket?</h2>
            <p>O cancelamento do e-ticket é necessário nas seguintes situações:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Erros na emissão do bilhete:</strong>
                    <ul>
                        <li>Dados incorretos (nome, CPF, etc.)</li>
                        <li>Voo incorreto</li>
                        <li>Quantidade de milhas acima do permitido</li>
                    </ul>
                </li>
                <li><strong>Solicitações do passageiro:</strong>
                    <ul>
                        <li>Passageiro requisitou o cancelamento</li>
                        <li>Bilhete emitido em duplicidade</li>
                    </ul>
                </li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Passo a passo para cancelar um e-ticket na LATAM</h2>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Acessar o site da LATAM</h3>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam00} alt="Imagem do site da LATAM"></img>
            <p>Entre no site oficial da LATAM.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Localizar a viagem</h3>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam21} alt="Imagem da seção 'Minhas Viagens'"></img>
            <p>Vá até a seção "Minhas Viagens". Utilize o atalho Ctrl + F para facilitar a busca pelo destino ou pela data do voo.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Verificar notificações</h3>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam22} alt="Imagem das notificações"></img>
            <p>Se preferir, você pode acessar a seção de notificações e procurar pela notificação com o valor de milhas correspondente à viagem.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Acessar detalhes da viagem</h3>
            <p>Clique na viagem desejada para acessar a página de detalhes.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>5. Iniciar o processo de cancelamento</h3>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam23} alt="Imagem da opção de devolução de passagens"></img>
            <p>Selecione a opção "Devolução de Passagens". Clique em "Continuar".</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>6. Verificar valores</h3>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam24} alt="Imagem do valor das milhas"></img>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit84} alt="Imagem do Cockpit"></img>
            <p>Confira o valor das milhas e a taxa de embarque a ser reembolsada. Compare esse valor com o que está no Cockpit.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>7. Confirmar cancelamento</h3>
            <p>Prossiga com o cancelamento.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>8. Registrar mensagem de reembolso</h3>
            <p>Após concluir o cancelamento, copie e cole a mensagem de reembolso feita nos comentários da transação no Cockpit.</p>

            <p>O cancelamento de e-tickets é um processo que deve ser realizado com atenção, garantindo que todas as etapas sejam seguidas corretamente para evitar problemas futuros. Em caso de dúvidas, sempre consulte as diretrizes da companhia aérea e as políticas de cancelamento.</p>
        </div>
    ),
},
'Conferindo extrato latam': {
    title: 'Conferindo extrato latam',
    videoUrl: 'https://www.youtube.com/embed/2M4qegJ3wq8',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Conferindo extrato</h1>
            <p>Uma etapa importante no processo de emissão e gerenciamento de passagens é a conferência do extrato de milhas. Isso garante que as milhas utilizadas estejam corretas e que os valores estejam de acordo com a transação realizada.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Passo a passo para conferir o extrato</h2>
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Conferindo o extrato de milhas na LATAM</h2>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Acessar o site da LATAM:</h3>
            <p>Entre no site oficial da LATAM.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam00} alt="Imagem do site da LATAM"></img>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Acessar "Minha Conta":</h3>
            <p>Faça login e clique em "Minha Conta" no menu principal.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam25} alt="Imagem da seção Minha Conta"></img>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Verificar detalhes da conta:</h3>
            <p>Dentro da área de usuário, clique em "Detalhes da Conta" para visualizar o extrato.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam26} alt="Imagem dos detalhes da conta"></img>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Conferir o extrato:</h3>
            <p>Verifique o extrato de milhas para confirmar os valores utilizados e acumulados, certificando-se de que tudo está correto com a transação realizada.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam27} alt="Imagem do extrato de milhas"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Conferindo o extrato da LATAM Wallet</h2>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Acessar o site da LATAM:</h3>
            <p>Entre no site oficial da LATAM.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam00} alt="Imagem do site da LATAM"></img>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Acessar a LATAM Wallet:</h3>
            <p>No menu, selecione "Minha Wallet".</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam28} alt="Imagem da LATAM Wallet"></img>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Verificar o extrato:</h3>
            <p>Dentro da LATAM Wallet, clique em "Ver extrato" para conferir os créditos e débitos realizados.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam29} alt="Imagem do extrato da LATAM Wallet"></img>

            <p>Manter a conferência regular do extrato de milhas e da LATAM Wallet é essencial para garantir o controle preciso das transações. Isso evita divergências e permite uma gestão eficiente do saldo, garantindo que as milhas e créditos estejam sempre de acordo com as emissões realizadas.</p>
        </div>
    ),
},

'Verificando quantidade de milhas e voo disponível latam': {
    title: 'Verificando informações sobre o voo e milhas',
    videoUrl: 'https://www.youtube.com/embed/vr5h_ywqEvw',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Verificando informações sobre o voo e milhas</h1>
            <p>Após iniciar uma transação no sistema Cockpit, o próximo passo é garantir que os dados estejam alinhados com a realidade da companhia aérea. Para isso, é necessário verificar se o voo e a quantidade de milhas estão corretos.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Acessar o site da companhia aérea</h2>
            <p>Acesse o site da companhia aérea escolhida para a emissão da passagem e faça o login na conta do ofertante com os dados disponibilizados no Cockpit.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam16} alt="Imagem de login no site da companhia aérea"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Buscar pelo voo</h2>
            <p>Procure o voo exato que foi inserido no Cockpit, verificando:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Data do voo:</strong> Confirme se a data está correta e se o voo ainda está disponível para emissão.</li>
                <li><strong>Horário do voo:</strong> Verifique se o horário de partida e chegada corresponde ao informado.</li>
                <li><strong>Número do voo:</strong> Confirme o número do voo para garantir que se trata do voo correto.</li>
            </ul>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam17} alt="Imagem de verificação dos dados do voo"></img>

            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam01} alt="Imagem adicional de verificação do voo"></img>

            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam02} alt="Imagem da seção de confirmação do voo no site da companhia"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Verificar milhas</h2>
            <p>Certifique-se de que a quantidade de milhas exigida para a emissão no site da companhia aérea está de acordo com o valor indicado no Cockpit. Caso tenha ocorrido um aumento de milhas, será necessário ajustar a transação ou buscar alternativas.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit84} alt="Imagem de verificação de milhas"></img>

            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoeslatam03} alt="Imagem adicional de verificação de milhas"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Verificar a tarifa</h2>
            <p>Além das milhas, é importante garantir que a tarifa selecionada está correta. Verifique se a tarifa correspondente no site da companhia (light, executive, etc.) é a mesma que está registrada no Cockpit. Qualquer divergência na tarifa também deve ser ajustada para evitar problemas na emissão.</p>
        </div>
    ),
},
'Motivos para troca de ofertante': {
    title: 'Motivos para troca de ofertante',
    videoUrl: 'https://www.youtube.com/embed/A3FSvUAv26Y',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Motivos para troca de ofertante</h1>
            <p>A troca de ofertante deve ser feita com atenção, pois um motivo incorreto pode invalidar ofertas e impedir que o saldo de milhas seja utilizado.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit76} alt="Imagem sobre os motivos para troca de ofertante"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Motivos disponíveis para troca de ofertante</h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Senha incorreta:</strong> A senha do ofertante atual está incorreta, impossibilitando a emissão da passagem.</li>
                <li><strong>Saldo insuficiente:</strong> O ofertante atual não possui saldo de milhas suficiente para a transação desejada.</li>
                <li><strong>Sem beneficiários (CPFs) disponíveis:</strong> Aplicado quando a oferta não possui CPFs disponíveis, resultando na exclusão da oferta.</li>
                <li><strong>Conta bloqueada:</strong> O sistema informa que a conta do ofertante atual está bloqueada. <em>LATAM: Status “Inativo - forbidden”; gol e azul: Oferta excluída e não retorna para emissão.</em></li>
                <li><strong>Não atende o telefone/WhatsApp:</strong> Utilizado na gol quando o código 2fa não é recebido. <em>Encaminhado para análise pelo time de ofertas.</em></li>
                <li><strong>Erro de pagamento:</strong> Houve um erro de pagamento que impede a continuidade da transação.</li>
                <li><strong>Problema ao localizar voo:</strong> Dificuldades em localizar o voo desejado pelo ofertante atual.</li>
                <li><strong>Problema na taxa de embarque:</strong> Dificuldades com o pagamento da taxa de embarque.</li>
                <li><strong>Redução/aumento de milhas:</strong> Mudanças no valor das milhas que impactam a transação.</li>
                <li><strong>Ofertante gerando prejuízo:</strong> O ofertante atual está gerando prejuízos, tornando a transação inviável.</li>
                <li><strong>Troca para emissão sequenciada:</strong> A troca é necessária para permitir uma emissão sequenciada.</li>
                <li><strong>Cadastro pendente na companhia aérea:</strong> O ofertante possui um cadastro pendente na companhia aérea.</li>
                <li><strong>Transação abaixo da receita mínima:</strong> A transação não atinge a receita mínima necessária.</li>
                <li><strong>Sem beneficiários suficientes:</strong> Ofertante não possui CPFs suficientes para esta transação específica. <em>Envio para análise manual.</em></li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Tabela com motivos para troca de ofertante</h2>
            <p>Para consultar os motivos corretos para realizar a troca de ofertante você acessar este    <a
      href="https://docs.google.com/presentation/d/1jgMuTNj611SpSR1HUlyb_yHfNEtFudmNf_Pd-kZqANE/edit#slide=id.p"
      className="custom-link"
      target="_blank" // Abre o link em uma nova aba
      rel="noopener noreferrer" // Melhora a segurança ao abrir um link externo
    >
      material
    </a>  (<a
      href="https://docs.google.com/presentation/d/1jgMuTNj611SpSR1HUlyb_yHfNEtFudmNf_Pd-kZqANE/edit#slide=id.p"
      className="custom-link"
      target="_blank" // Abre o link em uma nova aba
      rel="noopener noreferrer" // Melhora a segurança ao abrir um link externo
    >
      https://docs.google.com/presentation/d/1jgMuTNj611SpSR1HUlyb_yHfNEtFudmNf_Pd-kZqANE/edit#slide=id.p
    </a>)</p>
        </div>
    ),
},
'Adicionando bagagem': {
    title: 'Adicionando bagagem',
    videoUrl: 'https://www.youtube.com/embed/2BfFaHMkI4Q',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Bagagem</h1>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Verificação de bagagens no cockpit</h2>
            <p>Antes de adicionar bagagens para uma transação, é necessário verificar as informações de bagagem no Cockpit. Siga o passo a passo abaixo:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '10px', marginBottom: '30px' }}>
                <li><strong>Acessar a transação:</strong> No Cockpit, localize a transação desejada.</li>
                <li><strong>Verificar informações:</strong></li>
                <ul style={{ listStyleType: 'circle', marginLeft: '40px', marginTop: '10px', marginBottom: '30px' }}>
                    <li><strong>Opção 1:</strong> No cartão da transação, clique na caixa de informações do voo para visualizar os passageiros e quantas bagagens cada um possui.</li>
                    <li><strong>Opção 2:</strong> Caso precise de mais detalhes, acesse a transação completa e verifique as informações referentes à bagagem.</li>
                </ul>
            </ul>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit103} alt="Verificação de bagagens no cockpit"></img>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit104} alt="Detalhes de bagagens no cockpit"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Adicionando bagagens no site da companhia aérea durante a compra</h2>
            <p>Após a verificação das informações no Cockpit, prossiga para adicionar as bagagens diretamente no site da companhia aérea:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '10px', marginBottom: '30px' }}>
                <li><strong>Login no site da companhia:</strong> Acesse o site da companhia aérea com suas credenciais ou as credenciais do cliente.</li>
                <li><strong>Cadastro de passageiros:</strong> Faça o cadastro dos passageiros de acordo com as informações obtidas no Cockpit.</li>
                <li><strong>Adição de bagagens:</strong> Na companhia LATAM é necessário retornar à página de bagagens (loja) após cadastrar os passageiros para adicionar as bagagens.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Adicionando bagagens no site da companhia aérea após a compra</h2>
            <p>Após a verificação das informações no Cockpit, prossiga para adicionar as bagagens diretamente no site da companhia aérea:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '10px', marginBottom: '30px' }}>
                <li><strong>Login no site da companhia:</strong> Acesse o site da companhia aérea com as credenciais do cliente.</li>
                <li><strong>Localize a viagem correta:</strong> Utilize as informações do voo para identificar a reserva no sistema da companhia aérea.</li>
                <li><strong>Adição de bagagens:</strong> Selecione a opção de adicionar bagagens extras conforme a necessidade do passageiro. Verifique a quantidade de bagagens permitidas e os valores cobrados.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Informando o valor pago pela bagagem</h2>
            <p>Depois de realizar a adição de bagagens no site da companhia aérea, é importante registrar o valor pago:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '10px', marginBottom: '30px' }}>
                <li><strong>Registro do valor no Cockpit:</strong> Insira no campo correspondente ao valor de bagagem na transação do Cockpit.</li>
                <li><strong>Comentário na transação:</strong> Faça um comentário na transação informando o valor pago e qualquer detalhe relevante sobre a adição das bagagens.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Conclusão</h2>
            <p>A adição de bagagens envolve a verificação no Cockpit, o uso do e-ticket no site da companhia aérea e o registro correto do valor pago no sistema. Seguindo esses passos, você garante que todas as informações estejam corretamente documentadas para o cliente e para a empresa.</p>
        </div>
    ),
},
/*Cursos emissões Azul */
'Categoria de ofertantes azul': {
    title: 'Categoria de ofertantes azul',
    videoUrl: 'https://www.youtube.com/embed/LrG55yeHTRM',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Programa de fidelidade TudoAzul</h1>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoofertantes00} alt="Programa de fidelidade TudoAzul"></img>
            <p>O TudoAzul é o programa de fidelidade da Azul Linhas Aéreas, uma das maiores companhias aéreas do Brasil. Esse programa permite que os clientes acumulem pontos em suas viagens e compras com parceiros, podendo utilizá-los para adquirir passagens aéreas, upgrades e outros produtos e serviços. A seguir, vamos explorar as principais características e benefícios do TudoAzul.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Acúmulo de pontos</h2>
            
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>1.1 Como funciona</h3>
            <p>Os membros do TudoAzul acumulam pontos ao viajarem com a Azul ou ao fazerem compras em estabelecimentos parceiros. Os pontos acumulados podem ser utilizados para diversos tipos de resgates, como passagens aéreas, diárias de hotéis e aluguel de veículos.</p>
            
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>1.2 Tipos de pontos</h3>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Pontos qualificáveis:</strong> São aqueles acumulados por meio de voos realizados. Eles ajudam o cliente a subir de categoria dentro do programa de fidelidade.</li>
                <li><strong>Pontos de bônus:</strong> Obtidos em promoções e campanhas especiais, permitindo o acúmulo mais rápido de pontos.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Níveis de fidelidade</h2>
            
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>2.1 Categorias de membros</h3>
            <p>O TudoAzul possui diferentes níveis de fidelidade, que oferecem benefícios crescentes conforme o cliente acumula mais pontos e viaja com a Azul. As categorias são:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>TudoAzul:</strong> O nível básico do programa, que oferece aos membros acesso a promoções e possibilidade de acúmulo de pontos.</li>
                <li><strong>Prata:</strong> Oferece benefícios adicionais, como pontos bônus em voos e prioridade em filas de embarque.</li>
                <li><strong>Ouro:</strong> Proporciona vantagens como check-in e embarque prioritário, além de acúmulo maior de pontos.</li>
                <li><strong>Diamante:</strong> O nível mais alto, com benefícios exclusivos como acesso a salas VIP, mais pontos em voos e assistência personalizada.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Resgate de pontos</h2>
            
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>3.1 Como resgatar</h3>
            <p>Os membros podem resgatar seus pontos de diversas formas, incluindo:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Passagens aéreas:</strong> Troca de pontos por passagens nos voos da Azul ou em companhias aéreas parceiras.</li>
                <li><strong>Upgrades de classe:</strong> Utilização de pontos para subir de classe em voos.</li>
                <li><strong>Produtos e experiências:</strong> Troca de pontos por itens em lojas parceiras ou por experiências exclusivas.</li>
            </ul>

            {/* Continue com o restante do conteúdo, seguindo o mesmo padrão */}
        </div>
    ),
},
'Verificando quantidade de milhas e voo disponível azul': {
    title: 'Verificando informações sobre o voo e milhas',
    videoUrl: 'https://www.youtube.com/embed/8aUtHu-06IU',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Verificando informações sobre o voo e milhas</h1>
            <p>Após iniciar uma transação no sistema Cockpit, o próximo passo é garantir que os dados estejam alinhados com a realidade da companhia aérea. Para isso, é necessário verificar se o voo e a quantidade de milhas estão corretos.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Acessar o site da companhia aérea</h2>
            <p>Acesse o site da companhia aérea escolhida para a emissão da passagem e faça o login na conta do ofertante com os dados disponibilizados no Cockpit.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoesazul00} alt="Acessando o site da companhia aérea"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Buscar pelo voo</h2>
            <p>Procure o voo exato que foi inserido no Cockpit, verificando:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Data do voo:</strong> Confirme se a data está correta e se o voo ainda está disponível para emissão.</li>
                <li><strong>Horário do voo:</strong> Verifique se o horário de partida e chegada corresponde ao informado.</li>
                <li><strong>Número do voo:</strong> Confirme o número do voo para garantir que se trata do voo correto.</li>
            </ul>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit100} alt="Buscando pelo voo"></img>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoesazul01} alt="Verificando dados do voo"></img>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoesazul02} alt="Detalhes do voo"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Verificar milhas</h2>
            <p>Certifique-se de que a quantidade de milhas exigida para a emissão no site da companhia aérea está de acordo com o valor indicado no Cockpit. Caso tenha ocorrido um aumento de milhas, será necessário ajustar a transação ou buscar alternativas.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit84} alt="Verificando milhas"></img>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoesazul03} alt="Verificando milhas disponíveis"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Verificar a tarifa</h2>
            <p>Além das milhas, é importante garantir que a tarifa selecionada está correta. Verifique se a tarifa correspondente no site da companhia (Light, Executive, etc.) é a mesma que está registrada no Cockpit. Qualquer divergência na tarifa também deve ser ajustada para evitar problemas na emissão.</p>
        </div>
    ),
},
'Emissões manuais azul': {
    title: 'Emissões manuais azul',
    videoUrl: 'https://www.youtube.com/embed/am4tah7Ap7M',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Emissões manuais</h1>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoofertantes00} alt="Imagem sobre emissões manuais" />

            <p>A emissão manual é o processo de compra de passagens aéreas onde os dados são inseridos manualmente no sistema, ao contrário das emissões automáticas, que são realizadas de forma automatizada.</p>
            
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Importância</h2>
            <p>Seguir os procedimentos corretos durante a emissão manual é crucial para evitar erros que possam resultar em problemas na viagem, como a falta de informações ou dados incorretos.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Verificação de milhas e disponibilidade de voo</h2>
            <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Passos:</h3>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '10px', marginBottom: '30px' }}>
                <li>Acesse o sistema e verifique a quantidade de milhas disponível para o ofertante.</li>
                <li>Confirme a disponibilidade do voo desejado.</li>
            </ul>

            <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Importante</h3>
            <p>Atualize a quantidade de milhas antes de prosseguir para garantir que a transação possa ser realizada sem contratempos.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Seleção do ofertante</h2>
            <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Procedimento:</h3>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '10px', marginBottom: '30px' }}>
                <li>Acesse o sistema e localize a lista de ofertantes.</li>
                <li>Selecione o ofertante que deseja utilizar para a transação.</li>
            </ul>

            <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Relevância</h3>
            <p>Verifique se o ofertante está logado corretamente para evitar erros no cadastro do passageiro.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Cadastro do passageiro no site da companhia aérea</h2>
            <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Informações a serem inseridas:</h3>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '10px', marginBottom: '30px' }}>
                <li><strong>Nome:</strong> Primeiro nome do passageiro conforme registrado no Cockpit.</li>
                <li><strong>Sobrenome:</strong> Último sobrenome para voos nacionais ou nome completo para voos internacionais.</li>
                <li><strong>Sufixo:</strong> Adicione o sufixo se aplicável (ex.: Jr., Sr., etc.).</li>
                <li><strong>CPF:</strong> Essencial para identificação nas companhias aéreas.</li>
                <li><strong>RG:</strong> Número do RG do passageiro.</li>
                <li><strong>Passaporte:</strong> Número do passaporte para passageiros estrangeiros.</li>
                <li><strong>Data de expiração do passaporte:</strong> Verifique se está válido para a viagem.</li>
                <li><strong>País emissor:</strong> Indique o país que emitiu o passaporte.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Bagagem</h2>
            <p>Verifique se o passageiro adquiriu bagagem no cockpit e insira a bagagem correspondente no site da cia aérea.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Página de pagamento</h2>
            <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Passos:</h3>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '10px', marginBottom: '30px' }}>
                <li>Conferir dados do voo e da compra:</li>
                <ul style={{ listStyleType: 'circle', marginLeft: '30px', marginTop: '10px', marginBottom: '30px' }}>
                    <li><strong>Taxa de embarque:</strong> Verifique se está correta.</li>
                    <li><strong>Pontos:</strong> Confirme a quantidade de milhas a serem utilizadas.</li>
                    <li><strong>Data do voo:</strong> Assegure que está correta.</li>
                    <li><strong>Horário:</strong> Verifique horários de partida e chegada.</li>
                    <li><strong>Voo de ida e volta:</strong> Revise os detalhes de ambos os trechos.</li>
                </ul>
                <li>Adicionar cartão de crédito:</li>
                <p>Clique...</p>
            </ul>
        </div>
    ),
},
'Verificando beneficiários cadastrados': {
    title: 'Verificando beneficiários cadastrados',
    videoUrl: 'https://www.youtube.com/embed/qGxhrZ0Kn_k',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Verificando beneficiários cadastrados</h1>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoofertantes00} alt="Imagem do programa Azul Fidelidade"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Introdução ao programa Azul fidelidade</h2>
            <p>A Azul atualizou, em 2024, as regras para o cadastro de beneficiários no seu programa de pontos. Agora, o número de beneficiários que cada cliente pode cadastrar varia de acordo com o nível de fidelidade. Confira as mudanças:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li>Nível Básico: até 5 beneficiários;</li>
                <li>Nível Topázio: até 6 beneficiários;</li>
                <li>Nível Safira: até 7 beneficiários;</li>
                <li>Nível Diamante: até 8 beneficiários.</li>
            </ul>
            <p>Além disso, o tempo de carência para alteração de beneficiários foi reduzido de 60 para 30 dias.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Como cadastrar beneficiários no Azul fidelidade</h2>
            <p>Siga o passo a passo para cadastrar novos beneficiários usando o aplicativo da Azul:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Login:</strong> Acesse o aplicativo com seu CPF e senha.</li>
                <li><strong>Menu inicial:</strong> Toque no seu nome na parte inferior da tela inicial.</li>
                <li><strong>Perfil:</strong> Na tela do perfil, selecione a opção “Meus Beneficiários”.</li>
                <li><strong>Cadastrar beneficiário:</strong> Se houver vagas disponíveis, clique em "Cadastrar Novo Beneficiário".</li>
                <li><strong>Preenchimento de dados:</strong> Insira os dados solicitados (nacionalidade, CPF, nome, data de nascimento e gênero).</li>
                <li><strong>Confirmação:</strong> Confirme o cadastro e o novo beneficiário aparecerá na sua lista.</li>
            </ul>
            <p>Agora, você já pode emitir passagens com pontos para o beneficiário cadastrado.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Como alterar beneficiários no Azul fidelidade</h2>
            <p>Caso seja necessário alterar um beneficiário, siga este guia:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Login:</strong> Acesse o aplicativo com seu CPF e senha.</li>
                <li><strong>Menu inicial:</strong> Toque no seu nome na parte inferior da tela inicial.</li>
                <li><strong>Perfil:</strong> Acesse a área “Meus Beneficiários”.</li>
                <li><strong>Excluir beneficiário:</strong> Selecione o beneficiário a ser removido e clique em "Excluir".</li>
                <li><strong>Confirmação:</strong> Antes de finalizar, o sistema informará sobre a necessidade de aguardar 30 dias para adicionar um novo beneficiário.</li>
            </ul>
            <p>Siga novamente o passo a passo do cadastro para incluir um novo beneficiário.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Comentário final</h2>
            <p>Com as mudanças implementadas pela Azul, ficou mais fácil gerenciar seus beneficiários, especialmente para clientes de nível superior, como o Nível Diamante, que agora podem cadastrar até 8 beneficiários.</p>
        </div>
    ),
},
'Cadastrando passageiros azul': {
    title: 'Cadastrando passageiros azul',
    videoUrl: 'https://www.youtube.com/embed/b-ejqswdLYA',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Cadastrando passageiro no site da companhia aérea</h1>
            <p>Ao acessar o site da companhia aérea para cadastrar os passageiros, siga as orientações abaixo para garantir que todas as informações sejam inseridas corretamente, de acordo com os dados disponíveis no Cockpit:</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Informações do passageiro</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit50} alt="Imagem de informações do passageiro"></img>

            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Nome:</strong> Insira o primeiro nome do passageiro conforme registrado no Cockpit.</li>
                <li><strong>Sobrenome:</strong> Para voos nacionais, utilize o último sobrenome do passageiro. Para voos internacionais, insira o nome completo.</li>
                <li><strong>Sufixo:</strong> Se aplicável, adicione o sufixo do passageiro (ex.: Jr., Sr., etc.).</li>
                <li><strong>CPF:</strong> Preencha com o CPF do passageiro. Este dado é essencial para identificação nas companhias aéreas. (Atenção! Na cia LATAM, utilize o CPF do ofertante de milhas para poder prosseguir para a página de pagamento)</li>
                <li><strong>RG:</strong> Insira o número do RG do passageiro.</li>
                <li><strong>Passaporte:</strong> Para passageiros estrangeiros ou em voos internacionais, forneça o número do passaporte.</li>
                <li><strong>Data de expiração do passaporte:</strong> Inclua a data de expiração do passaporte, garantindo que ele esteja válido para a viagem.</li>
                <li><strong>País emissor:</strong> Indique o país que emitiu o passaporte.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Informações adicionais</h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Data de nascimento:</strong> Insira a data de nascimento do passageiro, conforme registrado no Cockpit.</li>
                <li><strong>E-mail:</strong> Utilize o email do ofertante de milhas. Esse contato é importante para enviar confirmações e informações sobre a passagem.</li>
                <li><strong>Telefone:</strong> Insira o telefone do ofertante de milhas, que será utilizado para eventuais comunicações ou notificações.</li>
                <li><strong>Voo internacional:</strong> Atenção! *Em voos internacionais, é necessário utilizar o nome completo do passageiro, incluindo sobrenomes e sufixos.*</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Revisão e confirmação</h2>
            <p>Após preencher todos os campos, revise as informações inseridas para garantir que não haja erros. A precisão dos dados é importante para evitar problemas durante o embarque e garantir que a emissão da passagem ocorra sem contratempos.</p>
        </div>
    ),
},
'Página de pagamento azul': {
    title: 'Página de pagamento Azul',
    videoUrl: 'https://www.youtube.com/embed/HWJwlQHS63s',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Página de pagamento</h1>
            <p>Ao acessar a página de pagamento para finalizar a compra da passagem, siga estas etapas para garantir que o processo seja realizado corretamente:</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Conferir dados do voo e da compra</h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Taxa de embarque:</strong> Verifique se a taxa de embarque exibida está correta. Esse valor é fundamental, pois influencia o limite do cartão de crédito virtual que será gerado.</li>
                <li><strong>Pontos:</strong> Confira a quantidade de milhas (pontos) que será utilizada para a compra da passagem.</li>
                <li><strong>Data do voo:</strong> Confirme que a data do voo está correta e corresponde ao que foi escolhido durante a pesquisa.</li>
                <li><strong>Horário:</strong> Verifique o horário de partida e chegada para garantir que está tudo conforme esperado.</li>
                <li><strong>Voo de ida e volta:</strong> Revise os detalhes de ambos os trechos da viagem (ida e volta) para assegurar que não há discrepâncias.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Adicionar cartão de crédito</h2>
            <p>Após verificar todas as informações, clique no botão para adicionar cartão de crédito.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Gerar cartão de crédito virtual</h2>
            <p>Voltar ao Cockpit: Navegue de volta até o Cockpit no cartão da transação correspondente.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit86} alt="Imagem do Cockpit"></img>
            <p>Gerar cartão de crédito: Clique no ícone de gerar cartão de crédito. Isso gerará um cartão de crédito virtual que será utilizado para o pagamento da passagem.</p>
            <p>Limite do cartão: Lembre-se que o limite do cartão de crédito virtual é baseado na taxa de embarque, por isso é crucial que esse valor esteja correto.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Preencher dados do cartão</h2>
            <p>Preencha os dados solicitados do cartão de crédito virtual gerado, incluindo:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li>Número do cartão</li>
                <li>Data de validade</li>
                <li>Código de segurança (CVV)</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>5. Efetuar o pagamento</h2>
            <p>Após preencher todas as informações do cartão, clique no botão para Efetuar pagamento. Aguarde a confirmação da transação. Se tudo estiver correto, você deverá receber um recibo da compra, que incluirá os detalhes do voo e as informações do pagamento realizado.</p>

            <p>Seguindo estas etapas, você poderá realizar o pagamento de forma eficiente e sem erros, assegurando a finalização da compra da passagem aérea.</p>
        </div>
    ),
},
'E-tickets azul': {
    title: 'E-tickets',
    videoUrl: 'https://www.youtube.com/embed/cM7WAXobzJ8',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>E-tickets</h1>
            <p>Após finalizar o pagamento da passagem, um e-ticket será gerado automaticamente. O e-ticket contém todas as informações necessárias sobre o voo e serve como comprovante da compra. Siga os passos abaixo para garantir que tudo esteja devidamente registrado:</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Gerar o e-ticket</h2>
            <p>Após a confirmação do pagamento, o sistema gerará um e-ticket com os detalhes do voo, incluindo:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li>Número do voo</li>
                <li>Data e hora da partida</li>
                <li>Dados do passageiro</li>
                <li>Taxas e informações de bagagem</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Capturar o e-ticket</h2>
            <p>Utilize uma ferramenta de captura de tela (como Captura e Esboço, Lightshot, ou outra de sua preferência) para salvar uma cópia do e-ticket.</p>
            <p>Dica: Para capturar a tela, você pode usar teclas de atalho como Print Screen ou ferramentas específicas para captura que permitem selecionar apenas a parte da tela desejada.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Voltar ao Cockpit</h2>
            <p>Retorne ao sistema Cockpit no cartão da transação correspondente.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Inserir e-ticket</h2>
            <p>Clique no botão Inserir e-ticket para dar continuidade ao processo de registro do e-ticket.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit87} alt="Imagem do botão Inserir e-ticket"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>5. Preencher informações necessárias</h2>
            <p>Digite as seguintes informações na tela de emissão:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Número do e-Ticket:</strong> Insira o número gerado do e-ticket que você capturou.</li>
                <li><strong>Login do programa de fidelidade:</strong> Forneça o login que você utilizou para a emissão da passagem.</li>
                <li><strong>Número da compra para a companhia aérea:</strong> Insira o número de compra associado ao e-ticket (se aplicável).</li>
                <li><strong>Valor da bagagem paga na companhia aérea:</strong> Informe o valor que foi pago por qualquer bagagem adicional.</li>
                <li><strong>Cartão de crédito utilizado:</strong> Se solicitado, forneça os dados do cartão de crédito que foi utilizado para a compra.</li>
            </ul>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit88} alt="Imagem do preenchimento de informações do e-ticket"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>6. Fazer upload do e-ticket</h2>
            <p>Faça o upload da captura de tela do e-ticket que você salvou anteriormente. Este passo é crucial para garantir que a transação e a emissão estejam devidamente documentadas.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>7. Mensagens de sucesso e erro</h2>
            <p>Após a inserção do e-ticket, o sistema verificará as informações e fornecerá uma mensagem de retorno:</p>
            <p><strong>Mensagem de sucesso:</strong> Se todos os dados estiverem corretos, aparecerá uma confirmação de que o e-ticket foi registrado com sucesso.</p>
        </div>
    ),
},
'Cancelando localizador na companhia azul': {
    title: 'Cancelando localizador na companhia Azul',
    videoUrl: 'https://www.youtube.com/embed/5GHnL4JGY2M',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Cancelando localizador na companhia Azul</h1>
            <p>O cancelamento de e-tickets é uma etapa importante que pode ser necessária devido a diversos motivos, como erros na emissão do bilhete ou solicitações dos passageiros. Nesta aula, abordaremos os passos específicos para cancelar e-tickets nas companhias aéreas, com foco na Azul.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Quando cancelar um e-ticket?</h2>
            <p>O cancelamento do e-ticket é necessário nas seguintes situações:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Erros na emissão do bilhete:</strong>
                    <ul>
                        <li>Dados incorretos (nome, CPF, etc.)</li>
                        <li>Voo incorreto</li>
                        <li>Quantidade de milhas acima do permitido</li>
                    </ul>
                </li>
                <li><strong>Solicitações do passageiro:</strong>
                    <ul>
                        <li>Passageiro requisitou o cancelamento</li>
                        <li>Bilhete emitido em duplicidade</li>
                    </ul>
                </li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Passo a passo para cancelar um e-ticket na Azul</h2>
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Acessar o site da Azul</h3>
            <p>Entre no site oficial da Azul.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoesazul00} alt="Imagem do site da Azul"></img>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Iniciar o atendimento no Chat</h3>
            <p>Clique no ícone do Chat. Siga as instruções e escolha a opção de cancelamento.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoesazul04} alt="Imagem do chat da Azul"></img>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoesazul05} alt="Imagem das instruções no chat"></img>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Confirmar cancelamento</h3>
            <p>Prossiga com o cancelamento.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Registrar mensagem de reembolso</h3>
            <p>Após concluir o cancelamento, copie e cole a mensagem de reembolso feita nos comentários da transação no Cockpit.</p>

            <p>O cancelamento de e-tickets é um processo que deve ser realizado com atenção, garantindo que todas as etapas sejam seguidas corretamente para evitar problemas futuros. Em caso de dúvidas, sempre consulte as diretrizes da companhia aérea e as políticas de cancelamento.</p>
        </div>
    ),
},
'Conferindo extrato azul': {
    title: 'Conferindo extrato azul',
    videoUrl: 'https://www.youtube.com/embed/Wwx_PvkaP4U',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Conferindo o extrato de milhas nas companhias aéreas</h1>
            <p>Uma etapa crucial no processo de emissão e gerenciamento de passagens é a conferência do extrato de milhas. Isso garante que as milhas utilizadas estejam corretas e que os valores estejam de acordo com a transação realizada.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Passo a passo para conferir o extrato</h2>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Conferindo o extrato de milhas na Azul</h3>
            <h4 style={{ marginTop: '30px', marginBottom: '30px' }}>Acessar o site da Azul:</h4>
            <p>Entre no site oficial da Azul.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoesazul00} alt="Imagem do site da Azul"></img>

            <h4 style={{ marginTop: '30px', marginBottom: '30px' }}>Acessar "Meu extrato":</h4>
            <p>Faça login e clique em "Meu extrato" no menu principal.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoesazul06} alt="Imagem da seção 'Meu extrato'"></img>

            <h4 style={{ marginTop: '30px', marginBottom: '30px' }}>Conferir o extrato:</h4>
            <p>Verifique o extrato de milhas para confirmar os valores utilizados e acumulados, certificando-se de que tudo está correto com a transação realizada.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoesazul07} alt="Imagem do extrato de milhas"></img>
        </div>
    ),
},
/*Curso Gol*/
'Categoria de ofertantes gol': {
    title: 'Categoria de ofertantes gol',
    videoUrl: 'https://www.youtube.com/embed/T2Xblr7CpqE',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Programa de fidelidade Smiles</h1>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoofertantes01} alt="Imagem do programa de fidelidade Smiles" />

            <p>O Smiles é um dos principais programas de fidelidade do Brasil, vinculado à Gol Linhas Aéreas. Este programa permite que os clientes acumulem milhas ao realizar viagens e compras, que podem ser trocadas por passagens aéreas, produtos e serviços. A seguir, exploraremos as principais características e benefícios do programa Smiles.</p>
            
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Acúmulo de milhas</h2>
            <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>1.1 Como funciona</h3>
            <p>Os membros do programa acumulam milhas ao realizar voos com a Gol e companhias aéreas parceiras, além de compras em estabelecimentos parceiros. As milhas acumuladas podem ser utilizadas para a compra de passagens, upgrades de classe, diárias em hotéis, locação de veículos e muito mais.</p>

            <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>1.2 Tipos de milhas</h3>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Milhas bônus:</strong> Acumuladas em promoções específicas ou por meio de ações de marketing.</li>
                <li><strong>Milhas regulares:</strong> Obtidas por meio de voos e compras em parceiros.</li>
                <li><strong>Milhas de categoria:</strong> Acumuladas de acordo com o nível de fidelidade do cliente dentro do programa (Smiles, Prata, Ouro e Diamante).</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Níveis de fidelidade</h2>
            <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>2.1 Categorias de membros</h3>
            <p>O programa Smiles possui diferentes níveis de fidelidade, que oferecem benefícios exclusivos conforme o cliente acumula mais milhas e realiza mais voos. As categorias são:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Smiles:</strong> Nível básico, com acesso às promoções e ofertas do programa.</li>
                <li><strong>Prata:</strong> Oferece vantagens adicionais, como milhas bônus em voos e acesso prioritário em filas de embarque.</li>
                <li><strong>Ouro:</strong> Proporciona benefícios como check-in e embarque prioritário, além de um maior acúmulo de milhas.</li>
                <li><strong>Diamante:</strong> O nível mais alto, com benefícios exclusivos, como acesso a salas VIP e milhas adicionais para voos.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Resgate de milhas</h2>
            <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>3.1 Como resgatar</h3>
            <p>Os membros podem resgatar suas milhas de várias maneiras, incluindo:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Passagens aéreas:</strong> Troca de milhas por passagens em voos da Gol e companhias aéreas parceiras.</li>
                <li><strong>Upgrades de classe:</strong> Utilização de milhas para atualizar a classe do voo.</li>
                <li><strong>Produtos e serviços:</strong> Troca de milhas por produtos e serviços disponíveis no catálogo do programa.</li>
            </ul>
        </div>
    ),
},
'Verificando quantidade de milhas e voo disponível gol': {
    title: 'Verificando quantidade de milhas e voo disponível gol',
    videoUrl: 'https://www.youtube.com/embed/BKqgSWFDQcU',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Verificando informações sobre o voo e milhas</h1>
            <p>Após iniciar uma transação no sistema Cockpit, o próximo passo é garantir que os dados estejam alinhados com a realidade da companhia aérea. Para isso, é necessário verificar se o voo e a quantidade de milhas estão corretos.</p>
            
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Acessar o site da companhia aérea</h2>
            <p>Acesse o site da companhia aérea escolhida para a emissão da passagem e faça o login na conta do ofertante com os dados disponibilizados no Cockpit.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoesgol00} alt="Imagem do site da companhia aérea"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Buscar pelo voo</h2>
            <p>Procure o voo exato que foi inserido no Cockpit, verificando:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Data do voo:</strong> Confirme se a data está correta e se o voo ainda está disponível para emissão.</li>
                <li><strong>Horário do voo:</strong> Verifique se o horário de partida e chegada corresponde ao informado.</li>
                <li><strong>Número do voo:</strong> Confirme o número do voo para garantir que se trata do voo correto.</li>
            </ul>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit101} alt="Imagem dos dados do voo"></img>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoesgol01} alt="Imagem da busca pelo voo"></img>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoesgol02} alt="Imagem da confirmação do voo"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Verificar milhas</h2>
            <p>Certifique-se de que a quantidade de milhas exigida para a emissão no site da companhia aérea está de acordo com o valor indicado no Cockpit. Caso tenha ocorrido um aumento de milhas, será necessário ajustar a transação ou buscar alternativas.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit84} alt="Imagem da verificação de milhas"></img>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoesgol03} alt="Imagem da confirmação de milhas"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Verificar a tarifa</h2>
            <p>Além das milhas, é importante garantir que a tarifa selecionada está correta. Verifique se a tarifa correspondente no site da companhia (Light, Executive, etc.) é a mesma que está registrada no Cockpit. Qualquer divergência na tarifa também deve ser ajustada para evitar problemas na emissão.</p>
        </div>
    ),
},
'Simulador Android': {
    title: 'Simulador Android',
    videoUrl: 'https://www.youtube.com/embed/rfWL5CFWPMM',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Simulador Android</h1>
            <p>Acesse o aplicativo Smiles pelo simulador LDPlayer e faça o login na conta do ofertante com os dados disponibilizados no Cockpit:</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoesgol04} alt="Login no aplicativo Smiles"></img>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoesgol05} alt="Login no aplicativo Smiles"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Buscar pelo voo</h2>
            <p>Procure o voo exato que foi inserido no Cockpit, verificando:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Data do voo:</strong> Confirme se a data está correta e se o voo ainda está disponível para emissão.</li>
                <li><strong>Horário do voo:</strong> Verifique se o horário de partida e chegada corresponde ao informado.</li>
                <li><strong>Número do voo:</strong> Confirme o número do voo para garantir que se trata do voo correto.</li>
            </ul>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit102} alt="Verificação do voo"></img>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoesgol06} alt="Verificação do voo"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Verificar milhas</h2>
            <p>Certeza de que a quantidade de milhas exigida para a emissão no site da companhia aérea está de acordo com o valor indicado no Cockpit. Caso tenha ocorrido um aumento de milhas, será necessário ajustar a transação ou buscar alternativas.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit84} alt="Verificação de milhas"></img>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoesgol07} alt="Verificação de milhas"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Verificar a tarifa</h2>
            <p>Além das milhas, é importante garantir que a tarifa selecionada está correta. Verifique se a tarifa correspondente no site da companhia (Light, Executive, etc.) é a mesma que está registrada no Cockpit. Qualquer divergência na tarifa também deve ser ajustada para evitar problemas na emissão.</p>
        </div>
    ),
},
'Emissões manuais gol': {
    title: 'Emissões manuais gol',
    videoUrl: 'https://www.youtube.com/embed/aN62whq7X6g',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Emissões manuais</h1>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoofertantes01} alt="Imagem da emissão manual" />

            <p>A emissão manual é o processo de compra de passagens aéreas onde os dados são inseridos manualmente no sistema, ao contrário das emissões automáticas, que são realizadas de forma automatizada.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Importância</h2>
            <p>Seguir os procedimentos corretos durante a emissão manual é importante para evitar erros que possam resultar em problemas na viagem, como a falta de informações ou dados incorretos.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Verificação de milhas e disponibilidade de voo</h2>
            <h3>Passos:</h3>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '10px', marginBottom: '30px' }}>
                <li>Acesse o sistema e verifique a quantidade de milhas disponível para o ofertante.</li>
                <li>Confirme a disponibilidade do voo desejado.</li>
            </ul>
            <h3>Importante</h3>
            <p>Atualize a quantidade de milhas antes de prosseguir para garantir que a transação possa ser realizada sem contratempos.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Seleção do ofertante</h2>
            <h3>Procedimento:</h3>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '10px', marginBottom: '30px' }}>
                <li>Acesse o sistema e localize a lista de ofertantes.</li>
                <li>Selecione o ofertante que deseja utilizar para a transação.</li>
            </ul>
            <h3>Relevância</h3>
            <p>Verifique se o ofertante está logado corretamente para evitar erros no cadastro do passageiro.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Cadastro do passageiro no site da companhia aérea</h2>
            <h3>Informações a serem inseridas:</h3>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '10px', marginBottom: '30px' }}>
                <li><strong>Nome:</strong> Primeiro nome do passageiro conforme registrado no Cockpit.</li>
                <li><strong>Sobrenome:</strong> Último sobrenome para voos nacionais ou nome completo para voos internacionais.</li>
                <li><strong>Sufixo:</strong> Adicione o sufixo se aplicável (ex.: Jr., Sr., etc.).</li>
                <li><strong>CPF:</strong> Essencial para identificação nas companhias aéreas.</li>
                <li>Nota: Na LATAM, utilize o CPF do ofertante para prosseguir para a página de pagamento.</li>
                <li><strong>RG:</strong> Número do RG do passageiro.</li>
                <li><strong>Passaporte:</strong> Número do passaporte para passageiros estrangeiros.</li>
                <li><strong>Data de expiração do passaporte:</strong> Verifique se está válido para a viagem.</li>
                <li><strong>País emissor:</strong> Indique o país que emitiu o passaporte.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Página de pagamento</h2>
            <h3>Passos:</h3>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '10px', marginBottom: '30px' }}>
                <li>Conferir dados do voo e da compra:</li>
                <ul style={{ listStyleType: 'circle', marginLeft: '30px' }}>
                    <li><strong>Taxa de embarque:</strong> Verifique se está correta.</li>
                    <li><strong>Pontos:</strong> Confirme a quantidade de milhas a serem utilizadas.</li>
                    <li><strong>Data do voo:</strong> Assegure que está correta.</li>
                    <li><strong>Horário:</strong> Verifique horários de partida e chegada.</li>
                    <li><strong>Voo de ida e volta:</strong> Revise os detalhes de ambos os trechos.</li>
                </ul>
                <li>Adicionar cartão de crédito:</li>
                <li>Clique no botão para adicionar cartão de crédito...</li>
            </ul>
        </div>
    ),
},
'Cadastrando passageiros gol': {
    title: 'Cadastrando passageiros',
    videoUrl: 'https://www.youtube.com/embed/pWnvzjU66-Q',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Cadastrando passageiros</h1>
            <p>Ao acessar o site da companhia aérea para cadastrar os passageiros, siga as orientações abaixo para garantir que todas as informações sejam inseridas corretamente, de acordo com os dados disponíveis no Cockpit:</p>
            
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Informações do passageiro</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit50} alt="Imagem das informações do passageiro"></img>

            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Nome:</strong> Insira o primeiro nome do passageiro conforme registrado no Cockpit.</li>
                <li><strong>Sobrenome:</strong> Para voos nacionais, utilize o último sobrenome do passageiro. Para voos internacionais, insira o nome completo.</li>
                <li><strong>Sufixo:</strong> Se aplicável, adicione o sufixo do passageiro (ex.: Jr., Sr., etc.).</li>
                <li><strong>CPF:</strong> Preencha com o CPF do passageiro. Este dado é essencial para identificação nas companhias aéreas. (Atenção! Na cia LATAM, utilize o CPF do ofertante de milhas para poder prosseguir para a página de pagamento)</li>
                <li><strong>RG:</strong> Insira o número do RG do passageiro.</li>
                <li><strong>Passaporte:</strong> Para passageiros estrangeiros ou em voos internacionais, forneça o número do passaporte.</li>
                <li><strong>Data de expiração do passaporte:</strong> Inclua a data de expiração do passaporte, garantindo que ele esteja válido para a viagem.</li>
                <li><strong>País emissor:</strong> Indique o país que emitiu o passaporte.</li>
            </ul>

            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoesgol08} alt="Imagem de informações adicionais"></img>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoesgol09} alt="Imagem de informações adicionais"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Informações adicionais</h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Data de nascimento:</strong> Insira a data de nascimento do passageiro, conforme registrado no Cockpit.</li>
                <li><strong>E-mail:</strong> Utilize o email do ofertante de milhas. Esse contato é importante para enviar confirmações e informações sobre a passagem.</li>
                <li><strong>Telefone:</strong> Insira o telefone do ofertante de milhas, que será utilizado para eventuais comunicações ou notificações.</li>
                <li><strong>Voo internacional:</strong> Atenção! Em voos internacionais, é necessário utilizar o nome completo do passageiro, incluindo sobrenomes e sufixos.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Revisão e confirmação</h2>
            <p>Após preencher todos os campos, revise as informações inseridas para garantir que não haja erros.</p>
            <p>A precisão dos dados é importante para evitar problemas durante o embarque e garantir que a emissão da passagem ocorra sem contratempos.</p>
        </div>
    ),
},
'Página de pagamento gol': {
    title: 'Página de pagamento',
    videoUrl: 'https://www.youtube.com/embed/Z32-WE18OIE',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Página de pagamento</h1>
            <p>Ao acessar a página de pagamento para finalizar a compra da passagem, siga estas etapas para garantir que o processo seja realizado corretamente:</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Conferir dados do voo e da compra</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoesgol10} alt="Imagem de conferência de dados do voo e da compra" />

            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Taxa de embarque:</strong> Verifique se a taxa de embarque exibida está correta. Esse valor é fundamental, pois influencia o limite do cartão de crédito virtual que será gerado.</li>
                <li><strong>Pontos:</strong> Confira a quantidade de milhas (pontos) que será utilizada para a compra da passagem.</li>
                <li><strong>Data do voo:</strong> Confirme que a data do voo está correta e corresponde ao que foi escolhido durante a pesquisa.</li>
                <li><strong>Horário:</strong> Verifique o horário de partida e chegada para garantir que está tudo conforme esperado.</li>
                <li><strong>Voo de ida e volta:</strong> Revise os detalhes de ambos os trechos da viagem (ida e volta) para assegurar que não há discrepâncias.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Adicionar cartão de crédito</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoesgol11} alt="Imagem para adicionar cartão de crédito" />

            <p>Após verificar todas as informações, clique no botão para adicionar cartão de crédito.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Gerar cartão de crédito virtual</h2>
            <p>Voltar ao Cockpit: Navegue de volta até o Cockpit no cartão da transação correspondente.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit86} alt="Imagem de navegação de volta ao Cockpit" />

            <p>Gerar cartão de crédito: Clique no ícone de cartão de crédito. Isso gerará um cartão de crédito virtual que será utilizado para o pagamento da passagem.</p>
            <p>Limite do cartão: Lembre-se que o limite do cartão de crédito virtual é baseado na taxa de embarque, por isso é importante que esse valor esteja correto.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Preencher dados do cartão</h2>
            <p>Preencha os dados solicitados do cartão de crédito virtual gerado, incluindo:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li>Número do cartão</li>
                <li>Data de validade</li>
                <li>Código de segurança (CVV)</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>5. Efetuar o pagamento</h2>
            <p>Após preencher todas as informações do cartão, clique no botão para Efetuar pagamento.</p>
            <p>Aguarde a confirmação da transação. Se tudo estiver correto, você deverá receber um recibo da compra, que incluirá os detalhes do voo e as informações do pagamento realizado.</p>

            <p>Seguindo estas etapas, você poderá realizar o pagamento de forma eficiente e sem erros, assegurando a finalização da compra da passagem aérea.</p>
            <h1 style={{ marginTop: '30px', marginBottom: '30px' }}>Códigos de verificação Gol</h1>
            <p>Em algumas transações feitas com milhas Gol Smiles, pode ser solicitado um código de verificação para concluir o pagamento. Esse código pode ser enviado via e-mail ou SMS. Na MaxMilhas, os ofertantes podem ter um e-mail de redirecionamento ou utilizar uma chipeira para receber esses códigos, o que facilita o acesso pelos analistas.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Código via e-mail</h2>
            <p>Redirecionamento de e-mail: Muitos ofertantes têm um e-mail de redirecionamento configurado em seu cadastro. Todos os códigos de verificação solicitados durante o pagamento são enviados para esse e-mail, que é acessível pelos analistas.</p>
            <p>Acesso pelo Cockpit:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li>Vá até a transação específica no Cockpit.</li>
                <li>Clique em Transação completa.</li>
                <li>Selecione Opções e, em seguida, clique em Código Smiles.</li>
                <li>Digite o e-mail de redirecionamento para buscar o código.</li>
            </ul>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit77} alt="Imagem do acesso ao código via e-mail"></img>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit78} alt="Imagem do Cockpit mostrando a opção para código Smiles"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Código via SMS (Chipeira)</h2>
            <p>Utilizando a chipeira: Alguns ofertantes utilizam uma chipeira para receber os códigos via SMS. O código enviado para o número de celular registrado no Gol Smiles é encaminhado para uma caixa de e-mail associada à chipeira, onde os analistas podem acessá-lo.</p>
            <p>Acesso pelo Cockpit:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li>No Cockpit, vá até a transação que requer o código.</li>
                <li>Clique em Transação completa, acesse Opções, selecione Código Smiles e insira o número da chipeira para buscar o código.</li>
            </ul>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit77} alt="Imagem do acesso ao código via SMS"></img>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit78} alt="Imagem do Cockpit mostrando a opção para código Smiles"></img>

            <p>Saber acessar os códigos de verificação de e-mail ou SMS é essencial para finalizar com sucesso as transações da Gol Smiles. Utilizar as ferramentas corretas, como o Cockpit, e ter acesso ao e-mail de redirecionamento ou à chipeira garante que o processo seja rápido e eficiente.</p>
        </div>
    ),
},
'E-tickets gol': {
    title: 'E-tickets gol',
    videoUrl: 'https://www.youtube.com/embed/-RwTrJn1IyY',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>E-tickets</h1>
            <p>Após finalizar o pagamento da passagem, um e-ticket será gerado automaticamente. O e-ticket contém todas as informações necessárias sobre o voo e serve como comprovante da compra. Siga os passos abaixo para garantir que tudo esteja devidamente registrado:</p>
            
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Gerar o e-ticket</h2>
            <p>Após a confirmação do pagamento, o sistema gerará um e-ticket com os detalhes do voo, incluindo:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li>Número do voo</li>
                <li>Data e hora da partida</li>
                <li>Dados do passageiro</li>
                <li>Taxas e informações de bagagem</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Capturar o e-ticket</h2>
            <p>Utilize uma ferramenta de captura de tela (como Captura e Esboço, Lightshot, ou outra de sua preferência) para salvar uma cópia do e-ticket.</p>
            <p>Dica: Para capturar a tela, você pode usar teclas de atalho como Print Screen ou ferramentas específicas para captura que permitem selecionar apenas a parte da tela desejada.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Voltar ao Cockpit</h2>
            <p>Retorne ao sistema Cockpit no cartão da transação correspondente.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Inserir e-ticket</h2>
            <p>Clique no botão Inserir e-ticket para dar continuidade ao processo de registro do e-ticket.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit87} alt="Imagem da inserção do e-ticket"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>5. Preencher informações necessárias</h2>
            <p>Digite as seguintes informações na tela de emissão:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Número do e-ticket:</strong> Insira o número gerado do e-ticket que você capturou.</li>
                <li><strong>Login do programa de fidelidade:</strong> Forneça o login que você utilizou para a emissão da passagem.</li>
                <li><strong>Número da compra para a companhia aérea:</strong> Insira o número de compra associado ao e-ticket (se aplicável).</li>
                <li><strong>Valor da bagagem paga na companhia aérea:</strong> Informe o valor que foi pago por qualquer bagagem adicional.</li>
                <li><strong>Cartão de crédito utilizado:</strong> Se solicitado, forneça os dados do cartão de crédito que foi utilizado para a compra.</li>
            </ul>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit88} alt="Imagem das informações do e-ticket"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>6. Fazer upload do e-ticket</h2>
            <p>Faça o upload da captura de tela do e-ticket que você salvou anteriormente. Este passo é importante para garantir que a transação e a emissão estejam devidamente documentadas.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>7. Mensagens de sucesso e erro</h2>
            <p>Após a inserção do e-ticket, o sistema verificará as informações e fornecerá uma mensagem de retorno:</p>
            <p><strong>Mensagem de sucesso:</strong> Se todos os dados estiverem corretos, aparecerá a mensagem: "Sucesso...</p>
        </div>
    ),
},
'Cancelando localizador na companhia gol': {
    title: 'Cancelando localizador na companhia gol',
    videoUrl: 'https://www.youtube.com/embed/-lvapHzmx0o',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Cancelamento de e-tickets na companhia aérea</h1>
            <p>O cancelamento de e-tickets é uma etapa importante que pode ser necessária devido a diversos motivos, como erros na emissão do bilhete ou solicitações dos passageiros. Nesta aula, abordaremos os passos específicos para cancelar e-tickets nas companhias aéreas, com foco na Azul.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Quando cancelar um e-ticket?</h2>
            <p>O cancelamento do e-ticket é necessário nas seguintes situações:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Erros na emissão do bilhete:</strong>
                    <ul style={{ listStyleType: 'circle', marginLeft: '30px' }}>
                        <li>Dados incorretos (nome, CPF, etc.)</li>
                        <li>Voo incorreto</li>
                        <li>Quantidade de milhas acima do permitido</li>
                    </ul>
                </li>
                <li><strong>Solicitações do passageiro:</strong>
                    <ul style={{ listStyleType: 'circle', marginLeft: '30px' }}>
                        <li>Passageiro requisitou o cancelamento</li>
                        <li>Emissão duplicidade</li>
                        <li>Bilhete emitido em duplicidade</li>
                    </ul>
                </li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Passo a passo para cancelar um e-ticket na Gol</h2>
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Acessar o site da Gol</h3>
            <p>Entre no site oficial da Gol.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoesgol12} alt="Imagem do site da Gol"></img>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Localizar o voo</h3>
            <p>Vá até a seção "Meus voos".</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoesgol13} alt="Imagem da seção Meus voos"></img>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Acessar cancelamento de voo</h3>
            <p>Clique na viagem desejada para acessar a página de detalhes. Selecione a opção "Cancelamento de voo".</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoesgol14} alt="Imagem do cancelamento de voo"></img>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Confirmar cancelamento</h3>
            <p>Prossiga com o cancelamento.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoesgol15} alt="Imagem da confirmação de cancelamento"></img>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>5. Registrar mensagem de reembolso</h3>
            <p>Após concluir o cancelamento, copie e cole a mensagem de reembolso feita nos comentários da transação no Cockpit.</p>

            <p>O cancelamento de e-tickets é um processo que deve ser realizado com atenção, garantindo que todas as etapas sejam seguidas corretamente para evitar problemas futuros. Em caso de dúvidas, sempre consulte as diretrizes da companhia aérea e as políticas de cancelamento.</p>
        </div>
    ),
},
'Conferindo extrato gol': {
    title: 'Conferindo extrato gol',
    videoUrl: 'https://www.youtube.com/embed/UAPr-2fWdjU',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Conferindo extrato</h1>
            <p>Uma etapa importante no processo de emissão e gerenciamento de passagens é a conferência do extrato de milhas. Isso garante que as milhas utilizadas estejam corretas e que os valores estejam de acordo com a transação realizada.</p>
            
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Passo a passo para conferir o extrato</h2>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Conferindo o extrato de milhas na Gol</h3>

            <h4 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Acessar o site da Gol</h4>
            <p>Entre no site oficial da Gol.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoesgol12} alt="Acessar o site da Gol"></img>

            <h4 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Acessar "Meu extrato"</h4>
            <p>Faça login e clique em "Meu extrato" no menu principal.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoesgol16} alt="Acessar Meu extrato"></img>

            <h4 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Conferir o extrato</h4>
            <p>Verifique o extrato de milhas para confirmar os valores utilizados e acumulados, certificando-se de que tudo está correto com a transação realizada.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoesgol17} alt="Conferir extrato de milhas"></img>
        </div>
    ),
},
/*História*/
'História da fundação da empresa': {
    title: 'História da fundação da empresa',
    videoUrl: 'https://www.youtube.com/embed/aWD85TlryOU',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>História da fundação</h1>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursohistoria00} alt="Imagem da história da fundação da MaxMilhas"></img>

            <p>A MaxMilhas foi fundada em 2013, com o objetivo de resolver um problema comum no mercado de passagens aéreas: a alta variação de preços. O diferencial da empresa é que ela permite que pessoas que acumulam milhas em programas de fidelidade possam vendê-las, enquanto outras pessoas podem comprar passagens aéreas com desconto, utilizando essas milhas.</p>
            <p>A ideia surgiu a partir de uma observação sobre como as milhas aéreas, muitas vezes, são subutilizadas pelos usuários, enquanto outras pessoas poderiam se beneficiar de passagens mais acessíveis. Esse modelo de negócio é único, e a MaxMilhas revolucionou o setor ao conectar quem deseja vender suas milhas com quem procura comprar passagens mais baratas.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>O crescimento exponencial</h2>
            <p>Em pouco tempo, a MaxMilhas se destacou no mercado, ganhando popularidade por oferecer uma plataforma intuitiva e eficiente. A empresa cresceu rapidamente, passando de uma pequena equipe para centenas de colaboradores. Em menos de sete anos, já havia facilitado a emissão de milhões de passagens aéreas.</p>
            <p>Com seu crescimento, a MaxMilhas também expandiu seu leque de serviços, passando a oferecer não só a emissão de passagens com milhas, mas também a comparação de preços com companhias aéreas tradicionais, permitindo que o cliente faça a melhor escolha em suas viagens.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Inovação e impacto no mercado</h2>
            <p>A inovação foi sempre um dos pilares da MaxMilhas. Desde o início, a empresa buscou maneiras de facilitar a vida de seus usuários, permitindo que eles viajem mais gastando menos. Essa abordagem fez com que a MaxMilhas fosse reconhecida por diversas premiações no setor de startups e inovação.</p>
            <p>Ao longo dos anos, a MaxMilhas também tem sido uma empresa com uma forte cultura de impacto social, buscando proporcionar experiências não apenas aos seus clientes, mas também aos seus colaboradores, promovendo um ambiente de trabalho saudável e inovador.</p>

            <p>A história da MaxMilhas é marcada por uma combinação de inovação, identificação de uma necessidade de mercado e a criação de uma solução que beneficia milhares de pessoas. A empresa continua em crescimento, buscando novas maneiras de melhorar a experiência de compra de passagens aéreas e manter sua posição de destaque no mercado latino-americano.</p>
        </div>
    ),
},
'Principais marcos e conquistas': {
    title: 'Principais marcos e conquistas',
    videoUrl: 'https://www.youtube.com/embed/4vDeXN7OZq0',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Principais marcos e conquistas da MaxMilhas</h1>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursohistoria01} alt="Imagem dos principais marcos da MaxMilhas"></img>
            
            <p>Ao longo de sua trajetória, a MaxMilhas atingiu marcos importantes e se consolidou como uma das principais empresas de venda de passagens aéreas com milhas no Brasil. Esses marcos e conquistas reforçam a inovação e o impacto positivo que a empresa tem gerado tanto no setor de turismo quanto no mercado de startups. Aqui estão alguns dos principais momentos que definiram o sucesso da empresa:</p>
            
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Lançamento da plataforma (2013)</h2>
            <p>A MaxMilhas foi oficialmente lançada como uma plataforma que conecta vendedores de milhas a compradores de passagens aéreas. Essa ideia inovadora permitiu que as pessoas viajassem mais barato, utilizando milhas que antes poderiam expirar sem uso.</p>
            
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Crescimento rápido e aceleração (2014)</h2>
            <p>Em menos de um ano de operação, a empresa mostrou crescimento exponencial. No mesmo ano, foi acelerada por um dos programas mais reconhecidos do país, o que trouxe visibilidade e impulsionou ainda mais seu desenvolvimento no mercado.</p>
            
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Atingiu o break-even (2014)</h2>
            <p>Pouco tempo após seu lançamento, a MaxMilhas atingiu o ponto de equilíbrio financeiro (break-even), o que demonstrou a viabilidade do modelo de negócios e permitiu que a empresa seguisse seu caminho de crescimento sustentável.</p>
            
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Reconhecimento nacional como startup de destaque (2017)</h2>
            <p>A MaxMilhas foi eleita a Startup do Ano pelo Startup Awards, um reconhecimento importante no ecossistema de inovação brasileiro. Esse prêmio consolidou sua posição como uma das startups mais promissoras do país.</p>
            
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>5. Premiações e reconhecimento da mídia (2017-2019)</h2>
            <p>Ao longo dos anos, a MaxMilhas foi destaque em várias publicações e eventos importantes, incluindo estar entre as 100 Startups Brasileiras para Ficar de Olho, pelas revistas Época Negócios e Pequenas Empresas & Grandes Negócios. Também recebeu o Prêmio E-Commerce Brasil de Inovação, mostrando a força da empresa no setor digital.</p>
            
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>6. Crescimento da equipe e expansão da estrutura</h2>
            <p>A MaxMilhas começou com uma equipe reduzida e, ao longo dos anos, cresceu para mais de 400 colaboradores, acompanhando seu ritmo de expansão.</p>
        </div>
    ),
},
'Cultura organizacional': {
    title: 'Cultura organizacional',
    videoUrl: 'https://www.youtube.com/embed/KbSJJyRcsLU',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Cultura organizacional</h1>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursohistoria02} alt="Imagem da cultura organizacional da Maxmilhas" />

            <p>A cultura organizacional da MaxMilhas é um dos pilares que sustentam o sucesso e o crescimento da empresa ao longo dos anos. Mais do que apenas um conjunto de regras e diretrizes, a cultura da empresa reflete seus valores, práticas e a forma como interage com seus colaboradores e clientes. Aqui estão os principais elementos que definem essa cultura:</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Propósito claro: tornar viagens mais acessíveis</h2>
            <p>Desde o início, a MaxMilhas foi fundada com o propósito de permitir que mais pessoas pudessem viajar de forma acessível. Esse objetivo se tornou a essência da empresa e guia todas as suas decisões e ações. Cada colaborador é incentivado a trabalhar com foco em como suas atividades impactam diretamente a realização desse propósito, seja melhorando a experiência do cliente ou inovando em soluções.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Inovação e agilidade</h2>
            <p>A MaxMilhas foi criada em um ambiente de constante mudança e inovação. Isso reflete a forma como a empresa opera internamente: incentivando a criatividade, o aprendizado rápido e a adaptação às demandas do mercado. Os colaboradores são encorajados a propor novas ideias, experimentar e aprender com erros. A inovação não está restrita apenas à tecnologia, mas a todas as áreas da empresa.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Valorização do colaborador</h2>
            <p>A empresa acredita que as pessoas são seu maior ativo. A MaxMilhas investe fortemente em proporcionar um ambiente de trabalho saudável e colaborativo, onde os funcionários têm espaço para crescer e se desenvolver. A empresa oferece benefícios como milhas para que os colaboradores possam viajar e viver as experiências que ajudam a construir para os clientes.</p>
            <p>Além disso, programas de reconhecimento interno são comuns, com feedbacks constantes e a promoção de uma cultura de diálogo aberto entre líderes e equipes. Esse reconhecimento contínuo se reflete nos prêmios recebidos pela empresa, como um dos melhores lugares para se trabalhar segundo o Great Place to Work (GPTW).</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Foco no cliente</h2>
            <p>A MaxMilhas tem um foco intenso no cliente, buscando sempre melhorar a experiência de quem usa a plataforma. Esse compromisso com a excelência no atendimento é refletido na relação próxima que a empresa mantém com seus usuários, tanto nas interações diretas quanto no desenvolvimento de produtos e serviços.</p>
        </div>
    ),
},
'Valores e missão da empresa': {
    title: 'Valores e missão da empresa',
    videoUrl: 'https://www.youtube.com/embed/wTTLTSwG3HI',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Valores e missão da MaxMilhas</h1>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursohistoria03} alt="Imagem dos valores da MaxMilhas"></img>
            
            <p>Na MaxMilhas, quatro verbos-chave guiam a forma como a empresa atua e se posiciona, tanto internamente quanto externamente: amar, aproximar, acelerar e arriscar. Esses verbos expressam os princípios centrais da cultura da empresa e o espírito empreendedor que permeia suas atividades.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Amar</h2>
            <p>Na MaxMilhas, amar o que se faz é fundamental. Esse valor reflete o compromisso de toda a equipe em oferecer as melhores soluções para os clientes, promovendo um ambiente de trabalho onde a paixão por fazer a diferença está sempre presente.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Aproximar</h2>
            <p>O propósito de aproximar pessoas por meio das viagens é o coração da MaxMilhas. A empresa conecta clientes e vendedores de milhas, tornando as viagens mais acessíveis, e também se empenha em construir laços sólidos entre seus colaboradores, parceiros e consumidores.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Acelerar</h2>
            <p>A MaxMilhas valoriza a agilidade e a inovação. Acelerar significa buscar constantemente melhorias e novas soluções para se manter à frente do mercado, garantindo que as pessoas possam realizar seus sonhos de viajar com mais facilidade e rapidez.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Arriscar</h2>
            <p>Arriscar faz parte do DNA da MaxMilhas. A empresa encoraja a ousadia e a tomada de decisões corajosas, sempre em busca de novas oportunidades e desafios. Isso envolve testar novas ideias e aprender com os erros, o que é essencial para o crescimento contínuo.</p>

            <p>Esses quatro verbos refletem a essência da MaxMilhas, guiando suas ações e reforçando sua missão de transformar o mercado de passagens aéreas.</p>
        </div>
    ),
},
'Como a empresa se posiciona no mercado': {
    title: 'Como a empresa se posiciona no mercado',
    videoUrl: 'https://www.youtube.com/embed/aJT8j6HSdFw',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Posicionamento da MaxMilhas no mercado</h1>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursohistoria04} alt="Imagem do posicionamento da MaxMilhas no mercado"></img>

            <p>A MaxMilhas se destaca no mercado de passagens aéreas por meio de uma proposta inovadora e acessível, que visa democratizar o acesso a viagens. O posicionamento da empresa pode ser resumido em alguns pontos-chave:</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Modelo de negócio único</h2>
            <p>A MaxMilhas opera como uma plataforma que conecta pessoas que desejam vender suas milhas com aquelas que desejam comprar passagens aéreas. Esse modelo permite que a empresa ofereça tarifas mais competitivas em comparação com as praticadas pelas companhias aéreas tradicionais.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Acessibilidade e inclusão</h2>
            <p>A missão da empresa é tornar as viagens mais acessíveis, permitindo que mais pessoas realizem o sonho de viajar. Isso se reflete em preços justos e na oferta de opções que atendem a diferentes perfis de consumidores.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Tecnologia e inovação</h2>
            <p>A MaxMilhas investe continuamente em tecnologia para aprimorar a experiência do usuário, facilitando a pesquisa e a compra de passagens. A plataforma é projetada para ser intuitiva e eficiente, oferecendo informações claras e relevantes aos clientes.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Experiência do cliente</h2>
            <p>A empresa se preocupa em proporcionar uma experiência positiva aos seus usuários. O atendimento ao cliente é um dos pilares do negócio, sendo reconhecido pela qualidade e pela personalização. Isso se reflete em prêmios e certificações que atestam a excelência no relacionamento com o consumidor.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Cultura de inovação</h2>
            <p>A MaxMilhas promove uma cultura organizacional que valoriza a inovação e a criatividade. A empresa está sempre em busca de novas soluções e serviços que possam enriquecer a experiência de viagem, como ofertas exclusivas e parcerias estratégicas.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Reconhecimento no mercado</h2>
            <p>Com o passar dos anos, a MaxMilhas consolidou sua posição como uma das principais plataformas de venda de passagens aéreas do Brasil. O reconhecimento em premiações e a presença em rankings de destaque refletem sua credibilidade e relevância no setor.</p>

            <p>Em resumo, a MaxMilhas se posiciona como uma empresa inovadora e acessível no mercado de passagens aéreas, comprometida com a democratização das viagens e a satisfação do cliente.</p>
        </div>
    ),
},
'Estrutura hierárquica e equipes': {
    title: 'Estrutura hierárquica e equipes da MaxMilhas',
    videoUrl: 'https://www.youtube.com/embed/cXZ10wKdJC8',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Estrutura hierárquica e equipes da MaxMilhas</h1>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={require('./assets/Cursos/Historia/cursohistoria05.jpg')} alt="Imagem da estrutura hierárquica"></img>

            <p>A estrutura hierárquica da MaxMilhas é projetada para promover a colaboração, a inovação e a agilidade nas operações. Com uma equipe diversificada e multidisciplinar, a empresa está organizada em diferentes camadas, cada uma com responsabilidades claras e bem definidas. Abaixo estão os principais níveis da estrutura organizacional:</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Alta direção</h2>
            <p>A alta direção é composta pelos fundadores e executivos seniores, responsáveis pela definição da estratégia global da empresa, pela visão a longo prazo e pela tomada de decisões críticas que afetam o futuro da MaxMilhas. Este grupo lidera a cultura organizacional e garante que os valores e a missão sejam incorporados em todas as operações.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Gerências</h2>
            <p>As gerências são responsáveis pela supervisão de áreas específicas, como marketing, operações, tecnologia, finanças e atendimento ao cliente. Cada gerente lidera uma equipe e é responsável pela implementação de estratégias que atendam aos objetivos da empresa, garantindo eficiência e eficácia em suas respectivas áreas.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Equipes de operações</h2>
            <p>As equipes de operações são fundamentais para o funcionamento diário da MaxMilhas. Elas lidam com a emissão de passagens, a gestão de milhas, o relacionamento com companhias aéreas e a resolução de problemas dos clientes. Essas equipes são formadas por profissionais que trabalham em conjunto para garantir que cada transação seja processada com precisão e agilidade.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Equipe de atendimento ao cliente</h2>
            <p>A equipe de atendimento ao cliente é o ponto de contato entre a empresa e os clientes. Com uma abordagem centrada no cliente, essa equipe se dedica a resolver dúvidas, fornecer suporte e garantir que cada cliente tenha uma experiência positiva ao interagir com a MaxMilhas. Eles são treinados para lidar com uma variedade de situações e garantir a satisfação do cliente.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Equipe de marketing</h2>
            <p>A equipe de marketing é responsável por promover a marca MaxMilhas e suas ofertas. Eles desenvolvem campanhas publicitárias, gerenciam as redes sociais e trabalham na criação de conteúdos que informem e atraiam potenciais clientes. O objetivo é aumentar a visibilidade da empresa e expandir sua base de clientes.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Equipe de tecnologia</h2>
            <p>A equipe de tecnologia é encarregada de desenvolver e manter a plataforma da MaxMilhas. Eles garantem que o sistema funcione de maneira eficiente e segura, implementando novas funcionalidades e atualizações para melhorar a experiência do usuário.</p>
        </div>
    ),
},
'Guia da marca': {
    title: 'Guia da marca',
    videoUrl: 'https://www.youtube.com/embed/OzHry0QsouM',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Guia da marca</h1>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursohistoria06} alt="Imagem do guia da marca"></img>
            <p>Nesta aula, iremos explorar os principais aspectos do guia de marca da Maxmilhas, que inclui desde a estratégia até a identidade verbal e visual. O foco é entender como esses elementos contribuem para construir uma comunicação coerente e eficaz para a marca, de forma a gerar conexão com o público.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>O que você vai encontrar aqui:</h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li>Estratégia</li>
                <li>Cérebro de Branding</li>
                <li>Posicionamento</li>
                <li>Tagline</li>
                <li>Brand Persona</li>
                <li>Manifesto</li>
                <li>Quem Somos</li>
                <li>Identidade Verbal</li>
                <li>Regra de tom de voz</li>
                <li>Diretrizes de tom de voz</li>
                <li>Regras de linguagem</li>
                <li>Dicionário</li>
                <li>Emojis</li>
                <li>Identidade Visual</li>
                <li>Logo</li>
                <li>Cores</li>
                <li>Tipografia</li>
                <li>Grafismos</li>
                <li>Ilustrações</li>
                <li>Fotografia</li>
                <li>Aplicações</li>
                <li>Boas práticas no uso de elementos verbais e visuais.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Estratégia de marca</h2>
            <p>A estratégia de marca da Maxmilhas é guiada por um conceito chamado Cérebro de Branding, que organiza as diretrizes da empresa em duas vertentes:</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Cérebro de branding da MaxMilhas</h3>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursohistoria07} alt="Imagem do cérebro de branding"></img>
            <p>O conceito de "Cérebro de Branding" é uma ferramenta que centraliza toda a estratégia da marca MaxMilhas, abrangendo tanto a personalidade quanto os objetivos do nosso negócio. Dividimos o cérebro em dois lados: o racional (esquerdo), que se relaciona com o negócio, e o emocional (direito), que representa a nossa marca. O sucesso do branding está no equilíbrio entre esses dois lados.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Cérebro de branding</h3>
            <h4 style={{ marginTop: '30px', marginBottom: '30px' }}>1.1. Visão do negócio</h4>
            <p>Objetivo: Ser a principal travel tech brasileira.</p>

            <h4 style={{ marginTop: '30px', marginBottom: '30px' }}>1.2. Propósito da marca</h4>
            <p>Missão: Fazer com que as pessoas viajem mais, pois viajar transforma vidas.</p>

            <h4 style={{ marginTop: '30px', marginBottom: '30px' }}>1.3. Promessa do negócio</h4>
            <p>Compromisso: Oferecer uma forma inteligente para você viajar mais e aproveitar a vida ao máximo.</p>

            <h4 style={{ marginTop: '30px', marginBottom: '30px' }}>1.4. Essência da marca</h4>
            <p>Essência: Temos a manhã para inovar na pesquisa e compra de viagens.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Princípios do negócio</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursohistoria08} alt="Imagem dos princípios do negócio"></img>
            <p>Os princípios que regem o nosso negócio são fundamentais para a construção da nossa identidade e para a maneira como nos relacionamos com nossos clientes e colaboradores:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li>Amar: Nos importamos como se a viagem fosse nossa.</li>
                <li>Aproximar: Conectamos todas as pessoas e todos os destinos.</li>
                <li>Arriscar: Temos iniciativa e criamos inovação.</li>
                <li>Acelerar: Temos pressa para evoluir.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Personalidade da marca</h2>
            <p>A personalidade da MaxMilhas reflete quem somos e como nos expressamos no mercado. Nossos traços de personalidade incluem:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li>Sabe a manha: Expertise em oferecer soluções inteligentes.</li>
                <li>Inconformada: Sempre buscando inovação e melhorias.</li>
                <li>Dedicada: Comprometimento com a experiência do cliente.</li>
                <li>Te entende: Empatia e conexão com as necessidades dos viajantes.</li>
                <li>Plural e diversa: Valorização da diversidade em todas as suas formas.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Posicionamento</h2>
            <p>O posicionamento da Maxmilhas é voltado para três personas principais:</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Turista</h3>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursohistoria09} alt="Imagem do turista"></img>
            <p>Valoriza experiências relaxantes e busca praticidade na organização de viagens.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Viajante frequente</h3>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursohistoria10} alt="Imagem do viajante frequente"></img>
            <p>Procura preços acessíveis e viagens rápidas, integrando isso à sua rotina.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Viajante a trabalho</h3>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursohistoria11} alt="Imagem do viajante a trabalho"></img>
            <p>Prioriza praticidade e conveniência na compra de passagens e organização de viagens.</p>

            <p>A marca se diferencia por ser uma plataforma inteligente que oferece a melhor experiência de compra de viagens, com uma navegação intuitiva, preços competitivos e serviços complementares, como dicas e comparações de preços.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Manifesto da marca</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursohistoria12} alt="Imagem do manifesto da marca"></img>
            <p>O manifesto da MaxMilhas expressa a missão da empresa de fazer com que as pessoas viajem mais, conectando-se não apenas com destinos, mas consigo mesmas e com o mundo ao seu redor. Viajar é viver ao máximo, e a MaxMilhas busca proporcionar essas experiências ao tornar a organização de viagens mais acessível e prazerosa.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Brand persona</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursohistoria13} alt="Imagem da brand persona"></img>
            <p>A Brand Persona da MaxMilhas é como uma pessoa especialista em viagens, que sabe as melhores dicas e truques para encontrar passagens e roteiros de forma inteligente. É alguém que ajuda no planejamento das viagens e compartilha conhecimento, sempre buscando proporcionar as melhores experiências para quem deseja viajar.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Identidade verbal</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursohistoria14} alt="Imagem da identidade verbal"></img>
            <p>A identidade verbal é a forma como nos comunicamos e nos expressamos com o nosso público. Nela, destacamos a importância do tom de voz e das diretrizes que devem ser seguidas na construção de uma comunicação clara, amigável e eficaz, refletindo a essência da Maxmilhas.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Identidade visual</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursohistoria15} alt="Imagem da identidade visual"></img>
            <p>A identidade visual é o que representa a Maxmilhas visualmente. Aqui, são abordados aspectos como logotipo, paleta de cores, tipografia e outras diretrizes visuais que devem ser seguidas para garantir uma comunicação visual coesa e impactante.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Boas práticas no uso de elementos verbais e visuais</h2>
            <p>Para garantir que nossa comunicação seja sempre eficaz, algumas boas práticas devem ser seguidas, como a consistência no uso de cores e tipografias, o cuidado com a linguagem utilizada e a atenção às imagens que representam a marca. Cada elemento deve estar alinhado à identidade da Maxmilhas, garantindo que a marca seja reconhecida e respeitada.</p>
        </div>
    )
},
/*Ofertantes*/
'Ofertantes': {
    title: 'Ofertantes',
    videoUrl: 'https://www.youtube.com/embed/_tBdOQIulWQ',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Ofertantes de milhas</h1>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoofertantes04} alt="Imagem dos ofertantes de milhas"></img>
            <p>Os ofertantes de milhas são indivíduos ou entidades que possuem milhas acumuladas em programas de fidelidade e as disponibilizam para venda no mercado. Esses ofertantes podem variar desde pessoas físicas, que acumularam milhas por meio de viagens e compras, até empresas que operam como revendedores de milhas. A oferta de milhas se tornou uma prática comum, pois permite que essas milhas sejam convertidas em passagens aéreas, proporcionando uma oportunidade para os viajantes que desejam adquirir bilhetes com custos reduzidos.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Como funcionam os ofertantes de milhas?</h2>
            <p>Os ofertantes de milhas geralmente vendem suas milhas por um preço que é inferior ao valor da passagem aérea. Essa diferença de preço é o que torna a compra de passagens por meio de milhas uma opção atraente para muitos viajantes. A transação acontece através de plataformas como a Maxmilhas, onde os compradores podem buscar e encontrar ofertas de milhas disponíveis, comparar preços e condições, e efetuar a compra de passagens aéreas de forma simples e eficaz.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>A importância dos ofertantes para a Maxmilhas</h2>
            <h3>1. Conexão entre vendedores e compradores</h3>
            <p>Os ofertantes desempenham um papel vital no ecossistema da Maxmilhas, pois são eles que abastecem a plataforma com milhas disponíveis. Sem ofertantes, a Maxmilhas não teria acesso a um inventário diversificado de milhas para oferecer aos seus clientes. Isso garante que os viajantes tenham opções variadas e competitivas, aumentando a atratividade da plataforma.</p>

            <h3>2. Facilitação de transações</h3>
            <p>A presença de ofertantes de milhas facilita as transações no mercado de passagens aéreas. Ao vender suas milhas, os ofertantes permitem que outros viajantes adquiram passagens a um custo inferior, promovendo um ciclo de compra que beneficia todos os envolvidos. A Maxmilhas atua como intermediária, garantindo que as transações sejam seguras e eficientes.</p>

            <h3>3. Competitividade no mercado</h3>
            <p>Os ofertantes de milhas contribuem para a competitividade do mercado de passagens aéreas. A disponibilidade de milhas de diferentes ofertantes proporciona uma comparação de preços que beneficia os consumidores. Isso força os ofertantes a serem mais transparentes sobre seus preços e condições, promovendo uma maior eficiência e melhorando a experiência do cliente.</p>

            <h3>4. Diversificação das ofertas</h3>
            <p>A Maxmilhas não depende apenas de um único tipo de ofertante. A presença de ofertantes de diferentes categorias (como ofertantes convencionais, de revenda, PJ e liminares) proporciona uma ampla gama de opções para os clientes. Essa diversificação é importante para atender diferentes perfis de viajantes, desde os que buscam passagens econômicas até aqueles que desejam maximizar suas milhas.</p>

            <h3>5. Maximização de milhas e oportunidades</h3>
            <p>Os ofertantes de milhas permitem que os viajantes utilizem suas milhas de forma mais eficaz. Ao comprar milhas de ofertantes, os clientes podem maximizar suas oportunidades de viagem, adquirindo passagens que, de outra forma, poderiam estar fora de seu alcance financeiro. Isso não apenas melhora a experiência de viagem, mas também aumenta a fidelização dos clientes com a Maxmilhas.</p>

            <h3>6. Contribuição para o crescimento da Maxmilhas</h3>
            <p>O sucesso da Maxmilhas está diretamente relacionado ao volume de transações realizadas na plataforma, que, por sua vez, é impulsionado pela quantidade e qualidade das ofertas de milhas disponíveis. A atração de novos ofertantes e a manutenção de uma boa relação com os já existentes são fundamentais para o crescimento contínuo da Maxmilhas no mercado.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Considerações finais</h2>
            <p>Os ofertantes de milhas são essenciais para o funcionamento e o sucesso da Maxmilhas. Eles não apenas fornecem milhas que possibilitam a emissão de passagens aéreas, mas também enriquecem a plataforma com uma variedade de opções que beneficiam os consumidores. Através da colaboração entre a Maxmilhas e os ofertantes, é possível criar um ambiente de negócios que promova a satisfação do cliente e a sustentabilidade do mercado de passagens aéreas.</p>
            <p>A compreensão do papel dos ofertantes de milhas é, portanto, fundamental para qualquer pessoa que deseje entender a dinâmica do mercado de viagens e as oportunidades que ele oferece.</p>
        </div>
    ),
},
'Buscando ofertantes pelo milhas': {
    title: 'Buscando ofertantes pelo milhas',
    videoUrl: 'https://www.youtube.com/embed/tMxpr1uK6OE',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Buscando ofertantes pelo milhas</h1>
            <p>No menu lateral, a opção Milhas dá acesso à tela de busca de ofertantes. Nesta tela, o analista pode realizar uma busca detalhada dos ofertantes cadastrados na base de dados, utilizando filtros como:</p>
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Login</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit105} alt="Imagem da caixa de seleção de companhia aérea"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Caixa de seleção de companhia aérea</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit09} alt="Imagem da caixa de seleção de companhia aérea"></img>
            <p>Nela, é possível visualizar ofertantes de diversas companhias, incluindo:</p>
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

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Caixa de seleção de status</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit10} alt="Imagem da caixa de seleção de status"></img>
            <p>As opções mais utilizadas no contexto de Emissões incluem:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li>Ativo - Liberado: Ofertantes prontos para serem usados em transações.</li>
                <li>Bloqueado - Não atende celular: Ofertantes bloqueados por falta de contato.</li>
                <li>Em análise - Aguardando Análise Antifraude: Ofertas que aguardam verificação de segurança antes de serem usadas.</li>
                <li>Em venda - A emitir: Ofertantes que já estão em uso para a compra de passagens.</li>
                <li>Inativo - CPF Divergente: Ofertantes desativados devido a divergências no CPF.</li>
                <li>Inativo - Conta bloqueada: Contas desativadas por bloqueios.</li>
                <li>Inativo - Fraude: Ofertantes inativos por suspeita de fraude.</li>
                <li>Inativo - Limite de emissões atingido: Contas suspensas por atingirem o limite de emissões.</li>
                <li>Inativo - Oferta excluída: Ofertas removidas.</li>
                <li>Inativo - Removido pelo usuário: Ofertantes desativados por escolha do próprio usuário.</li>
                <li>Inativo - Reprovado: Ofertas que falharam na análise.</li>
                <li>Pendente - Divergência na oferta paga: Ofertas pendentes por problemas de pagamento.</li>
                <li>Pendente - Em tratativa: Ofertas em processo de resolução.</li>
                <li>Pendente - Senha incorreta: Ofertantes pendentes por falhas de login.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Caixa de seleção de login</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit11} alt="Imagem da caixa de seleção de login"></img>
            <p>A busca por ofertantes pode ser feita pelos seguintes critérios:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li>Login</li>
                <li>Nome</li>
                <li>CPF</li>
                <li>E-mail</li>
                <li>Telefone</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Opções avançadas</h2>
            <p>Ao clicar na opção Avançado na tela de busca de ofertantes, o sistema Cockpit oferece filtros adicionais para uma pesquisa mais detalhada, permitindo ao analista refinar ainda mais sua busca de ofertantes com base em critérios específicos.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit12} alt="Imagem da tela de busca avançada"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Campos de busca avançada</h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li>Saldo: Filtrar ofertantes com base no saldo de milhas disponível.</li>
                <li>CPF: Busca por CPF para localizar ofertantes específicos.</li>
                <li>Razão: Buscar ofertantes que possuem a razão (milhas/cpf) indicada.</li>
                <li>Média: Busca pela média definida pelo ofertante na venda de milhas.</li>
                <li>Tipo de Oferta: Definir o tipo de transação que o ofertante está realizando.</li>
                <li>Estratégia 2FA: Escolher o tipo de verificação em duas etapas para obter os códigos de verificação de segurança.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Tipos de oferta</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit13} alt="Imagem dos tipos de oferta"></img>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li>Venda convencional: Ofertas de milhas tradicionais.</li>
                <li>Venda rápida: Ofertas destinadas a transações rápidas.</li>
                <li>Revenda: Ofertantes de revenda.</li>
                <li>Pagamento antecipado: Ofertas que exigem pagamento antecipado.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Estratégia 2FA (Autenticação de Dois Fatores)</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit14} alt="Imagem da estratégia 2FA"></img>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li>Selecionar todos: Visualizar ofertantes independentemente da estratégia de verificação.</li>
                <li>WhatsApp: Código 2FA via WhatsApp.</li>
                <li>Chipeira: Código 2FA redirecionado para um telefone Maxmilhas e obtido através do e-mail da Chipeira.</li>
                <li>E-mail: Código 2FA redirecionado para um e-mail Maxmilhas.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Tela de busca</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit106} alt="Imagem da tela de busca de ofertantes"></img>
            <p>Ao realizar a busca de um ofertante no sistema Cockpit, é exibida uma tela com as principais informações da oferta, permitindo que o analista visualize rapidamente os detalhes da transação, como:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li>Nome do ofertante</li>
                <li>Saldo de milhas</li>
                <li>Tipo de oferta</li>
                <li>Data de criação da oferta</li>
                <li>Status da oferta</li>
                <li>Tipo de verificação 2FA</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Concluindo a busca</h2>
            <p>Após aplicar todos os filtros necessários, o analista deve clicar no botão 'Buscar' para que o sistema exiba a lista de ofertantes que atendem aos critérios especificados. A partir daí, é possível realizar transações com os ofertantes que se encaixam nas necessidades do cliente.</p>
        </div>
    ),
},

'Oferta detalhada': {
    title: 'Oferta detalhada',
    videoUrl: 'https://www.youtube.com/embed/qnwbE7Qq7d0',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Oferta detalhada</h1>
            <p>Ao clicar no login do ofertante, o usuário é redirecionado para uma página que contém os detalhes da oferta. Nesta página, são apresentadas informações abrangentes sobre a oferta específica, permitindo que o analista tenha uma visão clara e completa.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit105} alt="Imagem da oferta"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Dados da transação</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit107} alt="Código da transação"></img>
            <p>Nesta tela é possível verificar:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li>Código da transação: Código referente à oferta.</li>
            </ul>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit108} alt="Última observação"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Oferta</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit109} alt="Dados do vendedor e das milhas"></img>
            <p>Nesta seção, a tela exibe os dados do vendedor e das milhas vendidas, fornecendo informações essenciais para análise e tomada de decisão.</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li>Cia: Companhia aérea associada à oferta de milhas.</li>
                <li>Saldo: Quantidade de milhas atualmente disponíveis para transações.</li>
                <li>Prazo de pagamento: Tempo estabelecido para que o pagamento seja concluído após a realização da transação.</li>
                <li>Razão: Motivo ou justificativa para a oferta, que pode incluir detalhes sobre condições especiais.</li>
                <li>CPFs: Lista de CPFs relacionados à oferta, indicando os usuários que podem utilizar as milhas.</li>
                <li>Próximas milhas a expirar: Informações sobre milhas que estão prestes a expirar, ajudando na gestão do estoque de milhas.</li>
                <li>Tele cadastrado: Número de telefone cadastrado do ofertante, que pode ser utilizado para contato.</li>
                <li>Categoria: Classificação da oferta (por exemplo, venda convencional, venda rápida).</li>
                <li>Preço do milheiro: Valor por milheiro, informando quanto custam as milhas vendidas.</li>
                <li>Múltiplas vendas: Indicação se a oferta permite múltiplas transações ou vendas de milhas.</li>
                <li>Média: Média de uso ou desempenho das milhas vendidas, que pode ajudar a identificar padrões de utilização.</li>
                <li>Estratégia 2 fatores: Método de autenticação em duas etapas que pode ser utilizado para verificar transações, aumentando a segurança das operações.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Dados do vendedor</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit20} alt="Dados do vendedor"></img>
            <p>Os dados disponíveis incluem:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li>Login: Identificação única do vendedor no sistema.</li>
                <li>Nome: Nome completo do vendedor, facilitando a identificação.</li>
                <li>CPF: Cadastro de Pessoa Física, utilizado para fins de identificação e conformidade.</li>
                <li>E-mail: Endereço de e-mail do vendedor, que pode ser usado para comunicação.</li>
                <li>Telefone: Número de telefone cadastrado, permitindo contato direto para quaisquer questões relacionadas à oferta ou transação.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Editar oferta</h2>
            <p>Na tela de ofertas, os usuários têm a opção de editar as informações de uma oferta existente ao clicar no botão Editar. Essa funcionalidade permite que os analistas atualizem dados relevantes para garantir que as informações estejam sempre precisas e atualizadas. Ao clicar no botão, o usuário é levado a um formulário onde pode modificar os seguintes detalhes:</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit21} alt="Editar oferta"></img>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit22} alt="Formulário de edição de oferta"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>5. Dados de acesso</h2>
            <p>Em dados de acesso é possível obter os dados do ofertante como login e senha na companhia aérea. Para visualizar é necessário utilizar a senha de acesso cadastrada no site da Maxmilhas e o motivo do acesso no campo observação:</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit23} alt="Dados de acesso"></img>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit24} alt="Informações de acesso"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>6. Linha do tempo da oferta</h2>
            <p>Nesta seção, é apresentada a evolução da oferta desde sua criação, permitindo que os analistas acompanhem o desempenho e as mudanças ao longo do tempo. As informações geralmente incluem:</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit25} alt="Linha do tempo da oferta"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>7. Vendas</h2>
            <p>Nesta tela, é possível visualizar as últimas transações que foram concluídas utilizando a oferta selecionada. As informações são apresentadas em uma tabela detalhada, que inclui os seguintes dados:</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit26} alt="Tabela de vendas"></img>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li>ID da transação: Identificação única da transação realizada.</li>
                <li>Milhas: Quantidade de milhas utilizadas na emissão da passagem.</li>
                <li>Pax: Número de passageiros associados à transação.</li>
                <li>Valor cliente: Valor pago pelo cliente ao ofertante.</li>
                <li>Tx Maxmilhas: Taxa de serviço cobrada pela Maxmilhas pela intermediação da transação.</li>
                <li>Tx embarque: Valor da taxa de embarque paga para a emissão do bilhete.</li>
                <li>Voo: Código do voo relacionado à transação.</li>
                <li>Status: Situação da compra efetuada pelo cliente no site da Maxmilhas, após passar pela verificação de risco e fraude.</li>
                <li>E-ticket: Bilhete aéreo emitido para a transação, que será enviado ao cliente.</li>
                <li>Data do voo: Data programada para a viagem.</li>
                <li>Criado: Data de criação da transação no sistema.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>8. Documentos</h2>
            <p>Na seção de Documentos, é possível obter informações sobre os gestores da oferta, especialmente quando há mais de um gestor envolvido ou quando se trata de uma conta familiar. Esta funcionalidade permite uma melhor gestão e acompanhamento das responsabilidades relacionadas à oferta.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit27} alt="Documentos da oferta"></img>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit28} alt="Documentos da oferta"></img>
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>9. Observações</h2>
            <p>Neste campo, é possível inserir comentários relacionados às transações. Os analistas podem utilizar essa funcionalidade para registrar observações relevantes, feedback ou informações adicionais sobre cada transação, como:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li>Detalhes sobre situações específicas que ocorreram durante a emissão.</li>
                <li>Comentários sobre a performance do ofertante.</li>
                <li>Notas sobre o atendimento ao cliente ou questões que precisam de acompanhamento.</li>
                <li>Sugestões para melhorias no processo de emissão.</li>
            </ul>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit29} alt="Documentos da oferta"></img>
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>10. Observações salvas</h2>
            <p>Nesta seção, são exibidas as observações que foram feitas anteriormente relacionadas às transações. Aqui, os analistas podem visualizar comentários registrados, permitindo um acompanhamento detalhado das interações e decisões tomadas durante o processo de emissão.</p>
            <p>As observações salvas servem para:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li>Consultar Informações Anteriores: Permitem que a equipe revise comentários feitos em transações passadas, ajudando na continuidade do atendimento ao cliente e no gerenciamento de processos.</li>
                <li>Facilitar a Comunicação: Aumentam a transparência entre os membros da equipe, garantindo que todos estejam cientes de qualquer informação relevante ou feedback recebido.</li>
                <li>Analisar Tendências: Podem ser utilizadas para identificar padrões ou problemas recorrentes nas transações, contribuindo para melhorias nos processos e serviços oferecidos.</li>
            </ul>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit30} alt="Documentos da oferta"></img>
        </div>
    ),
},
'Média e razão': {
    title: 'Média e razão',
    videoUrl: 'https://www.youtube.com/embed/V2DcyEZy93E',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Saldo de milhas</h1>
            <p>O saldo de milhas representa a quantidade total de milhas disponíveis na conta de um ofertante em um programa de fidelidade. Esse saldo é fundamental para a realização de transações, pois determina o quanto o ofertante pode oferecer no mercado. Um saldo saudável de milhas é importante para garantir que o ofertante tenha a flexibilidade necessária para atender a demanda de compra por parte dos clientes.</p>
            <p><strong>Importância do saldo de milhas:</strong></p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li>Disponibilidade para vendas: Um saldo elevado de milhas permite que o ofertante faça mais vendas, aumentando sua lucratividade.</li>
                <li>Atratividade para compradores: Ofertantes com saldos significativos têm maior chance de atrair compradores, pois podem oferecer passagens com maior quantidade de milhas.</li>
                <li>Planejamento de viagens: O saldo também permite ao ofertante planejar viagens pessoais, equilibrando a venda de milhas com suas necessidades de uso.</li>
            </ul>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit69} alt="Imagem do saldo de milhas"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>O que é razão?</h2>
            <p>A razão é um cálculo que obtém a quantidade de milhas oferecidas pelo número de CPFs disponíveis para emissão. É uma métrica importante que ajuda a entender a capacidade de um ofertante de atender a demanda por passagens aéreas. Para calcular a razão, basta dividir a quantidade total de milhas oferecidas pelo número de CPFs disponíveis.</p>
            <p><strong>Importância da razão:</strong></p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li>Avaliação de Oportunidade: A razão ajuda a identificar se as milhas estão sendo oferecidas em quantidades adequadas para atender a demanda do mercado.</li>
                <li>Estratégia de Venda: Um entendimento claro da razão permite que os ofertantes ajustem suas ofertas de milhas para maximizar suas vendas e manter um saldo adequado para uso pessoal.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>O que é média?</h2>
            <p>A média é definida pelo ofertante como a quantidade de milhas que ele planeja vender por CPF. Essa métrica é importante porque ajuda a manter um equilíbrio entre as milhas vendidas e as milhas que o ofertante deseja guardar para uso pessoal.</p>
            <p><strong>Exemplo de Média:</strong></p>
            <p>Se o ofertante decidiu que, das 300.000 milhas, ele irá reservar milhas para viagens pessoais e pretende vender apenas 30.000 milhas por CPF, isso resulta em uma média de:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li>Total de CPFs: 10</li>
                <li>Média por Passagem: 30.000 milhas</li>
            </ul>
            <p><strong>Importância da média:</strong></p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li>Planejamento de Vendas: A média determina quantas milhas estão disponíveis para venda sem comprometer as viagens pessoais do ofertante.</li>
                <li>Sustentabilidade das Ofertas: Manter a média adequada é essencial para garantir que o ofertante não se comprometa excessivamente, permitindo que ele utilize suas milhas quando necessário.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Quantidade de CPFs para cada ofertante</h2>
            <p>A quantidade de CPFs disponível para cada ofertante é um fator determinante na capacidade de vendas de milhas. Ter um número maior de CPFs significa uma maior capacidade de atender à demanda, já que cada CPF pode potencialmente utilizar as milhas para uma passagem diferente.</p>
            <p><strong>Considerações Importantes:</strong></p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li>Diversidade de beneficiários: Ter múltiplos CPFs permite que o ofertante atenda a diferentes passageiros, diversificando sua base de clientes.</li>
                <li>Impacto na oferta: Se um ofertante tiver muitos CPFs, poderá oferecer mais milhas em uma única transação, aumentando suas chances de venda.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Verificando dados da oferta</h2>
            <p>Na página de troca de ofertantes e na busca de ofertantes pelo Milhas é possível encontrar as informações referentes ao saldo, razão, média e quantidade de CPFs disponíveis para emissão.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursocockpit69} alt="Imagem da verificação de dados da oferta"></img>
        </div>
    ),
},
'Programa de fidelidade Smiles': {
    title: 'Programa de fidelidade Smiles',
    videoUrl: 'https://www.youtube.com/embed/_aQKLZ4uRN0',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Programa de fidelidade Smiles</h1>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoofertantes01} alt="Imagem do programa de fidelidade Smiles"></img>
            <p>O Smiles é um dos principais programas de fidelidade do Brasil, vinculado à Gol Linhas Aéreas. Este programa permite que os clientes acumulem milhas ao realizar viagens e compras, que podem ser trocadas por passagens aéreas, produtos e serviços. A seguir, exploraremos as principais características e benefícios do programa Smiles.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Acúmulo de milhas</h2>
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>1.1 Como funciona</h3>
            <p>Os membros do programa acumulam milhas ao realizar voos com a Gol e companhias aéreas parceiras, além de compras em estabelecimentos parceiros. As milhas acumuladas podem ser utilizadas para a compra de passagens, upgrades de classe, diárias em hotéis, locação de veículos e muito mais.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>1.2 Tipos de milhas</h3>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Milhas bônus:</strong> Acumuladas em promoções específicas ou por meio de ações de marketing.</li>
                <li><strong>Milhas regulares:</strong> Obtidas por meio de voos e compras em parceiros.</li>
                <li><strong>Milhas de categoria:</strong> Acumuladas de acordo com o nível de fidelidade do cliente dentro do programa (Smiles, Prata, Ouro e Diamante).</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Níveis de fidelidade</h2>
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>2.1 Categorias de membros</h3>
            <p>O programa Smiles possui diferentes níveis de fidelidade, que oferecem benefícios exclusivos conforme o cliente acumula mais milhas e realiza mais voos. As categorias são:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Smiles:</strong> Nível básico, com acesso às promoções e ofertas do programa.</li>
                <li><strong>Prata:</strong> Oferece vantagens adicionais, como milhas bônus em voos e acesso prioritário em filas de embarque.</li>
                <li><strong>Ouro:</strong> Proporciona benefícios como check-in e embarque prioritário, além de um maior acúmulo de milhas.</li>
                <li><strong>Diamante:</strong> O nível mais alto, com benefícios exclusivos, como acesso a salas VIP e milhas adicionais para voos.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Resgate de milhas</h2>
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>3.1 Como resgatar</h3>
            <p>Os membros podem resgatar suas milhas de várias maneiras, incluindo:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Passagens aéreas:</strong> Troca de milhas por passagens em voos da Gol e companhias aéreas parceiras.</li>
                <li><strong>Upgrades de classe:</strong> Utilização de milhas para atualizar a classe do voo.</li>
                <li><strong>Produtos e serviços:</strong> Troca de milhas por itens em lojas parceiras, como eletrônicos, roupas e experiências.</li>
            </ul>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>3.2 Promoções de resgate</h3>
            <p>O Smiles frequentemente oferece promoções que permitem aos membros resgatar passagens aéreas por um número reduzido de milhas, tornando as viagens ainda mais acessíveis.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Parcerias</h2>
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>4.1 Parceiros de acúmulo</h3>
            <p>O programa Smiles conta com uma ampla rede de parceiros, incluindo:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Companhias aéreas:</strong> Além da Gol, o programa é vinculado a companhias como Delta, Air France e KLM.</li>
                <li><strong>Estabelecimentos comerciais:</strong> Supermercados, lojas de eletrônicos e até serviços de streaming oferecem milhas aos seus clientes.</li>
                <li><strong>Hotéis e locadoras:</strong> Parcerias com redes de hotéis e locadoras de veículos permitem o acúmulo de milhas em cada estadia ou locação.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>5. Benefícios adicionais</h2>
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>5.1 Promoções e ofertas</h3>
            <p>O Smiles frequentemente lança promoções que permitem aos membros acumular ou resgatar milhas de forma mais vantajosa. Acompanhar as ofertas é uma ótima maneira de maximizar os benefícios do programa.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>5.2 Programa Smiles & Money</h3>
            <p>Os membros têm a opção de utilizar uma combinação de milhas e dinheiro para a compra de passagens aéreas, oferecendo maior flexibilidade na hora de resgatar.</p>
        </div>
    ),
},
'Programa de fidelidade TudoAzul': {
    title: 'TudoAzul',
    videoUrl: 'https://www.youtube.com/embed/e-iI1MYfue8',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>TudoAzul</h1>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoofertantes00} alt="Imagem do programa TudoAzul"></img>
            <p>O TudoAzul é o programa de fidelidade da Azul linhas aéreas, uma das maiores companhias aéreas do Brasil. Esse programa permite que os clientes acumulem pontos em suas viagens e compras com parceiros, podendo utilizá-los para adquirir passagens aéreas, upgrades, e outros produtos e serviços. A seguir, vamos explorar as principais características e benefícios do TudoAzul.</p>
            
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Acúmulo de pontos</h2>
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>1.1 Como funciona</h3>
            <p>Os membros do TudoAzul acumulam pontos ao viajarem com a Azul ou ao fazerem compras em estabelecimentos parceiros. Os pontos acumulados podem ser utilizados para diversos tipos de resgates, como passagens aéreas, diárias de hotéis e aluguel de veículos.</p>
            
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>1.2 Tipos de pontos</h3>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Pontos qualificáveis:</strong> São aqueles acumulados por meio de voos realizados. Eles ajudam o cliente a subir de categoria dentro do programa de fidelidade.</li>
                <li><strong>Pontos de bônus:</strong> Obtidos em promoções e campanhas especiais, permitindo o acúmulo mais rápido de pontos.</li>
            </ul>
            
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Níveis de fidelidade</h2>
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>2.1 Categorias de membros</h3>
            <p>O TudoAzul possui diferentes níveis de fidelidade, que oferecem benefícios crescentes conforme o cliente acumula mais pontos e viaja com a Azul. As categorias são:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>TudoAzul:</strong> O nível básico do programa, que oferece aos membros acesso a promoções e possibilidade de acúmulo de pontos.</li>
                <li><strong>Prata:</strong> Oferece benefícios adicionais, como pontos bônus em voos e prioridade em filas de embarque.</li>
                <li><strong>Ouro:</strong> Proporciona vantagens como check-in e embarque prioritário, além de acúmulo maior de pontos.</li>
                <li><strong>Diamante:</strong> O nível mais alto, com benefícios exclusivos como acesso a salas VIP, mais pontos em voos e assistência personalizada.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Resgate de pontos</h2>
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>3.1 Como resgatar</h3>
            <p>Os membros podem resgatar seus pontos de diversas formas, incluindo:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Passagens aéreas:</strong> Troca de pontos por passagens nos voos da Azul ou em companhias aéreas parceiras.</li>
                <li><strong>Upgrades de classe:</strong> Utilização de pontos para subir de classe em voos.</li>
                <li><strong>Produtos e experiências:</strong> Troca de pontos por itens em lojas parceiras ou por experiências exclusivas, como eventos e estadias em hotéis.</li>
            </ul>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>3.2 Promoções de resgate</h3>
            <p>O TudoAzul oferece regularmente promoções que permitem aos membros resgatar passagens aéreas com menos pontos, facilitando o acesso a voos e outros serviços com custos reduzidos.</p>
            
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Parcerias</h2>
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>4.1 Parceiros de acúmulo</h3>
            <p>O TudoAzul possui uma ampla rede de parceiros que oferecem oportunidades de acúmulo de pontos. Estes parceiros incluem:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Companhias aéreas:</strong> Além da Azul, o programa está associado a companhias internacionais como TAP Air Portugal e United Airlines, permitindo o acúmulo de pontos em voos ao redor do mundo.</li>
                <li><strong>Estabelecimentos comerciais:</strong> Supermercados, lojas de eletrônicos e outros comércios onde os clientes podem acumular pontos ao realizar compras.</li>
                <li><strong>Hotéis e locadoras de veículos:</strong> Redes de hotéis e locadoras parceiras permitem o acúmulo de pontos durante estadias e aluguéis de veículos.</li>
            </ul>
            
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>5. Benefícios adicionais</h2>
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>5.1 Promoções e ofertas</h3>
            <p>O TudoAzul frequentemente lança promoções que permitem aos membros acumular e resgatar pontos de maneira mais vantajosa. Manter-se informado sobre as promoções é essencial para maximizar os benefícios do programa.</p>
            
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>5.2 TudoAzul & Money</h3>
            <p>Os membros têm a opção de utilizar uma combinação de pontos e dinheiro para a compra de passagens aéreas. Essa flexibilidade oferece maior conveniência e facilidade na hora de planejar viagens.</p>
            
            <p>O TudoAzul é um excelente programa de fidelidade para viajantes frequentes e clientes da Azul, permitindo o acúmulo de pontos que podem ser utilizados de diversas maneiras. Com categorias de fidelidade progressivas e parcerias robustas, os participantes podem tirar proveito de benefícios crescentes. Se você é um viajante regular, participar do TudoAzul pode transformar suas viagens em experiências ainda mais vantajosas e acessíveis.</p>
        </div>
    ),
},
'Programa de fidelidade LATAM Pass': {
    title: 'Programa de fidelidade Latam Pass',
    videoUrl: 'https://www.youtube.com/embed/a6Sc2aqwzK0',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Programa de fidelidade Latam Pass</h1>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoofertantes02} alt="Imagem do programa Latam Pass"></img>
            <p>O Latam Pass é o programa de fidelidade da LATAM Airlines, uma das principais companhias aéreas da América Latina. Criado para premiar os clientes que viajam com a LATAM e suas companhias aéreas parceiras, o programa oferece diversas maneiras de acumular pontos e usufruir de benefícios exclusivos. Vamos explorar as principais características e vantagens do Latam Pass.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Acúmulo de pontos</h2>
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>1.1 Como funciona</h3>
            <p>Os membros do Latam Pass acumulam pontos ao voar com a LATAM e suas companhias aéreas parceiras, além de realizar compras em estabelecimentos parceiros. Os pontos acumulados podem ser utilizados para a compra de passagens aéreas, upgrades de classe e outros benefícios.</p>
            
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>1.2 Tipos de pontos</h3>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Pontos qualificáveis:</strong> Acumulados através de voos, que ajudam na progressão de categoria dentro do programa.</li>
                <li><strong>Pontos de bônus:</strong> Concedidos em promoções, parcerias e ofertas especiais, permitindo um acúmulo mais rápido.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Níveis de fidelidade</h2>
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>2.1 Categorias de membros</h3>
            <p>O programa Latam Pass possui diferentes níveis de fidelidade, que proporcionam benefícios crescentes conforme o cliente acumula mais pontos e realiza mais voos. As categorias incluem:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Latam Pass:</strong> O nível básico, onde os membros começam a acumular pontos e têm acesso a promoções.</li>
                <li><strong>Gold:</strong> Oferece benefícios adicionais, como pontos de bônus e prioridade no check-in.</li>
                <li><strong>Platinum:</strong> Inclui maiores vantagens, como acesso a salas VIP, maior acúmulo de pontos e check-in prioritário.</li>
                <li><strong>Black:</strong> O nível mais alto, com benefícios exclusivos, como assistência personalizada e maior acúmulo de pontos.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Resgate de pontos</h2>
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>3.1 Como resgatar</h3>
            <p>Os membros do Latam Pass podem resgatar seus pontos de várias maneiras, incluindo:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Passagens aéreas:</strong> Troca de pontos por passagens em voos da LATAM e de companhias aéreas parceiras.</li>
                <li><strong>Upgrades de classe:</strong> Utilização de pontos para atualizar a classe do voo.</li>
                <li><strong>Produtos e serviços:</strong> Troca de pontos por produtos em lojas parceiras e serviços exclusivos.</li>
            </ul>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>3.2 Promoções de resgate</h3>
            <p>O Latam Pass frequentemente realiza promoções que permitem aos membros resgatar passagens por um número reduzido de pontos, tornando as viagens ainda mais acessíveis.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Parcerias</h2>
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>4.1 Parceiros de Acúmulo</h3>
            <p>O Latam Pass conta com uma ampla rede de parceiros, incluindo:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Companhias aéreas:</strong> Além da LATAM, o programa se relaciona com várias companhias internacionais, permitindo acumular pontos em voos ao redor do mundo.</li>
                <li><strong>Estabelecimentos comerciais:</strong> Supermercados, lojas de eletrônicos e outros comércios oferecem pontos em compras realizadas.</li>
                <li><strong>Hotéis e locadoras de veículos:</strong> Parcerias com redes de hotéis e locadoras permitem acumular pontos em cada estadia ou locação.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>5. Benefícios adicionais</h2>
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>5.1 Promoções e ofertas</h3>
            <p>Os membros do Latam Pass têm acesso a promoções periódicas que permitem acumular ou resgatar pontos de forma mais vantajosa. Manter-se atualizado sobre essas ofertas é fundamental para maximizar os benefícios.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>5.2 Flexibilidade de resgate</h3>
            <p>Os membros podem optar por usar uma combinação de pontos e dinheiro para a compra de passagens, oferecendo maior flexibilidade nas transações.</p>
            
            <p>O programa de fidelidade Latam Pass oferece uma excelente oportunidade para os viajantes acumularem pontos e trocá-los por diversos benefícios, transformando suas experiências de viagem em algo ainda mais gratificante. Conhecer as diferentes categorias, formas de acúmulo e resgate é essencial para aproveitar ao máximo o Latam Pass. Se você voa com frequência pela LATAM, tornar-se um membro do Latam Pass pode trazer inúmeras vantagens e enriquecer suas viagens.</p>
        </div>
    ),
},
'Beneficiários no cadastro TudoAzul': {
    title: 'Beneficiários no cadastro TudoAzul',
    videoUrl: 'https://www.youtube.com/embed/8pGVWEG-CuM',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Beneficiários no cadastro TudoAzul</h1>
            <p>O programa de fidelidade Tudo Azul, da companhia aérea Azul, permite que seus membros acumulem e utilizem pontos para a compra de passagens aéreas e outros benefícios. Um dos recursos interessantes do programa é a possibilidade de cadastrar beneficiários, o que amplia a utilização das milhas acumuladas e oferece mais flexibilidade para os membros.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. O que são beneficiários?</h2>
            <p>Beneficiários são pessoas que podem ser indicadas pelos membros do programa Tudo Azul para utilizarem seus pontos em voos e serviços oferecidos pela Azul. Isso significa que, mesmo que o titular não viaje, ele pode compartilhar suas milhas com amigos ou familiares, tornando o programa mais vantajoso e acessível.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Cadastro de beneficiários</h2>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>2.1 Como cadastrar</h3>
            <p>Para adicionar beneficiários ao seu cadastro Tudo Azul, o membro deve seguir os seguintes passos:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li>Acessar a conta TudoAzul: O membro deve entrar em sua conta no site ou aplicativo da Azul.</li>
                <li>Ir até a seção de beneficiários: Localizar a área dedicada ao cadastro de beneficiários.</li>
                <li>Inserir os dados do beneficiário: Preencher as informações solicitadas, como nome completo, CPF, data de nascimento e relação com o titular.</li>
                <li>Confirmar o cadastro: Após preencher os dados, o membro deve revisar as informações e confirmar o cadastro.</li>
            </ul>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoemissoesazul08} alt="Imagem do cadastro de beneficiários"></img>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>2.2 Limites e regras</h3>
            <p>O programa pode ter um limite no número de beneficiários que podem ser cadastrados. É importante que os beneficiários tenham CPF válido e estejam dentro das regras estabelecidas pelo programa.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Vantagens de cadastrar beneficiários</h2>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>3.1 Compartilhamento de milhas</h3>
            <p>Os beneficiários podem utilizar as milhas acumuladas pelo titular para comprar passagens aéreas, permitindo que o titular não perca milhas por falta de uso.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>3.2 Flexibilidade</h3>
            <p>O membro pode escolher quem irá utilizar suas milhas, facilitando a programação de viagens em família ou entre amigos.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>3.3 Experiências de viagem melhoradas</h3>
            <p>Com a possibilidade de cadastrar beneficiários, o titular pode proporcionar experiências de viagem a pessoas queridas, ajudando a criar memórias e fortalecer laços.</p>
        </div>
    ),
},
'Validação de ofertas': {
    title: 'Validação de ofertas',
    videoUrl: 'https://www.youtube.com/embed/4QW5CibizDU',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Validação de ofertas</h1>
            <p>A validação automática é realizada por um sistema que utiliza algoritmos para verificar a autenticidade e a conformidade das ofertas. O processo envolve uma série de etapas que garantem a análise eficiente de cada transação.</p>
    

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Principais verificações realizadas</h2>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Fraude</h3>
            <p>O sistema analisa padrões de comportamento e dados que possam indicar tentativas de fraude, garantindo que apenas ofertas legítimas sejam aprovadas.</p>
           

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Bloqueio de conta</h3>
            <p>Verifica se a conta do ofertante está bloqueada ou inativa, impedindo que ofertas de contas não confiáveis sejam consideradas.</p>
          
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Senha incorreta</h3>
            <p>Confirma se as senhas inseridas durante o processo de emissão estão corretas, evitando erros que possam comprometer a transação.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Saldo divergente</h3>
            <p>Avalia se o saldo de milhas informado condiz com o saldo real disponível na conta do ofertante.</p>
          
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Dados incorretos</h3>
            <p>Checa se as informações fornecidas (como dados do voo, CPF, etc.) estão corretas e em conformidade com as exigências do programa.</p>
       

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Validação manual de ofertas</h2>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Papel da validação manual</h3>
            <p>Além da validação automática, a Maxmilhas permite que pessoas autorizadas realizem a aprovação manual das ofertas. Essa etapa é fundamental para transações que possam ser mais complexas ou que apresentem alguma irregularidade que a análise automática não consiga resolver.</p>
          

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Processo de aprovação manual</h3>
            <p>Os colaboradores autorizados revisam as ofertas com atenção, considerando fatores que o sistema automático pode não capturar, como a intenção do ofertante e a confiabilidade histórica.</p>
    

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Importância da validação de ofertas</h2>
            <p>A validação eficaz de ofertas é essencial para:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Proteger os usuários:</strong> Garantir que apenas transações seguras e legítimas sejam realizadas, evitando fraudes e prejuízos.</li>
                <li><strong>Manter a integridade do mercado:</strong> Um sistema de validação robusto ajuda a manter a confiança entre todos os usuários da plataforma, promovendo um ambiente seguro para negociação de milhas.</li>
                <li><strong>Facilitar transações:</strong> Através da validação rápida e eficiente, os usuários podem concluir suas transações com mais agilidade, melhorando a experiência geral na plataforma.</li>
            </ul>
        </div>
    ),
},
'Tipos de ofertantes': {
    title: 'Tipos de ofertantes',
    videoUrl: 'https://www.youtube.com/embed/m7EAi2cC9GE',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Tipos de ofertantes</h1>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoofertantes05} alt="Imagem dos tipos de ofertantes"></img>
            <p>Na Maxmilhas, os ofertantes são classificados em diferentes categorias, cada uma com suas características e particularidades. Essa segmentação é importante para facilitar a identificação de ofertas e otimizar o processo de compra de milhas. A seguir, estão as principais categorias de ofertantes:</p>
            
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Ofertantes convencionais</h2>
            <p>Os ofertantes convencionais são aqueles que vendem milhas adquiridas de forma regular, geralmente acumuladas por meio de programas de fidelidade. Esses ofertantes têm um histórico de transações e oferecem suas milhas a preços competitivos. São conhecidos por suas práticas de negócios transparentes e pela confiabilidade em suas operações.</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li>Milhas acumuladas de forma legítima.</li>
                <li>Oferta de milhas a preços de mercado.</li>
                <li>Transações geralmente rápidas e seguras.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Ofertantes de revenda</h2>
            <p>Os ofertantes de revenda são aqueles que atuam como intermediários, comprando milhas de outros ofertantes para revender aos clientes. Eles costumam ter um portfólio variado de milhas, adquiridas de diferentes fontes. Esses ofertantes podem oferecer uma ampla gama de opções, mas é importante que os compradores verifiquem a reputação deles antes de efetuar a compra.</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li>Atuam como intermediários.</li>
                <li>Ampla variedade de milhas de diferentes ofertantes.</li>
                <li>Podem ter preços mais elevados devido à margem de revenda.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Ofertantes parceiros</h2>
            <p>Os ofertantes parceiros são empresas ou indivíduos que têm acordos comerciais com a Maxmilhas. Esses ofertantes podem oferecer milhas em condições especiais, promovendo vantagens exclusivas para os clientes. Essa categoria pode incluir companhias aéreas, agências de viagens e outras entidades que colaboram com a Maxmilhas para fornecer ofertas atraentes.</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li>Acordos comerciais com a Maxmilhas.</li>
                <li>Condições especiais e exclusivas para os clientes.</li>
                <li>Ofertas frequentemente mais vantajosas.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Ofertantes liminares</h2>
            <p>Os ofertantes liminares são aqueles que conseguiram uma liminar judicial que os permite emitir milhas além das restrições de CPF impostas pelos programas de fidelidade. Essa categoria se destaca por atuar em situações excepcionais, onde a emissão de milhas poderia ser limitada devido a políticas de uso dos programas de fidelidade. Com essa autorização judicial, esses ofertantes têm mais liberdade para operar e oferecer suas milhas.</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li>Emissão de milhas sem as restrições de CPF impostas pelos programas de fidelidade.</li>
                <li>Operam em situações excepcionais, frequentemente ligadas a decisões judiciais.</li>
                <li>Podem estar sob supervisão para garantir a conformidade com as normas e regulamentos.</li>
            </ul>
        </div>
    ),
},
/*Milhas*/
'Milhas': {
    title: 'Milhas',
    videoUrl: 'https://www.youtube.com/embed/VXriDqshKWc',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Milhas</h1>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursomilhas00} alt="O que são milhas aéreas?"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>O que são milhas aéreas?</h2>
            <p>Milhas aéreas são pontos acumulados em programas de fidelidade de companhias aéreas, que podem ser trocados por passagens aéreas, upgrades de classe, produtos, ou serviços oferecidos pelas companhias parceiras. Cada vez que um cliente voa com uma companhia aérea ou realiza compras em estabelecimentos parceiros, ele acumula milhas que podem ser utilizadas para reduzir custos em futuras viagens.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Acumulação de milhas</h2>
            <p>As milhas são normalmente acumuladas com base na distância voada, no valor do bilhete adquirido, ou em promoções específicas do programa de fidelidade. Além de voos, as milhas podem ser acumuladas em:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li>Compras em lojas parceiras</li>
                <li>Cartões de crédito que oferecem programas de recompensas</li>
                <li>Aluguel de carros</li>
                <li>Hospedagens em hotéis</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Troca de milhas</h2>
            <p>As milhas acumuladas podem ser trocadas por diversos benefícios, incluindo:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li>Passagens aéreas: Utilizando milhas para cobrir o custo total ou parcial de um bilhete.</li>
                <li>Upgrades: Melhoria de classe na passagem adquirida (por exemplo, de econômica para executiva).</li>
                <li>Produtos e serviços: Utilização das milhas em lojas parceiras ou para pagar serviços, como aluguel de carros ou hospedagens.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Validade das milhas</h2>
            <p>As milhas geralmente têm uma validade definida, podendo expirar após um certo período de inatividade ou se não forem utilizadas. É importante que os viajantes estejam cientes das regras do programa de fidelidade em que estão inscritos para maximizar a utilização das milhas acumuladas.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Importância das milhas aéreas</h2>
            <p>Acumular milhas aéreas é uma estratégia eficaz para os viajantes frequentes que desejam reduzir os custos de suas viagens, obter benefícios adicionais e aproveitar ofertas exclusivas que as companhias aéreas e seus parceiros oferecem.</p>
        </div>
    ),
},
'Regulamentação da venda de milhas': {
    title: 'Regulamentação da venda de milhas',
    videoUrl: 'https://www.youtube.com/embed/VIhcOjCTbd4',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Regulamentação da venda de milhas</h1>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursomilhas01} alt="Imagem da regulamentação da venda de milhas"></img>
            
            <p>A venda de milhas aéreas é uma prática comum no setor de viagens, mas envolve diversas considerações legais e regulatórias. A regulamentação é importante para proteger os direitos dos consumidores, garantir a transparência nas transações e assegurar a integridade dos programas de fidelidade.</p>
            
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Aspectos legais</h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Programas de fidelidade:</strong> A maioria das companhias aéreas possui políticas específicas que proíbem ou restringem a venda de milhas. Isso significa que, antes de vender ou comprar milhas, é essencial entender as regras do programa de fidelidade em questão.</li>
                <li><strong>Legislação do consumidor:</strong> No Brasil, a venda de milhas deve estar em conformidade com o Código de Defesa do Consumidor. Isso inclui a necessidade de informar claramente as condições de venda, os direitos dos consumidores, e garantir a segurança nas transações.</li>
                <li><strong>Impostos e taxas:</strong> A venda de milhas pode estar sujeita a impostos, dependendo da legislação vigente. É importante que tanto os vendedores quanto os compradores estejam cientes de suas obrigações fiscais.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Marketplace de milhas</h2>
            <p>Com o crescimento do mercado de milhas, diversas plataformas e empresas têm surgido para facilitar a compra e venda de milhas. Essas plataformas geralmente operam como intermediárias, conectando ofertantes de milhas com compradores. Algumas considerações sobre essas plataformas incluem:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Segurança das transações:</strong> As plataformas devem garantir a segurança das informações e dos pagamentos dos usuários.</li>
                <li><strong>Transparência:</strong> As informações sobre taxas, condições de venda, e as políticas de cancelamento devem ser claramente apresentadas.</li>
                <li><strong>Verificação de identidade:</strong> Para prevenir fraudes, muitas plataformas exigem que os usuários verifiquem suas identidades antes de realizar transações.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Considerações éticas</h2>
            <p>A venda de milhas também levanta questões éticas, especialmente em relação à transparência das práticas comerciais e ao impacto sobre os programas de fidelidade. Empresas e consumidores devem considerar o efeito que a revenda de milhas pode ter sobre o valor e a sustentabilidade desses programas.</p>
        </div>
    ),
},
'Precificação das milhas': {
    title: 'Precificação das milhas',
    videoUrl: 'https://www.youtube.com/embed/QSc1O0iBOxY',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Precificação das milhas</h1>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursomilhas02} alt="Imagem da precificação das milhas" />

            <p>A precificação das milhas aéreas é um fator essencial que influencia o mercado de compra e venda de milhas. Compreender como as milhas são precificadas ajuda tanto os consumidores quanto os vendedores a tomar decisões informadas. Vários fatores determinam o valor das milhas, e esta seção aborda os principais aspectos dessa dinâmica.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Fatores que influenciam a precificação</h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Demanda e oferta:</strong> Assim como qualquer outro ativo, o valor das milhas é afetado pela lei da oferta e da demanda. Quando a demanda por milhas aumenta, seu preço tende a subir. Da mesma forma, se muitas milhas estão disponíveis no mercado, os preços podem cair.</li>
                <li><strong>Tipo de companhia aérea:</strong> Companhias aéreas diferentes têm estruturas de preços variadas para suas milhas. Algumas companhias, como as de low-cost, podem ter milhas que valem menos em comparação com as tradicionais. As políticas de fidelidade de cada companhia influenciam diretamente o valor das milhas.</li>
                <li><strong>Validade das milhas:</strong> As milhas têm um prazo de validade, e isso pode impactar seu preço. Milhas que estão prestes a expirar podem ser vendidas a preços mais baixos, enquanto milhas com validade mais longa podem ter um valor maior.</li>
                <li><strong>Uso das milhas:</strong> O tipo de passagem que pode ser adquirida com as milhas também influencia seu valor. Por exemplo, milhas que podem ser usadas para voos em classe executiva ou para destinos populares tendem a ter um valor mais alto.</li>
                <li><strong>Promoções e ofertas:</strong> Muitas companhias aéreas realizam promoções e campanhas que podem aumentar ou diminuir o valor das milhas. É comum que as companhias ofereçam promoções para compra de milhas em determinados períodos, o que pode impactar o preço.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Cálculo do preço das milhas</h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Preço de mercado:</strong> O preço das milhas pode ser consultado em plataformas de revenda de milhas, onde o valor médio por milha é apresentado. Os usuários podem comparar preços e escolher a melhor opção para comprar ou vender.</li>
                <li><strong>Custo por milheiro:</strong> Uma forma comum de calcular o valor das milhas é considerar o custo por milheiro (CPM), que representa o preço pago a cada 1.000 pontos utilizados.</li>
                <li><strong>Ajustes de preço:</strong> É importante que os vendedores considerem os custos de transação e taxas ao definir o preço das milhas. Isso garante que a venda ainda seja lucrativa após a dedução de despesas.</li>
            </ul>
        </div>
    ),
},
'Como acumular milhas': {
    title: 'Como acumular milhas',
    videoUrl: 'https://www.youtube.com/embed/1LMN0pbS2Lk',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Como acumular milhas</h1>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursomilhas03} alt="Imagem sobre acumular milhas" />

            <p>Acumular milhas é uma maneira inteligente de obter benefícios em viagens, como passagens aéreas gratuitas, upgrades e até mesmo produtos e serviços de parceiros. As milhas aéreas fazem parte de programas de fidelidade oferecidos por companhias aéreas, e o acúmulo pode ser feito de diversas maneiras, desde viagens frequentes até o uso de cartões de crédito e compras em parceiros comerciais. Esta seção aborda as formas mais comuns e eficazes de acumular milhas.</p>
            
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Viajando com companhias aéreas parceiras</h2>
            <p>A maneira mais tradicional de acumular milhas é voando com a companhia aérea com a qual você tem um programa de fidelidade. A quantidade de milhas acumuladas varia de acordo com a distância percorrida e a classe da tarifa escolhida (econômica, executiva, primeira classe).</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Distância do voo:</strong> Quanto maior a distância, mais milhas você acumula. Voos internacionais tendem a acumular mais milhas do que voos domésticos.</li>
                <li><strong>Tipo de tarifa:</strong> Tarifa de classe executiva ou primeira classe geralmente acumula mais milhas do que as tarifas econômicas.</li>
                <li><strong>Programas de aliança:</strong> Algumas companhias fazem parte de alianças globais, como Star Alliance, SkyTeam e Oneworld. Isso significa que você pode acumular milhas voando com várias companhias aéreas dentro da mesma aliança, aumentando as opções de rotas e parceiros.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Utilizando cartões de crédito com programas de recompensa</h2>
            <p>Os cartões de crédito são uma das formas mais eficazes de acumular milhas sem precisar viajar. Diversos bancos oferecem cartões vinculados a programas de milhagem, onde cada real, dólar ou euro gasto com o cartão pode ser convertido em pontos ou milhas.</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Acúmulo por gasto:</strong> Dependendo do cartão, você pode ganhar 1, 2 ou até mais pontos por dólar gasto.</li>
                <li><strong>Bônus de adesão:</strong> Muitos cartões oferecem bônus de milhas na adesão, podendo variar de 10.000 a 100.000 milhas, dependendo da categoria do cartão e dos gastos exigidos nos primeiros meses.</li>
                <li><strong>Gastos estratégicos:</strong> Compras em categorias específicas, como viagens, restaurantes e supermercados, muitas vezes geram mais milhas por dólar gasto.</li>
                <li><strong>Conversão de pontos:</strong> Muitos cartões permitem converter pontos de programas de recompensa em milhas de várias companhias aéreas. Fique atento às promoções de transferência de pontos, onde você pode receber até 100% de bônus nas milhas transferidas.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Compras em parceiros de programas de fidelidade</h2>
            <p>Os programas de fidelidade das companhias aéreas possuem parcerias com diversas empresas, permitindo que você acumule milhas em suas compras cotidianas. Isso inclui desde compras online até reservas de hotéis, aluguel de carros e assinatura de serviços.</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Shopping online:</strong> Muitas companhias aéreas possuem plataformas de e-commerce onde você pode ganhar milhas ao comprar em lojas parceiras.</li>
                <li><strong>Reservas de hotéis e aluguel de carros:</strong> Ao reservar hotéis e alugar carros por meio dos parceiros dos programas de milhas, você acumula milhas extras. Plataformas como Booking.com, Hoteis.com e locadoras de veículos oferecem essa possibilidade.</li>
                <li><strong>Delivery e outros serviços:</strong> Atualmente, há programas de fidelidade que oferecem acúmulo de milhas em serviços como delivery de comida, assinaturas de serviços de streaming e até postos de gasolina.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Promoções de aceleração de acúmulo de milhas</h2>
            <p>Ficar atento às promoções oferecidas pelas companhias aéreas e bancos pode ser uma ótima forma de acumular milhas rapidamente. Algumas promoções oferecem bonificações ao comprar milhas diretamente ou ao transferir pontos do cartão de crédito.</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Bônus por transferência de pontos:</strong> Muitas companhias aéreas fazem promoções periódicas de transferência de pontos de cartão de crédito para milhas, oferecendo bônus que variam de 20% a 100% sobre o valor transferido.</li>
                <li><strong>Compra de milhas:</strong> Algumas companhias oferecem a possibilidade de comprar milhas com desconto ou em condições especiais. Durante as promoções, essa pode ser uma maneira vantajosa de acumular milhas rapidamente.</li>
                <li><strong>Clubes de milhas:</strong> Diversos programas de fidelidade oferecem clubes de assinaturas mensais onde, pagando um valor fixo, o cliente recebe uma quantidade de milhas todo mês, além de bônus em promoções e benefícios exclusivos.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>5. Transferência de milhas de programas parceiros</h2>
            <p>Além dos cartões de crédito, existem outros programas de fidelidade, como clubes de compras, lojas online e programas de hotéis, que permitem a transferência de pontos para programas de milhagem. A estratégia de acúmulo pode ser combinada com esses outros programas para otimizar o ganho de milhas.</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Programas de hotéis:</strong> Programas de fidelidade de redes hoteleiras, como Hilton Honors e Marriott Bonvoy, permitem a conversão de pontos acumulados em milhas de companhias aéreas.</li>
                <li><strong>Clubes de benefícios:</strong> Programas como Dotz, Livelo e outros, permitem que você converta pontos acumulados em milhas aéreas de diversas companhias.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>6. Desafios e segmentos de status</h2>
            <p>Alguns programas de fidelidade oferecem "desafios de status" que permitem que você acumule mais milhas ao atingir determinados objetivos, como realizar um número de voos ou gastar uma quantia específica em viagens dentro de um período determinado.</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Segmentos de status:</strong> Além de milhas, você pode acumular segmentos ou pontos qualificáveis para subir de status dentro do programa de fidelidade. Quanto maior o status, mais benefícios você recebe, como bônus de milhas em voos, check-in prioritário e acesso a salas VIP.</li>
            </ul>

            <p>Acumular milhas vai além de apenas voar frequentemente. Com uma estratégia bem planejada, é possível maximizar o acúmulo de milhas usando cartões de crédito, aproveitando promoções e comprando em parceiros de programas de fidelidade. Quanto mais informado você estiver sobre as diferentes formas de acumular milhas, maiores serão suas chances de aproveitar as melhores oportunidades e benefícios.</p>
        </div>
    ),
},
'Principais programas de fidelidade': {
    title: 'Principais programas de fidelidade',
    videoUrl: 'https://www.youtube.com/embed/G0uWnq8zPJo',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Principais programas de fidelidade</h1>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursomilhas04} alt="Programas de fidelidade"></img>
            <p>Existem diversos programas de fidelidade ao redor do mundo, cada um com suas particularidades e vantagens. A escolha do programa ideal depende do seu perfil de consumo, destinos frequentes e companhias aéreas que você costuma utilizar. Abaixo, destacamos alguns dos principais programas de fidelidade, tanto nacionais quanto internacionais, para ajudá-lo a entender melhor as opções disponíveis.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Smiles (GOL Linhas Aéreas)</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoofertantes01} alt="Smiles"></img>
            <p>O Smiles é o programa de fidelidade da GOL Linhas Aéreas, uma das maiores companhias aéreas do Brasil. Ele oferece a possibilidade de acumular milhas não apenas em voos da GOL, mas também em voos das companhias aéreas parceiras internacionais, como Air France, KLM, Qatar Airways e Delta Airlines. Além disso, o Smiles possui um clube de assinaturas que oferece benefícios exclusivos, como acúmulo mensal de milhas e promoções com bônus de transferências de pontos.</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Parcerias:</strong> Smiles possui parcerias com hotéis, locadoras de veículos, e-commerces e cartões de crédito.</li>
                <li><strong>Club Smiles:</strong> Oferece diferentes níveis de planos, com bônus de milhas, além de promoções e vantagens exclusivas para assinantes.</li>
                <li><strong>Categorias de fidelidade:</strong> Smiles tem categorias que vão de Smiles a Diamante, com benefícios como despacho de bagagem gratuito, acesso a salas VIP e prioridade no embarque.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. LATAM Pass (LATAM Airlines)</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoofertantes02} alt="LATAM Pass"></img>
            <p>O LATAM Pass é o programa de fidelidade da LATAM Airlines, que surgiu da fusão entre as companhias LAN e TAM. Ele é amplamente utilizado por viajantes frequentes na América Latina e oferece acúmulo de pontos em voos da LATAM e de companhias aéreas parceiras da aliança oneworld, como British Airways, American Airlines e Iberia.</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Parcerias:</strong> Além de voos, você pode acumular pontos LATAM Pass em compras, reservas de hotéis e uso de cartões de crédito parceiros.</li>
                <li><strong>Categorias:</strong> O programa possui categorias que vão de Gold a Black Signature, com benefícios que incluem prioridade no check-in, acesso a salas VIP, upgrades de cabine e bagagem adicional gratuita.</li>
                <li><strong>Promoções:</strong> Frequentemente oferece promoções de transferências de pontos de cartões de crédito com bônus que podem chegar a 100%.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. TudoAzul (Azul Linhas Aéreas)</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoofertantes00} alt="TudoAzul"></img>
            <p>O TudoAzul é o programa de fidelidade da Azul Linhas Aéreas, uma das companhias que mais cresce no Brasil. Ele permite o acúmulo de pontos em voos nacionais e internacionais da Azul, bem como de parceiros, além de diversas promoções exclusivas para seus clientes.</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Parcerias:</strong> TudoAzul tem parceria com uma grande variedade de bancos e empresas, incluindo lojas online e hotéis.</li>
                <li><strong>Club TudoAzul:</strong> Um clube de milhas que oferece acúmulo regular de pontos e promoções exclusivas para assinantes.</li>
                <li><strong>Categorias:</strong> TudoAzul oferece categorias de fidelidade que vão de TudoAzul a Diamante, com benefícios que incluem embarque prioritário, upgrade de cabine e assentos preferenciais.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Miles&Go (TAP Air Portugal)</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursomilhas05} alt="Miles&Go"></img>
            <p>O Miles&Go é o programa de fidelidade da TAP Air Portugal, e é uma ótima opção para quem viaja com frequência entre o Brasil e a Europa. Por ser parte da Star Alliance, você pode acumular milhas voando com diversas companhias aéreas ao redor do mundo, como Lufthansa, United Airlines e Turkish Airlines.</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Parcerias:</strong> Além dos voos com a TAP e companhias da Star Alliance, o Miles&Go oferece acúmulo de milhas em locadoras de veículos, hotéis e cartões de crédito parceiros.</li>
                <li><strong>Club TAP Miles&Go:</strong> Oferece um acúmulo mensal de milhas e vantagens exclusivas para assinantes.</li>
                <li><strong>Categorias:</strong> As categorias vão de Silver e Gold, com benefícios como embarque prioritário, acesso a lounges, franquia de bagagem extra e upgrades.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>5. AAdvantage (American Airlines)</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursomilhas06} alt="AAdvantage"></img>
            <p>O AAdvantage é o programa de fidelidade da American Airlines, uma das maiores companhias aéreas do mundo e membro da aliança oneworld. Ele oferece uma ampla gama de maneiras de acumular milhas, desde voos até compras em parceiros, aluguel de carros, reservas de hotéis e uso de cartões de crédito.</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Parcerias:</strong> Voando com companhias aéreas parceiras da oneworld e acumulando em empresas de diversos setores, como hotéis, cartões de crédito e aluguel de carros.</li>
                <li><strong>Categorias:</strong> AAdvantage tem categorias de status que oferecem benefícios como acesso a lounges, upgrades gratuitos, bagagem extra e embarque prioritário.</li>
                <li><strong>Promoções:</strong> Muitas vezes oferece oportunidades para compra de milhas com bônus ou para ganhar milhas em dobro em voos específicos.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>6. Executive Club (British Airways)</h2>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursomilhas07} alt="Executive Club"></img>
            <p>O Executive Club é o programa de fidelidade da British Airways, também parte da aliança oneworld. Seus pontos, chamados de "Avios", podem ser acumulados e usados em voos com a British Airways e suas parceiras da oneworld, além de parceiros como Iberia e American Airlines.</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Parcerias:</strong> Acúmulo de Avios ao voar com companhias da oneworld e diversos parceiros em outros setores, como hotéis e aluguel de carros.</li>
                <li><strong>Categorias:</strong> O programa possui categorias que vão de Blue a Gold e Platinum, oferecendo benefícios como embarque prioritário, franquia de bagagem adicional e upgrades.</li>
                <li><strong>Promoções:</strong> Frequentemente, oferece promoções para compra de Avios com bônus e oportunidades para ganhar Avios em voos.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Considerações Finais</h2>
            <p>Na hora de escolher um programa de fidelidade, é importante considerar seu padrão de viagem, as companhias aéreas que você utiliza com mais frequência, e quais benefícios são mais relevantes para você. Pesquise e compare as opções disponíveis, e não hesite em se inscrever em mais de um programa para maximizar suas vantagens. Cada milha acumulada pode ser um passo a mais em direção à sua próxima viagem!</p>
        </div>
    )
},
'Validade das milhas': {
    title: 'Validade das milhas',
    videoUrl: 'https://www.youtube.com/embed/8fOnyjC0AOE',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Validade das milhas</h1>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursomilhas08} alt="Imagem da validade das milhas"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. O que é a validade das milhas?</h2>
            <p>As milhas acumuladas em programas de fidelidade possuem um prazo de validade definido. Este prazo varia de acordo com o programa de cada companhia aérea e o nível de fidelidade do cliente. Quando as milhas atingem o fim do seu prazo, elas expiram e não podem mais ser utilizadas para a emissão de passagens ou outros serviços.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Como funciona a validade das milhas?</h2>
            <p>A validade das milhas depende de alguns fatores:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Programa de fidelidade:</strong> Cada programa define suas próprias regras de validade. Por exemplo, alguns programas podem permitir que as milhas expirem em 24 ou 36 meses.</li>
                <li><strong>Nível de fidelidade:</strong> Clientes em níveis mais altos de programas de fidelidade podem ter prazos de validade mais longos ou até mesmo não ter a expiração de milhas enquanto mantiverem esse status.</li>
                <li><strong>Movimentações na conta:</strong> Em alguns programas, realizar novas emissões ou acumular mais milhas pode estender o prazo de validade das milhas existentes.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Exemplo de validade em programas de fidelidade</h2>
            <p><strong>Latam Pass:</strong> As milhas acumuladas no Latam Pass possuem validade de até 24 meses, dependendo do tipo de conta e nível do cliente.</p>
            <p><strong>Azul TudoAzul:</strong> No programa TudoAzul, as milhas geralmente têm validade de 24 meses, mas o cliente Diamante pode ter prazos maiores ou extensões de validade conforme o nível de fidelidade.</p>
            <p><strong>Smiles (Gol):</strong> No Smiles, as milhas têm validade de 3 anos para os clientes nos níveis mais básicos, enquanto clientes com status Smiles Ouro ou Diamante podem ter prazos maiores.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Como acompanhar a validade das milhas?</h2>
            <p>O acompanhamento da validade das milhas pode ser feito diretamente pelo site ou aplicativo do programa de fidelidade. Basta acessar sua conta e verificar o extrato de milhas, onde constarão as informações sobre validade.</p>
            <p><strong>Notificações e e-mails:</strong> Muitas companhias aéreas enviam notificações por e-mail ou no aplicativo avisando quando suas milhas estão próximas de expirar.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>5. Estratégias para não perder milhas por vencimento</h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Utilização regular:</strong> Sempre que possível, utilize suas milhas antes do vencimento para evitar perder o saldo acumulado. Acompanhe regularmente o extrato de milhas para saber quando elas irão expirar.</li>
                <li><strong>Renovação de milhas:</strong> Alguns programas oferecem a opção de renovação ou extensão da validade mediante o pagamento de uma taxa. Verifique as políticas de renovação no site do programa de fidelidade.</li>
                <li><strong>Transferência para outros serviços:</strong> Em alguns casos, pode ser interessante transferir suas milhas para parceiros do programa, como hotéis, aluguel de carros ou serviços de streaming, antes que expirem.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>6. Conclusão</h2>
            <p>Entender a validade das milhas e gerenciar suas informações é essencial para tirar o máximo proveito dos programas de fidelidade. Ao acompanhar de perto o extrato e utilizar as estratégias corretas, você pode garantir que suas milhas sejam utilizadas de forma eficaz, evitando perdas por vencimento.</p>
        </div>
    ),
},
/* Prejuizos */
'Prejuízos': {
    title: 'Prejuízos',
    videoUrl: 'https://www.youtube.com/embed/Lq8E-Ck_mlE',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Prejuízos</h1>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoprejuizos00} alt="Imagem de prejuízos"></img>
            <p>Prejuízos referem-se à perda financeira que uma empresa ou indivíduo sofre em decorrência de operações, investimentos ou eventos que resultam em perdas de ativos ou receitas.</p>
            <p>Os prejuízos podem ter impactos significativos na saúde financeira e operacional de uma empresa. Esses impactos incluem:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '10px', marginBottom: '30px' }}>
                <li><strong>Redução do lucro:</strong> Prejuízos diretos reduzem os lucros da empresa, afetando sua capacidade de re-investir e crescer.</li>
                <li><strong>Fluxo de caixa comprometido:</strong> Perdas financeiras podem comprometer o fluxo de caixa, dificultando o pagamento de contas e salários.</li>
                <li><strong>Reputação e confiança do mercado:</strong> Prejuízos recorrentes podem afetar a percepção da empresa no mercado, levando à perda de clientes e à diminuição da confiança dos investidores.</li>
                <li><strong>Dificuldades de financiamento:</strong> Empresas com histórico de prejuízos podem enfrentar dificuldades para obter empréstimos ou financiamentos, pois os credores podem considerar o risco elevado.</li>
                <li><strong>Impacto na cultura organizacional:</strong> A persistência de prejuízos pode afetar a moral da equipe, levando a um ambiente de trabalho menos motivador e produtivo.</li>
                <li><strong>Aumento de custos:</strong> Para recuperar-se de prejuízos, as empresas podem incorrer em custos adicionais com reestruturações ou novas estratégias, o que pode perpetuar o ciclo de perdas.</li>
            </ul>
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Impacto dos prejuízos</h2>
            <p>No período de janeiro de 2022 até 28 de março de 2022, a empresa enfrentou um cenário financeiro que merece atenção e análise detalhada. Durante esses meses, um prejuízo total de R$119 mil foi registrado. Este valor é significativo, mas é importante ressaltar que, paralelamente, houve R$190 mil em prejuízos evitados, o que indica um esforço ativo da empresa em minimizar perdas.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoprejuizos01} alt="Imagem de causadores dos prejuízos"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Causadores dos prejuízos</h2>
            <p>Os principais fatores que contribuíram para os prejuízos gerados incluem:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '10px', marginBottom: '30px' }}>
                <li><strong>Emissão na conta errada:</strong> Quando uma passagem é emitida na conta de um cliente diferente, gerando confusão e a necessidade de correção.</li>
                <li><strong>Transação cancelada e localizador ativo:</strong> Emissões canceladas que ainda mantêm um localizador ativo, resultando em complicações no processo de reserva e faturamento.</li>
                <li><strong>Aumento sem tratativa ou com tratativa indevida:</strong> Aumento nas milhas de forma inadequada, que pode impactar a satisfação do cliente e a contabilidade da empresa.</li>
                <li><strong>Emissão duplicada:</strong> Quando uma passagem é emitida mais de uma vez para o mesmo cliente, resultando em custos adicionais.</li>
            </ul>
            <p>Estas causas representam 86% do total de prejuízos, conforme a análise de Pareto, o que indica que focar nessas áreas pode ser fundamental para reduzir os custos.</p>
            
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Erros no processo de emissão</h2>
            <p>No mesmo período, foram contabilizados 256 erros relacionados ao processo de emissão.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoprejuizos02} alt="Imagem de erros no processo de emissão"></img>
            
            <p>Os motivos mais frequentes para esses erros incluem:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '10px', marginBottom: '30px' }}>
                <li><strong>Emissão duplicada</strong></li>
                <li><strong>Emissão na conta errada</strong></li>
                <li><strong>Transação cancelada e localizador ativo</strong></li>
                <li><strong>Aumento sem tratativa ou com tratativa indevida</strong></li>
            </ul>
            <p>Esses quatro motivos são responsáveis por 92% do total de erros registrados, reforçando a necessidade de revisão e aprimoramento nos processos de emissão.</p>
        </div>
    ),
},
'Tipos mais comuns de prejuízos': {
    title: 'Tipos comuns de prejuízos',
    videoUrl: 'https://www.youtube.com/embed/6--ZiF3BEto',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Tipos comuns de prejuízos</h1>
            <p>Identificar e entender os tipos de prejuízos comuns é fundamental para reduzir perdas financeiras e melhorar a experiência dos clientes.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoofertantes03} alt="Imagem de tipos comuns de prejuízos"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Emissão duplicada</h2>
            <p>Esse tipo de prejuízo ocorre quando uma passagem é emitida mais de uma vez para o mesmo voo, resultando em uma duplicidade de cobrança e impacto financeiro negativo para a empresa. Implementar processos de verificação é essencial para evitar essa situação, que pode gerar frustração para o cliente e perda de recursos.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Emissão na conta errada</h2>
            <p>A emissão de passagens na conta de um cliente incorreto pode causar confusão e complicações na gestão de milhas e pagamentos. Esse erro pode resultar em reembolsos, transferências de milhas e insatisfação do cliente, impactando a reputação da empresa.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Transação cancelada com localizador ativo</h2>
            <p>Quando uma transação é cancelada, mas o localizador do voo permanece ativo, a empresa enfrenta prejuízos, pois o cliente pode tentar usar um serviço que já não está disponível. Isso pode gerar custos adicionais, como taxas de cancelamento e necessidade de reemissão.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Aumento de milhas sem tratativa ou tratativa indevida</h2>
            <p>Esse tipo de prejuízo ocorre quando há aumento de milhas sem tratativa adequada, como a validação do motivo para tal aumento. Tratativas inadequadas podem levar a erros na conta de milhas, resultando em frustração e reclamações dos clientes.</p>

            <p>A identificação e análise desses tipos de prejuízos são essenciais para a saúde financeira da empresa. Implementar medidas preventivas e treinamento adequado para os colaboradores ajuda a minimizar esses problemas e melhorar a experiência do cliente.</p>
        </div>
    ),
},
'Emissões duplicadas': {
    title: 'Emissões duplicadas',
    videoUrl: 'https://www.youtube.com/embed/KPlt3ZamRoc',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Emissões duplicadas</h1>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoprejuizos04} alt="Imagem de emissão duplicada"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>O que ocorre?</h2>
            <p>A emissão duplicada acontece quando uma mesma transação é emitida mais de uma vez. Isso pode ocorrer tanto na conta do mesmo ofertante quanto em contas diferentes. Esse tipo de erro pode gerar confusão e complicações no processo de reserva e faturamento, afetando negativamente tanto a experiência do cliente quanto as finanças da empresa.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Por que ocorre?</h2>
            <p>A principal causa da emissão duplicada é a falta de verificação por parte do analista. Isso pode ocorrer devido a:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '10px', marginBottom: '30px' }}>
                <li>Falta de checagem no log automático e no extrato do ofertante para confirmar se a transação já foi emitida.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Como tratar?</h2>
            <p>Para resolver o problema da emissão duplicada, é importante seguir estes passos:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '10px', marginBottom: '30px' }}>
                <li>Verificar a possibilidade de cancelamento junto à companhia aérea, buscando uma solução sem custo, especialmente para o localizador que não esteja na transação.</li>
                <li>Caso o cancelamento implique custos, deve-se avaliar se é viável manter o cancelamento ou optar por pagar ao ofertante.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Próximos passos</h2>
            <p>Para evitar que a emissão duplicada ocorra novamente, é importante implementar as seguintes ações no fluxo do processo de emissão:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '10px', marginBottom: '30px' }}>
                <li>Inserir a checagem do extrato do ofertante antes de tentar emitir uma nova transação, especialmente em casos de erro na tela de pagamento, emissões manuais ou quando identificado no log automático.</li>
                <li>Treinar os analistas para que realizem essa verificação rigorosamente, ajudando a minimizar os erros e melhorar a eficiência do processo de emissão.</li>
            </ul>

            <p>A emissão duplicada não é apenas um erro administrativo, mas um problema que pode ter consequências financeiras significativas. Implementar práticas de verificação mais robustas e treinar a equipe para seguir essas diretrizes ajudará a reduzir a incidência desse problema, melhorando a operação da empresa e a satisfação do cliente.</p>

            <p>A identificação e análise desses tipos comuns de prejuízos são essenciais para a saúde financeira da empresa. Implementar medidas preventivas e treinamento adequado para os colaboradores pode ajudar a minimizar esses problemas e melhorar a experiência do cliente.</p>
        </div>
    ),
},
'Emissões na conta errada': {
    title: 'Emissões na conta errada',
    videoUrl: 'https://www.youtube.com/embed/q5OEvUHZcj8',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Emissões na conta errada</h1>
            <p>As emissões na conta errada acontecem quando, durante uma emissão manual ou semi-automática, um login que não corresponde à transação é utilizado. Isso resulta na emissão da passagem na conta de um ofertante incorreto, o que pode causar confusão e complicações no gerenciamento das reservas.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoprejuizos05} alt="Imagem ilustrativa de emissões na conta errada"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. O que ocorre?</h2>
            <p>As emissões na conta errada acontecem quando o login utilizado para a emissão não corresponde ao ofertante correto, resultando na emissão em uma conta errada e trazendo complicações para o gerenciamento da reserva.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Por que ocorre?</h2>
            <p>Esse erro pode acontecer devido à falta de atenção do analista, que, às vezes, não verifica com precisão o ofertante correto antes de concluir a transação.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Como tratar?</h2>
            <p>Caso uma emissão na conta errada seja identificada, siga os passos abaixo para resolver o problema:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li>Criar uma nova transação com os mesmos dados da transação que foi emitida erroneamente, ajustando para o ofertante correto.</li>
                <li>Cancelar o pagamento e a transação anterior para evitar problemas de faturamento e gestão de passagens.</li>
                <li>Se o pagamento já foi realizado, essa situação pode resultar em prejuízo para a empresa, exigindo uma avaliação cuidadosa.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Próximos passos</h2>
            <p>Para prevenir a ocorrência de emissões na conta errada, implemente as seguintes ações:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li>Inserir no fluxo de emissão uma checagem do ofertante da transação em relação ao ofertante logado no programa de fidelidade antes de cada emissão.</li>
                <li>Treinar todos os analistas no novo fluxo para garantir que estejam cientes da importância dessa verificação, reduzindo a margem de erro e aumentando a eficiência.</li>
            </ul>

            <p>As emissões na conta errada podem impactar significativamente as operações da empresa e a satisfação do cliente. Procedimentos rigorosos de verificação e treinamento contínuo da equipe são essenciais para minimizar esses erros e assegurar um processo de emissão mais eficaz e preciso.</p>
        </div>
    ),
},
'Transação cancelada e LOC ativo': {
    title: 'Transação cancelada e localizador ativo',
    videoUrl: 'https://www.youtube.com/embed/drF7h_HQ9k0',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Transação cancelada e localizador ativo</h1>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoprejuizos06} alt="Imagem da transação cancelada e localizador ativo"></img>
            
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>O que ocorre?</h2>
            <p>Quando uma transação é emitida e, em seguida, cancelada internamente sem a devida verificação sobre a ocorrência da emissão.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Por que ocorre?</h2>
            <p>Isso se deve à falta de verificação por parte do analista no log da automática e no extrato do ofertante para confirmar se a transação já foi emitida.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Como tratar?</h2>
            <p><strong>Correção em até 24h:</strong> Entrar em contato com a companhia aérea para solicitar o cancelamento sem custo ou entrar em contato com o comprador para reverter a situação.</p>
            <p><strong>Correção após 24h:</strong> Verificar a possibilidade de cancelamento na companhia aérea, seja sem custo ou com custo. Caso haja custo, avaliar se é viável manter o cancelamento ou se é mais adequado pagar ao ofertante.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Próximos passos</h2>
            <p>Inserir no fluxo do processo de emissão a checagem do extrato do ofertante antes de efetuar o cancelamento da transação, especialmente em casos com erro na tela de pagamento, em emissões manuais ou quando informado pelo log da automática.</p>
        </div>
    ),
},
'Aumento sem tratativa ou com tratativa indevida': {
    title: 'Aumento sem tratativa ou com tratativa indevida',
    videoUrl: 'https://www.youtube.com/embed/hlEd4EbLhrg',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Aumento sem tratativa ou com tratativa indevida</h1>
            <p>Este erro ocorre quando há um aumento de milhas na transação e a emissão é realizada sem que a quantidade de milhas seja alterada na tela da transação no sistema administrativo.</p>
            
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoprejuizos06} alt="Imagem do aumento sem tratativa ou com tratativa indevida"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. O que ocorre?</h2>
            <p>Esse erro acontece quando a quantidade de milhas na transação aumenta, mas a emissão é feita sem atualizar a quantidade de milhas na tela da transação no sistema administrativo.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Por que ocorre?</h2>
            <p>A principal causa deste erro é a falta de verificação da quantidade de milhas no momento da emissão. Também pode haver a ausência de correção da quantidade de milhas usadas na tela da transação.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Como tratar?</h2>
            <p>Corrija a quantidade de milhas na tela da transação do sistema administrativo para refletir a quantidade correta que será usada na emissão.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. Próximos passos</h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Checagem da quantidade de milhas:</strong> Adicione ao processo de emissão uma etapa para verificar a quantidade de milhas antes de concluir a emissão.</li>
                <li><strong>Rotina de alteração definida:</strong> Estabeleça uma rotina clara para atualizar a quantidade de milhas na tela da transação, especialmente quando houver aumento de milhas e a emissão for continuada.</li>
                <li><strong>Treinamento da equipe:</strong> Ofereça treinamentos regulares para a equipe, garantindo que todos entendam a importância de verificar e corrigir a quantidade de milhas antes de finalizar qualquer transação.</li>
            </ul>
        </div>
    ),
},
/*Ferramentas auxiliares*/
'Slack': {
    title: 'Slack',
    videoUrl: 'https://www.youtube.com/embed/YLS9RKCLF6Y',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Slack</h1>
            <p>O Slack é uma plataforma de comunicação colaborativa projetada para facilitar a interação entre equipes. Ele combina chat em tempo real, troca de arquivos e integração com outras ferramentas, proporcionando um ambiente de trabalho mais conectado e produtivo.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoferramentas00} alt="Imagem do Slack"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>1. principais funcionalidades</h2>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Canais</h3>
            <p>O Slack permite a criação de canais públicos e privados para diferentes projetos, equipes ou tópicos, facilitando a organização das conversas.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoferramentas01} alt="Imagem dos canais no Slack"></img>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Mensagens diretas</h3>
            <p>Os usuários podem enviar mensagens diretas para colegas de trabalho, permitindo comunicação mais pessoal e rápida.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoferramentas02} alt="Imagem das mensagens diretas"></img>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Integrações</h3>
            <p>O Slack se integra com diversas ferramentas e aplicativos, como Google Drive, Trello, Asana, entre outros, permitindo centralizar informações e melhorar o fluxo de trabalho.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoferramentas03} alt="Imagem das integrações"></img>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Compartilhamento de arquivos</h3>
            <p>Os usuários podem compartilhar documentos, imagens e outros arquivos diretamente nas conversas, facilitando a colaboração.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoferramentas04} alt="Imagem do compartilhamento de arquivos"></img>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Busca avançada</h3>
            <p>A funcionalidade de busca permite que os usuários encontrem mensagens, arquivos e informações relevantes rapidamente.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoferramentas05} alt="Imagem da busca avançada"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>2. benefícios do uso do Slack</h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Comunicação rápida e eficiente:</strong> O Slack proporciona uma forma de comunicação em tempo real, reduzindo a necessidade de e-mails e reuniões.</li>
                <li><strong>Aumento da colaboração:</strong> Com canais dedicados e integração com outras ferramentas, o Slack facilita a colaboração entre equipes e departamentos.</li>
                <li><strong>Flexibilidade e acessibilidade:</strong> O Slack pode ser acessado em dispositivos móveis e desktops, permitindo que os colaboradores se mantenham conectados, independentemente de sua localização.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>3. alterando o status</h2>
            <p>O Slack permite que você altere seu status para informar aos colegas de trabalho sua disponibilidade. Para alterar o status:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Acessar seu perfil:</strong> No canto superior direito da tela, clique na sua foto de perfil ou nas iniciais do seu nome.</li>
                <li><strong>Selecionar "alterar status":</strong> Clique em "alterar status" no menu suspenso.</li>
                <li><strong>Escolher um status:</strong> Escolha um status pré-definido ou defina um status personalizado.</li>
                <li><strong>Definir duração (opcional):</strong> Escolha uma duração para o status, como "para 30 minutos" ou "para o resto do dia".</li>
                <li><strong>Salvar:</strong> Clique em "salvar" para aplicar o novo status.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>4. indicadores de status</h2>
            <p>Após a alteração do status, um ícone correspondente aparecerá ao lado do seu nome:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Verde:</strong> Disponível</li>
                <li><strong>Amarelo:</strong> Ausente</li>
                <li><strong>Vermelho:</strong> Não perturbe</li>
                <li><strong>Cinza:</strong> Offline ou sem status definido</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>5. chamando a atenção de alguém</h2>
            <p>Para chamar a atenção de um colega em uma conversa, use o símbolo "@" para mencionar.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>6. instalação do slack</h2>
            
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Slack desktop</h3>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Para Windows:</strong> Acesse o site oficial do Slack (slack.com/downloads), baixe e instale o Slack, depois faça login com seu e-mail da Maxmilhas.</li>
            </ul>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Slack Web</h3>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Acessar o Slack Web:</strong> Abra o navegador e vá para https://slack.com/intl/pt-br/workspace-signin.</li>
                <li><strong>Acessar o workspace:</strong> Insira o URL do workspace: maxmilhas.slack.com e faça login.</li>
            </ul>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoferramentas06} alt="Imagem do Slack Web"></img>

            <p>O Slack é uma ferramenta poderosa para transformar a comunicação e a colaboração dentro da equipe. Com o uso eficaz de suas funcionalidades, as equipes podem se tornar mais produtivas e conectadas.</p>
        </div>
    ),
},
'Metabase': {
    title: 'Metabase',
    videoUrl: 'https://www.youtube.com/embed/cJK4QLT6g7I',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>O que é o Metabase?</h1>
            <p>O Metabase é uma ferramenta de Business Intelligence (BI) que permite a visualização e análise de dados de forma intuitiva. Na MaxMilhas, essa ferramenta é utilizada para monitorar e gerar relatórios sobre as emissões realizadas, ajudando a equipe a tomar decisões informadas.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Acesso ao Metabase</h2>
            <p>Para acessar o Metabase, siga os passos abaixo:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li>Abrir seu navegador.</li>
                <li>Digite o endereço do Metabase da MaxMilhas.</li>
                <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoferramentas08} alt="Imagem de acesso ao Metabase"></img>
                <li>Faça login com seu e-mail corporativo (@maxmilhas.com.br).</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Verificando suas emissões</h2>
            <p>Uma vez dentro do Metabase, você pode verificar suas emissões através de relatórios e painéis de controle. Aqui estão os passos:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li>Navegue até a seção de relatórios: No menu lateral, procure a opção chamada Coleção [OP] Operadores - Indicadores Individuais.</li>
                <li>Selecione o relatório desejado: Escolha o relatório chamado [LGPD] Emissão por Atendente - Pesquisado por Login.</li>
                <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoferramentas10} alt="Imagem da seleção do relatório"></img>
                <li>Filtre os dados: Utilize filtros para personalizar a visualização, como período de tempo ou status das emissões.</li>
                <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoferramentas11} alt="Imagem de filtragem dos dados"></img>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Relatórios importantes no Metabase</h2>
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Coleção [OP] Operadores - Indicadores Individuais</h3>
            <h4 style={{ marginTop: '30px', marginBottom: '30px' }}>[LGPD] [Analítico] - Emissões por operador</h4>
            <p>Este relatório apresenta uma tabela detalhada com informações sobre as transações realizadas por cada operador. Os dados incluem:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li>Número da transação: Identificador único de cada emissão.</li>
                <li>Data: Data em que a transação foi realizada.</li>
                <li>Operador: Nome do operador responsável pela emissão.</li>
                <li>Emitido/Estornado: Indica se a transação foi emitida ou estornada.</li>
                <li>Tipo de emissão: Classificação como manual ou automática.</li>
                <li>Link da emissão: URL para acessar a transação emitida no Cockpit.</li>
                <li>Companhia aérea: Nome da companhia responsável pela emissão da passagem.</li>
            </ul>

            <h4 style={{ marginTop: '30px', marginBottom: '30px' }}>[LGPD][Analítico] Estorno por operadores</h4>
            <p>Este relatório mostra uma tabela com as transações que foram estornadas, permitindo acompanhar as operações de cancelamento realizadas por cada operador.</p>

            <h4 style={{ marginTop: '30px', marginBottom: '30px' }}>[LGPD] Emissão por atendente - Pesquisado por Login</h4>
            <p>Este relatório fornece uma tabela que mostra o total de emissões realizadas em um intervalo de tempo específico.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Coleção [GERAL] Cockpit</h3>
            <h4 style={{ marginTop: '30px', marginBottom: '30px' }}>Transações em emissão por login</h4>
            <p>Este relatório exibe as transações que estão sendo emitidas por um login específico, permitindo monitorar as transações iniciadas pelo analista.</p>
        </div>
    ),
},
'Convenia': {
    title: 'Convenia',
    videoUrl: 'https://www.youtube.com/embed/ms0ZpgzXTwk',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Introdução ao convenia</h1>
            <p>O convenia é uma plataforma que oferece soluções de gestão de recursos humanos, facilitando o controle de diversos processos relacionados a funcionários e colaboradores. Com a utilização do convenia, as empresas podem otimizar a administração de folha de pagamento, benefícios e gestão de férias, proporcionando uma experiência mais fluida tanto para os gestores quanto para os colaboradores.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoferramentas12} alt="Imagem do Convenia"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Principais funcionalidades</h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Controle de folha de pagamento:</strong> O convenia permite a gestão completa da folha de pagamento, com cálculos automáticos e relatórios detalhados, facilitando o processo de pagamento e evitando erros.</li>
                <li><strong>Gestão de benefícios:</strong> A plataforma oferece a possibilidade de gerenciar benefícios como vale-alimentação, vale-refeição e outros, garantindo que todos os colaboradores tenham acesso às informações necessárias sobre seus benefícios.</li>
                <li><strong>Gestão de férias:</strong> O convenia facilita o controle das férias dos colaboradores, permitindo que tanto gestores quanto funcionários possam visualizar e planejar suas férias de maneira prática.</li>
                <li><strong>Portal do colaborador:</strong> Através do portal, os colaboradores podem acessar informações sobre sua folha de pagamento, benefícios e solicitar férias, tudo de forma simples e intuitiva.</li>
                <li><strong>Relatórios e análises:</strong> A plataforma oferece uma variedade de relatórios que ajudam os gestores a tomar decisões mais informadas sobre a gestão de pessoas.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Acesso e navegação</h2>
            <p><strong>Acesso ao convenia:</strong> Os colaboradores e gestores podem acessar a plataforma por meio do navegador ou aplicativo, utilizando as credenciais fornecidas pela empresa através do link <a href="https://login.convenia.com.br/" target="_blank" rel="noopener noreferrer">https://login.convenia.com.br/</a>.</p>
            <p><strong>Navegação:</strong> A interface é amigável, permitindo que usuários facilmente encontrem informações relacionadas a seus dados e processos de trabalho.</p>

            <p>O convenia é uma ferramenta essencial para a gestão eficiente de recursos humanos, promovendo uma melhor organização e gestão de pessoas dentro da empresa. Ao utilizar o convenia, a MaxMilhas reforça seu compromisso com a transparência e a eficiência nas relações de trabalho.</p>
        </div>
    ),
},
'Qulture.rocks': {
    title: 'Introdução ao Qulture.rocks',
    videoUrl: 'https://www.youtube.com/embed/ms0ZpgzXTwk',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Introdução ao Qulture.Rocks</h1>
            <p>O Qulture.Rocks é uma plataforma de gestão de desempenho que visa transformar a cultura organizacional das empresas, promovendo um ambiente de feedback contínuo, desenvolvimento de competências e engajamento dos colaboradores. Com um foco em resultados, a ferramenta permite que as empresas alinhem objetivos e melhorem a performance de suas equipes.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoferramentas13} alt="Imagem da plataforma Qulture.Rocks"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Principais funcionalidades</h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li><strong>Gestão de desempenho:</strong> Permite que as empresas definam metas individuais e coletivas, acompanhem o progresso e realizem avaliações de desempenho de maneira ágil e eficiente.</li>
                <li><strong>Feedback contínuo:</strong> Facilita a troca de feedback entre colaboradores e gestores, promovendo uma cultura de comunicação aberta e transparente. Os colaboradores podem solicitar e dar feedback a qualquer momento, ajudando no desenvolvimento contínuo.</li>
                <li><strong>Reconhecimento e recompensa:</strong> A plataforma possibilita o reconhecimento de conquistas e esforços dos colaboradores, contribuindo para um ambiente de trabalho mais motivador e engajado.</li>
                <li><strong>Cultura e valores:</strong> O Qulture.Rocks ajuda a alinhar a cultura organizacional e os valores da empresa com as práticas diárias dos colaboradores, assegurando que todos estejam trabalhando em direção aos mesmos objetivos.</li>
                <li><strong>Relatórios e análises:</strong> A ferramenta oferece relatórios detalhados sobre o desempenho individual e coletivo, ajudando os gestores a tomar decisões informadas sobre o desenvolvimento de suas equipes.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Acesso e navegação</h2>
            <p>Acesso ao Qulture.Rocks: Os colaboradores podem acessar a plataforma através do navegador ou aplicativo, utilizando as credenciais fornecidas pela empresa.</p>
            <p>Link de acesso: <a href="https://app.qulture.rocks/users/sign_in">https://app.qulture.rocks/users/sign_in</a></p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Navegação</h2>
            <p>A interface é intuitiva, permitindo que os usuários acessem rapidamente as funcionalidades de feedback, metas e avaliações.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Conclusão</h2>
            <p>O Qulture.Rocks é uma ferramenta essencial para promover uma cultura de alto desempenho e engajamento dentro da MaxMilhas. Ao implementar essa plataforma, a empresa se compromete a fortalecer a comunicação interna, o desenvolvimento contínuo e o alinhamento de objetivos, resultando em uma equipe mais motivada e produtiva.</p>
        </div>
    ),
},
'iFractal Ponto online': {
    title: 'iFractal ponto online',
    videoUrl: 'https://www.youtube.com/embed/mKiM0PMwzRw',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Introdução ao iFractal ponto online</h1>
            <p>O iFractal Ponto Online é uma plataforma de gestão de ponto e controle de jornada de trabalho, desenvolvida para facilitar a administração da frequência dos colaboradores de forma simples e eficiente. A ferramenta é especialmente útil para empresas que buscam otimizar processos relacionados ao registro de horas trabalhadas, folgas e absenteísmo.</p>
            
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Principais funcionalidades</h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Registro de ponto:</strong> Permite que os colaboradores registrem suas entradas e saídas de maneira fácil, seja por meio do aplicativo móvel ou da versão web.</li>
                <li><strong>Controle de jornada:</strong> Os gestores podem acompanhar a jornada de trabalho dos colaboradores, monitorando horas extras, faltas e atrasos em tempo real.</li>
                <li><strong>Relatórios:</strong> A plataforma oferece relatórios detalhados sobre a frequência dos colaboradores, permitindo que a gestão analise dados de desempenho, absenteísmo e horas trabalhadas de forma eficiente.</li>
                <li><strong>Integração com folha de pagamento:</strong> O iFractal pode ser integrado a sistemas de folha de pagamento, facilitando o cálculo de salários e evitando erros na apuração de horas trabalhadas.</li>
                <li><strong>Gestão de ausências e férias:</strong> Os colaboradores podem solicitar folgas, férias e licenças diretamente pela plataforma, permitindo que os gestores aprovem ou rejeitem essas solicitações com facilidade.</li>
            </ul>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Acesso e navegação</h2>
            <p>Acesso ao iFractal ponto online: Os colaboradores podem acessar a plataforma através do navegador ou aplicativo, utilizando as credenciais fornecidas pela empresa.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoferramentas14} alt="Imagem do acesso ao iFractal ponto online"></img>
            
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Navegação</h2>
            <p>A interface é intuitiva, com menus que facilitam o acesso às funcionalidades de registro de ponto, relatórios e gestão de ausências.</p>

            <p>O iFractal Ponto Online é uma ferramenta importante para a gestão eficaz do ponto na MaxMilhas. Ao utilizar essa plataforma, a empresa consegue otimizar o controle de jornada de trabalho, garantindo maior eficiência nas operações e melhor acompanhamento da frequência dos colaboradores.</p>
        </div>
    ),
},
'Receita federal': {
    title: 'Receita Federal',
    videoUrl: 'https://www.youtube.com/embed/JVUOuz8b97E',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Receita Federal</h1>
            <p>Esta aula tem como objetivo ensinar como realizar a consulta de dados do passageiro utilizando o site da Receita Federal. Essa prática é essencial para verificar informações como nome completo e data de nascimento, garantindo a precisão dos dados durante o processo de emissão de passagens aéreas.</p>
            
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Acesso ao site</h2>
            <p>URL: Acesse o site da Receita Federal através do seguinte link: Receita Federal - Consulta CPF.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoferramentas15} alt="Imagem da Receita Federal"></img>
            
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Passo a passo para a consulta</h2>
            
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>1. Preenchimento dos dados</h3>
            <p>No site, você encontrará campos para inserir o CPF e a data de nascimento do passageiro. Insira os dados conforme solicitado.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>2. Validação e confirmação</h3>
            <p>Após preencher as informações, clique no botão de consultar. O sistema valida os dados e retornará as informações do passageiro.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>3. Informações retornadas</h3>
            <p>Você verá detalhes como:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
                <li>Nome completo</li>
                <li>Data de nascimento</li>
                <li>Situação cadastral do CPF (regular ou irregular)</li>
            </ul>
            <p>Utilize essas informações para verificar a exatidão dos dados do passageiro antes de realizar a emissão.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Importância da consulta</h2>
            <p>Precisão nas emissões: Garantir que os dados estejam corretos evita problemas durante a emissão da passagem e possíveis complicações na hora do embarque.</p>
            <p>Prevenção de erros: Consultar as informações do CPF pode evitar emissões em contas erradas e outros erros comuns que podem resultar em prejuízos para a empresa.</p>

            <p>Realizar a consulta de dados do passageiro na Receita Federal é uma prática recomendada que ajuda a manter a qualidade das emissões e a satisfação dos clientes. Siga sempre este procedimento antes de iniciar o processo de emissão.</p>
        </div>
    ),
},
'TripCase': {
    title: 'TripCase',
    videoUrl: 'https://www.youtube.com/embed/qEmIeEcyu44',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>O que é o TripCase?</h1>
            <p>O TripCase é uma ferramenta útil que permite aos viajantes organizar e gerenciar todas as informações relacionadas às suas viagens em um único lugar. Uma das suas principais funcionalidades é a capacidade de buscar e acessar e-tickets quando a companhia aérea não fornece o localizador.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Utilização do TripCase em casos especiais</h2>
            <p>Quando usar:</p>
            <p>O TripCase é especialmente útil em situações em que a companhia aérea não gera um localizador da passagem.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Criando uma viagem:</h2>
            <p>Acesse o site do TripCase e crie uma nova viagem.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoferramentas16} alt="Imagem do TripCase - Criando uma nova viagem"></img>

            <p>Clique em criar nova viagem</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoferramentas17} alt="Imagem do TripCase - Clique em criar nova viagem"></img>

            <p>Utilize o código do localizador para o nome da viagem</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoferramentas18} alt="Imagem do TripCase - Utilizando o código do localizador"></img>

            <p>Clique em vincular uma reserva</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoferramentas19} alt="Imagem do TripCase - Clique em vincular uma reserva"></img>

            <p>Digite o sobrenome do passageiro cadastrado na transação e o código do localizador.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Buscando a viagem:</h2>
            <p>Após inserir os dados, o TripCase busca automaticamente as informações da viagem e exibe o e-ticket associado a essa reserva.</p>
            <p>O e-ticket pode ser visualizado, salvo ou compartilhado conforme necessário.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Funcionalidades adicionais do TripCase</h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Organização:</strong> Permite consolidar todos os detalhes da viagem em um só lugar.</li>
                <li><strong>Notificações:</strong> Recebe alertas sobre mudanças de status de voos, atrasos e cancelamentos.</li>
                <li><strong>Acesso rápido:</strong> Os usuários podem acessar rapidamente o e-ticket e as informações da viagem, mesmo sem conexão à internet.</li>
            </ul>

            <p>O TripCase se torna uma ferramenta essencial para viajantes que enfrentam situações onde o localizador da passagem não é disponibilizado. Ao permitir que os usuários busquem e visualizem seus e-tickets de maneira rápida e fácil, o aplicativo contribui para uma experiência de viagem mais tranquila e organizada.</p>
        </div>
    ),
},
'Zendesk': {
    title: 'Zendesk',
    videoUrl: 'https://www.youtube.com/embed/qEmIeEcyu44',
    description: (
        <div>
            <h1 style={{ marginTop: '10px', marginBottom: '30px' }}>Zendesk</h1>
            <p>O Zendesk é uma solução de software que oferece ferramentas para gerenciar o atendimento ao cliente, centralizando as interações em um único lugar. Ele é amplamente utilizado por empresas para melhorar a experiência do cliente e otimizar processos de suporte.</p>
            <img style={{ marginTop: '10px', marginBottom: '30px' }} className={styles.image} src={cursoferramentas20} alt="Imagem do Zendesk"></img>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Principais funcionalidades do Zendesk</h2>
            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Central de atendimento</h3>
            <p>O Zendesk permite que as empresas tenham uma central de atendimento onde podem receber, organizar e responder a solicitações dos clientes.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Tickets</h3>
            <p>Quando um cliente entra em contato, uma solicitação é convertida em um "ticket", que pode ser rastreado e gerenciado até a resolução.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Base de conhecimento</h3>
            <p>O Zendesk oferece a possibilidade de criar uma base de conhecimento, onde os clientes podem encontrar respostas para perguntas frequentes e resolver problemas de forma autônoma.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Chat ao vivo</h3>
            <p>A plataforma também conta com uma funcionalidade de chat ao vivo, permitindo que os agentes se comuniquem com os clientes em tempo real.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Relatórios e análises</h3>
            <p>O Zendesk oferece ferramentas de análise que ajudam as empresas a monitorar o desempenho do atendimento, identificando áreas para melhoria.</p>

            <h3 style={{ marginTop: '30px', marginBottom: '30px' }}>Integrações</h3>
            <p>O Zendesk pode ser integrado a outras ferramentas e plataformas, facilitando a gestão de informações e a comunicação com os clientes.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Benefícios do uso do Zendesk</h2>
            <p>Melhoria na experiência do cliente: Proporciona um atendimento mais ágil e eficaz, aumentando a satisfação do cliente.</p>
            <p>Eficiência operacional: Centraliza as informações e facilita a comunicação entre equipes, otimizando o tempo dos agentes.</p>
            <p>Acesso a dados: Os relatórios e análises permitem que as empresas tomem decisões baseadas em dados concretos sobre o desempenho do atendimento.</p>

            <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>Acessando o Zendesk</h2>
            <p>O Zendesk pode ser acessado através do link <a
      href="https://maxmilhas.zendesk.com/agent/dashboard"
      className={styles.customlink}
      target="_blank" // Abre o link em uma nova aba
      rel="noopener noreferrer" // Melhora a segurança ao abrir um link externo
    >
      maxmilhas.zendesk.com
    </a> </p>
            <p>Utilize as credenciais <strong>equipeemissao@maxmilhas.com.br</strong> e <strong>Maxmilhas@2025.</strong> (inclua o ponto no final de 2025) para realizar o login</p>

            <p>O Zendesk é uma ferramenta poderosa para empresas que buscam aprimorar seu atendimento ao cliente. Com suas diversas funcionalidades, permite que as equipes de suporte gerenciem solicitações de maneira eficaz, contribuindo para uma experiência mais positiva para os clientes.</p>
        </div>
    ),
},



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