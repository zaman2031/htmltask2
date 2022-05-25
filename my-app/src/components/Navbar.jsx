import React from 'react';
import logo from '../assets/wecare-logo.svg'
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className='main-container'>
            <div className='main-logo'>
                <img src={logo} alt="wecare-Logo " />
            </div>
            <nav>
                <ul>
                    <li>Job search</li>
                    <li>be on one's mind!</li>
                    <li>message</li>
                    <li className='list-item'>My page</li>
                    <li className='user-main'>N</li>
                </ul>
                <button className='logout-button'>Logout</button>
            </nav>
        </div>
    );
}

export default Navbar;