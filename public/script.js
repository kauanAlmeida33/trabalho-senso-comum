// Dados simulados dos profissionais
const professionals = [
    {
      name: "João da Silva",
      description: `
        Técnico certificado em instalação de ar-condicionado com mais de 10 anos de experiência. 
        Especializado em aparelhos split e inverter. Atende residências e empresas, garantindo 
        um serviço rápido e eficiente. 
        **Cobra R$150,00 por aparelho instalado.**
      `,
      price: "150.00",
      rating: 4.8,
      reviews: [
        "Ótimo serviço! Resolveu rápido e deixou tudo limpo.",
        "Muito eficiente e educado. Tirou todas as minhas dúvidas.",
        "Recomendo para todos! Instalou dois aparelhos em apenas 2 horas.",
        "Serviço excelente. Voltaria a contratar com certeza.",
        "Foi pontual e muito caprichoso. Obrigado, João!"
      ]
    }
  ];
  
  const services = [
    { name: "Instalação de Ar-Condicionado", professionals: [professionals[0]] },
    { name: "Pintura Residencial", professionals: [] },  // Adicione mais serviços conforme necessário
  ];
  
  const renderServices = (query = "") => {
    const servicesList = document.getElementById("services-list");
    servicesList.innerHTML = "";
    const filteredServices = services.filter(service =>
      service.name.toLowerCase().includes(query.toLowerCase())
    );
    filteredServices.forEach(service => {
      const serviceDiv = document.createElement("div");
      serviceDiv.innerHTML = `<h3>${service.name}</h3>`;
      serviceDiv.addEventListener("click", () => showProfessionals(service));
      servicesList.appendChild(serviceDiv);
    });
  };
  
  const showProfessionals = (service) => {
    const professionalsSection = document.getElementById("professionals");
    const servicesSection = document.getElementById("services");
    professionalsSection.classList.remove("hidden");
    servicesSection.classList.add("hidden");
  
    const professionalsList = document.getElementById("professionals-list");
    professionalsList.innerHTML = "";
  
    service.professionals.forEach(professional => {
      const professionalDiv = document.createElement("div");
      professionalDiv.innerHTML = `
        <h3>${professional.name}</h3>
        <p>${professional.description}</p>
        <p><strong>Preço:</strong> R$${professional.price}</p>
        <p><strong>Avaliação:</strong> ${professional.rating} estrelas</p>
        <button onclick="openChat('${professional.name}')">Mensagem</button>
      `;
      professionalsList.appendChild(professionalDiv);
    });
  };
  
  // Chat
  const openChat = (professionalName) => {
    const chatBox = document.getElementById("chat-box");
    chatBox.classList.remove("hidden");
    const chatMessages = document.getElementById("chat-messages");
    chatMessages.innerHTML = `<p><strong>${professionalName}</strong> está disponível para responder suas dúvidas!</p>`;
  };
  
  // Fechar o chat
  document.getElementById("close-chat").onclick = () => {
    document.getElementById("chat-box").classList.add("hidden");
  };
  
  // Pesquisa de serviços
  document.getElementById("search-bar").addEventListener("input", (e) => {
    renderServices(e.target.value);
  });
  
  renderServices();
  