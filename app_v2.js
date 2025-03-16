let participantes = [];

function agregarParticipante() {
    let nombre = document.getElementById("nombre").value.trim();
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    if (participantes.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }
    participantes.push(nombre);
    document.getElementById("nombre").value = "";
    mostrarParticipantes();
}

function mostrarParticipantes() {
    let lista = document.getElementById("listaParticipantes");
    lista.innerHTML = "";
    lista.style.display = "block"; // Asegurar que se muestra al agregar nombres

    participantes.forEach((nombre, index) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = () => eliminarParticipante(index);
        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}

function eliminarParticipante(index) {
    participantes.splice(index, 1);
    mostrarParticipantes();
}

function ocultarLista() {
    document.getElementById("listaParticipantes").style.display = "none";
}

function realizarSorteo() {
    if (participantes.length < 2) {
        alert("Debe haber al menos dos participantes para realizar el sorteo.");
        return;
    }
    let nombreAleatorio = participantes[Math.floor(Math.random() * participantes.length)];
    let resultadoDiv = document.getElementById("resultadoSorteo");
    resultadoDiv.innerHTML = `<p class="resultado-estilizado">🎉 El amigo secreto sorteado es: <strong>${nombreAleatorio}</strong></p>`;
    
    ocultarLista(); // Oculta la lista después de mostrar el resultado
}

function reiniciarLista() {
    participantes = [];
    document.getElementById("listaParticipantes").innerHTML = "";
    document.getElementById("resultadoSorteo").textContent = "";
    document.getElementById("listaParticipantes").style.display = "block"; // Vuelve a mostrar la lista al reiniciar
}
