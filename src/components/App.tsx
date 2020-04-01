import React from 'react';
import { connect } from 'react-redux'
import { fetchNews, NewsObject } from '../actions'
import { News } from './News';
import { NewsDetails } from './NewsDetail';

interface AppProps {
    fetchNews: Function;
}

class _App extends React.Component<AppProps> {
    componentDidMount() {
        this.props.fetchNews()
    }

    render() {

        return (
            <div className='card w-100%'>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div
                        className='overflow-auto'
                        style={{
                            display: 'flex',
                            flex: 1,
                            flexDirection: 'column'
                        }}>
                        <div className='overflow-auto' style={{ height: '100vh' }}>
                            <News />
                        </div>
                    </div>

                    <div
                        style={{
                            display: 'block',
                            flex: 3,
                            flexDirection: 'column',
                            height: 'inherit'
                        }}>
                        <NewsDetails />
                    </div>
                </div>
            </div>
        );
    }
}

export const App = connect(
    null,
    { fetchNews }
)(_App)