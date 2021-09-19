const numberBtn = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "zero",
];
const executionId = {
    add: "add-btn",
    mul: "multiply-btn",
    sub: "subtract-btn",
    div: "divide-btn",
    percent: "percent-btn",
    divide: "divide",
    equal: "equal-btn",
    reset: "reset-btn",
};

function selector(element) {
    return document.querySelector(element);
}

function click(dom, callback) {
    dom.addEventListener("click", callback);
}

const input = selector("#input");

numberBtn.forEach((btn) => {
    const numBtn = selector("#" + btn);
    click(numBtn, (e) => {
        input.value += e.target.innerText;
    });
});
let initialFunc;
let output;
function execute(e) {
    try {
        let inputNum = parseFloat(input.value);
        let isInputcorrect = typeof input.value;
        console.log(e.target.id);
        console.log(isInputcorrect);
        const clickedBtnId = Object.values(executionId).find(
            (id) => e.target.id === id
        );

        switch (clickedBtnId) {
            case executionId.add:
                initialFunc = add(inputNum);
                console.log(initialFunc);
                input.value = "";
                break;
            case executionId.div || executionId.divide:
                initialFunc = divide(inputNum);
                input.value = "";
                break;
            case executionId.sub:
                initialFunc = subtract(inputNum);
                input.value = "";
                break;
            case executionId.mul:
                initialFunc = multiply(inputNum);
                input.value = "";
                break;
            case executionId.percent:
                output = percent(inputNum);
                break;
            case executionId.reset:
                output = "";
                break;
            case executionId.equal:
                output = initialFunc(inputNum);
                break;
            case "default":
                break;
        }
        input.value = output;
    } catch (err) {
        alert(err.message);
    }
}
console.log();
Object.values(executionId).forEach((btn) => {
    const btnId = selector("#" + btn);
    click(btnId, execute);
});

const add = (a) => {
    return (b) => a + b;
};
const subtract = (a) => {
    return (b) => a - b;
};
const multiply = (a) => {
    return (b) => a * b;
};
const percent = (a) => {
    let x = a < 1 ? a * 100 : "";
    return x;
};
const divide = (a) => {
    return (b) => a / b;
};
