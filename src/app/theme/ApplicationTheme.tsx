import { createMuiTheme, ThemeOptions } from '@material-ui/core';

const applicationTheme: ThemeOptions = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#424242',
            light: '#ae52d4',
            dark: '#4a0072',
        },
    },
});

export default applicationTheme;
