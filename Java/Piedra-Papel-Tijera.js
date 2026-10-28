let ganadas = 0;
let perdidas = 0;
let empatadas = 0;
let partidas = 0;


function juego(jugador) {

    const opciones = ["piedra", "papel", "tijeras"];
    const maquina = opciones[Math.floor(Math.random() * opciones.length)];
    let mensaje;
    partidas++;
    if (jugador == maquina) {
        mensaje = "Empate";
        empatadas++;
    } 

    else if (
        // Operadores lógico AND (&&) y OR ()
        (jugador == "piedra" && maquina == "tijeras") ||
        (jugador == "tijeras" && maquina == "papel") ||
        (jugador == "papel" && maquina == "piedra")
    ) {
        mensaje = "Gana jugador";
        ganadas++;
    } else {
        mensaje = "Gana maquina";
        perdidas++;
    }


}

document.getElementById("marcador").textContent =
"Partidas: jugadas: " + partidas;
document.getElementById("ganadas").textContent = "Ganadas: " + ganadas;
document.getElementById("empatadas").textContent = "Empatadas: " + empatadas;
document.getElementById("perdidas").textContent = 'Derrotas: ${perdidas}';