import React from 'react';
import Dashboard from "./components/dashboard/Dashboard";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center",
        backgroundImage: theme.fancyBackground,
        color: "white",
        fontSize: "calc(10px + 2vmin)",
        minHeight: "100vh"
    }
}));

function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Dashboard/>
        </div>
    );
}

export default App;
