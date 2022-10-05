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

const ButtonGrpPrograms = () => {
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
						Early Intervention
					</Link>
				</Button>
				<Button>
					<Link className='Link' to='/programs/little-explorers'>
						Little Explorers
					</Link>
				</Button>
				<Button>
					<Link className='Link' to='/programs/little-learners'>
						Little Learners
					</Link>
				</Button>
				<Button>
					<Link className='Link' to='/programs/school-readiness-program'>
						School Readiness Program
					</Link>
				</Button>
				<Button>
					<Link className='Link' to='/programs/teleintervention-program'>
						Teleintervention Program
					</Link>
				</Button>
			</ButtonGroup>
		</div>
	);
};

export default ButtonGrpPrograms;
