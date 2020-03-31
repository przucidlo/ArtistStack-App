import { createStyles, Divider, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import ArtistTrackCell from './ArtistTrackCell';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        table: {},
        albumCover: {
            width: '48px',
            height: 'auto',
        },
    }),
);

export interface ArtistTrack {
    albumCoverSrc: string;
    trackName: string;
    trackListenCount: number;
}

export interface ArtistTrackProps {
    tracks: ArtistTrack[];
}

const ArtistTrackTable: React.FC<ArtistTrackProps> = (props: ArtistTrackProps) => {
    const classes = useStyles();

    return (
        <div>
            <Divider />
            {props.tracks.map((track, index) => (
                <ArtistTrackCell index={index + 1} artistTrack={track} />
            ))}
        </div>
    );
};

export default ArtistTrackTable;
