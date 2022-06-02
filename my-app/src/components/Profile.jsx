import React from 'react';
import logo from '../assets/location.png';
import newLogo from '../assets/occupation.png'
import './Profile.scss'
 
const Profile = () => {
    return (
            <div className='profile-section'> 
                <div className='Profile-page'>
                    <div className='main-logo'>
                        <p> N</p>
                    </div>
                        <div className='user-details'>
                            <span className='user-name '>Nabeel</span>
                            Ahmad 00
                            <div className='Image-section'>
                                <img className='main-icons' src={logo} alt="This is icon" />
                                <span >Location area</span> 
                            </div>
                            <div className='Image-section'>
                            <img className='main-icons' src={newLogo} alt="This is icon" />
                                <span >Current occupation</span>
                            </div>
                            <span>Experienced occupation: ---</span>
                        </div>
                    <span className='text-editors'>edit</span>
                </div>
                <p className='text-editor'>edit</p>
                <div className='user-introduction'>
                    <h6 className='user-Intro'>Self-introduction</h6>
                    <p className='paragraph-editing'>Fill in self-introduction</p>
                </div>
                <p className='Add-icon'>addition</p>
                <div className='user-introduction'>
                    <h6 className='user-history'>Work history</h6>
                    <p className='paragraph-editing'>Add work history</p>
                </div>
                <p className='Add-icon'>addition</p>
                <div className='user-introduction'>
                    <h6 className='user-history'>All qualifications</h6>
                    <p className='paragraph-editing'>Add qualification</p>
                </div>
            </div>
    );
}

export default Profile;