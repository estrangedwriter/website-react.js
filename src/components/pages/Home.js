import React, {Component} from 'react';
import Header from '../common/header';


//Re-usable components
import Services from '../common/services.js';
import Portfolio from  '../common/portfolio';


class Home extends Component {

    render() {
        return (
            <div>
            <Header
                title = "Hieronymus Ventures"
                subtitle = "Jerome is Legend"
                buttonText = "Tell me more"
                link = "/services"
                showButton = {true}
            />

            
            <Portfolio></Portfolio>
            </div>
        )}

}

export default Home;