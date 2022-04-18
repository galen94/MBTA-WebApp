import React, {useEffect, useState} from "react";
import * as service from '../../services/authentication-service';
import {Link, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import './index.css';
import {Button} from "react-bootstrap";

const EditProfile = () => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState({});

    useEffect(async () => {
        try{
            const user = await service.profile();
            setProfile(user);
        }
        catch (e) {
            alert(e);
            //navigate('/');
        }
    }, []);

    const saveProfile = () => {
        service.reset(profile)
            .then(() => navigate('/profile'));
    }

    const updateName = (event) => setProfile({
            ...profile,
            name: event.target.value
        });
    const updateUsername = (event) => setProfile({
        ...profile,
        username: event.target.value
    });
    const updateEmail = (event) => setProfile({
        ...profile,
        email: event.target.value
    });
    const updatePassword = (event) => setProfile({
        ...profile,
        password: event.target.value
    });
    const updateRole = (event) => setProfile({
        ...profile,
        userRole: event.target.value
    });
    const updateHomeStop = (event) => setProfile({
        ...profile,
        homeStop: event.target.value
    });
    const updateDOB = (event) => setProfile({
        ...profile,
        dateOfBirth: event.target.value
    });
    const updateJoinedDate= (event) => setProfile({
        ...profile,
        joinedDate: event.target.value
    });
    const updateJobTitle= (event) => setProfile({
        ...profile,
        jobTitle: event.target.value
    });
    const updateCharlieCard= (event) => setProfile({
        ...profile,
        charlieCard: event.target.value
    });


    return(
        <>
            <div className="row ">
                <div className="col-2"> <Button onClick={()=> navigate('/profile')} className={"fa fa-arrow-left btn-dark mt-1"}/> </div>
                <div className="col-8">
                    <h5 className="fw-bold">Edit Profile</h5>
                </div>
                <Button className="col-2 btn-primary rounded-pill mb-1 " onClick={saveProfile}>
                    Save
                </Button>
            </div><div className='border border-black bg-light rounded-2 ps-2 pe-2'>
                <div className="row border-bottom bg-black border-2 rounded-3 pt-3 p-1">

                </div>

                <div className="position-relative border-bottom">
                    <img src='/images/train.png' alt='' className="banner"/>
                </div>
                <img src='/images/thomas.png' alt='' className="profile-pic"/>


                <div className="row ms-2 mt-5 col-11 mb-2">
                    <label className='control-label'>
                        Edit Name
                    </label>
                    <input className="border-1 " value={profile.name} onChange={updateName}/>
                    <label className='control-label mt-2'>
                        Edit Username
                    </label>
                    <input className="border-1 " value={profile.username} onChange={updateUsername}/>
                    <label className='control-label mt-2'>
                         Edit Email
                    </label>
                    <input className="border-1 " value={profile.email} onChange={updateEmail}/>
                    <label className='control-label mt-2'>
                        Edit Password
                    </label>
                    <input className="border-1 " value={profile.password} onChange={updatePassword}/>

                    <label className='control-label mt-2'>
                        Edit Role
                    </label>
                    <select className="border-1 " value={profile.userRole} onChange={updateRole}>
                        <option>Commuter</option>
                        <option>Conductor</option>
                        <option>Admin</option>
                    </select>
                    <label className='control-label mt-2'>
                        Edit Home stop
                    </label>
                    <input className="border-1 " value={profile.homeStop} onChange={updateHomeStop}/>

                    <label className='control-label mt-2'>
                        Edit Date of Birth
                    </label>
                    <input className="border-1" value={profile.dateOfBirth} onChange={updateDOB}/>
                    <label className='control-label mt-2'>
                        Edit Joined Date
                    </label>
                    <input className="border-1 " value={profile.dateJoined} onChange={updateJoinedDate}/>
                    {/*<label className='control-label mt-2'>*/}
                    {/*    Edit Job Title*/}
                    {/*</label>*/}
                    {/*<input className="border-1 " value={profile.jobTitle} onChange={updateJobTitle}/>*/}


                    </div>




                </div>


        </>


    );
}

export default EditProfile;