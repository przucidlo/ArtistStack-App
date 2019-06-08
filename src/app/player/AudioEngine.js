
export default class AudioEngine{
    constructor(){
        this.audioArray = [];
        this.audioContext = null;
        this.playFlag = false;
        this.playedChunkId = 0;

        this.initializeAudioContext();
    }

    initializeAudioContext(){
        window.AudioContext = window.AudioContext||window.webkitAudioContext;
        this.audioContext = new AudioContext();
    }

    feedAudioChunks(audioChunk){
        this.audioArray.push(this.convertBase64StringToIntArray(audioChunk));
    }

    play(){
        if(this.audioArray.length != 0){
            this.audioContext.resume();
            
            let audioSource = this.audioContext.createBufferSource();
            
            this.startPlaying(audioSource);

            audioSource.onended = () => {
                this.playedChunkId += 1;
                this.play();
            }
        }else{
            console.log("There is no audio chunks to play sound from.");
        }
    }

    async startPlaying(audioSource){
        let audioBuffer = this.createAudioBuffer(this.audioArray[this.playedChunkId]);        

        audioBuffer.then(buffer => {
            console.log("Buffer:" + audioSource.buffer);
            audioSource.buffer = buffer;
            audioSource.connect(this.audioContext.destination);
            audioSource.loop = false;
            audioSource.start();
        })
    }

    convertBase64StringToIntArray(string){
        let length = string.length;
        let bytes = new Uint8Array(length);

        for(let i = 0; i < length; i++){
            bytes[i] = string.charCodeAt(i);
        }

        return bytes.buffer;
    }

    async createAudioBuffer(audioChunk){
        return await this.audioContext.decodeAudioData(audioChunk);
    }
}