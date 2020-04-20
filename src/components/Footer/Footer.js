import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="flex-container">
      <p>Created by Lili Manrique</p>
      <div>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>
        ,{" "}
        <a href="https://www.flaticon.com/authors/nhor-phai" title="Nhor Phai">
          Nhor Phai
        </a>
        ,{" "}
        <a
          href="https://www.flaticon.com/authors/darius-dan"
          title="Darius Dan"
        >
          Darius Dan
        </a>
        , and{" "}
        <a
          href="https://www.flaticon.com/authors/ultimatearm"
          title="ultimatearm"
        >
          ultimatearm
        </a>
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
