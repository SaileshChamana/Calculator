function calculateLog() {
  var display = document.querySelector('input[name="display"]');
  display.value += 'log2(';
}

function calculateSin() {
  var display = document.querySelector('input[name="display"]');
  display.value += 'sin(';
}

function calculateCos() {
  var display = document.querySelector('input[name="display"]');
  display.value += 'cos(';
}

function calculateTan() {
  var display = document.querySelector('input[name="display"]');
  display.value += 'tan(';
}

function evaluateExpression() {
  var display = document.querySelector('input[name="display"]');
  var expression = display.value.replace(/sin|cos|tan|log2/g, function (match) {
    return 'Math.' + match;
  });
  display.value = eval(expression);
}
