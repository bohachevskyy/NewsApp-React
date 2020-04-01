import { NewsObject } from '../actions/index';
import { ActionTypes, Action } from "../actions/types";

export interface NewsState {
    news: NewsObject[];
    selectedNews?: NewsObject;
}

const INITIAL_STATE = {
    news: [],
    selectedNews: undefined
}

export const newsReducer = (
    state: NewsState = INITIAL_STATE,
    action: Action
): NewsState => {
    switch (action.type) {
        case ActionTypes.fetchNews:
            return { ...state, news: action.payload }
        case ActionTypes.selectNew:
            const news = state.news.filter((newsObject: NewsObject) => newsObject.url === action.payload)
            if (news.length) {
                return { ...state, selectedNews: news[0] }
            }

            return { ...state, selectedNews: undefined }

        default:
            return state
    }
}
