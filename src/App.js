import './App.css';
import React, {Component} from 'react';
import {Icon} from 'react-fa';
import LandingPage from './components/LandingPage/LandingPage.component';

class App extends Component {
	render () {
		return (
			<div >
				<LandingPage />
				hello world <Icon name='rocket' />
			</div>
		);
	}
}

export default App;
