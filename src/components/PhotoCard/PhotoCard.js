import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import Modal from "react-modal";
import "./PhotoCard.css";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../actions";
import PropTypes from "prop-types";

class PhotoCard extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    const {
      id,
      image,
      testid,
      favorites,
      addFavorite,
      removeFavorite
    } = this.props;
    const favBtn = (
      <button onClick={() => addFavorite(id)}>
        <img
          data-testid={`news-${id}`}
          className="heart-icon"
          src="/images/empty-heart.svg"
          alt="empty heart icon"
        />
      </button>
    );
    const unFavBtn = (
      <button onClick={() => removeFavorite(id)}>
        <img
          data-testid={`news-${id}`}
          className="heart-icon"
          src="/images/full-heart.svg"
          alt="full heart icon"
        />
      </button>
    );

    const btn = favorites.includes(id) ? unFavBtn : favBtn;

    return (
      <article className="photo-card flex-container">
        <button className="rover-photo-container" data-testid={testid}>
          <img
            className="rover-photo"
            src={image}
            onClick={this.handleOpenModal}
            alt="from the curiosity rover"
          />
          <Modal isOpen={this.state.showModal} contentLabel="expanded photo">
            <button
              data-testid="close-image-btn"
              onClick={this.handleCloseModal}
            >
              x
            </button>
            <img
              className="expanded-rover-photo"
              src={image}
              alt="from the curiosity rover - expanded"
            />
          </Modal>
        </button>
        <div className="favorites-box flex-container photo-favorite">
          {btn}
          <p>Add to Favorites</p>
        </div>
      </article>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites
});

const mapDispatchToProps = dispatch => ({
  addFavorite: id => dispatch(addFavorite(id)),
  removeFavorite: id => dispatch(removeFavorite(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoCard);

PhotoCard.propTypes = {
  favorites: PropTypes.array,
  image: PropTypes.string,
  id: PropTypes.number,
  testid: PropTypes.number,
  addFavorite: PropTypes.func,
  removeFavorite: PropTypes.func
};
