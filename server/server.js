const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Dados simulados dos serviços
const services = [
  {
    name: "Instalação de Ar-Condicionado",
    professionals: [
      {
        name: "João da Silva",
        description: "Descrição do João",
        price: "150.00",
        rating: 4.8,
        reviews: [
          "Ótimo serviço! Resolveu rápido e deixou tudo limpo.",
          "Muito eficiente e educado. Tirou todas as minhas dúvidas."
        ]
      }
    ]
  }
];

app.use(bodyParser.json());
app.use(express.static("public"));

// Endpoint para serviços
app.get("/api/services", (req, res) => {
  res.json(services);
});

// Endpoint para responder ao chat
app.post("/api/chat", (req, res) => {
  const { message } = req.body;
  const responses = {
    "Qual a garantia do serviço?": "A garantia é de 12 meses.",
    "Vocês oferecem suporte?": "Sim, todo o suporte está incluso no preço.",
    "Qual é o prazo?": "O serviço é concluído no mesmo dia."
  };
  
  res.json({ response: responses[message] || "Sua dúvida será respondida em breve!" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
