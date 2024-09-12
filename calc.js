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
    if (validateString(input)) {
        var arr = tokenizeString(input);
        var stack = [];
        while (arr.length !== 0) {
            var token = arr.pop();
            if (!isNaN(Number(token))) {
                stack.push(Number(token));
            }
            else {
                if (stack.length < 2) {
                    console.log("Недостаточно чисел");
                    break;
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
                            console.log("Деление на ноль невозможно");
                            break;
                        }
                        else {
                            stack.push(a / b);
                            break;
                        }
                }
            }
        }
        if (stack.length !== 1) {
            console.log("Некорректное выражение");
            return 0;
        }
        else
            return stack.pop();
    }
    else {
        return 0;
    }
}
console.log("1. 1 - 2 =", calc("- 1 2")); // -1
console.log("2. 3 + 4 =", calc("+ 3 4")); // 7
console.log("3. 5 / 2 =", calc("/ 5 2")); // 2.5
console.log("4. 2 * 3 =", calc("* 2 3")); // 6
console.log("5. ", calc("+ ()()()3 4"));
// калькулятор, проходится, узнает причастно ли выражение к ошибкам.
