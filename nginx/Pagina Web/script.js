


particlesJS("particles-js", {
  particles: {
    number: {
      value: 80
    },
    color: {
      value: "#38bdf8"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5
    },
    size: {
      value: 3
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#e4a",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      }
    }
  }
});



function actualizarFecha() {
  const ahora = new Date();

  const fecha = ahora.toLocaleDateString("es-CO", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });

  const hora = ahora.toLocaleTimeString("es-CO");

  document.getElementById("fecha").innerHTML =
    "📅 " + fecha + " | ⏰ " + hora;
}

setInterval(actualizarFecha, 1000);
actualizarFecha();
