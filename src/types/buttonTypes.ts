export type ButtonProps = {
	text: string | React.ReactNode;
	isLoading?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	buttonType?: "submit" | "reset" | "button";
	fullw?: boolean;
};
