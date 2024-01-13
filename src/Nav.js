import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './Nav.css';

function Nav() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <img 
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
          alt="Netflix Logo" />
        <div className="nav__links">
                <a href="#home">Home</a>
                <a href="#shows">Tv shows</a>
                <a href="#movies">Movies</a>
                <a href="#new">New & Popular</a>
                <a href="#mylist">My List</a>
                <a href="#mylist">Browse by Language</a>
            </div>
           
           
            <div className="nav__icons">
                <i className="nav__icon fas fa-search"></i>
                <i className="nav__icon fas fa-bell"></i>
                <img 
                    className="nav__avatar"
                    src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" 
                    alt="User Avatar"
                />
            </div>
        </div>
    );
}

export default Nav;

