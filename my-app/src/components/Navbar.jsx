import React from 'react';
import logo from '../Logos/logo.png'
import newLogo from '../Logos/logo.png';
import './Navbar.scss'

const Navbar = () => {
    return (
        <div className='container'>
            <div className="logo">
                <img src={logo} alt="This is image" />
            </div>
            <nav>
                <ul>
                    <li>Job search</li>
                    <li>be on one's mind!</li>
                    <li>message</li>
                    <li className='list-item'>My page</li>
                    <li className='list-image'>
                    <img src={newLogo} alt="" />
                    </li>
                </ul>
                <button className='Logout-button'>Logout</button>
            </nav>
        </div>
    );
}

export default Navbar;

 