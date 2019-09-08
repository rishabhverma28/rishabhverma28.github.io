import React, { Component } from "react";
import "./resume.css";
import res from "./res.json";

const Arrows = ({ direction, clickFunction }) => (
    <button className={`arrow ${direction}`} onClick={clickFunction}></button>
);

class Slide extends Component {
    render() {
        return (
            <div className="slide">
                <div className="res-head">
                    <div className="header">{this.props.currSlide.heading}</div>
                </div>
                <div className="res-description">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: this.props.currSlide.description
                        }}
                    ></div>
                </div>
            </div>
        );
    }
}

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0
        };
        this.prevSlide = this.prevSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
    }

    prevSlide = () => {
        const lengthOfItems = res.items.length;
        if (this.state.currentSlide - 1 >= 0) {
            this.setState({
                currentSlide: this.state.currentSlide - 1
            });
        } else {
            this.setState({
                currentSlide: lengthOfItems - 1
            });
        }
    };

    nextSlide = () => {
        const lengthOfItems = res.items.length;
        if (this.state.currentSlide + 1 < lengthOfItems) {
            this.setState({
                currentSlide: this.state.currentSlide + 1
            });
        } else {
            this.setState({
                currentSlide: 0
            });
        }
    };

    render() {
        return (
            <div className="carousel">
                <Arrows direction="left" clickFunction={this.prevSlide} />
                <Slide currSlide={res.items[this.state.currentSlide]} />
                <Arrows direction="right" clickFunction={this.nextSlide} />
            </div>
        );
    }
}

export default Carousel;
