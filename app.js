let listaAmigos = [];

function agregarAmigo() {
    const InputAgregarAmigo = document.getElementById("AmigoSecreto");
    const nombreAmigo = InputAgregarAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("Ingresa un nombre válido, no puedes dejar el campo vacío.");
        return;
    }

    if (listaAmigos.includes(nombreAmigo)) {
        alert("Este amigo ya está en la lista.");
        return;
    }

    listaAmigos.push(nombreAmigo);
    InputAgregarAmigo.value = "";
    mostrarLista();
    console.log(`Amigo añadido: ${nombreAmigo}`);
    console.log(listaAmigos);
}

function mostrarResultados(amigoSorteado) {
    const listaResultados = document.getElementById("resultadoAmigo");
    listaResultados.innerHTML = "";

    const li = document.createElement("li");
    li.textContent = `Tu amigo sorteado es: ${amigoSorteado}`;
    listaResultados.appendChild(li);
}

function limpiarLista() {
    listaAmigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultadoAmigo").innerHTML = "";
    document.getElementById("AmigoSecreto").value = "";
    console.log("Lista de amigos y resultados limpiados.");
}

function sortearAmigo() {
    if (listaAmigos.length < 1) {
        alert("Por favor, añade al menos un amigo para realizar el sorteo.");
        return;
    }

    // se selecciona un amigo aleatorio de la lista
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];

    // Limpiar la lista de amigos mostrada
    document.getElementById("listaAmigos").innerHTML = "";
    // Mostrar el resultado
    mostrarResultados(amigoSorteado);
    // Reiniciamos la lista
    setTimeout(() => {  
        limpiarLista();
        console.log("Lista de amigos reiniciada.");
    }, 10000); //esperamos 10 segundos para que el usuario vea el resultado antes de limpiar la lista
}

function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    listaAmigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function mostrarInstrucciones() {
    alert("\n1. Ingresa cada nombre que quieras añadir para sortear.\n2. Luego, Haz clic en 'Añadir Nuevo Amigo' para agregar cada nombre a la lista.\n3. Cuando hayas agregado al menos dos amigos, haz clic en 'Sortear Amigo Secreto' para realizar el sorteo.\n4. Los resultados se mostrarán en la lista que se mostro los amigos agregados a la lista.\n5. La lista se limpiara luego de 10 segundos, para que asi vuelvas a sortear un nuevo amigo en nuestro minijuego.");
} 