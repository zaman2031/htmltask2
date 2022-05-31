import React from 'react';
import './hope.scss'

const Hope = () => {
    return (
        <div className='hope-section'>
            <div className='main-section'>
               <span className='section-title'>hope condition</span>
                <div className='button-edit'>edit</div>
            </div>
            <div className='section-details'>
                <p>Occupation</p>
                <p>On duty  ------</p>
                <p>Work style</p>
                <div>Facility ---</div>
                <div className='section-detail'>form</div>
                <div>annual --- </div>
                <div>income</div>
            </div>
        </div>
    );
}

export default Hope;