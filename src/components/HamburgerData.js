import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as IoIcons from 'react-icons/io';
import * as CgIcons from 'react-icons/cg';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
	{
		title: 'Questions',
		path: '/lobby/questions',
		icon: <FaIcons.FaChalkboardTeacher />,
		cName: 'nav-text',
	},
	{
		title: 'Profile',
		path: '/lobby/profile',
		icon: <CgIcons.CgProfile />,
		cName: 'nav-text',
	},
	{
		title: 'Leaderboard',
		path: '/lobby/leaderboard',
		icon: <MdIcons.MdLeaderboard />,
		cName: 'nav-text',
	},
	{
		title: 'Results',
		path: '/lobby/results',
		icon: <FaIcons.FaFortAwesome />,
		cName: 'nav-text',
	},
	{
		title: 'Team',
		path: '/lobby/teams',
		icon: <IoIcons.IoMdPeople />,
		cName: 'nav-text',
	},
	{
		title: 'Developers',
		path: '/lobby/Developers',
		icon: <FaIcons.FaIdBadge />,
		cName: 'nav-text',
	},
	{
		title: 'Logout',
		path: '/',
		icon: <FaIcons.FaSignOutAlt />,
		cName: 'nav-text',
	},
];
