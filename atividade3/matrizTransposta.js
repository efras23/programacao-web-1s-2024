function transporMatriz(A){
    //criando matriz transposta (vazia)
    let AT = []
    for (let i = 0; i < A[0].length; i++){
        AT[i] = []
    }

    //preenchendo matriz transposta
    for (let i = 0; i < AT.length; i++){
        for (let j = 0; j < A.length; j++){
            AT[i][j] = A[j][i]
        }
    }

    console.log("\nMatriz:")
    for (const key in A){
        console.log(A[key])
    }
    console.log("\nMatriz (transposta):")
    for (const key in AT){
        console.log(AT[key])
    }
    console.log("")
}

let matriz = [[1,2],[3,4],[5,6]]

transporMatriz(matriz)