import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/TextForm";
// import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light"); // Weather dark mode is enabled or not

  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = '#121212';
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <>
      <Navbar
        name="Sanmit"
        title="React"
        mode={mode}
        toggleMode={toggleMode}
      ></Navbar>
      <Textform mode={mode}> </Textform>
      {/* <About></About> */}
    </>
  );
}

export default App;
