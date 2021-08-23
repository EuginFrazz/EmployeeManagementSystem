import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import "./Form.css"





const Form = () => {
const[firstName,setFirstName]=useState("")
const[lastName,setLastName]=useState("")
const[Age,setAge]=useState("")
const[Experience,setExperience]=useState("")
const[Role,setRole]=useState("")
const[id,setid]=useState("")
const[data1,setdata]=useState([])

const checkvalidation =(e) => {
  if(firstName !== "" && Age !== "" && Experience !== "" && Role !== "")
  return true;
  else return false;
};
const Submit = (e) =>{
  const data={
    name:firstName,
    Age:Age,
    Experience:Experience,
    Role:Role,
    id : data1.length + 1,
  }
 if(checkvalidation(true)){ axios.post("http://localhost:3000/employee",data)
  window.location.href="http://localhost:3001/"}
}
const getdata = ()=>{
  axios.get("http://localhost:3000/employee").then((res)=>{
     setdata(res.data) ;
    })
    } 

useEffect(()=>{
  getdata();                     
},[])


    return (
    <>
        <div className="fullbody">
        <div className="Formbox">
        <h1 className="heading">Registration form</h1>
<div className ="textbox">
        <TextField onChange={(e) => setFirstName(e.target.value)} className="TextField" id="outlined-basic" label="Firstname" variant="outlined" /><br/><br/>
        <TextField onChange={(e) => setAge(e.target.value)} id="outlined-basic"  className="TextField" label="Age" variant="outlined" /><br/><br/>
        <TextField onChange={(e) => setExperience(e.target.value)} id="outlined-basic" label="Experience" className="TextField" variant="outlined" /><br/><br/>
        <TextField onChange={(e) => setRole(e.target.value)} id="outlined-basic" label="Role" className="TextField"  variant="outlined" /><br/><br/>
        <Button  onClick={Submit} variant="contained" color="primary">
        Submit
      </Button>
      </div>
        </div>


        
            
        </div>
        </>
    );
};

export default Form;

