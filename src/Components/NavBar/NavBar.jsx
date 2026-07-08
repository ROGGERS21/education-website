import React, { useEffect, useState } from 'react'
import './NavBar.css'
import { Link } from 'react-scroll'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu_icon.png'


const NavBar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
   },[]);

   const [mobileMenu, setMobileMenu] = useState(false);
   const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);

   }
  return (
    // <nav className={'container ${sticky? 'dark_nav' : ''}'}>
      <nav className={`container ${sticky ? 'dark_nav' : ''}`}>
        <img src={logo} alt="" className='logo' />
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to='Hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to='Campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='Testimonials' smooth={true} offset={-260} duration={500}>Testimonianls</Link></li>
            <li>
              {/* <button className='btn'>Contact Us</button> */}
            <Link to='Contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link>
            </li>

        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default NavBar;
