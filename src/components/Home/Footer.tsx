import React from 'react';

import { Container, Row, Column } from '../Layout';
import { StyledFooter } from './styles';

const Footer = () => {
	return (
		<StyledFooter>
			<Container>
				<Row>
					<Column size='full'>
						<p>&copy; 2024 Archil Lelashvili.</p>
					</Column>
				</Row>
			</Container>
		</StyledFooter>
	);
};


export default Footer;