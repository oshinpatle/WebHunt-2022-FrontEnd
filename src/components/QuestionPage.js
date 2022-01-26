import React from 'react';
import '../css/QuestionPage.css';
import Navbar from './HamburgerMenu';

function QuestionPage() {
	return (
		<>
			<Navbar />
			<div className='outerBoundary'>
				<header className='offset-1 col-10 hero-header'>
					<h1 className='NameColor'>Welcome, XYZ!</h1>
				</header>
				<div className='col-10 offset-1 main-content'>
					<div className='item-image'>
						<img
							src={process.env.PUBLIC_URL + '/logo512.png'}
							height='350px'
						/>
					</div>
				</div>
				<div className='InputField'>
					<input
						type='text'
						className='AnswerBox'
						name='Answer'
						placeholder='Your answer goes here...'
						required
					/>
				</div>
				<div className='AnswerButtons'>
					<button className='Answers'>Answers here</button>
					<button className='Submit'>Submit</button>
				</div>
				<div className='wh-circle1'>1</div>
				<div className='wh-circle2'>2</div>
				<div className='wh-circle3'>3</div>
				<div className='wh-circle4'>4</div>
			</div>
		</>
	);
}

export default QuestionPage;
