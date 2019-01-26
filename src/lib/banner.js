import React, { Component } from 'react';
import compConfig from './compConfig.json'
import './banner.css';

class Banner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bannerOpen: false
        }
        this.showHideBanner = this.showHideBanner.bind(this)
    }

    showHideBanner() {
        this.setState(prevstate =>({
            bannerOpen: !prevstate.bannerOpen
        }))
    }

    render() {
        const messageToBeShown = this.state.bannerOpen?"Hide Banner":"Show Banner"
        return (
            <div>
                <button onClick = {this.showHideBanner} className="portfolio-modal-button">{messageToBeShown}</button>
                {
                    this.state.bannerOpen &&
                    <div className="banner">
                        {compConfig.banner.message}
                    </div>
                
                }
            </div>
        )
    }
}

export default Banner