import './button.css'

const Button = (props: any) => {
    const handleClick = () => {
        const whatsappLink = "https://api.whatsapp.com/send?phone=559991749423&text=Busco orientação profissional"
        window.location.href = whatsappLink;
    }

    return (
        <button className='button' onClick={handleClick}>
            <div className='button-content'>
                <img src='/whatsapp.png' className='whatsapp' />
                <p>{props.title}</p>
            </div>
        </button>
    );
}

export default Button;