// src/components/CanvasBackground.jsx
import React, { useEffect } from "react";

const CanvasBackground = () => {
	useEffect(() => {
		console.log("CanvasBackground component mounted");

		// Create and configure canvas
		const canvas = document.createElement("canvas");
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		canvas.style.position = "absolute";
		canvas.style.top = "0";
		canvas.style.left = "0";
		canvas.style.zIndex = "-1"; // Ensure it's behind the content
		canvas.style.pointerEvents = "none"; // Avoid interaction
		canvas.style.backgroundColor = "rgba(0, 0, 0, 0.1)"; // Give a light background for visibility
		document.querySelector(".homeLanding").appendChild(canvas);
		const ctx = canvas.getContext("2d");

		// Simple drawing function for testing
		const drawCircle = () => {
			console.log("Drawing a test circle"); // Check if this logs

			// Clear the canvas
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Draw a simple circle
			ctx.beginPath();
			ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, Math.PI * 2);
			ctx.fillStyle = "rgba(0, 150, 255, 0.5)";
			ctx.fill();
			ctx.closePath();

			window.requestAnimationFrame(drawCircle); // Keep drawing for animation
		};

		drawCircle(); // Start the drawing loop

		// Cleanup on component unmount
		return () => {
			console.log("Cleaning up canvas background");
			document.querySelector(".homeLanding").removeChild(canvas);
		};
	}, []);

	return null; // This component does not render anything directly
};

export default CanvasBackground;
