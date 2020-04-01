import { combineReducers } from 'redux';
import { newsReducer, NewsState } from "./news";

export interface StoreState {
    news: NewsState
}

export const reducers = combineReducers<StoreState>({
    news: newsReducer
})