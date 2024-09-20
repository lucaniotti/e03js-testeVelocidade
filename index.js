function compararVelocidade() {
    // Obter os valores dos veículos e suas velocidades
    const veiculo1 = document.getElementById('veiculo1').value;
    const velocidade1 = Number(document.getElementById('velocidade1').value);
    const veiculo2 = document.getElementById('veiculo2').value;
    const velocidade2 = Number(document.getElementById('velocidade2').value);

    let mensagem = "";

    // Comparar as velocidades
    if (velocidade1 > velocidade2) {
        mensagem = `${veiculo1} é mais rápido que ${veiculo2}.`;
    } else if (velocidade1 < velocidade2) {
        mensagem = `${veiculo2} é mais rápido que ${veiculo1}.`;
    } else {
        mensagem = `${veiculo1} e ${veiculo2} têm a mesma velocidade.`;
    }

    // Exibir o resultado
    document.getElementById('mensagem').innerText = mensagem;
    document.getElementById('resultado').style.display = 'block';
}