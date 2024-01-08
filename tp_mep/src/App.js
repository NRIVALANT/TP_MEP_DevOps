import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Mon site web</h1>
        <p>
          Ce site web est un exemple de header en React avec un menu déroulant.
        </p>
      </main>
    </div>
  );
};

export default App;
