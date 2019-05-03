import React, { Component } from 'react';
import './EditName.scss';
import { setCookie } from '../../functions/cookie';

class EditName extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: window.localStorage.getItem(this.props.match.params.name)
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSavingName = this.handleSavingName.bind(this);
      }
      handleNameChange(event) {
          this.setState({
              name: event.target.value
          });
      }
      handleSavingName() {
          console.log('Saving user name');
          setCookie(this.props.match.params.name, this.state.name);
          window.localStorage.setItem(this.props.match.params.name, this.state.name);
      }
   render(){
       console.log('In render of  first name component');
       console.dir(this.props);
       const param = this.props.match.params.name;
       let title = 'First Name';
       if (param === 'lastname') {
           title = 'Last Name';
       }
      return(
          <div className="row editName">
                <div className="col-lg-12 col-md-12 col-sm-12 sol-xs-12 col-12 p-5">
                    <div className="w-100 title">
                        Update Your Name
                    </div>
                    <div className="row container">
                        <div className="firstName col-md-12 col-sm-12 sol-xs-12 col-12">
                                {title}
                                <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                        </div>
                    </div>                        
                </div>
                <div 
                className="col-lg-12 col-md-12 col-sm-12 sol-xs-12 col-12 save"
                role="button" 
                onClick={this.handleSavingName} >
                        Save
                </div>
          </div>
      );
   }
}
export default EditName;