import { useState, useEffect } from "react";

import styled from "styled-components";

type Props = {
	message: string;
};

const InputError = ({ message }: Props) => {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setVisible(false);
		}, 3000);

		return () => clearTimeout(timeout);
	}, []);

	return visible ? <Container>{message}</Container> : null;
};

const Container = styled.div`
	position: fixed;
	bottom: 2rem;
	right: 2rem;
	left: 2rem;
	padding: 0.5rem;
	background: var(--errorColor);
	border-radius: 5rem;
	text-align: center;
`;

export default InputError;
