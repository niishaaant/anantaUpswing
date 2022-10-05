import React, { Fragment } from 'react';
import {
	Grid,
	Typography,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MainGridLeft from '../components/utils/MainGridLeft';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { blueGrey } from '@material-ui/core/colors';
import books2 from '../components/pictures/books2.jpg';

const useStyles = makeStyles({
	listTitle: {
		marginLeft: '10%',
		marginTop: '5vh',
		color: 'white',
	},
	listTextP: {
		fontSize: '1.75rem',
		color: 'white',
	},
	listTextS: {
		fontSize: '1.1rem',
		color: 'white',
	},
	img: {
		width: '400px',
		height: '100vh',
		overflow: 'hidden',
		top: 0,
		right: 0,
		backgroundImage: `url(${books2})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		overflowInline: 'hidden',
	},
	contentContainer: {
		backgroundColor: '#010fcc',
		opacity: '70%',
	},
});

const ProgramsBDContent = () => {
	const classes = useStyles();
	return (
		<Fragment>
			<MainGridLeft img={books2} color='#010fcc'>
				<Typography variant='h4' gutterBottom className={classes.listTitle}>
					Programs
				</Typography>
				<hr />
				<br />
				<List className={classes.list}>
					<ListItem>
						<ListItemIcon>
							<FiberManualRecordIcon style={{ color: blueGrey[50] }} />
						</ListItemIcon>
						<ListItemText
							classes={{
								primary: classes.listTextP,
								secondary: classes.listTextS,
							}}
							primary='Early Intervention'
							secondary='Ut ad dolor sint deserunt nulla anim anim laborum do elit ullamco dolor do.'
						/>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<FiberManualRecordIcon style={{ color: blueGrey[50] }} />
						</ListItemIcon>
						<ListItemText
							classes={{
								primary: classes.listTextP,
								secondary: classes.listTextS,
							}}
							primary='Little Explorers'
							secondary='Ut ad dolor sint deserunt nulla anim anim laborum do elit ullamco dolor do.'
						/>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<FiberManualRecordIcon style={{ color: blueGrey[50] }} />
						</ListItemIcon>
						<ListItemText
							classes={{
								primary: classes.listTextP,
								secondary: classes.listTextS,
							}}
							primary='Little Learners'
							secondary='Ut ad dolor sint deserunt nulla anim anim laborum do elit ullamco dolor do.'
						/>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<FiberManualRecordIcon style={{ color: blueGrey[50] }} />
						</ListItemIcon>
						<ListItemText
							classes={{
								primary: classes.listTextP,
								secondary: classes.listTextS,
							}}
							primary='School Readiness Program'
							secondary='Ut ad dolor sint deserunt nulla anim anim laborum do elit ullamco dolor do.'
						/>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<FiberManualRecordIcon style={{ color: blueGrey[50] }} />
						</ListItemIcon>
						<ListItemText
							classes={{
								primary: classes.listTextP,
								secondary: classes.listTextS,
							}}
							primary='Teleintervention Program'
							secondary='Ut ad dolor sint deserunt nulla anim anim laborum do elit ullamco dolor do.'
						/>
					</ListItem>
				</List>
			</MainGridLeft>
		</Fragment>
	);
};

export default ProgramsBDContent;
