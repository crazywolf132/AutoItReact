export const getDay = (offset) => {
	return offset === 0
		? 'Tomorrow'
		: new Date(
				new Date().getTime() + (offset + 1) * 24 * 60 * 60 * 1000
		  ).toLocaleString('en-us', {
				weekday: 'long',
		  });
};
