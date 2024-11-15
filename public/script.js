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
            reviews: [ 
                { 
                  user: "Lucas Martins", 
                  date: "2024-11-15", 
                  comment: "Carlos fez o reparo elétrico na minha casa de forma rápida e eficaz. Ele trocou o disjuntor queimado e agora tudo está funcionando perfeitamente. Recomendo!"
                },
                { 
                  user: "Ana Souza", 
                  date: "2024-11-14", 
                  comment: "Excelente profissional, atendeu a todos os meus requisitos e ainda me orientou sobre como evitar problemas futuros com a fiação."
                },
                { 
                  user: "Carlos Alberto", 
                  date: "2024-11-13", 
                  comment: "Atendimento muito bom. O serviço foi feito de forma rápida e a cobrança foi justa. Estou satisfeito com o trabalho realizado."
                },
                { 
                  user: "Rafael Costa", 
                  date: "2024-11-12", 
                  comment: "Carlos foi muito prestativo e resolveu meu problema de forma eficiente. A fiação da minha casa estava com alguns problemas e ele os solucionou com agilidade."
                }
              ]
              
          },
          {
            name: "Ana",
            description: "Ana é especialista em redes elétricas residenciais, com amplo conhecimento em fiação, quadros de energia e sistemas elétricos de casas. Ela realiza diagnósticos precisos e corrige falhas no sistema elétrico, evitando sobrecarga e curto-circuito. R$140 por hora.",
            price: "140.00",
            rating: 4.7,
            reviews: [ 
                { 
                  user: "Patrícia Lima", 
                  date: "2024-11-15", 
                  comment: "A Ana é incrível! Ela entende muito de sistemas elétricos residenciais. Fez a instalação elétrica da minha casa e tudo ficou perfeito. Super recomendo!"
                },
                { 
                  user: "Gabriel Pereira", 
                  date: "2024-11-14", 
                  comment: "Trabalho de excelência! Ana foi muito detalhista e me explicou cada passo da instalação elétrica. Além disso, fez tudo no prazo combinado."
                },
                { 
                  user: "Júlia Reis", 
                  date: "2024-11-13", 
                  comment: "Muito competente! A Ana instalou a rede elétrica da minha casa nova e ficou tudo impecável. Preço justo e ótimo atendimento."
                },
                { 
                  user: "Marcelo Oliveira", 
                  date: "2024-11-12", 
                  comment: "A Ana foi muito profissional e realizou a instalação elétrica com muito cuidado e zelo. O serviço foi impecável!"
                }
              ]
              
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
            reviews: [ 
                { 
                  user: "João Santos", 
                  date: "2024-11-15", 
                  comment: "Pedro fez um trabalho excelente na pintura das paredes da minha casa. Ele teve muito cuidado com os detalhes e o acabamento ficou perfeito. Recomendo demais!"
                },
                { 
                  user: "Mariana Oliveira", 
                  date: "2024-11-14", 
                  comment: "Fiquei impressionada com a rapidez e precisão do Pedro. Ele pintou todos os ambientes de forma impecável, sem sujeira e sem atrasos. Trabalho de qualidade!"
                },
                { 
                  user: "Lucas Ferreira", 
                  date: "2024-11-13", 
                  comment: "Pedro é um ótimo pintor. Ele fez a pintura da minha casa com um acabamento que superou minhas expectativas. Tudo ficou muito bem feito e sem falhas."
                },
                { 
                  user: "Sandra Costa", 
                  date: "2024-11-12", 
                  comment: "O serviço de pintura foi perfeito! Pedro tem muito talento e fez um trabalho excelente. As cores ficaram lindas e ele foi super cuidadoso."
                }
              ]
              
          },
          {
            name: "Luiza",
            description: "Luiza é uma artista da pintura, com foco em técnicas decorativas como texturas, efeitos 3D e pintura mural. Com um portfólio de projetos para casas e empresas, ela transforma qualquer ambiente com criatividade e estilo. R$35 por m².",
            price: "35.00/m²",
            rating: 4.9,
            reviews: [ 
                { 
                  user: "Renata Almeida", 
                  date: "2024-11-15", 
                  comment: "A Luiza fez um trabalho maravilhoso com as técnicas de pintura decorativa. Minha sala ficou incrível! Ela é muito criativa e atenciosa, adorei o resultado!"
                },
                { 
                  user: "Carlos Pereira", 
                  date: "2024-11-14", 
                  comment: "Luiza é uma artista da pintura. Fez uma pintura decorativa na minha casa e ficou simplesmente sensacional. Super recomendo o trabalho dela!"
                },
                { 
                  user: "Fernanda Souza", 
                  date: "2024-11-13", 
                  comment: "Excelente profissional! Luiza tem um grande talento para pintura decorativa. Ela trouxe novas ideias e fez um trabalho que deixou minha casa com outra cara."
                },
                { 
                  user: "Ricardo Lima", 
                  date: "2024-11-12", 
                  comment: "Fiquei impressionado com a qualidade do serviço da Luiza. Ela fez uma pintura incrível e com muito cuidado. Os detalhes ficaram perfeitos."
                }
              ]
              
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
            reviews: [ 
                { 
                  user: "Carlos Santos", 
                  date: "2024-11-15", 
                  comment: "Marcos é extremamente profissional. Ele veio até minha casa rapidamente para resolver um vazamento no banheiro e fez tudo com muita competência. Recomendo!"
                },
                { 
                  user: "Beatriz Oliveira", 
                  date: "2024-11-14", 
                  comment: "Fiquei muito satisfeita com o serviço do Marcos. Ele é atencioso, competente e resolveu o problema com rapidez. O conserto foi perfeito e sem complicações."
                },
                { 
                  user: "Rafael Silva", 
                  date: "2024-11-13", 
                  comment: "Marcos fez o reparo hidráulico em minha casa e tudo ocorreu perfeitamente. Ele é rápido, eficiente e muito educado. Trabalho de alta qualidade!"
                },
                { 
                  user: "Patricia Rocha", 
                  date: "2024-11-12", 
                  comment: "O Marcos foi super atencioso e fez um excelente trabalho. Ele identificou e corrigiu o vazamento rapidamente. Fiquei muito satisfeita com o serviço prestado."
                }
              ]
              
          },
          {
            name: "Fernanda",
            description: "Fernanda é uma experiente profissional em sistemas hidráulicos, com expertise na instalação de novos sistemas de encanamento e redes de água. Ela utiliza materiais de alta qualidade e tem um histórico de trabalhos bem-sucedidos. R$250 por visita.",
            price: "250.00",
            rating: 4.8,
            reviews: [ 
                { 
                  user: "Luciana Costa", 
                  date: "2024-11-15", 
                  comment: "Fernanda é uma profissional incrível! Ela fez a instalação do meu sistema hidráulico com muita competência e atenção aos detalhes. Estou muito satisfeita!"
                },
                { 
                  user: "Carlos Almeida", 
                  date: "2024-11-14", 
                  comment: "Fernanda realizou o trabalho de instalação hidráulica com muito cuidado e expertise. Ela explicou todo o processo para mim e deixou tudo funcionando perfeitamente."
                },
                { 
                  user: "Juliana Pereira", 
                  date: "2024-11-13", 
                  comment: "Muito obrigada, Fernanda! Ela fez a instalação hidráulica na minha casa e o serviço foi impecável. Tudo foi feito dentro do prazo e sem nenhum contratempo."
                },
                { 
                  user: "Ricardo Lima", 
                  date: "2024-11-12", 
                  comment: "Fernanda é altamente recomendada! Ela realizou a instalação hidráulica de forma muito eficiente e com ótimo acabamento. Serviço bem feito e preço justo."
                }
              ]
              
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
            reviews: [ 
                { 
                  user: "Mariana Souza", 
                  date: "2024-11-15", 
                  comment: "José e sua equipe fizeram um trabalho incrível na limpeza pós-obra da minha casa. Eles foram muito organizados, rápidos e deixaram o ambiente impecável. Super recomendo!"
                },
                { 
                  user: "Rita Oliveira", 
                  date: "2024-11-14", 
                  comment: "A limpeza pós-obra realizada por José foi excelente! Eles tiraram toda a sujeira e o pó com equipamentos profissionais. Minha casa ficou perfeita depois."
                },
                { 
                  user: "Felipe Rocha", 
                  date: "2024-11-13", 
                  comment: "José e sua equipe foram incríveis. Eles limparam tudo com muito cuidado e atenção aos detalhes. A casa estava em um estado péssimo e agora está impecável!"
                },
                { 
                  user: "Patrícia Silva", 
                  date: "2024-11-12", 
                  comment: "O trabalho do José foi excepcional! Ele e sua equipe deixaram minha casa completamente limpa e sem vestígios da obra. Serviço muito bem feito!"
                }
              ]
              
          },
          {
            name: "Rafaela",
            description: "Rafaela é especialista em limpeza de alta qualidade, com foco na limpeza de vidros, pisos e outros materiais delicados. Ela utiliza ferramentas adequadas para garantir que sua casa ou escritório fique perfeito após a obra. R$370 por serviço.",
            price: "370.00",
            rating: 4.9,
            reviews: [ 
                { 
                  user: "Gustavo Martins", 
                  date: "2024-11-15", 
                  comment: "Rafaela foi super atenciosa e eficiente. A limpeza que ela fez em minha casa pós-obra foi impecável, especialmente a parte dos vidros e pisos. Trabalho excelente!"
                },
                { 
                  user: "Cláudia Pereira", 
                  date: "2024-11-14", 
                  comment: "Rafaela é uma profissional muito dedicada. Ela fez a limpeza pós-obra da minha casa com muito cuidado e atenção. A casa ficou totalmente limpa e sem nenhum resíduo de obra."
                },
                { 
                  user: "João Carlos", 
                  date: "2024-11-13", 
                  comment: "Excelente trabalho da Rafaela! Ela é super cuidadosa com a limpeza dos detalhes, especialmente os pisos e janelas. Minha casa ficou impecável, sem nenhum sinal de obra."
                },
                { 
                  user: "Lucas Martins", 
                  date: "2024-11-12", 
                  comment: "A Rafaela fez um trabalho impecável. Ela e sua equipe deixaram minha casa limpa e pronta para morar. Eu estava impressionado com a qualidade da limpeza."
                }
              ]
              
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
            reviews: [ 
                { 
                  user: "Ana Beatriz", 
                  date: "2024-11-15", 
                  comment: "Cláudio fez um trabalho incrível no meu jardim. Ele cuidou de todos os detalhes e trouxe uma nova vida para o espaço. Muito atencioso e detalhista!"
                },
                { 
                  user: "Paulo Fernandes", 
                  date: "2024-11-14", 
                  comment: "Fiquei muito satisfeito com o trabalho do Cláudio. Ele fez a manutenção do meu jardim com muito cuidado e profissionalismo. O jardim nunca esteve tão bonito!"
                },
                { 
                  user: "Juliana Costa", 
                  date: "2024-11-13", 
                  comment: "Cláudio é um profissional maravilhoso. Ele foi super detalhista no trabalho e fez meu jardim parecer novo. Muito satisfeito com o resultado!"
                },
                { 
                  user: "Ricardo Santos", 
                  date: "2024-11-12", 
                  comment: "O trabalho de Cláudio foi excelente! Ele fez uma poda impecável e deixou o jardim ainda mais bonito. Muito profissional e atento aos detalhes."
                }
              ]
              
          },
          {
            name: "Camila",
            description: "Camila é especialista em paisagismo e design de jardins. Com um olhar artístico, ela cria jardins personalizados para diversos tipos de espaço, seja residencial ou comercial, proporcionando um ambiente relaxante e harmônico. R$300 por projeto.",
            price: "300.00",
            rating: 4.8,
            reviews: [ 
                { 
                  user: "Luciana Pereira", 
                  date: "2024-11-15", 
                  comment: "Camila é uma paisagista incrível. Ela transformou completamente meu jardim, criando um espaço único e encantador. O projeto foi feito com muito carinho e criatividade."
                },
                { 
                  user: "Eduardo Silva", 
                  date: "2024-11-14", 
                  comment: "Fiquei impressionado com o trabalho da Camila. Ela é super criativa e atendeu todas as minhas expectativas. O jardim ficou perfeito e com um visual maravilhoso!"
                },
                { 
                  user: "Mariana Rocha", 
                  date: "2024-11-13", 
                  comment: "Camila fez um trabalho maravilhoso no meu jardim. Ela foi muito criativa e conseguiu transformar o ambiente em um espaço de beleza e tranquilidade. Super recomendo!"
                },
                { 
                  user: "Felipe Costa", 
                  date: "2024-11-12", 
                  comment: "Camila fez um projeto de paisagismo para o meu jardim e eu não poderia estar mais satisfeito. Ela trouxe ideias fantásticas e o resultado foi surpreendente!"
                }
              ]
              
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
            reviews: [ 
                { 
                  user: "Carlos Alberto", 
                  date: "2024-11-15", 
                  comment: "Rogério fez um excelente trabalho na instalação das portas em minha casa. Ele foi pontual, profissional e o acabamento ficou impecável. Muito satisfeito!"
                },
                { 
                  user: "Lucas Martins", 
                  date: "2024-11-13", 
                  comment: "O trabalho de Rogério foi perfeito! Ele instalou as portas com muito cuidado e atenção aos detalhes. Ficou tudo no lugar e sem nenhum problema."
                },
                { 
                  user: "Mariana Souza", 
                  date: "2024-11-12", 
                  comment: "Fiquei muito feliz com o serviço do Rogério. Ele é muito atencioso, rápido e deixou tudo perfeito. As portas ficaram como eu queria. Recomendo!"
                },
                { 
                  user: "Fernanda Oliveira", 
                  date: "2024-11-10", 
                  comment: "Rogério é muito profissional e detalhista. Ele fez a instalação das portas de maneira muito rápida e eficiente. O serviço superou minhas expectativas."
                }
              ]
              
          },
          {
            name: "Luciana",
            description: "Luciana é especialista em portas de correr, com ênfase em otimização de espaços e estética moderna. Ela pode realizar a instalação de portas de diversos materiais, desde madeira até vidro temperado. R$220 por unidade.",
            price: "220.00",
            rating: 4.7,
            reviews: [ 
                { 
                  user: "Amanda Lima", 
                  date: "2024-11-15", 
                  comment: "Luciana é excelente! Instalou as portas de correr em minha casa com muita precisão. O trabalho foi rápido, sem bagunça, e o acabamento ficou perfeito!"
                },
                { 
                  user: "Ricardo Ferreira", 
                  date: "2024-11-14", 
                  comment: "Luciana fez um trabalho incrível. As portas de correr que ela instalou têm um acabamento impecável e funcionam super bem. Adorei o resultado!"
                },
                { 
                  user: "Sílvia Costa", 
                  date: "2024-11-13", 
                  comment: "Luciana fez a instalação das portas com muito cuidado e dedicação. O trabalho foi rápido e sem problemas. Fiquei muito satisfeita com o resultado."
                },
                { 
                  user: "Jorge Nunes", 
                  date: "2024-11-12", 
                  comment: "Fiquei impressionado com a habilidade da Luciana. Ela fez um trabalho excelente nas portas de correr, com atenção a cada detalhe e sem nenhum erro. Recomendo muito!"
                }
              ]
              
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
            reviews: [ 
                { 
                  user: "Thiago Oliveira", 
                  date: "2024-11-14", 
                  comment: "Paulo fez a montagem dos móveis planejados da minha sala. Ele foi super rápido e a montagem ficou perfeita. O serviço foi excelente e recomendo a todos."
                },
                { 
                  user: "Juliana Rocha", 
                  date: "2024-11-12", 
                  comment: "Muito bom o trabalho do Paulo. Ele foi muito eficiente, a montagem foi feita com atenção aos detalhes e ficou tudo impecável. Fiquei muito satisfeita."
                },
                { 
                  user: "Roberta Lima", 
                  date: "2024-11-11", 
                  comment: "Paulo fez um ótimo trabalho montando meus móveis planejados. Ele foi rápido e cuidadoso, o acabamento ficou perfeito. Super recomendo!"
                },
                { 
                  user: "Pedro Santos", 
                  date: "2024-11-09", 
                  comment: "O trabalho de Paulo foi muito bom. Ele fez a montagem dos móveis de forma eficiente e sem nenhum problema. Ficou tudo do jeitinho que eu queria. Excelente profissional!"
                }
              ]
              
          },
          {
            name: "Sabrina",
            description: "Sabrina é especialista na montagem de móveis IKEA, conhecida pela rapidez e precisão em montar móveis dessa marca. Ela tem um ótimo entendimento das instruções e entrega o serviço com excelência. R$120 por peça.",
            price: "120.00",
            rating: 4.8,
            reviews: [ 
                { 
                  user: "Marcela Costa", 
                  date: "2024-11-15", 
                  comment: "Sabrina fez um excelente trabalho montando meus móveis da IKEA. Ela foi muito rápida e o serviço ficou perfeito. Ela é muito atenciosa e caprichosa!"
                },
                { 
                  user: "André Pereira", 
                  date: "2024-11-14", 
                  comment: "Sabrina é uma excelente profissional! Ela montou todos os móveis da IKEA com muita eficiência. O trabalho foi muito bem feito e sem erros. Super recomendo!"
                },
                { 
                  user: "Carla Silva", 
                  date: "2024-11-12", 
                  comment: "Fiquei muito satisfeita com a montagem dos móveis feita pela Sabrina. Ela foi muito ágil e cuidadosa, deixou tudo muito bem montado e organizado. Trabalho impecável!"
                },
                { 
                  user: "José Martins", 
                  date: "2024-11-10", 
                  comment: "Sabrina é incrível! Ela montou os móveis da IKEA de forma muito rápida e o serviço ficou excelente. Ficou tudo no lugar certo e sem nenhum erro. Muito satisfeito!"
                }
              ]
              
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
            reviews: [ 
                { 
                  user: "Marcelo Santos", 
                  date: "2024-11-13", 
                  comment: "Leandro fez a substituição das telhas do meu telhado cerâmico. O serviço foi excelente! Ele foi muito atencioso e conseguiu resolver rapidamente o problema com a telha quebrada. Recomendo."
                },
                { 
                  user: "Renata Almeida", 
                  date: "2024-11-10", 
                  comment: "Fiquei muito satisfeita com o trabalho do Leandro. Ele substituiu as telhas cerâmicas de maneira eficiente e sem complicação. O trabalho foi rápido e de qualidade. Recomendo."
                },
                { 
                  user: "Carlos Ribeiro", 
                  date: "2024-11-08", 
                  comment: "Leandro é muito profissional. Substituiu as telhas de forma rápida e fez o trabalho com muita atenção aos detalhes. Estou muito satisfeito com o serviço prestado."
                },
                { 
                  user: "Elaine Souza", 
                  date: "2024-11-06", 
                  comment: "Leandro fez o serviço de substituição das telhas cerâmicas do meu telhado e o trabalho ficou excelente. Ele foi muito cuidadoso e resolveu o problema sem complicações. Agradeço pelo ótimo trabalho."
                }
              ]
              
          },
          {
            name: "Adriana",
            description: "Adriana é especialista na instalação de telhados metálicos, uma escolha popular por sua durabilidade e resistência. Ela realiza o trabalho com atenção ao detalhe e compromisso com a qualidade. R$600 por serviço.",
            price: "600.00",
            rating: 4.8,
            reviews: [ 
                { 
                  user: "Eduardo Martins", 
                  date: "2024-11-12", 
                  comment: "Adriana fez a instalação das telhas metálicas em minha casa e o trabalho ficou impecável. Ela foi muito profissional e atenciosa. As telhas foram instaladas com perfeição e com muito cuidado. Excelente serviço!"
                },
                { 
                  user: "Beatriz Costa", 
                  date: "2024-11-09", 
                  comment: "O serviço de Adriana foi excelente. Ela instalou as telhas metálicas de forma muito eficiente e sem atrasos. O trabalho foi bem feito e a minha casa está agora mais protegida. Recomendo a todos."
                },
                { 
                  user: "Ricardo Souza", 
                  date: "2024-11-07", 
                  comment: "Adriana fez um ótimo trabalho na instalação das telhas metálicas. Ela foi muito profissional e fez tudo de forma organizada. Estou muito feliz com o resultado!"
                },
                { 
                  user: "Juliana Pereira", 
                  date: "2024-11-05", 
                  comment: "Adriana fez um trabalho de instalação de telhas metálicas no meu telhado e tudo ficou perfeito. Ela foi atenciosa, explicou o processo e concluiu tudo com muita competência. Serviço de primeira!"
                }
              ]
              
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
            reviews: [ 
                { 
                  user: "Carlos Silva", 
                  date: "2024-11-14", 
                  comment: "Eduardo fez um excelente trabalho na manutenção da minha piscina. Ele foi muito cuidadoso com os produtos usados e a piscina ficou impecável. Estou muito satisfeito com o serviço e recomendo a todos."
                },
                { 
                  user: "Maria Tavares", 
                  date: "2024-11-11", 
                  comment: "O trabalho de Eduardo foi perfeito. Ele fez a manutenção da piscina e o tratamento químico deixou a água cristalina. A piscina nunca esteve tão limpa e bem cuidada. Excelente profissional."
                },
                { 
                  user: "Ricardo Lopes", 
                  date: "2024-11-08", 
                  comment: "Eduardo fez a manutenção da minha piscina e eu fiquei muito impressionado com a qualidade do serviço. Ele é bem detalhista, me explicou todo o processo e a piscina ficou maravilhosa. Recomendo!"
                },
                { 
                  user: "Fernanda Oliveira", 
                  date: "2024-11-05", 
                  comment: "Fiquei muito feliz com o trabalho do Eduardo. Ele deixou minha piscina impecável, com a água limpíssima. O serviço foi rápido e eficiente. Super recomendo para quem precisa de manutenção de piscinas."
                }
              ]
              
          },
          {
            name: "Flávia",
            description: "Flávia é especialista em limpeza e manutenção de piscinas com equipamentos profissionais, garantindo que a piscina esteja sempre limpa, segura e pronta para uso. R$250 por mês.",
            price: "250.00",
            rating: 4.9,
            reviews: [ 
                { 
                  user: "João Pereira", 
                  date: "2024-11-13", 
                  comment: "Flávia foi excelente! Ela fez a limpeza da minha piscina com equipamento profissional e a água ficou completamente limpa. Ela é super detalhista e me explicou todo o processo. Serviço perfeito!"
                },
                { 
                  user: "Patrícia Rocha", 
                  date: "2024-11-10", 
                  comment: "Flávia fez um trabalho excelente na limpeza da minha piscina. Ela foi muito atenciosa e usou equipamentos de alta qualidade. A piscina ficou impecável e o atendimento foi ótimo. Recomendo muito!"
                },
                { 
                  user: "Tiago Alves", 
                  date: "2024-11-07", 
                  comment: "Flávia fez a limpeza da piscina e o trabalho foi maravilhoso. Ela é super profissional, deixou tudo limpo e sem nenhum resíduo. A piscina ficou brilhando. Super satisfeitos!"
                },
                { 
                  user: "Luciana Martins", 
                  date: "2024-11-04", 
                  comment: "Flávia fez um trabalho sensacional na limpeza da minha piscina. Ela é muito cuidadosa e usou produtos e equipamentos de excelente qualidade. A água da minha piscina ficou cristalina. Não poderia estar mais satisfeita!"
                }
              ]
              
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
          ${professional.reviews.map(review => 
            `<li>
              <strong>${review.user}</strong> - ${review.date}<br>
              <p>${review.comment}</p>
            </li>`).join('')}
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
    