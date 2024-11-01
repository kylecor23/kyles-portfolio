import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
function Footer() {
	return (
		<footer className="footer">
			<div className="socialMediaIcons">
				<a
					href="https://github.com/kylecor23"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faGithub} size="2x" />
				</a>
				<a
					href="https://www.linkedin.com/in/kylejcorcoran"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faLinkedin} size="2x" />
				</a>
			</div>
			<p>&copy; 2024 Kyle Cor. All rights reserved.</p>
		</footer>
	);
}

export default Footer;
