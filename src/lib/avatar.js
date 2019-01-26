import React, { Component } from "react";
import compConfig from "./compConfig.json";
import "./avatar.css";
// import LogoImage from './imgs/female.svg';
// import LogoImage from './imgs/male.svg';

class Avatar extends Component {
    static defaultProps = {
        width: 50,
        height: 50,
        gender: "male",
        prImage: undefined
    };

    render() {
        const profileImg =
            this.props.gender === "male"
                ? require("./male.svg")
                : require("./female.svg");
        const pr =
            this.props.prImage === undefined ? profileImg : this.props.prImage;
        // const uu = require(`${pr}`)
        const styles = {
            width: this.props.width + "px",
            height: this.props.height + "px",
            backgroundImage: `url(./${pr})`
        };
        return (
            // <span {...styles}>Hi</span>

            <div style={styles} className="avatar-img" />
        );
    }
}

export default Avatar;
