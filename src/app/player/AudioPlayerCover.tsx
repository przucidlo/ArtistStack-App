import React from 'react';
import { DRAWER_WIDTH } from '../components/navbar/DrawerWrapper';
import hibernisCover from '../views/artistpage/mock/albums/962.jpg';

const AudioPlayerCover: React.FC<{}> = () => {
    return (
        <div>
            <img src={hibernisCover} style={{ width: DRAWER_WIDTH - 1, height: 'auto' }} />
        </div>
    );
};

export default AudioPlayerCover;
