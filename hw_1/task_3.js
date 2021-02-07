function sum(a, b) {
    return a + b;
  }
  
  function sub(a, b) {
    return a - b;
  }
  
  function mul(a, b) {
    return a * b;
  }
  
  function div(a, b) {
    return a / b;
  }
  
  function calculator(operator, operand1, operand2) {
    switch (operator) {
      case "sum":
        return sum(operand1, operand2);
        break;
      case "sub":
        return sub(operand1, operand2);
        break;
      case "mul":
        return mul(operand1, operand2);
        break;
      case "div":
        return div(operand1, operand2);
        break;
      default:
        console.log("Wrong operator!");
        break;
    }
  }
  
  var firstOperator = "div";
  var secondOperator = "mul";
  var operand1 = 10;
  var operand2 = 2;
  var operand3 = 6;
  
  var firstResult = calculator(firstOperator, operand1, operand2);
  var secondResult = calculator(secondOperator, firstResult, operand3);
  console.log(secondResult);