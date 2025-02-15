let listaNomes = [];
let nomesSorteados = [];

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;

    if (amigo) {
        listaNomes.push(amigo);
        atualizarListaAmigos();
        limparCampo();
    } else {
        alert('Por favor, insira um nome.');
    }
}

function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < listaNomes.length; i++) {
        let criarLista = document.createElement('li');
        criarLista.textContent = listaNomes[i];
        listaAmigos.appendChild(criarLista);
    }

}

function sortearAmigo() {
    let campoAmigo = document.getElementById('amigo');
    campoAmigo.value = '';
}

function sortearAmigo() {
    let campoAmigoSorteado = document.getElementById('resultado');

    if (listaNomes.length == 0){
        alert('Adicione nomes a lista!');
    } else if (nomesSorteados.length == listaNomes.length){
        alert('Todos os nomes já foram sorteados!')
        nomesSorteados = []
    } else {
        let amigoAleatorio;
        do {
            amigoAleatorio = Math.floor(Math.random() * listaNomes.length);
       } while (nomesSorteados.includes(listaNomes[amigoAleatorio]));

       nomesSorteados.push(listaNomes[amigoAleatorio]);
       campoAmigoSorteado.innerHTML = ` O amigo secreto é ${listaNomes[amigoAleatorio]}`;
       lançarconfetti();
    }
}

function lançarconfetti() {
    confetti({
        particleCount: 500,
        spread: 160,
        origin: { x:0.5, y: 0.5 }
    });
}