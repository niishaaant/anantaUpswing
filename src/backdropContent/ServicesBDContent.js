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
import classroom from '../components/pictures/classroom.jpg';

const useStyles = makeStyles({
	listTitle: {
		marginLeft: '10%',
		marginTop: '5vh',
		color: 'white',
	},
	listTextP: {
		fontSize: '1.5rem',
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
		backgroundImage: `url(${classroom})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		overflowInline: 'hidden',
	},
	contentContainer: {
		backgroundColor: '#17a2b8',
		opacity: '90%',
	},
});

const ServicesBDContent = () => {
	const classes = useStyles();
	return (
		<Fragment>
			<MainGridLeft img={classroom} color='#17a2b8'>
				<Typography variant='h4' gutterBottom className={classes.listTitle}>
					Service
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
							primary='Audiology Services'
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
							primary='Auditory Verbal Therapy'
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
							primary='Occupational Therapy'
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
							primary='Speech & Language Therapy'
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
							primary='Cognitive Behaviour Therapy'
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
							primary='Facilities'
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
							primary='Enrollment Program'
							secondary='Ut ad dolor sint deserunt nulla anim anim laborum do elit ullamco dolor do.'
						/>
					</ListItem>
				</List>
			</MainGridLeft>
		</Fragment>
	);
};

export default ServicesBDContent;
