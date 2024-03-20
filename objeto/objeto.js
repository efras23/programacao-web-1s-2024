let calculadora = {
    numeroA: 0,
    numeroB: 0,
    somar: function (){
        return this.numeroA + this.numeroB
    }
}

calculadora.numeroA = 2
calculadora.numeroB = 3

console.log(calculadora.somar())

const pessoa = {
    nome: "Efraim",
    cpf: 123456789,
    telefone: 619999933333
}

console.log(pessoa)

for (const key in pessoa){
    console.log(key)
}

for (const key in pessoa){
    console.log(key + ' - ' + pessoa[key])
}

let arr = [0,1,2,3,"onze",56,68]

for (const key in arr){
    console.log(key + ' - ' + arr[key])
}

let matriz = [[1,2],[3,4]]