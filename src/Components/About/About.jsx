import React from 'react';
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About = ({ setPlayState }) => {
	return (
		<div className="about">
			<div className="about-left">
				<img src={about_img} alt="about img" className="about-img" />
				<img
					src={play_icon}
					alt="play icon"
					className="play-icon"
					onClick={() => {
						setPlayState(true);
					}}
				/>
			</div>
			<div className="about-right">
				<h3>ABOUT OUR PROVEN APPROACHES</h3>
				<h2>Unveiling Our Tried-and-Tested Methods</h2>

				<p className="task">
					<strong>Task:</strong> Writing the cover letter
				</p>
				<p className="prompt">
					<strong>Prompt:</strong> "Based on the job description for [job title]
					at [company], generate a cover letter that highlights my relevant
					experience, skills, and why I am passionate about working for [role]."
				</p>

				<p className="task">
					<strong>Task:</strong> Code Debugging
				</p>
				<p className="prompt">
					<strong>Prompt:</strong> "Identify and fix bugs in the following code
					snippet: [Input your code snippet here]. Provide an explanation of the
					solution."
				</p>

				<p className="task">
					<strong>Task:</strong> Enhancing Your LinkedIn Profile
				</p>
				<p className="prompt">
					<strong>Prompt:</strong> "Could you review my profile and recommend
					optimizations tailored to meet [specific goals]?"
				</p>
			</div>
		</div>
	);
};

export default About;
