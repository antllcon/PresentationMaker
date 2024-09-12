
function validateString(input: string): boolean {
    if (validateChars(input) && validateBrackets(input)) {
        return true;
    }
}

// ищем корректные символы
function validateChars(input: string): boolean {
    const validChars = " -?0123456789+*/()";
    for (let char of input) {
        if (validChars.indexOf(char) === -1) {
            console.log("Некорректный символ в выражении");
            return false;
        }
    }
    return true;
}

// проверяем корректность выставленных скобок
function validateBrackets(input: string): boolean {
    let staples: number = 0;
    const startBracket: string = "(";
    const endBracket: string = ")";
    for (let char of input) {
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
function tokenizeString(input: string): Array<string> {
    const regex = /-?\d+|[-+*/]/g;
    return input.match(regex) || [];
}

// вычисляем значение выражения, проверяем корректность
function calc(input: string): number {
    if (validateString(input)) {
        let arr = tokenizeString(input);
        let stack: Array<number> = [];
        while (arr.length !== 0) {
            let token: string = arr.pop();
            if (!isNaN(Number(token))) {
                stack.push(Number(token));
            } else {
                if (stack.length < 2) {
                    console.log("Недостаточно чисел");
                    break;
                }
                let a = stack.pop();
                let b = stack.pop();

                switch (token) {
                    case "+": stack.push(a + b); break;
                    case "-": stack.push(a - b); break;
                    case "*": stack.push(a * b); break;
                    case "/":
                        if (b === 0) {
                            console.log("Деление на ноль невозможно");
                            break;
                        } else {stack.push(a / b); break;}
                }
            }
        }
        if (stack.length !== 1) {
            console.log("Некорректное выражение");
            return 0;
        } else return stack.pop()!;
    } else {
        return 0;
    }
}

console.log("1. 1 - 2 =", calc("- 1 2")); // -1
console.log("2. 3 + 4 =", calc("+ 3 4")); // 7
console.log("3. 5 / 2 =", calc("/ 5 2")); // 2.5
console.log("4. 2 * 3 =", calc("* 2 3")); // 6

console.log("5. ", calc("+ 3 4"));

