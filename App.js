import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import LandingPage from './src/components/LandingPage/LandingPage';
import Profile from './src/components/Profile/Profile';
import EditName from './src/components/EditName/EditName';
import './main.css';

class App extends Component{
    constructor(props) {
        super(props);
      }
   render(){
       console.log('In render of  App');
      return(
          <div style={{minHeight: '100vh'}}>
            <Switch>
                <Route exact path='/' component={LandingPage} />
                <Route exact path='/profile' component={Profile} />
                <Route exact path='/profile/:name' component={EditName} />
            </Switch>
        </div>
      );
   }
}
export default App;