import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import AddUser from './pages/AddUser';
import Userdata from './pages/Userdata';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/add-user' element={<AddUser/>} />
          <Route path='/userdata' element={<Userdata/>} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
