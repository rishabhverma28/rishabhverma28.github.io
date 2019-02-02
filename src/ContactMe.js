import React, { Component } from 'react';
import dict from './data.json'
import mailImg from './imgs/email.svg'

class SocialMedia extends Component {
    render() {
        return this.props.data.map((comp) => {
            console.log(comp);
            return (<div className={`social ${comp.name}`}>
                <a href={comp.link} target="_blank"><img src={require(`${comp.imageSrc}`)} /></a>
            </div>);
        });
    }
}

class ContactMe extends Component {
    render(){
        const available = dict.availability;
        let spanAvailibility;
        // available? spanAvailibility="I'm currently available for work 😃": spanAvailibility="I'm currently not available for work 😕";
        spanAvailibility = `I'm currently ${available?"":"un"}available for work ${available?"😃":"😕"}!`
        return(
            <section className="contact-me" id="contact-me">
                <div className="section-header">Contact Me</div><span></span>
                <SocialMedia data= {dict.contactMe}/>
                <div className="availability">
                    <span>{spanAvailibility}</span>
                </div>
                <div className="mail-to">
                    <a href="mailto:rishabh280693@gmail.com" className="email-me">Drop me an email!</a>
                </div>
            </section>
            
        )
    }
}

export default ContactMe