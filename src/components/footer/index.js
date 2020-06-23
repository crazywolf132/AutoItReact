import React, { useState } from 'react';
import {
	Container,
	SliderZone,
	TempType,
	Switch,
	SliderBox,
	Slider,
	PoweredBy,
	Link,
	Time,
} from './style';

export default function FooterComponent(props) {
	const [isOn, setOn] = useState(true);

	const { callBack } = props;

	const getCurrentTime = () => {
		var today = new Date();
		return (
			(today.getHours() < 10 ? '0' : '') +
			(today.getHours() % 12) +
			':' +
			(today.getMinutes() < 10 ? '0' : '') +
			today.getMinutes() +
			(today.getHours() < 12 ? ' am' : ' pm')
		);
	};

	return (
		<Container>
			<SliderZone>
				<TempType>°F</TempType>
				<Switch>
					<SliderBox
						checked={isOn}
						onChange={(e) => {
							setOn(e.target.checked);
							callBack(e.target.checked);
						}}
					/>
					<Slider isChecked={isOn}></Slider>
				</Switch>
				<TempType>°C</TempType>
			</SliderZone>
			<PoweredBy>
				<Link href='https://darksky.net/poweredby/'>
					Powered by Dark Sky
				</Link>
			</PoweredBy>
			<Time>{getCurrentTime()}</Time>
		</Container>
	);
}
