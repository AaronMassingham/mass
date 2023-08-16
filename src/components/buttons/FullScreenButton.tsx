import React, { useState } from "react";

const FullScreenButton = () => {
	const [isFullScreen, setIsFullScreen] = useState(false);

	const toggleFullScreen = () => {
		if (!isFullScreen) {
			if (document.documentElement.requestFullscreen) {
				document.documentElement.requestFullscreen();
			}
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			}
		}

		setIsFullScreen(!isFullScreen);
	};

	return (
		<button onClick={toggleFullScreen}>
			{isFullScreen ? "Exit Fullscreen" : "Enter Fullscreen"}
		</button>
	);
};

export default FullScreenButton;
