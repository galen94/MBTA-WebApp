import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const NavigationBar = () => {
    const navigationData = useSelector(state => state.navigationData)
    const isLoggedIn = useSelector(state=> state.sessionReducer.isLoggedIn)
    const dispatch = useDispatch();
    const changeHighlight = (highlight) => {
        dispatch({
            type: 'UPDATE_PAGE',
            activePage: highlight
        })
    }
    return(
        <>
            <div className='list-group'>
                <Link to='/'
                      className={`list-group-item`}>
                    <span><img className='img-fluid float-start' src="/images/teasy.png"/></span>
                </Link>
                <Link to='/'
                      onClick={() => changeHighlight('home')}
                      className={`list-group-item ${navigationData.activePage === "home" ? 'active': ''}`}>
                    <span>Home</span>
                </Link>
                <Link to='/profile'
                      onClick={() => changeHighlight('profile')}
                      className={`list-group-item ${navigationData.activePage === "profile" ? 'active': ''}`}>
                    <span>Profile</span>
                </Link>
                <Link to='/search'
                      onClick={() => changeHighlight('search')}
                      className={`list-group-item ${navigationData.activePage === "search" ? 'active': ''}`}>
                    <span>Search</span>
                </Link>
                <Link to='/posts'
                      onClick={() => changeHighlight('posts')}
                      className={`list-group-item ${navigationData.activePage === "posts" ? 'active': ''}`}>
                    <span>Posts</span>
                </Link>
                <Link to='/login'
                      onClick={() => changeHighlight('login')}
                      className={`list-group-item ${navigationData.activePage === "logout" ? 'active' : ''}`}>
                    <span>Login</span>
                </Link>
            </div>
        </>
    )
};

export default NavigationBar;