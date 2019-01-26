import React, { Component } from 'react';
import compConfig from './compConfig.json'
import './input.css';

class InputField extends Component {
    constructor(props){
        super(props)
        this.state = {
            inFocus: false
        }
        this.nameValue = React.createRef()
        this.addLabelClass = this.addLabelClass.bind(this);
    }

    addLabelClass() {
        // debugger
        if(this.nameValue.current.value!==""){
            this.setState({
                inFocus: true
            })
        }
        else {
            this.setState(prevstate =>({
                inFocus: !prevstate.inFocus
            }))
        }
        // console.log(this.nameValue.current.value,this.nameValue.current.checked, this.state.inFocus)
    }

    render() {
        // const labelField = 
        // console.log(compConfig)
        const inputType = compConfig.inputField.inputType
        const inFocus = this.state.inFocus?"inFocus":""
        // const field = <input type={compConfig.inputField.inputType}></input>
        let opts = {}
        opts['disabled'] = compConfig.inputField.disabled?'disabled':''
        // opts['autofocus'] = compConfig.inputField.autofocus?'autofocus':''
        // console.log(this.nameValue.current.value,this.nameValue.current.checked, this.state.inFocus)
        return (
            <div className="input-field">
                <label for={compConfig.inputField.id} className = {`input-field-label ${inFocus}`}>{compConfig.inputField.labelText}</label> 
                <input ref={this.nameValue} type={inputType} id = {compConfig.inputField.id}  className = {`input-field-input ${compConfig.inputField.inputType} ${compConfig.inputField.class}`} {...opts} onFocus = {this.addLabelClass} onBlur = {this.addLabelClass}></input>
            </div>
        )
    }
    
}

export default InputField