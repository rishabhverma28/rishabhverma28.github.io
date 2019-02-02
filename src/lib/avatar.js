import React, { Component } from "react";
import "./avatar.css";

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
        const styles = {
            width: this.props.width + "px",
            height: this.props.height + "px",
            backgroundImage: `url(./${pr})`
        };
        return <div style={styles} className="avatar-img" />;
    }
}

export default Avatar;
