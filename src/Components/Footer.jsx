import React from 'react'
import { ContextGlobal } from './utils/global.context'
import { useContext } from 'react'


const Footer = () => {
  const { Theme } = useContext(ContextGlobal)
  return (
<footer style={{background:Theme.backgroundFooter, color:Theme.color}}>
            <div>
                <p style={{color: "grey"}}>Powered by</p>
                <h3 style={{color: "grey"}}>Gian Panigatti</h3>
            </div>
            <div>
              <img className='iconos' src="/images/ico-facebook.png" alt="facebookIcon" />
              <img className='iconos' src="/images/ico-instagram.png" alt="instagramIcon" />
              <img className='iconos' src="/images/ico-tiktok.png" alt="instagramIcon" />
              <img className='iconos' src="/images/ico-whatsapp.png" alt="whatsAppIcon" />
            </div>
        </footer>
  )
}

export default Footer
