import React from 'react';
import { Container, Title, Scrollable, Card, Time, Icon, Temp } from './style';
import getWeatherIcon from '../../helpers/Icons';
import { convertTemp } from '../../helpers/Weather';

export default function HourlyComponent(props) {
	const { today, data, celsius } = props;

	const getHour = (time) => {
		let eventTime = new Date(time * 1000);
		return (
			(eventTime.getHours() % 12 === 0 ? 12 : eventTime.getHours() % 12) +
			(eventTime.getHours() < 12 ? ' am' : ' pm')
		);
	};

	const generateCard = (info) => (
		<Card>
			<Time>{getHour(info.time)}</Time>
			<Icon>
				<i className={`wi ${getWeatherIcon(info.icon)}`}></i>
			</Icon>
			<Temp>
				{convertTemp(info.apparentTemperature, celsius)}°
				{celsius ? 'C' : 'F'}
			</Temp>
		</Card>
	);

	return (
		<Container>
			<Title>Next 12 hours</Title>
			<Scrollable>
				<Card selected>
					<Time selected>Now</Time>
					<Icon>
						<i className={`wi ${getWeatherIcon(today.icon)}`}></i>
					</Icon>
					<Temp>
						{today.temp}°{celsius ? 'C' : 'F'}
					</Temp>
				</Card>
				{data.map(generateCard)}
			</Scrollable>
		</Container>
	);
}
