import React, {Component} from 'react';
import volume from './assets/volume.svg';
import './assets/PlayerComponents.css';

class VolumeController extends Component{
    render(){
        return (
            <div className='h-100 align-items-center row'>
                <div className='col-auto p-0 volume-control'>
                    <img src={volume} />
                </div>
                <div className='col-auto p-0'>
                    <div className='background-bar-volume'/>
                </div>
            </div>
        )
    }
}

export default VolumeController;