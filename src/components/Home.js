import React from 'react';
import '../css/home.css';
import LandingPage from '../containers/landingPage/index';

function Home() {
	return (
		<>
			<div id='home'>
				<a href='/signin'>
					<input type='submit' value='Login' />
				</a>
				<span></span>
				<a href='/signup'>
					<input type='submit' value='Signup' />
				</a>
			</div>
			<LandingPage />
		</>
	);
}

export default Home;
