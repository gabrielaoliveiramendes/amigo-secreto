let amigos = [];

function adicionar(){
    let amigo = document.getElementById("nome-amigo");
    let lista = document.getElementById("lista-amigos");

    if (amigo.value.trim() == "") {
        alert("Insira um nome.");
        amigo.value = "";
        return;
    }

    if (amigos.includes(amigo.value)){
        alert(`O nome ${amigo.value} já foi inserido. Digite um novo nome!`);
    } else {
        amigos.push(amigo.value);

        if (lista.textContent == ""){
            lista.textContent = amigo.value;
        } else {
            lista.textContent = lista.textContent + ", " + amigo.value;
        }
    }

    // limpar campo
    amigo.value = "";
}

function sortear(){
    if (amigos.length < 4) {
        alert("Insira, no mínimo, quatro nomes para realizar o sorteio.");
        return;
    }

    embaralha(amigos);
    let sorteio = document.getElementById("lista-sorteio");

    for (let i = 0; i < amigos.length; i++){

        if(i == amigos.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + " --> " + amigos[0] + "<br>";
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + " --> " + amigos[i + 1] + "<br>";
        }
    }
}

// Algoritmo Fisher–Yates shuffle
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    amigos = [];
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
}

//sortear apenas quando tiver mais de quatro nomes (alert: insina, no mínimo, quatro nomes)