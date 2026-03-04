 **Previsão do Tempo**

Uma aplicação de previsão do tempo moderna e responsiva que consome dados em tempo real. O diferencial deste projeto é a experiência do usuário (UX): a interface se transforma visualmente de acordo com as condições climáticas da cidade pesquisada.

 Tecnologias Utilizadas

HTML5: Estrutura semântica.
CSS3: Estilização com foco em Glassmorphism (efeito de vidro embaçado), Flexbox e transições suaves.
JavaScript (ES6+): Consumo de API (Async/Await), manipulação dinâmica do DOM e lógica de mapeamento de imagens.
OpenWeather API: Fonte de dados climáticos globais.

 Funcionalidades

Busca Global: Pesquise o clima de qualquer cidade do mundo.
Mudança de Fundo Dinâmica: O plano de fundo da aplicação altera-se automaticamente para refletir o clima (Sol, Chuva, Nuvens, Neve, Tempestade ou Neblina).
Ativos Locais: Implementação de imagens locais para garantir que o sistema nunca sofra com links quebrados ou erros de carregamento externo (Resiliência de Software).
 Tratamento de Erros: Feedback visual ao usuário caso a cidade não seja encontrada.
 Responsividade: Layout adaptável para dispositivos móveis e desktop.

 Desafios Técnicos e Aprendizados

O maior desafio deste projeto foi lidar com a instabilidade de bancos de imagens externos (CDNs). Inicialmente, o projeto utilizava links diretos que frequentemente resultavam em erros 404. 

A solução: Implementei um sistema de mapeamento interno onde as chaves de resposta da API (ex: `Rain`, `Clouds`) são vinculadas a caminhos de arquivos locais otimizados. Isso não só eliminou os erros de carregamento, como também melhorou a performance de carregamento da página.


