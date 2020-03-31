import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import AppBarWrapper from './components/navbar/AppBarWrapper';
import DrawerWrapper, { DRAWER_WIDTH } from './components/navbar/DrawerWrapper';
import AudioPlayer from './player/AudioPlayer';
import AudioPlayerCover from './player/AudioPlayerCover';
import ArtistPage from './views/artistpage/ArtistPage';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flex: 1,
            height: '100vh',
        },
        content: {
            flex: 1,
            height: `calc(100%)`,
            overflowY: 'auto',
            overflowX: 'hidden',

            width: `calc(100% - ${DRAWER_WIDTH})`,
        },
        appbar: {
            // width: `calc(100% - ${DRAWER_WIDTH}px)`,
            // marginLeft: DRAWER_WIDTH,
        },
        drawer: {
            // width: DRAWER_WIDTH,
            // height: `calc(100% - ${10}%)`,
        },
        drawerPaper: {
            width: DRAWER_WIDTH,
            height: `calc(100%)`,
        },
        siteContent: {
            height: '92%',
            display: 'flex',
            flexDirection: 'row',
        },
        audioPlayer: {
            height: '8%',
        },
        leftMenu: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'scretch',
        },
    }),
);

const Application: React.FC<{}> = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.siteContent}>
                <div className={classes.leftMenu}>
                    <DrawerWrapper drawerStyle={classes.drawer} drawerPaperStyle={classes.drawerPaper} />
                    <AudioPlayerCover />
                </div>
                <div className={classes.content}>
                    <AppBarWrapper className={classes.appbar} />
                    <ArtistPage />
                </div>
            </div>
            <div className={classes.audioPlayer}>
                <AudioPlayer />
            </div>
        </div>
    );
};

export default Application;
