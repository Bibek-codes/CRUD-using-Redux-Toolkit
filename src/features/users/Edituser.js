import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import Textfield from "../../components/Textfield"
import { editUser } from "./userSlice"
// import { editUser } from "./userSlice"

const EditUser = () => {
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector(store=>store.users);
    const existingUser = users.filter(user=> user.id===params.id)
    const {name,email} = existingUser[0];
    const [values,setValues] = useState({
      name,
      email,
    })
  
    const handleEditUser = () =>{
    //   console.log(values);
      setValues({ name: '', email: '' });
      dispatch(editUser({
        id:params.id,
        name:values.name,
        email:values.email
      }));
      navigate('/');
    }
  
    return (
      <div className='mt-10 max-w-xl mx-auto'>
        <Textfield label="Name" 
        value={values.name}
        onChange={(e) => setValues({...values,name: e.target.value})}
        inputProps={{type:'text' , placeholder:'John Doe'}} />
        <br />
        <Textfield label="Email"
        value={values.email}
        onChange={(e) => setValues({...values,email: e.target.value})}
        inputProps={{type:'text' , placeholder:'johndoe69@gmail.com'}} />
  
        <Button onClick={handleEditUser}>Edit</Button>
      </div>
    )}

export default EditUser