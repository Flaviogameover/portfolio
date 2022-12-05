import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { BsGithub, BsWhatsapp } from 'react-icons/bs';

const Display: () => JSX.Element = () => (
    <section id="display" className="display">
        <div className="cover-main">
            <div className="cover-profile">
                <img src="https://avatars.githubusercontent.com/u/37197151" alt="Meu perfil" />
                <div className="profile-overlay" />
            </div>
            <div className="cover-about">
                <h3>Desenvolvedor FullStack</h3>
                <h2>Flávio Lima</h2>
                <p>
                    Desenvolvedor FullStack, apaixonado por tecnologia e programação.
                    Trabalho com desenvolvimento de aplicações web e mobile, utilizando
                    diversas das atuais tecnologias com foco em qualidade e performance.
                    Sou um desenvolvedor que gosta de resolver problemas e aprender novas
                    tecnologias, além de estar sempre em busca de novas oportunidades de
                    crescimento.
                </p>
            </div>
        </div>
        <div className="cover-social">
            <a aria-label="Perfil Instagram" href="https://www.instagram.com/flavio.gameover/" target="_blank" rel="noreferrer">
                <AiFillInstagram />
            </a>
            <a aria-label="Perfil Github" href="https://www.github.com/flaviogameover" target="_blank" rel="noreferrer">
                <BsGithub />
            </a>
            <a aria-label="Contato Whatsapp" href="https://wa.me/5511958264447" target="_blank" rel="noreferrer">
                <BsWhatsapp />
            </a>
        </div>
    </section>
);

export default Display;
