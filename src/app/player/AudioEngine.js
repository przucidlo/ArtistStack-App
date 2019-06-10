import {decode} from 'wav-decoder';
import AudioFeeder from 'audio-feeder';

export default class AudioEngine{
    constructor(){
        this.audioArray = [];
        this.playedChunkId = 0;
        this.audioFeeder = null;
        this.audioContext = null;

        this.initializeAudioContext();
    }

    initializeAudioContext(){
        window.AudioContext = window.AudioContext||window.webkitAudioContext;
        this.audioContext = new AudioContext();
    }

    feedAudioChunks(audioChunk){
        let decodedAudioChunk = this.convertBase64StringToIntArray(audioChunk);
        
        decode(decodedAudioChunk).then(data => {
            if(this.audioFeeder === null){
                this.audioFeeder = new AudioFeeder(this.audioContext);

                this.audioFeeder.init(2, data.sampleRate);
            }
            this.audioFeeder.bufferData([data.channelData[0], data.channelData[1]]);
            
            this.audioArray.push(data.channelData);
        })
    }

    play(){
        if(this.audioArray.length != 0){
            this.audioContext.resume();

            this.audioFeeder.start();
        }else{
            console.log("There is no audio chunks to play sound from.");
        }
    }

    convertBase64StringToIntArray(string){
        let length = string.length;
        let bytes = new Uint8Array(length);

        for(let i = 0; i < length; i++){
            bytes[i] = string.charCodeAt(i);
        }

        return bytes.buffer;
    }

}