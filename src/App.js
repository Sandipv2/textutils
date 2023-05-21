import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Home from "./Components/Home";
import Loader from "./Components/Loader";
import Alert from "./Components/Alert";

function App() {
  const [mode, setMode] = useState("primary");
  const [currentMode, setCurrentMode] = useState("Dark Mode");
  const [text, setText] = useState("");
  const [loader, setLoader] = useState(true);
  const [alert, setAlert] = useState({})
  const [wordsCount, setwordsCount] = useState(0)
  
  function showAlert(message, type){
    setAlert({
      msg: message,
      type: type,
    });
    
    setTimeout(() => {
      setAlert({});
    }, 1500);
  }

  const textareaChange = (e) => {
    setText(e.target.value);
    setwordsCount(text.split(" ").length)
  };
  

  const handlemode = () => {
    if (mode === "primary") {
      setMode("dark");
      setCurrentMode("Light Mode");
      document.body.style.backgroundColor = "#043743";
    } else {
      setCurrentMode("Dark Mode");
      setMode("primary");
      document.body.style.backgroundColor = "";
    }
  };


  useEffect(()=>{
    setLoader(false)
  })

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <Router>
          <Navbar
            handlemode={handlemode}
            mode={mode}
            currentMode={currentMode}
          />
          <Alert alert={alert}/>
          <Routes>
            <Route
              path="/"
              element={
                <Home mode={mode} textareaChange={textareaChange} setText={setText} text={text} showAlert={showAlert} wordsCount={wordsCount}/>
              }
            ></Route>
            <Route path="/about" element={<About mode={mode} />}></Route>
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
