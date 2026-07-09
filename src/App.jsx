import { BrowserRouter, Route, Routes } from "react-router-dom"

import Header from "./components/header"
import Home from "./components/home"
import About from "./components/about"

function App(){
    return(
      
        <BrowserRouter>
            <Header></Header>

            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
            </Routes>
        </BrowserRouter>
            
    )
}

export default App