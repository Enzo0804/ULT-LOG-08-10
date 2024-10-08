function media(num1, num2, num3){
    let soma = num1 + num2 + num3;//calcula a soma dos dois numero
    let media = soma / 3; //calcula a media
    return Math.round (media * 100)//Aredonda pra duas casas decimais
}
console.log(media(4, 6, 8)); 
console.log(media(10, 20, 30));