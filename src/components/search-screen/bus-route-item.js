import React from "react";
import {Link} from "react-router-dom";
import './search.css';
import {useDispatch, useSelector} from "react-redux";
import {conductRoute} from "../../actions/conducted-routes-action";


const BusRouteItem = ({busRoute}) => {
    const routeName = busRoute.attributes.short_name.replace(/[^A-Za-z0-9_'()\/\@-]/g,"_").replace('/', "*");
    const loggedIn = useSelector(state => state.sessionReducer.isLoggedIn)
    const user = useSelector(state => state.sessionReducer.profileData)
    const dispatch = useDispatch();

    return(
        <div>
            <li className='list-group-item bus-route-color '>
                <div className='row ' >
                    <Link to={`/home/bus/${busRoute.id}/${routeName}`} className="line-ends-links ">
                        {loggedIn === true && user.userRole === "Conductor" ?
                            <div className='text-center'>
                                <span className="fw-bold rapid-transit-route-id">{busRoute.attributes.short_name}</span>
                                <span onClick={() => conductRoute(dispatch, user._id,`/home/bus/${busRoute.id}/${routeName}`)} className="col-4 btn btn-light">
                                                 Conduct This Route, {`${user.name}`}!
                                </span>
                            </div>
                        :
                            <span className="fw-bold rapid-transit-route-id">{busRoute.attributes.short_name}</span>
                        }
                    </Link>
                </div>
            </li>
        </div>
    )
};

export default BusRouteItem;