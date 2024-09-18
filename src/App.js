import { useState } from "react";
import { Routes, Route, BrowserRouter} from "react-router-dom"
import TrafficLight from "./components/TrafficLight"
import LightContext from "./context/LightContext";
import './App.css';

const App = () =>{
  const [colors, setColors] = useState("")
  const setColor = (val) =>{
    setColors(val)
  }
  return(
    <div>
    <LightContext.Provider value ={{colors, setColor: setColor}}>
    <BrowserRouter>
      <Routes>
          <Route exact path = "/" element = {<TrafficLight />} ></Route>
        </Routes>
      </BrowserRouter>
    </LightContext.Provider>
       
    
    </div>
  )
}
export default App;
