function calculadora(num1, num2, op){
    switch(op){
        case '+':
            console.log(`${num1} + ${num2} = ${num1 + num2}`)
            break
        case '-':
            console.log(`${num1} - ${num2} = ${num1 - num2}`)
            break
        case '*':
            console.log(`${num1} * ${num2} = ${num1 * num2}`)
            break
        case '/':
            console.log(`${num1} / ${num2} = ${num1 / num2}`)
            break
        default:
            console.log(`Operação inválida!`)
    }
}

module.exports = {
    calculadora
}