import React from 'react';
import './EducationCard.css';

const EducationCard = ({ education }) => {
    return (
        <div className="education-card">
            <div className="education-top">
                <img src={education.img} alt="School Logo" className="education-image" />
                <div className="education-body">
                    <div className="education-name">{education.school}</div>
                    <div className="education-degree">{education.degree}</div>
                    <div className="education-date">{education.date}</div>
                </div>
            </div>
            <div className="education-description">{education.desc}</div>
        </div>
    );
};

export default EducationCard;