import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {deleteCookie} from '../../functions/cookie';
import './Profile.scss';

class Profile extends Component{
    constructor(props) {
        super(props);
      }

      handleLogout() {
          console.log('Logging out');
          deleteCookie('firstName','lastName');
          window.localStorage.removeItem('firstName');
          window.localStorage.removeItem('lastName');
      }
   render(){
       console.log('In render of  PROFILE');
       const firstName = window.localStorage.getItem('firstName');
       const lastName = window.localStorage.getItem('lastName');
      return(
          <div className="row profile">
                <div className="col-lg-12 col-md-12 col-sm-12 sol-xs-12 col-12">
                    <div className="w-100 title">
                        Edit Personal Details
                    </div>
                    <div className="row details">
                        <div className="col-md-12 col-sm-12 sol-xs-12 col-12">
                                First Name
                                <p>
                                    <span className="name">{firstName}</span>
                                   <Link to={'/profile/firstName'}>
                                     <span className="editMode">Edit</span>
                                    </Link>
                                </p>
                        </div>
                        <div className="col-md-12 col-sm-12 sol-xs-12 col-12">
                                Last Name
                                <p>
                                <Link to={'/profile/lastName'}>
                                    <span className="name">{lastName}</span>
                                    <span className="editMode">Edit</span>
                                </Link>
                                </p>
                        </div>
                    </div> 
                    <Link to={'/'}>
                        <div className="logout" role="button" onClick={this.handleLogout}>
                            Logout
                        </div>
                    </Link>                       
                </div>
          </div>
      );
   }
}
export default Profile;