let a = prompt("enter a num1");
let b = prompt("enter a num2");
let c = a * b;

function abc(a, b) {
    console.log(`output is ${c}`);
    return c;
}

function xyz(x, y) {
    let number = abc(x, y);
    let root = number > 0 && Math.sqrt(number) % 1 === 0;      /* formula for perfect square*/
    root ? console.log(`perfect square`) : console.log(`not a perfect square`);
}
xyz(a,b)
