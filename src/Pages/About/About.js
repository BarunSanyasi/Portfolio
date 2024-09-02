import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faContactBook, faListCheck } from '@fortawesome/free-solid-svg-icons';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";

import "./About.css"
import { educations, skills } from '../Data/Datas';
import EducationCard from '../Cards/EducationCard';

const About = () => {
  return (
    <div className='About-container'>
      <div className='About-container-box'>
        <h1>About</h1>
        <p>I am a passionate and dedicated Web Developer and Software Engineer with extensive experience in
          building websites for businesses of all sizes, from personal portfolios
          to e-commerce platform. My expertise spans across a wide range of
          technologies including HTML, CSS, JavaScript, React, Node.js, and PHP. I am also proficient
          in WordPress development, creating custom themes and plugins to meet unique client needs.
          As a fast learner and dedicated worker, I continuously strive to stay updated with the latest
          industry trends and technologies, ensuring that my clients receive modern and efficient solutions.
          I take pride in delivering high-quality work, meeting deadlines, and exceeding client expectations.
          I am currently open to work and collaboration opportunities. If you're looking for a skilled
          web developer to bring your project to life, feel free to get in touch.
        </p>
        <div className='btn-box'>
          <a href="/Project" className='btn'><FontAwesomeIcon icon={faListCheck} className="icons" />Project</a>
          <a href="/Contact" className='btn-light'><FontAwesomeIcon icon={faContactBook} className="icons" />Hire Me</a>
        </div>
      </div>

      <div className='About-container-box'>
        <h1>Education</h1>
        <p>My education has been a journey of self-discovery and growth.
          My education details are as follows.</p>
        <div>
          <Timeline>
            {educations.map((education, index) => (
              <TimelineItem >
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== educations.length - 1 && <TimelineConnector style={{ background: 'rgb(42, 171, 203)' }} />}
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <EducationCard education={education} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>

      <div className='About-container-box'>
        <h1>Skills</h1>
        <p>Here are some of my skills on which i have been working on.</p>
        <div className="skill-container">
          {skills.map((item, index) => (
            <div key={index} className="skill-box">
              <h3>{item.title}</h3>
              <div className="skill-items">
                {item.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <img src={skill.image} alt={skill.name} />
                    <p>{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default About;