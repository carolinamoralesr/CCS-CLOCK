  // Seleccionar las manecillas del reloj
  const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  // Función que actualiza la posición de las manecillas
  function setDate() {
    const now = new Date(); // Obtener la hora actual

    // Obtener los segundos actuales y convertirlos en grados de rotación
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90; // 90 grados extra para corregir el punto inicial
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // Aplicar rotación a la manecilla de los segundos

    // Obtener los minutos actuales y ajustar la rotación
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90; // Ajustar rotación dependiendo de los segundos
    minsHand.style.transform = `rotate(${minsDegrees}deg)`; // Aplicar rotación a la manecilla de los minutos

    // Obtener las horas actuales y ajustar la rotación
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90; // Ajustar rotación dependiendo de los minutos
    hourHand.style.transform = `rotate(${hourDegrees}deg)`; // Aplicar rotación a la manecilla de las horas
  }

  // Actualizar el reloj cada segundo
  setInterval(setDate, 1000);

  // Llamar a la función inmediatamente para ajustar el reloj al cargar la página
  setDate();