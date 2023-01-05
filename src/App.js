import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
