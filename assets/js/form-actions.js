// Reemplaza por tus claves reales de EmailJS
emailjs.init("WSD5O1j04bUHNdOTG");

window.enviarFormulario = function(event) {
  event.preventDefault();

  const service = "service_pe185vm";     // ← cambia por tu verdadero Service ID
  const template = "template_0gfq9ou";   // ← cambia por tu Template ID

  const templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    number_guests: document.getElementById("number-guests").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    message: document.getElementById("message").value,
  };

  const submitBtn = document.getElementById("form-submit");
  submitBtn.disabled = true;
  submitBtn.textContent = "Enviando...";

  emailjs.send(service, template, templateParams)
    .then(() => {
        Swal.fire({
        icon: "success",
        title: "¡Reserva enviada!",
        text: "Te responderemos pronto por WhatsApp o correo 😊",
        confirmButtonText: "Aceptar"
      });
      submitBtn.disabled = false;
      submitBtn.textContent = "Reservar";
      document.getElementById("contact").reset();
    })
    .catch((error) => {
      console.error("❌ Error al enviar:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al enviar tu reserva. Intenta de nuevo.",
        confirmButtonText: "Cerrar"
      });
      submitBtn.disabled = false;
      submitBtn.textContent = "Reservar";
    });
};
