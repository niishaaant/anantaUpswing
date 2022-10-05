import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import MainGridLeft from '../utils/MainGridLeft';
import theme2 from '../utils/themes/programstheme';
import ButtonGrpPrograms from '../utils/ButtonGrpPrograms';
import child from '../pictures/child.jpg';

const useStyles = makeStyles((theme) => ({
	heading1: {
		marginLeft: '5rem',
		marginRight: '5rem',
		marginTop: '5rem',
	},
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

const TeleinterventionProgram = () => {
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme2}>
			<MainGridLeft img={child}>
				<Typography
					variant='h3'
					className={classes.heading1}
					color='secondary'
					gutterBottom
				>
					Teleintervention Program
				</Typography>
				<hr />
				<br />
				<Typography className={classes.heading} variant='h4' color='secondary'>
					Telehealth Sessions : 2-10 Years
				</Typography>

				<Typography className={classes.bodyText} paragraph>
					Listening Ear’s Teleintervention Program provides outreach specialist
					services, via online video-conferencing sessions, to families who are
					unable to access our five centres in person. The Teleintervention
					Program is available to all families, but especially to families
					living in rural and remote regions of India, or who live overseas. The
					main aim is to guide and coach parents in their home environment, with
					experts in paediatric hearing loss supporting children’s listening,
					language and social development using every day equipment and daily
					life routines in order to help achieve the best possible outcomes for
					children. Families can access services using technology best suited to
					their needs, including laptops, iPads and tablets. Families who attend
					the Mainstream program, as well as the Teleintervention Program, have
					access to services including audiology, speech therapy, child and
					family counselling, group programs and face-to-face discussions about
					managing and living with hearing loss.
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
				<Typography className={classes.bodyText} paragraph>
					To enquire about joining our Teleintervention Program, please call
					1800-121-8535 or email contact@listeningears.in
				</Typography>
			</MainGridLeft>
			<ButtonGrpPrograms />
		</ThemeProvider>
	);
};

export default TeleinterventionProgram;
