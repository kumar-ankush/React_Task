import React from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import {connect} from 'react-redux';

import './ModelContainer.css';


import { Component } from 'react';
//const [saleShow, showLgShow] = useState(false);
//     const [purchaseShow, setLgShow] = useState(false);

class ModelContainer extends Component {
  constructor(props){
    super(props)
    this.state={
      saleShow:false,
      purchaseShow:false
    };
  };
  showLgShow=(val)=>{
    const saleShow=val
    this.setState({saleShow})
  }
  setLgShow=(val)=>{
    const purchaseShow=val
    this.setState({purchaseShow})
  }
  
  render() {
    return (
      <div>
          <div className="d-flex ">
               {this.props.saleStatus?(<div className="btn-1"><Button variant="light" onClick={() => this.showLgShow(true)}>Sale Summary</Button></div>):console.log("Sale Status Negative")}
               {
                 this.props.purschaseStatus?(<div className="btn-2"><Button variant="light" onClick={() => this.setLgShow(true)}>Purchase Summary</Button></div>):console.log("Purchase Status Negative")
              }
            
            </div>
            <Modal
        size="lg"
        show={this.state.saleShow}
        onHide={() => this.showLgShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Sale Summary
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover size="sm">
            <thead>
            <th>S.No</th>
            <th>Name</th>
            <th>Price</th>
            </thead>
            <tbody>
              {this.props.Row.map((value,index)=>(
                <tr key={value.id*1000}>
                  <td>{index+1}</td>
                  <td>{value.itemName}</td>
              <td>{value.price}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>



      <Modal
        size="lg"
        show={this.state.purchaseShow}
        onHide={() => this.setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          Purchase Summary
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Table striped bordered hover size="sm">
            <thead>
            <th>S.No</th>
            <th>Name</th>
            <th>Ordered Quantity</th>
            </thead>
            <tbody>
              {this.props.Vendor.map((value,index)=>(
                <tr key={value.id*10000}>
                  <td>{index+1}</td>
                  <td>{value.productName}</td>
              <td>{value.Ordered}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
        </div>
      
    );
  }
}

const mapStateToProps=(state)=>{
    return{
        saleStatus:state.orderStatus,
        purschaseStatus:state.purchaseStatus,
        Row:state.row,
        Vendor:state.vendor
    }
  }
  export default connect(mapStateToProps)( ModelContainer);

