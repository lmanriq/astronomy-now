import React, { Component } from 'react';
import { connect } from 'react-redux';

class IssMap extends Component {
  render() {
    return(
      <section className="map-container">

      </section>
    )
  }
}

const mapStateToProps = state => ({
  issPosition: state.issPosition
})

export default connect(mapStateToProps)(IssMap)