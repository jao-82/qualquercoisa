document.addEventListener("DOMContentLoaded", function () {
    const startDate = new Date("2024-07-20T00:00:00");

    function updateTime() {
        const now = new Date();

        // Cálculo da diferença entre as datas
        let years = now.getFullYear() - startDate.getFullYear();
        let months = now.getMonth() - startDate.getMonth();
        let days = now.getDate() - startDate.getDate();
        let hours = now.getHours() - startDate.getHours();
        let minutes = now.getMinutes() - startDate.getMinutes();
        let seconds = now.getSeconds() - startDate.getSeconds();

        // Ajusta para meses negativos
        if (months < 0) {
            years--;
            months += 12;
        }

        // Ajusta para dias negativos
        if (days < 0) {
            months--;
            const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
            days += previousMonth.getDate();
        }

        // Ajusta para horas, minutos e segundos negativos
        if (hours < 0) {
            days--;
            hours += 24;
        }
        if (minutes < 0) {
            hours--;
            minutes += 60;
        }
        if (seconds < 0) {
            minutes--;
            seconds += 60;
        }

        // Atualiza os valores na página
        document.getElementById("years").textContent = years.toString().padStart(2, '0');
        document.getElementById("months").textContent = months.toString().padStart(2, '0');
        document.getElementById("days").textContent = days.toString().padStart(2, '0');
        document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
    }

    setInterval(updateTime, 1000);
    updateTime(); // Atualiza o contador imediatamente ao carregar a página

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
});

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

