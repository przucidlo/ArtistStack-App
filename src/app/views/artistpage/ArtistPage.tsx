import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import ArtistPageAlbums from './components/albums/ArtistPageAlbums';
import ArtistPageHeader from './components/header/ArtistPageHeader';
import ArtistPageNewestRelease from './components/newestrelease/ArtistPageNewestRelease';
import ArtistPagePopularTracks from './components/popular/ArtistPagePopularTracks';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: '100%',
        },
        afterHeaderContainer: {
            padding: theme.spacing(4),
        },
    }),
);

const ArtistPage: React.FC<{}> = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ArtistPageHeader />
            <Grid container className={classes.afterHeaderContainer} spacing={2}>
                <Grid item xs={8}>
                    <ArtistPagePopularTracks />
                </Grid>
                <Grid item xs={4}>
                    <ArtistPageNewestRelease />
                </Grid>
                <Grid item xs={12}>
                    <ArtistPageAlbums />
                </Grid>
            </Grid>
        </div>
    );
};

export default ArtistPage;
