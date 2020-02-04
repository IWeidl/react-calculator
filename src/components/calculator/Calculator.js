import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CalculatorButton from "./CalculatorButton/CalculatorButton";
import Form from "react-bootstrap/Form";
import mexp from "math-expression-evaluator";
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputField: "",
      refresh: false
    };
  }
  updateField = event => {
    this.setState({ inputField: this.state.inputField + event });
  };
  clearField = () => {
    this.setState({ inputField: "" });
  };
  evaluateField = () => {
    this.setState({ inputField: mexp.eval(this.state.inputField) });
    this.setState({ refresh: true });
  };
  backspaceField = () => {
    try {
      let str = this.state.inputField;
      this.setState({ inputField: str.slice(0, -1) });
    } catch (err) {
      this.setState({ inputField: "Error: " + err });
    }
  };
  oppositeField = () => {
    let str = this.state.inputField;
    if (str[0] === "-") {
      str = str.slice(1);
    } else {
      str = "-" + str;
    }

    this.setState({ inputField: str });
  };
  render() {
    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Control type="text" readOnly value={this.state.inputField} />
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <CalculatorButton
                value="%"
                onClick={this.updateField.bind(this, "Mod")}
              />
              <CalculatorButton
                value="C"
                onClick={this.clearField.bind(this)}
              />
              <CalculatorButton
                value="<-"
                onClick={this.backspaceField.bind(this)}
              />
              <CalculatorButton
                value="&divide;"
                onClick={this.updateField.bind(this, "/")}
              />
            </Form.Row>
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
              <CalculatorButton
                value="&times;"
                onClick={this.updateField.bind(this, "*")}
              />
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
              <CalculatorButton
                value="&ndash;"
                onClick={this.updateField.bind(this, "-")}
              />
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
              <CalculatorButton
                value="+"
                onClick={this.updateField.bind(this, "+")}
              />
            </Form.Row>
            <Form.Row>
              <CalculatorButton
                value="&plusmn;"
                onClick={this.oppositeField.bind(this)}
              />
              <CalculatorButton
                value="0"
                onClick={this.updateField.bind(this, "0")}
              />
              <CalculatorButton
                value="."
                onClick={this.updateField.bind(this, ".")}
              />
              <CalculatorButton
                value="="
                onClick={this.evaluateField.bind(this)}
              />
            </Form.Row>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
export default Calculator;
