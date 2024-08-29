import React from 'react';
import "./Home.css";
import { socialMediaData, contactDetails, cvDownloadLink } from '../Data/Datas';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faContactBook, faDownload, faListCheck } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className="container">
      <div className="left-box">
        <div className="profile">
          <div className="profile-container">
            <img src=".//Images/ProfilePic.png" alt="Profiles" className='profile-img' />
          </div>
          <div className="profileInfo">
            <h2 className='profileName'>Barun Sanyasi</h2>
            <p className='workProfileName'>Software Developer</p>
            <ul className='socialMedia'>
              {socialMediaData.map((item, index) => (
                <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={item.icon} size='2x' />
                </a>
              ))}
            </ul>
            <div className='contact-container'>
              {contactDetails.map((item, index) => (
                <div key={index}>
                  <ul className='contactDetail'>
                    <li>
                      <a href={item.link}><FontAwesomeIcon icon={item.icon} size='2x' /></a>
                    </li>
                    <div className='contact-text'>
                      <h5>{item.title}</h5>
                      <p>{item.detail}</p>
                    </div>
                  </ul>
                  {index !== contactDetails.length - 1 && <hr />}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="cv-download">
          <a href={cvDownloadLink} download><FontAwesomeIcon icon={faDownload} className='download-icon' />Download CV</a>
        </div>
      </div>
      <div className="right-box">
        <div className="content">
          <h1>Hi, I'm Barun Sanyasi.</h1>
          <h3>Software Developer</h3>
          <p>Currently pursuing bachelor's degree in Computer Science and Engineering.
            I am adequate in the prominent skills like HTML, CSS, JavaScript, React.js, Node.js, WordPress and so on.
            I love doing new challenges and projects that help me invest all my skills and experience into succeeding them.</p>
          <div className='btn-box'>
            <a href='Project' className='btn'><FontAwesomeIcon icon={faListCheck} className="icons" />Project</a>
            <a href='Contact' className='btn-light'><FontAwesomeIcon icon={faContactBook} className="icons" />Hire Me</a>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Home;