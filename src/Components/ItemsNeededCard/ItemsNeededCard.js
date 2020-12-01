import React, { Component } from 'react';
import { Card, Table,Col,Row,Form, Button, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import './ItemsNeededCard.css';
class ItemsNeededCard extends Component {
    constructor(props) {
        super(props);
        this.state={ user:{name:"",email:"",phone:"",address:""},errors:{},
            ID:"",
            companyName:"",
            vendor:[
                {id:Math.random()*100000,Ordered:11,Apple:["Iphone 12 Pro Max","Iphone 12 Pro","Iphone 12","Iphone 12 Mini"],
            Oneplus:["OnePlus Nord 5G","OnePlus 5","OnePlus 6","OnePlus 7T"],
            Nokia:["Nokia 255 4G","Nokia 215 4G","Nokia C3","Nokia 701"],
            Samsung:["Samsung Galaxy M21","Samsung Galaxy M31","Samsung Galaxy M51","Samsung Galaxy S20"],test:[]},
        
        
            {id:Math.random()*100000,Ordered:11,Apple:["Iphone 12 Pro Max","Iphone 12 Pro","Iphone 12","Iphone 12 Mini"],
            Oneplus:["OnePlus Nord 5G","OnePlus 5","OnePlus 6","OnePlus 7T"],
            Nokia:["Nokia 255 4G","Nokia 215 4G","Nokia C3","Nokia 701"],
            Samsung:["Samsung Galaxy M21","Samsung Galaxy M31","Samsung Galaxy M51","Samsung Galaxy S20"],test:[]}],
        list:["Select","Iphone 12 Pro Max","Iphone 12 Pro","Iphone 12","Iphone 12 Mini"]
    }
      
      }

      isValid = () => {
        const errors = {};
        if (this.state.user.name.trim() === "") {
            errors.name = "Invalid";
          }
            if (this.state.user.email.trim() === "") {
                errors.email = "Invalid";
              }
              
              if (this.state.user.phone.trim() === "") {
                errors.phone = "Invalid";
              }
             
              if (this.state.user.address.trim() === "") {
                errors.address = "Invalid";
              }
              return Object.keys(errors).length === 0 ? null : errors;
      };
      changeHandler = (event) => {
        //   console.log("The OnChnage is working")
        const user = { ...this.state.user };
        console.log(event.target.name)
        console.log(event.target.value)
        user[event.target.name] = event.target.value;
        this.setState({ user });
        console.log(this.state)
      };
      submitHandler=(event)=>{
        event.preventDefault();
        const errors = this.isValid();
        console.log(errors);
        if(errors){
            this.setState({ errors });
            return
        }
        console.log("Call the Server");
    }

      handleSelect=(event)=>{
        // console.log("The Event value is "+event.target.value);
        this.setState({companyName:event.target.value})
        console.log("The state information value is: "+this.state.companyName);
        switch(event.target.value)
        {
            case "Apple": console.log("Working a")
                    var arr=[]
                    this.props.steve.map((value,i)=>{
                          arr.push(value);   
                    })
                    var arr1=[...this.state.vendor]
                   arr1.map((x)=>{
                       if(x.id == this.state.ID){
                           x.test=arr;
                           console.log("The x.test is "+x.test)
                       }
                       this.setState({vendor:[...arr1]})
                   })  
                  break;
            case "Oneplus":console.log("Working b");
                console.log("Working OnePlus");
                var arr=[]
                  this.props.nord.map((value,i)=>{
                        arr.push(value);
                       
                  })
                var arr1=[...this.state.vendor]
                arr1.map((x)=>{
                    if(x.id == this.state.ID){
                        x.test=arr;
                        console.log("The x.test is "+x.test)
                    }
                    this.setState({vendor:[...arr1]})
                })
                  break;
            case "Nokia":console.log("Working c");
            console.log("Working OnePlus");
             arr=[]
              this.props.nok.map((value)=>{
                    arr.push(value);
                    
              })
              var arr1=[...this.state.vendor]
                   arr1.map((x)=>{
                       if(x.id == this.state.ID){
                           x.test=arr;
                           console.log("The x.test is "+x.test)
                       }
                       this.setState({vendor:[...arr1]})
                   })
              break;
            case "Samsung": console.log("Working c");
            console.log("Working OnePlus");
             arr=[]
              this.props.sam.map((value)=>{
                    arr.push(value);
                    
              })
              var arr1=[...this.state.vendor]
                   arr1.map((x)=>{
                       if(x.id == this.state.ID){
                           x.test=arr;
                           console.log("The x.test is "+x.test)
                       }
                       this.setState({vendor:[...arr1]})
                   })
     
              break;
              default: console.log("Wrong Choice")
              break;
            
       }
   
      }
      KeyTeller=(ID)=>{
        this.setState({ID})
        console.log("The ID is : "+this.state.ID)
      }
      Add=()=>{
        const vendor=[...this.state.vendor]
        vendor.push({id:Math.random()*100000,Ordered:11,Apple:["Iphone 12 Pro Max","Iphone 12 Pro","Iphone 12","Iphone 12 Mini"],
        Oneplus:["OnePlus Nord 5G","OnePlus 5","OnePlus 6","OnePlus 7T"],
        Nokia:["Nokia 255 4G","Nokia 215 4G","Nokia C3","Nokia 701"],
        Samsung:["Samsung Galaxy M21","Samsung Galaxy M31","Samsung Galaxy M51","Samsung Galaxy S20"],test:[]})
        this.setState({vendor})
      }
      Remove=()=>{
          console.log("Remove active")
        const vendor=[...this.state.vendor]
        console.log(vendor)
        vendor.pop()
        this.setState({vendor})
      }
    
    render() {
        
        return (
            <div className="ItemsNeededCard">
                <Form onSubmit={this.submitHandler}>
                <Card  style={{ width: '68rem' }}> 
                    <div className="Heading">
                        <h5>Items Needed</h5>
                    </div>
                    <div>
                        <Table responsive="sm">
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Ordered</th>
                                <th>In-Stock</th>
                                <th>Needed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.itemDisplay.map((value,index)=>(
                                <tr id={value.id} key={value.id} >
                                    <td width="250" >{value.itemName}</td>
                                    <td width="250" >{value.Ordered}</td>
                            <td width="250" >{value.InStock}</td>
                            <td width="250" >{value.Ordered-value.InStock}</td>

                                </tr>
                            ))}
                        </tbody>
                        </Table>
                    </div>
                </Card>
                <Card  style={{ width: '68rem' }}>
                <div className="Heading">
                        <h5>Order</h5>
                    </div>
                    <Row>
                        <Col sm={6}>
                        <div className="form_container">
                            
                                   <Form.Group  as={Col} md="8" controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                        <Form.Control onChange={this.changeHandler} name="name" type="text" placeholder="Enter Full Name" />
                                        <Form.Text className="text-muted">
                                        </Form.Text>
                                        {this.state.errors.name && (
                                        <Alert variant="danger">{this.state.errors.name}</Alert>
                                        )}
                                    </Form.Group>
                                    <Form.Group as={Col} md="8" controlId="formBasicEmail">
                                    <Form.Label>E-Mail</Form.Label>
                                    <Form.Control onChange={this.changeHandler} name="email"  type="email" placeholder="Enter your Email" />
                                    {this.state.errors.email && (
                                        <Alert variant="danger">{this.state.errors.email}</Alert>
                                        )}
                                    </Form.Group>
                                    <Form.Group  as={Col} md="8" controlId="formBasicName">
                                    <Form.Label>Phone</Form.Label>
                                        <Form.Control onChange={this.changeHandler} name="phone" type="text" placeholder="Enter Phone Number" />
                                        <Form.Text className="text-muted">
                                        </Form.Text>
                                        {this.state.errors.phone && (
                                        <Alert variant="danger">{this.state.errors.phone}</Alert>
                                        )}
                                    </Form.Group>
                                    <Form.Group as={Col} md="8" controlId="formGridAddress1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control onChange={this.changeHandler} name="address" placeholder="1234 Main St" />
                                    {this.state.errors.address && (
                            <Alert variant="danger">{this.state.errors.address}</Alert>
                            )}
                                    </Form.Group>
                               
                        </div>
                        </Col>
                        <Col sm={6} id="Col2">
                        <div className="table2">
                        <Table id="Table4" responsive="sm">
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Vendor</th>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {this.state.vendor.map((value,index)=>(
                                        <tr  key={value.id}>
                                            <td width="10">{index+1}</td>
                                            <td width="300">
                                            <Form.Group onClick={()=>this.KeyTeller(`${value.id}`)}  onChange={this.handleSelect} as={Col} md="10" controlId="exampleForm.SelectCustomSizeSm">
                                            <Form.Control  as="select" size="sm" custom>
                                                
                                                {
                                                    this.props.annoying.map((x)=>
                                                        <option  id={x.id} key={x.id}>{x.value}</option>
                                                    )
                                                }
                                            </Form.Control>
                                            </Form.Group>
                                            </td>
                                            <td width="540">
                                            <Form.Group as={Col} md="10" controlId="exampleForm.SelectCustomSizeSm">
                                            <Form.Control  as="select"  size="sm" custom>
                                             {value.test.map((x,i)=>(
                                                 <option key={i+100}>{x.trim()!=""?x:0}</option>
                                             ))}
                                           {value.test.map((x)=>console.log("The value of Test from Each row is: "+x))}
                                            </Form.Control>
                                            </Form.Group>
                                            </td>
                                            <td >
                                                 <h6>{value.Ordered}</h6> 
                                                
                                            </td>
                                        </tr>
                                    ))}
                                    
                                </tbody>
                        </Table>
                        </div>
                        <div className="btn1">
                        <Button onClick={this.Add}   variant="dark">+ Add Item</Button>{' '}
                        <Button onClick={this.Remove} id="bttn"  variant="dark">- Remove Item</Button>{' '}
                        </div>
                        <div className="btn2">
                        <Button  type="submit" variant="dark" size="lg"  block>{' '}
                            Place Order
                        </Button>
                        </div>
                        </Col>
                    </Row>
                </Card>
                </Form>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        itemDisplay: state.itemList,
        Org: state.vendor,
        info:state.Organisation,
        steve:state.Apple,
        nord:state.Oneplus,
        nok:state.Nokia,
        sam:state.Samsung,
        annoying:state.com,
       
    }
}
const mapDispathToProps=(dispatch)=>{
    return {
        // Add:()=>dispatch({type:"Add"}),
        // Remove:()=>dispatch({type:"Remove"}),
        List:(name)=>dispatch({type:"List"})
    }
}
export default connect(mapStateToProps,mapDispathToProps)(ItemsNeededCard);