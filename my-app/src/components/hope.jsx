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
                <p >Occupation <span className='main-hyphens'>---</span></p>  
                <p>On duty  <span className='form-spacing main-hyphens'>------</span></p>
                <p>Work style <span className='main-hyphens'>---</span></p>
                <div>Facility<span className='form-spacing main-hyphens'>---</span> </div> 
                <div className='section-detail'>form</div>
                <div>annual  <span className='form-spacing main-hyphens'>---</span></div>
                <div>income</div>
            </div>
        </div>
    );
}

export default Hope; 