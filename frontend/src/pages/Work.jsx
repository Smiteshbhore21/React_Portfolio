import React, { useEffect, useState, useCallback } from 'react';
import ProjectCard from '../components/ProjectCard';

// Import images
import CanteenMate from '../assets/CanteenMate.png';
import CarPricePredict from '../assets/CarPricePredict.png';
import SudokuSolver from '../assets/SudokuGame.png';
import OtherProjectCard from '../components/OtherProjectCard';
import GitHubCard from '../components/GitHubCard';
import Skills from '../components/Skills';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectData = [
    {
        title: "Canteen Mate (Flutter)",
        description:
            "Developed a mobile application using Flutter for the front-end and Firebase for the back-end, featuring user and admin interfaces. Users can order food, participate in polls for the next day's menu, and have preferences stored with SharedPreferences. Admins can manage orders and menu items via Firebase Firestore. Key functionalities include secure authentication, real-time database integration, and a unique polling system to enhance user engagement and streamline canteen operations.",
        github: "https://gitlab.com/smiteshbhore21/canteen-mate/-/tree/Smitesh?ref_type=heads",
        demo: "https://gitlab.com/smiteshbhore21/canteen-mate/-/tree/Smitesh?ref_type=heads",
        imagePath: CanteenMate,
    },
    {
        title: "Sudoku Solver & Playable Game (Full Stack)",
        description:
            "A full-stack, production-ready Sudoku web application built with React (TypeScript) and Node.js (Express). Features difficulty-based puzzle generation, a backtracking solver engine, real-time client-side validation, hints, locked original cells, and game-completion detection. Clean REST APIs, optimized constraint checks, and cloud deployment on Render and Vercel make the app scalable and interview-ready.",
        github: "https://github.com/Smiteshbhore21/SudokuApp",
        demo: "https://sudokuapp-six.vercel.app/",
        imagePath: SudokuSolver,
    },

    {
        title: "Car Price Prediction (Machine Learning + Flask)",
        description:
            "A production-ready ML service: a linear regression model that predicts used car prices from rich feature data, exposed via a Flask API with integrated preprocessing and model-loading pipeline.",
        github: "https://github.com/Smiteshbhore21/car_price_predict_flask_backend",
        demo: "https://car-price-predict-flask-backend.onrender.com/",
        imagePath: CarPricePredict,
    },
];

const Work = () => {

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true
        });
    }, []);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    return (
        <>
            <section style={{
                paddingTop: '3rem',
                paddingBottom: '3rem',
                marginBottom: '7rem',
                marginTop: '3rem'
            }} data-aos="fade">
                <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
                    Hello there, I'm <span style={{ color: '#4A9782' }}>Smitesh Bhore!</span>
                </h1>
                <p style={{ textAlign: 'justify', fontSize: '1.4rem', color: '#555' }}>
                    Designing and building end-to-end products from intuitive mobile interfaces to robust backend services and applied machine learning driven by clean design and measurable impact.
                </p>
                <p style={{ textAlign: 'justify', fontSize: '1.4rem', color: '#555' }}>
                    Android Team Lead at
                    <b>
                        <span style={{ color: "#00819d" }}> GDG</span>
                    </b> on Campus, ex‑Flutter Intern at
                    <b>
                        <span style={{ color: "#007cba" }}> Incubator Inc.</span>
                    </b>, ex‑React Intern at
                    <b>
                        <span style={{ color: "#007cba" }}> Techlathe</span>
                    </b>.
                </p>
            </section >

            <section style={{ paddingTop: '1rem', paddingBottom: '1rem' }} data-aos="fade">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {ProjectData.map((project, index) => (
                        <ProjectCard
                            key={index}
                            imagePath={project.imagePath}
                            title={project.title}
                            description={project.description}
                            github={project.github}
                            demo={project.demo} />
                    ))}
                </div>
            </section>

            <p style={{ fontSize: '2rem', marginBottom: '1rem', marginTop: '5rem', fontWeight: '500' }} data-aos="fade">
                Other projects
            </p>
            <section style={{ paddingTop: '1rem', paddingBottom: '1rem' }} data-aos="fade">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <OtherProjectCard />
                </div>
            </section>
            <p style={{ fontSize: '2rem', marginBottom: '1rem', marginTop: '5rem', fontWeight: '500' }} data-aos="fade">
                Skills
            </p>
            <section style={{ paddingTop: '1rem', paddingBottom: '1rem' }} data-aos="fade">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <GitHubCard />
                </div>
            </section>
            <section style={{ paddingTop: '1rem', paddingBottom: '1rem' }} data-aos="fade">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <Skills />
                </div>
            </section>
        </>
    );
};



export default Work;
