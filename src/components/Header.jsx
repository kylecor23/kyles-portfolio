import React from "react";

function Header({ visible }) {
	return (
		<header className={`header ${visible ? "visible" : "hidden"}`}>
			<nav className="nav">
				<ul>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#projects">Projects</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
