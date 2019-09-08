import React, { Component } from "react";
import LogoImage from "./imgs/gent.svg";
import dict from "./data.json";
import "./App.css";
import BarChart from "./BarChart";

class MyDiv extends Component {
    render() {
        return <div>Hello!</div>;
    }
}

class LogoImg extends Component {
    render() {
        return (
            <div className="site-logo">
                <a href="/">
                    <img src={LogoImage} className="site-logo-img" />
                </a>
            </div>
        );
    }
}

class Menu extends Component {
    render(props) {
        const dataItems = this.props.dict.menuItems;
        const listItems = dataItems.map(item => (
            <li>
                <a href={item.link}>{item.name}</a>
            </li>
        ));
        return (
            // <div className="menu-container">
            <ul className="menu-items">{listItems}</ul>
            // </div>
        );
    }
}

class AsideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { toggle: false };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.setState(state => ({
            toggle: !state.toggle
        }));
    }
    render() {
        const style = { display: this.state.toggle ? "block" : "none" };
        const tt = this.state.toggle;
        return (
            <aside className="aside-bar">
                <div
                    className={`trigram-icon ${tt}`}
                    onClick={this.handleClick}
                ></div>
                <div className={`show-hide ${tt}`} style={style}>
                    <Menu dict={dict} />
                </div>
            </aside>
        );
    }
}

class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav className="site-navbar">
                <LogoImg />
                <AsideMenu />
            </nav>
        );
    }
}

class CircleSvg extends Component {
    render() {
        return (
            <circle
                cx="100"
                cy="100"
                r={this.props.radius}
                fill={this.props.circlecolor}
                className={this.props.name}
            />
        );
    }
}

class LineSvg extends Component {
    render() {
        return <line x1="100" y1="0" x2="100" y2="100" stroke="black" />;
    }
}
class CompleteSvg extends Component {
    render() {
        return (
            <div className="svg-line">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%">
                    <g className="grouped-svg">
                        <LineSvg />
                        <CircleSvg
                            radius="10"
                            circlecolor="#fdd835"
                            name="smaller-circle"
                        />
                        <CircleSvg
                            radius="20"
                            circlecolor="#fffde7"
                            name="bigger-circle"
                        />
                    </g>
                </svg>
            </div>
        );
    }
}

const Hero = props => (
    <div className="site-hero">
        <div className="hero-welcome">
            <span className="hero-welcome-sp">Welcome.</span>
            <a href="/portfolio" className="hero-welcome-port-link">
                See my projects
            </a>
        </div>
        <div className="hero-pipe"></div>
    </div>
);

const Picture = props => <img src={require(`${props.srcImg}`)} />;

const Description = props => (
    <div
        className="description"
        dangerouslySetInnerHTML={{ __html: props.description }}
    ></div>
);

class TimelineB extends Component {
    render() {
        // console.log(this.props.data.year);
        return (
            // "HI"
            <div className="bar-container">
                <div className="arrow">
                    <div className="year">{this.props.data.year}</div>
                    <div className="time-desc">
                        {this.props.data.description}
                    </div>
                </div>
            </div>
        );
    }
}

class Timeline extends Component {
    render() {
        const data = this.props.info;
        console.log(data);

        return this.props.info.map(comp => {
            console.log(comp);
            return <TimelineB data={comp} />;
        });
    }
}

class AboutMe extends Component {
    render() {
        console.log("ggh", dict.aboutMe[0].imagesrc);

        return (
            <section className="about-me" id="about-me">
                <div className="section-header">About Me</div>
                <span></span>
                <div className="about-me-wrapper clearfix">
                    <Description description={dict.aboutMe[1].description} />
                    <Picture srcImg={dict.aboutMe[0].imagesrc} />
                </div>
                <div className="timeline-wrapper clearfix">
                    <Timeline info={dict.timeline} />
                </div>
            </section>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div className="root">
                <Hero />
                <AboutMe />
                <section className="technologies">
                    <div className="section-header" id="tech-header">
                        Technologies
                    </div>
                    <span></span>
                    <BarChart data={dict.technologies} size={[370, 370]} />
                </section>
            </div>
        );
    }
}

export default App;
