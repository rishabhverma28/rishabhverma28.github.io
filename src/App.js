import React, { Component } from 'react';
import logo from './logo.svg';
import LogoImage from './gent.svg';
import dict from './data.json'
import './App.css';
import BarChart from './BarChart'
import { ContactMe } from './ContactMe';

class MyDiv extends Component{
    render(){
        return (
            <div>Hello!</div>
            )
    }
}

class LogoImg extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className = "site-logo">
                <a href="/"><img src = {LogoImage} className = "site-logo-img"/></a>
            </div>
            )
    }
}

// class MenuItem extends Component{
//     render(){
//         return(
//                 <li>{}</li>
//             )
//     }
// }

// class Menu extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             error: null,
//             isLoaded: false,
//             items: []
//         };
//     }

//     componentDidMount() {
//         // fetch('./data.json')
//         //     .then(res => res.text())
//         //     .then(text => console.log(text))
//         //     .then(
//         //         (result) => {
//         //             this.setState({
//         //                 isLoaded:true,
//         //                 items: result.items
//         //             });
//         //         },
//         //         (error) => {
//         //             this.setState({
//         //                 isLoaded:true,
//         //                 error
//         //             });
//         //         }
//         //     )
//         let results =dict.map((item, index) => {
//             console.log(item, index)
//         });
//     }
//     render(){
//         const{error, isLoaded, items} = this.state;
//         if(error) {
//             return <div>Error: {error.message}</div>;
//         } else if (!isLoaded){
//             return <div>Loading ...</div>;
//         } else {
//             return(
//                 <ul className = "menu">
//                     {items.map(item => (
//                         <li key = {item.name}>
//                             {item.name}
//                         </li>
//                         ))}
//                 </ul>

//             )
//         }
        
//     }
// }

// class MenuItems extends Components{

// }

class Menu extends Component{
    render(props){
        const dataItems = this.props.dict.menuItems;
        const listItems = dataItems.map((item)=>
                <li><a href = {item.link}>{item.name}</a></li>
            )
        return(
                // <div className="menu-container">
                <ul className="menu-items">
                    {listItems}
                </ul>
                // </div>
            )
    }
}

class AsideMenu extends Component {
    constructor(props){
        super(props);
        this.state = {toggle:false};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        this.setState(state =>({
            toggle: !state.toggle
        }))
        // if(this.state.toggle){
        //     document.querySelector(".root").style.position = "static"
        //     document.querySelector(".site-hero").style.opacity = "1"
        // }
        // else{
        //     document.querySelector(".root").style.position = "fixed"
        //     document.querySelector(".site-hero").style.opacity = "0.4"
        //     // document.querySelector(".aside-bar").style.opacity = "1"
        // }
        // console.log("clicked", this.state.toggle);
        // if(this.state.toggle){

        // }
    }
    render(){
        const style = {display: this.state.toggle ? 'block' : 'none' }
        const tt = this.state.toggle
        // const name = {tt? "on":null}
        return(
            <aside className="aside-bar">
                {/* <div className = "menu"> */}
                    <div className = {`trigram-icon ${tt}`}  onClick ={this.handleClick}></div>
                    <div className = {`show-hide ${tt}`} style = {style}>
                        <Menu dict = {dict}/>
                    </div>
                    
                {/* </div> */}
                
            </aside>
        )
    }
}

class NavBar extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <nav className = "site-navbar">
                <LogoImg />
                <AsideMenu />
            </nav>
            )
    }
}



class CircleSvg extends Component{
    render(){
        return(
                // <div className="svg-circle">
                    // <svg xmlns="http://www.w3.org/2000/svg">
                        <circle cx="100" cy="100" r={this.props.radius} fill={this.props.circlecolor} className = {this.props.name}/>
                    // </svg>
                // </div>
            )
    }
}

