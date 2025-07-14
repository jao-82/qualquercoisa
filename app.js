document.addEventListener("DOMContentLoaded", function () {
  const startDate = new Date("2024-07-20T00:00:00");

  function updateTime() {
    const now = new Date();

    // Cálculo bruto
    let years   = now.getFullYear()  - startDate.getFullYear();
    let months  = now.getMonth()     - startDate.getMonth();
    let days    = now.getDate()      - startDate.getDate();
    let hours   = now.getHours()     - startDate.getHours();
    let minutes = now.getMinutes()   - startDate.getMinutes();
    let seconds = now.getSeconds()   - startDate.getSeconds();

    // 1) Ajusta dias negativos (pode “puxar” meses para baixo)
    if (days < 0) {
      months--;
      // pega o número de dias do mês anterior a 'now'
      const prevMonthDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      days += prevMonthDays;
    }

    // 2) Agora sim, ajusta meses negativos (seja por causa do passo anterior,
    //    ou porque estamos antes do mês de julho)
    if (months < 0) {
      years--;
      months += 12;
    }

    // 3) Ajustes de horas/minutos/segundos, igual a você já tinha:
    if (hours < 0)   { days--;    hours   += 24; }
    if (minutes < 0) { hours--;   minutes += 60; }
    if (seconds < 0) { minutes--; seconds += 60; }

    // Atualiza na página
    document.getElementById("years"  ).textContent = String(years).padStart(2, '0');
    document.getElementById("months" ).textContent = String(months).padStart(2, '0');
    document.getElementById("days"   ).textContent = String(days).padStart(2, '0');
    document.getElementById("hours"  ).textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
  }

  setInterval(updateTime, 1000);
  updateTime();
});
// Atualiza o contador imediatamente ao carregar a página

    // Bloco do player de áudio
    const audioPlayer = document.getElementById('audio-player');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const volumeSlider = document.getElementById('volume-slider');
    let isPlaying = false;

    // Alterna entre reproduzir e pausar
    playPauseBtn.addEventListener('click', () => {
        if (isPlaying) {
            audioPlayer.pause();
            playPauseBtn.textContent = '▶️'; // Muda o ícone para play
        } else {
            audioPlayer.play().catch((error) => {
                alert("Não foi possível reproduzir o áudio. Verifique o link ou as configurações do navegador.");
            });
            playPauseBtn.textContent = '⏸️'; // Muda o ícone para pause
        }
        isPlaying = !isPlaying;
    });

    // Controla o volume
    volumeSlider.addEventListener('input', (e) => {
        audioPlayer.volume = e.target.value / 100;
    });

    // Inicializa o volume com o valor atual do slider
    audioPlayer.volume = volumeSlider.value / 100;


document.addEventListener("DOMContentLoaded", function () {
    const heartsContainer = document.createElement("div");
    heartsContainer.classList.add("hearts");
    document.body.appendChild(heartsContainer);

    // Gera 50 corações
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heartsContainer.appendChild(heart);
    }
});

