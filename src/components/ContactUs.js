import React from 'react';
import {
	Typography,
	Paper,
	Grid,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Phone, Mail, MyLocation, ArrowDownward } from '@material-ui/icons';
import classroom2 from './pictures/classroom2.jpg';

const useStyles = makeStyles((theme) => ({
	mainImg: {
		height: '100vh',
		overflow: 'hidden',
		top: 0,
		right: 0,
		backgroundImage: `url(${classroom2})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		overflowInline: 'hidden',
	},
	mainContainer: {
		top: 0,
		width: '100%',
		height: '100vh',
		display: 'flex',
		flexDirection: 'row',
		zIndex: 10,
	},
	textnform: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		height: '100vh',
	},
	list: {
		width: '50%',
		marginBottom: '3rem',
	},
	fromContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '1rem',
	},
	mapnsocial: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		paddingTop: '3rem',
	},
	listTextP: {
		fontSize: '1.75rem',
	},
	heading: { marginTop: '7.5rem' },
}));

const ContactUs = () => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Paper className={classes.mainContainer}>
				<Grid container>
					<Grid item lg={6}>
						<Paper className={classes.textnform}>
							<Typography
								variant='h2'
								className={classes.heading}
								color='secondary'
							>
								Contact Us
							</Typography>
							<Typography variant='h4' gutterBottom color='textSecondary'>
								Reach out to us.
							</Typography>
							<List
								component='nav'
								className={classes.list}
								aria-label='contact info'
								gutterBottom
							>
								<ListItem divider>
									<ListItemIcon>
										<Phone style={{ color: '#17a2b8' }} />
									</ListItemIcon>
									<ListItemText
										primary='+919878476357'
										classes={{
											primary: classes.listTextP,
										}}
									/>
								</ListItem>

								<ListItem divider>
									<ListItemIcon>
										<Phone style={{ color: '#17a2b8' }} />
									</ListItemIcon>
									<ListItemText
										primary='+919354086266'
										classes={{
											primary: classes.listTextP,
										}}
									/>
								</ListItem>
								<ListItem divider>
									<ListItemIcon>
										<Mail style={{ color: '#17a2b8' }} />
									</ListItemIcon>
									<ListItemText
										primary='Listninggears.amritsar@gmail.com'
										classes={{
											primary: classes.listTextP,
										}}
									/>
								</ListItem>

								<ListItem>
									<ListItemIcon>
										<MyLocation style={{ color: '#17a2b8' }} />
									</ListItemIcon>
									<ListItemText
										primary='HS Tower, Main Batala Road, Opposite Police Chowki, Vijay Nagar, Amritsar.'
										classes={{
											primary: classes.listTextP,
										}}
									/>
								</ListItem>
							</List>
							<Typography variant='h4' color='textSecondary'>
								{' '}
								Or fill the form below for any queries or messages.{' '}
							</Typography>
							<ArrowDownward fontSize='large' color='secondary' />
						</Paper>
					</Grid>
					<Grid item lg={6} className={classes.mainImg}></Grid>
				</Grid>
			</Paper>
			<Paper className={classes.mapnsocial}>
				<Grid container direction='row'>
					<Grid item lg={5}>
						<div className={classes.fromContainer}>
							<iframe
								src='https://docs.google.com/forms/d/e/1FAIpQLSeBF4aZYRgAq_SOKoGIqxgnz9wNpDdw_-ziXh4dV9O2m8Bo8A/viewform?embedded=true'
								width='640'
								height='450'
								frameborder='0'
								marginheight='0'
								marginwidth='0'
								title='form'
							>
								Loading…
							</iframe>
						</div>
					</Grid>
					<Grid item md={8} lg={7}>
						<div class='mapouter'>
							<div class='gmap_canvas'>
								<iframe
									width='1080'
									height='500'
									id='gmap_canvas'
									src='https://maps.google.com/maps?q=HS%20Tower,%20Batala%20Rd,%20Opposite%20Police%20Chowki,%20Vijay%20Nagar,%20Punjab%20143001&t=k&z=13&ie=UTF8&iwloc=&output=embed'
									frameborder='0'
									scrolling='no'
									marginheight='0'
									marginwidth='0'
									title='map'
								></iframe>
								<a href='https://youtube-embed-code.com'>youtube embed code</a>
								<br />
								<a href='https://www.embedgooglemap.net'>.</a>
							</div>
						</div>
					</Grid>
				</Grid>
			</Paper>
		</React.Fragment>
	);
};

export default ContactUs;
