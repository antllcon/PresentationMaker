function tokenizeString(input: string): Array<string> {
    const regex = /-?\d+|[-+*/]/g;
    return input.match(regex) || [];
}

function calc(input: string): number {
    let arr = tokenizeString(input);
    let stack: Array<number> = [];

    // console.log(arr);

    while (arr.length !== 0) {
        let token: string = arr.pop()!;

        if (!isNaN(Number(token))) {
            stack.push(Number(token));
        } else {

            if (stack.length < 2) {
                throw new Error("Ошибка: недостаточно операндов.");
            }

            let a = stack.pop();
            let b = stack.pop();

            // console.log(a, b);

            switch (token) {
                case '+': stack.push(a! + b!); break;
                case '-': stack.push(a! - b!); break;
                case '*': stack.push(a! * b!); break;
                case '/':
                    if (b === 0) {
                        throw new Error("Ошибка: деление на ноль невозможно.");
                    } else { stack.push(a! / b!); break; }
                default:
                    throw new Error(`Неверный оператор: ${token}`);
            }
        }
    }

    if (stack.length !== 1) {
        // console.log(stack); //
        throw new Error("Ошибка: некорректное выражение.");
    }

    return stack.pop()!;
}

// Корректные примеры
console.log(calc("- * / 15 - 7 + 1 1 3 + 2 + 1 1"));  // Ожидается: 7
console.log(calc("* ( / (+ 2 2)(- 6 4)) 7"))
// console.log(calc("- 10 3"));  // Ожидается: 7
// console.log(calc("* 3 + 1 2"));  // Ожидается: 9 (3 * (1 + 2))
// console.log(calc("/ 10 2")); // Ожидается: 5
// console.log(calc("* / 10 2 + 1 2"));  // Ожидается: 15 (10 / 2 * (1 + 2))
//
// // Примеры с делением на ноль
// try {
//     console.log(calc("/ 10 0")); // Ожидается: Ошибка: деление на ноль невозможно.
// } catch (e) {
//     console.error(e.message);
// }
//
// // Примеры с неверным вводом (скобки)
// try {
//     console.log(calc("(+ 3 4)")); // Ожидается: Ошибка: неверный оператор или токен
// } catch (e) {
//     console.error(e.message);
// }
//
// try {
//     console.log(calc("* (3 + 2)")); // Ожидается: Ошибка: неверный оператор или токен
// } catch (e) {
//     console.error(e.message);
// }
//
// // Примеры с лишними токенами
// try {
//     console.log(calc("+ 3 4 5")); // Ожидается: Ошибка: неверное количество операндов
// } catch (e) {
//     console.error(e.message);
// }
//
// try {
//     console.log(calc("*")); // Ожидается: Ошибка: неверное количество операндов
// } catch (e) {
//     console.error(e.message);
// }
//
// // Проверка на неправильные операторы
// try {
//     console.log(calc("& 3 4")); // Ожидается: Ошибка: Неверный оператор: &
// } catch (e) {
//     console.error(e.message);
// }
