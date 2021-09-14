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
const executionBtn = ["add", "multiply", "subtract", "divide", "percentage"];

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
