function calcularNivel(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";
    if (vitorias <= 10){
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20){
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50){
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80){
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90){
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100){
        nivel = "Lendário";
    } else if (vitorias >= 101){
        nivel = "Imortal";
    }
    console.log(`O herói tem saldo de ${saldoVitorias} e está no nível ${nivel}.`);
}

// Exemplo de uso
calcularNivel(10, 2);  // Ferro
calcularNivel(15, 3);  // Bronze
calcularNivel(35, 5);  // Prata
calcularNivel(55, 4);  // Ouro
calcularNivel(83, 1);  // Diamante
calcularNivel(95, 4);  // Lendário
calcularNivel(120, 4); // Imortal
