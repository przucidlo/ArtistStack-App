import { Divider, Grid, Typography } from '@material-ui/core';
import React from 'react';
import ArtistAlbum, { ArtistAlbumProps } from '../../../../components/album/ArtistAlbum';
import nineSixTwo from '../../mock/albums/962.jpg';
import bottom from '../../mock/albums/bottom.jpg';
import element from '../../mock/albums/element.jpg';
import hibernisCover from '../../mock/albums/hibernis.jpg';
import plains from '../../mock/albums/plains.jpg';

const mockAlbums: ArtistAlbumProps[] = [
    { coverSrc: hibernisCover, name: 'Hibernis', releaseYear: '2018' },
    { coverSrc: element, name: 'Element', releaseYear: '2018' },
    { coverSrc: nineSixTwo, name: '962', releaseYear: '2018' },
    { coverSrc: plains, name: 'Plains', releaseYear: '2018' },
    { coverSrc: bottom, name: 'The Bottom', releaseYear: '2017' },
];

const ArtistPageAlbums: React.FC<{}> = (props: {}) => {
    return (
        <div>
            <Typography variant="h6">Albums</Typography>
            <Divider />
            <Grid container spacing={1} style={{ paddingTop: 4 }}>
                {mockAlbums.map(mockAlbum => (
                    <Grid item>
                        <ArtistAlbum {...mockAlbum} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ArtistPageAlbums;
