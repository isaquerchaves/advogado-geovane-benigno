import './App.css'
import Button from './components/button/button'

function App() {

  return (
    <>
      <section className='container-principal'>
        <div className='intro'>
          <h1 className='intro-title'>Advocacia Especializada em Golpe do Pix</h1>
          <p className='intro-subtitle'>Toque no botão abaixo para falar com um advogado especialista no seu WhatsApp.</p>
          <p className='intro-subtitle'>Você será recebido e atendido por um profissional capaz de lhe aconselhar desde o início.</p>
          <Button title='QUERO ENTRAR EM CONTATO' />
        </div>
        <img src='/geovane-logo-branco.png' className='logo' />
      </section >
      <div>sessão de imgs</div>
      <div>outra mensagem</div>
      <div>entenda</div>
      <div>Pelo que vamos lutar por você</div>
      <div>botao quero falar</div>
    </>
  )
}

export default App
