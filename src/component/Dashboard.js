import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Dashboard.css"
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import Editform from './editform/Editform';




const Dashboard = () => {
    const[showeditform,setshoweditform]=useState(false)
    const[data,setdata]= useState([]);
    const[editid,seteditid]= useState()
    const[reload,setreload]= useState(false)
    const getdata = ()=>{
         axios.get("http://localhost:3000/employee").then((res)=>{
            setdata(res.data);        
        })
    }
    const edit =(id) =>{
        seteditid(id)
        setshoweditform(!showeditform)
    }
  
    useEffect(()=>{
              getdata();    
            console.log("i am reloading")                 
    },[reload])
    
    console.log("data",data);
    const deleteRow = (id) =>{
        console.log("id=",id);
        axios.delete(`http://localhost:3000/employee/${id}`)
        setreload(!reload)

    }
    return (
    <div>
             { !showeditform ?  <div className="body">
            <h1>Employee Management System</h1>

<Button onClick={() =>{
    window.location.href="http://localhost:3001/form"
}} variant="contained" color="primary" >
  Add Employee
</Button>
        <table className="table">
            <tr className ="tr">
                <th>Sno</th>
            <th>Name</th>
            <th>Age</th>
            <th>Experience</th>
            <th>Role</th>
            <th>Actions</th>
            </tr>
            
            {data.map(({name,Age,Experience,Role,id},index)=>{
                return (
                <tr>  
                    <td>{index+1}</td>
                <td>{name}</td>
                <td>{Age}</td>
                <td>{Experience}</td>
                <td>{Role}</td>
                <div className="icons">
                <EditIcon titte = "Edity" onClick={()=>edit(id)} className="edit"/>
                <DeleteIcon onClick={()=>{
                    deleteRow(id)
                    }} className="delete"/>
                </div>                
                </tr>)
            })}
        </table>
        
            
        </div>  :   <Editform id={editid} change={setshoweditform} value={showeditform} reload={reload} setReload={setreload}/> }
         </div>
    )
};

export default Dashboard;