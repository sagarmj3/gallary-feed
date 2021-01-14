import React from 'react';
import axios from 'axios';
import VideoList from './VideoList';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class App extends React.Component {

    constructor(){
        super();

        this.state = {
            items: [],
            page: 1
        }
        // Call the service
        this.handleServiceCall();
    }

    handleServiceCall = async () => {
        let n = this.state.page;
        const response = await axios.get('http://www.pinkvilla.com/photo-gallery-feed-page/' + n);  
        this.setState({items: response.data.nodes});
    }

    loadMore = () => {          
        this.setState(prevState => ({
            page: prevState.page + 1,
        }), this.handleServiceCall)
    }

    render(){
        return (
            <div>
                <InfiniteScroll
                    dataLength={this.state.items.length}
                    next={this.loadMore}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}>

                    <VideoList propVideoList={this.state.items}/>
                    
                </InfiniteScroll>
            </div>
        );
    }
}