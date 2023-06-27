import {AppBar, ToggleThemeButton} from "react-admin";
import {Typography} from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

const darkTheme = {
    palette: { mode: 'dark' },
};

const lightTheme = {
    palette: {
        type: 'light',
        primary: {
            main: grey[500],
        },
        secondary: {
            main: grey[900],
        },
    },
};

export const MyAppBar = (props) => (
    <AppBar {...props} >
        <Typography variant="h6" color="inherit" id="react-admin-title" noWrap></Typography>
        <div style={{ flex: 1 }} />
        <ToggleThemeButton lightTheme={lightTheme} darkTheme={darkTheme} />
    </AppBar>
);