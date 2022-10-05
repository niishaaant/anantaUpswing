// imports and styling

import {
	Typography,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { Check } from '@material-ui/icons';
import MainGridRight from '../utils/MainGridRight';
import MainGridLeft from '../utils/MainGridLeft';
import theme4 from '../utils/themes/conditionstheme';
import ButtonGrpPrograms from '../utils/ButtonGrpPrograms';
import child from '../pictures/child.jpg';
import conditions from '../pictures/conditions.jpg';

const useStyles = makeStyles((theme) => ({
	heading: {
		marginLeft: '5rem',
		marginRight: '5rem',
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

// theme and heading

<ThemeProvider theme={theme4}>
			<MainGridLeft img={child}>
				<Typography
					variant='h3'
					className={classes.heading}
					color='secondary'
					gutterBottom
				>
					Programs
				</Typography>
				<hr />
				<br />
                </MainGridLeft>
                <ButtonGrpPrograms />
                </ThemeProvider>

// list


<List className={classes.bodyText}>
					<ListItem>
						<ListItemIcon>
							<Check color='secondary' />
						</ListItemIcon>
						<ListItemText
							classes={{
								primary: classes.listTextP,
							}}
							primary='supp'
						/>
					</ListItem></List>
