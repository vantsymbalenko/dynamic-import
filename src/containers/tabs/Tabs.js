import React from 'react';
import { Link } from "react-router-dom";

const Tab = ({tab, ...rest}) => {
    return(
        <li className={"tab"}>
            <Link to={tab.id}>{tab.title}</Link>
        </li>
    );
};

//prevent error if tab.id don't pass
Tab.defaultProps = {
    tab : {
        id: "/"
    }
};

const Tabs = (props) => {
    return(
        <nav className={"navigation"}>
            <ul className={"tab-list"}>
                {props.tabs.map((tab) => {
                    return <Tab key={tab.id} tab = {tab}/>
                })}
            </ul>
        </nav>
    );
};

Tabs.defaultProps = {
    tabs : []
};

export default Tabs;
