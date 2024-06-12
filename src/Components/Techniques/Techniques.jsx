import React from 'react';
import './Techniques.css';
import technique_1 from '../../assets/technique-1.png';
import technique_2 from '../../assets/technique-2.png';
import technique_3 from '../../assets/technique-3.png';
import technique_icon_1 from '../../assets/technique-icon-1.png';
import technique_icon_2 from '../../assets/technique-icon-2.png';
import technique_icon_3 from '../../assets/technique-icon-3.png';

const Techniques = () => {
	return (
		<div className="techniques">
			<div className="technique">
				<img src={technique_1} alt="technique_1" />
				<div className="caption">
					<img src={technique_icon_1} alt="technique icon 1" />
					<p>Clear and Specific Instructions</p>
				</div>
			</div>
			<div className="technique">
				<img src={technique_2} alt="technique_2" />
				<div className="caption">
					<img src={technique_icon_2} alt="technique icon 2" />
					<p>Scaffolding</p>
				</div>
			</div>
			<div className="technique">
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
