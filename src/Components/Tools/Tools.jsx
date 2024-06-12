import React, { useEffect, useRef } from 'react';
import './Tools.css';

const toolsList = [
	{
		title: "OpenAI's GPT-3 Playground",
		description:
			'Experiment with prompt variations in an interactive environment. It allows for experimentation with different settings.',
	},
	{
		title: 'AI Draw',
		description:
			'Transform your sketches into vibrant images, breathing life into your creative ideas.',
	},
	{
		title: 'Kaggle Notebooks',
		description:
			'Learn from and share prompt experiments with the data science community.',
	},
	{
		title: "Reddit's r/LanguageTechnology",
		description:
			'Discuss and get feedback on prompts from a tech-savvy community. It will help you.',
	},
	{
		title: 'AI Dungeon',
		description:
			'Practice creative prompt crafting in an interactive storytelling game.',
	},
	{
		title: 'Coursera and edX Free Courses',
		description:
			'Take introductory AI and NLP courses to understand foundational concepts.',
	},
];

const Tools = () => {
	const cardsRef = useRef([]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('card-visible');
					} else {
						entry.target.classList.remove('card-visible');
					}
				});
			},
			{
				threshold: 0.4,
			}
		);

		cardsRef.current.forEach((card) => {
			if (card) {
				observer.observe(card);
			}
		});

		return () => {
			if (cardsRef.current) {
				cardsRef.current.forEach((card) => {
					if (card) {
						observer.unobserve(card);
					}
				});
			}
		};
	}, []);

	return (
		<div className="tools">
			{toolsList.map((card, index) => (
				<div
					key={index}
					className="card"
					ref={(el) => (cardsRef.current[index] = el)}
				>
					<div className="card-header">{card.title}</div>
					<div className="card-content">
						<p>{card.description}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Tools;
