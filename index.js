let nome = prompt ("Digite seu nome")

alert(`Ola ${nome} seja bem vindo`)

let confirmação = confirm("Seu nome esta correto?")

if (confirmação == true){
} else if(confirmação == false){
        alert("Sugerimos recarregar a pagina para tentar novamente")
}
let perguntas = confirm("irei fazer algumas perguntas ok?")
if(perguntas == true){
        prompt(`Selecione o numero que melhor se adequar a pergunta ok Sr${nome}`)
       
}

let feliz = prompt("Voce se sente feliz? Escreva de 1 a 5")
let inteligente = prompt("Voce se acha alguém de intelectual bom? Escreva de 1 a 5")
let triste = prompt("O quão triste voce foi nos ultimos dias? Escreva de 1 a 5")

alert("Agora por favor faça a soma de todos e escreva na proxima caixa de mensagens")

let resultado = prompt("Por favor digite a conta")

if (resultado >= 15){
    alert("Devemos pensar melhor em como melhorar em alguma parte, se o resultado foi maior que 15 ou igual a isso, sinal que esteve triste esses tempos ")
} else if (resultado <= 10,9,8,7 ){
    alert("Engraçado que parece estar tudo bem e equilibrado, mas se olhar melhor, bom , talvez nao deveria pensar tao positivamente")
} else if (resultado < 7){
    alert("Ok aqui talvez esteja um bom equilibrio")
} else{
}

alert("Obrigado por participar desse questionario rapido e bobo")