import React, { useState, useEffect } from 'react';
import styles from './GItHubCard.module.css';
import CountUp from 'react-countup';

// Import your icons
import MobileDevIcon from '../assets/Mobile_Dev_Icon.png';
import MLIcon from '../assets/ML_Icon.png';
import WebDevIcon from '../assets/WebDevIcon.png';
import DevLogo from '../assets/GitHubCardImage.svg';

const GitHubCard = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={styles.GitCard}>
            <div className={styles.GitCardItem}>
                <img className={styles.DevImg} src={DevLogo} alt="Dev Logo" />
            </div>
            <div className={`${styles.GitCardItem} ${styles.GitCardItemCol}`}>
                <span className={styles.label}>
                    <img src={MobileDevIcon} alt="App Dev" style={{ width: isMobile ? 16 : 32, height: isMobile ? 16 : 32, verticalAlign: 'middle', marginRight: 8 }} />
                    App Development
                </span>
                <span className={styles.label}>
                    <img src={MLIcon} alt="ML" style={{ width: isMobile ? 16 : 32, height: isMobile ? 16 : 32, verticalAlign: 'middle', marginRight: 8 }} />
                    Machine Learning
                </span>
                <span className={styles.label}>
                    <img src={WebDevIcon} alt="Web Dev" style={{ width: isMobile ? 16 : 32, height: isMobile ? 16 : 32, verticalAlign: 'middle', marginRight: 8 }} />
                    Website Development
                </span>
            </div>
        </div>
    );
};

export default GitHubCard;