export interface HeadingProps {
	$variant: "default" | "plain";
}

export interface SeperatorProps {
	$direction: string;
}

export interface UserImageProps {
	$width: number;
}

export interface DefaultButtonProps {
	$fixWidth?: boolean;
	$fill?: boolean;
}

export interface SvgProps {
	$spacing: number;
	$sizing: number;
}

export interface WrapperProps {
	$variant: "main" | "pinned";
	$hasSibling?: boolean;
}

export interface CompleteSetsListProps {
	$hasSets: boolean;
}
