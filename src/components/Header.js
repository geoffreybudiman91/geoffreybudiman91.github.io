import React, { useEffect } from 'react';
import '../assets/styles/Header.css';
import { TypeAnimation } from 'react-type-animation';
import profilePicture from '../assets/images/profile-picture.jpg';

const Header = () => {
  useEffect(() => {
    // Load the particles.js configuration
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = () => {
      window.particlesJS("particles-js", {
        "particles": {
        "number": {
          "value": 96,
          "density": {
            "enable": false,
            "value_area": 1840
          }
        },
        "color": {
          "value": "#fff"
        },
        "shape": {
          "type": "edge",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 8,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "bubble"
          },
          "onclick": {
            "enable": false,
            "mode": "repulse"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  };
  document.body.appendChild(script);
}, []);

  return (
    <div className="header">
      <div id="particles-js"></div>
      <div className="card">
        <img
          src={profilePicture}
          alt="Profile"
          className="profile-pic"
        />
        <TypeAnimation
          sequence={[
            'Hey! I\'m Geoff. Welcome to my Website!'
          ]}
          wrapper="h1"
          cursor={true}
        />
        <div className="buttons">
          <a href="https://github.com/geoffreybudiman91" className="btn">
            <i className="fab fa-github fa-2x"></i> GitHub
          </a>
          <a href="https://linkedin.com/in/geoffreybudiman" className="btn">
            <i className="fab fa-linkedin fa-2x"></i> LinkedIn
          </a>
          <a href="mailto:geoffrey.budiman@gmail.com" className="btn">
            <i className="fa-regular fa-envelope fa-2x"></i> Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;