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
    "decimal",
];

const executionId = {
    add: "add-btn",
    mul: "multiply-btn",
    sub: "subtract-btn",
    div: "divide-btn",
    percent: "percent-btn",
    divide: "divide",
    equal: "equal-btn",
    del: "del-btn",
    reset: "reset-btn",
};

function selector(element) {
    return document.querySelector(element);
}

function click(dom, callback) {
    dom.addEventListener("click", callback);
}

const input = selector("#input");
const dispaly = selector(".input-display");

window.addEventListener("load", () => {
    input.value = "";
});

numberBtn.forEach((btn) => {
    const numBtn = selector("#" + btn);
    click(numBtn, (e) => {
        if (e.target.id === "decimal") {
            input.value.includes(".")
                ? alert("You can use decimal only once")
                : (input.value += ".");
        } else {
            input.value += e.target.innerText;
            console.log(e.target.innerText);
        }
    });
});

let initialFunc;
let output;
function execute(e) {
    try {
        let inputNum = parseFloat(input.value);
        console.log(e.target.id);
        const clickedBtnId = Object.values(executionId).find(
            (id) => e.target.id === id
        );

        switch (clickedBtnId) {
            case executionId.add:
                initialFunc = add(inputNum);
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
            case executionId.del:
                let str = inputNum.toString();
                let len = str.length;
                console.log(str);
                newStr = str.substr(0, len - 1);
                console.log(newStr);
                input.value = newStr;
                break;
            case executionId.mul:
                initialFunc = multiply(inputNum);
                input.value = "";
                break;
            case executionId.percent:
                output = percent(inputNum);
                input.value = output;
                break;
            case executionId.reset:
                output = "";
                input.value = output;
                break;
            case executionId.equal:
                output = initialFunc(inputNum);
                input.value = output;
                break;
            case "default":
                input.value = "";
                input.value = output;
                break;
        }
    } catch (err) {
        console.log(err.message);
        return;
    }
}

Object.values(executionId).forEach((btn) => {
    const btnId = selector("#" + btn);
    click(btnId, execute);
});

//Actions
const add = (a) => {
    let str = `${a}+`;
    dispaly.innerText = str;
    return (b) => {
        str = `${a}+${b}`;
        dispaly.innerText = str;
        return eval(str);
    };
};
const subtract = (a) => {
    let str = `${a} - `;
    dispaly.innerText = str;
    return (b) => {
        str = `${a}-${b}`;
        dispaly.innerText = str;
        return eval(str);
    };
};
const multiply = (a) => {
    let str = `${a}X`;
    dispaly.innerText = str;
    return (b) => {
        str = `${a}*${b}`;
        dispaly.innerText = str;
        return eval(str);
    };
};
const percent = (a) => {
    let x = a < 1 ? a * 100 : a;
    let str = `% of ${a}`;
    dispaly.innerText = str;
    return x;
};
const divide = (a) => {
    let str = `${a} /`;
    dispaly.innerText = str;
    return (b) => {
        str = `${a}/${b}`;
        dispaly.innerText = str;
        return eval(str);
    };
};
