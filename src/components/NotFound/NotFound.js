import React from 'react';

import "./not-found.css";

const NotFound = () => {
    return(
        <div className={"not-found"}>
            <h2>Error 404</h2>
            <p>Woops. Looks like this page doesn't exist.</p>
        </div>
    );
};

export default NotFound;