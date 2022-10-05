import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import MainGridRight from '../utils/MainGridRight';
import theme1 from '../utils/themes/servicestheme';
import child from '../pictures/child.jpg';
import ButtonGrpServices from '../utils/ButtonGrpServices';

const useStyles = makeStyles((theme) => ({
	heading: {
		marginLeft: '5rem',
		marginRight: '5rem',
		marginTop: '5rem',
	},
	bodyText: {
		marginLeft: '3rem',
		marginRight: '1rem',
		fontSize: '1.15rem',
	},
	listTextP: {
		fontSize: '1.15rem',
	},
}));

const CognitiveBehaviourTherapy = () => {
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme1}>
			<MainGridRight img={child}>
				<Typography
					variant='h3'
					className={classes.heading}
					color='secondary'
					gutterBottom
				>
					Cognitive Behaviour Therapy
				</Typography>
				<hr />
				<br />
				<Typography className={classes.bodyText} paragraph>
					A child’s success in life, to a great extent, is dependent on the
					mental health. However, for children with physical disabilities like
					hearing loss, depression and anxiety can strike without warning.
				</Typography>
				<Typography className={classes.bodyText} paragraph>
					Both biological and psychological factors can trigger negative
					feelings in a hearing-impaired child. Unpleasant experiences are often
					viewed by them as a personal failing. They start to think that
					whatever is happening is because they are unintelligent or incapable.
					Therefore, it is extremely important that such confused or inaccurate
					thinking patterns are contained before they become deep-seeded.
				</Typography>
				<Typography className={classes.bodyText} paragraph>
					Cognitive behavioral therapy (CBT) for kids is a combination of
					psychotherapy and behavioral therapy treatment, which helps a child to
					solve problems and boost happiness by changing the way they think and
					behave. One major advantage of cognitive therapy is that it tends to
					be short-term, and success can usually be achieved with 5-10 months of
					treatment.
				</Typography>
				<Typography className={classes.bodyText} paragraph>
					At Listening Ears, we have developed cognitive evaluation and
					behavioral assessment procedures specific to children with hearing
					loss. An accurate cognitive evaluation helps to determine the
					strengths and weaknesses of a child and allows therapists to zero down
					on the specific cognitive impairments which need to be tackled. This
					helps to get the child ready for mainstreaming.
				</Typography>
				<Typography className={classes.bodyText} paragraph>
					Cognitive evaluation and CBT are also important because studies have
					found a possible link between hearing loss and neurocognitive disorder
					(NCD). In such conditions, the brain’s ability to reason and retain
					information is affected. Since the diagnosis of NCD contains several
					auditory-verbal components, hearing loss in a child can often
					compromise the results. A well-trained and vigilant audiologist, on
					the other hand, can find out if hearing loss is masking the presence
					of NCD. The emphatic cognitive behavioral therapists and audiologists
					at Listening Ears are trained to teach a hearing-impaired child useful
					and practical strategies that they can use in everyday life – even
					after the treatment has finished.
				</Typography>
			</MainGridRight>
			<ButtonGrpServices />
		</ThemeProvider>
	);
};

export default CognitiveBehaviourTherapy;
