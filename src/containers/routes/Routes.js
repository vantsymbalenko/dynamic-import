import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {DynamicImports} from 'components/DynamicImports/DynamicImports';


//styles
import "./routes.css";

export default class extends React.Component{
    render(){
        return(
            <div className="content">
                <Switch>
                    {this.props.routes.map((tab) => {
                        return (
                            <Route key={tab.id} path={`/${tab.id}`} render = {() => {
                                return <DynamicImports path={tab.path}/>}}/>
                        );
                    })}
                    <Route render={() => <DynamicImports path={"components/NotFound/NotFound"}/>}/>
                </Switch>
            </div>
        );
    }
}
