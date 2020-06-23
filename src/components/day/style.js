import styled from 'styled-components';

export const Container = styled.div`
	flex: 1 0 21%;
	display: flex;
	flex-direction: column;
	background: #fff;
	width: 325px;
	height: 247px;
	border-radius: 20px;
	box-shadow: 5px 10px 50px rgba(0, 0, 0, 0.1);
	margin: 20px;
`;

export const Group = styled.div`
	display: flex;
`;

export const WeatherSummary = styled.span`
	flex: 9;
	font-weight: 800;
	font-size: 20px;
	margin-top: 45px;
	margin-left: 40px;
	color: rgba(0, 0, 0, 0.5);
`;

export const WeatherDate = styled.span`
	margin-top: 45px;
	margin-right: 30px;
	margin-left: 45px;
	color: #0076ff;
	font-size: 20px;
	font-weight: 800;
`;

export const Temperature = styled.span`
	flex: 6;
	font-weight: bold;
	font-size: 60px;
	color: #000;
	margin-top: 20px;
	margin-left: 40px;
`;

export const RainChance = styled.span`
	font-weight: bold;
	font-size: 20px;
	color: #000;
	margin-left: 40px;
	margin-top: 20px;
	margin-bottom: 40px;
`;

export const WindStrength = styled.span`
	font-weight: bold;
	font-size: 20px;
	color: #000;
	margin-left: 40px;
	margin-top: 20px;
	margin-bottom: 40px;
`;

export const TempIcon = styled.i`
	margin-top: 30px;
	margin-right: 60px;
	margin-left: 25px;
	font-size: 45px;

	@media (max-width: 480px) {
		margin-right: 30px;
	}
`;

export const Icon = styled.i`
	margin-left: 20px;
`;
