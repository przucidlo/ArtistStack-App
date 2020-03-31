import { Avatar, createStyles, Divider, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';
import avatarMockup from '../../mock/avatar_mockup.jpg';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        headerBackground: {
            backgroundImage: 'linear-gradient(#424242, #303030)',
            padding: theme.spacing(4),
        },
        artistAvatar: {
            width: '128px',
            height: 'auto',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        },
        dividerSpacing: {
            marginTop: theme.spacing(0),
            marginBottom: theme.spacing(1),
        },
    }),
);

const ArtistPageHeader: React.FC<{}> = () => {
    const classes = useStyles();

    return (
        <div className={classes.headerBackground}>
            <Grid container>
                <Grid item xs={2}>
                    <Grid container justify="center">
                        <Avatar src={avatarMockup} className={classes.artistAvatar} />
                    </Grid>
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="h2">Grymm</Typography>
                    <Divider className={classes.dividerSpacing} />
                    <Typography variant="body1">
                        A one man metal project from dark meadows of Poland. Music filled with distressing atmosphere
                        and dissonant sounds. Created to repel and disgust the listeners.
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default ArtistPageHeader;
