import { Input, Update, YoutubeSearchedFor } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Editform.css"


const Editform = ({id,change,value,reload,setReload}) => {
const[firstName,setFirstName]=useState("")
const[Age,setAge]=useState("")
const[Experience,setExperience]=useState("")
const[Role,setRole]=useState("")
const[data,setdata]=useState("")
const getdata = ()=>{
    axios.get(`http://localhost:3000/employee/${id}`).then((res)=>{
       setdata(res.data);
       setFirstName(res.data.name)
       setAge(res.data.Age)
       setExperience(res.data.Experience)
       setRole(res.data.Role)
       console.log("data",data);
       console.log(res.data);

   })
}


const Update = () => {
    let data={name:firstName,Age:Age,Experience:Experience,Role:Role,}
    axios.put(`http://localhost:3000/employee/${id}`,data)
    change(!value)
    setReload(!reload)

}
useEffect(()=>{
    getdata();                     
},[])



console.log("data",data.Age);        

    return (
        <>
        <div className="editfullbody">

        <div className="editFormbox">
        <h1 className="editheading">Registration form</h1>
        <div className="editbox">
<div className ="edittextbox">
        <input onChange={(e) => setFirstName(e.target.value)} defaultValue={data.name} className="editTextField" id="outlined-basic" label="Firstname" variant="outlined" /><br/><br/>
        <input onChange={(e) => setAge(e.target.value)} defaultValue={data.Age} className="editTextField" id="outlined-basic" label="Age" variant="outlined" /><br/><br/>
        <input onChange={(e) => setExperience(e.target.value)} defaultValue={data.Experience} className="editTextField" id="outlined-basic" label="Experience" variant="outlined" /><br/><br/>
        <input onChange={(e) => setRole(e.target.value)} defaultValue={data.Role} className="editTextField" id="outlined-basic" label="Role" variant="outlined" /><br/><br/>
        <Button  onClick={()=>Update()} variant="contained" color="primary">
        Update
      </Button>
      </div>
      </div>
            
        </div>
        </div>
        </>
    );
};

export default Editform;