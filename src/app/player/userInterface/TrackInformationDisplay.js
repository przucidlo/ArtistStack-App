import React, {Component} from 'react';
import './assets/PlayerComponents.css';

class TrackInformationDisplay extends Component{
    
    render(){
        return (
            <div className="container-fluid h-100">
                <div className="row align-items-center h-100">
                    <div className="col-auto p-0">
                        <div className="track-information-song-cover"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default TrackInformationDisplay;