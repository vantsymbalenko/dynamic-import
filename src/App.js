import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

//components
import Tabs from "containers/tabs/Tabs";
import Routes from "containers/routes/Routes";
import {Footer} from "components/Footer/Footer";

//json
import {tabs} from 'json/tabs.js';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            tabs : tabs.sort((current, next) => {
                return current.order > next.order
            })
        };
    }
    componentDidMount(){
        if(this.props.location.pathname === "/"){
            this.props.history.push(this.state.tabs[0].id);
        }
    }

  render() {
    return (
      <React.Fragment>
        <Tabs tabs={this.state.tabs}/>
        <Routes routes={this.state.tabs}/>
        <Footer/>
      </React.Fragment>

    );
  }
}

export default withRouter(App);
