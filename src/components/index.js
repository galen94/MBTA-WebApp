import React from "react";
import AlertsReducer from "../reducers/alerts-reducer";
import LeftSidebar from "./left-sidebar";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import AlertsBar from "./alerts-bar";
import {Outlet} from "react-router-dom";
import NavigationReducer from "../reducers/navigation-reducer";
import SearchStopReducer from "../reducers/search-stop-reducer";
import SessionReducer from "../reducers/auth-reducer";
import UserReducer from "../reducers/user-reducer";
import SearchReducer from "../reducers/search-reducer";
import PinnedStopsReducer from "../reducers/pinned-stops-reducer";
import SingleStopReducer from "../reducers/single-stop-reducer";
import FollowReducer from "../reducers/follow-reducer";
import PostReducer from "../reducers/post-reducer";
import ConductedRoutesReducer from "../reducers/conducted-routes-reducer";
import ConductorLikesReducer from "../reducers/conductor-likes-reducer";

const reducers = combineReducers({
    navigationData: NavigationReducer,
    alertsReducer: AlertsReducer,
    rtRoutes: SearchReducer,
    crRoutes: SearchReducer,
    busRoutes: SearchReducer,
    ferryRoutes: SearchReducer,
    MBTAStops: SearchStopReducer,
    singleStop: SingleStopReducer,
    rapidRouteStops: SearchStopReducer,
    sessionReducer: SessionReducer,
    users: UserReducer,
    usersWhoPinnedStops: PinnedStopsReducer,
    pinnedStops: PinnedStopsReducer,
    pinExists: PinnedStopsReducer,
    followers: FollowReducer,
    following: FollowReducer,
    followExists: FollowReducer,
    allPosts: PostReducer,
    newPost: PostReducer,
    postsByUser: PostReducer,
    conductedRoute: ConductedRoutesReducer,
    conductorlikes: ConductorLikesReducer,
    commuterLikes: ConductorLikesReducer,
    conductorLikeExists: ConductorLikesReducer,
    adminSave: SessionReducer
});
const store = createStore(reducers);

const Home = () => {
    return (
        <Provider store={store}>
            <div className='container-fluid row mt-2 mb-2'>
                <div className='col-2'>
                    <LeftSidebar/>
                </div>
                <div className='col-10 col-lg-7 col-xl-7'>
                    <Outlet/>
                </div>
                <div className='d-none d-lg-block col-3'>
                    <AlertsBar/>
                </div>
            </div>
        </Provider>
    );
};

export default Home;