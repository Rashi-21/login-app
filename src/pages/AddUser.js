import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../pages/AddUser.css'
import Header from '../assets/header.jpg'
import axios from 'axios'


function Adduser()
{
    const [formValue, setFormValue]= useState({username:'', email:'',phone:'',address:'',status:''});
    const [refresh, setRefresh] = useState(0)
    const navigate= useNavigate();
    const allInputvalue= { username: formValue.username, email:formValue.email, phone:formValue.phone, address:formValue.address, status:formValue.status};
    const {username, email, phone, address, status} = allInputvalue
    const handleInput=(e)=>{
     const {name, value}= e.target;
     setFormValue({...formValue, [name]:value});
    }
    const handleSubmit= async(e)=>{
       e.preventDefault();
        
       if (username && email && phone && address && status) {
        axios.post("https://run.mocky.io/v3/f6343209-0136-4b22-a2e7-5d95ebc03db5", allInputvalue)
        .then(res => {
            setFormValue(res.data);
        })
        .catch(err => console.log(err));
       } 
      
    }

    const handleUpdate = async(e) => {
        e.preventDefault()

        if (username && email && phone && address && status) {
            axios.put("https://run.mocky.io/v3/f6343209-0136-4b22-a2e7-5d95ebc03db5", allInputvalue)
            .then(res => {
                setFormValue({username: '', email: '', phone: '', address: '', status:''})
                setRefresh(refresh + 1)

            })
            .catch(err => console.log(err))
        }
        
    }

    return(
        <React.Fragment>
            <div className="container">
                <div className="row-1">
                    <div className="background" style={{backgroundImage: `url(${Header})`}}>
                        <div className="col-md-12">
                            <h1 className="mt-2">Add New User</h1>
                            <p className="text-success"> </p>
                            <form onSubmit={ handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-lable">Username</label>
                                            <input type="text" name="username" className="form-control" value={formValue.username} onChange={ handleInput}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-lable">Email</label>
                                            <input type="text" name="email" className="form-control" value={formValue.email} onChange={ handleInput}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-lable">Phone No</label>
                                            <input type="text" name="phone" className="form-control" value={formValue.phone} onChange={ handleInput}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-lable">Address</label>
                                            <input type="text" name="address" className="form-control" value={formValue.address} onChange={ handleInput}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-lable">Status</label>
                                            <select className="form-control" name="status" value={formValue.status} onChange={ handleInput}>
                                                <option value="">--Please Select--</option>
                                                <option value="1">Active</option>
                                                <option value="0">Inactive</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-lable"></label>
                                            <button type="submit" className="btn btn-success btn-lg" onChange={handleUpdate} onClick={() => navigate('/userdata')} >Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>    
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default Adduser;