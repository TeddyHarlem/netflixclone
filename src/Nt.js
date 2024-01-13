import React, { useEffect, useState } from 'react'
import "./Nav.css"

function Nav()
{
    const [show, handleShow] = useState(false);
    useEffect(() =>
    {
        const handleScroll = () =>
        {
            if (window.scrollY > 100)
            {
                handleShow(true);
            } else { handleShow(false); }
        };
    
    
        window.addEventListener("scroll", handleScroll);
    return () => { window.removeEventListener("scroll", handleScroll); };
}, []);


    return ( 
        <div className={`nav ${show && "nav__black"}`}>
            <img className='nav__logo' src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix Logo" />
        <div className='nav-list'>
          <ul className='nav-all'>
            <li><link className="nav-link" to="#">
                    Support</link>
            </li>
            <li><link className="nav-link" to="#">
                    Support</link>
            </li>
            <li><link className="nav-link" to="#">
                    Support</link>
            </li>
            <li><link className="nav-link" to="#">
                    Support</link>
            </li>
            <li><link className="nav-link" to="#">
                    Support</link>
            </li>
            <li><link className="nav-link" to="#">
                    Support</link>
            </li>
            <li><link className="nav-link" to="#">
                    Support</link>
            </li>
            <li><link className="nav-link" to="#">
                    Support</link>
            </li>
            <li><link className="nav-link" to="#">
                    Support</link>
            </li>
          </ul>

         </div>
      <img className='nav__avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar Logo" />   
</div>
    )
    }  

export default Nav;