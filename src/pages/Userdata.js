import React,{ useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../pages/Userdata.css'
import axios from "axios";

function Userdata()
{
    const [userInfo, setUserInfo]= useState([]); 
    useEffect( ()=>{
        const getUserdata= async()=>{
            axios("https://run.mocky.io/v3/f6343209-0136-4b22-a2e7-5d95ebc03db5")
            .then(res => {
              setUserInfo(res.data)
            })
            .catch(err => console.log(err))
        }
        getUserdata();
    },[]);

    console.log(userInfo)
    
 
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h1 className="mt-1">User Data</h1>
                       
                       <table className="table table-bordered table-striped">
                        <thead>
                        <tr>
                        <th>Sr. No</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone No</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                         {userInfo.map( (userInfo, index)=>(                           
                        <tr key={index}>
                        <td>{index+1} </td>
                        <td>{ userInfo.username } </td>
                        <td>{ userInfo.email } </td>
                        <td>{ userInfo.phone } </td>
                        <td>{ userInfo.address } </td>
                        <td>{ userInfo.status===1?"Active":"Inactive" } </td>
                        <td>
                         <Link to={"/editUser/"+userInfo.userid} className="btn btn-success mx-2">Edit</Link>
                         <Link to="/deleteUser" className="btn btn-danger">Delete</Link>
                        </td>
                        </tr>
                        )) 
                        }                        
                        </tbody>
                        </table>                            
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default Userdata;