import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Verify from './pages/Verify';
import DashBoard from './pages/DashBoard';
import Presidency from './pages/Presidency';
import GeneralStats from './pages/GeneralStats';
import Guber from './pages/Guber';
import NASS from './pages/NASS';
import Messaging from './pages/Messaging';
import UploadResult from './pages/UploadResult';
//import Verify from './pages/Verify';

export default class Routes extends Component {
	render() {
		return(
			<Router>
			    <Stack key="root">
				<Scene key="dashboard" component={DashBoard} title="DashBoard" initial={true}/>
				<Scene key="signup" component={Signup} title="Register"/>
			    <Scene key="login" component={Login} title="Login" />
				<Scene key="presidency" component={Presidency} title="Presidential Data" />
				<Scene key="uploadresult" component={UploadResult} title="Upload Result" />
				<Scene key="generalstats" component={GeneralStats} title="General Stats" />
				<Scene key="guber" component={Guber} title="Gubernatorial Data" />
				<Scene key="nass" component={NASS} title="NASS Data" />
				<Scene key="messaging" component={Messaging} title="Login" />
				<Scene key="verify" component={Verify} title="Verify Code"/>
			      
			    </Stack>
			 </Router>
			)
	}
}