import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export class AddContacts extends Component {
  state = {
    name: "",
    email: "",
  };

  add=(e)=>{
       e.preventDefault();
      if(this.state.name==="" && this.state.email === ""){
        alert('all fields are mandatory')
        return
      }
      this.props.addContactHandler(this.state)
       this.setState({name:"", email:""})
       console.log(this.state);
  }


  render() {
    return (
      <Form onSubmit={this.add}>
        <Form.Group className="mb-3" controlId="formBasictext">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={this.state.name} onChange={(e)=>this.setState({name: e.target.value})}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicemail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" email="email" value={this.state.email} onChange={(e)=>this.setState({email: e.target.value})} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default AddContacts;
