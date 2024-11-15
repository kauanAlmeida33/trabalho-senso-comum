// Dados mockados de serviços e profissionais
const services = [
    { 
        id: 1, 
        name: "Instalação de Ar-Condicionado", 
        professionals: [
          { 
            name: "João", 
            description: "João é especialista em instalação e manutenção de aparelhos de ar-condicionado tipo split. Com mais de 5 anos de experiência, ele realiza o processo de instalação com precisão e segurança, garantindo a eficiência do sistema. Além disso, oferece manutenção preventiva e corretiva, assegurando o funcionamento adequado do equipamento. R$150 por unidade.", 
            price: "150.00", 
            rating: 4.5, 
            reviews: ["Ótimo serviço!", "Muito eficiente."]
          },
          { 
            name: "Maria", 
            description: "Maria é especialista em sistemas de ar-condicionado inverter, que são mais eficientes e econômicos. Ela possui certificação em instalação e manutenção de modelos inverter, sendo capaz de otimizar a performance do seu sistema de ar-condicionado. Sua experiência é baseada em mais de 7 anos de trabalho com modelos modernos e inovadores. R$170 por unidade.", 
            price: "170.00", 
            rating: 4.8, 
            reviews: ["Recomendo demais!", "Rápido e organizado."]
          }
        ]
      },      
    { 
      id: 2, 
      name: "Reparo Elétrico", 
      professionals: [
        { name: "Carlos", description: "Troca de disjuntores e instalação elétrica. R$120 por hora.", price: "120.00", rating: 4.2, reviews: ["Atendimento excelente.", "Resolveu meu problema."] },
        { name: "Ana", description: "Especialista em redes elétricas residenciais. R$140 por hora.", price: "140.00", rating: 4.7, reviews: ["Profissional muito competente.", "Preço justo."] }
      ]
    },
    { 
      id: 3, 
      name: "Pintura de Parede", 
      professionals: [
        { name: "Pedro", description: "Pintura interior/exterior. R$30 por m².", price: "30.00/m²", rating: 4.6, reviews: ["Excelente acabamento.", "Cumpriu os prazos."] },
        { name: "Luiza", description: "Técnicas de pintura decorativa. R$35 por m².", price: "35.00/m²", rating: 4.9, reviews: ["Muito criativa!", "Minha casa ficou incrível."] }
      ]
    },
    { 
      id: 4, 
      name: "Reparos Hidráulicos", 
      professionals: [
        { name: "Marcos", description: "Conserto de vazamentos e instalações. R$200 por visita.", price: "200.00", rating: 4.3, reviews: ["Resolvi tudo rápido!", "Muito educado."] },
        { name: "Fernanda", description: "Instalação de sistemas hidráulicos. R$250 por visita.", price: "250.00", rating: 4.8, reviews: ["Excelente profissional.", "Vale cada centavo."] }
      ]
    },
    { 
      id: 5, 
      name: "Limpeza Pós-Obra", 
      professionals: [
        { name: "José", description: "Limpeza pesada com equipamentos profissionais. R$350 por serviço.", price: "350.00", rating: 4.5, reviews: ["Equipe organizada.", "Muito satisfeita!"] },
        { name: "Rafaela", description: "Especialista em limpeza de vidros e pisos. R$370 por serviço.", price: "370.00", rating: 4.9, reviews: ["Minha casa ficou impecável.", "Profissional excelente!"] }
      ]
    },
    { 
      id: 6, 
      name: "Jardinagem", 
      professionals: [
        { name: "Claudio", description: "Manutenção de jardins. R$200 por visita.", price: "200.00", rating: 4.4, reviews: ["Deixou meu jardim perfeito.", "Atencioso e detalhista."] },
        { name: "Camila", description: "Paisagismo e design. R$300 por projeto.", price: "300.00", rating: 4.8, reviews: ["Muito criativa!", "Meu jardim ficou maravilhoso."] }
      ]
    },
    { 
      id: 7, 
      name: "Instalação de Portas e Janelas", 
      professionals: [
        { name: "Rogério", description: "Instalação de portas de madeira e alumínio. R$180 por unidade.", price: "180.00", rating: 4.2, reviews: ["Fez um bom trabalho.", "Sem atrasos."] },
        { name: "Luciana", description: "Especialista em portas de correr. R$220 por unidade.", price: "220.00", rating: 4.7, reviews: ["Muito bem feito.", "Adorei o serviço!"] }
      ]
    },
    { 
      id: 8, 
      name: "Montagem de Móveis", 
      professionals: [
        { name: "Paulo", description: "Montagem de móveis planejados. R$100 por peça.", price: "100.00", rating: 4.6, reviews: ["Ótimo profissional.", "Montagem rápida."] },
        { name: "Sabrina", description: "Especialista em móveis IKEA. R$120 por peça.", price: "120.00", rating: 4.8, reviews: ["Montagem impecável.", "Muito simpática!"] }
      ]
    },
    { 
      id: 9, 
      name: "Troca de Telhados", 
      professionals: [
        { name: "Leandro", description: "Substituição de telhas cerâmicas. R$500 por serviço.", price: "500.00", rating: 4.3, reviews: ["Muito atencioso.", "Resolveu rápido."] },
        { name: "Adriana", description: "Instalação de telhas metálicas. R$600 por serviço.", price: "600.00", rating: 4.8, reviews: ["Excelente trabalho.", "Vale o preço."] }
      ]
    },
    { 
      id: 10, 
      name: "Limpeza de Piscinas", 
      professionals: [
        { name: "Eduardo", description: "Tratamento químico e manutenção. R$200 por mês.", price: "200.00", rating: 4.7, reviews: ["Minha piscina ficou ótima.", "Super recomendado."] },
        { name: "Flávia", description: "Limpeza com equipamento profissional. R$250 por mês.", price: "250.00", rating: 4.9, reviews: ["Muito profissional.", "Atenciosa e eficiente!"] }
      ]
    },
  ];
  // Função para mostrar profissionais de um serviço
