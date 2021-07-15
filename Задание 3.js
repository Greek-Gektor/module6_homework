
function getSum(num1) {
    return function getSum2(num2) {
        console.log(num1 + num2)
    }
}

let result = getSum(1)

result(20);