import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [theme, setTheme] = useState("dark");
  console.log("Theme-->", theme);
  return (
    <div className="main-component">
      <Header theme={theme} setTheme={setTheme} />
      <Body theme={theme} />
      <Footer theme={theme} />
      <Toaster position="top-center"/>
    </div>
  );
};

export default App;
