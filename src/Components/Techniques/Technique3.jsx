import React from 'react';
import './Technique3Page.css';
import technique_icon_3 from '../../assets/technique-icon-3.png';
import { Link } from 'react-router-dom';

const Technique3 = () => {
	return (
		<div className="technique-page">
			<Link to="/">
				<header className="header">
					<h1>Open-Ended Questions</h1>
					<img src={technique_icon_3} alt="technique icon" />
				</header>
			</Link>
			<div className="questions">
				<div className="question-type">1. Exploratory Questions</div>
				<p>
					{' '}
					<strong>Example:</strong> "What factors do you believe contribute to
					[phenomenon], and how might they interact with each other?"
				</p>
				<p>
					[These questions prompt respondents to delve into the complexities of
					a topic and explore its various dimensions.]
				</p>
			</div>
			<div className="questions">
				<div className="question-type">2. Reflective Questions:</div>
				<p>
					{' '}
					<strong>Example:</strong> "Can you share a personal experience that
					challenged your perspective on [issue]? How did it shape your views?"
				</p>
				<p>
					[These questions encourage individuals to reflect on their own
					experiences, beliefs, and values, fostering deeper self-awareness and
					insight.]
				</p>
			</div>
			<div className="questions">
				<div className="question-type">3. Hypothetical Scenario Questions</div>
				<p>
					{' '}
					<strong>Example:</strong> "Imagine a world where [scenario]. How do
					you think society would respond, and what ethical considerations might
					arise?"
				</p>
				<p>
					[These questions encourage respondents to engage in hypothetical
					thinking and consider potential implications or outcomes.]
				</p>
			</div>
			<div className="questions">
				<div className="question-type">4. Comparative Questions</div>
				<p>
					{' '}
					<strong>Example:</strong> "In what ways are [concept A] and [concept
					B] similar or different? How do these similarities or differences
					inform our understanding?"
				</p>
				<p>
					[These questions prompt individuals to compare and contrast different
					ideas, theories, or perspectives, stimulating critical analysis and
					synthesis.]
				</p>
			</div>
			<div className="questions">
				<div className="question-type">5. Problem-solving Questions</div>
				<p>
					{' '}
					<strong>Example:</strong> "How would you approach solving [specific
					problem or challenge]? What strategies or resources would you employ?"
				</p>
				<p>
					[These questions invite individuals to express their opinions,
					beliefs, or values, stimulating dialogue and debate.]
				</p>
			</div>
		</div>
	);
};

export default Technique3;
