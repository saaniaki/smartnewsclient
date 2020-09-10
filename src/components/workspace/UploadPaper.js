import React, {useEffect} from "react";
import Button from "@material-ui/core/Button";
import banner from "../../assets/banner.png";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import makeStyles from "@material-ui/core/styles/makeStyles";
import InputDialog from "./InputDialog";
import TextFieldsIcon from '@material-ui/icons/TextFields';
import Chip from "@material-ui/core/Chip";
import {getNews, getNewsIsLoading} from "../selectors";
import {connect} from "react-redux";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "100%",
    },
    button: {
        margin: theme.spacing(1),
    },
    media: {
        transitionDuration: "0.8s",
        transitionTimingFunction: "ease-in-out",
        height: props => `${props.height}px`,
    },
    chipContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
    chip: {
        backgroundImage: theme.fancyChip
    },
    loadingBar: {
        marginBottom: "-4px"
    }
}));

function UploadPaper({news, isLoading}) {
    const [h, setH] = React.useState(260);


    const prop = {height: h};
    const classes = useStyles(prop);

    const [open, setOpen] = React.useState(false);
    const [newsSnippet, setNewsSnippet] = React.useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value = null) => {
        setOpen(false);
        if (value !== null)
            setNewsSnippet(value);
    };

    useEffect(() => {
        setH(isLoading ? 130 : 260);
    }, [isLoading]);

    const desc = `Smart News Tagger is a React SPA which communicates with a Python REST backend to analyze a news snippet using a ML
                    model and tag the news based on its content. This project has been created for my interview at Zippin for the "Full Stack Engineer, MLOps" role.`;

    const lastNews = news[news.length - 1];

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={banner}
                title="Contemplative Reptile"
            />
            {isLoading ? <LinearProgress className={classes.loadingBar}/> : ""}
            <CardContent>
                <Typography gutterBottom variant="h5" component="h1">
                    {
                        lastNews !== undefined && lastNews.tags.length > 0 && newsSnippet !== "" ? (
                            <div className={classes.chipContainer}>
                                {lastNews.tags.map((tag, i) => <Chip key={i} label={tag} className={classes.chip}/>)}
                            </div>
                        ) : "Smart News Tagger"
                    }
                </Typography>
                {/*<img src={logo} className={classes.reactLogo} alt="logo"/>*/}
                <Typography variant="body2" color="textSecondary" component="p" align="justify">
                    {newsSnippet === "" ? desc : newsSnippet}
                </Typography>
                <div>
                    <br/>
                    <Button variant="outlined" color="primary" className={classes.button} onClick={handleClickOpen}
                            endIcon={<TextFieldsIcon/>}>
                        Try it now!
                    </Button>
                    <InputDialog inputValue={newsSnippet} open={open} onClose={handleClose}/>
                </div>
            </CardContent>
            <CardActions>
                <a className={classes.a} href="https://jobs.lever.co/zippin/efcfa648-fe57-40e0-b503-b40455b2435b" target="_blank">
                    <Button color="secondary" size="small">
                        Full Stack Engineer, MLOps
                    </Button>
                </a>
                {newsSnippet !== "" && !isLoading ?
                    <Button onClick={() => setNewsSnippet("")} color="secondary" variant="contained"
                            size="small">Clear</Button> : ""}
            </CardActions>
        </Card>
    );
}

const mapStateToProps = state => ({
    news: getNews(state),
    isLoading: getNewsIsLoading(state)
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UploadPaper);
