import React, {Component} from 'react';
import Header from '../common/header';


class Home extends Component {

    render() {
        return (
            <div>
            <Header
                title = "Welcome to our Studio!"
                subtitle = "It's nice to meet you"
                buttonText = "Tell me more"
                link = "/services"
                showButton = {true}
            />
            </div>
        )}

}

export default Home;