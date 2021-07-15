function isPrime (num) {
    if(isNaN(num) || num > 1000 || num < 0){
        console. log(`Ошибка ввода данных, введите число от 0 до 1000`)
    }else if(num === 0 || num === 1){
        console.log(`Это число не является простым`)
    } else {
        for (let i = 2; i <= num; i++){
            if(num % i === 0){
                console.log(`Это число не является простым`)
                break;
            } else {
                console.log(`Это число простое`)
                break;
            }
        }
    }
}

let userNum = prompt(`Введите значение от 0 до 1000`)

userNum = +userNum

isPrime(userNum);