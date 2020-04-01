import { FetchNewsAction, SelectNewAction } from "./index"

export enum ActionTypes {
    fetchNews,
    selectNew
}

export type Action =
    FetchNewsAction |
    SelectNewAction;