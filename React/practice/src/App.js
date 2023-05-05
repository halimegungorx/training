import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState("light")
    
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      document.title = "Dark Mode"

      setInterval(() => {
        document.title = "Your advice is infected with a virus";
      },2000)// title changes every 2 ms

      setInterval(() => {
        document.title = "Install an antivirus software";
      },1500) // title changes every 1.5 ms
      
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "Light Mode"
    }//
  }//end togg

  return (
    <>
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <Switch>
          <Route exact path="/">
              <Textform heading="Text Area" mode={mode}/> 
          </Route>
          <Route exact path="/about">
               <About/>
          </Route>
        </Switch>
      </div>
      {/* {<Navbar title = "Practice project" aboutText="About Us"/>} */}
    </Router>

    </>
  );
}

export default App;
