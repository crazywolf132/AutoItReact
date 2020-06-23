import React, { useEffect, useState } from 'react';
import './App.css';
import './assets/css/weather-icons.min.css';
import {
	Header,
	NoContent,
	Day,
	Today,
	Hourly,
	Title,
	Footer,
} from './components';

import { LoadedContent, DayList, TopGroup } from './style';

import axios from 'axios';
import { convertTemp, getWeatherSummary } from './helpers/Weather';
import { getDay } from './helpers/Date';

function App() {
	const [useCelsius, setCelsius] = useState(true);
	const [searchValue, setSearch] = useState('');
	const [isLoaded, setLoaded] = useState(false);
	const [weatherInfo, setWeatherInfo] = useState({ days: [''] });

	const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';

	useEffect(() => {
		if (searchValue !== '') {
			getData();
		}
	}, [searchValue.length]);

	const getData = async () => {
		let geo = await axios.get(`https://darksky.net/geo?q=${searchValue}`);

		console.log(geo);

		const long = geo.data.longitude;
		const lat = geo.data.latitude;

		let weather = await axios.get(
			`${corsAnywhere}https://api.darksky.net/forecast/a371aba7516d8ea55de6d6e7fb411308/${lat},${long}`
		);

		console.log(weather);

		setWeatherInfo(weather.data);
		setLoaded(true);
	};

	return (
		<>
			<Header callBack={(value) => setSearch(value)} />
			{!isLoaded ? (
				<NoContent />
			) : (
				<LoadedContent>
					<TopGroup>
						<Today
							location={searchValue}
							celsius={useCelsius}
							summary={getWeatherSummary(
								weatherInfo.currently.icon
							)}
							icon={weatherInfo.currently.icon}
							temp={convertTemp(
								weatherInfo.daily.data[0].temperatureMin,
								useCelsius
							)}
							highTemp={convertTemp(
								weatherInfo.daily.data[0].temperatureMax,
								useCelsius
							)}
						/>
						<Hourly
							today={{
								temp: convertTemp(
									weatherInfo.hourly.data[0]
										.apparentTemperature,
									useCelsius
								),
								icon: weatherInfo.hourly.data[0].icon,
							}}
							data={weatherInfo.hourly.data.slice(0, 12)}
							celsius={useCelsius}
						/>
					</TopGroup>
					<Title>Next 6 Days</Title>
					<DayList>
						{weatherInfo.daily.data.map((weather, index) => (
							<Day
								summary={getWeatherSummary(weather.icon)}
								temp={convertTemp(
									weather.temperatureMax,
									useCelsius
								)}
								day={getDay(index)}
								celsius={useCelsius}
								icon={weather.icon}
								celsius={useCelsius}
								rainChance={weather.precipProbability * 100}
								windSpeed={weather.windSpeed}
							/>
						))}
					</DayList>
				</LoadedContent>
			)}
			<Footer callBack={(value) => setCelsius(value)} />
		</>
	);
}

export default App;
