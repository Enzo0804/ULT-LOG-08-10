/*function contarVogais(str){
    let contador = 0;
    const vogais = 'aeiouAEIOU';
    for(let i = 0; i < str.lenght; i++) {
        if (vogais.includes(str[i])) {
            contador++;
        }
    }
    return contador;
}
console.log(contarvogais("Ola, mundo"));
console.log(contarvogais("Java script e divertido"));
*/
function contarVogais(str) {
    let contador = 0; // Inicializa o contador de vogais
    const vogais = 'aeiouAEIOU'; // Define as vogais a serem contadas
 
    for (let i = 0; i < str.length; i++) {
        if (vogais.includes(str[i])) { // Verifica se o caractere atual é uma vogal
            contador++; // Incrementa o contador
        }
    }
    return contador; // Retorna o total de vogais encontradas
}
// Exemplo de uso
console.log(contarVogais("Ola, mundo")); // 4
console.log(contarVogais("JavaScript e divertido")); // 8