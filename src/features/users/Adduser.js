import React, { useState } from 'react'
import Textfield from '../../components/Textfield'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from './userSlice';
import { v4 as uuidv4 } from 'uuid';


const Adduser = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [values,setValues] = useState({
    name:'',
    email:'',
  })

  const handleAddUser = () =>{
    // console.log(values);
    setValues({ name: '', email: '' });
    dispatch(addUser({
        id:uuidv4(),
        name:values.name,
        email:values.email,
    }))
    navigate('/');
  }

  return (
    <div className='mt-10 max-w-xl mx-auto'>
      <Textfield label="Name" 
      value={values.name}
      onChange={(e) => setValues({...values,name: e.target.value})}
      inputProps={{type:'text' , placeholder:'Enter name..'}} />
      <br />
      <Textfield label="Email"
      value={values.email}
      onChange={(e) => setValues({...values,email: e.target.value})}
      inputProps={{type:'text' , placeholder:'Enter email..'}} />

      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  )
}

export default Adduser
