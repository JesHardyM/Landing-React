import { useState } from "react"
import Navbar from "./components/Navbar"
import Home from "./layouts/Home"
import Contact from "./layouts/Contact"
import Location from ".layouts/Location"

const showContact = () => {
    if (window.location.pathname === "/contact") {
        return <Contact/>
    }
}

const showLocation = () => {
    if (window.location.pathname === "/location") {
        return <Location/>
    }
}

// a simpler way to do this without calling each component individually

const showComponent = (path, component) => {
    if (window.location.pathname === path) {
        return component;
    }
}

function App() {
    return
    <div>
        <Navbar/>
        <Route path = "/home"> //these lines show how to import children
            <Home/>
        </Route>
        {showComponent("/home", <Home/>)} // these lines show how to import components
        {showComponent("/contact", <Contact/>)}
        {showComponent("/location", <Location/>)}
    </div>
}