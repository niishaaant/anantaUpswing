import React, { useState } from 'react';
import {
	Button,
	Grid,
	Paper,
	Typography,
	Dialog,
	ButtonBase,
	Slide,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { blueGrey, blue } from '@material-ui/core/colors';
import { Clear } from '@material-ui/icons';
import MainGridRight from './utils/MainGridRight';

import teacher from './pictures/teacher.jpg';
import books from './pictures/books.jpg';
import student from './pictures/student.jpg';
import listning from './pictures/listning.jpg';
import conditions from './pictures/conditions.jpg';
import ServicesBDContent from '../backdropContent/ServicesBDContent';
import ProgramsBDContent from '../backdropContent/ProgramsBDContent';
import AssesmentBDContent from '../backdropContent/AssesmentBDContent';
import ConditionsBDContent from '../backdropContent/ConditionsBDContent';
import Cards from './Cards';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

const useStyle = makeStyles((theme) => ({
	mainImg: {
		height: '100vh',
		width: '50%',
		top: 0,
		right: 0,
	},
	mainContainer: {
		top: 0,
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		zIndex: 10,
	},
	landingTextnCards: {
		marginTop: '4.5rem',
		padding: '2rem',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-evenly',
	},
	landingBtn: {
		marginTop: '1.2rem',
		padding: '0.5rem',
		transition: '0.2s',
		'&:hover': {
			color: blue[50],
			backgroundColor: blueGrey[700],
		},
	},
	text: {
		marginBottom: '2rem',
		marginTop: '5rem',
		marginLeft: '1rem',
	},
	cards: {
		padding: '1rem',
	},
	backdrop: {
		zIndex: 40,
		color: '#fff',
		backgroundColor: blueGrey[800],
	},
	close: {
		position: 'absolute',
		zIndex: 40,
		top: 0,
		right: 0,
		padding: '0.5rem',
	},
	cardAction: {
		display: 'block',
		textAlign: 'inherit',
	},
	BDcontent: {
		width: '100%',
		height: '100vh',
	},
}));

const Landing = () => {
	const classes = useStyle();
	const [openBD, setOpenBD] = useState(false);
	const [Content, setContent] = useState('');
	const backdropContent = (content) => {
		switch (content) {
			case 'services': {
				return <ServicesBDContent className={classes.BDcontent} />;
			}
			case 'programs': {
				return <ProgramsBDContent className={classes.BDcontent} />;
			}
			case 'assesment': {
				return <AssesmentBDContent className={classes.BDcontent} />;
			}
			case 'conditions': {
				return <ConditionsBDContent className={classes.BDcontent} />;
			}
			default:
				break;
		}
	};

	return (
		<React.Fragment>
			{/* <Paper className={classes.mainContainer}>
				<span className={classes.landingTextnCards}> */}
			<MainGridRight img={teacher}>
				<span className={classes.text}>
					<Typography variant='h4' gutterBottom color='secondary'>
						We provide Early intervention services to children,
					</Typography>
					<Typography variant='h6' gutterBottom>
						adolescents & their family till the age of 17 years old with a
						variety of physical or mental health concerns ranging from speech &
						language delays, motor developmental disorder, neurodevelopmental
						delays, academics or behavior concerns.
					</Typography>
					<Button
						variant='outlined'
						className={classes.landingBtn}
						size='medium'
						gutterBottom
					>
						{' '}
						Learn More About Us{' '}
					</Button>
				</span>
				<span className={classes.cards}>
					<Grid container spacing={1} style={{ marginBottom: 5 }}>
						<Grid item md={6} sm={12}>
							<ButtonBase
								onClick={() => {
									setOpenBD(true);
									setContent('services');
								}}
								className={classes.cardActions}
							>
								<Cards title='Services' bgcolor='#17a2b8' image={student}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</Cards>
							</ButtonBase>
						</Grid>
						<Grid item md={6} sm={12}>
							<ButtonBase
								onClick={() => {
									setOpenBD(true);
									setContent('programs');
								}}
								className={classes.cardActions}
							>
								<Cards title='Programs' bgcolor='#010fcc' image={books}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</Cards>
							</ButtonBase>
						</Grid>
					</Grid>
					<Grid container spacing={1}>
						<Grid item md={6} sm={12}>
							<ButtonBase
								onClick={() => {
									setOpenBD(true);
									setContent('assesment');
								}}
								className={classes.cardActions}
							>
								<Cards title='Assesment' bgcolor='#08ff08' image={listning}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</Cards>
							</ButtonBase>
						</Grid>
						<Grid item md={6} sm={12}>
							<ButtonBase
								onClick={() => {
									setOpenBD(true);
									setContent('conditions');
								}}
								className={classes.cardActions}
							>
								<Cards title='Conditions' bgcolor='#ed872d' image={conditions}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</Cards>
							</ButtonBase>
						</Grid>
					</Grid>
				</span>
			</MainGridRight>
			{/* </span>
				<img src={teacher} alt='teacher' className={classes.mainImg} />
			</Paper> */}

			<Dialog
				fullScreen
				open={openBD}
				className={classes.backdrop}
				TransitionComponent={Transition}
			>
				{backdropContent(Content)}
				<ButtonBase
					className={(classes.cardAction, classes.close)}
					onClick={() => {
						setOpenBD(false);
					}}
				>
					<Clear fontSize='large' />
				</ButtonBase>
			</Dialog>
		</React.Fragment>
	);
};

export default Landing;
