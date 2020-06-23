import React from 'react';
import { Container, Message } from './style';

export default function NoContentComponent() {
	return (
		<Container>
			<Message>Please search for a location first</Message>
		</Container>
	);
}
