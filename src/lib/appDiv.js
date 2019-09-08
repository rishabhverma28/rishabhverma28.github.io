import React, { Component } from "react";
import "./appDiv.css";

class AppDiv extends Component {
    render() {
        return (
            <div className="app-div">
                <div className="app-div-anchor" target="_blank">
                    <img
                        className="app-div-img"
                        src={this.props.appImage}
                        alt="app screenshot"
                    />
                    <div className="app-div-description">
                        {this.props.textDisplayed.text}
                    </div>
                </div>
                <a
                    href={this.props.pointsTo}
                    className="app-div-link"
                    target="_blank"
                >
                    View on Site
                </a>
                <a
                    href={this.props.githubLink}
                    className="app-div-link"
                    target="_blank"
                >
                    View code on GitHub
                </a>
            </div>
        );
    }
}

export default AppDiv;
