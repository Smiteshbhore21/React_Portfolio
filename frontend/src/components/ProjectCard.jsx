import "./ProjectCard.css";
import GitHubLogo from '../assets/GitHub_logo.svg';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectCard = ({ imagePath, title, description, github, demo }) => {

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="card">
            <img src={imagePath} alt="Project Logo" className="card__image" />
            <div className="card__content">
                <p className="card__title">{title}</p>
                <p className="card__description">{description}</p>
                <div className="card__actions">
                    <button class="learn-more-btn card__button--left" onClick={() => window.open(demo, '_blank')}>
                        <span class="circle" aria-hidden="true">
                            <span class="icon arrow"></span>
                        </span>
                        <span class="button-text">Live Demo</span>
                    </button>
                    <button
                        className="buttonGitHub card__button--right"
                        onClick={() => window.open(github, '_blank')}
                    >
                        <img src={GitHubLogo} alt="GitHub Logo" width={isMobile ? 21 : 24} height={isMobile ? 21 : 24} />
                        <span className="text">GitHub</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;