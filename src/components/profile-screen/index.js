import Profile from './profile';
import profiles from "../../data/users.json";
import React from "react";
import {changeHighlight} from "../../actions/nav-bar-action";
import {useDispatch} from "react-redux";

const ProfileScreen =() => {
    const dispatch = useDispatch();
    changeHighlight(dispatch, 'profile')
    return(
        <Profile/>
    );
};

export default ProfileScreen;