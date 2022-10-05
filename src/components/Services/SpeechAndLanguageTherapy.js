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
import MainGridRight from '../utils/MainGridRight';
import MainGridLeft from '../utils/MainGridLeft';
import theme1 from '../utils/themes/servicestheme';
import child from '../pictures/child.jpg';
import conditions from '../pictures/conditions.jpg';
import ButtonGrpServices from '../utils/ButtonGrpServices';

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
		color: 'rgba(0, 0, 0, 0.87)',
	},
	listTextPP: {
		fontSize: '1.15rem',
		color: '#17a2b8',
	},
}));

const SpeechAndLanguageTherapy = () => {
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
					Speech and Language Therapy
				</Typography>
				<hr />
				<br />
				<Typography
					className={classes.heading}
					variant='h4'
					color='secondary'
					gutterBottom
				>
					About Speech And Language Therapy (SLT)
				</Typography>
				<Typography paragraph className={classes.bodyText}>
					Speech and Language Therapy (SLT) plays a critical role in developing
					communication skills among hearing impaired children. At Listening
					Ears, regular SLT sessions by the professionals enhance the receptive
					and expressive language skills among the children.
				</Typography>
				<Typography className={classes.heading} color='secondary' variant='h4'>
					Our SLT Agenda
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
							primary='To assess the receptive and expressive skills in a child through regular assessments prior to enrolment and also during the course of learning.'
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
							primary='To develop communication skills with appropriate hearing aids or cochlear implants prescribed to the children.'
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
							primary='To encourage the children by training for listening, language, speaking and cognition to initiate standard communication.'
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
							primary='To support parents by training them for speech and language.'
						/>
					</ListItem>
				</List>
			</MainGridRight>
			<MainGridLeft img={conditions}>
				<Typography
					className={classes.heading}
					color='secondary'
					variant='h4'
					gutterBottom
				>
					How SLT Helps?
				</Typography>
				<Typography className={classes.bodyText}>
					Speech and Language Therapy (SLT) plays a critical role in developing
					communication skills among hearing impaired children. At Listening
					Ears, regular SLT sessions by the professionals enhance the receptive
					and expressive language skills among the children.
				</Typography>
				<List className={classes.bodyText}>
					<ListItem>
						<ListItemIcon>
							<Check color='secondary' />
						</ListItemIcon>
						<ListItemText
							classes={{
								primary: classes.listTextPP,
								secondary: classes.listTextP,
							}}
							primary='Communication Skills'
							secondary='SLT builds communication skills among children and encourages them to speak in public or at home with no fear and disruption. This includes developing ability to comprehend conversation.
                            '
						/>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<Check color='secondary' />
						</ListItemIcon>
						<ListItemText
							classes={{
								primary: classes.listTextPP,
								secondary: classes.listTextP,
							}}
							primary='Expression to the Language'
							secondary='SLT encourages children to express their feelings and needs through speech. Understanding and using apt vocabulary in a given situation is taught,  using words and sentences, in a variety of different ways and for different purposes.'
						/>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<Check color='secondary' />
						</ListItemIcon>
						<ListItemText
							classes={{
								primary: classes.listTextPP,
								secondary: classes.listTextP,
							}}
							primary='Social communication'
							secondary='such as turn-taking, staying on topic and using verbal language appropriately & using appropriate expression,emotions & body language, maintaining eye contact, joint attention and using gestures.'
						/>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<Check color='secondary' />
						</ListItemIcon>
						<ListItemText
							classes={{
								primary: classes.listTextPP,
								secondary: classes.listTextP,
							}}
							primary='Articulation and phonology'
							secondary='producing a full range of speech sounds and using them accurately.'
						/>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<Check color='secondary' />
						</ListItemIcon>
						<ListItemText
							classes={{
								primary: classes.listTextPP,
								secondary: classes.listTextP,
							}}
							primary='Fluency disorders'
							secondary='problems such as stuttering, in which the flow of speech is interrupted by abnormal stoppages.'
						/>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<Check color='secondary' />
						</ListItemIcon>
						<ListItemText
							classes={{
								primary: classes.listTextPP,
								secondary: classes.listTextP,
							}}
							primary='Oral feeding disorders'
							secondary='are disorders in the way someone eats or drinks, including problems with chewing, swallowing, coughing, gagging, and refusing foods.'
						/>
					</ListItem>
				</List>
			</MainGridLeft>
			<ButtonGrpServices />
		</ThemeProvider>
	);
};

export default SpeechAndLanguageTherapy;
