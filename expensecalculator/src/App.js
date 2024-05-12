import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Signin from './components/Signin';
import Registration from './components/Registration';
import Profile from './components/Profile'
import Updatepassword from './/components/Updatepassword'
import Newexpense from './components/Newexpense'
import Newincome from './components/Newincome';
import Viewexpense from './components/Viewexpense';
import Viewincome from './components/Viewincome'


function App() {
  return (
    <div className="App">
     <Routes>

        <Route path='/' element={<Home/>}></Route>
        <Route path='Signin' element={<Signin/>}></Route>
        <Route path='Registration' element={<Registration/>}></Route>
        <Route path='Profile' element={<Profile/>}></Route>
        <Route path='Updatepassword' element={<Updatepassword/>}></Route>
        <Route path='Newexpense' element={<Newexpense/>}></Route>
        <Route path='Newincome' element={<Newincome/>}></Route>
        <Route path='Viewexpense' element={<Viewexpense/>}></Route>  
        <Route path='Viewincome' element={<Viewincome/>}></Route>  
    



      </Routes>
    </div>
  );
}
export default App;