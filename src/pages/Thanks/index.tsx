import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './index.css';

const Thanks: React.FC = () => (
    <>
        <header id="header">
            <Link to="/" className="logo">
                <h1>{'<Portfólio>'}</h1>
            </Link>

        </header>
        <section id="thanks" className="thanks">
            <h2>Obrigado!</h2>
            <p>
                Obrigado por entrar em contato! Em breve irei responder sua mensagem.
            </p>
            <Link to="/">
                <AiOutlineArrowLeft />
                {' '}
                Voltar
            </Link>
        </section>
    </>

);

export default Thanks;
