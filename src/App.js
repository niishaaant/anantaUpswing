import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import Social from './components/Social';
import Landing from './components/Landing';
import Services from './components/Services/Services';
import Programs from './components/programs/Programs';
import ContactUs from './components/ContactUs';
import AudiologyServices from './components/Services/AudiologyServices';
import AuditoryVerbalTherapy from './components/Services/AuditoryVerbalTherapy';
import OccupationalTherapy from './components/Services/OccupationalTherapy';
import SpeechAndLanguageTherapy from './components/Services/SpeechAndLanguageTherapy';
import CognitiveBehaviourTherapy from './components/Services/CognitiveBehaviourTherapy';
import EnrollmentProgram from './components/Services/EnrollmentProgram';
import Facilities from './components/Services/Facilities';
import EarlyIntervention from './components/programs/EarlyIntervention';
import LittleExplorers from './components/programs/LittleExplorers';
import LittleLearners from './components/programs/LittleLearners';
import SchoolReadinessProgram from './components/programs/SchoolReadinessProgram';
import TeleinterventionProgram from './components/programs/TeleinterventionProgram';
import Assesment from './components/assesment/Assesment';
import Conditions from './components/conditions/Conditions';

const theme = createMuiTheme({
	typography: {
		fontFamily: ['Koho', 'sans-serif'].join(','),
	},
});

const App = () => {
	return (
		<Router>
			<Fragment>
				<ThemeProvider theme={theme}>
					<NavBar />
					<Route exact path='/' component={Landing} />
					<Switch>
						<Route exact path='/services' component={Services} />
						<Route
							exact
							path='/services/audiology-services'
							component={AudiologyServices}
						/>
						<Route
							exact
							path='/services/auditory-verbal-therapy'
							component={AuditoryVerbalTherapy}
						/>
						<Route
							exact
							path='/services/occupational-therapy'
							component={OccupationalTherapy}
						/>
						<Route
							exact
							path='/services/speech-and-language-therapy'
							component={SpeechAndLanguageTherapy}
						/>
						<Route
							exact
							path='/services/cognitive-behaviour-therapy'
							component={CognitiveBehaviourTherapy}
						/>
						<Route exact path='/services/facilities' component={Facilities} />
						<Route
							exact
							path='/services/enrollment-program'
							component={EnrollmentProgram}
						/>

						<Route exact path='/programs' component={Programs} />
						<Route
							exact
							path='/programs/early-intervention'
							component={EarlyIntervention}
						/>
						<Route
							exact
							path='/programs/little-explorers'
							component={LittleExplorers}
						/>
						<Route
							exact
							path='/programs/little-learners'
							component={LittleLearners}
						/>
						<Route
							exact
							path='/programs/school-readiness-program'
							component={SchoolReadinessProgram}
						/>
						<Route
							exact
							path='/programs/teleintervention-program'
							component={TeleinterventionProgram}
						/>
						<Route exact path='/assesment/:id' component={Assesment} />
						<Route exact path='/conditions' component={Conditions} />
						<Route exact path='/contact' component={ContactUs} />
					</Switch>
					<Social />
				</ThemeProvider>
			</Fragment>
		</Router>
	);
};

export default App;
