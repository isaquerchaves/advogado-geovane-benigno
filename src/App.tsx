import { ChevronsDown, CopyX, DollarSign, Landmark, MapPinned, MessageCircleX, Minus, QrCode, ScreenShare, ShieldCheck, Star, UserX, XOctagon } from 'lucide-react'
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
        <div className='card-section-2'>
          <div className='card-section-2-content'>
            <div className='entenda'>
              <Minus />
              <p>ENTENDA</p>
            </div>
            <h1 className='card-section-2-title'>Escritório de Advocacia Especializado em Golpe do Pix</h1>
            <div>
              <p className='card-section-2-text'>Há duas coisas que você deve fazer imediatamente ao sofrer um golpe do Pix. Em primeiro lugar, ligue para seu banco e informe o quanto antes. Existem mecanismos bancários que podem bloquear o valor, dependendo da situação. Nestes casos, você ganha tempo para realizar as averiguações necessárias.</p>
              <p className='card-section-2-text'>Além disso, é claro, você deve entrar em contato com um escritório de advocacia especialista. Desta forma, você já inicia os procedimentos de Boletim de Ocorrência e dá início às ações necessárias para recuperar o dinheiro e processar o estelionatário pelos crimes cometidos. Neste tipo de situação, a agilidade é fundamental.</p>
            </div>
          </div>
          <img src="golpe-do-pix.jpg" alt="Golpe do Pix" className='card-section-2-img' />
        </div>
        <div style={{ paddingBottom: '1rem' }}><Button title='QUERO RECUPERAR MEU DINHEIRO' /></div>
      </section>
      <section className='section-3'>
        <div>
          <div className='entenda'>
            <Minus />
            <p>EXEMPLOS</p>
          </div>
          <h1 className='card-section-2-title'>São problemas comuns no Golpe do Pix</h1>
        </div>
        <div className='problemas-comuns'>
          <div className='problemas-comuns-card'>
            <CopyX size={64} />
            <p className='problemas-comuns-texto'>Clonagem do WhatsApp</p>
          </div>
          <div className='problemas-comuns-card'>
            <MessageCircleX size={64} />
            <p className='problemas-comuns-texto'>Perfil falso no WhatsApp</p>
          </div>
          <div className='problemas-comuns-card'>
            <Landmark size={64} />
            <p className='problemas-comuns-texto'>Atendimento falso do banco</p>
          </div>
          <div className='problemas-comuns-card'>
            <XOctagon size={64} />
            <p className='problemas-comuns-texto'>“Falha” do Pix que dá dinheiro a quem transferir</p>
          </div>
          <div className='problemas-comuns-card'>
            <QrCode size={64} />
            <p className='problemas-comuns-texto'>Golpe do QR Code Falso</p>
          </div>
          <div className='problemas-comuns-card'>
            <DollarSign size={64} />
            <p className='problemas-comuns-texto'>Valor falso do Pix na máquina de cartão</p>
          </div>
        </div>
      </section>
      <section className='section-4'>
        <div className='recupere'>
          <p className='entenda'>É POSSÍVEL RECUPERAR SEU DINHEIRO!</p>
          <p className='recupere-texto'>Precisa de esclarecimentos sobre golpe do pix ou deseja entrar com um processo? Não espere mais! Entre em contato com nossa equipe e garanta a assessoria de um advogado competente nestes casos.</p>
          <Button title='QUERO ENTRAR EM CONTATO' />
        </div>
      </section>
    </>
  )
}

export default App
