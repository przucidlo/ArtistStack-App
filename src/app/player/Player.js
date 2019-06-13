import React, {Component} from 'react'
import SockJs from 'sockjs-client'
import Stomp from 'stompjs';
import AudioEngine from './AudioEngine';
import {Button} from 'reactstrap';

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
            this.requestAudioStream(stompClient);
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
        return (<div>
            <Button color="primary" onClick={this.handleClick}>Start</Button>
        </div>);
    }
}

export default Player;