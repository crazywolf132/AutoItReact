import styled from 'styled-components';

export const Container = styled.header`
	display: flex;
	height: 180px;

	@media (max-width: 480px) {
		flex-direction: column;
	}
`;

export const Welcome = styled.h1`
	flex: 1;
	margin-top: 60px;
	margin-left: 100px;
	font-size: 50px;
	font-weight: bold;
	color: #000;

	@media (max-width: 480px) {
		margin-left: 0px;
		text-align: center;
	}

	@media only screen and (min-width: 480px + 1) and (max-width: 1024px) {
		margin-left: 50px;
	}
`;

export const SearchBox = styled.input`
	margin-top: 63px;
	margin-right: 100px;
	border-radius: 20px;
	border: none;
	outline: none;
	color: #a6a6a6;
	width: 500px;
	height: 50px;
	background: #e8e8e8;
	text-align: center;

	@media (max-width: 480px) {
		width: calc(100% - 32px);
		margin-top: 0px;
		margin-bottom: 32px;
		padding: 16px;
	}

	@media only screen and (min-width: 480px + 1) and (max-width: 1024px) {
		margin-right: 50px;
		margin-left: 75px;
	}
`;
