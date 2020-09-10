import React from "react";
import UploadPaper from "./UploadPaper";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    root: {
        transitionDuration: "0.5s",
        margin: "25px auto",
        maxWidth: "50%",
        "@media (max-width: 1500px)": {
            maxWidth: "60%"
        },
        "@media (max-width: 1000px)": {
            maxWidth: "70%"
        },
        "@media (max-width: 850px)": {
            maxWidth: "80%"
        },
        "@media (max-width: 600px)": {
            maxWidth: "90%"
        }
    }
}));

function Workspace() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <UploadPaper />
        </div>
    );
}

export default Workspace;
