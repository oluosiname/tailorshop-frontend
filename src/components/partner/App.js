import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";

import Header from "./Header";
const App = (props) => {
  const [showSideBar, setshowSideBar] = useState(false);

  useEffect(() => {
    setshowSideBar(false);
  }, []);

  return (
    <div className="partner-app">
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />

      <Header setshowSideBar={setshowSideBar} showSideBar={showSideBar} />
      <main>
        <section className="content">{props.children}</section>
      </main>
      <div
        className={`overlay ${showSideBar ? "show" : ""}`}
        onClick={() => setshowSideBar(false)}
      ></div>
    </div>
  );
};

export default App;
