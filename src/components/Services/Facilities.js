import React from 'react';
import {
	Typography,
	Paper,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	Grid,
} from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { Check } from '@material-ui/icons';
import Carousel from 'react-material-ui-carousel';
import MainGridRight from '../utils/MainGridRight';
import theme1 from '../utils/themes/servicestheme';
import child from '../pictures/child.jpg';
import books from '../pictures/books.jpg';
import books2 from '../pictures/books2.jpg';
import classroom from '../pictures/classroom.jpg';
import classroom2 from '../pictures/classroom2.jpg';
import ButtonGrpServices from '../utils/ButtonGrpServices';

const useStyles = makeStyles((theme) => ({
	heading: {
		marginLeft: '5rem',
		marginRight: '5rem',
		marginTop: '4rem',
	},
	bodyText: {
		marginLeft: '3rem',
		marginRight: '1rem',
		fontSize: '1.15rem',
	},
	listTextP: {
		fontSize: '1.15rem',
	},
	carouselContainer: {
		padding: '3rem',
		display: 'flex',
		justifyContent: 'center',
	},
}));

const Item = (props) => {
	const useStyles = makeStyles(() => ({
		carousel: {
			overflow: 'hidden',
			borderRadius: '10px',
			height: '70vh',
		},
	}));
	const classes = useStyles();
	return (
		<Grid container>
			<Grid lg={12} className={classes.carousel}>
				<img src={props.item} alt='carouselPicture' />
			</Grid>
		</Grid>
	);
};

const Facilities = () => {
	const classes = useStyles();
	const pictures = [books, books2, classroom, classroom2];
	return (
		<ThemeProvider theme={theme1}>
			<MainGridRight img={child}>
				<Typography
					variant='h3'
					className={classes.heading}
					color='secondary'
					gutterBottom
				>
					Facilities
				</Typography>
				<hr />
				<br />
				<Typography className={classes.bodyText}>
					We, at Listening Ears, provide a wide range of teaching and training
					facilities to our students to mainstream them into regular education
					in future. Our facilities and amenities are developed to orient our
					students and their parents to the Listening Ears with an objective of
					creating an enabling space for the hearing impaired children, we have
					created a world-class facility that offers customized solutions.
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
							primary='Team of professionals : AVT, Child Psychologist, Audiologist, Speech Therapist, Occupational Therapist, Music Therapist, Early Childhood Specialist – who work together at Listening Ears.'
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
							primary='assessSound treated classrooms for individualized, Auditory Verbal Therapy, Speech & Language Therapy or Occupational Therapy..
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
							primary='These are sound treated rooms to monitor and improve signal to noise ratio with multimedia facilities.'
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
							primary='iPad assisted teaching for interactive and effective education session.'
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
							primary='An indoor communal space for group activities and lessons.'
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
							primary='An indoor pollution free space for play, exercise, gardening, etc.
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
							primary='Toddler’s Library.'
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
							primary='Parent-therapist partnership because Auditory Verbal Therapy is not just about parents’ participation. It is a powerful relationship that can match the therapist’s expertise in speech, language, and listening development with the parents’ unique knowledge of their child. It produces amazing results.
                            Doll HouseReceptionschool gallery'
						/>
					</ListItem>
				</List>
			</MainGridRight>
			<Paper className={classes.carouselContainer}>
				<Carousel>
					{pictures.map((pic, i) => {
						return <Item key={i} item={pic} />;
					})}
				</Carousel>
			</Paper>
			<ButtonGrpServices />
		</ThemeProvider>
	);
};

export default Facilities;
