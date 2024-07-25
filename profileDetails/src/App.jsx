import { useState } from 'react';

function App() {
  const [formDetails,setFormDetails]=useState([]);

  const [form,setForm]=useState({
    name:'',
    email:'',
  });


  const addDetails = (user_name,user_email)=>{
    console.log(user_name,user_email)
    setFormDetails([...formDetails,{name:user_name,email:user_email}]);
  }

  return (
    <>
    <div>
     <h1 className='text-4xl text-center font-bold '>Profile Details Form</h1>  <br /><br />
        <label className='text-left'>Your name: </label><br />
        <input 
          className='bg-gray-90 w-52 h-[30px] py-5 px-2 rounded-md'
          type="text" 
          value={form.name} 
          placeholder='Enter your name'
          onChange={e=>{
            setForm({...form,name:e.target.value})
          }} /> <br /><br />
          <label className='text-left'>Your email: </label><br />
        <input 
          className='bg-gray-90 w-52 h-[30px] py-5 px-2 rounded-md'
          type="email" 
          placeholder='Enter your email' 
          value={form.email} 
          onChange={e=>{
            setForm({...form,email:e.target.value})
          }} /> <br /><br /><br />
        <button onClick={()=>{
          setForm({name:'',email:''});
          addDetails(form.name,form.email)
        }}>Submit</button>


      <h1 className='text-4xl text-center font-bold '>All Profile Details</h1>  <br /><br />
      <ul className='px-10'>
        {formDetails.map((detail,index)=>(
          <li className='mb-4' key={index}>
            <div className='bg-slate-400 p-5 border-gray-200 rounded-lg'>
              <p className='text-black'>Name : {detail.name}</p>
              <p>E-mail : {detail.email}</p>
            </div>
            </li>
        ))}
      </ul>
      </div>
    </>
  )
}

export default App
