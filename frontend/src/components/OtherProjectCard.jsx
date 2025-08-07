import React from 'react';
import styles from './OtherProjectCard.module.css';

import RealEstate from '../assets/Real_Estate.jpg';
import ToDo from '../assets/ToDo.jpg';
import MovieStreaming from '../assets/MovieStreaming.png';

const OtherprojectData = [
    {
        title: "To-Do App (Flutter, SQFlite)",
        description:
            "Built a Flutter To‑Do app with sqflite, real‑time CRUD, a custom slider UI, and in‑app photo picking.",
        github: "https://github.com/Smiteshbhore21/smitesh_core2web_flutter/tree/main/Flutter/ClassApps/Assignment_Apps/advanced_todo",
        demo: "https://github.com/Smiteshbhore21/smitesh_core2web_flutter/tree/main/Flutter/ClassApps/Assignment_Apps/advanced_todo",
        image: ToDo,
    },
    {
        title: "Movie Streaming App",
        description:
            "Flutter Movie Streaming App with WatchMode API, Firebase Auth/Firestore, GetX state, responsive UI, inline YouTube trailers, and session persistence.",
        github: "https://github.com/Smiteshbhore21/smitesh_core2web_flutter/tree/main/Flutter/ClassApps/26%20UI/movie_streaming_app",
        demo: "https://github.com/Smiteshbhore21/smitesh_core2web_flutter/tree/main/Flutter/ClassApps/26%20UI/movie_streaming_app",
        image: MovieStreaming,
    },
    {
        title: "Real Estate (React)",
        description:
            "UI Practice Mockup: Discover your dream home with seamless browsing.",
        github: "https://github.com/Smiteshbhore21/React/tree/main/React_Real_Estate",
        demo: "https://github.com/Smiteshbhore21/React/tree/main/React_Real_Estate",
        image: RealEstate,
    },
];

const OtherProjectCard = () => {
    return (
        <div className={styles.otherCards} >
            {OtherprojectData.map((project, idx) => (
                <div key={idx} className={styles.otherCard} onClick={() => window.open(project.github, '_blank')}>
                    <div className={styles['CardImage']}>
                        <img src={project.image}></img>
                    </div>
                    <p className={styles.tip}>{project.title}</p>
                    <p className={styles['second-text']}>{project.description}</p>
                </div>
            ))}
        </div>
    );
};

export default OtherProjectCard;