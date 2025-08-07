import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
    return (
        <div className={styles.marquee}>
            <div className={styles.marquee__inner}>
                <div className={styles.marquee__group}>
                    <span>C++</span>
                    <span>Dart</span>
                    <span>Java</span>
                    <span>Flutter</span>
                    <span>Python</span>
                    <span>Javascript</span>
                    <span>React</span>
                    <span>Machine Learning</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>MongoDB</span>
                    <span>MySQL</span>
                    <span>SQFlite</span>
                </div>
                <div className={styles.marquee__group}>
                    <span>C++</span>
                    <span>Dart</span>
                    <span>Java</span>
                    <span>Flutter</span>
                    <span>Python</span>
                    <span>Javascript</span>
                    <span>React</span>
                    <span>Machine Learning</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>MongoDB</span>
                    <span>MySQL</span>
                    <span>SQFlite</span>
                </div>
            </div>
        </div>
    );
};

export default Skills;