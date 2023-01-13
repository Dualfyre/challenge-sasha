import React, {useEffect, useState} from 'react'
import './styles.css'
import {pannaLogoM, pedidosyaLogoS, rappiLogoS} from '../../images'

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false)
  const handleScroll = (e) => {
    setIsScrolling(e.target.scrollTop !== 0)
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    // remember to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, []);

  return (
    <div className= 'navbar-container' style={{backgroundColor: isScrolling ? '#f8f6f4' : '#f1eae500'}}> 
      <ul className='navbar-header'>
        <li className='navbar-item'>
          <a href='#'>
            INICIO
          </a>
        </li>
        <li className='navbar-item'>
          <a href='#'>
            NOSOTROS
          </a>
        </li>
        <li className='navbar-item'>
          <a href='#'>
            PRODUCTOS
          </a>
        </li>
        <li className='navbar-logo'>
          <a href='#'>
            <img src={pannaLogoM} alt='navbar logo'/>
          </a>
        </li>
        <li className='navbar-item'>
          <a href='#'>
            LOCAL
          </a>  
        </li>
         <li className='navbar-item'>
          <a href='#'>
            CONTACTO
          </a>
        </li>
        <li className='navbar-item'>
          <div className='navbar-icons'>
            <a className='app-logo' href='#'>
              <img src={rappiLogoS} alt='rappi logo'/>
            </a>
            <a className='app-logo' href='#'>
             <img src={pedidosyaLogoS} alt='pedidos ya logo'/>
            </a>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
