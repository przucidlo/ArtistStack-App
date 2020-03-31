import { Avatar, createStyles, IconButton, makeStyles, TextField, Theme, Toolbar, Typography } from '@material-ui/core';
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import ArrowRight from '@material-ui/icons/KeyboardArrowRight';
import React from 'react';
import avatarMockup from '../../views/artistpage/mock/avatar_mockup.jpg';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: 'sticky',
            top: 0,
            backgroundColor: '#424242',
        },
        userProfile: {
            position: 'absolute',
            right: 0,
            paddingRight: theme.spacing(4),
        },
        userProfileFlex: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },
        userAvatar: {
            marginRight: theme.spacing(1),
            width: '32px',
            height: 'auto',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        },
    }),
);

export interface AppBarWrapperProps {
    className: string;
}

const AppBarWrapper: React.FC<AppBarWrapperProps> = (props: AppBarWrapperProps) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Toolbar>
                <IconButton size="small">
                    <ArrowLeft />
                </IconButton>
                <IconButton size="small">
                    <ArrowRight />
                </IconButton>
                <TextField
                    style={{ marginLeft: 16 }}
                    label="Search"
                    id="outlined-size-small"
                    defaultValue=""
                    variant="outlined"
                    size="small"
                />
                <div className={classes.userProfile}>
                    <div className={classes.userProfileFlex}>
                        <Avatar src={avatarMockup} className={classes.userAvatar} />
                        <Typography variant="body1">Grymm</Typography>
                    </div>
                </div>
            </Toolbar>
        </div>
    );
};

export default AppBarWrapper;
