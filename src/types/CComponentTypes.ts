import { ComponentPropsWithoutRef } from "react";

export interface InputElementType extends ComponentPropsWithoutRef<"input"> {
	label?: string;
	value?: string | number;
	tag?: string;
	hasError?: boolean;
}

export type DialogType = {
	children: React.ReactNode;
	showCloseBtnCondition: boolean;
	showDialog: boolean;
	text?: string;
	smallText?: string;
	hasOtherEvent?: () => void;
};

export type SeperatorType = {
	direction: "up" | "down";
};

//Buttons

type formButtonVariants = "submit" | "reset" | "button";
type buttonVariants = "start" | "continue" | "add" | "loading";

export type DefaultButtonType = {
	text: string | React.ReactNode;
	isLoading?: boolean;
	buttonType?: formButtonVariants;
	fullw?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export type FancyButtonType = {
	icon: React.ReactNode;
	text: buttonVariants;
};

export type RotatingTextType = {
	variant: buttonVariants;
};

export type SlideButtonType = {
	text: string;
	onDragEnd: () => void;
};

//No Data

type Message = {
	type: "message";
	message: string;
	smalltext?: string;
	hasIcon?: never;
};

type Image = {
	type: "image";
	hasIcon: React.ReactNode;
	message?: never;
	smalltext?: never;
};

export type NoDataType = Message | Image;

//Wrappers

export type ScrollableWrapperType = {
	children: React.ReactNode;
	data?: any;
};

export type WrapperType = {
	children: React.ReactNode;
	variant: "main" | "pinned";
	hasSibling?: boolean;
};
