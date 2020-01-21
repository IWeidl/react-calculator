import React from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
const CalculatorButton = props => {
  return (
    <Col>
      <div onClick={props.onClick}>
        <Button variant="light" block>
          {props.value}
        </Button>
      </div>
    </Col>
  );
};
export default CalculatorButton;
