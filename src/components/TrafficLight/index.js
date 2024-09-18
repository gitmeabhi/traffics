import { useState, useEffect } from "react"
import Header from "../Header"

import "./index.css"


const config = {
    red: {
      backgroundColor: 'red',
      duration: 7000,
      next: 'green',
    },
    yellow: {
      backgroundColor: 'yellow',
      duration: 3000,
      next: 'red',
    },
    green: {
      backgroundColor: "#2dc02d",
      duration: 10000,
      next: 'yellow',
    },
  };


  function Light({ backgroundColor, dura }) {
    return (
      <div
       
        className="traffic-light"
        style={{ backgroundColor }}
      ></div>
    );
  }


const TrafficLight = () =>{
    // const [count, setcount] = useState(0)

    const [light, setLight] = useState("green")


    useEffect(() =>{

        const { duration, next } = config[light];

        // const interval = setInterval(() => {
        //     setcount((count) => count + 1);
        //   }, 1000);
        //   return () => clearInterval(interval);

        const timerId = setTimeout(() => {
            setLight(next);
            
           
        }, duration);
    
        return () => {
          clearTimeout(timerId);
        };
    
   
      
    }, [light])


    const stopSignal = () =>{
        setLight("red")
        let pads = document.getElementById("pad")
      

        pads.style.visibility = "visible"
        
    }

            return(
                <div className="total">
                <Header />
                <div className="container">
                    <div className="middle-container">
                        {/* <h1>{count}</h1> */}
                        <div className="ped-pole">
                            <button type = "button" onClick={stopSignal} className="ped-btn tooltip">o
                            <span class="tooltiptext">Press button to cross Road</span>
                            </button>
                        </div>
                        <div className="zebra">
                            <img src="https://res.cloudinary.com/dcbul0ogm/image/upload/v1726566411/pedestrian-cross-zebra-cross-icon-logo-design-vector-template-illustration_xai1fe.jpg" alt = "zebra" id="pad" className="zebra-img" />
                        </div>
                        <div className="light-pole">
                    <div className="lights">
                    {Object.keys(config).map((color) => (
                      <Light
                          key={color}
                           backgroundColor={
                           color === light
                              ? config[color].backgroundColor
                           : undefined
                             }
                             dura = {config[color].duration}
                               />
                              ))}
                    </div>
                           
                            <div className="down-pole"></div>
                        </div>
                    </div>
                </div>
                </div>
            )
    
}

export default TrafficLight