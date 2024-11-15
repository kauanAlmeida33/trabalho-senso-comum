// Dados mockados de serviços e profissionais
const services = [
    { id: 1, name: "Instalação de Ar-Condicionado", professionals: [{ name: "João", price: "150.00" }, { name: "Maria", price: "170.00" }] },
    { id: 2, name: "Reparo Elétrico", professionals: [{ name: "Carlos", price: "120.00" }, { name: "Ana", price: "140.00" }] },
    { id: 3, name: "Pintura de Parede", professionals: [{ name: "Pedro", price: "300.00" }, { name: "Luiza", price: "320.00" }] },
    { id: 4, name: "Reparos Hidráulicos", professionals: [{ name: "Marcos", price: "200.00" }, { name: "Fernanda", price: "250.00" }] },
    { id: 5, name: "Limpeza Pós-Obra", professionals: [{ name: "José", price: "350.00" }, { name: "Rafaela", price: "370.00" }] },
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const servicesList = document.getElementById("services-list");
    const professionalsList = document.getElementById("professionals-list");
    const searchBar = document.getElementById("search-bar");
    const professionalsSection = document.getElementById("professionals");
    const servicesSection = document.getElementById("services");
    const backToServicesButton = document.getElementById("back-to-services");
  
    // Função para renderizar serviços
    const renderServices = (filteredServices) => {
      servicesList.innerHTML = "";
      filteredServices.forEach(service => {
        const serviceDiv = document.createElement("div");
        serviceDiv.innerHTML = `<h3>${service.name}</h3>`;
        serviceDiv.addEventListener("click", () => showProfessionals(service));
        servicesList.appendChild(serviceDiv);
      });
    };
  
    // Função para mostrar profissionais de um serviço
    const showProfessionals = (service) => {
      servicesSection.classList.add("hidden");
      professionalsSection.classList.remove("hidden");
      professionalsList.innerHTML = "";
  
      service.professionals.forEach(professional => {
        const professionalDiv = document.createElement("div");
        professionalDiv.innerHTML = `
          <h4>${professional.name}</h4>
          <p>Preço: R$${professional.price}</p>
        `;
        professionalsList.appendChild(professionalDiv);
      });
    };
  
    // Função para retornar à lista de serviços
    backToServicesButton.addEventListener("click", () => {
      professionalsSection.classList.add("hidden");
      servicesSection.classList.remove("hidden");
    });
  
    // Filtro da barra de pesquisa
    searchBar.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filteredServices = services.filter(service =>
        service.name.toLowerCase().includes(searchTerm)
      );
      renderServices(filteredServices);
    });
  
    // Renderizar todos os serviços inicialmente
    renderServices(services);
  });
  