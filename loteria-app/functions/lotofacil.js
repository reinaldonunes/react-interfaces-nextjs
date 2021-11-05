export function lotofacil(quant=15, num = []){  
    // verifica se os números estão dentro do requisitado
    if(quant < 15 && quant > 25){ 
        throw "Quantidade inválida"
    }

    //sorteia os numeros se estiver dentro do esperado
    if(num.length === quant){
        return num.sort((n1, n2) => n1 - n2)
    }

    //gera um número aleatório
    const randNumber = parseInt(Math.random() * 25) + 1

    if(!num.includes(randNumber)){
        return lotofacil(quant, [...num, randNumber])
    }else{
        return lotofacil(quant, num)
    }
}

