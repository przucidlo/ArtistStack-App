import { createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        albumCover: {
            width: '200px',
            height: 'auto',
        },
    }),
);

export interface ArtistAlbumProps {
    coverSrc: string;
    name: string;
    releaseYear: string;
}

const ArtistAlbum: React.FC<ArtistAlbumProps> = (props: ArtistAlbumProps) => {
    const classes = useStyles();

    return (
        <Grid container direction="column">
            <Grid item>
                <img src={props.coverSrc} className={classes.albumCover} />
            </Grid>
            <Grid item>
                <Typography variant="h6">{props.name}</Typography>
            </Grid>
            <Grid item>
                <Typography variant="subtitle2">{props.releaseYear}</Typography>
            </Grid>
        </Grid>
    );
};

export default ArtistAlbum;
