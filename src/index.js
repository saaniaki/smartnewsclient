import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {Provider} from "react-redux";
import {configureStore} from "./store";
import purple from "@material-ui/core/colors/purple";
import {indigo} from "@material-ui/core/colors";

export const SERVER_URL = "https://api.zippininterview.tk:5000";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: indigo[500],
        },
    },
    fancyBackground: 'repeating-linear-gradient(135deg, rgba(47, 47, 47, 0.08) 0px, rgba(47, 47, 47, 0.08) 45px,rgba(50, 50, 50, 0.08) 45px, rgba(50, 50, 50, 0.08) 86px,rgba(18, 18, 18, 0.08) 86px, rgba(18, 18, 18, 0.08) 123px,rgba(249, 249, 249, 0.08) 123px, rgba(249, 249, 249, 0.08) 141px,rgba(64, 64, 64, 0.08) 141px, rgba(64, 64, 64, 0.08) 185px,rgba(242, 242, 242, 0.08) 185px, rgba(242, 242, 242, 0.08) 196px,rgba(199, 199, 199, 0.08) 196px, rgba(199, 199, 199, 0.08) 236px),repeating-linear-gradient(135deg, rgba(0, 0, 0, 0.08) 0px, rgba(0, 0, 0, 0.08) 48px,rgba(119, 119, 119, 0.08) 48px, rgba(119, 119, 119, 0.08) 79px,rgba(81, 81, 81, 0.08) 79px, rgba(81, 81, 81, 0.08) 110px,rgba(203, 203, 203, 0.08) 110px, rgba(203, 203, 203, 0.08) 145px,rgba(35, 35, 35, 0.08) 145px, rgba(35, 35, 35, 0.08) 184px,rgba(96, 96, 96, 0.08) 184px, rgba(96, 96, 96, 0.08) 232px,rgba(194, 194, 194, 0.08) 232px, rgba(194, 194, 194, 0.08) 267px),linear-gradient(90deg, rgb(4, 61, 140),rgb(58, 10, 94))',
    fancyChip: 'linear-gradient(-225deg, #7DE2FC 0%, #B9B6E5 100%)'
});


ReactDOM.render(
    // <React.StrictMode>
    <Provider store={configureStore()}>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </Provider>,
    // </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
