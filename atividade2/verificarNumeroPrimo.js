/*
    Verificar se número é primo.
    Caso seja, imprime "true"; senão, "false"
*/

function verificarNumeroPrimo(n){
    const metade_de_n = n / 2
    let quant_divisores = 2
    let n_primo = false

    switch(n){
        case 0:
            n_primo = false
            break
        case 1:
            n_primo = false
            break
        case 2:
            n_primo = true
            break
        default:
            for(let i = 2; i <= metade_de_n && quant_divisores <= 2; i++){
                if(n % i == 0){
                    quant_divisores++
                }
            }
            if(quant_divisores <= 2){
                n_primo = true
            }
            break
    }

    console.log(`${n_primo}`)
}

verificarNumeroPrimo(0)
verificarNumeroPrimo(1)
verificarNumeroPrimo(2)
verificarNumeroPrimo(3)
verificarNumeroPrimo(7)
verificarNumeroPrimo(83)
verificarNumeroPrimo(100)
verificarNumeroPrimo(991)
verificarNumeroPrimo(104729)
verificarNumeroPrimo(14348907)