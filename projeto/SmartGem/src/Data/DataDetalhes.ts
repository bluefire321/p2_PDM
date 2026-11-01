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
}; //o intuito desse type é criar um modelo para os produtos que serão exibidos na tela de detalhes.

export const produtos: Produto[] = [
  {
    id: "coffee-01",
    nome: "Espresso Coffee",
    subtitulo: "with Chocolate",
    descricao:
      "A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85 ml of fresh milk. A smooth coffee with a creamy texture.",
    avaliacao: 4.5,
    quantidadeDeReviews: "2,330",
    preco: 4.53,
    imagem:
      "https://images.unsplash.com/photo-1534778101976-628	q16b3b8a?auto=format&fit=crop&w=1000&q=85".replace("\t", ""),
    tamanhos: ["S", "M", "L"],
  },
  {
    id: "coffee-02",
    nome: "Caramel Macchiato",
    subtitulo: "with Caramel",
    descricao:
      "A rich espresso combined with steamed milk and a delicate caramel finish. A balanced drink for anyone who enjoys a sweeter coffee.",
    avaliacao: 4.8,
    quantidadeDeReviews: "1,845",
    preco: 5.25,
    imagem:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1000&q=85",
    tamanhos: ["S", "M", "L"],
  },
  {
    id: "coffee-03",
    nome: "Cappuccino",
    subtitulo: "with Milk Foam",
    descricao:
      "A classic combination of espresso, steamed milk and a generous layer of silky milk foam.",
    avaliacao: 4.7,
    quantidadeDeReviews: "1,620",
    preco: 4.80,
    imagem:
      "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=1000&q=85",
    tamanhos: ["S", "M", "L"],
  },
  {
    id: "coffee-04",
    nome: "Iced Latte",
    subtitulo: "with Fresh Milk",
    descricao:
      "A refreshing espresso drink served cold with milk and ice. Smooth, light and easy to enjoy.",
    avaliacao: 4.6,
    quantidadeDeReviews: "980",
    preco: 4.95,
    imagem:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1000&q=85",
    tamanhos: ["S", "M", "L"],
  },
  {
    id: "coffee-05",
    nome: "Mocha",
    subtitulo: "with Chocolate",
    descricao:
      "Espresso, steamed milk and chocolate come together in a creamy drink with a rich cocoa flavor.",
    avaliacao: 4.9,
    quantidadeDeReviews: "2,010",
    preco: 5.60,
    imagem:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=1000&q=85",
    tamanhos: ["S", "M", "L"],
  },
  {
    id: "coffee-06",
    nome: "Flat White",
    subtitulo: "with Microfoam",
    descricao:
      "A double espresso topped with velvety steamed milk. Strong coffee flavor with a smooth finish.",
    avaliacao: 4.7,
    quantidadeDeReviews: "1,275",
    preco: 5.10,
    imagem:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1000&q=85",
    tamanhos: ["S", "M", "L"],
  },
];
