import { ActionTypes } from "./types"
import { Dispatch } from 'redux'
import axios from 'axios'
const url = 'https://newsapi.org/v2/top-headlines'

export interface NewsObject {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface FetchNewsAction {
    type: ActionTypes.fetchNews;
    payload: NewsObject[];
}

export interface SelectNewAction {
    type: ActionTypes.selectNew;
    payload: string // url
}

export const fetchNews = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<NewsObject[]>(url, {
            params: { apiKey: process.env.REACT_APP_NEWS_KEY, country: "us" }
        });
        dispatch<FetchNewsAction>({
            type: ActionTypes.fetchNews,
            payload: response.data
        })
    }
}

export const selectNews = (url: string): SelectNewAction => {
    return {
        type: ActionTypes.selectNew,
        payload: url
    }
}