import React from 'react';
import CentralImage from '../assets/images/central-icons.png'

function Central () {
        return (
            <div className="Central">
            <div className="main-image">
                <img src={CentralImage} alt="welcome characters" />
                </div>
            <div className="callTo">
                <h2>Consultores<br /> <br />tecnológicos</h2>
                <h3>Especialistas en desarrollo</h3>
                <button type="button" className='Button'>Te llamamos</button>
            </div>
            </div>
        );
        }
    ;
    
    export default Central