import React from 'react';
import {Outlet} from "react-router-dom";

function Events(props) {
    return (
        <div>
            <h1>Sự kiện</h1>
            <Outlet/>
        </div>
    );
}

export default Events;