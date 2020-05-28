function add(x, y) {
    return x + y
}
console.log(add(2, 4))

function multiply(x, y) {
    let total = 0
    for (let counter = 0; counter < y; counter++) {
        total = add(x, total)
    }
    return total
}
console.log(multiply(6, 4))

function power(x, y) {
    let total = 1
    for (let counter = 0; counter < y; counter++) {
        total = multiply(x, total)
    }
    return total
}
console.log(power(3, 4))

function factorial(x) {
    let total = 1
    for (let counter = 1; counter <= x; counter++) {
        total = multiply(counter, total)
    }
    return total
}
console.log(factorial(6))

function Fibonacci(n) {
    let first = 0
    let second = 1
    let next = 1
    for (let counter = 2; counter < n; counter++) {
        next = add(first, second);
        first = second;
        second = next;
    }
    return next
}
console.log(Fibonacci(9))