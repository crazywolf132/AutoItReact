import React from 'react';
import {
	Container,
	Group,
	Temperature,
	Icon,
	Info,
	Location,
	Keyword,
} from './style';
import getWeatherIcon from '../../helpers/Icons';

export default function TodayComponent(props) {
	const { location, summary, temp, highTemp, icon, celsius } = props;
	return (
		<Container>
			<Group>
				<Temperature>
					{temp}°{celsius ? 'C' : 'F'}
				</Temperature>
				<Icon className={`wi ${getWeatherIcon(icon)}`} />
			</Group>
			<Info>
				Today, is currently <Keyword>{summary}</Keyword>. It's{' '}
				<Keyword>
					{temp}°{celsius ? 'C' : 'F'}
				</Keyword>{' '}
				and the high will be{' '}
				<Keyword>
					{highTemp}°{celsius ? 'C' : 'F'}
				</Keyword>
				.
			</Info>
			<Location>{location}</Location>
		</Container>
	);
}
