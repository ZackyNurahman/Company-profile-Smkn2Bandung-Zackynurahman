import {Route, Routes} from 'react-router-dom'
import logo from './logo.svg';
import Login from './login';
import Register from './register';
import Home from './home';
import './App.css';
import Tentang from './Tentang';
import Contact from './contact';


function App() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login'element={<Login/>}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/tentang' element={<Tentang />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
    </Routes>
  );
}

export default App;
