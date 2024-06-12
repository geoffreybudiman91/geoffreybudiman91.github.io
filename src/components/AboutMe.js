import React from 'react';
import { motion } from 'framer-motion';
import resume from '../assets/documents/GeoffreyBudiman_Resume.pdf';
import '../assets/styles/AboutMe.css';

const AboutMe = () => {
  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="about-me-section">
      <div className="about-me-content">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          About Me
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          My name is Geoffrey Budiman. I am a recent graduate of New York University, where I majored in Computer Science with minors in Data Science and Business 
          Studies. Originally from Jakarta, Indonesia, I have also had the privilege of calling Singapore and New York my home. Growing up in these diverse metropolitans 
          has greatly enriched my cultural understanding and broadened my worldview. During my time at NYU, I have developed a deep passion for web development and data 
          analytics.
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          I thrive on challenges and enjoy the process of bringing ideas to life through code. When I'm not coding, I enjoy listening to music, playing video games, and
          watching European football. Feel free to explore my work, and don't hesitate to contact me!
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h2>Check out my Resume</h2>
          <iframe 
            src={resume} 
            width="80%" 
            height="750px" 
            style={{ border: 'none' }} 
            title="My Resume"
          ></iframe>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h2>Technical Skills</h2>
          <ul className="skills-icons">
            <motion.li variants={listItemVariants}><span className="iconify" data-icon="logos:javascript" data-inline="false" data-width="90px" data-height="90px"></span><span>JavaScript</span></motion.li>
            <motion.li variants={listItemVariants}><span className="iconify" data-icon="logos:react" data-inline="false" data-width="90px" data-height="90px"></span><span>React</span></motion.li>
            <motion.li variants={listItemVariants}><span className="iconify" data-icon="logos:nodejs-icon" data-inline="false" data-width="90px" data-height="90px"></span><span>Node.js</span></motion.li>
            <motion.li variants={listItemVariants}><span className="iconify" data-icon="simple-icons:express" data-inline="false" data-width="90px" data-height="90px"></span><span>Express.js</span></motion.li>
            <motion.li variants={listItemVariants}><span className="iconify" data-icon="logos:python" data-inline="false" data-width="90px" data-height="90px"></span><span>Python</span></motion.li>
            <motion.li variants={listItemVariants}><span className="iconify" data-icon="bxl:flask" data-inline="false" data-width="90px" data-height="90px"></span><span>Flask</span></motion.li>
            <motion.li variants={listItemVariants}><span className="iconify" data-icon="logos:java" data-inline="false" data-width="90px" data-height="90px"></span><span>Java</span></motion.li>
            <motion.li variants={listItemVariants}><span className="iconify" data-icon="devicon:spring" data-inline="false" data-width="90px" data-height="90px"></span><span>Spring</span></motion.li>
            <motion.li variants={listItemVariants}><span className="iconify" data-icon="logos:c" data-inline="false" data-width="90px" data-height="90px"></span><span>C</span></motion.li>
            <motion.li variants={listItemVariants}><span className="iconify" data-icon="vscode-icons:file-type-html" data-inline="false" data-width="90px" data-height="90px"></span><span>HTML</span></motion.li>
            <motion.li variants={listItemVariants}><span className="iconify" data-icon="vscode-icons:file-type-css" data-inline="false" data-width="90px" data-height="90px"></span><span>CSS</span></motion.li>
            <motion.li variants={listItemVariants}><span className="iconify" data-icon="bxl:postgresql" data-inline="false" data-width="90px" data-height="90px"></span><span>PostgreSQL</span></motion.li>
            <motion.li variants={listItemVariants}><span className="iconify" data-icon="bxl:mongodb" data-inline="false" data-width="90px" data-height="90px"></span><span>MongoDB</span></motion.li>
            <motion.li variants={listItemVariants}><span className="iconify" data-icon="logos:mysql" data-inline="false" data-width="90px" data-height="90px"></span><span>MySQL</span></motion.li>
            <motion.li variants={listItemVariants}><span className="iconify" data-icon="devicon:pandas" data-inline="false" data-width="90px" data-height="90px"></span><span>pandas</span></motion.li>
            <motion.li variants={listItemVariants}><span className="iconify" data-icon="logos:numpy" data-inline="false" data-width="90px" data-height="90px"></span><span>numpy</span></motion.li>
            <motion.li variants={listItemVariants}><span className="iconify" data-icon="simple-icons:scipy" data-inline="false" data-width="90px" data-height="90px"></span><span>SciPy</span></motion.li>
            <motion.li variants={listItemVariants}><span className="iconify" data-icon="devicon:scikitlearn" data-inline="false" data-width="90px" data-height="90px"></span><span>Scikit-learn</span></motion.li>
            <motion.li variants={listItemVariants}><span className="iconify" data-icon="devicon:matplotlib" data-inline="false" data-width="90px" data-height="90px"></span><span>Matplotlib</span></motion.li>
            <motion.li variants={listItemVariants}><span className="iconify" data-icon="logos:seaborn-icon" data-inline="false" data-width="90px" data-height="90px"></span><span>Seaborn</span></motion.li>
            <motion.li variants={listItemVariants}><span className="iconify" data-icon="material-symbols:soup-kitchen-outline" data-inline="false" data-width="90px" data-height="90px"></span><span>BeautifulSoup</span></motion.li>
            <motion.li variants={listItemVariants}><span className="iconify" data-icon="devicon:rstudio" data-inline="false" data-width="90px" data-height="90px"></span><span>RStudio</span></motion.li>
            <motion.li variants={listItemVariants}><span className="iconify" data-icon="logos:jest" data-inline="false" data-width="90px" data-height="90px"></span><span>Jest</span></motion.li>
            <motion.li variants={listItemVariants}><span className="iconify" data-icon="logos:mocha" data-inline="false" data-width="90px" data-height="90px"></span><span>Mocha</span></motion.li>
            <motion.li variants={listItemVariants}><span className="iconify" data-icon="logos:chai" data-inline="false" data-width="90px" data-height="90px"></span><span>Chai</span></motion.li>
            <motion.li variants={listItemVariants}><span className="iconify" data-icon="devicon:junit" data-inline="false" data-width="90px" data-height="90px"></span><span>JUnit</span></motion.li>
            <motion.li variants={listItemVariants}><span className="iconify" data-icon="devicon:pytest" data-inline="false" data-width="90px" data-height="90px"></span><span>pytest</span></motion.li>
            <motion.li variants={listItemVariants}><span className="iconify" data-icon="logos:docker-icon" data-inline="false" data-width="90px" data-height="90px"></span><span>Docker</span></motion.li>
            <motion.li variants={listItemVariants}><span className="iconify" data-icon="logos:git-icon" data-inline="false" data-width="90px" data-height="90px"></span><span>Git</span></motion.li>
            <motion.li variants={listItemVariants}><span className="iconify" data-icon="logos:figma" data-inline="false" data-width="90px" data-height="90px"></span><span>Figma</span></motion.li>
            <motion.li variants={listItemVariants}><span className="iconify" data-icon="logos:npm" data-inline="false" data-width="90px" data-height="90px"></span><span>npm</span></motion.li>
            <motion.li variants={listItemVariants}><span className="iconify" data-icon="logos:bootstrap" data-inline="false" data-width="90px" data-height="90px"></span><span>Bootstrap</span></motion.li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
