let jugador = "piedra";
let maquina = "tijeras";
function jugar(jugador, maquina) {


if (jugador === maquina) {
    console.log("¡Empate!");
}

else if (
(jugador === "piedra" && maquina === "tijeras") ||
(jugador === "papel" && maquina === "piedra") ||
(jugador === "tijeras" && maquina === "papel")
) {
    console.log("¡Ganaste!");
}
else {
    console.log("¡Perdiste!");
}

let jugador1 = "piedra"; let maquina1 = "tijeras";
jugar(jugador1, maquina1);

let jugador2 = "papel"; let maquina2 = "piedra";
jugar(jugador2, maquina2);