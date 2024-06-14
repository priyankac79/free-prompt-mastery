import React from 'react';
import './Technique1Page.css';
import technique_icon_1 from '../../assets/technique-icon-1.png';
import { Link } from 'react-router-dom';

const Technique1 = () => {
	return (
		<div className="technique-page">
			<Link to="/">
				<header className="header">
					<h1>Clear and Specific Instructions</h1>
					<img src={technique_icon_1} alt="technique icon" />
				</header>
			</Link>
			<div className="example-prompt">
				<p>
					<strong>1. Generate a Blog Post:</strong>
				</p>
				<p className="que">
					Write a blog post about the benefits of meditation.
				</p>
				<p className="instruction">
					<strong>Specific Instruction: </strong>"Create a 600-word blog post
					that discusses at least three benefits of meditation. Include
					scientific studies or statistics to support your claims."
				</p>
			</div>
			<div className="example-prompt">
				<p>
					<strong>2. Create a Social Media Campaign:</strong>
				</p>
				<p className="que">
					Develop a social media campaign to promote eco-friendly products.
				</p>
				<p className="instruction">
					<strong>Specific Instruction:</strong> "Design a series of five social
					media posts for Instagram and Facebook. Each post should highlight a
					different eco-friendly product, include a high-quality image, and a
					brief description."
				</p>
			</div>
			<div className="example-prompt">
				<p>
					<strong>3. Design an Infographic:</strong>
				</p>
				<p className="que">
					Create an infographic about the importance of sleep.
				</p>
				<p className="instruction">
					<strong>Specific Instruction:</strong> "Use eye-catching graphics and
					a color scheme that is easy on the eyes. Ensure that the text is
					concise and that each point is accompanied by a relevant icon or
					image."
				</p>
			</div>
			<div className="example-prompt">
				<p>
					<strong>4. Develop a Lesson Plan:</strong>
				</p>
				<p className="que">
					Create a lesson plan on the water cycle for 5th-grade students.
				</p>
				<p className="instruction">
					<strong>Specific Instruction:</strong> "Design a 45-minute lesson plan
					that includes a clear objective, an engaging introduction, a detailed
					explanation of the water cycle, and a hands-on activity where students
					can create their own mini water cycle."
				</p>
			</div>
			<div className="example-prompt">
				<p>
					<strong>5. Craft an Elevator Pitch:</strong>
				</p>
				<p className="que">
					Write an elevator pitch for a new app that helps people find
					volunteering opportunities.
				</p>
				<p className="instruction">
					<strong>Specific Instruction:</strong> "Develop a 60-second elevator
					pitch that includes the problem your app solves, its main features,
					and the benefits to the user."
				</p>
			</div>
		</div>
	);
};

export default Technique1;
