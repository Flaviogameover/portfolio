import React from 'react';

const Contact: ()=> JSX.Element = () => (
    <section id="contact" className="contact">
        <h2>Contato</h2>
        <form action="https://formsubmit.co/c4777d5a5477c8eba22c0f8405a62591" method="POST">
            <label htmlFor="name">
                Nome
                <input name="name" type="text" placeholder="Seu nome..." />
            </label>
            <input type="hidden" name="_subject" value="Contato Portfólio" />
            <label htmlFor="email">
                E-mail
                <input name="email" type="email" placeholder="Seu E-mail..." required />
            </label>
            <label htmlFor="message">
                Mensagem
                <textarea name="message" placeholder="Digite sua mensagem..." />
            </label>
            <button type="submit">Enviar</button>
        </form>
    </section>
);

export default Contact;
