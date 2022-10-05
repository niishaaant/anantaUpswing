import React from 'react';
import {
	Typography,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { Check } from '@material-ui/icons';
import MainGridLeft from '../utils/MainGridLeft';
import theme2 from '../utils/themes/programstheme';
import ButtonGrpPrograms from '../utils/ButtonGrpPrograms';
import child from '../pictures/child.jpg';

const useStyles = makeStyles((theme) => ({
	heading: {
		marginLeft: '5rem',
		marginRight: '5rem',
		marginTop: '2rem',
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

const Programs = () => {
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
					Programs
				</Typography>
				<hr />
				<br />
				<Typography className={classes.bodyText} paragraph>
					Our Early Intervention Programme is a comprehensive, integrated,
					multi-sensory program that aims to cater to children with complex
					needs. This Ideal for children with complex early needs such as
					Hearing impairment, Autism Spectrum Disorders, Global Developmental
					Delay, cerebral palsy, neuro-development disorders, Learning
					Disability.
				</Typography>
				<Typography className={classes.bodyText} paragraph>
					At Listening Ears, we offer specialized programs ideally for children
					aged 2-2.5 years. It is always advisable to provide an early
					intervention to children with special needs. Each program allows us to
					identify any delays in developmental milestones and individualized our
					services in regards to any aspects of child’s development including
					Listening, Speech, Receptive Language, Expressive Language, Motor
					skill milestones & Academics Skills.
				</Typography>
				<Typography className={classes.bodyText} color='secondary'>
					Early Intervention Programs:
				</Typography>
				<List className={classes.bodyText}>
					<ListItem>
						<ListItemIcon>
							<Check color='secondary' />
						</ListItemIcon>
						<ListItemText
							classes={{
								primary: classes.listTextP,
							}}
							primary='Listening Star – Parent Infant Program : (0 – 18 Months)'
						/>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<Check color='secondary' />
						</ListItemIcon>
						<ListItemText
							classes={{
								primary: classes.listTextP,
							}}
							primary='Little Explorers – Parent Toddler Program:  (18 Months – 3Years old)'
						/>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<Check color='secondary' />
						</ListItemIcon>
						<ListItemText
							classes={{
								primary: classes.listTextP,
							}}
							primary='Little Learners – Parent Child Program:  (3 – 4 years old)'
						/>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<Check color='secondary' />
						</ListItemIcon>
						<ListItemText
							classes={{
								primary: classes.listTextP,
							}}
							primary='School Readiness Program (4 -6 years old)'
						/>
					</ListItem>
				</List>
				<Typography className={classes.bodyText}>
					Listening Ears also helps and supports children till the age of 10
					years.
				</Typography>
				<Typography className={classes.bodyText}>
					Our early intervention program is a multi-disciplinary approach with
					emphasis on assisting the child to reach their full potential. The
					services are individualized to each child’s need and integrate many
					disciplines such as Audiologist, Speech Pathologists, ABA Therapist,
					Psychologists, Occupational Therapists, Special Educator & Early
					childhood Specialist.
				</Typography>
			</MainGridLeft>
			<ButtonGrpPrograms />
		</ThemeProvider>
	);
};

export default Programs;
