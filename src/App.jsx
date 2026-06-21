import { BrowserRouter, Route, Routes } from "react-router-dom"




function App(){
    return(
      
        <BrowserRouter>

            
            <Routes>
                <Route path="/home"></Route>
                <Route path="/about"></Route>
            </Routes>
        </BrowserRouter>
            
    )
}

export default App