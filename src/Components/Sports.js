import React from 'react';
import {Outlet} from "react-router-dom";

function Sports(props) {
    return (
        <div>
            <h1>Thể thao</h1>
            <Outlet/>
        </div>
    );
}

export default Sports;