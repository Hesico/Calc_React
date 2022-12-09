import {Container, Content, Row, Column} from "./styles"
import Button from "./components/Button";
import Input from "./components/Input";
import { useState } from "react";

function App() {

  const [currentNumber, setCurrentNumber] = useState("0");

  const addNumber = (number) => {

    if(number === "C") {

      setCurrentNumber("0");
      return;

    }else if(number === "="){

      let op = /(\+)|(-)|(x)|(\/)/.exec(currentNumber);

      if(!op) return;

      let currentNumberArr = currentNumber.split(op[0]);
      setCurrentNumber(operate(currentNumberArr[0],currentNumberArr[1],op[0]));
      return;
      
    }else if(/(\+)|(-)|(x)|(\/)/.test(number)){
      if(/(\+)|(-)|(x)|(\/)/.test(currentNumber)) return;
    }
    setCurrentNumber(prev => (prev === "0" ? "" : prev) + number);
  }

  const operate = (firstNumber, secondNumber, op) =>{

    let result;
    switch (op){
      case "+":
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
      break;
      case "-":
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
      break;
      case "x":
        result = parseFloat(firstNumber) * parseFloat(secondNumber);
      break;
      case "/":
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
      break;
    }
    return result;
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          {["x","/",".","C","7","8","9","-","4","5","6","+","1","2","3","="]
            .map(e => <Button label={e} onClick={() => addNumber(e)}/>)}
        </Row>
      </Content>
    </Container>
  );
}

export default App;
