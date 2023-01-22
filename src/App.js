import React, { useState } from "react";
import "./App.css";
import Alert from "./component/Alert";
// import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
// import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = " #212529";
      showAlert("Darkmode Enabled", "success");
      // document.title = "dark mode enable";
      // setInterval(() => {
      //   document.title = "dark mode enable"
      // }, 2000);

      // setInterval(() => {
      //   document.title = "install dark mode enable"
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Darkmode Disabled", "warning");
      // document.title = "dark mode disable";
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-5">
          {/* <Routes> */}
          {/* <Route exact path="/about" element={<About />} /> */}
          {/* <Route exact path="/" element={<TextForm
                showAlert={showAlert}
                heading="Convert Your Text As You Want."
                mode={mode}/>} /> */}
                <TextForm
                showAlert={showAlert}
                heading="Convert Your Text As You Want."
                mode={mode}/>
          {/* </Routes> */}
        </div>
        {/* </Router> */}
      {/* <div className="container my-3">
        <About />
      </div> */}
    </>
  );
}

export default App;
