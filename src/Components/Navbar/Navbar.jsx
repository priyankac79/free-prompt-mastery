import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
	const [sticky, setSticky] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			window.scrollY > 50 ? setSticky(true) : setSticky(false);
		});
	}, []);

	const [mobileMenu, setMobileMenu] = useState(false);
	const toggleMenu = () => {
		mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
	};

	return (
		<nav className={`container ${sticky ? 'dark-nav' : ''}`}>
			<header>
				<i className="fas fa-graduation-cap"></i>
				<h1>FreePromptMastery</h1>
			</header>
			<ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
				<li>
					<Link to="hero" smooth={true} offset={0} duration={500}>
						Home
					</Link>
				</li>
				<li>
					<Link to="techniques" smooth={true} offset={-260} duration={500}>
						Techniques
					</Link>
				</li>
				<li>
					<Link to="about" smooth={true} offset={-150} duration={500}>
						About
					</Link>
				</li>
				<li>
					<Link to="tools" smooth={true} offset={-260} duration={500}>
						Tools and Resources
					</Link>
				</li>
				<li>
					<Link to="testimonials" smooth={true} offset={-260} duration={500}>
						Testimonials
					</Link>
				</li>
				<li>
					<Link
						to="contact"
						smooth={true}
						offset={-260}
						duration={500}
						className="btn"
					>
						Contact us
					</Link>
				</li>
			</ul>
			<img
				src={menu_icon}
				alt="menu"
				className="menu-icon"
				onClick={toggleMenu}
			/>
		</nav>
	);
};

export default Navbar;
