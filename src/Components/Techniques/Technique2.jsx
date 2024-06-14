import React from 'react';
import './Technique2Page.css';
import technique_icon_2 from '../../assets/technique-icon-2.png';
import { Link } from 'react-router-dom';

const Technique2 = () => {
	return (
		<div className="technique-page">
			<Link to="/">
				<header className="header">
					<h1>Scaffolding</h1>
					<img src={technique_icon_2} alt="technique icon" />
				</header>
			</Link>
			<h2>How it works ?</h2>
			<div className="examples">
				<div className="approach">1. Understanding the Prompt:</div>
				<p>
					Before diving into crafting a response, thoroughly understand what the
					prompt is asking. Break it down into its key components and identify
					any specific requirements or constraints.
				</p>
			</div>
			<div className="examples">
				<div className="approach">2. Brainstorming:</div>
				<p>
					Take some time to brainstorm ideas related to the prompt. Consider
					different angles, perspectives, or arguments you could explore in your
					response. Jot down any relevant points or examples that come to mind.
				</p>
			</div>
			<div className="examples">
				<div className="approach">3. Organizing Your Thoughts:</div>
				<p>
					Once you have a pool of ideas, organize them into a coherent
					structure. Determine the main points you want to cover and decide on
					the order in which you'll present them. Creating an outline can be
					helpful in this stage.
				</p>
			</div>
			<div className="examples">
				<div className="approach">4. Crafting the Response:</div>
				<p>
					With your ideas organized, start writing your response. Pay attention
					to clarity, coherence, and conciseness. Provide supporting evidence or
					examples to bolster your arguments, and ensure that your writing
					addresses all aspects of the prompt.
				</p>
			</div>
			<div className="examples">
				<div className="approach">5. Practice, Practice, Practice:</div>
				<p>
					Mastery comes with practice, so make responding to prompts a regular
					part of your routine. Look for opportunities to engage with a variety
					of prompts across different topics or formats. Analyze your responses
					to identify areas for improvement and continue refining your skills
					over time.
				</p>
			</div>
		</div>
	);
};

export default Technique2;
