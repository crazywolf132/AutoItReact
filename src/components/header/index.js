import React, { useState } from 'react';
import { Container, Welcome, SearchBox } from './style';

export default function HeaderComponent(props) {
	const { callBack } = props;
	const [searchValue, setValue] = useState('');

	return (
		<Container>
			<Welcome>Weather</Welcome>
			<SearchBox
				type='text'
				value={searchValue}
				onChange={(e) => setValue(e.target.value)}
				placeholder='Search City'
				onKeyDown={(event) => {
					if (event.key === 'Enter') {
						callBack(searchValue);
						setValue('');
					}
				}}
			/>
		</Container>
	);
}
