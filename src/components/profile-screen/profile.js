import React, {useEffect, useState} from "react";
import * as service from '../../services/authentication-service';
import {Link, Route, Routes, HashRouter, useLocation, useNavigate, useParams} from "react-router-dom";
import PinnedStops from "./nav-components/pinned-stops";
import Followers from "./nav-components/followers";
import Following from "./nav-components/following";
import Posts from "./nav-components/posts";
import ConductorLikes from "./nav-components/conductor-likes";
import './index.css';
import UserSearchBar from "../user-search";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../actions/auth-actions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Profile = () => {
    const loggedIn = useSelector(state => state.sessionReducer.isLoggedIn)
    const user = useSelector(state => state.sessionReducer.profileData)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [profile, setProfile] = useState({});

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    function convertDateBirth(myDate) {
        let dateWithoutTime = myDate.split("T");
        var date = dateWithoutTime[0].split("-");
        return months[Number(date[1]) - 1] + " " + date[2] + ", " + date[0];
    };

    useEffect(() => {
        {loggedIn ? setProfile(user) : navigate('/profile-search')}
    }, [loggedIn]);

    return(
        <>
                <div className='container'>
                <div className='box top'>
                    <UserSearchBar/>
                </div>
                <div className='mt-5 box border border-black bg-light rounded-2 ps-2 pe-2'>
                    <div className="row border-bottom bg-black border-2 rounded-3 pt-3 p-1">
                        <div className="col-1">
                            {profile && profile.userRole === 'Commuter' ? <i className={"fa fa-briefcase"}/>: ''}
                            {profile && profile.userRole === 'Conductor' ? <i className={"fa fa-train"}/>: ''}
                            {profile && profile.userRole === 'Admin' ? <i className={"fa fa-desktop"}/>: ''}
                        </div>
                        <div className="col-11">
                            <h5>
                                <span className='fw-bold text-white'>{profile && profile.name? profile.name: ''}</span>
                                <span className="d-none d-md-block float-end text-primary">{profile && profile.userRole? profile.userRole: ''}</span>
                            </h5>

                        </div>
                    </div>

                    <div className="position-relative border-bottom">
                        <img src='/images/train.png' alt='' className="banner"/>
                    </div>
                    <img src='/images/thomas.png' alt='' className="profile-pic"/>

                    <div className='float-end mt-1'>

                        <button onClick={() => navigate('/profile/editprofile')}
                                type='button'
                                className='btn btn-primary rounded-pill mt-2 me-2 p-2'>
                            <span className="d-none d-sm-block">Edit Profile</span>
                            <span className="d-xs-block d-sm-none"><FontAwesomeIcon icon="fa-solid fa-pen-to-square" /></span>
                        </button>

                        <button onClick={() => logout(dispatch).then(navigate('/profile-search'))} className=" btn btn-danger rounded-pill mt-2 me-2">
                            Logout
                        </button>
                    </div>
                    <div className="m-2 ms-3">
                        <span className=" fw-bold">@{profile && profile.username? profile.username :''}</span>

                        <div className="mt-1">{profile && profile.email? profile.email: ''}</div>


                    </div>
                    <div className="font-size-15 border-top pt-2 ps-2 pe-1 pb-3">
                        {profile.userRole === "Commuter" ?
                            <>

                            <span><i className='fa fa-home ms-1 me-1'/>
                                <span className="d-none d-lg-inline">Home stop</span>: {profile.homeStop}
                            </span>
                            </>
                            :
                            <>
                                {profile.userRole === "Admin" ?
                                    <>
                                    <span><i className='fa fa-building ms-1 me-1'/>
                                        <span className="d-none d-lg-inline">Job title</span>: {profile.jobTitle}
                                    </span>
                                    </>
                                    :
                                    <>
                                        {profile.userRole === "Conductor" ?
                                            <>
                                                <>
                                                    <Link  to="/home">
                                                    <span className="col-3 btn bg-warning ms-1 me-1">
                                                        Choose My Route
                                                    </span>
                                                    </Link>
                                                </>
                                                </>
                                                :
                                                ""
                                        }
                                    </>
                                }
                            </>
                        }
                        <span><i className='fa fa-birthday-cake ms-3 me-1'/>
                            { profile && profile.dateOfBirth?
                            <span className="d-none d-lg-inline">Born:  {convertDateBirth(profile.dateOfBirth)} </span>
                                :''}
                             </span>
                        {/*<span className="d-none d-lg-inline">Born</span>: { profile && profile.dateOfBirth? new Date(profile.dateOfBirth).toDateString() :''}</span>*/}
                    {/*    <span><i className='fa fa-calendar me-1 ms-3'/>*/}
                    {/*        <span className="d-none d-lg-inline">Joined</span>: {profile && profile.dateJoined? new Date(profile.dateJoined).toDateString():''}</span>*/}
                    </div>


                    <div className='ms-2'>
                        <ul className='nav mb-2 nav-tabs'>
                            <li className="nav-item ms-1 mb-1 border border-primary rounded-2">
                                <Link to="/profile/lists/your-posts"
                                      className={`nav-link ${location.pathname.indexOf('posts') >= 0 ? 'active':''}`}>
                                     <span className="d-none d-xxl-block">
                                                Posts
                                            </span>
                                    <span className="d-xl-block d-xxl-none">
                                                <FontAwesomeIcon icon="fa-solid fa-comment" />
                                            </span>
                                </Link>
                            </li>

                            <li className="nav-item ms-1 mb-1 border border-primary rounded-2">
                                <Link to="/profile/lists/followers"
                                      className={`nav-link ${location.pathname.indexOf('followers') >= 0 ? 'active':''}`}>
                                    Followers</Link>
                            </li>
                            <li className="nav-item ms-1 mb-1 border border-primary rounded-2">
                                <Link to="/profile/lists/following"
                                      className={`nav-link ${location.pathname.indexOf('following') >= 0 ? 'active':''}`}>
                                    Following</Link>
                            </li>
                            {profile.userRole === "Conductor" ?
                                <>
                                    <li className="nav-item ms-1 mb-1 border border-primary rounded-2">
                                        <Link to="/profile/lists/conductor-likes"
                                              className={`nav-link ${location.pathname.indexOf('conductor-likes') >= 0 ? 'active' : ''}`}>
                                            <span className="d-none d-xxl-block">
                                               Commuters Who Like You
                                            </span>
                                            <span className="d-xl-block d-xxl-none">
                                                <FontAwesomeIcon icon="fa-solid fa-heart" />
                                            </span>
                                             </Link>
                                    </li>
                                </>
                                :
                                <>
                                    {profile.userRole === "Commuter" ?
                                        <li className="nav-item ms-1 mb-1 border border-primary rounded-2">
                                            <Link to="/profile/lists/conductor-likes"
                                                  className={`nav-link ${location.pathname.indexOf('conductor-likes') >= 0 ? 'active' : ''}`}>
                                                <span className="d-none d-xxl-block">
                                                Conductors {profile.username} Likes
                                            </span>
                                                <span className="d-xl-block d-xxl-none">
                                                <FontAwesomeIcon icon="fa-solid fa-heart" />
                                            </span>
                                                 </Link>
                                        </li>
                                        : ""
                                    }
                                </>
                            }
                            {user && user.userRole === "Commuter" ?
                                <li className="nav-item ms-1 mb-1 border border-primary rounded-2">
                                    <Link to="/profile/lists/pinned-stops"
                                          className={`nav-link ${location.pathname.indexOf('pinned-stops') >= 0 ? 'active' : ''}`}>
                                        <span className="d-none d-xxl-block">
                                        Pinned Stops
                                    </span>
                                        <span className="d-xl-block d-xxl-none">
                                        <FontAwesomeIcon icon="fa-solid fa-thumbtack" />
                                    </span>
                                    </Link>
                                </li>
                                : ""
                            }
                        </ul>

                    </div>

                    <Routes>
                        <Route path="/followers" element={<Followers userProfile={user}/>}/>
                        <Route path="/following" element={<Following userProfile={user}/>}/>
                        <Route path="/your-posts" element={<Posts userProfile={user}/>}/>
                        <Route path="/conductor-likes" element={<ConductorLikes userProfile={user}/>}/>
                        <Route path="/pinned-stops" element={<PinnedStops userProfile={user}/> }/>
                    </Routes>
                </div>

            </div>
        </>


    );
}

export default Profile;