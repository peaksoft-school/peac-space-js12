import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import scss from './NavBar.module.scss';
import userProfileImg from '../../assets/FirstMan2.png';
import userPublicImg from '../../assets/Ellipse 60.svg';

import {IconMessageCircle} from '@tabler/icons-react'
import {IconHome} from '@tabler/icons-react'
import {IconBell} from '@tabler/icons-react'
import {IconSettings} from '@tabler/icons-react'


const NavBar = () => {
	const [activeItem, setActiveItem] = useState<string>('/');
	const [test, setTest] = useState(false);
	const navigate = useNavigate();

	const navigateMainPage = () => {
		navigate('/main')
		setActiveItem('/main')
	};

	const navigateChat = ()=> {
		navigate('/chatMeg')
		setActiveItem('/chatMeg')
	}
	const navigateNotice = ()=> {
		navigate('/Notice')
		setActiveItem('/Notice')
	}
	const navigateSettings = ()=> {
		navigate('/Settings')
		setActiveItem('/Settings')
	}
	const navigateSide = ()=> {
		navigate('/Side')
		setActiveItem('/Side')
	}
	const navigateMoiPublic = ()=> {
		navigate('/Moi public')
		setActiveItem('/Moi public')
	}

	return (
		<>
			<div className={scss.content}>
				<nav>
					<button className={scss.button_burger} onClick={() => setTest(!test)}>
						burger
					</button>
					<ul className={test ? '' : scss.none}>
						<li onClick={navigateMainPage}>
							<Link
								className={`${activeItem === '/main' ? scss.activePage : scss.activePages} `}
								onClick={() => setActiveItem('/main')}
								to={'/main'}
							>
								<IconHome/>
								<span>Главная</span>
							</Link>
						</li>
						<li onClick={navigateChat}>
							<Link
								className={`${activeItem === '/chatMeg' ? scss.activePage : scss.activePages} `}
								onClick={() => setActiveItem('/chatMeg')}
								to={'/chatMeg'}
							>
								<IconMessageCircle/>
								<span>Чаты</span>
							</Link>
						</li>

						<li onClick={navigateNotice}>
							<Link
								className={`${activeItem === '/Notice' ? scss.activePage : scss.activePages} `}
								onClick={() => setActiveItem('/Notice')}
								to={'/Notice'}
							>
								<IconBell/>
								<span>Уведомления</span>
							</Link>
						</li>
						<li onClick={navigateSettings}>
							<Link
								className={`${activeItem === '/Settings' ? scss.activePage : scss.activePages} `}
								onClick={() => setActiveItem('/Settings')}
								to={'/Settings'}
							>
								<IconSettings/>
								<span>Настройки</span>
							</Link>
						</li>
						<li onClick={navigateSide}>
							<Link
								className={`${activeItem === '/Side' ? scss.activePage : scss.activePages} `}
								onClick={() => setActiveItem('/Side')}
								to={'/Side'}
							>
								<img
									className={`${activeItem === '/Side' && scss.img}`}
									src={userProfileImg}
									alt="foto"
								/>
								<span>Мой профиль</span>
							</Link>
						</li>
						<li onClick={navigateMoiPublic}>
							<Link
								className={`${activeItem === '/Moi public' ? scss.activePage : scss.activePages} `}
								onClick={() => setActiveItem('/Moi public')}
								to={'/Moi public'}
							>
								<img
									className={`${activeItem === '/Moi public' && scss.img}`}
									src={userPublicImg}
									alt="foto"
								/>
								<span>Мои паблики</span>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};
export default NavBar;
