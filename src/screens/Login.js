import * as React from 'react';
import { useLogin, LoginForm } from 'react-admin';
import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const styles = {
    root: {
        height: '100vh',
        background: '#F5F5F5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    home: {
        width: '85vw',
        height: '100vh',
        marginBottom: '2rem'
    },
    paper: {
        background: 'white',
        padding: '2rem',
        maxWidth: '25rem',
        margin: '0 auto',
    },
    button: { background: '#F15922' },
    link: {
        margin: '1rem'
    },
};

const CustomLoginForm = ({ classes }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const login = useLogin();

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ email, password });
    };

    return (
        <div className={classes.root}>
                <div className="login-page">
                    <Paper className={classes.paper}>
                        <LoginForm
                            onSubmit={handleSubmit}
                            {...{
                                classes: {
                                    button: classes.button,
                                },
                            }}
                        >
                            <input
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                name="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </LoginForm>
                    </Paper>
                </div>
            <footer style={{position:"absolute",bottom:'2rem'}}>
                <a href="#" className={classes.link}>Download from Google Play Store</a>
                <a href="#" className={classes.link}>Download from Apple App Store</a>
                <a href="#" className={classes.link}>Use Web Version</a>
            </footer>
        </div>
    );
};

export default withStyles(styles)(CustomLoginForm);
