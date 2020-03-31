import { createStyles, makeStyles, Theme, Grid } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        rootContainer: {
            height: '100%',
            paddingLeft: theme.spacing(2),
        },
    }),
);

const AudioPlayerPlaybackController = () => {
    const classes = useStyles();

    return <Grid container></Grid>;
};

export default AudioPlayerPlaybackController;
