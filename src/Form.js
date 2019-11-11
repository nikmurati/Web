import React from 'react';
import './index.css';

import { Col, Row, Form, FormGroup, Label, Input} from 'reactstrap';

// const Butoni = (props) => {
//   return (
//     <button className={props.klasa} onClick={props.kliku}>{props.children}</button>
//   )
// }
const initialState  = {
username: "",
surname: "",
address : "",
city: "",
states: "",
zip: "",
chooseroom: ""

}
class Form1 extends React.Component {
state = initialState;
  constructor(){
    super();
    this.state ={
      fields:{},
      errors:{}
      // stateArray: ['Ahmet', 'Gresa']
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitRegistrationForm = this.submitRegistrationForm.bind(this);
  };
  handleChange(e){
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
    this.setState(initialState);
  }

  submitRegistrationForm(e){
    e.preventDefault();
    if(this.validateForm()){
      let fields = {};
      fields["username"] = "";
      fields["surname"] = "";
      fields["address"] ="";
      fields["city"] ="";
      fields["states"] ="";
      fields["zip"] = "";
      fields["chooseroom"]="";
      this.setState({fields:fields});
      alert("Te dhenat u ruajten me sukses");
    }
  }
  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "Please enter your name! ";
    }
    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z]*$/)) {
        formIsValid = false;
        errors["username"] = "Please type characters only!";
      }
    }
    if (!fields["surname"]) {
      formIsValid = false;
      errors["surname"] = "Please enter your surname!";
    }
    if (typeof fields["surname"] !== "undefined") {
      if (!fields["surname"].match(/^[a-zA-Z]*$/)) {
        formIsValid = false;
        errors["surname"] = "Please type characters only!";
      }
    }
    if (!fields["address"]) {
      formIsValid = false;
      errors["address"] = "Please enter your address!";
    }

    if (!fields["city"]) {
      formIsValid = false;
      errors["city"] = "Please enter your city!";
    }
    if (!fields["states"]) {
      formIsValid = false;
      errors["states"] = "Please enter your state!";
    }
    if (!fields["zip"]) {
      formIsValid = false;
      errors["zip"] = "Please enter your zip!";
    }
    if (!fields["chooseroom"]) {
      formIsValid = false;
      errors["chooseroom"] = "Please enter your room!";
    }


    this.setState({
      errors: errors
    });
    return formIsValid;

  }

  componentDidMount(){
    // var array = ['Arianit', 'Rinor'];
    // var testarray = ['Adem', 'Besnik']
    // array.push(testarray)
    // this.state.stateArray.push(testarray)
    // console.log(this.state.stateArray)
  }
  render() {
     let dstyle = {
          backgroundColor: '#af9a7d',
          marginTop: '10px',
          marginLeft: '5px',
          
      }
    return (
      <Form method="post" name="userRegistrationForm" onSubmit = {this.submitRegistrationForm}>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Name</Label>
              <Input 
              type="text" 
              name="username" 
              id="name" 
              placeholder="Enter your username"
              value = {this.state.fields.username}
              onChange = {this.handleChange} />
            </FormGroup>
            <div className="errorMsg">{this.state.errors.username}</div>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Surname</Label>
              <Input 
              type="text" 
              name="surname" 
              id="surname" 
              placeholder="Enter your surname"
              value = {this.state.fields.surname}
              onChange = {this.handleChange} />
            </FormGroup>
            <div className="errorMsg">{this.state.errors.surname}</div>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleAddress">Address</Label>
          <Input 
          type="text" 
          name="address" 
          id="exampleAddress" 
          placeholder="1234 Main St"
          value = {this.state.fields.address}
          onChange = {this.handleChange}/>
        </FormGroup>
        <div className="errorMsg">{this.state.errors.address}</div>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">City</Label>
              <Input 
              type="text" 
              name="city" 
              id="exampleCity"
              value = {this.state.fields.city}
              onChange = {this.handleChange}/>
            </FormGroup>
            <div className="errorMsg">{this.state.errors.city}</div>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">State</Label>
              <Input 
              type="text" 
              name="states" 
              id="exampleState"
              value = {this.state.fields.states}
              onChange = {this.handleChange}
              />
            </FormGroup>
            <div className="errorMsg">{this.state.errors.states}</div>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">Zip</Label>
              <Input 
              type="text" 
              name="zip" 
              id="exampleZip"
              value = {this.state.fields.zip}
              onChange = {this.handleChange}/>
            </FormGroup>  
            <div className="errorMsg">{this.state.errors.zip}</div>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleDate">Date to</Label>
          <Input
            type="date"
            name="date"
            id="exampleDate"
            placeholder="date placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDate">Date Until</Label>
          <Input
            type="date"
            name="date"
            id="exampleDate"
            placeholder="date placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleAddress2">Wich Room </Label>
          <Input 
          type="text" 
          name="chooseroom" 
          id="room" 
          value = {this.state.fields.chooseroom}
            onChange = {this.handleChange}
          placeholder="Double Deluxe, Family Deluxe , or Presidential"/>
        </FormGroup>
        <div className="errorMsg">{this.state.errors.chooseroom}</div>
        <FormGroup>
          <Label for="exampleSelect">Persons</Label>
          <Input 
          type="select" 
          name="select" 
          id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
       
        <FormGroup check>
          <Input type="checkbox" name="check" id="exampleCheck"/>
          <Label for="exampleCheck" check>I accept the licence agreements</Label>
        </FormGroup>
        {/* <Butoni 
        kliku={() => this.setState({ stateArray: [...this.state.stateArray, 'Adem'] })}>
          <span className="badge">Adem</span>
          </Butoni> */}
         <Input  type = "submit" style = {dstyle} value = "Reserve">Reserve </Input> 
      </Form>
    );
  }
}


export default Form1;