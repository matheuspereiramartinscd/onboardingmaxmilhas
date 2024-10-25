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
import cursocockpit111 from './assets/Cursos/Emissoes/cursoemissoes00.jpg';
import cursoemissoesazul00 from './assets/Cursos/Emissoesazul/cursoemissoesazul00.jpg';
import cursoemissoesazul01 from './assets/Cursos/Emissoesazul/cursoemissoesazul01.jpg';
import cursoemissoesazul02 from './assets/Cursos/Emissoesazul/cursoemissoesazul02.jpg';
import cursoemissoesazul03 from './assets/Cursos/Emissoesazul/cursoemissoesazul03.jpg';
import cursoemissoesazul04 from './assets/Cursos/Emissoesazul/cursoemissoesazul04.jpg';
import cursoemissoesazul05 from './assets/Cursos/Emissoesazul/cursoemissoesazul05.jpg';
import cursoemissoesazul06 from './assets/Cursos/Emissoesazul/cursoemissoesazul06.jpg';
import cursoemissoesazul07 from './assets/Cursos/Emissoesazul/cursoemissoesazul07.jpg';
import cursoemissoesazul08 from './assets/Cursos/Emissoesazul/cursoemissoesazul08.jpg';
import cursoemissoesgol01 from './assets/Cursos/Emissoesgol/cursoemissoesgol00.jpg';
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
import cursoferramentas09 from './assets/Cursos/Ferramentas/cursoferramentas09.jpg';
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
import cursoferramentas19 from './assets/Cursos/Ferramentas/cursoferramentas20.jpg';
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
import cursohistoria26 from './assets/Cursos/Historia/cursohistoria27.jpg';
import cursomilhas00 from './assets/Cursos/Milhas/cursomilhas00.jpg';
import cursomilhas01 from './assets/Cursos/Milhas/cursomilhas01.jpg';
import cursomilhas02 from './assets/Cursos/Milhas/cursomilhas02.jpg';
import cursomilhas03 from './assets/Cursos/Milhas/cursomilhas03.jpg';
import cursomilhas04 from './assets/Cursos/Milhas/cursomilhas04.jpg';
import cursomilhas05 from './assets/Cursos/Milhas/cursomilhas05.jpg';
import cursomilhas06 from './assets/Cursos/Milhas/cursomilhas06.jpg';
import cursomilhas07 from './assets/Cursos/Milhas/cursomilhas07.jpg';
import cursomilhas07 from './assets/Cursos/Milhas/cursomilhas08.jpg';
import cursoinformatica00 from './assets/Cursos/Informatica/cursoinformatica00.jpg';
import cursoinformatica01 from './assets/Cursos/Informatica/cursoinformatica01.jpg';
import cursoinformatica02 from './assets/Cursos/Informatica/cursoinformatica02.jpg';
import cursoinformatica03 from './assets/Cursos/Informatica/cursoinformatica03.jpg';
import cursoinformatica04 from './assets/Cursos/Informatica/cursoinformatica04.jpg';
import cursoinformatica05 from './assets/Cursos/Informatica/cursoinformatica05.jpg';
import cursoinformatica06 from './assets/Cursos/Informatica/cursoinformatica06.jpg';
import cursoinformatica07 from './assets/Cursos/Informatica/cursoinformatica07.jpg';
import cursoinformatica08 from './assets/Cursos/Informatica/cursoinformatica08.jpg';
import cursoinformatica09 from './assets/Cursos/Informatica/cursoinformatica09.jpg';
import cursoinformatica09 from './assets/Cursos/Informatica/cursoinformatica10.jpg';
import cursoofertantes00 from './assets/Cursos/Ofertantes/cursoofertantes00.jpg';
import cursoofertantes01 from './assets/Cursos/Ofertantes/cursoofertantes01.jpg';
import cursoofertantes02 from './assets/Cursos/Ofertantes/cursoofertantes02.jpg';
import cursoofertantes03 from './assets/Cursos/Ofertantes/cursoofertantes03.jpg';
import cursoofertantes04 from './assets/Cursos/Ofertantes/cursoofertantes04.jpg';
import cursoofertantes04 from './assets/Cursos/Ofertantes/cursoofertantes05.jpg';
import cursoprejuizos00 from './assets/Cursos/Prejuizos/cursoprejuizos00.jpg';
import cursoprejuizos01 from './assets/Cursos/Prejuizos/cursoprejuizos01.jpg';
import cursoprejuizos02 from './assets/Cursos/Prejuizos/cursoprejuizos02.jpg';
import cursoprejuizos03 from './assets/Cursos/Prejuizos/cursoprejuizos03.jpg';
import cursoprejuizos04 from './assets/Cursos/Prejuizos/cursoprejuizos04.jpg';
import cursoprejuizos05 from './assets/Cursos/Prejuizos/cursoprejuizos05.jpg';
import cursoprejuizos05 from './assets/Cursos/Prejuizos/cursoprejuizos06.jpg';
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
            <h1 style={{ marginTop:'10px', marginBottom:'30px' }}>Olá! </h1>
            <p>Estamos muito felizes em tê-lo conosco neste curso dedicado ao processo de emissões de passagens da Azul. Aqui, você aprenderá a utilizar de forma eficiente as ferramentas e sistemas necessários para gerenciar todo o processo de emissão, garantindo que os clientes recebam suas passagens utilizando milhas de forma segura e ágil.</p>

            <p style={{ marginTop:'30px', marginBottom:'30px' }}>O programa de fidelidade da Azul é um dos mais dinâmicos do mercado, e durante este curso você adquirirá conhecimentos sobre como realizar emissões, gerenciar beneficiários, conferir milhas e solucionar eventuais problemas de emissão.</p>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>O que esperar do curso</h2>
            <p>Ao longo deste curso, exploraremos os seguintes tópicos:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Introdução ao programa de fidelidade da Azul:</strong> Entenda como funciona o sistema de milhas da Azul, desde a acumulação até a emissão de passagens para diferentes níveis de clientes (básico, topázio, safira e diamante).</li>
                <li><strong>Processo de emissão:</strong> Vamos te guiar no passo a passo para realizar emissões de passagens da Azul, desde a consulta de disponibilidade de voos até a finalização do e-ticket.</li>
                <li><strong>Gerenciamento de beneficiários:</strong> Você aprenderá como cadastrar e gerenciar os beneficiários do cliente no programa de fidelidade, levando em conta as recentes mudanças de limite e prazo de carência.</li>
                <li><strong>Cancelamento de e-tickets:</strong> Exploraremos as razões para o cancelamento de um e-ticket, como erros de emissão ou solicitações de clientes, e o processo para realizar o cancelamento diretamente no site da Azul.</li>
                <li><strong>Validade de milhas e extrato:</strong> Descubra como verificar a validade das milhas dos clientes e consultar o extrato de pontos no sistema da Azul para evitar problemas durante o processo de emissão.</li>
                <li><strong>Adição de bagagem:</strong> Aprenda como adicionar bagagens extras durante o processo de emissão e como garantir que o pagamento e os detalhes sejam devidamente registrados.</li>
            </ul>

            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src='./assets/Cursos/Cockpit/cursocockpit00.jpg' alt="Imagem do sistema Cockpit"></img>

            <p style={{ marginTop:'10px', marginBottom:'30px' }}>Este curso foi elaborado para ser prático, com exercícios reais que o ajudarão a consolidar seu aprendizado. Ao final, você estará preparado para lidar com todos os aspectos das emissões da Azul, oferecendo aos clientes um atendimento de excelência e garantindo que suas passagens sejam emitidas de maneira eficiente e sem complicações.</p>

            <p style={{ marginTop:'30px', marginBottom:'30px' }}>Estamos entusiasmados em começar essa jornada com você e esperamos que, ao final, você se torne um especialista em emissões no programa de fidelidade da Azul!</p>
        </div>
    )
},
'bem-vindo-curso-emissoes-gol': {
    title: 'Bem-vindo ao curso de emissões da GOL!',
    videoUrl: 'https://www.youtube.com/embed/5pvnt5PhiWs',
    description: (
        <div>
            <h1 style={{ marginTop:'10px', marginBottom:'30px' }}>Olá!</h1>
            <p>Estamos muito felizes em tê-lo conosco neste curso focado no processo de emissões de passagens da GOL. Ao longo deste treinamento, você aprenderá todas as etapas necessárias para emitir passagens aéreas utilizando milhas no programa de fidelidade Smiles, garantindo uma experiência eficiente e segura para os clientes.</p>

            <p style={{ marginTop:'30px', marginBottom:'30px' }}>O programa Smiles da GOL é amplamente utilizado, e entender como operar no sistema é fundamental para realizar emissões com sucesso. Durante o curso, abordaremos desde a consulta de voos e milhas até a solução de problemas e cancelamentos de passagens.</p>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>O que esperar do curso</h2>
            <p>Neste curso, exploraremos os seguintes tópicos:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Introdução ao programa Smiles:</strong> Compreenda como funciona o programa de fidelidade da GOL, os diferentes níveis de clientes (Smiles, prata, ouro e diamante), e como as milhas são acumuladas e utilizadas.</li>
                <li><strong>Processo de emissão de passagens:</strong> Você aprenderá o passo a passo para emitir passagens da GOL, desde a consulta de disponibilidade de voos até a confirmação e envio do e-ticket ao cliente.</li>
                <li><strong>Cancelamento de passagens:</strong> Serão explorados os motivos mais comuns para o cancelamento de e-tickets, como erros na emissão ou solicitações de clientes, e como realizar o processo diretamente no site da GOL.</li>
                <li><strong>Consulta de extrato e histórico de milhas:</strong> Aprenda a acessar o extrato de milhas do cliente e a verificar o histórico de transações, garantindo a precisão na emissão e nos cálculos.</li>
            </ul>

            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src='./assets/Cursos/Cockpit/cursocockpit00.jpg' alt="Imagem do sistema Cockpit"></img>

            <p style={{ marginTop:'10px', marginBottom:'30px' }}>Este curso foi desenvolvido para ser prático e dinâmico, com exemplos reais que reforçam o aprendizado de cada etapa. Ao concluir, você estará totalmente apto a realizar emissões de passagens da GOL utilizando o programa Smiles, oferecendo uma experiência impecável aos clientes.</p>

            <p style={{ marginTop:'30px', marginBottom:'30px' }}>Estamos entusiasmados por embarcar nesta jornada com você e temos certeza de que, ao final, você estará pronto para realizar emissões com confiança e eficiência no sistema da GOL.</p>
        </div>
    )
},
'bem-vindo-curso-emissoes-latam': {
    title: 'Bem-vindo ao curso de emissões da LATAM!',
    videoUrl: 'https://www.youtube.com/embed/5pvnt5PhiWs',
    description: (
        <div>
            <h1 style={{ marginTop:'10px', marginBottom:'30px' }}>Olá!</h1>
            <p>Estamos muito felizes em tê-lo conosco neste curso focado no processo de emissões de passagens da LATAM. Ao longo deste treinamento, você aprenderá todas as etapas necessárias para emitir passagens aéreas utilizando milhas no programa de fidelidade LATAM Pass, garantindo uma experiência eficiente e segura para os clientes.</p>

            <p style={{ marginTop:'30px', marginBottom:'30px' }}>O programa LATAM Pass é amplamente utilizado, e entender como operar no sistema é fundamental para realizar emissões com sucesso. Durante o curso, abordaremos desde a consulta de voos e milhas até a solução de problemas, incluindo erros de pagamento e busca de voo.</p>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>O que esperar do curso</h2>
            <p>Neste curso, exploraremos os seguintes tópicos:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Introdução ao programa LATAM Pass:</strong> Compreenda como funciona o programa de fidelidade da LATAM, os diferentes níveis de clientes e como as milhas são acumuladas e utilizadas.</li>
                <li><strong>Uso da VPN Bifrost:</strong> Aprenderemos a utilizar a VPN Bifrost para acessar a conta do ofertante, permitindo que você efetue logins com segurança e evite bloqueios durante o processo de emissão.</li>
                <li><strong>Processo de emissão de passagens:</strong> Você aprenderá o passo a passo para emitir passagens da LATAM, desde a consulta de disponibilidade de voos até a confirmação e envio do e-ticket ao cliente.</li>
                <li><strong>Adição de bagagem:</strong> Serão mostrados os procedimentos para adicionar bagagens extras durante a emissão da passagem e como registrar o valor pago de forma correta no sistema.</li>
                <li><strong>Solução de problemas:</strong> Vamos explorar as estratégias para solucionar erros comuns de pagamento e problemas na busca de voos, garantindo que você esteja preparado para lidar com qualquer situação que possa surgir.</li>
                <li><strong>Validade das milhas:</strong> Entenda como consultar e verificar a validade das milhas no programa LATAM Pass, além de como garantir que os clientes utilizem suas milhas dentro do prazo correto.</li>
                <li><strong>Consulta de extrato e histórico de milhas:</strong> Aprenda a acessar o extrato de milhas do cliente e a verificar o histórico de transações, garantindo a precisão na emissão e nos cálculos.</li>
            </ul>

            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src='./assets/Cursos/Cockpit/cursocockpit00.jpg' alt="Imagem do sistema Cockpit"></img>

            <p style={{ marginTop:'10px', marginBottom:'30px' }}>Este curso é projetado para ser interativo e prático, com exemplos reais e exercícios que ajudarão a solidificar seu aprendizado. Ao final do curso, você estará apto a utilizar o sistema Cockpit com confiança, otimizando suas operações e melhorando a experiência dos clientes da Maxmilhas.</p>

            <p style={{ marginTop:'30px', marginBottom:'30px' }}>Prepare-se para uma jornada de aprendizado repleta de insights e práticas valiosas. Estamos ansiosos para começar essa experiência com você e ajudá-lo a se tornar um expert no uso do Cockpit da Maxmilhas!</p>
        </div>
    )
},
'bem-vindo-curso-ferramentas-auxiliares': {
    title: 'Bem-vindo ao curso de ferramentas auxiliares!',
    videoUrl: 'https://www.youtube.com/embed/5pvnt5PhiWs',
    description: (
        <div>
            <h1 style={{ marginTop:'10px', marginBottom:'30px' }}>Olá!</h1>
            <p>Estamos muito felizes em tê-lo conosco neste curso dedicado ao uso de ferramentas auxiliares essenciais para otimizar seu trabalho na MaxMilhas. Ao longo deste treinamento, você aprenderá a utilizar plataformas como Slack, Metabase, Convenia, Qulture.rocks e Zendesk, fundamentais para melhorar a comunicação, a gestão de dados e a experiência do cliente.</p>

            <p style={{ marginTop:'30px', marginBottom:'30px' }}>Neste curso, você adquirirá habilidades práticas que facilitarão o seu dia a dia, ajudando a garantir uma operação mais eficiente e integrada.</p>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>O que esperar do curso</h2>
            <p>Neste curso, exploraremos os seguintes tópicos:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Introdução ao Slack:</strong> Aprenda como utilizar o Slack para comunicação interna, gerenciamento de projetos e colaboração em equipe. Abordaremos funcionalidades como canais, mensagens diretas e integração com outras ferramentas.</li>
                <li><strong>Explorando o Metabase:</strong> Descubra como utilizar o Metabase para consultar e analisar dados da MaxMilhas. Você aprenderá a criar relatórios, visualizar métricas e extrair informações valiosas para a tomada de decisões.</li>
                <li><strong>Uso do Convenia:</strong> Entenda como o Convenia pode facilitar a gestão de benefícios e a comunicação com os colaboradores. Veremos como utilizar a plataforma para gerenciar folhas de pagamento, férias e outros aspectos administrativos.</li>
                <li><strong>Qulture.rocks para gestão de desempenho:</strong> Aprenda a usar o Qulture.rocks para definir e acompanhar metas de desempenho, feedbacks e desenvolvimento de talentos na equipe. Focaremos em como essa ferramenta pode ajudar a criar uma cultura de alta performance.</li>
                <li><strong>Zendesk para atendimento ao cliente:</strong> Explore o Zendesk como uma solução de atendimento ao cliente. Você aprenderá a criar tickets, gerenciar solicitações e utilizar relatórios para melhorar a experiência do usuário.</li>
            </ul>

            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src='./assets/Cursos/Cockpit/cursocockpit00.jpg' alt="Imagem do sistema Cockpit"></img>

            <p style={{ marginTop:'10px', marginBottom:'30px' }}>Este curso foi desenvolvido para ser prático e interativo, com exemplos e exercícios que reforçam o aprendizado de cada ferramenta. Ao final, você estará totalmente apto a utilizar essas plataformas para melhorar sua eficiência e a qualidade do atendimento na MaxMilhas.</p>

            <p style={{ marginTop:'30px', marginBottom:'30px' }}>Estamos entusiasmados por embarcar nesta jornada com você e temos certeza de que, ao final, você estará preparado para utilizar essas ferramentas auxiliares com confiança e competência.</p>
        </div>
    )
},
'bem-vindo-curso-historia-empresa-cultura': {
    title: 'Bem-vindo ao curso de história da empresa e cultura!',
    videoUrl: 'https://www.youtube.com/embed/5pvnt5PhiWs',
    description: (
        <div>
            <h1 style={{ marginTop:'10px', marginBottom:'30px' }}>Olá!</h1>
            <p>Estamos muito felizes em tê-lo conosco neste curso dedicado à rica história da MaxMilhas. Ao longo deste treinamento, você terá a oportunidade de explorar a fundação da empresa, os principais marcos e conquistas, além de entender a cultura organizacional, os valores e a missão que nos guiam.</p>

            <p style={{ marginTop:'30px', marginBottom:'30px' }}>Compreender a trajetória da MaxMilhas é essencial para fortalecer seu conhecimento sobre a empresa e alinhá-lo com nossos princípios e objetivos. Neste curso, abordaremos a evolução da MaxMilhas ao longo dos anos e como a nossa cultura influencia o dia a dia de trabalho.</p>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>O que esperar do curso</h2>
            <p>Neste curso, exploraremos os seguintes tópicos:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>História da fundação:</strong> Conheça a história da fundação da MaxMilhas, desde a ideia inicial até a concretização do projeto. Vamos abordar os desafios enfrentados e as decisões que moldaram o início da nossa jornada.</li>
                <li><strong>Principais marcos e conquistas:</strong> Descubra os momentos mais significativos da nossa trajetória, incluindo lançamentos de produtos, expansão de serviços e reconhecimento no mercado. Vamos destacar os marcos que definiram a nossa história e contribuíram para o nosso crescimento.</li>
                <li><strong>Cultura organizacional:</strong> Entenda a cultura que permeia a MaxMilhas. Abordaremos os aspectos que tornam nosso ambiente de trabalho único, incluindo práticas de colaboração, inovação e inclusão que promovem um forte espírito de equipe.</li>
                <li><strong>Valores e missão:</strong> Conheça os valores que guiam nossas ações e decisões, além da missão que nos inspira a entregar sempre o melhor aos nossos clientes. Vamos discutir como esses princípios estão incorporados no nosso dia a dia.</li>
                <li><strong>Guia da marca:</strong> Aprenda sobre a identidade visual e a comunicação da marca MaxMilhas. Vamos explorar os elementos que constituem nossa imagem, como cores, tipografia e a linguagem utilizada para transmitir nossa mensagem ao mercado.</li>
            </ul>

            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src='./assets/Cursos/Cockpit/cursocockpit00.jpg' alt="Imagem do sistema Cockpit"></img>

            <p style={{ marginTop:'10px', marginBottom:'30px' }}>Este curso foi desenvolvido para ser informativo e envolvente, com conteúdos que vão enriquecer sua compreensão sobre a MaxMilhas. Ao final, você estará preparado para representar a empresa com orgulho e alinhamento aos nossos valores e missão.</p>

            <p style={{ marginTop:'30px', marginBottom:'30px' }}>Estamos entusiasmados por embarcar nesta jornada com você e temos certeza de que, ao final, você terá uma visão abrangente da história e da cultura da MaxMilhas.</p>
        </div>
    )
},
'bem-vindo-curso-milhas': {
    title: 'Bem-vindo ao curso de milhas!',
    videoUrl: 'https://www.youtube.com/embed/5pvnt5PhiWs',
    description: (
        <div>
            <h1 style={{ marginTop:'10px', marginBottom:'30px' }}>Olá!</h1>
            <p>Estamos muito felizes em tê-lo conosco neste curso dedicado ao fascinante universo das milhas e programas de fidelidade. Ao longo deste treinamento, você aprenderá tudo sobre a regulamentação das milhas, os diferentes programas disponíveis e como maximizar o uso das milhas para garantir benefícios e vantagens nas suas viagens.</p>

            <p style={{ marginTop:'30px', marginBottom:'30px' }}>Compreender as nuances do mundo das milhas é fundamental para proporcionar uma experiência enriquecedora aos nossos clientes e otimizar o uso de suas fidelidades. Neste curso, abordaremos as principais características e regras que envolvem o acúmulo e a utilização de milhas.</p>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>O que esperar do curso</h2>
            <p>Neste curso, exploraremos os seguintes tópicos:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>O que são milhas:</strong> Entenda o conceito de milhas e como elas funcionam dentro do contexto dos programas de fidelidade. Vamos discutir as diferentes formas de acumulação e a sua importância para os viajantes.</li>
                <li><strong>Regulamentação das milhas:</strong> Conheça as leis e normas que regem o uso das milhas no Brasil, garantindo que você compreenda os direitos e deveres dos consumidores e das companhias aéreas.</li>
                <li><strong>Programas de fidelidade:</strong> Explore os diversos programas de fidelidade disponíveis no mercado, suas características e como funcionam. Vamos abordar as vantagens e desvantagens de cada um, para que você possa orientar os clientes na escolha mais adequada.</li>
                <li><strong>Validade das milhas:</strong> Aprenda a consultar e verificar a validade das milhas acumuladas, incluindo os fatores que podem impactar a expiração das milhas e como garantir que os clientes utilizem suas milhas antes do vencimento.</li>
            </ul>

            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src='./assets/Cursos/Cockpit/cursocockpit00.jpg' alt="Imagem do sistema Cockpit"></img>

            <p style={{ marginTop:'10px', marginBottom:'30px' }}>Este curso é projetado para ser interativo e prático, com exemplos reais e exercícios que ajudarão a solidificar seu aprendizado. Ao final do curso, você estará apto a utilizar o sistema Cockpit com confiança, otimizando suas operações e melhorando a experiência dos clientes da Maxmilhas.</p>

            <p style={{ marginTop:'30px', marginBottom:'30px' }}>Prepare-se para uma jornada de aprendizado repleta de insights e práticas valiosas. Estamos ansiosos para começar essa experiência com você e ajudá-lo a se tornar um expert no uso do Cockpit da Maxmilhas!</p>
        </div>
    )
},

