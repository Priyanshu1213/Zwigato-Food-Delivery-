import './App.css';
import Cart from './Component/Cart/Cart';
import Order from './Component/Order/Order';
import FirstPage from "./firstpage"


import {BrowserRouter,Route,Routes} from "react-router-dom"
function App() {
  return (

    <div className="App">
      {/* <FirstPage/> */}
      
      <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<FirstPage/>} />
        <Route path='/order' element={<Order/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    
      
    </div>
    
  );
}

export default App;
