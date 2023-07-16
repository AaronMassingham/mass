import Link from "next/link";
import styled from "styled-components";

const Logo = () => {
	return (
		<Link href="/">
			<Svg viewBox="0 0 100 87">
				<path d="m14.5 53.3-5.7-9.4v6.7h1.6v5.9H0v-5.9h1.6V36.4H0v-5.9h8.4l6.1 10.1 6.1-10.1H29v5.9h-1.6v14.3H29v5.9H18.7v-5.9h1.6V44l-5.8 9.3zM51 30.5v5.9h-1.3l5.8 14.3H57v5.9H46.9v-5.9h.9l-.4-1.2h-7l-.4 1.1h.9v5.9H30.8v-5.9h1.6l5.8-14.3H37v-5.9h14zm-8.8 14h3.3l-1.7-4.1-1.6 4.1zm28 2h-7.7l-4.2-4.1v-7.7l4.2-4.2h11.6l4.2 4.2v5.1h-7.2v-2.6l-.8-.8h-3.8l-.9.8v2.6l.9.8h7.7l4.2 4.2v7.6l-4.2 4.2H62.5l-4.2-4.2v-5h7.2v2.4l.9.8h3.8l.8-.8v-2.5l-.8-.8zm21.8 0h-7.7l-4.2-4.1v-7.7l4.2-4.2h11.6l4.2 4.2v5.1h-7.2v-2.6l-.9-.8h-3.8l-.9.8v2.6l.9.8h7.7l4.2 4.2v7.6l-4.2 4.2H84.2L80 52.4v-5h7.2v2.4l.9.8H92l.8-.8v-2.5l-.8-.8z" />
				<path d="M88.6 26.5C81.8 12 67.1 1.9 50 1.9S18.2 12 11.4 26.5M11.4 60.5C18.2 75 32.9 85.1 50 85.1s31.8-10 38.6-24.5" />
			</Svg>
		</Link>
	);
};

const Svg = styled.svg`
	width: 3rem;
	& > path:first-child {
		fill: #fff;
	}
	& > path:last-child {
		fill: none;
		stroke: var(--primaryColor);
		stroke-width: 2;
		stroke-linecap: round;
		stroke-miterlimit: 10;
	}
`;

export default Logo;
