import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./Pages/home";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	const [headerVisible, setHeaderVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const homeLandingHeight =
				document.querySelector(".homeLanding").offsetHeight;
			if (window.scrollY > homeLandingHeight) {
				setHeaderVisible(true);
			} else {
				setHeaderVisible(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="App">
			<Header visible={headerVisible} />
			<Home />
			<Footer />
		</div>
	);
}

export default App;
