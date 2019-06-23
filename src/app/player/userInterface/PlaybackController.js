import React, {Component} from 'react';
import playIcon from './assets/play-circle-outlined.svg';
import pauseIcon from './assets/pause-circle-outlined.svg';
import nextIcon from './assets/next-icon.svg';
import previousIcon from './assets/previous-icon.svg';
import './assets/PlayerComponents.css';
import VolumeController from './VolumeController';

class PlaybackController extends Component{
    render(){
        return (
            <div className="h-100 row align-items-center">
                <div className='col-auto p-0'>
                    <img src={previousIcon}></img>
                </div>
                <div className='col-auto p-0'>
                    <img src={playIcon}></img>
                </div>
                <div className='col-auto p-0'>
                    <img src={nextIcon}></img>
                </div>
            </div>
        )
    }
}

export default PlaybackController;