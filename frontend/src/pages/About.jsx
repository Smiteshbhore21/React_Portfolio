import React, { useEffect, useState, useCallback } from 'react';
import styles from './About.module.css';
import me from "../assets/Me_Emoji.png";
import gdccd from "../assets/gdccd24.jpg";
import GDGLogo from "../assets/gdg_logo.png";
import C2W from "../assets/c2wincubators_logo.jpg";
import TechLathe from "../assets/TechLathe_logo.jpg";
import { TypeAnimation } from 'react-type-animation';
import AOS from 'aos';
import 'aos/dist/aos.css';

const typingSpeed = 50;        // ms per character
const postPause = 3000;        // ms to wait after animation

const About = () => {
    const [fact, setFact] = useState('');

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    // Stable fetch function
    const fetchFact = useCallback(() => {
        fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en')
            .then(res => res.json())
            .then(data => setFact(data.text))
            .catch(console.error);
    }, []);

    // 1️⃣ On mount, fetch first fact
    useEffect(() => {
        fetchFact();
    }, [fetchFact]);

    // 2️⃣ Whenever `fact` changes, schedule next fetch
    useEffect(() => {
        if (!fact) return;

        // estimate how long the typing will take
        const typingDuration = fact.length * typingSpeed;

        // total delay = typingDuration + postPause
        const timer = setTimeout(fetchFact, typingDuration + postPause);
        return () => clearTimeout(timer);
    }, [fact, fetchFact]);

    useEffect(() => {
        AOS.init({
            duration: 800,
            // once: true
        });
    }, []);

    return (
        <section
            style={{
                paddingTop: '0rem',
                paddingBottom: isMobile ? '1rem' : '2rem',
                marginBottom: isMobile ? '1rem' : '2rem',
                marginTop: isMobile ? '1rem' : '2rem'
            }}>
            <div className={styles.aboutHeader}>
                <h2>
                    <span className={styles.funFact}>Fun facts.</span> <br />
                    <TypeAnimation
                        key={fact}                // remount on every new fact
                        sequence={[                  // only type the fact once
                            fact
                        ]}
                        speed={typingSpeed}
                        wrapper="span"
                        repeat={0}                // no loop inside the component
                        className={styles.typeAnimation}
                    />
                </h2>
                <img className={styles.meEmoji} src={me} alt="Me" />
            </div>
            <div className={styles.aboutMe} data-aos="fade-right">
                <div className={styles.card}>
                    <div className={styles.card_image} >
                        <img src={gdccd} className={styles.card_image} style={{ objectFit: "cover" }}></img>
                    </div>
                    <div className={styles.category}>
                        GDG's Cloud Community Day Pune 2024
                    </div>
                </div>
                <div className={styles.aboutMe_Text}>
                    <p>
                        Volunteered for a prestigious technical event focused on Google Cloud technologies. The event featured sessions led by expert speakers who shared valuable industry insights and innovations.
                        <br /> <br />
                        Played an active role in coordinating various aspects of the event, ensuring smooth scheduling, speaker support, and technical setup. Worked closely with the organizing team to manage on-site logistics efficiently.
                        <br /> <br />
                        Contributed to improving the overall attendee experience by guiding participants, handling queries, and maintaining a professional environment throughout the sessions. Helped ensure the event ran seamlessly from start to finish.
                    </p>
                </div>
            </div>
            <div className={styles.aboutMeCircle} data-aos="fade-left">
                <div className={styles.aboutMeDesign}>
                    <p>
                        Contributed as a <b>design team member</b> in the college's tech community by creating visually appealing graphics, posters, and digital assets for technical events, effectively boosting outreach and participant engagement.
                    </p>
                </div>
                <div className={styles.cardDesign}>
                    <div className={styles.cardDesign_image} >
                        <img src={GDGLogo} className={styles.cardDesign_image}>
                        </img>
                    </div>
                </div>
            </div>
            <div className={styles.aboutMeCircle} style={{ flexDirection: isMobile ? 'column' : 'row', margin: "40px 0px 40px 0px" }} data-aos="fade-right">
                <div className={styles.cardDesign}>
                    <div className={styles.cardDesign_image} >
                        <img src={C2W} className={styles.cardDesign_image} style={{ objectFit: "contain" }}>
                        </img>
                    </div>
                </div>
                <div className={styles.aboutMeDesign} style={{ padding: isMobile ? "0px" : "0px 0px 0px 30px" }}>
                    <p>
                        As a <b>Flutter Developer intern</b> at <b>Incubators Inc.</b> from August to October 2024, I upgraded the discussion forum into a mobile-friendly Flutter app, integrated Firebase for secure authentication and real-time updates, and implemented state-management patterns to optimize performance and maintain scalable, clean code.
                    </p>
                </div>
            </div>
            <div className={styles.aboutMeCircle} data-aos="fade-left">
                <div className={styles.aboutMeDesign}>
                    <p>
                        As a <b>Frontend Developer intern (React)</b> at <b>TechLathe IT Solutions</b> from August to October 2024, I utilized Git for version control, crafted responsive UIs with CSS and media queries, implemented regex validation and React Hooks for state management, and built cohesive login and registration pages with seamless component integration.
                    </p>
                </div>
                <div className={styles.cardDesign}>
                    <div className={styles.cardDesign_image} >
                        <img src={TechLathe} className={styles.cardDesign_image}>
                        </img>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
