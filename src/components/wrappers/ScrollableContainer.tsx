import React, { useRef, useEffect } from "react";
import styled from "styled-components";

type Props = {
	children: React.ReactNode;
	data?: any;
};

const ScrollableContainer = ({ children, data }: Props) => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	useEffect(() => {
		if (data && containerRef.current) {
			containerRef.current.scrollTop = containerRef.current.scrollHeight;
		}
	}, [data]);
	return <Container ref={containerRef}>{children}</Container>;
};

const Container = styled.div`
	height: 100%;
	overflow: scroll;
	position: relative;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export default ScrollableContainer;
