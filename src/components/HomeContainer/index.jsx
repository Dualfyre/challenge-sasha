import { cacaoImg, pannaLogoL, icecreamImg} from '../../images'
import './styles.css'

const HomeContainer = () => {
  return (
    <div className='home-container'>
      <img className='cacao-img' src={cacaoImg} alt='cacao'/>
      <span className='left-border'/>
      <p className='left-border-txt' >HELADOS Y CAFE </p>
      <div className='order-container'>
        <img className='panna-logo-l' src={pannaLogoL} alt='panna logo large'/>
        <h2 className='order-title'>PEDÍ ONLINE!</h2>
        <p className='order-description'>Armá tu pedido desde nuestra página, envialo por Whatsapp en un click y nosotros te lo mandamos</p>
        <button className='order-btn'>INICIAR PEDIDO</button>
      </div>
      <img className='ice-cream-img' src={icecreamImg} alt='ice cream'/> 
    </div>
  )
}

export default HomeContainer
