import React, { useState } from 'react';
import { Typography, Card, CardContent, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		maxWidth: 275,
		minHeight: 150,
		maxHeight: 250,
		cursor: 'pointer',
		transition: 'transform 0.15s ease-in-out',
	},
	cardHovered: {
		transform: 'scale3d(1.05,1.05,1)',
		opacity: '95%',
	},
	media: {
		display: 'block',
	},
});

const Cards = (props) => {
	const classes = useStyles();
	const [state, setstate] = useState({
		raised: false,
		shadow: 1,
	});
	return (
		<Card
			className={classes.root}
			classes={{ root: state.raised ? classes.cardHovered : '' }}
			style={{ backgroundColor: `${props.bgcolor}` }}
			onMouseOver={() => setstate({ raised: true, shadow: 3 })}
			onMouseOut={() => setstate({ raised: false, shadow: 1 })}
			raised={state.raised}
			zdepth={state.shadow}
		>
			<CardMedia
				className={classes.media}
				style={{ height: 0, paddingBottom: '40%' }}
				image={props.image}
				title={props.imageTitle}
			/>
			<CardContent>
				<Typography variant='h5' gutterBottom align='left'>
					{props.title}
				</Typography>
				<Typography variant='body1' align='left'>
					{props.children}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default Cards;