'bem-vindo-curso-noções-informática': {
    title: 'Bem-vindo ao curso de noções de informática!',
    videoUrl: 'https://www.youtube.com/embed/5pvnt5PhiWs',
    description: (
        <div>
            <h1 style={{ marginTop:'10px', marginBottom:'30px' }}>Olá!</h1>
            <p>Estamos muito felizes em tê-lo conosco neste curso dedicado às noções fundamentais de informática. Ao longo deste treinamento, você aprenderá sobre navegadores de internet, extensões, cookies, conectividade e redes, além de como utilizar VPNs e garantir a segurança da informação.</p>

            <p style={{ marginTop:'30px', marginBottom:'30px' }}>Dominar esses conceitos é essencial para navegar de forma segura e eficiente no mundo digital, seja para uso pessoal ou profissional. Neste curso, abordaremos cada um desses tópicos de forma prática e acessível, proporcionando uma base sólida para suas atividades diárias.</p>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>O que esperar do curso</h2>
            <p>Neste curso, exploraremos os seguintes tópicos:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Navegadores de internet:</strong> Compreenda como funcionam os principais navegadores de internet, suas características e como utilizá-los de maneira eficaz. Vamos discutir dicas e truques para melhorar sua experiência de navegação.</li>
                <li><strong>Extensões e plugins:</strong> Aprenda sobre as extensões e plugins disponíveis para navegadores, como instalá-los e utilizá-los para aumentar a funcionalidade e a produtividade durante a navegação.</li>
                <li><strong>Cookies:</strong> Entenda o que são cookies, como funcionam e quais implicações eles têm na sua privacidade e na experiência de navegação. Vamos discutir também como gerenciar as configurações de cookies nos navegadores.</li>
                <li><strong>Conectividade e redes:</strong> Explore os conceitos básicos de conectividade e redes, incluindo tipos de redes, como se conectar a elas e resolver problemas comuns de conectividade.</li>
                <li><strong>VPNs:</strong> Aprenda a utilizar VPNs (Redes Privadas Virtuais) para navegar de forma segura e proteger sua privacidade online. Vamos abordar a configuração e os benefícios de usar uma VPN.</li>
                <li><strong>Segurança da informação:</strong> Descubra as melhores práticas para garantir a segurança da informação, incluindo como proteger seus dados pessoais, reconhecer fraudes online e utilizar ferramentas de segurança.</li>
            </ul>

            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src='./assets/Cursos/Cockpit/cursocockpit00.jpg' alt="Imagem do sistema Cockpit"></img>

            <p style={{ marginTop:'10px', marginBottom:'30px' }}>Este curso foi desenvolvido para ser prático e interativo, com exemplos que facilitarão a compreensão de cada tema abordado. Ao final, você estará totalmente apto a utilizar a informática de maneira segura e eficiente no seu dia a dia.</p>

            <p style={{ marginTop:'30px', marginBottom:'30px' }}>Estamos entusiasmados por embarcar nesta jornada com você e temos certeza de que, ao final, você terá uma visão abrangente sobre noções de informática e como aplicá-las de forma eficaz.</p>
        </div>
    )
},

