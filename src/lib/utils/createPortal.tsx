import ReactDOM from "react-dom";
import { ReactNode } from "react";

export function createPortal(content: ReactNode) {
	if (typeof window === "object") {
		const modalContainer = document.getElementById("modal-container");

		if (!modalContainer) {
			return null;
		}

		return ReactDOM.createPortal(content, modalContainer);
	}

	return null;
}
