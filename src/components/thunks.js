import {createNews, loadTagsFailure, loadTagsInProgress, loadTagsSuccess} from "./actions";
import {SERVER_URL} from "../index";

export const makeAnalyzeRequest = newsText => async (dispatch, getState) => {
    try {
        dispatch(createNews({
            text: newsText,
            tags: [],
            dateTime: new Date()
        }));
        dispatch(loadTagsInProgress());
        const body = JSON.stringify({text: newsText});
        const response = await fetch(SERVER_URL +"/analyze", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "post",
            body
        });
        const tagsString = await response.json();
        dispatch(loadTagsSuccess({
            text: newsText,
            tags: tagsString.tags.split("."),
            dateTime: new Date()
        }));
    } catch (err) {
        dispatch(loadTagsFailure());
        // show snackbar
    }
}
