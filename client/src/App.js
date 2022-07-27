import './App.css';
import Home from './Components/Home';
import AddContact from './Components/AddContact';
import ListContact from './Components/ListContact';
import UpdateContact from './Components/UpdateContact';
import NavContact from './Components/NavContact';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <NavContact/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/listContact' element={<ListContact/>}/>
        <Route path='/AddContact' element={<AddContact/>}/>
        <Route path='/updateContact/:id' element={<UpdateContact/>}/>
      </Routes>
    </div>
  );
}

export default App;
