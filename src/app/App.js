import React, {Component} from 'react';
import Player from './player/Player';
import './assets/App.css';
import {Navbar, NavbarBrand} from 'reactstrap';

class App extends Component{
  render(){
    return (
      <div>
        <div>
          <Navbar className="navbar">
            <NavbarBrand>ArtistStack</NavbarBrand>
          </Navbar>
        </div>
        <div className='container-fluid fixed-bottom remove-padding p-0 w-100'>
          <Player/>
        </div>
      </div>
    )
  }
}

export default App;
