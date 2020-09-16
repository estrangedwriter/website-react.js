import React, {Component} from 'react';
import SingleService from './SIngleService'
import Header from '../common/header';

const services = [
    {title: 'E-Commerce', description: '', icon: 'fa-shopping-cart'},
    {title: 'Responsive Design', description: '', icon: 'fa-laptop'},
    {title: 'Web Security', description: '', icon: 'fa-lock'},
];


class Services extends Component {
    
    render() {
        
        return( 
        <div>
            <Header
                title = "Jerome is Legend!"
                subtitle = "Hieronymus"
                buttonText = "Tell me more"
                link = "/services"
                showButton = {true}
            />
        
            <section class="page-section" id="services">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">Services</h2>
                        <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                </div>
                <div class="row text-center">
                {services.map((service, index) => {
                    return <SingleService {...service} key = {index}/>
                })}
                </div>
            </section>
        </div>
        )
    }
}

export default Services;