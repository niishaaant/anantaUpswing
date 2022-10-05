import { createMuiTheme } from '@material-ui/core';

const theme1 = createMuiTheme({
	typography: {
		fontFamily: ['Koho', 'sans-serif'].join(','),
	},
	palette: {
		secondary: {
			main: '#17a2b8',
		},
	},
});

export default theme1;
