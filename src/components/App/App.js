import React from 'react';
import './App.css';
import PhotoPage from '../PhotoPage/PhotoPage'

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <section className="main-page">
        <PhotoPage />
        <footer>
          <p>Created by Lili Manrique</p>
          <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>, <a href="https://www.flaticon.com/authors/nhor-phai" title="Nhor Phai">Nhor Phai</a>, 
          and <a href="https://www.flaticon.com/authors/ultimatearm" title="ultimatearm">ultimatearm</a>from <a
              href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </footer>
      </section>
    </div>
  );
}

export default App;
