import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonials = () => {
	const slider = useRef();
	let tx = 0;

	const slideForward = () => {
		if (tx > -50) {
			tx -= 25;
		}
		slider.current.style.transform = `translateX(${tx}%)`;
	};

	const slideBackward = () => {
		if (tx < 0) {
			tx += 25;
		}
		slider.current.style.transform = `translateX(${tx}%)`;
	};

	return (
		<div className="testimonials">
			<img
				src={next_icon}
				alt="next btn"
				className="next-btn"
				onClick={slideForward}
			/>
			<img
				src={back_icon}
				alt="back btn"
				className="back-btn"
				onClick={slideBackward}
			/>
			<div className="slider">
				<ul ref={slider}>
					<li>
						<div className="slide">
							<div className="user-info">
								<img src={user_1} alt="User 1" />
								<div>
									<h3>Jane Smith</h3>
									<span>Los Angeles, USA</span>
								</div>
							</div>
							<p>
								"I recently discovered the power of free prompt mastery and it
								has revolutionized my workflow. Thanks to this technique, I've
								been able to generate creative content effortlessly!"
							</p>{' '}
						</div>
					</li>
					<li>
						<div className="slide">
							<div className="user-info">
								<img src={user_2} alt="User 2" />
								<div>
									<h3>John Doe</h3>
									<span>London, UK</span>
								</div>
							</div>
							<p>
								"As someone who's passionate about writing, free prompt mastery
								has been a game-changer. It's a fantastic tool for sparking
								creativity and generating new and trending ideas."
							</p>{' '}
						</div>
					</li>
					<li>
						<div className="slide">
							<div className="user-info">
								<img src={user_3} alt="User 3" />
								<div>
									<h3>Alice Johnson</h3>
									<span>Toronto, Canada</span>
								</div>
							</div>
							<p>
								"Free prompt mastery has allowed me to explore new horizons in
								my writing journey. The ability to generate prompts effortlessly
								has enhanced my productivity and creativity."
							</p>{' '}
						</div>
					</li>
					<li>
						<div className="slide">
							<div className="user-info">
								<img src={user_4} alt="User 4" />
								<div>
									<h3>Michael Brown</h3>
									<span>Sydney, Australia</span>
								</div>
							</div>
							<p>
								"I've been using free prompt mastery techniques for a while now,
								and it's been an invaluable tool in my writing arsenal. Highly
								recommended for anyone looking to boost their creativity!"
							</p>{' '}
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Testimonials;
