import React, { Component } from 'react';
import { setCookie } from '../../../../functions/cookie';
import mockData from '../../../../mock/data.json';

class App extends Component{
    constructor(props) {
        super(props);   
        this.state = {
            firstName: '',
            lastName: ''
        };
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleFirstName(event) {
        this.setState({
            firstName: event.target.value
        })
    }
    handleLastName(event) {
      this.setState({
          lastName: event.target.value
      })
  }
    handleSubmit(e) {
        console.log('handling submit');
        window.localStorage.setItem('firstName', this.state.firstName);
        window.localStorage.setItem('lastName', this.state.lastName);
        setCookie('firstName', this.state.firstName);
        setCookie('lastName', this.state.lastName);
        // authenticate the credentials by making fetch call and on success load data or pass data in the 
        // showHome function to use in passing props in Home component
        this.props.showHome(mockData);
        e.preventDefault();
    }
   render(){
       console.log('In render of  App');
      return(
        <div className="home row w-100">
        <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12 col-12 mx-auto login-form">
           <div className="w-100 header">
               Hey! What should we call you
           </div>
           <div className="row w-100 p-3">
               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 ">
                   <form onSubmit={this.handleSubmit}>
                       <div >
                        First Name
                        <input 
                        type="text" value={this.state.firstName} 
                        onChange={this.handleFirstName} />
                       </div>
                       <div>
                        Last Name
                        <input 
                        type="text" value={this.state.lastName} 
                        onChange={this.handleLastName} />
                       </div>
                       <div className="termAndPolicy">
                        <input type="checkbox" /> <span>By proceeding I agree with 
                            <a href="#">Terms and Conditions, Terms of Usage and privacy</a>
                        </span>
                       </div>
                       <div className="lastName">
                           <button>Continue<i className="material-icons">arrow_forward</i></button>
                       </div>
                   </form>
               </div>
           </div>
        </div>
     </div>
      );
   }
}
export default App;


