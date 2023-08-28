import React, { useRef, useEffect } from "react";

//Styled Components
import { ScrollableContainer as Container } from "@styles/styled-components/wrappers/wrappers";

//Types
import { ScrollableWrapperType } from "@typescriptTypes/CComponentTypes";

const ScrollableContainer = ({ children, data }: ScrollableWrapperType) => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	useEffect(() => {
		if (data && containerRef.current) {
			containerRef.current.scrollTop = containerRef.current.scrollHeight;
		}
	}, [data]);
	return <Container ref={containerRef}>{children}</Container>;
};

export default ScrollableContainer;
