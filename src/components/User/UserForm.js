import React, { useState } from 'react';

const UserForm = (props) => {
  
    let updateUser,title;

    if (props.updateUser && Object.keys(props.updateUser).length > 0) {
        
        updateUser = props.updateUser;
        title = "Update";
    } else {
        updateUser = { name: '', username: '', email: '', address: '', city: '', zip: '' };
        title ="Add"
    }


    const { name: updatename, username: updateusername, email: updateemail, address: updateaddress, city: updatecity, zip: updatezip } = updateUser;
    const [name, setName] = useState(updatename);
    const [username, setUsername] = useState(updateusername);
    const [email, setEmail] = useState(updateemail);
    const [address, setAddress] = useState(updateaddress);
    const [city, setCity] = useState(updatecity);
    const [zip, setZip] = useState(updatezip);
   

    const handleSubmit = (e) => {
        e.preventDefault();

        const newuser = {
            name,
            username,
            email,
            address,
            city,
            zip

        }
        props.handlePassUser(newuser);
        setName('');
        setUsername('');
        setEmail('');
        setAddress('');
        setCity('');
        setZip('');
    }

    return (
        <>
            <h3>{title === 'Update' ?`Update user: ${name}`: `Add new user: ${name}`}</h3>

      

            <form className=" pt-4 pl-10 pr-10" onSubmit={handleSubmit}>

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
                        <label className="col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="username" id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Email</label>
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