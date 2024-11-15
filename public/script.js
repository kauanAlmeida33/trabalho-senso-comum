// Exemplo de dados mockados
const services = [
    { id: 1, name: "Instalação de Ar-Condicionado", price: "150.00" },
    { id: 2, name: "Reparo Elétrico", price: "120.00" },
    { id: 3, name: "Pintura de Parede", price: "300.00" },
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const servicesList = document.getElementById("services-list");
    
    services.forEach(service => {
      const serviceDiv = document.createElement("div");
      serviceDiv.innerHTML = `
        <h3>${service.name}</h3>
        <p>Preço: R$${service.price}</p>
      `;
      servicesList.appendChild(serviceDiv);
    });
  
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", event => {
      event.preventDefault();
      alert("Mensagem enviada! Entraremos em contato em breve.");
    });
  });
  