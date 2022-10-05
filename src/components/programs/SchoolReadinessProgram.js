import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import MainGridLeft from '../utils/MainGridLeft';
import theme2 from '../utils/themes/programstheme';
import ButtonGrpPrograms from '../utils/ButtonGrpPrograms';
import child from '../pictures/child.jpg';

const useStyles = makeStyles((theme) => ({
	heading: {
		marginLeft: '5rem',
		marginRight: '5rem',
	},
	bodyText: {
		marginLeft: '3rem',
		marginRight: '1rem',
		fontSize: '1.15rem',
	},
	listTextP: {
		fontSize: '1.15rem',
	},
}));

const SchoolReadinessProgram = () => {
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme2}>
			<MainGridLeft img={child}>
				<Typography
					variant='h3'
					className={classes.heading}
					color='secondary'
					gutterBottom
				>
					School Readiness Program
				</Typography>
				<hr />
				<br />
				<Typography
					className={classes.heading}
					color='secondary'
					variant='h4'
					gutterBottom
				>
					4 Years - 6 Years
				</Typography>
				<Typography className={classes.bodyText} paragraph>
					It is always advisable to provide an early intervention to children
					with hearing loss. The sooner the intervention, the better results it
					offers. Listening Ears, also helps and supports children above the age
					of 4 years. This is to optimise for them the benefits of the currently
					available hearing devices, given the late start. Listening Ears will
					also facilitate with the individualised sessions, to develop in them
					linguistic abilities that are important for them to be at par with
					their normal hearing peers. We also support them with speech therapy
					sessions for speech clarity and elocution.
				</Typography>
				<Typography
					className={classes.heading}
					color='secondary'
					variant='h4'
					gutterBottom
				>
					Parent's Empowerment
				</Typography>
				<Typography className={classes.bodyText} paragraph>
					We work with parents at every level. We establish strong relationship
					with parents for the purpose of development and success of the child.
					However the most important teacher in your child’s life isn’t the
					specialist – it is you. The way you model language and interact with
					your child on a daily basis is crucial to their ultimate success in
					the speaking world.
				</Typography>
				<Typography className={classes.bodyText} paragraph>
					Don’t worry, you’re not alone. The professional staff at Listening
					Ears are here to help you.
				</Typography>
				<Typography className={classes.bodyText} paragraph>
					Have fun and join in your child’s learning journey – it’s the most
					rewarding job you will ever do.
				</Typography>
			</MainGridLeft>
			<ButtonGrpPrograms />
		</ThemeProvider>
	);
};

export default SchoolReadinessProgram;
