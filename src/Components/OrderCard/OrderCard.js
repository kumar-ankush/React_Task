import React, { Component } from 'react';
import { Alert, Button, Card, Col, Form, Row, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import './OrderCard.css';
class OrderCard extends Component {
    constructor(props){
        super(props);
        this.state={Cuser:{cname:"",email:"",phone:"",payment:"",address:""},errors:{},rowID:"",
        row:[{id:Math.random()*1000000000, price:"",itemName:"",
            heading:[{name:"Select",cost:0},{name:"Iphone 12 ProMax",cost:129900},{name:"Iphone 12 Pro",cost:119990},
            {name:"Iphone 12",cost:79900},{name:"Iphone 11 pro max",cost:108609} ,{name:"Iphone 11",cost:50999},{name:"OnePLus Nord 5G",cost:60000},
            {name:"OnePlus 5",cost:55000},{name:"OnePlus 6",cost:65000},{name:"OnePlus 7T",cost:70000},{name:"Nokia 255 4G",cost:6000},
            {name:"Nokia 215 4G",cost:5000},{name:"Nokia C3",cost:4000},{name:"Nokia 701",cost:2000},{name:"Samsung Galaxy M21",cost:21000},
            {name:"Samsung Galaxy M31",cost:23000},{name:"Samsung Galaxy M51",cost:26000},{name:"Samsung Galaxy S20",cost:159900}], 
            price:0,quantity:0,discount:20,InStock:20},]
        };

    }
    isValid = () => {
        const errors = {};
        if (this.state.Cuser.cname.trim() === "") {
            errors.name = "Invalid";
          }
            if (this.state.Cuser.email.trim() === "") {
                errors.email = "Invalid";
              }
              
              if (this.state.Cuser.phone.trim() === "") {
                errors.phone = "Invalid";
              }
              if (this.state.Cuser.payment.trim() === "") {
                errors.payment = "Invalid";
              }
              if (this.state.Cuser.address.trim() === "") {
                errors.address = "Invalid";
              }
              return Object.keys(errors).length === 0 ? null : errors;
      };
      changeHandler = (event) => {
        //   console.log("The OnChnage is working")
        const Cuser = { ...this.state.Cuser };
        // console.log(event.target.name)
        // console.log(event.target.value)
        Cuser[event.target.name] = event.target.value;
        this.setState({ Cuser });
        // console.log(this.state)
      };
      submitHandler=(event)=>{
        event.preventDefault();
        const errors = this.isValid();
        console.log(errors);
        if(errors){
            this.setState({ errors });
            return
        }
        const row=[...this.state.row]
        row.map((value)=>{
            if(this.state.ID==value.id)
            {
                value.price=document.getElementsByName("total")[0].value;
            }
        })
        this.setState({row})
        console.log(this.state.row)
        console.log("Call the Server");
    }

      valuechangeHandler=(event)=>{
        console.log("The OnChnage value is working")
        const row=[ ...this.state.row ]
       row.map((x)=>{
            // const row1 = { ...x };
            // console.log(this.state.rowID)
            // console.log(x.id)
            if(this.state.rowID==x.id){
                // console.log(event.currentTarget.name)
                // console.log(x.id)
            // row1[event.currentTarget.name] = event.currentTarget.value;
            x[event.target.name] = event.target.value;
            
            // console.log("Row from change handler: ")
            // console.log(this.state.row)
            this.setState({ row });
            }
        })
        
      }
      rowDetect=(event)=>{
        this.setState({rowID:event.currentTarget.id})
       
     }
    datalistHandler=(event)=>{
        const row=[...this.state.row]
        this.state.row.map((value)=>{
            if(this.state.rowID==value.id)
           {
            value.heading.map((val,i)=>{
                if(event.target.value== val.name){
                    value.price=val.cost;
                    value.itemName=event.target.value
                }
            })
           }
        })
        this.setState({row})        
    }
    addRowHandler=()=>{
        const row=[...this.state.row]
        row.push({id:Math.random()*1000000000, price:"",itemName:"",
        heading:[{name:"Select",cost:0},{name:"Iphone 12 ProMax",cost:129900},{name:"Iphone 12 Pro",cost:119990},
        {name:"Iphone 12",cost:79900},{name:"Iphone 11 pro max",cost:108609} ,{name:"Iphone 11",cost:50999},{name:"OnePLus Nord 5G",cost:60000},
        {name:"OnePlus 5",cost:55000},{name:"OnePlus 6",cost:65000},{name:"OnePlus 7T",cost:70000},{name:"Nokia 255 4G",cost:6000},
        {name:"Nokia 215 4G",cost:5000},{name:"Nokia C3",cost:4000},{name:"Nokia 701",cost:2000},{name:"Samsung Galaxy M21",cost:21000},
        {name:"Samsung Galaxy M31",cost:23000},{name:"Samsung Galaxy M51",cost:26000},{name:"Samsung Galaxy S20",cost:159900}], 
        price:0,quantity:0,discount:20,InStock:20})
            this.setState({row})
    }
    deleteHandler=()=>{
        console.log("Active")
        const row=[...this.state.row]
        console.log(this.state.row)
        row.pop()
        console.log(row)
        this.setState({row})
    }
    totalHandler=(event)=>{
        console.log("The price is : "+event.target.value)
        const row=[...this.state.row]
        row.map((value)=>{
            if(this.state.ID==value.id)
            {
                value.price=event.target.value
            }
        })
        this.setState({row})
    }
    render() {
        return (
            <div className="Outer_Container">
                <Card style={{ width: '68rem' }}>
                        <div className="Heading"><h4>Order</h4></div>
                        <Form onSubmit={this.submitHandler}>
                        <Row>
                            <Col sm={6}>
                                    <div className="form_container">
                                   <Form.Group  as={Col} md="8" controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                        <Form.Control  
                                        onChange={this.changeHandler} 
                                        name="cname"  
                                        type="text" 
                                        placeholder="Enter Full Name" />
                                        {this.state.errors.name && (
                                        <Alert variant="danger">{this.state.errors.name}</Alert>
                                        )}
                                    </Form.Group>

                                    <Form.Group as={Col} md="8" controlId="formBasicEmail">
                                    <Form.Label>E-Mail</Form.Label>
                                    <Form.Control 
                                    value={this.state.Cuser.email} 
                                    onChange={this.changeHandler}
                                    name="email"  
                                    type="email" 
                                    placeholder="Enter your Email" />
                                    {this.state.errors.email && (
                                        <Alert variant="danger">{this.state.errors.email}</Alert>
                                        )}
                                    </Form.Group>
                                    <Form.Group as={Col} md="8" controlId="formBasicPassword">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control value={this.state.Cuser.phone} onChange={this.changeHandler} name="phone" type="text" placeholder="Enter Phone Number" />
                                    {this.state.errors.phone && (
                                        <Alert variant="danger">{this.state.errors.phone}</Alert>
                                        )}
                                    </Form.Group>
                                   </div>
                            </Col>
                            <Col>
                            <div className="mb-3">
                            <h6>Payment Method</h6>
                            <Form.Check
                                onChange={this.changeHandler}
                                type="radio"
                                name="payment"
                                id="formHorizontalRadios"
                                label="Online"
                            />
                            <Form.Check
                                onChange={this.changeHandler}
                                type="radio"
                                name="payment"
                                // name="formHorizontalRadios"
                                id="formHorizontalRadios"
                                label="Cash"
                            />
                            {this.state.errors.payment && (
                            <Alert variant="danger">{this.state.errors.payment}</Alert>
                            )}
                            </div>
                           <Form.Group as={Col} md="10" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control value={this.state.Cuser.address} onChange={this.changeHandler} name="address" as="textarea" rows={5} placeholder="Hint Text" />
                            {this.state.errors.address && (
                            <Alert variant="danger">{this.state.errors.address}</Alert>
                            )}
                            </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <div className="table">
                            <Table id="Table" responsive="sm">
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Heading</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Discount</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody >
                                
                                    {this.state.row.map((value,index)=>(
                                        <tr id={value.id} key={value.id} onClick={this.rowDetect}>
                                            <td width="10">{index+1}</td>
                                            <td width="210" >
                                                
                                            <Form.Group onChange={this.datalistHandler} as={Col} md="12" controlId="exampleForm.SelectCustomSizeSm">
                                            
                                            <Form.Control as="select" size="sm" custom>
                                              
                                                {
                                                    value.heading.map((val,i)=>(
                                                    // <option onClick={this.idDetect} id={i}>{val}</option>
                                                    <option >{val.name}</option>
                                                    ))
                                                }
                                            </Form.Control>
                                             </Form.Group> 
                                            </td>
                                            <td  width="110">
                                                <Form.Group as={Col} md="12">
                                                <Form.Control onChange={this.valuechangeHandler} value={value.quantity} size="sm" name="quantity" type="text" placeholder="Unit" />
                                                </Form.Group>
                                            </td>
                                            <td width="180">
                                            <Form.Group as={Col} md="12">
                                                <Form.Control  name="price" value={value.price} size="sm" type="text" placeholder="Price" />
                                                </Form.Group>
                                            </td>
                                            <td width="30"> 
                                                <Form.Group as={Col} md="12">
                                                <Form.Control onChange={this.valuechangeHandler} name="discount" size="sm" type="text" value={value.discount} placeholder="Discount" />
                                                </Form.Group>
                                                {/* <h6>30%</h6> */}
                                                </td>
                                            <td width="180"><Form.Group onSubmit={this.totalHandler} as={Col} md="10">
                                                <Form.Control  size="sm" name="total" value={value.price*value.quantity-(value.price*value.quantity*(value.discount/100))} type="text" placeholder="Total" />
                                                </Form.Group></td>
                                                </tr>
                                    ))
                                }
                                
                                </tbody>
                            </Table>
                            </div>
                            
                        </Row>
                        <div className="addItem">
                            <div className="btn1">
                            <Button  onClick={this.addRowHandler} variant="dark">+ Add Item</Button>{' '}
                            </div>
                        
                        <div className="btn1">
                        <Button  onClick={this.deleteHandler} variant="dark">+ Delete Item</Button>
                            </div>
                        
                        </div>
                        <div className="placeOrder">
                        <Button onClick={()=>this.props.change(this.state.row)} type="submit" variant="dark" size="lg" active>
                            Place Order
                        </Button>
                        </div>
                        </Form>
                       
                </Card>
            </div>
        );
    }
}
// const mapStateToProps=(state)=>{
//     return{
//         list:state.Cuser
//     }
// }
const mapDispatchToProps=(dispatch)=>{
    return{
        change: (state)=> dispatch({type:"stateTransfer",value:[...state]})
    }
}
export default connect(null,mapDispatchToProps)( OrderCard);