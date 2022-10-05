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

const AudiologyServices = () => {
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
					Audiology Services
				</Typography>
				<hr />
				<br />
				<Typography className={classes.bodyText} paragraph>
					Hearing difficulties can affect a child’s ability to learn – both
					socially and at school. Children with a hearing loss may experience
					speech and language delays, educational difficulties, behavioral
					problems and often require increased support.
				</Typography>
				<Typography
					className={classes.heading}
					variant='h4'
					color='secondary'
					gutterBottom
				>
					Some common warning signs of hearing problems in children:
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
							primary='Says “what?” or “huh?” often'
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
							primary='Not startling to very loud sounds'
						/>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<Check color='secondary' />
						</ListItemIcon>
						<ListItemText
							primary='Attention or behavioural problems'
							classes={{
								primary: classes.listTextP,
							}}
						/>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<Check color='secondary' />
						</ListItemIcon>
						<ListItemText
							primary='Inability to detect incoming sounds'
							classes={{
								primary: classes.listTextP,
							}}
						/>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<Check color='secondary' />
						</ListItemIcon>
						<ListItemText
							primary='Speech/language delay or differences'
							classes={{
								primary: classes.listTextP,
							}}
						/>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<Check color='secondary' />
						</ListItemIcon>
						<ListItemText
							primary='Difficulty understanding speech in background noise'
							classes={{
								primary: classes.listTextP,
							}}
						/>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<Check color='secondary' />
						</ListItemIcon>
						<ListItemText
							primary='Academic difficulties'
							classes={{
								primary: classes.listTextP,
							}}
						/>
					</ListItem>
				</List>
			</MainGridRight>
			<MainGridLeft img={conditions}>
				<Typography
					className={classes.heading}
					variant='h4'
					color='secondary'
					gutterBottom
				>
					Our Comprehensive Audiological Assessment Includes:
				</Typography>
				<Typography variant='h6' className={classes.bodyText} paragraph>
					Listening Ears has a team of qualified Audiologists experienced in
					working with children. We offer comprehensive assessment and
					management of children’s hearing – no matter how mild or profound.
				</Typography>
				<List className={classes.bodyText}>
					<ListItem>
						<ListItemIcon>
							<Check color='secondary' />
						</ListItemIcon>
						<ListItemText
							primary='Newborn Hearing Screening'
							classes={{
								primary: classes.listTextP,
							}}
						/>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<Check color='secondary' />
						</ListItemIcon>
						<ListItemText
							primary='Otoacoustic Emissions (OAE)'
							classes={{
								primary: classes.listTextP,
							}}
						/>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<Check color='secondary' />
						</ListItemIcon>
						<ListItemText
							primary='Auditory Brainstem Response (ABR)'
							classes={{
								primary: classes.listTextP,
							}}
						/>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<Check color='secondary' />
						</ListItemIcon>
						<ListItemText
							primary='Automated Steady State Response Testing (ASSR)'
							classes={{
								primary: classes.listTextP,
							}}
						/>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<Check color='secondary' />
						</ListItemIcon>
						<ListItemText
							primary='Visual Reinforcement Audiometry (VRA)'
							classes={{
								primary: classes.listTextP,
							}}
						/>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<Check color='secondary' />
						</ListItemIcon>
						<ListItemText
							primary='Tympanometry'
							classes={{
								primary: classes.listTextP,
							}}
						/>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<Check color='secondary' />
						</ListItemIcon>
						<ListItemText
							primary='Behavioral Observation Audiometry (BOA)'
							classes={{
								primary: classes.listTextP,
							}}
						/>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<Check color='secondary' />
						</ListItemIcon>
						<ListItemText
							primary='Conditioned Play Audiometry (CPA)'
							classes={{
								primary: classes.listTextP,
							}}
						/>
					</ListItem>

					<ListItem>
						<ListItemIcon>
							<Check color='secondary' />
						</ListItemIcon>
						<ListItemText
							primary='Speech Audiometry'
							classes={{
								primary: classes.listTextP,
							}}
						/>
					</ListItem>

					<ListItem>
						<ListItemIcon>
							<Check color='secondary' />
						</ListItemIcon>
						<ListItemText
							primary='Cochlear Implant Mapping/ Switch On'
							classes={{
								primary: classes.listTextP,
							}}
						/>
					</ListItem>
				</List>
			</MainGridLeft>
			<ButtonGrpServices />
		</ThemeProvider>
	);
};

export default AudiologyServices;
