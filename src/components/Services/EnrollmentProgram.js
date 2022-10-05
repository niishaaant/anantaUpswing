import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import MainGridRight from '../utils/MainGridRight';
import theme1 from '../utils/themes/servicestheme';
import child from '../pictures/child.jpg';
import ButtonGrpServices from '../utils/ButtonGrpServices';

const useStyles = makeStyles((theme) => ({
	heading: {
		marginLeft: '5rem',
		marginRight: '5rem',
		marginTop: '3rem',
	},
	heading1: {
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
		color: 'rgba(0, 0, 0, 0.87)',
	},
	listTextPP: {
		fontSize: '1.15rem',
		color: '#17a2b8',
	},
}));

const EnrollmentProgram = () => {
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
					Enrollment Program
				</Typography>
				<hr />
				<br />
				<Typography
					variant='h4'
					color='secondary'
					className={classes.heading1}
					gutterBottom
				>
					Eligibility Criteria For Admission At Listening Ears
				</Typography>
				<List className={classes.bodyText}>
					<ListItem>
						<ListItemText
							classes={{
								primary: classes.listTextPP,
								secondary: classes.listTextP,
							}}
							primary='Age:'
							secondary=' Ideal age of the child must fall between 2 to 2.5 years.'
						/>
					</ListItem>
					<ListItem>
						<ListItemText
							classes={{
								primary: classes.listTextPP,
								secondary: classes.listTextP,
							}}
							primary='Benchmark Assessments: '
							secondary='Team of professionals conducts benchmark assessments at the time of enrollment in order to track progress of hearing, speech, and language development in child. Each child undergoes an individual assessment.'
						/>
					</ListItem>
					<ListItem>
						<ListItemText
							classes={{
								primary: classes.listTextPP,
								secondary: classes.listTextP,
							}}
							primary='Annual Assessments: '
							secondary='The team also conducts annual assessments of students at individual level to measure language development.'
						/>
					</ListItem>
					<ListItem>
						<ListItemText
							classes={{
								primary: classes.listTextPP,
								secondary: classes.listTextP,
							}}
							primary='Tuition Fee: '
							secondary='For fees related information, contact out counselors. Any kind of changes in the fee structure will be established by the center’s Board of Directors, each year. Some students are also rewarded with funding schemes through various agencies based on their means and merit. Fees from the parents is not the only source to cover the actual cost of running the Listening Ears. Our center looks forward to the contributions from friends, parents, grandparents, family members of the students and others willing to donate and offer their hands. These contributions also help provide the education to financially deprived special children to, thus, fulfil our mission.'
						/>
					</ListItem>
				</List>
				<Typography>
					Contact us by email to contact@listeningears.in or call 9205194100/103
					for more information regarding tuition and financial aid.
				</Typography>
			</MainGridRight>
			<ButtonGrpServices />
		</ThemeProvider>
	);
};

export default EnrollmentProgram;
