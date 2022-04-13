function maratonKenzie(firstPlace, secondPlace, lastPlace){
    const posicao = [firstPlace, secondPlace, lastPlace];
    if(lastPlace == 'Daniel'){
        posicao.splice(1, 0, 'Daniel')
        posicao.splice(3, 1)
    }
    if(secondPlace == 'Daniel'){
        posicao.splice(0, 0, 'Daniel')
        posicao.splice(2, 1)
    }
    return posicao
}

console.log(maratonKenzie('Rafael', 'Daniel', 'Manoel'))
console.log(maratonKenzie('Rafael', 'Manoel', 'Daniel'))

