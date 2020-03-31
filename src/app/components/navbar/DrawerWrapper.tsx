import { createStyles, List, ListItem, ListItemIcon, ListItemText, makeStyles, Theme } from '@material-ui/core';
import AlbumIcon from '@material-ui/icons/Album';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import PlaylistIcon from '@material-ui/icons/QueueMusic';
import RadioIcon from '@material-ui/icons/Radio';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';

export const DRAWER_WIDTH: number = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawerRoot: {
            width: DRAWER_WIDTH,
            backgroundColor: theme.palette.grey[900],
            borderRight: 'solid 1px',
            borderRightColor: theme.palette.grey[800],
            height: '100%',
        },
    }),
);

export interface DrawerWrapperProps {
    drawerStyle: string;
    drawerPaperStyle: string;
}

export interface DrawerRoute {
    icon: JSX.Element;
    name: string;
}

const drawerRoutes: DrawerRoute[] = [
    { icon: <HomeIcon />, name: 'Homepage' },
    { icon: <SearchIcon />, name: 'Search' },
    { icon: <RadioIcon />, name: 'Radio' },
    { icon: <AlbumIcon />, name: 'Discover' },
    { icon: <FavoriteIcon />, name: 'Favorite' },
    { icon: <PlaylistIcon />, name: 'Playlists' },
];

const DrawerWrapper: React.FC<DrawerWrapperProps> = (props: DrawerWrapperProps) => {
    const classes = useStyles();

    return (
        <div className={classes.drawerRoot}>
            <List component="nav">
                {drawerRoutes.map(drawerRoute => (
                    <ListItem button>
                        <ListItemIcon>{drawerRoute.icon}</ListItemIcon>
                        <ListItemText primary={drawerRoute.name} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default DrawerWrapper;
