import React, { useState, useEffect } from "react";

import Header from "./Header";
const App = (props) => {
  const [showSideBar, setshowSideBar] = useState(false);

  useEffect(() => {
    setshowSideBar(false);
  }, []);

  return (
    <div className="partner-app">
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
