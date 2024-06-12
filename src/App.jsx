import React, { useState } from 'react';
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

const App = () => {
	const [playState, setPlayState] = useState(false);

	return (
		<div>
			<Navbar />
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
		</div>
	);
};

export default App;
