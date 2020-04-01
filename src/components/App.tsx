import React from 'react';
import { connect } from 'react-redux'
import { fetchNews, NewsObject } from "../actions"
import { StoreState } from "../reducers"

interface AppProps {
    news: NewsObject[];
    fetchNews: Function;
}

class _App extends React.Component<AppProps> {
    componentDidMount() {
        this.props.fetchNews()
    }

    render() {
        return (
            <div>
                Hello from hell!
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState): { news: NewsObject[] } => {
    return { news: state.news.news }
}

export const App = connect(
    mapStateToProps,
    { fetchNews }
)(_App)