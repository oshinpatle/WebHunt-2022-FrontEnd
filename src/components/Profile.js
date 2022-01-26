import React from 'react';
import Navbar from './HamburgerMenu';
import '../css/profile.css';

function Profile() {
	return (
		<>
			<Navbar />
			<div className='wh-profile'>
				<div className='wh-profile-pic'>
					<img
						src={require('../images/user.png')}
						alt='profile-pic'
					/>
				</div>
				<form action='#'>
					<table className='wh-entries'>
						<tr>
							<td>
								<lable htmlFor='username'>User Name</lable>
							</td>
							<td>
								<input
									title='disabled'
									className='wh-disabled'
									type='text'
									id='username'
									name='username'
									value='Thor'
									disabled
								/>
							</td>
						</tr>
						<tr>
							<td>
								<lable htmlFor='Roll Number'>Roll Number</lable>
							</td>
							<td>
								<input
									type='number'
									id='roll-number'
									name='roll-number'
									value='12345678'
									required
								/>
							</td>
						</tr>
						<tr>
							<td>
								<lable htmlFor='college'>College</lable>
							</td>
							<td>
								<input
									type='text'
									id='college'
									name='college'
									value='Nit kkr'
								/>
							</td>
						</tr>
						<tr>
							<td>
								<lable htmlFor='phone-number'>
									Phone Number
								</lable>
							</td>
							<td>
								<input
									type='number'
									id='phone-number'
									name='phone-number'
									value='9876543210'
								/>
							</td>
						</tr>
						<tr>
							<td>
								{' '}
								<lable htmlFor='team-name'>Team Name</lable>
							</td>
							<td>
								<input
									title='disabled'
									className='wh-disabled'
									type='text'
									id='team-name'
									name='team-name'
									value='Avengers'
									disabled
								/>
							</td>
						</tr>
						<tr>
							<td>
								{' '}
								<lable htmlFor='team-code'>Team Code</lable>
							</td>
							<td>
								<input
									title='disabled'
									className='wh-disabled'
									type='text'
									id='team-code'
									name='team-code'
									value='kfhlaksldf'
									disabled
								/>
							</td>
						</tr>
					</table>
					<input
						className='.wh-submit'
						type='submit'
						value='Save Changes'
					/>
				</form>
				<div className='wh-circle'></div>
			</div>
		</>
	);
}

export default Profile;
