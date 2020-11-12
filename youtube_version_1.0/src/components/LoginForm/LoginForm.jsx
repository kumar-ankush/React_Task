import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import Card from '@material-ui/core/Card';
import Alert from "react-bootstrap/Alert";
import './LoginForm.css'
import { connect } from "react-redux";
import { withRouter } from 'react-router'
import {  Redirect, Route } from "react-router-dom";
class LoginForm extends Component {
  state = { user: { email:"", password:"" }, errors: {}, redirect:false };
  isValid = () => {
    console.log("Invalid working 1")
    const errors = {};
    if (this.state.user.email.trim() === "") {
      errors.email = "Invalid";
    }
    if (this.state.user.password.trim() === "") {
      errors.password = "Invalid";
    }
    return Object.keys(errors).length === 0 ? "" : errors;
  };

  changeHandler = (event) => {
    const user = { ...this.state.user };
    user[event.target.name] = event.currentTarget.value; //Tried this one using Redux for email and password lets see what i can do with it.
    this.setState({ user });
  };

  submitHandler = (event) => {
    event.preventDefault();
    const errors = this.isValid();
    console.log(errors);
    this.setState({ errors }); //Done till here
    console.log("State");
    console.log(this.state);
   
    if (errors) return;
    if(this.state.user.email !=="" && this.state.user.password !==""){
      const redirect=true;
      this.setState({redirect:true},()=>{
        this.renderHandler();
        console.log(this.state.redirect)
      })
      // console.log(this.state)
      // console.log("Set State Worked");
      
     
    }
    console.log(this.state)
    console.log("Call the Server");
    // window.location.href="/";
    // window.location.href="/"+"?email="+this.state.user.email+"pwd="+this.state.user.password;
  }
  
  renderHandler=(props)=>{
    // console.log("Render Handler worked");
    // const data= this.state.redirect;
    console.log("State before check redirect")
    console.log(this.state.redirect);
    // window.location.href="/"+"?email="+this.state.user.email+"pwd="+this.state.user.password;
                  if(this.state.redirect===true){
                    console.log("Render If working")
                  //  return this.props.history.push(`/${this.state.user.email&&this.state.user.password}`);
                          // return <Redirect to={`/${this.state.user.email&&this.state.user.password}`} />   
                          window.location.href="/"+"?email="+this.state.user.email+"pwd="+this.state.user.password;}            
              
}
 
  render() {
    return (
        <Form onSubmit={this.submitHandler}> 
        <div className="Card_Container">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            {/* <Form.Control
              value={this.state.user.email}
              onChange={this.changeHandler}
              name="email"
              type="email"
              placeholder="Enter email"
            /> */}
          <Form.Control
              value={this.props.email}
              onChange={this.props.changeHandlerMail}
              name="email"
              type="email"
              placeholder="Enter email"
            />
            {this.state.errors.email && (
              <Alert variant="danger">{this.state.errors.email}</Alert>
            )}
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            {/* <Form.Control
              value={this.state.user.password}
              onChange={this.changeHandler}
              name="password"
              type="password"
              placeholder="Password"
            /> */}

            {/* The changed Start here redux */}
            <Form.Control
              value={this.props.password}
              onChange={this.props.changeHandlerPass}
              name="password"
              type="password"
              placeholder="Password"
            />
         
             {this.state.errors.password && (
              <Alert variant="danger">{this.state.errors.password}</Alert>
            )}
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
          </div>
        </Form>
    );
  }
}
const mapStateToProps=(state)=>{
return {email: state.user.email,
password: state.user.password}
}
const mapDispatchToProps = (dispath) => {
return{
  changeHandlerMail: ()=>dispath({type:"Email"}),
  changeHandlerPass: ()=>dispath({type:"Password"})
}
}
export default connect (mapStateToProps,mapDispatchToProps)(LoginForm);