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

    return n_primo
}

module.exports = {
    verificarNumeroPrimo
}