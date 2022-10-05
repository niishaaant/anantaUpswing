import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {} from '@material-ui/icons';

import { ThemeProvider } from '@material-ui/core/styles';
import MainGridRight from '../utils/MainGridRight';

import child from '../pictures/child.jpg';
import ButtonGrpServices from '../utils/ButtonGrpServices';
import theme1 from '../utils/themes/servicestheme';

const useStyles = makeStyles((theme) => ({
	heading: {
		marginLeft: '5rem',
	},
	bodyText: {
		marginLeft: '3rem',
		marginRight: '1rem',
	},
}));

const Services = () => {
	const classes = useStyles();

	return (
		<ThemeProvider theme={theme1}>
			<MainGridRight img={child}>
				<Typography
					variant='h3'
					className={classes.heading}
					color='secondary'
					gutterBottom
				>
					Services
				</Typography>
				<hr />
				<br />
				<Typography paragraph variant='h6' className={classes.bodyText}>
					Sint culpa occaecat ex consequat fugiat laborum ad. Sit occaecat non
					cupidatat cillum ad quis elit enim quis amet culpa enim aliqua
					nostrud. Reprehenderit officia quis aliquip ex dolor ad dolore tempor
					sint magna. Pariatur adipisicing esse ut sint ipsum voluptate aliquip
					voluptate ea anim in. Adipisicing cupidatat laborum elit consequat
					amet eu. Est duis sit ut velit ut laborum eiusmod incididunt quis
					laboris. Excepteur velit deserunt do exercitation non mollit
					exercitation eu do consequat.
				</Typography>
			</MainGridRight>

			<ButtonGrpServices />
		</ThemeProvider>
	);
};

export default Services;
