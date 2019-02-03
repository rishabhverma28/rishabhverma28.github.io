import React, { Component } from 'react';
import "./appDiv.css";
import compConfig from './compConfig.json'

class AppDiv extends Component {
    render() {
        return(
            <div className="app-div">
                <a className="app-div-anchor" href = {this.props.pointsTo}>
                    <img className="app-div-img" src={this.props.appImage} />
                    <div className="app-div-description">{compConfig.appDiv.textToBeDisplayed}</div>
                </a>
            </div>
        )
    }
}

export default AppDiv;