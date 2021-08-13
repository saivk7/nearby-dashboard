import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import GoogleMaps from './SearchBox';

const Options = ({place,setPlace,results,setResults,range,setRange}) => {

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("submit called" ,e)
    setResults(e.target.resultsSelect.value)
    setRange(e.target.rangeSelect.value)
  }
  return (

    <Form  onSubmit={handleSubmit} >
      <FormGroup row>
        <Label for="placeName" sm={3}></Label>
        <Col sm={4}>
          <GoogleMaps place={place} setPlace={setPlace} />
          
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="rangeSelect" sm={3}>Range in Miles</Label>
        <Col sm={4}>
          <Input type="select" name="range" id="rangeSelect">
            
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>10</option>
            <option>200</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="resultsSelect" sm={3}>Results</Label>
        <Col sm={4}>
          <Input type="select" name="resultsSelect" id="resultsSelect" >
            <option>5</option>
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </Input>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Col sm={{ size: 10, offset: 3 }} style={{padding:"10px"}}>
          <Button  color="primary" type="submit" >Submit</Button>
        </Col>
      </FormGroup>
      <hr></hr>
      <br />
    </Form>
  );
}

export default Options;
