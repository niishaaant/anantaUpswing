import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import MainGridLeft from '../utils/MainGridLeft';
import theme4 from '../utils/themes/conditionstheme';
import Cards from '../Cards';
import child from '../pictures/child.jpg';
import conditions from '../pictures/conditions.jpg';

const useStyles = makeStyles((theme) => ({
	heading: {
		marginLeft: '5rem',
		marginRight: '5rem',
	},
	bodyText: {
		marginLeft: '1rem',
		marginRight: '1rem',
		fontSize: '1.15rem',
	},
	listTextP: {
		fontSize: '1.15rem',
	},
	cardContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
}));

const Conditions = () => {
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme4}>
			<MainGridLeft img={conditions}>
				<Typography
					variant='h3'
					className={classes.heading}
					color='secondary'
					gutterBottom
				>
					Conditions
				</Typography>
				<hr />
				<br />
				<div className={classes.bodyText}>
					<Grid container>
						<Grid item lg={4}>
							<Link to='/' className='CardLink'>
								<Cards
									image={child}
									imageTitle='child'
									title='Autism Spectrum Disorder'
								>
									It refers to a group of disorders that may cause challenges
								</Cards>
							</Link>
						</Grid>
						<Grid item lg={4}>
							<Link to='/' className='CardLink'>
								<Cards image={child} imageTitle='child' title='Down Syndrome'>
									It causes a distinct facial appearance, intellectual
									disability and developmental delays.
								</Cards>
							</Link>
						</Grid>
						<Grid item lg={4}>
							<Link to='/' className='CardLink'>
								<Cards image={child} imageTitle='child' title='Cerebral Palsy'>
									Cerebral palsy is a disorder which affects muscle movement,
									coordination and motor skills.
								</Cards>
							</Link>
						</Grid>
					</Grid>
					<br />
					<Grid container>
						<Grid item lg={4}>
							<Link to='/' className='CardLink'>
								<Cards
									image={child}
									imageTitle='child'
									title='Attention Deficits Hyperactivity Disorder '
								>
									It is the most common psychiatric disorder of childhood.
								</Cards>
							</Link>
						</Grid>
						<Grid item lg={4}>
							<Link to='/' className='CardLink'>
								<Cards image={child} imageTitle='child' title='Dyslexia'>
									It is a neurological and often genetic condition, not the
									result of poor teaching or upbringing.
								</Cards>
							</Link>
						</Grid>
						<Grid item lg={4}>
							<Link to='/' className='CardLink'>
								<Cards
									image={child}
									imageTitle='child'
									title='Hearing Impairment'
								>
									Hearing loss can be caused by many causes some of which can be
									treated with medicine or surgery.
								</Cards>
							</Link>
						</Grid>
					</Grid>
				</div>
			</MainGridLeft>
		</ThemeProvider>
	);
};

export default Conditions;
