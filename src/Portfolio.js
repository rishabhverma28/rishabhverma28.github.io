import React, { Component } from 'react';
import InputField from "./lib/input"
import Modal from "./lib/modal"
import Avatar from "./lib/avatar"
import './Portfolio.css';
import Banner from './lib/banner';
import AppDiv from './lib/appDiv'
import reactCalcImg from './lib/calc.png'
import reactQuotesImg from './lib/quotes.png'
import compConfig from './lib/compConfig.json'
import motvImg from './lib/motv.png'


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
                <div className="heading">These are some of the apps I've created. Have a look! 👀</div>
                <AppDiv pointsTo = "http://www.rishverma.me/react-calc" appImage={reactCalcImg} textDisplayed = {compConfig.calc}/>
                <AppDiv pointsTo = "http://www.rishverma.me/react-quotes" appImage={reactQuotesImg} textDisplayed = {compConfig.quotes}/>
                <AppDiv pointsTo = "http://www.rishverma.me/motv" appImage={motvImg} textDisplayed = {compConfig.motv}/>
            </div>
        )
    }

}

export default Portfolio;