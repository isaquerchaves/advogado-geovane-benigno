import React from 'react';
import './button.css'

const Button = () => {
    const handleClick = () => {
        const whatsappLink = "https://api.whatsapp.com/send?phone=559992285423&text=busco orientação profissional"
        window.location.href = whatsappLink;
    }

    return (
        <button className='button' onClick={handleClick}>
            <div className='button-content'>
                <img src='/whatsapp.png' className='whatsapp' />
                <p>QUERO ENTRAR EM CONTATO</p>
            </div>
        </button>
    );
}

export default Button;