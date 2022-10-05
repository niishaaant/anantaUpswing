import React, { Fragment } from 'react';
import {
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
import assesment from '../components/pictures/assesment.jpg';

const useStyles = makeStyles({
	listTitle: {
		marginLeft: '10%',
		marginTop: '5vh',
		color: '#fff',
	},
	listTextP: {
		fontSize: '1.75rem',
		color: '#fff',
	},
	listTextS: {
		fontSize: '1.1rem',
		color: '#fff',
	},
	img: {
		width: '400px',
		height: '100vh',
		overflow: 'hidden',
		top: 0,
		right: 0,
		backgroundImage: `url(${assesment})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		overflowInline: 'hidden',
	},
	contentContainer: {
		backgroundColor: '#08ff08',
		opacity: '70%',
	},
});

const AssesmentBDContent = () => {
	const classes = useStyles();
	return (
		<Fragment>
			<MainGridLeft img={assesment} color='#08ff08'>
				<Typography variant='h4' gutterBottom className={classes.listTitle}>
					Assesment
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
							primary='Hearing Assesment'
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
							primary='Screening Assesment'
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
							primary='Neuro Development Assesment'
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
							primary='Speech & Language Assesment'
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
							primary='Occupational Therapy Assesment'
							secondary='Ut ad dolor sint deserunt nulla anim anim laborum do elit ullamco dolor do.'
						/>
					</ListItem>
				</List>
			</MainGridLeft>
		</Fragment>
	);
};

export default AssesmentBDContent;
