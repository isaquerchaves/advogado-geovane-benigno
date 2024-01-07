import { ChevronsDown, MapPinned, ScreenShare, ShieldCheck, Star } from 'lucide-react'
import './App.css'
import Button from './components/button/button'

function App() {

  return (
    <>
      <section className='section-1'>
        <div className='container-principal'>
          <div className='intro'>
            <h1 className='intro-title'>Advocacia Especializada em Golpe do Pix</h1>
            <p className='intro-subtitle'>Toque no botão abaixo para falar com um advogado especialista no seu WhatsApp.</p>
            <p className='intro-subtitle'>Você será recebido e atendido por um profissional capaz de lhe aconselhar desde o início.</p>
            <Button title='QUERO ENTRAR EM CONTATO' />
          </div>
          <img src='/geovane-logo-branco.png' className='logo' />
        </div>
      </section >
      <section className='section-2'>
        <div className='elementos-intro'>
          <div className='elementos-intro-conteudo'>
            <ScreenShare size={38} color='black' />
            <p className=''>ATENDIMENTO 100% ONLINE</p>
          </div>
          <div className='elementos-intro-conteudo'>
            <ShieldCheck size={38} color='black' />
            <p className=''>especialista em golpe do pix</p>
          </div>
          <div className='elementos-intro-conteudo'>
            <MapPinned size={38} color='black' />
            <p className=''>REFERÊNCIA NO Maranhão</p>
          </div>
          <div className='elementos-intro-conteudo'>
            <Star size={38} color='black' />
            <p className=''>10 ANOS DE EXPERIÊNCIA</p>
          </div>
        </div>
        <div className='mensagem'>
          <ChevronsDown size={42} />
          <p style={{ borderLeft: '2px solid black', width: '100%', padding: '10px' }}>Se você foi vítima de um <span style={{ fontWeight: 'bold' }}>golpe do Pix</span> ou conhece alguém próximo que sofreu com este crime, não exite em contactar. Sou especialista em fraudes bancárias e estou sempre disposto a ajudar.</p>
        </div>
      </section>
      <section className='section-2'>

      </section>
    </>
  )
}

export default App
