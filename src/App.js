import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Details from './pages/Details';
import Cart from './pages/Cart';

function App() {
  return (
    <div>
      <BrowserRouter >
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/details' element={<Details/>}/>
          <Route path='/cart' element={<Cart/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
