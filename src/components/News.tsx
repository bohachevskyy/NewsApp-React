import React from 'react';
import { connect } from 'react-redux'

import { StoreState } from '../reducers'
import { selectNews, NewsObject } from '../actions'

interface NewsProps {
    news: NewsObject[];
    selectNews: Function;
}

class _News extends React.Component<NewsProps> {
    state = { selectedNews: null };

    onClickAction = (currentNews: NewsObject) => {
        this.props.selectNews(currentNews.url)
    };

    renderList() {
        if (!this.props.news.length) {
            return <div>No news</div>
        }

        return this.props.news.map((currentNews: NewsObject): JSX.Element => {
            return (
                <div
                    className='card'
                    style={{ padding: '12px' }}
                    key={currentNews.url}
                    onClick={_ => this.onClickAction(currentNews)}
                >
                    <img
                        src={currentNews.urlToImage}
                        className='card-img-top'
                        alt={currentNews.title}
                    />
                    <p className='card-title'>{currentNews.title}</p>

                </div>
            );
        });
    }

    render() {
        return (
            <div style={{
                flexDirection: 'column',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start'
            }}>
                {this.renderList()}
            </div >
        );

    }
}

const mapStateToProps = (state: StoreState): { news: NewsObject[] } => {
    return { news: state.news.news }
}

export const News = connect(mapStateToProps, { selectNews })(_News);
