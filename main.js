//1
function returnMinimumNumber (a, b) {
    if(a < b){
        return a
    } else {
        return b
    }
}

console.log(returnMinimumNumber(7, 8))

//2

function stringLength (string = prompt('Введите текст чтобы узнать его длину')) {
    return string.length
}

console.log(stringLength())

//3

function miniCalc (a, b){
    console.log(a + b, 'Сложение')
    console.log(a - b, 'Вычитание')
    console.log(a * b, 'Умножение')
    console.log(a / b, 'Деление')
}

miniCalc(1,2)




