import React from 'react';
import { Link } from "react-router-dom";

//styles
import "containers/tabs/tabs.css";

const Tab = ({tab, ...rest}) => {
    return(
        <li className={`tab ${rest.pathname === `/${tab.id}` && "active-tab"}`}>
            <Link to={`/${tab.id}`}>{tab.title}</Link>
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
                    return <Tab key={tab.id} tab = {tab} pathname={props.pathname}/>
                })}
            </ul>
        </nav>
    );
};

Tabs.defaultProps = {
    tabs : []
};

export default Tabs;
