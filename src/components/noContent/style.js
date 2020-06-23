import styled from 'styled-components';

export const Message = styled.h1`
	color: #7f7f7f;
	font-size: 35px;
	font-weight: bold;
`;

export const Container = styled.main`
	display: flex;
	background-color: #f5f5f5;
	width: 80%;
	margin: 0 auto;
	height: 500px;
	justify-content: center;
	align-items: center;
	border-radius: 17px;
	margin-bottom: 50px;

	@media (max-width: 480px) {
		width: 100%;
		text-align: center;
		border-radius: 0px;
		margin-top: 32px;
	}

	@media only screen and (min-width: 481px) and (max-width: 1024px) {
		width: 90%;
	}
`;
