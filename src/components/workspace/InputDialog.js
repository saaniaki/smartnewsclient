import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent";
import {connect} from "react-redux";
import {getNews} from "../selectors";
import {makeAnalyzeRequest} from "../thunks";

const useStyles = makeStyles({
    textField: {
        width: "100%"
    }
});

function InputDialog({onAnalyzeClicked, ...props}) {
    const classes = useStyles();
    const {onClose, inputValue, open} = props;
    const [textFieldValue, setTextFieldValue] = React.useState(inputValue);

    const handleClose = () => onClose(inputValue);
    const handleAnalyze = () => {
        if (textFieldValue !== null && textFieldValue !== "")
            onAnalyzeClicked(textFieldValue);
        onClose(textFieldValue);
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Analyze Some News</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    You can write or copy paste a news snippet to see if my ML model can guess what is it all about!
                </DialogContentText>
                <TextField
                    className={classes.textField}
                    label="News Snippet"
                    multiline
                    rows={6}
                    placeholder="Just copy paste it here..."
                    defaultValue={textFieldValue}
                    variant="outlined"
                    onChange={event => setTextFieldValue(event.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary">
                    Close
                </Button>
                <Button variant="contained" onClick={handleAnalyze} color="primary" autoFocus>
                    Analyze
                </Button>
            </DialogActions>

        </Dialog>
    );
}

InputDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    inputValue: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
    news: getNews(state)
});

const mapDispatchToProps = dispatch => ({
    onAnalyzeClicked: newsText => dispatch(makeAnalyzeRequest(newsText))
});

export default connect(mapStateToProps, mapDispatchToProps)(InputDialog);
