import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCss3Alt,
	faHtml5,
	faJs,
	faReact,
	faNodeJs,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Home() {
	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			console.log(`Scrolling to section: ${sectionId}`);
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	function toggleExpand(e) {
		const description = e.currentTarget;
		description.classList.toggle("expanded");

		if (description.classList.contains("expanded")) {
			document.addEventListener("click", handleOutsideClick);
		} else {
			document.removeEventListener("click", handleOutsideClick);
		}
	}

	function handleOutsideClick(e) {
		const expandedDescription = document.querySelector(
			".projectDescription.expanded"
		);

		if (expandedDescription && !expandedDescription.contains(e.target)) {
			expandedDescription.classList.remove("expanded");
			document.removeEventListener("click", handleOutsideClick);
		}
	}

	return (
		<div className="home">
			<section className="homeLanding">
				<h1>Hi, I'm Kyle Corcoran, </h1>
				<h1>a passionate web developer</h1>
				<button className="button" onClick={() => scrollToSection("about")}>
					View My Work
				</button>
				{/* SVG Swoop Background */}
				<svg viewBox="0 0 1440 320" className="swoop-svg">
					<path
						fill="#edf6f9"
						fillOpacity="1"
						d="M0,160 C300,50 1100,270 1440,120 L1440,320 L0,320 Z"
					></path>
				</svg>
			</section>

			{/* About Section */}
			<section id="about" className="aboutSection">
				<h2>About Me</h2>
				<p>
					With experience in creating responsive and dynamic websites, my focus
					is on delivering high-quality projects and continuously learning new
					technologies
				</p>
				{/* Technologies Section */}
				<h3>Technologies I Use</h3>
				<div className="technologies">
					<div className="technology">
						<FontAwesomeIcon icon={faHtml5} size="3x" className="icon-html" />
						<p>HTML</p>
					</div>
					<div className="technology">
						<FontAwesomeIcon icon={faCss3Alt} size="3x" className="icon-css" />
						<p>CSS</p>
					</div>
					<div className="technology">
						<FontAwesomeIcon icon={faJs} size="3x" className="icon-js" />
						<p>JavaScript</p>
					</div>
					<div className="technology">
						<FontAwesomeIcon icon={faReact} size="3x" className="icon-react" />
						<p>React</p>
					</div>
					<div className="technology">
						<FontAwesomeIcon icon={faNodeJs} size="3x" className="icon-node" />
						<p>Node.js</p>
					</div>
				</div>
				<p className="learning">
					Currently learning: <strong>Node.js</strong>
				</p>
			</section>

			{/* Projects Section */}
			<section id="projects" className="projectsSection">
				<h2>Projects</h2>
				<div className="projectsList">
					<div className="project">
						<div className="projectName">Ez-Workout</div>
						<div className="projectImage">
							<img src="/EZ-Workout-Pic.png" alt="Home Page of EZ-Workout" />
						</div>
						<div className="projectDescription" onClick={toggleExpand}>
							<p>
								A web application that helps you plan and track your workouts
								efficiently, providing a user-friendly interface and detailed
								analytics.
							</p>
							<button
								onClick={() =>
									window.open(
										"https://kylecor23.github.io/Ez-Workout/",
										"_blank"
									)
								}
							>
								Check It Out
							</button>
							<button
								onClick={() =>
									window.open(
										"https://github.com/kylecor23/Ez-Workout?tab=readme-ov-file",
										"_blank"
									)
								}
							>
								More Info
							</button>
						</div>
					</div>
					<div className="project">
						<div className="projectName">Fit Monsters</div>
						<div className="projectImage">
							<img
								src="/Fit-Monsters-Dashboard.png"
								alt="Home Page of Fit Monsters"
							/>
						</div>
						<div className="projectDescription" onClick={toggleExpand}>
							<p>
								Fit Monsters is a fitness tracker for kids, making exercise fun
								and engaging through a gamified approach with personalized
								avatars.
							</p>
							<button
								onClick={() =>
									window.open(
										"https://github.com/kylecor23/Fit-Monsters",
										"_blank"
									)
								}
							>
								More Info
							</button>
						</div>
					</div>
					<div className="project">
						<div className="projectName">Janelle Williams Counselling</div>
						<div className="projectImage">
							<img
								src="/logo192.png"
								alt="Janelle Williams Counselling website"
							/>
						</div>

						<div className="projectDescription" onClick={toggleExpand}>
							<p>
								Professional counseling services for individuals and families,
								with a focus on mental health and well-being.
							</p>
							<button
								onClick={() =>
									window.open(
										"https://janellewilliamscounselling.com/",
										"_blank"
									)
								}
							>
								Check it out
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="contactSection">
				<h2>Contact Me</h2>
				<p>
					You can contact me by sending an email or reaching out to me on
					linkedin
				</p>
				<div className="contactIcons">
					<a href="mailto:kylecorcoran9494@gmail.com">
						<FontAwesomeIcon
							icon={faEnvelope}
							size="2x"
							className="icon-faEnvelope"
						/>
					</a>
					<br />

					<a
						href="https://www.linkedin.com/in/kylejcorcoran"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon
							icon={faLinkedin}
							size="2x"
							className="icon-faLinkedin"
						/>
					</a>
				</div>
			</section>
		</div>
	);
}

export default Home;
