import React from 'react'
import { ContextGlobal } from './utils/global.context'
import { useContext } from 'react'
import { Link } from 'react-router-dom'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context}

const Navbar = () => {
    const { Theme, handleThemeChange } = useContext(ContextGlobal)

    return (
        <nav className='navbar' style={{background:Theme.backgroundNavbar, color:Theme.color}}>
            <Link to={'/'}><img src='/images/DH.png' className='logos' alt='digitalLogo'/></Link>
            <div className='navbarFont'>
                <Link to={'/'}>Home</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/favorites'}>Favorites</Link>
                <i className={(Theme.color === 'black') ? 'fa-solid fa-moon' : 'fa sharp fa-light fa-sun'} onClick={handleThemeChange}></i>
            </div>
            
        </nav>
    );
};


export default Navbar