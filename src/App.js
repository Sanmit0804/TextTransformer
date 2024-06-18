import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light"); // Weather dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = () => {
    setAlert("This is alert")
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#121212";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
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
      <Alert alert={alert} />
      <Textform mode={mode}> </Textform>
      {/* <About></About> */}
    </>
  );
}

export default App;
