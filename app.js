function criaCartão(categoria,pergunta,resposta){
    let container = document.getElementById('container')
    let cartão = document.createElement('article')
    cartão.className ='cartão'

    cartão.innerHTML= `
    <div class="cartão__conteudo">
    <h3> ${categoria}</h3>
    <div class="cartão_conteudo_pergunta>
        <p>${pergunta}</p>
    </div>
    <div class="cartão_conteudo_resposta>
        <p>${resposta}</p>
    </div>
    </div>
    `
    container.appendChild(cartã0)
    console.log(categoria,pergunta,resposta)  
}