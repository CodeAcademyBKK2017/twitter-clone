import HeaderStyle from './Header.style.css';
import LandingPageStyle from '../LandingPage/LandingPage.style.css';
import CircleStyle from '../Circle/Circle.style.css';
import React, {Component} from 'react';
import Circle from '../Circle/Circle.component';
import SearchBar from '../SearchBar/SearchBar.component';
import Icon from 'react-ionicons';

class Header extends Component {
	render () {
		return (
			<div className={`${LandingPageStyle.box} ${HeaderStyle.twitterHeader}`}>
				<div className={HeaderStyle.leftContent}>
					<div className={HeaderStyle.brandContainer}>
						<Circle isBrand={true} iconName="logo-twitter"/>
					</div>
					
					<div className={HeaderStyle.lineSpliter}/>

					<div className={HeaderStyle.buttonContainer}>
						<Circle iconName="ios-notifications-outline"/>
						<Circle iconName="ios-mail-outline"/>
						<Circle iconName="ios-add"/>
						<Circle/>
					</div>
				</div>

				<div className={HeaderStyle.logoContent}>
					<Icon className={HeaderStyle.twitterLogo} icon="logo-twitter" size="2x"/>
				</div>

				<div className={HeaderStyle.rightContent}>
					<SearchBar/>

					<div className={HeaderStyle.brandContainer}>
						<Circle>
							<img className={`${CircleStyle.circle} ${CircleStyle.image}`} src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png" alt=""/>
						</Circle>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
