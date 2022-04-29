import React, {useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {Button} from "react-bootstrap";
import * as action from '../../actions/auth-actions';
import {useDispatch} from "react-redux";
import {changeHighlight} from "../../actions/nav-bar-action";

const AdminRegistration = () => {
    const [newUser, setNewUser] = useState({
        userRole: 'Admin'
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //handle all info changes
    const handleName = (e) => {
        setNewUser({...newUser, name: e.target.value})
    }

    const handleEmail = (e) => {
        setNewUser({...newUser, email: e.target.value})
    }

    const handleUsername = (e) => {
        setNewUser({...newUser, username: e.target.value})
    }

    const handlePassword = (e) => {
        setNewUser({...newUser, password: e.target.value})
    }

    const handleDateOfBirthChange = (e) => {
        setNewUser({...newUser, dateOfBirth: e.target.value})
    }

    const handleJobTitle = (e) => {
        setNewUser({...newUser, jobTitle: e.target.value})
    }

    // handles Register button
    const createAccount = () =>
        action.register(dispatch, newUser)
            .then(() => navigate('/profile'))
            .catch(e => alert(e + "\n Username already exists. Please login."));
    return(
        <>
            <Button className='btn btn-dark' onClick={() => navigate('/register')}>Back</Button>
            <div className='form'>
                <h5 className='text-center'>Admin Account Registration</h5>
                <form>
                    <div className='input-container'>
                        <label> Name </label>
                        <div>
                            <input type='text'  className="form-control" placeholder='Enter Name' onChange={handleName}
                                   required={true}/>
                        </div>
                    </div>
                    <div className='input-container'>
                        <label> Username </label>
                        <div>
                            <input type='text' className="form-control" placeholder='Enter Username' onChange={handleUsername}
                                   required={true}/>
                        </div>
                    </div>
                    <div className='input-container'>
                        <label> Email </label>
                        <div>
                            <input type='text' className="form-control" placeholder='example@example.com' onChange={handleEmail}
                                   required={true}/>
                        </div>
                    </div>
                    <div className='input-container'>
                        <label> Password </label>
                        <div><input type='password'  className="form-control" placeholder='Enter Password' onChange={handlePassword}
                                    required={true}/>
                        </div>
                    </div>
                    <div className='input-container'>
                        <label> Date of Birth </label>
                        <div>
                            <input type='date'  className="form-control" placeholder='Enter Charlie Card Balance' onChange={handleDateOfBirthChange}
                                   required={true}/>
                        </div>
                    </div>
                    <div className='input-container'>
                        <label> Job Title </label>
                        <div>
                            <input type='text'  className="form-control" placeholder='Enter Job Title' onChange={handleJobTitle}
                                   required={true}/>
                        </div>
                    </div>
                    <br/>
                    <div className="button-container">
                        <Button className="btn btn-danger me-2" onClick={createAccount} >Create Account</Button>
                        <Link onClick={() => changeHighlight(dispatch, 'privacy')} to='/policy' className="btn btn-info">Privacy Policy</Link>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AdminRegistration;