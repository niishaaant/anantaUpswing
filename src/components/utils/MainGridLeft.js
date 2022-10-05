import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	mainImg: {
		height: '30vh',
		[theme.breakpoints.up('lg')]: {
			height: '100vh',
		},
		overflow: 'hidden',

		backgroundImage: (props) => `url(${props.img})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		overflowInline: 'hidden',
		backgroundPosition: 'center',
	},
	mainContainer: {
		top: 0,
		width: '100%',
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'row',
		zIndex: 10,
	},
	mainText: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		minHeight: '100vh',
		backgroundColor: (props) => `${props.color}`,
		opacity: '90%',
	},
}));

const MainGridLeft = (props) => {
	const classes = useStyles(props);
	return (
		<React.Fragment>
			<Paper className={classes.mainContainer}>
				<Grid container>
					<Grid item lg={6} md={12} className={classes.mainImg}></Grid>
					<Grid item lg={6} md={12}>
						<Paper className={classes.mainText}>{props.children}</Paper>
					</Grid>
				</Grid>
			</Paper>
		</React.Fragment>
	);
};

export default MainGridLeft;
