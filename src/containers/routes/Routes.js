import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {DynamicImports} from 'components/DynamicImports/DynamicImports';

export default class extends React.Component{
    render(){
        return(
            <Switch>
                {this.props.routes.map((tab) => {
                    return (
                        <Route key={tab.id} path={`/${tab.id}`} render = {() => {
                            return <DynamicImports path={tab.path}/>}}/>
                    );
                })}
            </Switch>
        );
    }
}
