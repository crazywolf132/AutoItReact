export const getWeatherSummary = (iconName) => {
	let result = iconName.split('-');

	result = result.filter((word) => word !== 'night' && word !== 'day');

	result = result.map(
		(word) => word.charAt(0).toUpperCase() + word.slice(1, word.length)
	);

	return result.join(' ');
};

export const convertTemp = (temperature, useCelsius) => {
	return useCelsius
		? Math.floor(((temperature - 32) * 5) / 9)
		: Math.floor(temperature);
};
