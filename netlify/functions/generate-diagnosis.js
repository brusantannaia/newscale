exports.handler = async function(event) {
  // Garante que a função só aceita pedidos do tipo POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    // Obtém a descrição do negócio enviada pelo site
    const { description } = JSON.parse(event.body);

    // Obtém a sua chave secreta das variáveis de ambiente da Netlify
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      throw new Error("A chave da API não foi configurada nas variáveis de ambiente da Netlify.");
    }

    // O prompt para a IA continua o mesmo
    const prompt = `Você é um consultor especialista da Newscale. O usuário a seguir descreve o negócio dele. Analise a descrição, identifique a principal 'dor' ou desafio do negócio e, com base nos serviços da Newscale (Atendimento automático 24/7, Secretária virtual com agenda integrada, Mensagens inteligentes em massa, Renovação de pacotes com IA, Automação conectada ao CRM), sugira 1 ou 2 soluções específicas que trariam o maior impacto. Apresente o resultado em formato de um mini-diagnóstico, começando com '### Diagnóstico Preliminar Newscale' e usando uma linguagem clara e acessível para empreendedores, com negrito para destacar os pontos importantes usando asteriscos (**exemplo**). O negócio do usuário é: "${description}"`;
    
    const chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
    const payload = { contents: chatHistory };
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
    
    // Faz a chamada segura para a API da Google
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Erro da API da Google:", errorBody);
      return { statusCode: response.status, body: JSON.stringify({ error: "Falha ao comunicar com a API da Google." }) };
    }

    const result = await response.json();

    // Envia o resultado de volta para o site
    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };

  } catch (error) {
    console.error("Erro na função da Netlify:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
