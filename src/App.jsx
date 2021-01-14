import React from 'react';
import axios from 'axios';
import VideoList from './VideoList';

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


    render(){
        return (
            <div>
                <VideoList 
                    propVideoList={this.state.items} />
            </div>
        );
    }
}