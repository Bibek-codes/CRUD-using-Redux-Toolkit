import './App.css';
import Userlist from './features/users/Userlist';
import { Route, Routes } from 'react-router-dom';
import Adduser from './features/users/Adduser';
import EditUser from './features/users/Edituser';

function App() {
  return (
    <div className='container mx-auto px-2 max-w-5xl pt-10 md:pt-32'>
      <h1 className='text-center font-bold text-2xl text-gray-700'>CRUD with RTK</h1>
      <Routes>
        <Route path='/' element={<Userlist />} />
        <Route path='/add-user' element={<Adduser />} />
        <Route path='/edit-user/:id' element={<EditUser />} />
      </Routes>
    
    </div>
  );
}

export default App;
