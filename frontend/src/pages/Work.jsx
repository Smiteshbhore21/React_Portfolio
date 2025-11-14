import React, { useEffect, useState, useCallback } from 'react';
import ProjectCard from '../components/ProjectCard';

// Import images
import CanteenMate from '../assets/CanteenMate.png';
import CarPricePredict from '../assets/CarPricePredict.png';
import URLShorteners from '../assets/URLShorteners.jpg';
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
        title: "URL Shortner (Node)",
        description:
            "A fast, production-ready URL shortening REST API built with Node.js. Generates collision-resistant short codes, protects against abuse, returns meaningful errors, and logs click events so the service is analytics-ready. Dockerized for deployment and instrumented for monitoring.",
        github: "https://github.com/Smiteshbhore21/Node/tree/master/Short-URL",
        demo: "https://github.com/Smiteshbhore21/Node/tree/master/Short-URL",
        imagePath: URLShorteners,
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
                <p style={{ fontSize: '1.4rem', color: '#555' }}>
                    Crafting mobile‑first discussion forums in Flutter with state‑management best practices, turning complex data flows into intuitive, human‑centered interactions.
                </p>
                <p style={{ fontSize: '1.4rem', color: '#555' }}>
                    Design Team Member at
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
