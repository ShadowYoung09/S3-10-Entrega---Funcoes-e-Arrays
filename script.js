function maratonKenzie(firstPlace, secondPlace, lastPlace){
    const posicao = ['1°-Colocado ', firstPlace, '2°-Colocado ', secondPlace, '3°-Colocado ', lastPlace];
    if(lastPlace == 'Daniel'){
        posicao.splice(1, 0, 'Daniel')
        posicao.splice(3, 1)
    }
    if(secondPlace == 'Daniel'){
        posicao.splice(0, 0, 'Daniel')
        posicao.splice(2, 1)
    }
    console.log(posicao)
}



