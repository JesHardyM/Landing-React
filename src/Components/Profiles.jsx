import React from 'react'
import Linkedin from '../assets/images/linkedin.png'
import Person1 from '../assets/images/person1.png'
import Person2 from '../assets/images/person2.png'
import Person3 from '../assets/images/person3.png'
import Person4 from '../assets/images/person4.png'




function Profiles () {
      return (
  
        <div className="profileArea">
          <div className="profile">
            <a href><img className="profile-img" src={Person1} alt="Avatar de Sara Gonzales" /></a>
            <h4>Sara Gonzales</h4>
            <h5>Especialista en desarrollo web</h5>
            <a href="https://www.linkedin.com/"><img className="linkedin" src={Linkedin} alt="Icono de LinkedIn" /></a>
          </div>
          <div className="profile">
            <a href><img className="profile-img" src={Person2} alt="Avatar de Sara Gonzales" /></a>
            <h4>Maria Perez</h4>
            <h5>Especialista en desarrollo web</h5>
            <a href="https://www.linkedin.com/"><img className="linkedin" src={Linkedin} alt="Icono de LinkedIn" /></a>
          </div>
          <div className="profile">
            <a href><img className="profile-img" src={Person3} alt="Avatar de Sara Gonzales" /></a>
            <h4>Andrea Martinez</h4>
            <h5>Especialista en desarrollo web</h5>
            <a href="https://www.linkedin.com/"><img className="linkedin" src={Linkedin} alt="Icono de LinkedIn" /></a>
          </div>
          <div className="profile">
            <a href><img className="profile-img" src={Person4} alt="Avatar de Sara Gonzales" /></a>
            <h4>Mel Loren</h4>
            <h5>Especialista en desarrollo web</h5>
            <a href="https://www.linkedin.com/"><img className="linkedin" src={Linkedin} alt="Icono de LinkedIn" /></a>
          </div>
        </div>
      );
    }

  export default Profiles