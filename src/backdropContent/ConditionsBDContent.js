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
import conditions2 from '../components/pictures/conditions2.jpg';

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
		backgroundImage: `url(${conditions2})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		overflowInline: 'hidden',
	},
	contentContainer: {
		backgroundColor: '#ed872d',
		opacity: '90%',
	},
});

const ConditionsBDContent = () => {
	const classes = useStyles();
	return (
		<Fragment>
			<MainGridLeft img={conditions2} color='#ed872d'>
				<Typography variant='h4' gutterBottom className={classes.listTitle}>
					Conditions
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
							primary='Autism Spectrum Disorder'
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
							primary='Down Syndrome'
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
							primary='Celebral Palsy'
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
							primary='Attention Deficits Hyperactivity Disorder (ADHD)'
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
							primary='Dyslexia'
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
							primary='Hearing Impairment'
							secondary='Ut ad dolor sint deserunt nulla anim anim laborum do elit ullamco dolor do.'
						/>
					</ListItem>
				</List>
			</MainGridLeft>
		</Fragment>
	);
};

export default ConditionsBDContent;
