import { createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';
import albumCoverMockup from '../../mock/albums/hibernis.jpg';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
        albumCover: {
            width: '96px',
            height: 'auto',
        },
        gridInheritHeight: {
            height: '100%',
        },
    }),
);

const ArtistPageNewestRelease: React.FC<{}> = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h6">Most recent release</Typography>
            <Grid container spacing={1}>
                <Grid item>
                    <img src={albumCoverMockup} className={classes.albumCover} />
                </Grid>
                <Grid item>
                    <Grid container direction="row" alignItems="center" className={classes.gridInheritHeight}>
                        <Grid item xs={12}>
                            <Typography variant="h5">Hibernis</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle2">December 2, 2018</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default ArtistPageNewestRelease;
