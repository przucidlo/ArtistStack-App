import { createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        rootContainer: {
            height: '100%',
            paddingLeft: theme.spacing(2),
        },
    }),
);

const AudioPlayerTrackDesc = () => {
    const classes = useStyles();

    return (
        <Grid container direction="column" justify="center" className={classes.rootContainer}>
            <Grid item>
                <Typography variant="body1">Non-Human</Typography>
            </Grid>
            <Grid item>Grymm</Grid>
        </Grid>
    );
};

export default AudioPlayerTrackDesc;
