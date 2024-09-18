import React from "react"

const LightContext = React.createContext({
    color : "red",
    setColor : () => {},
})

export default LightContext