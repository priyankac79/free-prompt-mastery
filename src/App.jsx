import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Techniques from './Components/Techniques/Techniques';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Tools from './Components/Tools/Tools';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import Technique1 from './Components/Techniques/Technique1';
import Technique2 from './Components/Techniques/Technique2';
import Technique3 from './Components/Techniques/Technique3';

const App = () => {
    const [playState, setPlayState] = useState(false);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const isHomePage = location.pathname === '/';

    return (
        <div>
            {isHomePage && <Navbar />}
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Hero />
                            <div className="container">
                                <Title
                                    subTitle="STRATEGIES AND TECHNIQUES"
                                    title="Discover the tools and tactics we provide"
                                />
                                <Techniques />
                                <About setPlayState={setPlayState} />
                                <Title
                                    subTitle="TOOLS AND RESOURCES"
                                    title="The Ultimate Free Toolkit for AI Prompt Engineering"
                                />
                                <Tools />
                                <Title subTitle="TESTIMONIALS" title="What Student Says" />
                                <Testimonials />
                                <Title subTitle="CONTACT US" title="Get in touch" />
                                <Contact />
                                <Footer />
                            </div>
                            <VideoPlayer playState={playState} setPlayState={setPlayState} />
                        </>
                    }
                />
                <Route path="/technique-1" element={<Technique1 />} />
                <Route path="/technique-2" element={<Technique2 />} />
                <Route path="/technique-3" element={<Technique3 />} />
            </Routes>
        </div>
    );
};

export default App;
