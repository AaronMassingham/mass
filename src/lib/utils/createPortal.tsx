import ReactDOM from "react-dom";

export function createPortal(content: React.ReactNode) {
	if (typeof window === "object") {
		const modalContainer = document.getElementById("modal-container");

		if (!modalContainer) {
			return null;
		}

		return ReactDOM.createPortal(content, modalContainer);
	}

	return null;
}
