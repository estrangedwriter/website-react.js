import React, {Component} from 'react';

class PortfolioItem extends Component{

    render() {
        return (
            <div class="col-lg-4 col-sm-6 mb-4">
                <div class="portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src={this.props.image} alt="" />
                    </a>
                    <div class="portfolio-caption">
                        <div class="portfolio-caption-heading">{this.props.title}</div>
                        <div class="portfolio-caption-subheading text-muted">{this.props.subtitle}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PortfolioItem;