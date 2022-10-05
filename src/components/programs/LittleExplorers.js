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
import theme2 from '../utils/themes/programstheme';
import ButtonGrpPrograms from '../utils/ButtonGrpPrograms';
import child from '../pictures/child.jpg';
import conditions from '../pictures/conditions.jpg';

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
	bold: {
		fontWeight: 'bold',
	},
}));

const LittleExplorers = () => {
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
					Little Explorers: Parent Toddler Program
				</Typography>
				<hr />
				<br />
				<Typography
					className={classes.heading}
					variant='h4'
					color='secondary'
					gutterBottom
				>
					18 Months- 3 Years
				</Typography>
				<Typography paragraph className={classes.bodyText}>
					Our Early Intervention Programme is a comprehensive, integrated,
					multi-sensory program that aims to cater to children with complex
					needs. This programme is Ideal for children with complex early needs
					such as Hearing impairment, Autism Spectrum Disorders, Global
					Developmental Delay, cerebral palsy, neuro-development disorders,
					Learning Disability.
				</Typography>
				<Typography paragraph className={classes.bodyText}>
					A program designed specially for uniquely-abled kids aged{' '}
					<Typography display={'inline'} className={classes.bold}>
						18 Months – 3 years
					</Typography>
					, With an aim to provide a language enriched environment to develop
					Spoken Language through listening & to mainstream in a formal school.
				</Typography>
				<Typography paragraph className={classes.bodyText}>
					Our multi-disciplinary approach with emphasis on assisting each child
					to reach their full potential. The sessions are individualized to each
					child’s need and integrate many disciplines such as{' '}
					<Typography display={'inline'} className={classes.bold}>
						Audiologist, Speech Pathologists, Special Educator, Psychologists,
						Occupational Therapists, Early childhood Specialist & Music
						therapist.
					</Typography>
				</Typography>
				<Typography paragraph className={classes.bodyText}>
					Our Unique Pedagogy designed on the basic of Auditory verbal Approach
					of teaching young kids with any developmental delays to listen, learn
					& talk. We follow a normal developmental milestones to address the
					specific needs of child.
				</Typography>
			</MainGridLeft>
			<MainGridRight img={conditions}>
				<Typography className={classes.bodyText}>
					Our program includes guidance and support to encourage children’s
					development in following Domain:
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
							primary='Audition'
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
							primary='Expressive & Receptive Language'
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
							primary='Social skills and interaction'
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
							primary='Fine and gross motor skills'
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
							primary='Age appropriate concepts
                            '
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
							primary='Academic skills'
						/>
					</ListItem>
				</List>
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
			</MainGridRight>
			<ButtonGrpPrograms />
		</ThemeProvider>
	);
};

export default LittleExplorers;
