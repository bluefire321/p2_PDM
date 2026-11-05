export type Produto = {
  id: string;
  nome: string;
  subtitulo: string;
  descricao: string;
  avaliacao: number;
  quantidadeDeReviews: string;
  preco: number;
  imagem: string;
  tamanhos: string[];
}; //o intuito desse type é criar um modelo para os produtos que serão exibidos na tela de detalhes. Como isso aqui é Banco de Dados, decidi não adotar a convenção "IQV" para as variáveis.

export const produtos: Produto[] = [
  {
    id: "1",
    nome: "Anel inteligente SR6",
    subtitulo: "Anel inteligente para monitoramento de saúde.",
    descricao:
      "Um anel desenvolvido para monitorar sua saúde e bem-estar, oferecendo recursos como monitoramento de frequência cardíaca, rastreamento de sono e notificações inteligentes.",
    avaliacao: 4.5,
    quantidadeDeReviews: "2,330",
    preco: 239.90,
    imagem:
      "https://beafon.com/wp-content/uploads/2024/09/Produktbilder_SmartRing_2.png".replace("\t", ""),
    tamanhos: ["S", "M", "L"],
  },
  {
    id: "2",
    nome: "Anel Colmi R12",
    subtitulo: "Anel de alta tecnologia com design elegante.",
    descricao:
      "Um anel de alta tecnologia com design elegante, projetado para oferecer conforto e estilo em qualquer ocasião.",
    avaliacao: 4.8,
    quantidadeDeReviews: "1,845",
    preco: 129.90,
    imagem:
      "https://lojabrmetaverso.com.br/cdn/shop/files/AnelInteligenteR12SmartColmi2025_0d7e8278-0a4c-4722-a3fd-37625d3f21b9_800x.png?v=1748020651".replace("\t", ""),
    tamanhos: ["S", "M", "L"],
  },
  {
    id: "3",
    nome: "Relógio Honeywell",
    subtitulo: "Relógio inteligente para melhor organização do seu dia.",
    descricao:
      "Um relógio inteligente projetado para ajudá-lo a organizar melhor o seu dia, oferecendo recursos como notificações, monitoramento de atividades e muito mais.",
    avaliacao: 4.7,
    quantidadeDeReviews: "1,620",
    preco: 399.90,
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ZgmsrZHbVhehbEsth2H53A_rOznsrlRm84hS4MJZdJUnJhOn7_Ol9z9Q&s=10".replace("\t", ""),
    tamanhos: ["S", "M", "L"],
  },
  {
    id: "4",
    nome: "Relógio Galaxy 7 8 Ult",
    subtitulo: "Relógio inteligente com tela AMOLED.",
    descricao:
      "Um relógio inteligente com tela AMOLED, projetado para oferecer uma experiência visual impressionante e funcionalidades avançadas.",
    avaliacao: 4.6,
    quantidadeDeReviews: "980",
    preco: 349.90,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_623134-CBT111442169800_052026-F-kit-de-modificacao-de-luxo-para-samsung-galaxy-watch-7-8-ult.webp".replace("\t", ""),
    tamanhos: ["S", "M", "L"],
  },
  {
    id: "5",
    nome: "Colar Xiaomi Band 8",
    subtitulo: "Colar inteligente com detecção de movimento.",
    descricao:
      "Este colar inteligente é equipado com sensores de detecção de movimento, permitindo monitorar suas atividades físicas e receber notificações diretamente no seu pescoço.",
    avaliacao: 4.9,
    quantidadeDeReviews: "2,010",
    preco: 149.90,
    imagem:
      "https://www.techpunt.nl/cdn/shop/files/xiaomi-smart-band-8-pendant-4.jpg?v=1776341764&width=800".replace("\t", ""),
    tamanhos: ["S", "M", "L"],
  },
  {
    id: "6",
    nome: "Colar Shakti Safety",
    subtitulo: "Colar inteligente com recursos de segurança pessoal.",
    descricao:
      "Este colar inteligente oferece recursos de segurança pessoal, como alertas de emergência e monitoramento de localização.",
    avaliacao: 4.7,
    quantidadeDeReviews: "1,275",
    preco: 199.90,
    imagem:
      "https://resqjewelry.com/cdn/shop/files/Shakti_Safety_Necklace_for_woman_Silver_ResQ_Smart_Jewelry.jpg?crop=center&height=1080&v=1764153522&width=1080".replace("\t", ""),
    tamanhos: ["S", "M", "L"],
  },
  {
  id: "7",
    nome: "Pulseira Haptix Flow",
    subtitulo: "Pulseira inteligente com feedback tátil.",
    descricao:
      "Uma pulseira inteligente que oferece feedback tátil para notificações e alertas, permitindo que você fique conectado sem precisar olhar para o seu dispositivo.",
    avaliacao: 4.7,
    quantidadeDeReviews: "1,275",
    preco: 199.90,
    imagem:
      "https://haptixlabs.com/cdn/shop/files/Black_Strap.jpg?v=1788185271&width=713".replace("\t", ""),
    tamanhos: ["S", "M", "L"],
  },
  {
  id: "8",
    nome: "Pulseira Mormaii",
    subtitulo: "Pulseira inteligente com detalhes de design exclusivos.",
    descricao:
      "Uma pulseira inteligente com detalhes de design exclusivos, projetada para oferecer estilo e funcionalidade em um único acessório.",
    avaliacao: 4.7,
    quantidadeDeReviews: "1,275",
    preco: 169.90,
    imagem:
      "https://www.mormaiishop.com.br/upload/produto/imagem/b_pulseira-inteligente-mormaii-preto-preto-355.webp".replace("\t", ""),
    tamanhos: ["S", "M", "L"],
  },
];
