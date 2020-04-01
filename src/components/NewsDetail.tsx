import React from 'react';
import { connect } from 'react-redux';
import { NewsObject } from '../actions';
import { StoreState } from '../reducers';

interface NewsDetailProps {
    news?: NewsObject;
}

class _NewsDetails extends React.Component<NewsDetailProps> {
    render() {
        const { news } = this.props;
        if (!news) {
            return <div >No info</div>;
        }

        const date = new Date(news.publishedAt)
        return (
            <div className='card text-center'>
                <div className='card-header'>{date.toLocaleString()}</div>
                <div className='card-body'>
                    <img
                        src={news.urlToImage}
                        className='img-fluid'
                        style={{ height: 450 }}
                        alt='NewsDetail'
                    />

                    <h5 className='card-title text-left'>{news.title}</h5>
                    <p className='card-text text-left'>{news.content}</p>
                    <p className='text-muted text-right text-12'>{news.author}</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState): { news?: NewsObject } => {
    return { news: state.news.selectedNews }
}

export const NewsDetails = connect(mapStateToProps)(_NewsDetails);
