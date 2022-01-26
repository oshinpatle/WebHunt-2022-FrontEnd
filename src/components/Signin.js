import React from 'react';
import '../css/signin.css';

function Signin() {
	return (
		<div className='wh-body'>
			<h2>Login to Your Account</h2>
			<div className='wh-horizontal'>
				<span>Don&apos;t have an account?</span>
				<a href='sign up/index.html'>
					<input type='submit' value='Sign up' />
				</a>
			</div>
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
					<button type='submit'>Login to your account</button>
				</div>
			</form>
			<a href='#'>Forgot Password?</a>
			<div>
				<hr className='wh-line' />
				<button type='submit' className='wh-sign-in'>
					<span>
						<img src='https://img.icons8.com/color/25/000000/google-logo.png' />
						Sign in with Google
					</span>
				</button>
			</div>
		</div>
	);
}

export default Signin;
