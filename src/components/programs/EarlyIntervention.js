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
		marginRight: '2rem',
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

const EarlyIntervention = () => {
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
					Early Intervention
				</Typography>
				<hr />
				<br />
				<Typography
					variant='h4'
					color='secondary'
					className={classes.heading}
					gutterBottom
				>
					Listening Stars : Parent Infant Program (0-18 Months)
				</Typography>
				<Typography
					variant='h4'
					color='secondary'
					className={classes.heading}
					gutterBottom
				>
					Early Intervention Plays A Vital Role.
				</Typography>
				<Typography className={classes.bodyText} paragraph>
					Early diagnosis is the key to successful early intervention. Babies
					who are detected early can access further testing quickly and parents
					can access support and information. Children whose problems are
					identified early & begins with early intervention strategies before
					six months of age, have the best chance of developing age appropriate
					speech and language.
				</Typography>
				<Typography className={classes.bodyText} paragraph>
					As Babies begin to learn things right from the time they are in the
					womb of their mother. It is advised not to waste critical time.
					Critical Period for developing the ability for spoken language is from
					0-3 years. At that stage, the brain has the maximum neural Plasticity.
					The child too must learn early to grow up with the hearing
					aids/cochlear implant (CI) and accept them easily. Most importantly,
					children learn to make use of their residual hearing and acquire
					speech and language faster if they start earlier. Starting at an older
					age, not only slows down the ability to learn and speak, it can
					severely jeopardise.
				</Typography>
				<Typography className={classes.bodyText} paragraph>
					The programme is especially for Babies/ Infants diagnosed with any
					developmental delays. It provides them early training to identify and
					understand the sounds around them.
				</Typography>
			</MainGridLeft>
			<MainGridRight img={conditions}>
				<Typography
					variant='h4'
					color='secondary'
					className={classes.heading}
					gutterBottom
				>
					Baby Developmental Milestones
				</Typography>
				<Typography className={classes.bodyText} paragraph>
					The following milestones can be used as a guide to monitor child’s
					development as he/she grows:
				</Typography>
				<Typography className={classes.bodyText} color='secondary'>
					Birth – Eighteen Months Old:
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
							primary='Localizes sound source with accuracy'
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
							primary='Discriminate angry & Friendly vocal tones'
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
							primary='Appears to enjoy listening new words'
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
							primary='Understands more simple instruction'
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
							primary='Enjoys sounds making toys & objects.'
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
							primary='Awakes easily to loud, sudden noises'
						/>
					</ListItem>
				</List>
				<Typography
					variant='h4'
					color='secondary'
					className={classes.heading}
					gutterBottom
				>
					Multi-Disciplinary Team
				</Typography>
				<Typography className={classes.bodyText} paragraph>
					Our early intervention program is a multi-disciplinary approach with
					emphasis on assisting the child to reach their full potential. The
					services are individualized to each child’s need and integrate many
					disciplines such as{' '}
					<Typography display={'inline'} style={{ fontWeight: 'bold' }}>
						Audiologist, Speech Pathologists, Special Educator, Psychologists,
						Occupational Therapists, Early childhood Specialist & Music
						therapist.
					</Typography>
				</Typography>
			</MainGridRight>
			<ButtonGrpPrograms />
		</ThemeProvider>
	);
};

export default EarlyIntervention;
