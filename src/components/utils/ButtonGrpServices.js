import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button, ButtonGroup } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		position: 'fixed',
		bottom: 0,
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));

const ButtonGrpServices = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<ButtonGroup
				variant='contained'
				color='secondary'
				aria-label='text primary button group'
			>
				<Button>
					<Link className='Link' to='/services/audiology-services'>
						Audiology Services
					</Link>
				</Button>
				<Button>
					<Link className='Link' to='/services/auditory-verbal-therapy'>
						Auditory Verbal Therapy
					</Link>
				</Button>
				<Button>
					<Link className='Link' to='/services/occupational-therapy'>
						Occupational Therapy
					</Link>
				</Button>
				<Button>
					<Link className='Link' to='/services/speech-and-language-therapy'>
						Speech & Language Therapy
					</Link>
				</Button>
				<Button>
					<Link className='Link' to='/services/cognitive-behaviour-therapy'>
						Cognitive Behaviour Therapy
					</Link>
				</Button>
				<Button>
					<Link className='Link' to='/services/facilities'>
						Facilities
					</Link>
				</Button>
				<Button>
					<Link className='Link' to='/services/enrollment-program'>
						Enrollment Program
					</Link>
				</Button>
			</ButtonGroup>
		</div>
	);
};

export default ButtonGrpServices;
