import React, { Component } from 'react';
import compConfig from './compConfig.json'
import './modal.css';

class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({
            modalOpen: true
        })
    }

    closeModal() {
        this.setState({
            modalOpen: false
        })
    }

    render() {
        // if (this.state.modalOpen) {
            
        // }
        return (
            <div className="portfolio-modal">
                {
                    this.state.modalOpen && 
                    <div className="modal-container">
                        <div className="modal-box" tabIndex="1" onBlur = {this.closeModal}>
                            <div className="modal-header">
                                <button onClick = {this.closeModal}></button>
                            </div>
                            <div className="modal-content" dangerouslySetInnerHTML={{__html:compConfig.modalButton.modalContent}}>
                                {/* {compConfig.modalButton.modalContent} */}
                            </div>
                        </div>
                    </div>
                }
                <button className = "portfolio-modal-button" onClick = {this.openModal}>{compConfig.modalButton.text}</button>
            </div>
        )
    }
}

export default Modal