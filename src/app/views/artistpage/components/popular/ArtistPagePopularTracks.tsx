import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import ArtistTrackTable, { ArtistTrack } from '../../../../components/track/ArtistTracksTable';
import nineSixTwo from '../../mock/albums/962.jpg';
import hibernisAlbumCover from '../../mock/albums/hibernis.jpg';

const mockTracks: ArtistTrack[] = [
    { albumCoverSrc: hibernisAlbumCover, trackName: 'Frost', trackListenCount: 60542 },
    { albumCoverSrc: hibernisAlbumCover, trackName: 'White', trackListenCount: 40321 },
    { albumCoverSrc: hibernisAlbumCover, trackName: 'Storm', trackListenCount: 20113 },
    { albumCoverSrc: nineSixTwo, trackName: 'Non-human', trackListenCount: 15995 },
    { albumCoverSrc: nineSixTwo, trackName: 'The touch', trackListenCount: 12137 },
];

const ArtistPagePopularTracks: React.FC<{}> = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h6">Popular</Typography>
            </Grid>
            <Grid item xs={12}>
                <ArtistTrackTable tracks={mockTracks} />
            </Grid>
        </Grid>
    );
};

export default ArtistPagePopularTracks;
