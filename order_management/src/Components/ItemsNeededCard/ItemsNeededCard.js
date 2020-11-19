import React, { Component } from 'react';
import { Card, Table,Col,Row,Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import './ItemsNeededCard.css';
class ItemsNeededCard extends Component {
    constructor(props) {
        super(props);
        this.state={information:"",apple:[],oneplus:[],list:["Select","Iphone 12 Pro Max","Iphone 12 Pro","Iphone 12","Iphone 12 Mini"]}
        this.handleSelect = this.handleSelect.bind(this);
        // this.AppleHandler=this.AppleHandler.bind(this);
        // this.OneplusHandler=this.OneplusHandler.bind(this);
      }
      handleSelect=(event)=>{
        console.log("The Event value is "+event.target.value);
          this.setState({information:event.target.value});
        console.log("The state value is: "+this.state.information);
        if(event.target.value=="Apple"){
            console.log("Working a")
            var arr=[]
            this.props.steve.map((value)=>{
                  arr.push(value);    
            })
            console.log("The arr is "+arr);
            this.setState({list:[...arr]})
          console.log("The Apple is"+this.state.list)
            // this.AppleHandler()
        }
        else {console.log("Working b");
        //  this.OneplusHandler()
        console.log("Working OnePlus");
        var arr1=[]
          this.props.nord.map((value)=>{
                arr1.push(value);
                
          })
          console.log("The arr1 is "+arr1);
          this.setState({list:[...arr1]})
          console.log("The Oneplus is"+this.state.list)      
    }
      }
    //   AppleHandler=()=>{
    //       var arr=[]
    //       this.props.steve.map((value)=>{
    //             arr.push(value);    
    //       })
    //       this.setState({apple:[...arr]})
    //     console.log("The Apple is"+this.state.apple)
    //   }
    //   OneplusHandler=()=>{
    //     console.log("Working OnePlus");
    //     var arr1=[]
    //       this.props.nord.map((value)=>{
    //             arr1.push(value);
                
    //       })
    //       console.log("The arr1 is "+arr1);
    //       this.setState({oneplus:[...arr1]})
    //       console.log("The Oneplus is"+this.state.oneplus)
    //   }
    render() {
        return (
            <div className="ItemsNeededCard">
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
                                        <Form.Control type="text" placeholder="Enter Full Name" />
                                        <Form.Text className="text-muted">
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group as={Col} md="8" controlId="formBasicEmail">
                                    <Form.Label>E-Mail</Form.Label>
                                    <Form.Control   type="email" placeholder="Enter your Email" />
                                    </Form.Group>
                                    <Form.Group  as={Col} md="8" controlId="formBasicName">
                                    <Form.Label>Phone</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Phone Number" />
                                        <Form.Text className="text-muted">
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group as={Col} md="8" controlId="formGridAddress1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control placeholder="1234 Main St" />
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
                                {/* {id:Math.random()*1000,firm:"Apple" ,Ordered:11,Apple:["Iphone 12 Pro Max","Iphone 12 Pro","Iphone 12","Iphone 12 Mini"]} */}
                                    {this.props.Org.map((value,index)=>(
                                        <tr>
                                            <td width="10">{index+1}</td>
                                            <td width="300">
                                            <Form.Group onChange={this.handleSelect} as={Col} md="10" controlId="exampleForm.SelectCustomSizeSm">
                                            <Form.Control  as="select" size="sm" custom>
                                                {this.props.info.map((val,index)=>(
                                                    <option  >{val.company[index]}</option>
                                                ))}
                                            </Form.Control>
                                            </Form.Group>
                                            </td>
                                            <td width="540">
                                            <Form.Group as={Col} md="10" controlId="exampleForm.SelectCustomSizeSm">
                                            <Form.Control as="select" size="sm" custom>
                                               {this.state.list.map((data)=>{
                                                   console.log(data);
                                                   return( <option>{data}</option>)
                                                    
                                                   })}
                                            </Form.Control>
                                            </Form.Group>
                                            </td>
                                            <td >
                                                 <h6>{value.Ordered}</h6> {/*//Not workinh Why */}
                                                
                                            </td>
                                        </tr>
                                    ))}
                                    
                                </tbody>
                        </Table>
                        </div>
                        <div className="btn1">
                        <Button  type="submit" variant="dark">+ Add Item</Button>{' '}
                        <Button id="bttn" type="submit" variant="dark">- Remove Item</Button>{' '}
                        </div>
                        <div className="btn2">
                        <Button  type="submit" variant="dark" size="lg"  block>{' '}
                            Place Order
                        </Button>
                        </div>
                        </Col>
                    </Row>
                </Card>
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
       
    }
}
export default connect(mapStateToProps)(ItemsNeededCard);