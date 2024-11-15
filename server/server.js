// Dados dos serviços e profissionais
const services = [
    {
      name: "Instalação de Ar-Condicionado",
      professionals: [
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
            "Muito eficiente e educado. Tirou todas as minhas dúvidas sobre o ar-condicionado.",
            "Recomendo para todos! Instalou dois aparelhos em apenas 2 horas."
          ]
        }
      ]
    },
    {
      name: "Pintura de Parede",
      professionals: [
        {
          name: "Maria Souza",
          description: `
            Pintora profissional com 8 anos de experiência em pinturas internas e externas. 
            Realiza pintura decorativa, grafiato e serviços personalizados. Trabalha com tinta de alta qualidade 
            e oferece orçamento gratuito.
            **Cobra R$20,00 por metro quadrado.**
          `,
          price: "20.00",
          rating: 4.6,
          reviews: [
            "Pintura impecável, minha casa ficou como nova!",
            "A Maria foi muito atenciosa e deu dicas excelentes de cores.",
            "O serviço foi rápido e muito bem feito, sem sujeira."
          ]
        }
      ]
    }
  ];
  
  // Endpoint para obter todos os serviços
  app.get("/api/services", (req, res) => {
    res.json(services);
  });
  
  // Endpoint para obter um serviço específico
  app.get("/api/services/:serviceName", (req, res) => {
    const serviceName = req.params.serviceName;
    const service = services.find(s => s.name === serviceName);
    if (service) {
      res.json(service);
    } else {
      res.status(404).send("Serviço não encontrado");
    }
  });
  // Endpoint para simular envio de mensagens
app.post("/api/chat", (req, res) => {
    const { message, professionalName } = req.body;
  
    const responses = {
      "Qual a garantia do serviço?": "A garantia é de 12 meses para instalação.",
      "Vocês fornecem o suporte para instalação?": "Sim, todo o suporte está incluso no valor.",
      "Qual o prazo para conclusão?": "A instalação é feita no mesmo dia, dependendo da agenda."
    };
  
    const responseMessage =
      responses[message] || `${professionalName} agradece sua mensagem e responderá em breve.`;
  
    res.json({ response: responseMessage });
  });
  