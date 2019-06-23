import {SET_VOLUME} from '../actions/Types';

const initialState = {
    isPlaying: false,
    volume: 1.0,
    bufferData: [],
    
    song: {
        artist: "",
        name: "",
        album: "",
        duration: "",
        cover: ""
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_VOLUME:
            return {...state, volume: action.value};
        default:
            return state;
    }
}