import React, { Component } from 'react';
import { Card, Table,Col,Row,Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import './ItemsNeededCard.css';
class ItemsNeededCard extends Component {
    constructor(props) {
        super(props);
        this.state={information:"",apple:[],oneplus:[],Nokia:[],Samsung:[],list:["Select","Iphone 12 Pro Max","Iphone 12 Pro","Iphone 12","Iphone 12 Mini"]}
        this.handleSelect = this.handleSelect.bind(this);
      }
      handleSelect=(event)=>{
        // console.log("The Event value is "+event.target.value);
        this.setState({information:event.currentTarget.value});
        console.log("The state information value is: "+this.state.information);
        switch(event.target.value)
        {
            case "Apple": console.log("Working a")
                    var arr=[]
                    this.props.steve.map((value)=>{
                          arr.push(value);    
                    })
                    console.log("The arr is "+arr);
                    this.setState({list:[...arr]})
                  console.log("The Apple is"+this.state.apple)
                  break;
            case "Oneplus":console.log("Working b");
                console.log("Working OnePlus");
                var arr1=[]
                  this.props.nord.map((value)=>{
                        arr1.push(value);
                        
                  })
                  console.log("The arr1 is "+arr1);
                  this.setState({list:[...arr1]})
                  console.log("The Oneplus is"+this.state.oneplus)
                  break;
            case "Nokia":console.log("Working c");
            console.log("Working OnePlus");
            var arr=[]
              this.props.nok.map((value)=>{
                    arr.push(value);
                    
              })
              console.log("The arr1 is "+arr);
              this.setState({list:[...arr]})
              console.log("The Oneplus is"+this.state.Nokia)
              break;
            case "Samsung": console.log("Working c");
            console.log("Working OnePlus");
            var arr=[]
              this.props.sam.map((value)=>{
                    arr.push(value);
                    
              })
              console.log("The arr1 is "+arr);
              this.setState({list:[...arr]})
              console.log("The Oneplus is"+this.state.Samsung)
              break;
              default: console.log("Wrong Choice")
            //
            //
            //
            //
            // case "Apple": console.log("Working a")
            //         var arr=[]
            //         this.props.steve.map((value)=>{
            //               arr.push(value);    
            //         })
            //         console.log("The arr is "+arr);
            //         this.setState({list:[...arr]})
            //       console.log("The Apple is"+this.state.list)
            //       break;
            // case "Oneplus":console.log("Working b");
            //     console.log("Working OnePlus");
            //     var arr1=[]
            //       this.props.nord.map((value)=>{
            //             arr1.push(value);
                        
            //       })
            //       console.log("The arr1 is "+arr1);
            //       this.setState({list:[...arr1]})
            //       console.log("The Oneplus is"+this.state.list)
            //       break;
            // case "Nokia":console.log("Working c");
            // console.log("Working OnePlus");
            //  arr=[]
            //   this.props.nok.map((value)=>{
            //         arr.push(value); 
            //   })
            //   console.log("The arr1 is "+arr);
            //   this.setState({list:[...arr]})
            //   console.log("The Oneplus is"+this.state.list)
            //   break;

            // case "Samsung": console.log("Working c");
            // console.log("Working OnePlus");
            // arr=[]
            //   this.props.sam.map((value)=>{
            //         arr.push(value);
                    
            //   })
            //   console.log("The arr1 is "+arr);
            //   this.setState({list:[...arr]})
            //   console.log("The Oneplus is"+this.state.list)
            //   break;
            //   default: console.log("Wrong Choice")
        }
   
      }
    
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
                                    {this.props.Org.map((value,index)=>(
                                        <tr>
                                            <td width="10">{index+1}</td>
                                            <td width="300">
                                            <Form.Group onChange={this.handleSelect} as={Col} md="10" controlId="exampleForm.SelectCustomSizeSm">
                                            <Form.Control  as="select" size="sm" custom>
                                                
                                                {
                                                    this.props.annoying.map((x)=>
                                                        <option id={x.id} key={x.id}>{x.value}</option>
                                                    )
                                                }
                                            </Form.Control>
                                            </Form.Group>
                                            </td>
                                            <td width="540">
                                            <Form.Group as={Col} md="10" controlId="exampleForm.SelectCustomSizeSm">
                                            <Form.Control as="select" size="sm" custom>
                                               {/* {this.state.list.map((data)=>{
                                                   console.log(data);
                                                   return( <option>{data}</option>)
                                                    
                                                   })} */}
                                                     {
                                                    this.state.information==="Apple"? this.state.apple.map(x=> <option >{x}</option>)
                                                    :this.state.information==="Oneplus"?this.state.oneplus.map((x)=><option >{x}</option>)
                                                    :this.state.information==="Nokia"?this.state.Nokia.map((x)=><option >{x}</option>)
                                                    :this.state.information==="Samsung"?this.state.Samsung.map((x)=><option >{x}</option>)
                                                    :console.log("Wrong Option")
                                                    
                                                }
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
        nok:state.Nokia,
        sam:state.Samsung,
        annoying:state.com,
       
    }
}
export default connect(mapStateToProps)(ItemsNeededCard);