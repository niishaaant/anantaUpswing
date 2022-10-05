import { createMuiTheme } from '@material-ui/core';

const theme2 = createMuiTheme({
	typography: {
		fontFamily: ['Koho', 'sans-serif'].join(','),
	},
	palette: {
		secondary: {
			main: '#010fcc',
		},
	},
});

export default theme2;
