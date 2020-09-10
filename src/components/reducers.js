import {CREATE_NEWS, LOAD_TAGS_FAILURE, LOAD_TAGS_IN_PROGRESS, LOAD_TAGS_SUCCESS} from "./actions";

const initialState = {data: [], isLoading: false};

export const news = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case CREATE_NEWS: {
            const {news} = payload;
            console.log(state.data);
            return {
                ...state,
                data: state.data.concat(news)
            };
        }
        case LOAD_TAGS_IN_PROGRESS: {
            return {
                ...state,
                isLoading: true
            }
        }
        case LOAD_TAGS_SUCCESS: {
            const {news} = payload;
            return {
                ...state,
                isLoading: false,
                data: state.data.filter((n, i) => i !== state.data.length - 1).concat(news)
            }
        }
        case LOAD_TAGS_FAILURE: {
            return {
                ...state,
                isLoading: false
            }
        }
        default:
            return state;
    }
}
