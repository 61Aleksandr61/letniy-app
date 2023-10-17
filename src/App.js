import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import Catalog from "./pages/Catalog"
import Card from "./pages/Card"

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/apartments/" element={<Catalog/>}/>
        <Route path="/apartments/:id" element={<Card/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App