const showProfessionals = (service) => {
    servicesSection.classList.add("hidden");
    professionalsSection.classList.remove("hidden");
    professionalsList.innerHTML = "";
  
    service.professionals.forEach(professional => {
      const professionalDiv = document.createElement("div");
      professionalDiv.innerHTML = `
        <h4>${professional.name}</h4>
        <p>${professional.description}</p>
        <p>Preço: R$${professional.price}</p>
        <div class="review">Avaliação: ${'⭐'.repeat(Math.floor(professional.rating))}</div>
        <p>Comentários:</p>
        <ul>
          ${professional.reviews.map(review => `<li>${review}</li>`).join('')}
        </ul>
        <button class="hire-button">Contratar</button>
        <button class="message-button">Mensagem</button>
      `;
      // Botões de ação
      professionalDiv.querySelector(".hire-button").addEventListener("click", () => {
        alert(`Você contratou ${professional.name}!`);
      });
  
      professionalDiv.querySelector(".message-button").addEventListener("click", () => {
        openChat(professional.name);
      });
  
      professionalsList.appendChild(professionalDiv);
    });
  };
// Elementos DOM principais
const servicesSection = document.getElementById("services");
const professionalsSection = document.getElementById("professionals");
const servicesList = document.getElementById("services-list");
const professionalsList = document.getElementById("professionals-list");
const searchBar = document.getElementById("search-bar");
const backToServicesButton = document.getElementById("back-to-services");
const chatBox = document.getElementById("chat-box");
const chatMessages = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");
const sendMessageButton = document.getElementById("send-message");
const closeChatButton = document.getElementById("close-chat");

// Função para renderizar a lista de serviços
const renderServices = (query = "") => {
  servicesList.innerHTML = "";

  // Filtra os serviços com base na consulta de pesquisa
  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(query.toLowerCase())
  );

  // Adiciona os serviços ao DOM
  filteredServices.forEach(service => {
    const serviceDiv = document.createElement("div");
    serviceDiv.innerHTML = `<h3>${service.name}</h3>`;
    serviceDiv.addEventListener("click", () => showProfessionals(service));
    servicesList.appendChild(serviceDiv);
  });

  if (filteredServices.length === 0) {
    servicesList.innerHTML = "<p>Nenhum serviço encontrado.</p>";
  }
};

// Evento para a barra de pesquisa
searchBar.addEventListener("input", (e) => {
  renderServices(e.target.value);
});

// Retornar à lista de serviços
backToServicesButton.addEventListener("click", () => {
  professionalsSection.classList.add("hidden");
  servicesSection.classList.remove("hidden");
});

// Inicializa a página com todos os serviços
renderServices();
let currentProfessional = null;

// Função para abrir o chat box
const openChat = (professionalName) => {
  currentProfessional = professionalName;
  chatBox.classList.remove("hidden");
  chatMessages.innerHTML = `<p>Converse com <strong>${professionalName}</strong>.</p>`;
};

// Função para fechar o chat box
const closeChat = () => {
  currentProfessional = null;
  chatBox.classList.add("hidden");
};

// Função para enviar mensagem
const sendMessage = () => {
  const message = chatInput.value.trim();
  if (message === "") return;

  const messageDiv = document.createElement("p");
  messageDiv.innerHTML = `<strong>Você:</strong> ${message}`;
  chatMessages.appendChild(messageDiv);
  chatInput.value = "";

  // Simula uma resposta do profissional
  setTimeout(() => {
    const responseDiv = document.createElement("p");
    responseDiv.innerHTML = `<strong>${currentProfessional}:</strong> Obrigado pela mensagem!`;
    chatMessages.appendChild(responseDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Rola para o final
  }, 1000);
};

// Eventos para o chat box
closeChatButton.addEventListener("click", closeChat);
sendMessageButton.addEventListener("click", sendMessage);
chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});
    