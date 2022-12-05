import React, {
    useEffect,
    useState,
} from 'react';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineArrowUp, AiOutlineLink } from 'react-icons/ai';
import {
    FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaPython, FaReact,
} from 'react-icons/fa';
import { SiMysql, SiTypescript } from 'react-icons/si';
import { DiMongodb } from 'react-icons/di';
import { scrollTo, showArrow } from './components/utils/functions';
import Header from './components/Header';
import Display from './components/Display';
import './App.css';
import Projects from './components/Projects';
import { ISkill, IProject } from './components/interface';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App:React.FC = () => {
    const [skills] = useState<ISkill[]>([
        { id: 1, name: 'HTML', icon: <FaHtml5 /> },
        { id: 2, name: 'CSS', icon: <FaCss3Alt /> },
        { id: 3, name: 'JavaScript', icon: <FaJs /> },
        { id: 4, name: 'React', icon: <FaReact /> },
        { id: 5, name: 'Typescript', icon: <SiTypescript /> },
        { id: 6, name: 'NodeJS', icon: <FaNodeJs /> },
        { id: 7, name: 'Python', icon: <FaPython /> },
        { id: 8, name: 'MongoDB', icon: <DiMongodb /> },
        { id: 9, name: 'MySQL', icon: <SiMysql /> },
    ]);

    const [projects] = useState<IProject[]>([
        {
            id: 3,
            title: 'Phasmo Guide',
            tech: 'JS, API, Expo, React Native, CSS',
            description: 'App criado com React Native servindo de guia para o fantástico jogo Phasmophobia!',
            image: 'https://raw.githubusercontent.com/Flaviogameover/phasmo_guide/master/ghosts_1.png',
            links: [
                {
                    id: 1,
                    url: 'https://github.com/Flaviogameover/phasmo_guide',
                    icon: <BsGithub />,
                },
            ],
        },
        {
            id: 4,
            title: 'Coffejs',
            tech: 'HTML, CSS, JS, ReactJS, Youtube API, NodeJS',
            description: 'Um app simples utilizando a api do youtube com reactjs e nodejs.',
            image: 'https://raw.githubusercontent.com/Flaviogameover/coffeeJS/master/coffeeJS-v2.png',
            links: [
                {
                    id: 1,
                    url: 'https://github.com/Flaviogameover/coffeeJS',
                    icon: <BsGithub />,
                },
            ],
        },
        {
            id: 6,
            title: 'SudoEasy',
            tech: 'HTML, CSS, JS, Rapid API, NodeJS',
            description: 'Joguinho simples de sudoku utilizando a api "Solve Sudoku" do rapidapi para resolver o puzzle.',
            image: 'https://raw.githubusercontent.com/Flaviogameover/sudoku-solver/master/sudoEasy.png',
            links: [
                {
                    id: 1,
                    url: 'https://github.com/Flaviogameover/sudoku-solver',
                    icon: <BsGithub />,
                },
            ],
        },
        {
            id: 1,
            title: 'Codewell Portfólio',
            tech: 'HTML, CSS, JS, ReactJS',
            description: 'Desenvolvi esse portfólio para mostrar meus projetos e habilidades utilizando como base o template do Codewell.',
            image: 'https://raw.githubusercontent.com/Flaviogameover/codewell_portfolio/master/foto_1.png',
            links: [
                {
                    id: 1,
                    url: 'https://flaviogameover-codewell-portfolio.netlify.app/',
                    icon: <AiOutlineLink />,
                },
                {
                    id: 2,
                    url: 'https://github.com/Flaviogameover/codewell_portfolio',
                    icon: <BsGithub />,
                },
            ],
        },
        {
            id: 2,
            title: 'Room Homepage',
            tech: 'HTML, CSS, JS, ReactJS',
            description: 'Uma landing page com um design simples, responsivo e clean.',
            image: 'https://raw.githubusercontent.com/Flaviogameover/room_homepage/master/screen_1.png',
            links: [
                {
                    id: 1,
                    url: 'https://flaviogameover-room-homepage.netlify.app/',
                    icon: <AiOutlineLink />,
                },
                {
                    id: 2,
                    url: 'https://github.com/Flaviogameover/room_homepage',
                    icon: <BsGithub />,
                },
            ],
        },
        {
            id: 7,
            title: 'Countries API',
            tech: 'HTML, CSS, JS, ReactJS, API',
            description: 'Veja informações detalhadas sobre os países do mundo inteiro.',
            image: 'https://raw.githubusercontent.com/Flaviogameover/countries_api/master/screen_2.png',
            links: [
                {
                    id: 1,
                    url: 'https://flaviogameover-countries-api.netlify.app/',
                    icon: <AiOutlineLink />,
                },
                {
                    id: 2,
                    url: 'https://github.com/Flaviogameover/countries_api',
                    icon: <BsGithub />,
                },
            ],
        },
        {
            id: 9,
            title: 'Enquetes',
            tech: 'HTML, CSS, Typescript, ReactJS, NodeJS, MySQL',
            description: 'Projeto onde você pode criar e votar em enquetes, além de poder ver as estatísticas delas.',
            image: 'https://raw.githubusercontent.com/Flaviogameover/enquetes/main/enquetes2.png',
            links: [
                {
                    id: 1,
                    url: 'https://github.com/Flaviogameover/enquetes',
                    icon: <BsGithub />,
                },
            ],
        },
        {
            id: 8,
            title: 'Clone Netflix',
            tech: 'HTML, CSS, JS, ReactJS, NodeJS, API',
            description: 'Um clone da interface da Netflix utilizando a api do themoviedb.',
            image: 'https://raw.githubusercontent.com/Flaviogameover/netflix_clone/build/screen_2.png',
            links: [
                {
                    id: 1,
                    url: 'https://github.com/Flaviogameover/netflix_clone',
                    icon: <BsGithub />,
                },
            ],
        },
        {
            id: 5,
            title: 'Movie DB',
            tech: 'HTML, CSS, Typescript, API, NodeJS, MongoDB',
            description: 'Veja informações detalhadas sobre os filmes e séries além de poder criar sua própria lista de favoritos.',
            image: 'https://i.imgur.com/3uX2NDP.png',
            links: [],
        },
    ]);

    useEffect(() => {
        window.addEventListener('scroll', showArrow);
        return () => {
            window.removeEventListener('scroll', showArrow);
        };
    }, []);

    return (

        <main>
            <button className="arrow" type="button" id="arrow" onClick={() => scrollTo('')}>
                <AiOutlineArrowUp />
            </button>
            <Header />
            <Display />
            <Projects projects={projects} />
            <Skills skills={skills} />
            <Contact />
            <Footer />
        </main>
    );
};
export default App;
