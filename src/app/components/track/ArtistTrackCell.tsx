import { createStyles, Divider, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';
import { ArtistTrack } from './ArtistTracksTable';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'row',
            padding: 2,
            alignItems: 'center',
        },
        albumCover: {
            width: '48px',
            height: 'auto',
        },
        cell: {
            flexShrink: 1,

            paddingRight: theme.spacing(2),
        },
        cellGrow: {
            flexGrow: 1,
            marginLeft: theme.spacing(2),
        },
    }),
);

export interface ArtistTrackCellProps {
    index: number;
    artistTrack: ArtistTrack;
}

const ArtistTrackCell: React.FC<ArtistTrackCellProps> = (props: ArtistTrackCellProps) => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.root}>
                <div className={classes.cell}>
                    <img src={props.artistTrack.albumCoverSrc} className={classes.albumCover} />
                </div>
                <div className={classes.cell}>
                    <Typography variant="body2">{props.index}</Typography>
                </div>
                <div className={classes.cellGrow}>
                    <Typography variant="body1">{props.artistTrack.trackName}</Typography>
                </div>
                <div className={classes.cell}>
                    <Typography variant="subtitle2">
                        {props.artistTrack.trackListenCount.toLocaleString('en')}
                    </Typography>
                </div>
            </div>
            <Divider />
        </div>
    );
};

export default ArtistTrackCell;
