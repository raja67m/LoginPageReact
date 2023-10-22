import React from "react";
import "./LoginPage.css";
import welcome from "./welcome.png";
class LoginPage extends React.Component{
constructor(props){
   super(props);

   this.state={
      username:"",
      password:"",
      errors:{
         username:"",
         password:"",
      },
   };

}



//handleChange function
handleChange=(event)=>{
   const{name,value}=event.target;
   this.setState({[name]:value,})
};

//handleSubmit
handleSubmit = (event) => {
   event.preventDefault();
   const { username, password } = this.state;
   let errors = {};

   if (!username) {
     errors.username = "Username is required.";
   }

   if (!password) {
     errors.password = "Password is required.";
   }

   if (Object.keys(errors).length === 0) {
     // Form is valid, you can submit the data or perform other actions here
     console.log("Form is valid. Submit the data.");
   } else {
     this.setState({ errors });
   }
 };


   render(){
      const{username,password,errors}=this.state;
      return<div className="LoginContainer">
         <div className="ImageContainer">
          <img src={welcome} alt="Not visible"/>
         </div>

         <div className="LoginControlls">
          <h1 >SIGN IN</h1>
          <label className="nameLable">UserName</label>

          <input type="text" className="userInput"
          name="username"
          value={username}
          onChange={this.handleChange}

          
          />

{errors.username && <div className="error">{errors.username}</div>}
          <label className="nameLable">Password</label>

          <input type="password" className="userInput"
          
          name="password"
          value={password}
          onChange={this.handleChange}
          
          />
           {errors.password && <div className="error">{errors.password}</div>}
          <button className="siginIn" onClick={this.handleSubmit}>Sigin In</button>

          <div className="siginUpContainer">
            <label className="selectAccount">If you don't have a account?</label>
            <h4>SIGN UP</h4>
          </div>
         </div>
     
      </div>
   }
}

export default LoginPage;