function calcularNivel(saldoVitoria, saldoDerrota) {
    let saldoRankeados = saldoVitoria - saldoDerrota;
    let nivel;

    if (saldoVitoria < 10) {
        nivel = 'Ferro';
    } else if (saldoVitoria >= 11 && saldoVitoria <= 20) {
        nivel = 'Bronze';
    } else if (saldoVitoria >= 21 && saldoVitoria <= 50) {
        nivel = 'Prata';
    } else if (saldoVitoria >= 51 && saldoVitoria <= 80) {
        nivel = 'Ouro';
    } else if (saldoVitoria >= 81 && saldoVitoria <= 90) {
        nivel = 'Diamante';
    } else if (saldoVitoria >= 91 && saldoVitoria <= 100) {
        nivel = 'Lendário';
    } else if (saldoVitoria >= 101) {
        nivel = 'Imortal';
    }

    return { saldoRankeados, nivel };
}

let vitoria = parseInt(prompt("Digite a quantidade de vitórias:"));
let derrota = parseInt(prompt("Digite a quantidade de derrotas:"));

let { saldoRankeados, nivel } = calcularNivel(vitoria, derrota);
console.log(`O Herói tem um saldo de ${saldoRankeados} e está no nível de ${nivel}`);