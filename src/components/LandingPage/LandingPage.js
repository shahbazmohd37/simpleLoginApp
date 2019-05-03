import React, { Component } from 'react';
import image from './drawable-mdpi/group_6_2.png';
import Login from './subComponents/Login/Login';
import { getCookie } from '../../functions/cookie';
import mockData from '../../mock/data.json';
import './LandingPage.scss';
import Home from '../Home/Home';

class LandingPage extends Component{
    constructor(props) {
        super(props);   
        this.state = {
            showSplash: true,
            showLogin: false,
            data: ''
        };
        this.showHome = this.showHome.bind(this);
      }
      componentDidMount() {
          console.log('IN component did mount of HOme');
          //check for user 
          console.log('In getting cookies ' + getCookie('firstName'));
          if (!getCookie('firstName')) {
              console.log('cookie not found');
              this.setState({
                showLogin: true
              })
          } else {
              // load data here by sending user information
              console.log('make a fetch call, cookie found');
              this.setState({
                  data: mockData
              })
          }
          console.dir(document.cookie);
          setTimeout(function() {
              console.log('in set timeout ');
              console.dir(this);
              this.setState({
                  showSplash: false
              });
          }.bind(this), 3000);
      }
      showHome(homeData) {
          console.log('showing home page ');
          console.dir(window.localStorage);
          this.setState({
              showLogin: false,
              data: homeData
          });
      }
   render(){
       console.log('In render of  App');
       if (this.state.showSplash) {
        return(
            <div className="splash row w-100">
               <div className="splash-screen">
                   <img src={image} />
               </div>
            </div>
         );
       }
      if (this.state.showLogin) {
      return (
          <Login showHome={this.showHome} />
      );
      }
      return (
          <Home data={this.state.data} />
      );
   }
}
export default LandingPage;