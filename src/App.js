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

import Jungla from '@jungla/language';

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

		const long = geo.data.longitude;
		const lat = geo.data.latitude;

		let weather = await axios.get(
			`${corsAnywhere}https://api.darksky.net/forecast/a371aba7516d8ea55de6d6e7fb411308/${lat},${long}`
		);

		let finalData = Jungla(
			`
		{
			currently as current {
				icon
			},
			daily {
				data: [{
					temperatureMax as tempMax,
					temperatureMin as tempMin,
					icon,
					precipProbability as rainChance,
					windSpeed
				}]
			},
			hourly {
				data <12> : [{
					time,
					apparentTemperature as temp,
					icon
				}]
			}
		}`,
			weather.data
		);

		setWeatherInfo(finalData);
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
								weatherInfo.current.icon
							)}
							icon={weatherInfo.current.icon}
							temp={convertTemp(
								weatherInfo.daily.data[0].tempMin,
								useCelsius
							)}
							highTemp={convertTemp(
								weatherInfo.daily.data[0].tempMax,
								useCelsius
							)}
						/>
						<Hourly
							today={{
								temp: convertTemp(
									weatherInfo.hourly.data[0].temp,
									useCelsius
								),
								icon: weatherInfo.hourly.data[0].icon,
							}}
							data={weatherInfo.hourly.data}
							celsius={useCelsius}
						/>
					</TopGroup>
					<Title>Next 6 Days</Title>
					<DayList>
						{weatherInfo.daily.data.map((weather, index) => (
							<Day
								summary={getWeatherSummary(weather.icon)}
								temp={convertTemp(weather.tempMax, useCelsius)}
								day={getDay(index)}
								celsius={useCelsius}
								icon={weather.icon}
								celsius={useCelsius}
								rainChance={weather.rainChance * 100}
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
