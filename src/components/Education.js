import React from 'react';
import '../assets/styles/Education.css';
import NYU_Logo from '../assets/images/NYU_Logo.png';

const Education = () => {
    return (
        <div className="education">
            <h1>My Education</h1>
            <div className="education-card">
              <div className="image">
                <img src={NYU_Logo} alt={'NYU Logo'} className="nyu-logo" />
              </div>
              <div className="education-info">
                <h3>New York University</h3>
                <h3>B.A. in Computer Science</h3>
                <p>fdfd</p>
              </div>
            </div>
        </div>
    );
  };
  
  export default Education;