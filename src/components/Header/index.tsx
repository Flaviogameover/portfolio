import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { scrollTo, showDropdown } from '../utils/functions';

const Header: () => JSX.Element = () => (
	<header id="header">
		<Link to="/" className="logo">
			<h1>{'<Portfólio>'}</h1>
		</Link>
		<nav className="nav-desktop">
			<ul>
				<li>
					<button type="button" onClick={() => scrollTo('projects')}>
						Projetos
					</button>
				</li>
				<li>
					<button type="button" onClick={() => scrollTo('skills')}>
						Habilidades
					</button>
				</li>
				<li>
					<button type="button" onClick={() => scrollTo('contact')}>
						Contato
					</button>
				</li>
			</ul>
		</nav>
		<nav className="nav-mobile">
			<button type="button" onClick={showDropdown}>
				<GiHamburgerMenu />
			</button>
			<div
				id="dropdown"
				className="nav-dropdown"
				style={{ display: 'none' }}
			>
				<ul>
					<li>
						<button
							type="button"
							onClick={() => scrollTo('projects')}
						>
							Projetos
						</button>
					</li>
					<li>
						<button
							type="button"
							onClick={() => scrollTo('skills')}
						>
							Habilidades
						</button>
					</li>
					<li>
						<button
							type="button"
							onClick={() => scrollTo('contact')}
						>
							Contato
						</button>
					</li>
				</ul>
			</div>
		</nav>
	</header>
);

export default Header;