class LineSvg extends Component{
    render(){
        return (
                // <svg xmlns="http://www.w3.org/2000/svg">
                        <line x1="100" y1="0" x2="100" y2="100" stroke="black"/>
                    // </svg>
            )
    }
}
class CompleteSvg extends Component{
    render(){
        return (
                <div className= "svg-line">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%">
                    <g className="grouped-svg">
                        <LineSvg />
                        <CircleSvg radius = "10" circlecolor="#fdd835" name = "smaller-circle"/>
                        <CircleSvg radius = "20" circlecolor="#fffde7" name = "bigger-circle"/>
                    </g>
                    </svg>
                </div>

            )
    }
} 

// class Hero extends Component{
//     render() {
//         console.log(dict)
//         return (
            
//             <div className = "site-hero">
//                 {/* <CompleteSvg/> */}
//                 {/* <CompleteSvg/> */}
//                 <div className = "hero-welcome"><span className="hero-welcome-sp">Welcome.</span></div>
//                 <div className = "hero-pipe"></div>
//                 {/* <CompleteSvg/> */}
//                 {/* <CompleteSvg/> */}
//             </div>
            
//             )
//     }
// }

const Hero = props =>(
    <div className = "site-hero">
        {/* <CompleteSvg/> */}
        {/* <CompleteSvg/> */}
        <div className = "hero-welcome"><span className="hero-welcome-sp">Welcome.</span></div>
        <div className = "hero-pipe"></div>
        {/* <CompleteSvg/> */}
        {/* <CompleteSvg/> */}
    </div>
);

// class Picture extends Component{
//     render(){
//         return (
//             <img src={require(`${this.props.srcImg}`)}/>   
//         )
//     }
// }

const Picture = props =>(
    <img src={require(`${props.srcImg}`)}/>
);

// class Description extends Component{
//     render(){
//         console.log(this.props)
//         return(
//             <div className="description">{this.props.description}</div>
//         )
//     }
// }

const Description = props =>(
    <div className="description">{props.description}</div>
);

class TimelineB extends Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        console.log(this.props.data.year);
        return(
            // "HI"
            <div className="bar-container">
                <div className="arrow">
                    <div className="year">{this.props.data.year}</div>
                    <div className="time-desc">{this.props.data.description}</div>
                </div>
            </div>
        )
    }
}

class Timeline extends Component{
    render(){
        const data = this.props.info
        console.log(data)
        
            return this.props.info.map((comp)=>{
                console.log(comp);
                return (<TimelineB data={comp}/>)
            })
        
    }
}

class AboutMe extends Component{
    render(){
        console.log("ggh",dict.aboutMe[0].imagesrc)

        return(
            <section className = "about-me" id = "about-me">
                <div className="section-header">About Me</div><span></span>
                <div className="about-me-wrapper clearfix">
                    <Description description={dict.aboutMe[1].description}/>                
                    <Picture srcImg={dict.aboutMe[0].imagesrc}/>
                </div>
                <div className="timeline-wrapper clearfix">
                    <Timeline info= {dict.timeline}/>
                </div>
            </section>
        )
    }
}

class App extends Component {
    render(){
        return (
            <div className="root">
                {/* <NavBar/> */}
                <Hero />
                <AboutMe  />
                <section className="technologies">
                    <div className="section-header" id="tech-header">Technologies</div><span></span>
                    <BarChart data={dict.technologies} size={[400,400]} />
                </section>
                {/* <section className="contact-me" id="contact-me">
                    <div className="section-header">Contact Me</div><span></span>
                    <ContactMe data= {dict.contactMe}/>
                </section> */}
            </div>
            )
    }
}

// class App extends Component {
//     constructor(props){
//         super(props)
//     }
//     render() {
//         return (
//             // <MyDiv />,
//             <div className="App">
//                 <header className="App-header">
//                     <img src={logo} className="App-logo" alt="logo" />
//                     <h1 className="App-title">Welcome to React</h1>
//                 </header>
//                 <p className="App-intro">
//                   To get started, edit <code>src/App.js</code> and save to reload.
//                 </p>
//                 <MyDiv />
//             </div>
//         );
//         }
// }

export default App;
