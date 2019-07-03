import React, {Component} from 'react';
import Player from './player/Player';
import './assets/App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import ApplicationContent from './content/ApplicationContent';
import logo from './assets/logo.png';

class App extends Component{
	render(){
		return (
			<div>
				<div>
					<Navbar className="navbar">
						<NavbarBrand><img src={logo} alt='' style={{width: '32%', height: '32%'}}/></NavbarBrand>
					</Navbar>
				</div>
				<div className="h-100">
					<ApplicationContent/>
				</div>
				<div className='container-fluid fixed-bottom remove-padding p-0 w-100'>
					<Player/>
				</div>
			</div>
		)
	}
}

export default App;
