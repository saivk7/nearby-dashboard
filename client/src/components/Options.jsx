import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Options = (props) => {
  return (
    <Form>
      <FormGroup row>
        <Label for="placeName" sm={4}>Enter a place</Label>
        <Col sm={6}>
          <Input type="place" name="placeName" id="placeName" placeholder="Ex. New York / Los Angeles" />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="rangeSelect" sm={4}>Select the Range in Miles</Label>
        <Col sm={6}>
          <Input type="select" name="range" id="rangeSelect">
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
            <option>200</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="resultsSelect" sm={4}>Select number of results</Label>
        <Col sm={6}>
          <Input type="select" name="resultsSelect" id="resultsSelect" >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Col sm={{ size: 10, offset: 4 }}>
          <Button color="primary">Submit</Button>
        </Col>
      </FormGroup>
    </Form>
  );
}

export default Options;
