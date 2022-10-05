import React from 'react';
import {
	AppBar,
	Button,
	ButtonGroup,
	Toolbar,
	Avatar,
} from '@material-ui/core';
import {
	makeStyles,
	createMuiTheme,
	ThemeProvider,
} from '@material-ui/core/styles';
import { blueGrey, blue } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import logo from './pictures/logo1.png';

const useStyles = makeStyles((theme) => ({
	logo: {
		padding: '0 5px',
	},
	appBar: {
		padding: '0.25rem 1rem',
		borderBottom: ` solid 1px  ${blue[300]}`,
		opacity: '95%',
		zIndex: 20,
		top: 0,
		bottom: 'auto',
	},
	navBtn: {
		color: '#fff',
		width: 'auto',
		padding: '10px',
		fontWeight: 500,
		fontSize: '1.2rem',
		transition: '0.3s',
		'&:hover': {
			color: blue[200],
		},
	},
	navItems: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7),
		marginRight: '1rem',
	},
}));

const theme = createMuiTheme({
	palette: {
		primary: {
			main: blueGrey[700],
		},
		accent: {
			main: blue[50],
		},
	},
});

const NavButtons = (props) => {
	const classes = useStyles();
	return (
		<Button variant='text' className={classes.navBtn} size='md'>
			{props.children}
		</Button>
	);
};

const NavBar = () => {
	const classes = useStyles();
	return (
		<>
			<ThemeProvider theme={theme}>
				<AppBar className={classes.appBar} color='primary'>
					<Toolbar className={classes.navItems}>
						<NavButtons>
							<Link to='/' className='Link'>
								<Avatar alt='logo-nbg' src={logo} className={classes.large} />
								Ananta Upswing Care
							</Link>
						</NavButtons>
						<ButtonGroup variant='outlined'>
							<NavButtons>
								<Link to='/services' className='Link'>
									Services
								</Link>
							</NavButtons>
							<NavButtons>
								<Link to='/programs' className='Link'>
									Programs
								</Link>
							</NavButtons>
							<NavButtons>
								<Link to='/assesment/1' className='Link'>
									Assesment
								</Link>
							</NavButtons>
							<NavButtons>
								<Link to='/conditions' className='Link'>
									Conditions
								</Link>
							</NavButtons>
							<NavButtons>
								<Link to='/contact' className='Link'>
									Cantact
								</Link>
							</NavButtons>
						</ButtonGroup>
					</Toolbar>
				</AppBar>
			</ThemeProvider>
		</>
	);
};

export default NavBar;
