"use strict";
function validateString(input) {
    return validateChars(input) && validateBrackets(input);
}
// ищем корректные символы
function validateChars(input) {
    const validChars = " -?0123456789+*/()";
    for (const char of input) {
        if (validChars.indexOf(char) === -1) {
            console.log("Некорректный символ в выражении");
            return false;
        }
    }
    return true;
}
// проверяем корректность выставленных скобок
function validateBrackets(input) {
    let staples = 0;
    const startBracket = "(";
    const endBracket = ")";
    for (const char of input) {
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
    const regex = /-?\d+|[-+*/]/g;
    return input.match(regex) || [];
}
// вычисляем значение выражения, проверяем корректность
function calc(input) {
    if (!validateString(input)) {
        return "Ошибка: некорректное выражение или символы";
    }
    const arr = tokenizeString(input);
    const stack = [];
    while (arr.length !== 0) {
        const token = arr.pop();
        if (!isNaN(Number(token))) {
            stack.push(Number(token));
        }
        else {
            if (stack.length < 2) {
                return "Ошибка: недостаточно чисел для выполнения операции";
            }
            const a = stack.pop();
            const b = stack.pop();
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
