import styled from 'styled-components';

export const LoadedContent = styled.div`
	display: flex;
	flex-direction: column;
`;

export const TopGroup = styled.div`
	display: flex;
	margin-left: 100px;

	@media (max-width: 480px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 25px 0px;
	}

	@media only screen and (min-width: 481px) and (max-width: 1024px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0;
	}
`;

export const DayList = styled.section`
	display: flex;
	flex-wrap: wrap;
	margin: 15px 100px 25px 80px;

	@media (max-width: 480px) {
		margin: 15px 10px 10px 10px;
	}
`;
