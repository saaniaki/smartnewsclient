import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Workspace from "../workspace/Workspace";
import logo from '../../logo.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        fontSize: "10px",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    reactLogo: {
        height: "5vmin",
        pointerEvents: "none",
        "@media (prefers-reduced-motion: no-preference)": {
            animation: "$reactLogoSpin infinite 20s linear"
        }
    },
    "@keyframes reactLogoSpin": {
        "from": {
            transform: "rotate(0deg)"
        },
        "to": {
            transform: "rotate(360deg)"
        }
    },
    a: {
        color: "white"
    }
}));

function Dashboard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <img src={logo} className={classes.reactLogo} alt="logo"/>
                    <Typography variant="h6" className={classes.title}>
                        Zippin Interview
                    </Typography>
                    by &nbsp;<a className={classes.a} href="https://github.com/saaniaki" target="_blank"><Button color="inherit">sanaiaki</Button></a>
                </Toolbar>
            </AppBar>
            <Workspace />
        </div>
    );
}

export default Dashboard;
