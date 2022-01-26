import './App.css';
import React from 'react';
import Signin from './components/Signin';
import Signup from './components/Signup';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import QuestionPage from './components/QuestionPage';
import Lobby from './components/Lobby';
import Teams from './components/Teams';
import Profile from './components/Profile';
import Leaderboard from './components/Leaderboard';
import Results from './components/Results';
import Developers from './components/Devs';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/signin' element={<Signin />}></Route>
				<Route path='/signup' element={<Signup />}></Route>
				<Route path='lobby' element={<Lobby />}></Route>
				<Route
					path='lobby/questions'
					element={<QuestionPage />}></Route>
				<Route path='lobby/teams' element={<Teams />}></Route>
				<Route path='lobby/profile' element={<Profile />}></Route>
				<Route
					path='lobby/leaderboard'
					element={<Leaderboard />}></Route>
				<Route path='lobby/results' element={<Results />}></Route>
				<Route path='lobby/Developers' element={<Developers />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
