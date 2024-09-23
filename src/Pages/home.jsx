// src/components/Home.jsx
import React, { useState } from "react";
import CanvasBackground from "../components/CanvasBackground";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCss3Alt,
	faHtml5,
	faJs,
	faReact,
	faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
	const [showCanvas, setShowCanvas] = useState(false);

	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			console.log(`Scrolling to section: ${sectionId}`);
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="home">
			<section className="homeLanding">
				<h1>Hi, I'm Kyle Corcoran, a passionate web developer</h1>
				{/* Toggle canvas background on button hover */}
				<button
					onMouseEnter={() => {
						console.log("Mouse entered button, showing canvas");
						setShowCanvas(true);
					}}
					onMouseLeave={() => {
						console.log("Mouse left button, hiding canvas");
						setShowCanvas(false);
					}}
					onClick={() => scrollToSection("about")}
				>
					View My Work
				</button>
				{showCanvas && <CanvasBackground />}{" "}
				{/* Conditionally render the canvas background */}
			</section>

			{/* About Section */}
			<section id="about" className="aboutSection">
				<h2>About Me</h2>
				<p>
					With experience in creating responsive and dynamic websites. My focus
					is on delivering high-quality projects and continuously learning new
					technologies.
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
						<div className="projectDescription">
							<p>
								A web application that helps you plan and track your workouts
								efficiently, providing a user-friendly interface and detailed
								analytics.
							</p>
							<button>More Info</button>
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
						<div className="projectDescription">
							<p>
								Fit Monsters is a fitness tracker for kids, making exercise fun
								and engaging through a gamified approach with personalized
								avatars.
							</p>
							<button>More Info</button>
						</div>
					</div>
					<div className="project">
						<div className="projectName">Janelle Williams Counselling</div>
						<div className="projectImage">
							<img
								src="/path/to/image.jpg"
								alt="Janelle Williams Counselling website"
							/>
						</div>

						<div className="projectDescription">
							<p>
								Professional counseling services for individuals and families,
								with a focus on mental health and well-being.
							</p>
							<button>Check it out</button>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="contactSection">
				<h2>Contact Me</h2>
				<p>
					Feel free to reach out via email at{" "}
					<a href="mailto:kylecor@example.com">kylecor@example.com</a>
					or connect with me on{" "}
					<a
						href="https://linkedin.com/in/kylecor"
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn
					</a>
					.
				</p>
			</section>

			<Footer />
		</div>
	);
}

export default Home;
