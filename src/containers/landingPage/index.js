import './landingPage.css';
import React from 'react';

import SphereAnimation from '../../components/sphereAnimation';

function LandingPage() {
	return (
		<div className='landing-page'>
			<SphereAnimation />
			<h1 className='heading'>Web Hunt</h1>
		</div>
	);
}

export default LandingPage;
