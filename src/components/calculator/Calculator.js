import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CalculatorButton from "./CalculatorButton/CalculatorButton";
import Form from "react-bootstrap/Form";
class Calculator extends React.Component {
  state = {
    inputField: ""
  };
  updateField(event) {
    this.setState({ inputField: this.state.inputField + event });
  }
  render() {
    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Control type="text" value={this.state.inputField} />
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <CalculatorButton
                value="7"
                onClick={this.updateField.bind(this, "7")}
              />
              <CalculatorButton
                value="8"
                onClick={this.updateField.bind(this, "8")}
              />
              <CalculatorButton
                value="9"
                onClick={this.updateField.bind(this, "9")}
              />
              <CalculatorButton value="X" />
            </Form.Row>
            <Form.Row>
              <CalculatorButton
                value="4"
                onClick={this.updateField.bind(this, "4")}
              />
              <CalculatorButton
                value="5"
                onClick={this.updateField.bind(this, "5")}
              />
              <CalculatorButton
                value="6"
                onClick={this.updateField.bind(this, "6")}
              />
              <CalculatorButton value="-" />
            </Form.Row>
            <Form.Row>
              <CalculatorButton
                value="1"
                onClick={this.updateField.bind(this, "1")}
              />
              <CalculatorButton
                value="2"
                onClick={this.updateField.bind(this, "2")}
              />
              <CalculatorButton
                value="3"
                onClick={this.updateField.bind(this, "3")}
              />
              <CalculatorButton value="+" />
            </Form.Row>
            <Form.Row>
              <CalculatorButton value="+-" />
              <CalculatorButton
                value="0"
                onClick={this.updateField.bind(this, "0")}
              />
              <CalculatorButton
                value="."
                onClick={this.updateField.bind(this, ".")}
              />
              <CalculatorButton value="=" />
            </Form.Row>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
export default Calculator;
