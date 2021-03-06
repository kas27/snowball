import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Sidebar from './components/network__sidebar';
import Profile from './Profile';
import Messages from './Messages';
import rs from "../../config/routes";
import './Network.scss';

class Network extends Component {
  render() {
    return(
      <div className="network">
        <Sidebar/>
        <div className="network__content">
          <Switch>
            <Route
              path={rs.network.profile}
              // component={Profile}
              render={() =>
                <Profile
                  content={{test: "test"}}
                />
              }
            />
            <Route
              path={rs.network.messages}
              component={Messages}
            />
            {/*<Route*/}
              {/*exact*/}
              {/*path={rs.network.messages}*/}
              {/*component={Messages}*/}
            {/*/>*/}
            {/*/!*<Route*!/*/}
              {/*path={rs.network.news}*/}
              {/*component={Profile}*/}
            {/*/>*/}
            {/*<Route*/}
              {/*path={rs.network.music}*/}
              {/*component={Profile}*/}
            {/*/>*/}
            {/*<Route*/}
              {/*path={rs.network.settings}*/}
              {/*component={Profile}*/}
            {/*/>*/}
          </Switch>
        </div>
      </div>
    )
  }
}

export default Network;