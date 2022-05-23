 import React from 'react';
import logo from '../Logos/New-logo.jpeg';
import './Profile.scss'

const Profile = () => {
    return (
        <div className='profile-section'>
            <div className='profile-border'>
                <div className='Profile-page'>
                    <div className='New-logo'>
                        <img src={logo} />
                    </div>
                    <section >
                        <div className='user-detail'>
                            <div>
                                <span className='user-name'>Nabeel</span>
                                Ahmad 00
                            </div>
                            <span className='location-detail'>Location area</span>
                            <br />
                            <span className='occupation-detail'>Current occupation</span>
                            <br />
                            <span>Experienced occupation: ---</span>
                        </div>
                    </section>
                    <div className='edit-text'>edit</div>
                </div>
                <p className='self-edit'>edit</p>
                <div className='user-introduction'>
                    <h6 className='user-Selfintro'>Self-introduction</h6>
                    <p >Fill in self-introduction</p>
                </div>
                <br />
                <p className='self-edit'>addition</p>
                <div className='user-introduction'>
                    <h6 className='user-intro'>Work history</h6>
                    <p >Add work history</p>
                </div>
                <br />
                <p className='self-edit'>addition</p>
                <div className='user-introduction'>
                    <h6 className='user-intro'>All qualifications</h6>
                    <p >Add qualification</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;






