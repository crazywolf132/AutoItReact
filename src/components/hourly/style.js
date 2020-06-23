import styled from 'styled-components';

export const Container = styled.div`
	flex: 7;
	background-color: #f8f8f8;
	display: flex;
	flex-direction: column;
	width: calc(100% - 210px);
	margin: 20px 105px 20px 40px;
	height: 247px;
	border-radius: 20px;
	box-shadow: 5px 10px 50px rgba(0, 0, 0, 0.1);
	justify-content: center;
	align-items: center;

	@media (max-width: 480px) {
		display: none;
	}

	@media only screen and (min-width: 481px) and (max-width: 1024px) {
		margin: 20px 0px;
	}
`;

export const Title = styled.span`
	margin: 25px;
	margin-bottom: 0px;
	font-size: 20px;
	font-weight: bold;
	color: #7f7f7f;
	text-align: center;
`;

export const Scrollable = styled.div`
	display: flex;
	overflow-x: auto;
	max-width: calc(100% - 100px);

	@media only screen and (min-width: 481px) and (max-width: 1024px) {
		max-width: calc(100% - 15px);
	}
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	width: ${(props) => (props.selected ? '150' : '90')}px;
	border-radius: 18px;
	margin: 25px 0px 25px 0px;
	${(props) =>
		props.selected &&
		`
        background: #fff;
        box-shadow: 2px 5px 25px rgba(0, 0, 0, 0.05);
    `}
`;

export const Time = styled.span`
	color: #${(props) => (props.selected ? '0076FF' : '7f7f7f')};
	font-size: 12px;
	font-weight: bold;
	text-align: center;
	margin: 20px auto;
`;

export const Icon = styled.div`
	margin: 0 auto;
`;

export const Temp = styled.span`
	margin: 20px auto;
	text-align: center;
	font-size: 12px;
	font-weight: bold;
	color: #000;
`;
