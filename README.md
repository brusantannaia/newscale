Newscale Consulting - Website Institucional
Este repositório contém o código-fonte completo do site institucional da Newscale Consulting, uma consultoria especializada em automação de processos com Inteligência Artificial para pequenas e médias empresas, com um foco especial no nicho de joalherias.

O site foi desenvolvido para ser moderno, rápido, responsivo e otimizado para SEO, servindo como a principal ferramenta de marketing e captação de leads da empresa.

🚀 Acesso ao Site
Você pode visitar a versão ao vivo do site no seguinte endereço:

https://www.newscale.tech (ou o seu domínio Netlify)

✨ Páginas e Funcionalidades Principais
O site é composto por várias páginas estratégicas para guiar o visitante pela jornada do cliente:

Páginas Implementadas:
index.html (Página Inicial): Apresenta a proposta de valor geral da Newscale, as dores que resolve e os serviços oferecidos.

agente-joias.html (Página de Vendas): Uma landing page focada no público de joalherias, detalhando o agente de IA especialista.

quem-somos.html (Quem Somos): Conta a história da fundadora, Bruna Santanna, e a missão da empresa.

contato.html (Contato): Página com formulário e canais diretos de contato.

obrigado.html (Página de Sucesso): Página de confirmação para envios de formulário.

Funcionalidades de Destaque:
Diagnóstico com IA: Uma ferramenta interativa na página inicial que utiliza a API do Google Gemini para fornecer uma análise preliminar e sugestões de automação com base na descrição do negócio do usuário.

Função de Servidor Segura (Netlify Function): A chamada para a API do Gemini é feita através de uma função serverless, garantindo que a chave de API permaneça secreta e segura.

Formulários Funcionais: Formulários de contato e de newsletter integrados com o serviço da Netlify Forms, que captura os envios e notifica por e-mail.

Design Responsivo: Totalmente adaptado para uma experiência de usuário impecável em desktops, tablets e celulares.

Otimização para SEO: Uso de tags semânticas, meta descrições, títulos hierárquicos e textos otimizados para atrair tráfego orgânico.

🛠️ Tecnologias Utilizadas
Este projeto foi construído com as tecnologias fundamentais da web, sem a necessidade de frameworks complexos, garantindo máxima performance e simplicidade.

HTML5: Para a estrutura e semântica do conteúdo.

CSS3: Para toda a estilização, layout e responsividade.

JavaScript (Vanilla): Para a interatividade, especialmente na comunicação com a função de servidor para o diagnóstico com IA.

Netlify: Para hospedagem, deploy contínuo, processamento de formulários e execução das funções serverless.

Google Gemini API: Para a funcionalidade de inteligência artificial generativa.

📂 Estrutura do Projeto
A estrutura de arquivos foi organizada para ser intuitiva e compatível com as funcionalidades da Netlify.

/
|-- index.html              # Página Inicial
|-- agente-joias.html       # Página de Vendas para Joalherias
|-- quem-somos.html         # Página Sobre a Empresa
|-- contato.html            # Página de Contato
|-- obrigado.html           # Página de Sucesso dos Formulários
|-- netlify.toml            # Ficheiro de configuração da Netlify
|-- LOGO 05@3x.png          # Imagem do logo
|-- Bruna.JPG               # Foto da fundadora
|
|-- /netlify/
    |-- /functions/
        |-- generate-diagnosis.js  # Código da função segura para a IA
|
|-- README.md               # Este ficheiro

⚙️ Configuração e Deploy
Para fazer o deploy de uma cópia deste site, siga os passos abaixo:

1. Fork e Clone do Repositório
Faça um "fork" deste repositório para a sua conta do GitHub.

Clone o seu fork para a sua máquina local.

2. Configuração na Netlify
Crie uma conta na Netlify.

No seu painel, clique em "Add new site" > "Import an existing project" e conecte com o seu repositório do GitHub.

As configurações de build podem ser deixadas em branco, pois a Netlify detectará automaticamente o index.html.

3. Configurar a Chave de API (Variável de Ambiente)
Esta é a etapa mais importante para a funcionalidade de IA funcionar.

No painel do seu site na Netlify, vá para Site settings > Build & deploy > Environment.

Clique em "Add a variable".

Adicione a seguinte variável:

Key: GEMINI_API_KEY

Value: SUA_CHAVE_DE_API_DO_GEMINI

Clique em Save.

4. Fazer o Deploy
Após configurar a variável de ambiente, vá para a aba "Deploys" do seu site na Netlify.

Clique em "Trigger deploy" > "Deploy site" para publicar as últimas alterações com a nova configuração.

O seu site estará no ar e totalmente funcional!

👤 Contato
Bruna Santanna - Fundadora da Newscale Consulting

LinkedIn: [[Seu Perfil no LinkedIn]](https://www.linkedin.com/in/bruna-araujo-santanna/)

E-mail: brunasantanna.ia@gmail.com

📄 Licença
Este projeto está sob a licença MIT. Veja o ficheiro LICENSE para mais detalhes.
