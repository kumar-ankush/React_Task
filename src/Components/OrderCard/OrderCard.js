import React, { Component } from 'react';
import { Button, Card, Col, Form, Row, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import './OrderCard.css';
class OrderCard extends Component {
    constructor(props){
        super(props);
        this.state={}
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
                                        <Form.Control type="text" placeholder="Enter Full Name" />
                                        <Form.Text className="text-muted">
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group as={Col} md="8" controlId="formBasicEmail">
                                    <Form.Label>E-Mail</Form.Label>
                                    <Form.Control   type="email" placeholder="Enter your Email" />
                                    </Form.Group>
                                    <Form.Group as={Col} md="8" controlId="formBasicPassword">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Phone Number" />
                                    </Form.Group>
                                   </div>
                            </Col>
                            <Col>
                            
                            <h6>Payment Method</h6>
                            <Form.Check
                                type="radio"
                                className="mb-2 mr-sm-2"
                                id="inlineFormCheck"
                                label="Online"
                            />
                            <Form.Check
                                type="radio"
                                className="mb-2 mr-sm-2"
                                id="inlineFormCheck"
                                label="Cash"
                            />
                           <Form.Group as={Col} md="10" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control  as="textarea" rows={5} placeholder="Hint Text" />
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
                                <tr >
                                    <td width="10">1</td>
                                    <td width="210" >
                                        {/* <div className="td_2"> */}
                                    {<Form.Group as={Col} md="12" controlId="exampleForm.SelectCustomSizeSm">
                                    {/* <Form.Label>Custom select Small</Form.Label> */}
                                    <Form.Control as="select" size="sm" custom>
                                        { this.props.list.map((val,index) =>(
                                            <option>{val.itemName}</option>
                                        ))}
                                        
                                    </Form.Control>
                                     </Form.Group>} {/*</div> */}
                                    </td>
                                    <td  width="110">
                                        <Form.Group as={Col} md="12">
                                        <Form.Control size="sm" type="text" placeholder="Unit" />
                                        </Form.Group>
                                    </td>
                                    <td width="180">
                                    <Form.Group as={Col} md="12">
                                        <Form.Control size="sm" type="text" placeholder="Price" />
                                        </Form.Group>
                                    </td>
                                    <td width="150"> 
                                        <Form.Group as={Col} md="12">
                                        <Form.Control size="sm" type="text" value="0" placeholder="Discount" />
                                        </Form.Group>
                                        {/* <h6>30%</h6> */}
                                        </td>
                                    <td width="180"><Form.Group as={Col} md="10">
                                        <Form.Control size="sm" type="text" placeholder="Total" />
                                        </Form.Group></td>
                                </tr>
                                </tbody>
                            </Table>
                            </div>
                            
                        </Row>
                        <div className="addItem">
                        <Button  type="submit" variant="dark">+ Add Item</Button>{' '}
                        </div>
                        <div className="placeOrder">
                        <Button type="submit" variant="dark" size="lg" active>
                            Place Order
                        </Button>
                        </div>
                        </Form>
                </Card>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        list:state.itemList
    }
}
export default connect(mapStateToProps)( OrderCard);