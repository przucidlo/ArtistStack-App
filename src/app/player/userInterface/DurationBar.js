import React, {Component} from 'react';
import './assets/PlayerComponents.css';

class DurationBar extends Component{
    render(){
        return (
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-auto">
                        0:00
                    </div>
                    <div className='col p-0'>
                        <div className='background-bar'></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DurationBar;