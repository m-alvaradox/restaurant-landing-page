import emailjs from '@emailjs/browser';

// form-actions.js
export function enviarFormulario(event) {
  event.preventDefault(); // Evita recargar la página

  const user = import.meta.env.VITE_EMAILJS_USER_ID; // Reemplaza con tu User ID de EmailJS
  const service = import.meta.env.VITE_EMAILJS_SERVICE_ID; // Reemplaza con tu Service ID de EmailJS
  const template = import.meta.env.VITE_EMAILJS_TEMPLATE_ID; // Reemplaza con tu Template ID de EmailJS


  emailjs.init(user); // Reemplaza con tu User ID de EmailJS

  const templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    number_guests: document.getElementById("number-guests").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    message: document.getElementById("message").value,
  };

  emailjs.send(service, template, templateParams)
    .then(() => {
      alert("✅ Reserva enviada correctamente");
      document.getElementById("contact").reset();
    })
    .catch((error) => {
      console.error("❌ Error al enviar:", error);
      alert("Error al enviar el formulario");
    });
}
