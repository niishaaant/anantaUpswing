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

const ButtonGrpConditions = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<ButtonGroup
				variant='contained'
				color='secondary'
				aria-label='text primary button group'
			>
				<Button>
					<Link className='Link' to='/programs/early-intervention'>
						Autism Spectum Disorder
					</Link>
				</Button>
				<Button>
					<Link className='Link' to='/programs/little-explorers'>
						Down Syndrome
					</Link>
				</Button>
				<Button>
					<Link className='Link' to='/programs/little-learners'>
						Celebral Palsy
					</Link>
				</Button>
				<Button>
					<Link className='Link' to='/programs/school-readiness-program'>
						Attention Deficits Hyperactivity Disorder
					</Link>
				</Button>
				<Button>
					<Link className='Link' to='/programs/teleintervention-program'>
						Dyslexia
					</Link>
				</Button>
				<Button>
					<Link className='Link' to='/programs/teleintervention-program'>
						Hearing Impairment
					</Link>
				</Button>
			</ButtonGroup>
		</div>
	);
};

export default ButtonGrpConditions;
