export const CREATE_NEWS = 'CREATE_NEWS';
export const createNews = news => ({
    type: CREATE_NEWS,
    payload: {news}
});

export const LOAD_TAGS_IN_PROGRESS = 'LOAD_TAGS_IN_PROGRESS';
export const loadTagsInProgress = () => ({
    type: LOAD_TAGS_IN_PROGRESS
});

export const LOAD_TAGS_SUCCESS = 'LOAD_TAGS_SUCCESS';
export const loadTagsSuccess = news => ({
    type: LOAD_TAGS_SUCCESS,
    payload: {news}
});

export const LOAD_TAGS_FAILURE = 'LOAD_TAGS_FAILURE';
export const loadTagsFailure = () => ({
    type: LOAD_TAGS_FAILURE
});
