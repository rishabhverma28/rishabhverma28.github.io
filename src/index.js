import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import Carousel from './Resume';
import registerServiceWorker from './registerServiceWorker';
import LogoImage from './gent.svg';
import dict from './data.json'
import ContactMe from './ContactMe';
import Portfolio from './Portfolio';

const LogoImg = () =>(
    <div className = "site-logo">
        <a href="/"><img src = {LogoImage} className = "site-logo-img"/></a>
    </div>
);


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

const NavBar = () => (
    <nav className = "site-navbar">
        <LogoImg />
        <AsideMenu />
    </nav>
);

const routing = (
    
        <div className="root-main">
            <NavBar/>
            <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path = "/" component = {App}></Route>
                <Route path = "/resume" component={Carousel}></Route>
                <Route path = "/portfolio" component={Portfolio}></Route>
                <Route path = "/contactMe" component={ContactMe}></Route>
            </Switch>
            </Router>
        </div>
    
)
ReactDOM.render(routing, document.getElementById('site-body'));

registerServiceWorker();
