import React from 'react';
import {
	Typography,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Grid,
	Paper,
	Accordion,
	AccordionDetails,
	AccordionSummary,
} from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { Check, ExpandMore } from '@material-ui/icons';
import theme3 from '../utils/themes/assesmenttheme';
import child from '../pictures/child.jpg';
import content from './accorditionContent';

const useStyles = makeStyles((theme) => ({
	heading: {
		marginLeft: '5rem',
		marginRight: '5rem',
		marginTop: '6rem',
	},
	bodyText: {
		marginLeft: '3rem',
		marginRight: '1rem',
		fontSize: '1.15rem',
	},
	listTextP: {
		fontSize: '1.15rem',
	},
	mainImg: {
		height: '123vh',
		overflow: 'hidden',
		top: 0,
		left: 0,
		backgroundImage: `url(${child})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		overflowInline: 'hidden',
	},
	mainContainer: {
		top: 0,
		width: '100%',
		height: '120vh',
		display: 'flex',
		flexDirection: 'row',
		zIndex: 10,
	},
	mainText: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		height: '120vh',
	},
	accordionContainer: {
		width: '99%',
	},
	listContainer: {
		display: 'flex',
		flexDirection: 'column',
	},
}));

const DisplayAccordian = (Id) => {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(Id);

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};
	return (
		<div className={classes.accordionContainer}>
			{content.map((item) => (
				<React.Fragment>
					<Accordion
						expanded={expanded === item.id}
						onChange={handleChange(item.id)}
					>
						<AccordionSummary expandIcon={<ExpandMore />} id={item.id}>
							<Typography variant='h5' color='secondary'>
								{item.title}
							</Typography>
						</AccordionSummary>
						<AccordionDetails className={classes.listContainer}>
							<React.Fragment>
								<Typography className={classes.bodyText}>
									{item.summary}
								</Typography>

								<List className={classes.bodyText}>
									{item.list.map((li) => (
										<ListItem>
											<ListItemIcon>
												<Check color='secondary' />
											</ListItemIcon>
											<ListItemText
												classes={{
													primary: classes.listTextP,
												}}
												primary={li}
											/>
										</ListItem>
									))}
								</List>
							</React.Fragment>
						</AccordionDetails>
					</Accordion>
				</React.Fragment>
			))}
		</div>
	);
};

const Assesment = ({ match }) => {
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme3}>
			<React.Fragment>
				<Paper className={classes.mainContainer}>
					<Grid container>
						<Grid item lg={6}>
							<Paper className={classes.mainText}>
								<Typography
									variant='h3'
									className={classes.heading}
									color='secondary'
									gutterBottom
								>
									Assesment
								</Typography>
								<hr />
								<br />

								{DisplayAccordian(match.params.id)}
							</Paper>
						</Grid>
						<Grid item lg={6} className={classes.mainImg}></Grid>
					</Grid>
				</Paper>
			</React.Fragment>
		</ThemeProvider>
	);
};

export default Assesment;
