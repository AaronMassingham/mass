import { useEffect } from "react";

type UseConfirmationAlertArgs = {
	hasDataInGlobalState: boolean;
};

const useConfirmationAlert = (hasDataInGlobalState: UseConfirmationAlertArgs) => {
	useEffect(() => {
		const handleBeforeUnload = (event: BeforeUnloadEvent) => {
			if (hasDataInGlobalState) {
				event.preventDefault();
				confirm("you sure?");
			}
		};

		return () => {
			window.addEventListener("beforeunload", handleBeforeUnload);
		};
	}, [hasDataInGlobalState]);
};

export default useConfirmationAlert;
