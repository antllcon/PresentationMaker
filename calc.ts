function validateString(input: string): boolean {
    const regex = /-?\d+|[-+*/()]/g;
    return regex.test(input);

}

function tokenizeString(input: string): Array<string> {
    const regex = /-?\d+|[-+*/]/g;
    return input.match(regex) || [];
}

function calc(input: string): number {
    if (validateString(input)) {
        let arr = tokenizeString(input);
        let stack: Array<number> = [];
        while (arr.length !== 0) {
            // console.log(arr);
            let token: string = arr.pop();
            if (!isNaN(Number(token))) {
                stack.push(Number(token));
            } else {
                if (stack.length < 2) {
                    console.log("Ошибка: недостаточно операндов, ");
                    break;
                }
                let a = stack.pop();
                let b = stack.pop();
                // console.log(a, token, b);
                switch (token) {
                    case '+': stack.push(a + b); break;
                    case '-': stack.push(a - b); break;
                    case '*': stack.push(a * b); break;
                    case '/':
                        if (b === 0) {
                            throw new Error("Ошибка: деление на ноль невозможно.");
                        } else {stack.push(a / b); break;}
                }
            }
        }
        if (stack.length !== 1) {
            console.log("Некорректное выражение.");
            return 0;
        }
        return stack.pop()!;
    } else {
        console.log("Некорректный символ в выражении.");
        return 0; // ?  что должна возвращать функция?
    }
}

console.log("1. 1 - 2 =", calc("- 1 2")); // -1
console.log("2. 3 + 4 =", calc("+ 3 4")); // 7
console.log("3. 5 / 2 =", calc("/ 5 2")); // 2.5
console.log("4. 2 * 3 =", calc("* 2 3")); // 6

console.log("5. ", calc(""));
console.log("6. ", calc("6"));