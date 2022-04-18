import React, {useEffect} from "react";
import RapidTransitRouteStopsItem from "./rapid-transit-route-stops-item";
import {useDispatch, useSelector} from "react-redux";
import {findRapidTransitRouteAllStops} from "../../actions/search-action";
import {Link, useLocation, useParams} from "react-router-dom";
import './search.css';

const RapidRouteStops = () => {
    const params = useParams();
    const routeId2 = params.routeId;
    const rapidRouteStops = useSelector(state => state.rapidRouteStops);

    const dispatch = useDispatch();
    useEffect(() => findRapidTransitRouteAllStops(dispatch, routeId2),
        []);

    return(
        <div>
            <ul className='list-group'>
                <li className=' list-group-item fw-bold text-danger back-button-and-title-rt-route'>
                    <button id="buttonBackToSearchMain" type="button" className=" button-sizing btn btn-danger ">
                        <Link to={`/search/rapid-transit`} className="-search-main-buttons-text">Back</Link>
                    </button>
                    <span className="rapid-transit-routes-title">{routeId2} Stops</span></li>
                {rapidRouteStops.map(
                    rapidRouteStop => {
                        return(<RapidTransitRouteStopsItem key={rapidRouteStop.id} rapidRouteStop={rapidRouteStop}/>)
                    }
                )}
            </ul>
        </div>
    )
};

export default RapidRouteStops;