import styled from 'styled-components';

export const Container = styled.footer`
	display: flex;
	border-top: 3px solid #f0f0f0;
	width: 90%;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
`;

export const PoweredBy = styled.span`
	flex: 8;
	text-align: center;
`;

export const Link = styled.a`
	text-decoration: none;
	color: #7f7f7f;
	font-weight: bold;
`;

export const SliderZone = styled.div`
	flex: 1;
	display: flex;

	@media (max-width: 480px) {
		margin-top: 25px;
	}
`;

export const TempType = styled.span`
	margin: 8px;
	font-weight: 500;
	font-size: 20px;
`;

export const Switch = styled.label`
	margin-top: 2.5px;
	position: relative;
	display: inline-block;
	width: 60px;
	height: 34px;
`;

export const SliderBox = styled.input.attrs({ type: 'checkbox' })`
	opacity: 0;
	width: 0;
	height: 0;

	&:focus {
		box-shadow: 0 0 1px #0076ff;
	}

	&:checked + span {
		background-color: #0076ff;
	}

	&:checked + span:before {
		transform: translateX(26px);
	}
`;

export const Slider = styled.span`
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #ccc;
	transition: 0.4s;
	border-radius: 34px;

	&:before {
		position: absolute;
		content: '';
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		transition: 0.4s;
		border-radius: 50%;
	}
`;

export const Time = styled.span`
	margin-top: 26px;
	margin-right: 20px;
	font-weight: bold;
	font-size: 20px;
	color: #0076ff;

	@media (max-width: 480px) {
		display: none;
	}

	@media only screen and (min-width: 481px) and (max-width: 1024px) {
		display: none;
	}
`;
