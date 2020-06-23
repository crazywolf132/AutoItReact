const getWeatherIcon = (name) => {
	switch (name) {
		case 'clear-night':
			return 'wi-night-clear';
		case 'rain':
			return 'wi-rain-mix';
		case 'snow':
			return 'wi-snow';
		case 'sleet':
			return 'wi-sleet';
		case 'wind':
			return 'wi-strong-wind';
		case 'fog':
			return 'wi-fog';
		case 'cloudy':
			return 'wi-cloudy';
		case 'partly-cloudy-day':
			return 'wi-day-sunny-overcast';
		case 'partly-cloudy-night':
			return 'wi-night-partly-cloudy';
		case 'clear-day':
		default:
			// If all else fails... we will say it is going to be a sunny day.
			return 'wi-day-sunny';
	}
};

export default getWeatherIcon;
