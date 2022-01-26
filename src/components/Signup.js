import React from 'react';
import '../css/signup.css';

function Signup() {
	return (
		<div className='wh-body'>
			<h2>Create Your Account </h2>
			<form action='#'>
				<div className='wh-form-elements'>
					<input
						type='text'
						name='username'
						placeholder='User name'
						required
					/>
					<input
						type='password'
						name='password'
						placeholder='Password'
						required
					/>
					<input
						type='password'
						name='re-password'
						placeholder='Reenter Password'
						required
					/>
					<button type='submit'>Create Account</button>
				</div>
			</form>
			<hr className='wh-line' />
			<button type='submit' className='wh-sign-up'>
				<span>
					<img src='https://img.icons8.com/color/25/000000/google-logo.png' />
					Sign up with Google
				</span>
			</button>
		</div>
	);
}

export default Signup;
