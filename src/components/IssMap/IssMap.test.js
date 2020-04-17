import React from 'react';
import { render } from '@testing-library/react';
import IssMap from './IssMap';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';

describe('ISS Map', () => {
  it('Should render what we expect', () => {
    const store = createStore(rootReducer);
    render(
      <Provider store={store}>
        <Router>
          <IssMap />
        </Router>
      </Provider>
    );
  })
})