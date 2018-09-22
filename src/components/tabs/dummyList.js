import React from 'react';

//styles
import "./dummyList.css";

const DummyList = () => {
    return(
        <ul className={"dummy-list"}>
            <li className={"dummy-list-item"}>Dummy</li>
            <li className={"dummy-list-item"}>List</li>
            <li className={"dummy-list-item"}>Dummy</li>
            <li className={"dummy-list-item"}>List</li>
        </ul>
    );
};

export default DummyList