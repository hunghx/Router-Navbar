import React from 'react';
import {Outlet} from "react-router-dom";

function News(props) {
    return (
        <div>
            <h1>Thời sự</h1>
            <Outlet/>
        </div>
    );
}

export default News;