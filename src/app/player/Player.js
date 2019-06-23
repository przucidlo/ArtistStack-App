import React, {Component} from 'react'
import SockJs from 'sockjs-client'
import Stomp from 'stompjs';
import AudioEngine from './AudioEngine';
import {Button} from 'reactstrap';
import PlaybackController from './userInterface/PlaybackController';
import './assets/Player.css';
import DurationBar from './userInterface/DurationBar';
import VolumeController from './userInterface/VolumeController';
import TrackInformationDisplay from './userInterface/TrackInformationDisplay';


class Player extends Component{
    constructor(props){
        super(props);
        this.sampleArray = [];
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.establishSocketConnection();
        this.audioEngine = new AudioEngine();
    }

    establishSocketConnection(){
        let stompClient;

        stompClient = Stomp.over(new SockJs("http://localhost:8080/endpoint"));

        stompClient.connect({}, frame => {
            this.subscribeAudioStream(stompClient);
            //this.requestAudioStream(stompClient);
        })

        stompClient.debug = null;
    }

    requestAudioStream(stompClient){
        stompClient.send("/websocket/request/stream", {}, {});
    }

    subscribeAudioStream(stompClient){
        stompClient.subscribe("/user/topic/stream", (payload) => {
            this.handleAudioStream(payload);
        }, {});
    }

    handleAudioStream(payload){
        let payloadJson = JSON.parse(payload.body);
        let parsedFileData = atob(payloadJson.encodedBytes);

        this.audioEngine.feedAudioChunks(parsedFileData);
    }

    handleClick(e){
        e.preventDefault();
        this.audioEngine.play();
    }

    render(){
        return (
        <div className='player d-flex flex-row'>
                <div className='col-auto h-100'>
                    <div className='container h-100'>
                        <PlaybackController/>
                    </div>
                </div>
                <div className='col-auto h-100'>
                    <VolumeController/>
                </div>
                <div className='flex-grow-1 h-100'>
                    <DurationBar/>
                </div>
                <div className='col-auto h-100'>
                    <TrackInformationDisplay/>
                </div>
        </div>);
    }
}

export default Player;