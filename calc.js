function validateString(input) {
    if (validateChars(input) && validateBrackets(input)) {
        return true;
    }
}
// ищем корректные символы
function validateChars(input) {
    var validChars = " -?0123456789+*/()";
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var char = input_1[_i];
        if (validChars.indexOf(char) === -1) {
            console.log("Некорректный символ в выражении");
            return false;
        }
    }
    return true;
}
// проверяем корректность выставленных скобок
function validateBrackets(input) {
    var staples = 0;
    var startBracket = "(";
    var endBracket = ")";
    for (var _i = 0, input_2 = input; _i < input_2.length; _i++) {
        var char = input_2[_i];
        if (staples < 0) {
            console.log("Неправильно поставленные скобки");
            break;
        }
        if (char === startBracket) {
            staples += 1;
        }
        if (char === endBracket) {
            staples -= 1;
        }
    }
    if (staples == 0) {
        return true;
    }
    console.log("Неверное число скобок");
    return false;
}
// разбиваем на токены в массив выражения
function tokenizeString(input) {
    var regex = /-?\d+|[-+*/]/g;
    return input.match(regex) || [];
}
// вычисляем значение выражения, проверяем корректность
function calc(input) {
    if (!validateString(input)) {
        return "Ошибка: некорректное выражение или символы";
    }
    var arr = tokenizeString(input);
    var stack = [];
    while (arr.length !== 0) {
        var token = arr.pop();
        if (!isNaN(Number(token))) {
            stack.push(Number(token));
        }
        else {
            if (stack.length < 2) {
                return "Ошибка: недостаточно чисел для выполнения операции";
            }
            var a = stack.pop();
            var b = stack.pop();
            switch (token) {
                case "+":
                    stack.push(a + b);
                    break;
                case "-":
                    stack.push(a - b);
                    break;
                case "*":
                    stack.push(a * b);
                    break;
                case "/":
                    if (b === 0) {
                        return "Ошибка: деление на ноль";
                    }
                    else {
                        stack.push(a / b);
                        break;
                    }
            }
        }
    }
    if (stack.length !== 1) {
        return "Ошибка: некорректное выражение";
    }
    else
        return stack.pop();
}
console.log("1. 1 - 2 =", calc("- 1 2")); // -1
console.log("2. 3 + 4 =", calc("+ -3 4")); // 1
console.log("3. 5 / 2 =", calc("/ 5 2")); // 2.5
console.log("4. 2 * 3 =", calc("* 2 3")); // 6
console.log("5.", calc(""));
console.log("6.", calc("apple"));
console.log("7.", calc("5 - 5"));
console.log("8.", calc("/ 10 0"));
console.log("9.", calc("+ (- 5 9) 2"));
