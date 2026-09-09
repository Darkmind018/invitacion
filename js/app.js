document.addEventListener('DOMContentLoaded', () => {
  
  const btnAbrir = document.getElementById('btn-abrir');
  const pantallaSobre = document.getElementById('pantalla-sobre');
  const musica = document.getElementById('bg-music');
  const btnPausa = document.getElementById('btn-pausa');
  let sonando = false;

  if (btnAbrir && pantallaSobre) {
    btnAbrir.addEventListener('click', () => {
      pantallaSobre.classList.add('sobre-oculto');
      
      if (musica) {
        musica.play().then(() => {
          sonando = true;
        }).catch(err => console.log("Autoplay bloqueado:", err));
      }
    });
  }

  if (btnPausa && musica) {
    btnPausa.addEventListener('click', () => {
      if (sonando) {
        musica.pause();
        btnPausa.textContent = '🔇';
      } else {
        musica.play();
        btnPausa.textContent = '🎵';
      }
      sonando = !sonando;
    });
  }

  const fechaFiesta = new Date('2026-11-13T20:00:00').getTime();

  setInterval(() => {
    const ahora = new Date().getTime();
    const distancia = fechaFiesta - ahora;

    if (distancia > 0) {
      document.getElementById('dias').innerText = Math.floor(distancia / (1000 * 60 * 60 * 24));
      document.getElementById('horas').innerText = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      document.getElementById('min').innerText = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
      document.getElementById('seg').innerText = Math.floor((distancia % (1000 * 60)) / 1000);
    }
  }, 1000);

  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('aparecer');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observador.observe(el));

  const btnWhatsapp = document.getElementById('btn-whatsapp');
  if (btnWhatsapp) {
    btnWhatsapp.addEventListener('click', () => {
      const telefono = "51910803254"; 
      const texto = "Hola confirmo mi asistencia a tus 15 años.";
      window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`, '_blank');
    });
  }

});