AOS.init();

const aniversario = new Date("may 28, 2026 00:01:00");
const dataAniversario = aniversario.getTime();

const contagem = setInterval(function() {
    const agora = new Date();
    const horaAtual = agora.getTime();

    const ateAniversario = dataAniversario - horaAtual;
    const diaMs = 1000 * 60 * 60 * 24;
    const horaMs = 1000 * 60 * 60;
    const minMs = 1000 * 60

    const diasAteAniversario = Math.floor(ateAniversario / diaMs);
    const horasAteAniversario = Math.floor((ateAniversario % diaMs) / horaMs);
    const minutosAteAniversario = Math.floor((ateAniversario % horaMs) / minMs);
    const segundosAteAniversario = Math.floor((ateAniversario % minMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteAniversario}d ${horasAteAniversario}h ${minutosAteAniversario}m ${segundosAteAniversario}s`


}, 1000)