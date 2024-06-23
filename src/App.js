import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light"); // Weather dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      showAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#121212";
      showAlert("Dark mode enabled", "success");
      document.title = "TextUtils Home - Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "warning");
      document.title = "TextUtils Home - Light mode";
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
      <Textform mode={mode} showAlert={showAlert}/>
      { /* <About></About> */ }
    </>
  );
}

export default App;
