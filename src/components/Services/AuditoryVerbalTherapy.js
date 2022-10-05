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
	},
}));

const AuditoryVerbalTherapy = () => {
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
					Auditory Verbal Therapy
				</Typography>
				<hr />
				<br />
				<Typography
					variant='h4'
					className={classes.heading}
					color='secondary'
					gutterBottom
				>
					About Auditory-Verbal Therapy (AVT)
				</Typography>
				<Typography variant='h6' className={classes.bodyText} paragraph>
					Our focus is to make the hearing impaired child an active participant
					in any communication or conversation. Auditory Verbal Therapy (AVT)
					for children helps them to understand the spoken words and, in turn,
					respond with speech. They are trained to use their residual hearing,
					enhanced by hearing aids or cochlear implants, to listen to the words
					and sounds and respond accordingly. At Listening Ears, we make sure
					our children become active listeners with an enthusiasm for learning
					words and sounds around them.
				</Typography>
				<Typography
					variant='h4'
					className={classes.heading}
					color='secondary'
					gutterBottom
				>
					Why AVT Is Necessary For Your Children?
				</Typography>
				<Typography className={classes.bodyText} variant='h6'>
					The question, not surprisingly, might have struck many parents’ minds.
					However, the fact that AVT is certainly a necessary quotient for your
					children is justified due to following reasons:
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
							primary='Children will be able to distinguish meaning and sense of different words using their residual hearing power or through hearing aids. They will grow up learning and developing vocabulary and language skills.'
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
							primary='They will acquire ability to detect and recognize sound in the surroundings, understand language and respond faster. Verbal communication is developed through our AVT sessions.'
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
							primary='Learning to listen is possible for hearing impaired children as well.'
						/>
					</ListItem>
				</List>
			</MainGridRight>
			<MainGridLeft img={conditions}>
				<Typography variant='h4' className={classes.heading} color='secondary'>
					Our AVT Agenda
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
							primary='Detect the hearing impairment at the earliest possible age, ideally in the newborn babies and infants, through screening programs.'
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
							primary='Utilize prompt and infallible management and maintenance for audiology supportive equipment.'
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
							primary='Support children in integrating listening skills into their communication and social skills development.'
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
							primary='Provide guidance and counseling to parents/guardians about the importance of spoken language development. Also, enlighten them with the impact of hearing impairment on the family.'
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
							primary='Carry regular assessments and evaluation of child’s development through various diagnostic tools.'
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
							primary='Provide apt support and services to offer children a platform for education, social inclusion and encouragement in regular schools.'
						/>
					</ListItem>
				</List>
				<Typography variant='h4' className={classes.heading} color='secondary'>
					Why Us?
				</Typography>
				<Typography className={classes.bodyText} variant='h6'>
					We pack a whole lot for our children. We equip them to grow,
					typically, amidst their ‘normal’ peers and pick up the skills that are
					present in other ordinary children of their age. Professionals and
					staff at Listening Ears work in collaboration with parents. All this
					is to give our children a sophisticated environment to play in and
					learn from. We follow a carefully evolved and a tried & tested method.
					Since this method mandates an intimate involvement of the parents and
					guardians, their consent becomes crucial at several steps. At
					Listening Ears, parents get to empower their children to take control
					of their destiny, irrespective of the hearing related challenges those
					children may have been born with.
				</Typography>
			</MainGridLeft>
			<ButtonGrpServices />
		</ThemeProvider>
	);
};

export default AuditoryVerbalTherapy;
