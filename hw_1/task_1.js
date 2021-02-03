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
        console.log(sum(operand1, operand2));
        break;
      case "sub":
        console.log(sub(operand1, operand2));
        break;
      case "mul":
        console.log(mul(operand1, operand2));
        break;
      case "div":
        console.log(div(operand1, operand2));
        break;
      default:
        console.log("Wrong operator!");
        break;
    }
  }
  
  var operator = "div";
  var operand1 = 10;
  var operand2 = 2;
  
  calculator(operator, operand1, operand2);