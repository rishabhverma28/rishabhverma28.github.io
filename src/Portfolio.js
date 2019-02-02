import React, { Component } from 'react';
import InputField from "./lib/input"
import Modal from "./lib/modal"
import Avatar from "./lib/avatar"
import './Portfolio.css';
import Banner from './lib/banner';

class Portfolio extends Component {
    render(){
        return(
            <div className="portfolio-container">
                <span>This is the Portfolio of Components that I have created in React.</span>
                <div className="heading">Input</div>
                <InputField/>
                <div className="heading">Modal</div>
                <Modal/>
                <div className="heading">Avatar</div>
                {/* gender="male/female" prImage={LogoImage}*/}
                <Avatar/>
                <div className="heading">Banner</div>
                <Banner/>
            </div>
        )
    }

}

export default Portfolio;