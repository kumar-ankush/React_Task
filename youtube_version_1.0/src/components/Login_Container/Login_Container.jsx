import React, {useState} from 'react';
import Google from '../Image/google-2015.svg'
import { Form, Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Login_Container.css';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const Login_Container = () => {
    var [stat,usedState]=useState({ user: { email: "", password: "" }, errors: {} });
    const classes = useStyles();
               const isValid=()=>{
                            const errors = {};
                            console.log("Is valid working");
                                if(stat.user.email.trim() === ""){
                                            errors.email = "Invalid";
                                }
                                if(stat.user.password.trim() === ""){
                                            errors.password = "Invalid";
                                }
                                return Object.keys(errors).length === 0 ? null : errors
                            }
               const submitHandler=(event)=>{
                                        {/*Will prevent the default behaviour of the Form Reloaidng Page */}
                                            event.preventDefault(); 
                                            const errors =isValid() 
                                            {/* The will Check the errors in the fields and return the value */}
                                            console.log("The submit handler:");
                                            console.log(errors)
                                             usedState({errors:errors}); {/* Error here///// Check if its working not sure */}
                                            // stat.errors=errors;
                                            console.log("Errors")
                                            console.log(stat)
                                            if (errors) return;
                                                console.log("Call the Server");
                                        }
                const changeHandler=(event)=>{
                    const user1={...stat.user};
                    console.log("variable");
                    console.log(user1)
                    user1[event.target.name]=event.target.value;
                    console.log("Checking");
                    console.log(user1);
                    console.log("The chnage Hnadler state: ");
                    usedState({...user1});
                    // stat.user=user1;
                    console.log(stat)
                }
                
    return (
       <div className="Card_Container">
           <Form onSubmit={submitHandler}>
        <Card className={classes.root}>
                <CardContent>
                    <div className="card_info">
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            <img src={Google} alt="Google" id="Google_img"/>
                        </Typography>
                <Typography variant="h5" component="h2" className="typo">
                        <h5 className="h5_info">Sign In</h5>
                        <h6 className="h6_tag">to continue to YouTube</h6>
                </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                        value={stat.user.email}
                        onChange={changeHandler}
                        name="email"
                        type="email" 
                        placeholder="Enter email" />
                         {stat.errors.email && (
                            <Alert variant="danger">{stat.errors.email}</Alert>
                        )}
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                            value={stat.user.password}
                            onChange={changeHandler}
                            name="password"
                            type="password" 
                            placeholder="Password" />
                            {stat.errors.password && (
              <Alert variant="danger">{stat.errors.password}</Alert>
            )}
                    </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <div id="button_submit">
                    <Button  variant="primary" type="submit">
                        Submit
                    </Button>
                    </div>

                    </Typography>
                    <Typography variant="body2" component="p">
                        Not your computer? Use a private browsing window to sign in. 
                        <br />
                        {'"Learn more"'}
                    </Typography>
                </div>
                </CardContent>
            <CardActions>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
    </Form>
    </div>
    );
}
        
export default Login_Container;
