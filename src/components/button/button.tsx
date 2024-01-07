import './button.css'

const Button = () => {
    return (
        <button className='button'>
            <div className='button-content'>
                <img src='/whatsapp.png' className='whatsapp' />
                <p>QUERO ENTRAR EM CONTATO</p>
            </div>
        </button>
    );
}

export default Button;