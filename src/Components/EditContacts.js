import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export class EditContacts extends Component {
  
    constructor(props) {
        super(props);
        const { id, name, email } = props.location.state.contact;
        this.state = {
          id,
          name,
          email,
        };
  }

  update=(e)=>{
       e.preventDefault();
      if(this.state.name==="" && this.state.email === ""){
        alert('all fields are mandatory')
        return
      }
      this.props.updateContactHandler(this.state)
       this.setState({name:"", email:""})
       this.props.history.push('/')
  }


  render() {
    return (
      <Form onSubmit={this.update}>
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

export default EditContacts;
