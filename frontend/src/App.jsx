import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from "react-helmet";

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Work from './pages/Work.jsx';
import About from './pages/About.jsx';

const SITE_URL = "https://smiteshbhore.netlify.app";
const SOCIAL_IMAGE = `${SITE_URL}/assets/logo_portfolie.png`;
const NAME = "Smitesh Bhore";

const App = () => {
  return (
    <Router>

      {/* Global / default SEO that applies site-wide */}
      <Helmet>
        {/* Optional: add google-site-verification when you get the token from GSC */}
        {/* <meta name="google-site-verification" content="YOUR_GOOGLE_TOKEN" /> */}

        <title>{`${NAME} | Portfolio`}</title>
        <meta
          name="description"
          content="Official portfolio of Smitesh Bhore – Flutter, React, and Machine Learning Developer. Showcasing projects, skills, and achievements."
        />
        <meta
          name="keywords"
          content="Smitesh Bhore, Smitesh Portfolio, Flutter Developer, React Developer, Machine Learning"
        />
        <link rel="canonical" href={SITE_URL + "/"} />

        {/* Open Graph */}
        <meta property="og:title" content={`${NAME} — Portfolio`} />
        <meta
          property="og:description"
          content="Frontend & Flutter developer. Projects, resume and contact — Smitesh Bhore."
        />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={SOCIAL_IMAGE} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${NAME} — Portfolio`} />
        <meta
          name="twitter:description"
          content="Frontend & Flutter developer. Projects, resume and contact — Smitesh Bhore."
        />
        <meta name="twitter:image" content={SOCIAL_IMAGE} />

        {/* JSON-LD Person (keep sameAs links accurate) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: NAME,
            url: SITE_URL,
            jobTitle: "Flutter & React Developer",
            email: "mailto:smiteshbhore23@gmail.com",
            sameAs: [
              "https://github.com/Smiteshbhore21",
              "https://www.linkedin.com/in/smitesh-bhore-b46697257/",
              "https://leetcode.com/u/QuantSmith/",
              "https://www.instagram.com/smiteshbhore/"
            ]
          })}
        </script>
      </Helmet>

      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Helmet>
              <title>{`${NAME} | Portfolio`}</title>
              <meta
                name="description"
                content="A curated selection of projects by Smitesh Bhore — React, Flutter, UI/UX and ML projects."
              />
              <link rel="canonical" href={SITE_URL + "/"} />
            </Helmet>
            <Work />
          </>
        } />

        <Route path="/about" element={
          <>
            <Helmet>
              <title>{`About | ${NAME}`}</title>
              <meta
                name="description"
                content="About Smitesh Bhore — background, skills, education and contact information."
              />
              <link rel="canonical" href={SITE_URL + "/about"} />
            </Helmet>
            <About />
          </>
        } />

      </Routes>

      <Footer />

    </Router>
  );
};

export default App;