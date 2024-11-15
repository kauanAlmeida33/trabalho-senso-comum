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
            reviews: [
                { 
                  user: "Carlos Silva", 
                  date: "2024-11-05", 
                  comment: "João foi muito eficiente ao instalar o ar-condicionado em minha casa. Ele fez tudo com muito cuidado e em tempo hábil. O equipamento ficou funcionando perfeitamente. Recomendo muito!"
                },
                { 
                  user: "Ana Beatriz", 
                  date: "2024-11-08", 
                  comment: "Ótimo profissional! João fez a instalação de forma muito rápida e sem deixar sujeira. Explicou todas as etapas do processo e deixou o ambiente organizado após a instalação."
                },
                { 
                  user: "Marcos Oliveira", 
                  date: "2024-11-10", 
                  comment: "Fiquei muito satisfeito com o trabalho de João. Ele é muito experiente e me deixou tranquilo durante todo o processo. O ar-condicionado está funcionando perfeitamente, e ele ainda fez uma manutenção preventiva."
                },
                { 
                  user: "Luana Santos", 
                  date: "2024-11-12", 
                  comment: "João é um excelente profissional. Foi pontual e fez o serviço com muita atenção aos detalhes. Fiquei muito feliz com o atendimento e o resultado final."
                }
              ]
              
          },
          { 
            name: "Maria", 
            description: "Maria é especialista em sistemas de ar-condicionado inverter, que são mais eficientes e econômicos. Ela possui certificação em instalação e manutenção de modelos inverter, sendo capaz de otimizar a performance do seu sistema de ar-condicionado. Sua experiência é baseada em mais de 7 anos de trabalho com modelos modernos e inovadores. R$170 por unidade.", 
            price: "170.00", 
            rating: 4.8, 
            reviews: [
                { 
                  user: "José Almeida", 
                  date: "2024-11-02", 
                  comment: "Maria fez um excelente trabalho na instalação do meu ar-condicionado inverter. Ela foi muito atenciosa, respondeu a todas as minhas dúvidas e o serviço ficou perfeito. A qualidade do trabalho superou minhas expectativas!"
                },
                { 
                  user: "Fernanda Costa", 
                  date: "2024-11-06", 
                  comment: "Maria tem uma habilidade incrível com os sistemas inverter. Ela fez a instalação rapidamente e de forma impecável. A economia de energia no meu aparelho já está visível. Estou muito satisfeita!"
                },
                { 
                  user: "Ricardo Pereira", 
                  date: "2024-11-09", 
                  comment: "Excelente profissional! Maria foi rápida, eficiente e fez o trabalho com muita qualidade. Ela explicou cada parte do processo e me deixou muito seguro sobre o uso do novo sistema."
                },
                { 
                  user: "Patricia Mendes", 
                  date: "2024-11-11", 
                  comment: "Maria fez um ótimo trabalho em minha casa. Ela é super profissional e tem conhecimento de todos os detalhes do sistema inverter. A instalação foi muito bem feita, sem nenhum contratempo."
                }
              ]              
          }
        ]
      },      
      {
        id: 2,
        name: "Reparo Elétrico",
        professionals: [
          {
            name: "Carlos",
            description: "Carlos é um profissional com vasta experiência em reparos elétricos, incluindo a troca de disjuntores, fiação e instalações elétricas de baixo e médio porte. Com mais de 10 anos de experiência na área, ele garante serviços rápidos e eficientes, com foco na segurança e no respeito aos padrões regulatórios. R$120 por hora.",
            price: "120.00",
            rating: 4.2,
            reviews: ["Atendimento excelente.", "Resolveu meu problema."]
          },
          {
            name: "Ana",
            description: "Ana é especialista em redes elétricas residenciais, com amplo conhecimento em fiação, quadros de energia e sistemas elétricos de casas. Ela realiza diagnósticos precisos e corrige falhas no sistema elétrico, evitando sobrecarga e curto-circuito. R$140 por hora.",
            price: "140.00",
            rating: 4.7,
            reviews: ["Profissional muito competente.", "Preço justo."]
          }
        ]
      },
      {
        id: 3,
        name: "Pintura de Parede",
        professionals: [
          {
            name: "Pedro",
            description: "Pedro é um pintor de alto nível, especializado em pintura de interiores e exteriores. Ele utiliza técnicas modernas para garantir acabamento perfeito e durabilidade nas superfícies. Seu trabalho é reconhecido pela precisão nas demãos, e ele sempre entrega no prazo. R$30 por m².",
            price: "30.00/m²",
            rating: 4.6,
            reviews: ["Excelente acabamento.", "Cumpriu os prazos."]
          },
          {
            name: "Luiza",
            description: "Luiza é uma artista da pintura, com foco em técnicas decorativas como texturas, efeitos 3D e pintura mural. Com um portfólio de projetos para casas e empresas, ela transforma qualquer ambiente com criatividade e estilo. R$35 por m².",
            price: "35.00/m²",
            rating: 4.9,
            reviews: ["Muito criativa!", "Minha casa ficou incrível."]
          }
        ]
      },
      {
        id: 4,
        name: "Reparos Hidráulicos",
        professionals: [
          {
            name: "Marcos",
            description: "Marcos é um especialista em reparos hidráulicos, com experiência em consertos de vazamentos, instalações de novos sistemas e manutenção de tubulações. Ele trabalha com eficiência para garantir que a parte hidráulica da sua residência ou empresa funcione sem problemas. R$200 por visita.",
            price: "200.00",
            rating: 4.3,
            reviews: ["Resolvi tudo rápido!", "Muito educado."]
          },
          {
            name: "Fernanda",
            description: "Fernanda é uma experiente profissional em sistemas hidráulicos, com expertise na instalação de novos sistemas de encanamento e redes de água. Ela utiliza materiais de alta qualidade e tem um histórico de trabalhos bem-sucedidos. R$250 por visita.",
            price: "250.00",
            rating: 4.8,
            reviews: ["Excelente profissional.", "Vale cada centavo."]
          }
        ]
      },
      {
        id: 5,
        name: "Limpeza Pós-Obra",
        professionals: [
          {
            name: "José",
            description: "José é especialista em limpeza pós-obra, utilizando equipamentos profissionais e técnicas adequadas para remover resíduos de construção e deixar os ambientes prontos para uso. Ele realiza o serviço de forma rápida e com eficiência. R$350 por serviço.",
            price: "350.00",
            rating: 4.5,
            reviews: ["Equipe organizada.", "Muito satisfeita!"]
          },
          {
            name: "Rafaela",
            description: "Rafaela é especialista em limpeza de alta qualidade, com foco na limpeza de vidros, pisos e outros materiais delicados. Ela utiliza ferramentas adequadas para garantir que sua casa ou escritório fique perfeito após a obra. R$370 por serviço.",
            price: "370.00",
            rating: 4.9,
            reviews: ["Minha casa ficou impecável.", "Profissional excelente!"]
          }
        ]
      },
      {
        id: 6,
        name: "Jardinagem",
        professionals: [
          {
            name: "Claudio",
            description: "Claudio é um jardineiro experiente, que cuida da manutenção de jardins com atenção aos detalhes e paixão pela natureza. Ele cuida de plantas, realiza podas e pode até mesmo realizar replantios para melhorar o aspecto do seu jardim. R$200 por visita.",
            price: "200.00",
            rating: 4.4,
            reviews: ["Deixou meu jardim perfeito.", "Atencioso e detalhista."]
          },
          {
            name: "Camila",
            description: "Camila é especialista em paisagismo e design de jardins. Com um olhar artístico, ela cria jardins personalizados para diversos tipos de espaço, seja residencial ou comercial, proporcionando um ambiente relaxante e harmônico. R$300 por projeto.",
            price: "300.00",
            rating: 4.8,
            reviews: ["Muito criativa!", "Meu jardim ficou maravilhoso."]
          }
        ]
      },
      {
        id: 7,
        name: "Instalação de Portas e Janelas",
        professionals: [
          {
            name: "Rogério",
            description: "Rogério é especialista na instalação de portas de madeira e alumínio. Ele tem experiência em projetos personalizados e entrega um trabalho com excelente acabamento. Ele também realiza ajustes e consertos em portas antigas. R$180 por unidade.",
            price: "180.00",
            rating: 4.2,
            reviews: ["Fez um bom trabalho.", "Sem atrasos."]
          },
          {
            name: "Luciana",
            description: "Luciana é especialista em portas de correr, com ênfase em otimização de espaços e estética moderna. Ela pode realizar a instalação de portas de diversos materiais, desde madeira até vidro temperado. R$220 por unidade.",
            price: "220.00",
            rating: 4.7,
            reviews: ["Muito bem feito.", "Adorei o serviço!"]
          }
        ]
      },
      {
        id: 8,
        name: "Montagem de Móveis",
        professionals: [
          {
            name: "Paulo",
            description: "Paulo é especialista na montagem de móveis planejados. Ele possui experiência em trabalhar com diversas marcas e tipos de móveis, entregando um serviço rápido e de alta qualidade. R$100 por peça.",
            price: "100.00",
            rating: 4.6,
            reviews: ["Ótimo profissional.", "Montagem rápida."]
          },
          {
            name: "Sabrina",
            description: "Sabrina é especialista na montagem de móveis IKEA, conhecida pela rapidez e precisão em montar móveis dessa marca. Ela tem um ótimo entendimento das instruções e entrega o serviço com excelência. R$120 por peça.",
            price: "120.00",
            rating: 4.8,
            reviews: ["Montagem impecável.", "Muito simpática!"]
          }
        ]
      },
      {
        id: 9,
        name: "Troca de Telhados",
        professionals: [
          {
            name: "Leandro",
            description: "Leandro é um especialista em telhados cerâmicos. Ele realiza a substituição de telhas e manutenção de telhados de maneira eficiente, garantindo que sua residência fique protegida das intempéries. R$500 por serviço.",
            price: "500.00",
            rating: 4.3,
            reviews: ["Muito atencioso.", "Resolveu rápido."]
          },
          {
            name: "Adriana",
            description: "Adriana é especialista na instalação de telhados metálicos, uma escolha popular por sua durabilidade e resistência. Ela realiza o trabalho com atenção ao detalhe e compromisso com a qualidade. R$600 por serviço.",
            price: "600.00",
            rating: 4.8,
            reviews: ["Excelente trabalho.", "Vale o preço."]
          }
        ]
      },
      {
        id: 10,
        name: "Limpeza de Piscinas",
        professionals: [
          {
            name: "Eduardo",
            description: "Eduardo é especialista em manutenção e limpeza de piscinas, oferecendo serviços regulares de tratamento químico, remoção de sujeira e cuidado com os sistemas hidráulicos da piscina. R$200 por mês.",
            price: "200.00",
            rating: 4.7,
            reviews: ["Minha piscina ficou ótima.", "Super recomendado."]
          },
          {
            name: "Flávia",
            description: "Flávia é especialista em limpeza e manutenção de piscinas com equipamentos profissionais, garantindo que a piscina esteja sempre limpa, segura e pronta para uso. R$250 por mês.",
            price: "250.00",
            rating: 4.9,
            reviews: ["Muito profissional.", "Atenciosa e eficiente!"]
          }
        ]
      }
      
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
    