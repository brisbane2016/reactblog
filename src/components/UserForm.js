import React,{useState,useContext} from 'react';
import {UserContext} from './User/Context/UserContext';
const UserForm = () => {
    const {userActions} = useContext(UserContext);


    const [name,setName]=useState('');
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [address,setAddress]=useState('');
    const [city,setCity]=useState('');
    const [zip,setZip]=useState('');
 
    const handleSubmit = (e) =>{
        e.preventDefault();

        userActions.addUserAction({
            name,
            username,
            email,
            address,
            city,
            zip
        });

        setName('');
        setUsername('');
        setEmail('');
        setAddress('');
        setCity('');
        setZip('');
    }

    return (
        <>
            <h1 className="h3 text-left text-capitalize font-weight-bold">Manual Input User information</h1>
            <form className="jumbotron bg-light w-75 pt-4 pl-0" onSubmit={handleSubmit}>

                <fieldset>
                    <legend className="p">User Information</legend>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="name" placeholder="Name" value={name}
                            
                                onChange={(e) => setName(e.target.value)}
                            
                            required />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"  >Username</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="username" id="username"  
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="staticfEmail" 
                             pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
                            placeholder="email@example.com" 
                              value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                <legend className="p">Address</legend>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" 
                          value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required />
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label >City</label>
                            <input type="text" className="form-control" id="inputCity" 
                              value={city}
                                onChange={(e) => setCity(e.target.value)}
                            required />
                        </div>

                        <div className="form-group col-md-2">
                            <label >Zip</label>
                            <input type="text" className="form-control" id="inputZip" 
                              value={zip}
                                onChange={(e) => setZip(e.target.value)}
                            required />
                        </div>
                    </div>

                </fieldset>


                <button type="submit" className="btn btn-primary">Submit</button>

            </form>

        </>





    );
}

export default UserForm;