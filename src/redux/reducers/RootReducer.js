import {combineReducers} from 'redux';
import audioPlaybackReducer from './AudioPlaybackReducer';

const rootReducer = combineReducers({
    audioPlayback: audioPlaybackReducer
})

export default (state, action) => {
    return rootReducer(state, action);
}