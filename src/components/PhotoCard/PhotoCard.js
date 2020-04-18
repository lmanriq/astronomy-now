import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './PhotoCard.css'

class PhotoCard extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render () {
    return (
      <div className="rover-photo-container"> 
        <img className="rover-photo" src={this.props.image} onClick={this.handleOpenModal} alt="from the curiosity rover" />
        <Modal 
           isOpen={this.state.showModal}
           contentLabel="expanded photo"
        >
          <button onClick={this.handleCloseModal}>x</button>
          <img className="expanded-rover-photo" src={this.props.image} alt="from the curiosity rover" />
        </Modal>
      </div>
    );
  }
}

export default PhotoCard;