'bem-vindo-curso-ofertantes': {
    title: 'Bem-vindo ao curso de ofertantes!',
    videoUrl: 'https://www.youtube.com/embed/5pvnt5PhiWs',
    description: (
        <div>
            <h1 style={{ marginTop:'10px', marginBottom:'30px' }}>Olá!</h1>
            <p>Estamos muito felizes em tê-lo conosco neste curso dedicado à compreensão e à gestão de ofertantes no mercado de milhas. Ao longo deste treinamento, você aprenderá sobre os diferentes tipos de ofertantes, como interagir com eles de forma eficaz e otimizar a utilização das milhas disponíveis.</p>

            <p style={{ marginTop:'30px', marginBottom:'30px' }}>Compreender os ofertantes e seus processos é essencial para maximizar os benefícios dos programas de fidelidade e para garantir uma operação eficiente. Neste curso, abordaremos os principais aspectos que envolvem a atuação dos ofertantes e como gerenciar suas interações.</p>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>O que esperar do curso</h2>
            <p>Neste curso, exploraremos os seguintes tópicos:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Tipos de ofertantes:</strong> Conheça os diferentes tipos de ofertantes de milhas, como companhias aéreas, plataformas de troca e revendedores, e entenda suas características e funções no mercado.</li>
                <li><strong>Saldo e razão:</strong> Aprenda a analisar o saldo de milhas dos ofertantes e a razão pela qual algumas ofertas são mais vantajosas do que outras, permitindo uma escolha mais informada.</li>
                <li><strong>Média e quantidade de CPFs:</strong> Compreenda como a média de milhas oferecidas e a quantidade de CPFs registrados impactam as oportunidades de troca e como isso pode ser utilizado a seu favor.</li>
                <li><strong>Programas de fidelidade:</strong> Explore os principais programas de fidelidade disponíveis, suas regras, benefícios e como interagir de maneira eficaz com os ofertantes para maximizar suas vantagens.</li>
            </ul>

            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src='./assets/Cursos/Cockpit/cursocockpit00.jpg' alt="Imagem do sistema Cockpit"></img>

            <p style={{ marginTop:'10px', marginBottom:'30px' }}>Este curso foi desenvolvido para ser prático e informativo, com exemplos do mundo real que ajudarão a reforçar o aprendizado de cada tópico. Ao final, você estará preparado para identificar, gerenciar e otimizar suas interações com os ofertantes, contribuindo para uma experiência excepcional na utilização de milhas.</p>

            <p style={{ marginTop:'30px', marginBottom:'30px' }}>Estamos entusiasmados por embarcar nesta jornada com você e temos certeza de que, ao final, você terá as ferramentas necessárias para lidar com ofertantes e melhorar a qualidade das operações da MaxMilhas.</p>
        </div>
    )
},
'bem-vindo-curso-prejuizos': {
    title: 'Bem-vindo ao curso de prejuízos!',
    videoUrl: 'https://www.youtube.com/embed/5pvnt5PhiWs',
    description: (
        <div>
            <h1 style={{ marginTop:'10px', marginBottom:'30px' }}>Olá!</h1>
            <p>Estamos muito felizes em tê-lo conosco neste curso dedicado à identificação e à gestão de prejuízos na emissão de passagens. Ao longo deste treinamento, você aprenderá sobre os tipos mais comuns de prejuízos que podem ocorrer, como emitir passagens corretamente e minimizar riscos para a empresa.</p>

            <p style={{ marginTop:'30px', marginBottom:'30px' }}>Compreender os fatores que levam a prejuízos é essencial para garantir uma operação eficiente e para oferecer um atendimento de qualidade aos nossos clientes. Neste curso, abordaremos os principais problemas que podem surgir durante o processo de emissão e como solucioná-los.</p>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>O que esperar do curso</h2>
            <p>Neste curso, exploraremos os seguintes tópicos:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Tipos mais comuns de prejuízos:</strong> Conheça os principais tipos de prejuízos que podem ocorrer na emissão de passagens, incluindo as causas e consequências associadas a cada um deles.</li>
                <li><strong>Emissões duplicadas:</strong> Aprenda a identificar e evitar emissões duplicadas, compreendendo os processos e ferramentas disponíveis para minimizar esse risco.</li>
                <li><strong>Emissões na conta errada:</strong> Entenda como as emissões podem ser direcionadas para contas incorretas e quais medidas podem ser tomadas para corrigir esses erros.</li>
                <li><strong>Aumento sem tratativa:</strong> Discuta a questão dos aumentos inesperados e como gerenciar essas situações, incluindo a importância da comunicação com os clientes e a documentação adequada.</li>
            </ul>

            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src='./assets/Cursos/Cockpit/cursocockpit00.jpg' alt="Imagem do sistema Cockpit"></img>

            <p style={{ marginTop:'10px', marginBottom:'30px' }}>Este curso foi desenvolvido para ser prático e informativo, com exemplos do mundo real que ajudarão a reforçar o aprendizado de cada tópico. Ao final, você estará preparado para identificar e gerenciar prejuízos na emissão de passagens de forma eficaz, contribuindo para a eficiência operacional da MaxMilhas.</p>

            <p style={{ marginTop:'30px', marginBottom:'30px' }}>Estamos entusiasmados por embarcar nesta jornada com você e temos certeza de que, ao final, você terá as ferramentas necessárias para lidar com prejuízos e melhorar a qualidade do serviço prestado.</p>
        </div>
    )
},
'bem-vindo-curso-tour-virtual': {
    title: 'Bem-vindo ao curso de tour virtual!',
    videoUrl: 'https://www.youtube.com/embed/5pvnt5PhiWs',
    description: (
        <div>
            <h1 style={{ marginTop:'10px', marginBottom:'30px' }}>Olá!</h1>
            <p>Estamos muito felizes em tê-lo conosco neste curso dedicado a apresentar as instalações da MaxMilhas através de um tour virtual. Ao longo deste treinamento, você terá a oportunidade de conhecer nossa sede, localizada em Belo Horizonte, e explorar as diversas áreas que compõem nosso ambiente de trabalho.</p>

            <p style={{ marginTop:'30px', marginBottom:'30px' }}>O tour virtual é uma ferramenta essencial para que você se familiarize com o espaço, a cultura e as práticas que tornam a MaxMilhas um lugar especial para se trabalhar. Este curso foi projetado para fornecer uma visão abrangente das nossas instalações e como elas contribuem para a nossa missão e valores.</p>

            <h2 style={{ marginTop:'30px', marginBottom:'30px' }}>O que esperar do curso</h2>
            <p>Neste curso, exploraremos os seguintes tópicos:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px' }}>
                <li><strong>Localização da sede da MaxMilhas:</strong> Conheça a localização da nossa sede na Rua Matias Cardoso, 169 - Santo Agostinho, Belo Horizonte - MG. Vamos falar sobre a importância da localização e como ela facilita o acesso de colaboradores e clientes.</li>
                <li><strong>Área de recepção e atendimento - 11º Andar:</strong> Explore a área de recepção e atendimento, onde garantimos uma recepção calorosa aos nossos visitantes e clientes. Vamos destacar a importância desse espaço para a experiência do usuário.</li>
                <li><strong>Área de refeição e descanso - 11º Andar:</strong> Descubra nossa área de refeição e descanso, um espaço dedicado ao bem-estar e à alimentação dos colaboradores, promovendo um ambiente saudável e produtivo.</li>
                <li><strong>Cozinha - 11º Andar:</strong> Conheça nossa cozinha, onde são preparadas as refeições para a equipe. Vamos discutir como a alimentação saudável é parte da cultura da MaxMilhas.</li>
                <li><strong>Deck - 11º Andar:</strong> Explore o deck, um espaço ao ar livre que proporciona um ambiente agradável para relaxamento e interação entre os colaboradores.</li>
            </ul>
            <img style={{ marginTop:'10px', marginBottom:'30px' }} className={styles.image} src='./assets/Cursos/Cockpit/cursocockpit00.jpg' alt="Imagem do sistema Cockpit"></img>

            <p style={{ marginTop:'10px', marginBottom:'30px' }}>Este curso foi desenvolvido para ser interativo e envolvente, utilizando recursos visuais que facilitarão a sua imersão no ambiente da MaxMilhas. Ao final, você terá uma visão completa das nossas instalações e como elas refletem a cultura e os valores da empresa.</p>

            <p style={{ marginTop:'30px', marginBottom:'30px' }}>Estamos entusiasmados por embarcar nesta jornada com você e temos certeza de que, ao final, você se sentirá mais conectado com o ambiente de trabalho da MaxMilhas.</p>
        </div>
    )
},




    'Cockpit': {
        title: 'Cockpit',
        videoUrl: 'https://www.youtube.com/embed/5pvnt5PhiWs',
        description: (
                        <div>
                            <h1 style={{ marginTop:'10px', marginBottom:'30px' }}>O que é o Cockpit? </h1>
                            <p>O Cockpit é um sistema administrativo utilizado pela Maxmilhas para realizar a emissão de bilhetes aéreos utilizando milhas vendidas pelos ofertantes para compradores e clientes da Maxmilhas. Neste sistema, é possível:
                            </p>
                            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'40px', marginBottom:'30px' }}>
                                <li><strong>Emitir Bilhetes Aéreos:</strong> Gerar passagens aéreas com base nas milhas disponibilizadas pelos ofertantes, facilitando o processo de compra para os clientes.</li>
                                <li><strong>Gerenciar Transações:</strong> Acompanhar e gerenciar todas as transações de emissão, desde a compra até a entrega do e-ticket ao cliente.
                                </li>
                                <li><strong>Selecionar Ofertantes:</strong> Escolher entre diferentes vendedores de milhas, analisando a viabilidade e o lucro de cada transação para otimizar as ofertas.</li>
                                <li><strong>Realizar Cancelamentos:</strong> Efetuar o cancelamento de passagens já emitidas, caso necessário.</li>
                                <li><strong>Buscar Ofertantes Disponíveis:</strong> Encontrar ofertantes com milhas disponíveis para as emissões, permitindo uma operação mais ágil.
                                </li>
                                <li><strong>Verificar Passagens Emitidas:</strong> Checar o status e os detalhes das passagens já emitidas pelo sistema, garantindo um controle eficaz.
                                </li>
                                <li><strong>Acessar Múltiplas Companhias Aéreas:</strong> Emitir passagens para diversas companhias aéreas, incluindo Latam, Gol, Azul, TAP, OTA e outras, ampliando as opções para os clientes.
                                </li>
                                <li><strong>Login Seguro:</strong> Acessar o sistema de forma segura utilizando e-mail corporativo, garantindo que apenas colaboradores autorizados possam gerenciar as operações.
                                </li>
                            </ul>

                            <h2>Tela de Login:</h2>
                            <p style={{ marginTop:'10px', marginBottom:'30px' }}>Na tela de login é necessário utilizar e-mail corporativo das maxmilhas para acessar o sistema, garantindo que apenas colaboradores autorizados possam gerenciar as transações e processos de emissão de passagens.
                            </p>
                
                            <h2>Tela inicial:</h2>
                            <p style={{ marginTop:'10px', marginBottom:'30px' }}>Na tela inicial do sistema Cockpit, o colaborador tem acesso a um menu lateral com diversas opções, como Cockpit, Inserção de crédito, Cadastros, Clientes, Milhas, entre outras. Esse menu permite a navegação entre as principais funcionalidades do sistema. As informações e funcionalidades correspondentes a cada item selecionado no menu são exibidas no painel à direita.
                            </p>
                 
                     
                        </div>
                     )
                },
    'Menu lateral': {
        title: 'Menu lateral',
        videoUrl: 'https://www.youtube.com/embed/5pvnt5PhiWs',
        description: (
                        <div>
                            <h1 style={{ marginTop:'10px', marginBottom:'30px' }}>Menu lateral</h1>
                                <p>No painel esquerdo do Cockpit, é possível encontrar o menu lateral que apresenta diversas opções, facilitando a navegação pelo sistema.
                            </p>

                            <p style={{ marginTop:'10px', marginBottom:'30px' }}>As opções disponíveis incluem:</p>
                            <ul style={{ listStyleType: 'disc', marginLeft: '30px', marginTop:'30px', marginBottom:'30px', }}>
                             
                                <li><strong>Cockpit:</strong> Acesso à tela principal do sistema, onde são gerenciadas as atividades.</li>
                                <li><strong>Inserção de Crédito:</strong> Função para adicionar créditos ao sistema, possibilitando a realização de transações.</li>
                                <li><strong>Cadastros:</strong> Área para gerenciar cadastros de clientes, ofertantes e outros dados relevantes.</li>
                                <li><strong>Clientes:</strong> Visualização e gerenciamento das informações dos clientes da Maxmilhas.</li>
                                <li><strong>Milhas:</strong> Consulta e gestão das milhas disponíveis e suas respectivas transações.</li>
                                <li><strong>Criar Transação:</strong> Iniciar o processo de emissão de passagens aéreas.</li>
                                <li><strong>E-mail Marketing:</strong> Gerenciar campanhas de e-mail marketing direcionadas aos clientes.</li>
                                <li><strong>Cupom:</strong> Gerenciar cupons de desconto e promoções disponíveis.</li>
                                <li><strong>Status dos Voos:</strong> Acompanhar o status atual dos voos das companhias aéreas.</li>
                                <li><strong>Relatórios:</strong> Acesso a relatórios detalhados sobre transações e atividades do sistema.</li>
                                <li><strong>Indicadores:</strong> Visualização de indicadores de desempenho e métricas relevantes.</li>
                                <li><strong>Cartões de Crédito:</strong> Gerenciar os cartões de crédito utilizados para as transações.</li>
                                <li><strong>Ofertantes:</strong> Consultar e gerenciar os ofertantes disponíveis para as transações.</li>
                                <li><strong>Cancelamentos:</strong> Efetuar cancelamentos de passagens emitidas quando necessário.</li>
                            </ul>
                            <p style={{ marginTop:'10px', marginBottom:'20px' }}>Para realizar emissões no sistema Cockpit, as opções utilizadas serão apenas Cockpit e Milhas. As demais são utilizadas em outros setores ou para controle interno.
                            </p>
                            
                            <h2>Icones</h2>
                            <p style={{ marginTop:'10px', marginBottom:'30px' }}>Acima do menu lateral existem 4 icones que são referentes à pagina inicial do cockpit, clientes, milhas e busca de transações por código.
                            </p>
               
                     
                        </div>
                     )
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