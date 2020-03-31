import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import './assets/Player.css';
import AudioPlayerPlaybackController from './components/AudioPlayerPlaybackController';
import AudioPlayerTrackDesc from './components/AudioPlayerTrackDesc';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: '100%',
            backgroundColor: theme.palette.grey[900],
            borderTop: 'solid 1px',
            borderTopColor: theme.palette.grey[800],
        },
        rootContainer: {
            height: '100%',
        },
    }),
);

const AudioPlayer: React.FC<{}> = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container className={classes.rootContainer}>
                <Grid item xs={4}>
                    <AudioPlayerTrackDesc />
                </Grid>
                <Grid item xs={4}>
                    <AudioPlayerPlaybackController />
                </Grid>
                <Grid item xs={4}>
                    Kontrolki2
                </Grid>
            </Grid>
        </div>
    );
};

export default AudioPlayer;
