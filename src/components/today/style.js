import styled from 'styled-components';

export const Container = styled.div`
	flex: 3;
	margin-top: 20px;
	background-color: #ffffff;
	width: 325px;
	height: 247px;
	border-radius: 26px;
	box-shadow: 5px 10px 50px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;

	@media only screen and (min-width: 481px) and (max-width: 1024px) {
		flex: 1;
		width: calc(100% - 210px);
		height: 25%;
	}
`;

export const Group = styled.div`
	display: flex;
`;

export const Temperature = styled.span`
	flex: 9;
	font-size: 60px;
	font-weight: bold;
	color: #000000;
	margin-top: 20px;
	margin-left: 50px;
	margin-right: 0px;
`;

export const Info = styled.span`
	font-size: 20px;
	font-weight: bold;
	color: #000;
	margin-left: 50px;
	margin-top: 20px;
	margin-right: 50px;
`;

export const Keyword = styled.span`
	font-weight: bold;
	font-size: 20px;
	color: #0076ff;
`;

export const Location = styled.span`
	margin: 30px 50px 40px 50px;
	font-size: 25px;
	color: #7f7f7f;
	text-align: center;
	font-weight: bold;

	@media only screen and (min-width: 481px) and (max-width: 1024px) {
		margin: 0px 50px 40px 50px;
	}
`;

export const Icon = styled.i`
	margin-top: 30px;
	margin-right: 60px;
	margin-left: 25px;
	font-size: 50px;
`;
