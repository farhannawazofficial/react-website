import React, { useState } from 'react';
import '../styles/home.css';

const Home = () => {
  const [name, setName] = useState('Unknown')
  const [email, setEmail] = useState('Unknown')
  const [password, setPassword] = useState('Unknown')
  const [confirmPassword, setConfirmPassword] = useState('Unknown')

  function handleNameChange(event){
    let newName = event.target.value
    setName(newName)
  }

  function handleEmailChange(event){
    let newEmail = event.target.value
    setEmail(newEmail)
  }

  function handlePasswordChange(event){
    let newPassword = event.target.value
    setPassword(newPassword)
  }
  

  function handleConfirmPasswordChange(event){
    let newPassword = event.target.value
    setConfirmPassword(newPassword)
  }

  function handleSubmit(event){
    event.preventDefault();
    
    if(password.length < 8){
      alert('password must be 8 characters')
    }
    else{
      if(password === confirmPassword ){
        let userDetail ={
          name: name,
          email: email,
          password: password
        }
    
        let jsonObject = JSON.stringify(userDetail)
        console.log(jsonObject);
  
      }
      else{
        alert("Password and confirm password do not match")
      }
    }

 

 
  

  }

  return (
    <div className='homeMain'>
     <h1>Form</h1>
     <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Name' onChange={handleNameChange} />
      <br />
      <input type="email" placeholder='Email' onChange={handleEmailChange} />
      <br />
      <input type="password" placeholder='Password' onChange={handlePasswordChange} />
      <br />

      <input type="password" placeholder='Confirm Password' onChange={handleConfirmPasswordChange} />
      <br />
      
      <button type='submit'>Submit</button>
     </form>


     <h1>User Details</h1>
     <p>Name: {name}</p>

    </div>
  );
}

export default Home;
