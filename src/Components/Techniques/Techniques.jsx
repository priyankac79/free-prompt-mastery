import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Techniques.css';
import technique_1 from '../../assets/technique-1.png';
import technique_2 from '../../assets/technique-2.png';
import technique_3 from '../../assets/technique-3.png';
import technique_icon_1 from '../../assets/technique-icon-1.png';
import technique_icon_2 from '../../assets/technique-icon-2.png';
import technique_icon_3 from '../../assets/technique-icon-3.png';

const Techniques = () => {
	const navigate = useNavigate();

	const handleTechniqueClick = (technique) => {
		navigate(`/technique-${technique}`);
	};

	return (
		<div className="techniques">
			<div className="technique" onClick={() => handleTechniqueClick(1)}>
				<img src={technique_1} alt="technique_1" />
				<div className="caption">
					<img src={technique_icon_1} alt="technique icon 1" />
					<p>Clear and Specific Instructions</p>
				</div>
			</div>
			<div className="technique" onClick={() => handleTechniqueClick(2)}>
				<img src={technique_2} alt="technique_2" />
				<div className="caption">
					<img src={technique_icon_2} alt="technique icon 2" />
					<p>Scaffolding</p>
				</div>
			</div>
			<div className="technique" onClick={() => handleTechniqueClick(3)}>
				<img src={technique_3} alt="technique_3" />
				<div className="caption">
					<img src={technique_icon_3} alt="technique icon 3" />
					<p>Open-Ended Questions</p>
				</div>
			</div>
		</div>
	);
};

export default Techniques;