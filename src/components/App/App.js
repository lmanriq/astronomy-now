import React from "react";
import "./App.css";
import PhotoPage from "../PhotoPage/PhotoPage";
import NavBar from "../NavBar/NavBar";
import LoginPage from "../LoginPage/LoginPage";
import NewsPage from "../NewsPage/NewsPage";
import FavoritesPage from "../FavoritesPage/FavoritesPage";
import IssPage from "../IssPage/IssPage";
import Footer from "../Footer/Footer";
import { Route } from "react-router-dom";
import Modal from "react-modal";

if (process.env.NODE_ENV !== "test") Modal.setAppElement("#root");

function App() {
  return (
    <div className="App">
      <Route path="/" component={() => <NavBar />} />
      <Route path="/" exact component={() => <PhotoPage />} />
      <Route path="/login" exact component={() => <LoginPage />} />
      <Route path="/iss-tracking" exact component={() => <IssPage />} />
      <Route path="/hubble-news" exact component={() => <NewsPage />} />
      <Route path="/favorites" exact component={() => <FavoritesPage />} />
      <Footer />
    </div>
  );
}

export default App;
