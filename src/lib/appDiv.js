import React, { Component } from 'react';
import "./appDiv.css";

class AppDiv extends Component {
    render() {
        return(
            <div className="app-div">
                <a className="app-div-anchor" href = {this.props.pointsTo} target="_blank">
                    <img className="app-div-img" src={this.props.appImage} />
                    <div className="app-div-description">{this.props.textDisplayed.text}</div>
                </a>
            </div>
        )
    }
}

export default AppDiv;