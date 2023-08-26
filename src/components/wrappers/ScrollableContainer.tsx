import React, { useRef, useEffect } from "react";

//Styled Components
import { ScrollableContainer as Container } from "@styles/styled-components/wrappers/wrappers";

const ScrollableContainer = ({ children, data }: Props) => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	useEffect(() => {
		if (data && containerRef.current) {
			containerRef.current.scrollTop = containerRef.current.scrollHeight;
		}
	}, [data]);
	return <Container ref={containerRef}>{children}</Container>;
};

type Props = {
	children: React.ReactNode;
	data?: any;
};
export default ScrollableContainer;
