import React from 'react';
import {
	Container,
	Group,
	WeatherSummary,
	WeatherDate,
	Temperature,
	Icon,
	RainChance,
	WindStrength,
	TempIcon,
} from './style';
import getWeatherIcon from '../../helpers/Icons';

export default function DayComponent(props) {
	const { summary, day, temp, celsius, icon, rainChance, windSpeed } = props;
	return (
		<Container>
			<Group>
				<WeatherSummary>{summary}</WeatherSummary>
				<WeatherDate>{day}</WeatherDate>
			</Group>
			<Group>
				<Temperature>
					{temp}°{celsius ? 'C' : 'F'}
				</Temperature>
				<TempIcon className={`wi ${getWeatherIcon(icon)}`} />
			</Group>
			<Group>
				<RainChance>
					{rainChance.toFixed(0)}%
					<Icon className='wi wi-umbrella' />
				</RainChance>
				<WindStrength>
					{windSpeed} {celsius ? 'km/h' : 'mph'}
					<Icon className='wi wi-strong-wind'></Icon>
				</WindStrength>
			</Group>
		</Container>
	);
}
