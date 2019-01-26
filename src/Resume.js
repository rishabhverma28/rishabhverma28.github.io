import React, { Component } from 'react'
import './resume.css';
import res from './res.json'

// class  ResDiv extends Component{
//     render(props){
//         return (
//             this.props.dict.items.map((item)=>
//             <Slide bottom>
//                     <div className="res-div">
                        
//                         <div className="res-heading">{item.heading}</div>
                        
//                         {/* <Zoom> */}
//                         <div className="res-desc" dangerouslySetInnerHTML={{__html:item.description}}></div>
//                         {/* </Zoom> */}
//                     </div>
//                     </Slide>                
//             )
            
//         )
//     }
// }

// class Resume extends React.Component {
//     render() {
//         return (
//             <ResDiv dict = {res}/>
//         )
//     }
// }

// class Arrows extends React.Component {
//     constructor(props){
//         super(props)
//     }
//     // handleClick() {
//     //     console.log("Left")
//     // }
//     render() {
//         return(
//             <button className = {`arrow ${this.props.direction}`} onClick = {clickFunction}>which</button>
//         )
//     }
// }



// class Tooltip extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             displayTooltip: false
//         }
//         this.dispTooltip = this.dispTooltip.bind(this)
//         this.hideTooltip = this.hideTooltip.bind(this)   
//     }

//     dispTooltip = () => {
//         this.setState = {
//             displayTooltip: true
//         }
//     }
    
//     hideTooltip = () => {
//         this.setState = {
//             displayTooltip: true
//         }
//     }

//     render() {
//         let message = this.props.message
//         return (
//             <span className = "tootltip" onMouseLeave = {this.hideTooltip}>
//                 {this.state.displayTooltip && <div className = "tooltip-popup"><div className = "tooltip-message">{message}</div></div>}
//                 <span className = "tooltip-trigger" onMouseOver={this.dispTooltip}>{this.props.children}</span>
//             </span>
//         )
//     }
// }

const Arrows = ({direction, clickFunction}) => (
    <button className = {`arrow ${direction}`} onClick = {clickFunction}></button>
);

class Slide extends React.Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            
            <div className="slide">
                <div className = "res-head"><div className = "header">{this.props.currSlide.heading}</div></div>
                <div className="res-description" ><div dangerouslySetInnerHTML={{__html:this.props.currSlide.description}}></div></div>

            </div>
        )
    }
}


class Carousel extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentSlide : 0
        }
        this.prevSlide = this.prevSlide.bind(this)
        this.nextSlide = this.nextSlide.bind(this)
    }

    prevSlide = () => {
        const lengthOfItems = res.items.length
        if (this.state.currentSlide -1>0) {
            this.setState({
                currentSlide: this.state.currentSlide -1
            })
        } else {
            this.setState({
                currentSlide: lengthOfItems-1
            })
        }
    }

    nextSlide = () => {
        const lengthOfItems = res.items.length
        // console.log(parseInt(this.state.currentSlide +1))
        if (this.state.currentSlide +1<lengthOfItems) {
            this.setState({
                currentSlide: this.state.currentSlide +1
            })
        } else {
            this.setState({
                currentSlide: 0
            })
        }
    }

    render(){
        return (
            <div className="carousel">
                <Arrows direction = "left" clickFunction ={this.prevSlide}/>
                <Slide currSlide = {res.items[this.state.currentSlide]}/>
                <Arrows direction = "right" clickFunction = {this.nextSlide}/>
            </div>
        )
        
    }
}



export default Carousel