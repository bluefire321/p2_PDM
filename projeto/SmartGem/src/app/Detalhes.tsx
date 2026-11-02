
import React, { useEffect, useState } from "react";
import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, View, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";//essa biblioteca só está aqui para exibir os ícones de coração e estrela.
import { useLocalSearchParams, useRouter } from "expo-router";
import { produtos, type Produto } from "../Data/DataDetalhes";

type Props = {
  product: Produto;
  onBack?: () => void;
};

const AZULADO = "#1b2946";

// Esse componente é responsável por exibir os detalhes de um produto específico. Ela utiliza o parâmetro "id" passado na navegação para buscar o produto correspondente na lista de produtos. Se o produto for encontrado, ele é exibido com suas informações detalhadas, incluindo imagem, nome, subtítulo, descrição, avaliação, tamanhos disponíveis e preço. O usuário pode selecionar um tamanho e adicionar o produto aos favoritos ou realizar a compra. Caso o produto não seja encontrado, uma mensagem de erro é exibida com a opção de voltar à tela anterior. Isso deu um trabalho danado.
export default function TelaDetalhes() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const router = useRouter();

  // Procura o produto correspondente ao ID recebido.
  const product = produtos.find(
    (item) => String(item.id) === id
  );

  // Verifica se o produto realmente existe.
  if (!product) {
    return (
      <SafeAreaView style={styles.areaSegura} edges={["top", "left", "right"]}>
        <View style={styles.tela}>
          <Text>Produto não encontrado.</Text>

          <Pressable onPress={() => router.back()}>
            <Text>Voltar</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <ConteudoDetalhes
      product={product}
      onBack={() => router.back()}
    />
  );
}

// Componente responsável pela interface dos detalhes.
function ConteudoDetalhes({ product, onBack }: Props) {
  const [selectedSize, setSelectedSize] = useState("M");
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setSelectedSize("M");
    setIsFavorite(false);
  }, [product.id]);

  const handleBuy = () => {
    Alert.alert(
      "Produto selecionado",
      `${product.nome} • Tamanho ${selectedSize}\nPreço: ${formatPrice(product.preco)}`,
      [{ text: "OK" }]
    );
  };

  return (
    <SafeAreaView style={styles.areaSegura} edges={["top", "left", "right"]}>
      <View style={styles.tela}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.conteudoScroll}
        >
          <View style={styles.hero}>
            <Image
              source={{ uri: product.imagem }}
              style={styles.imagemProduto}
              resizeMode="cover"
            />

            <View style={styles.imagemtopo}>
              <Pressable
                onPress={onBack}
                style={styles.botaoRedondo}
                accessibilityRole="button"
                accessibilityLabel="Voltar"
              >
                <Ionicons name="chevron-back" size={23} color="#292929" />
              </Pressable>

              <Pressable
                onPress={() => setIsFavorite((current) => !current)}
                style={styles.botaoRedondo}
                accessibilityRole="button"
                accessibilityLabel={
                  isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"
                }
              >
                <Ionicons
                  name={isFavorite ? "heart" : "heart-outline"}
                  size={23}
                  color={isFavorite ? "#45689f" : "#292929"}
                />
              </Pressable>
            </View>
          </View>

          <View style={styles.conteudo}>
            <View style={styles.tituloLinha}>
              <View style={styles.tituloContainer}>
                <Text style={styles.nomeProduto}>{product.nome}</Text>
                <Text style={styles.sub}>{product.subtitulo}</Text>
              </View>

              <View style={styles.rating}>
                <Ionicons name="star" size={19} color={'#ff5900'} />
                <Text style={styles.ratingValor}>{product.avaliacao.toFixed(1)}</Text>
                <Text style={styles.reviewContagem}>({product.quantidadeDeReviews})</Text>
              </View>
            </View>

            <View style={styles.separador} />

            <Text style={styles.tituloseccao}>Descrição</Text>
            <Text style={styles.descricao}>{product.descricao}</Text>

            <Text style={[styles.tituloseccao, styles.tamanhoHeading]}>Tamanho</Text>
            <View style={styles.tamanhofileira}>
              {product.tamanhos.map((size) => {
                const selected = selectedSize === size;
                return (
                  <Pressable
                    key={size}
                    onPress={() => setSelectedSize(size)}
                    style={[styles.tamanhoBotao, selected && styles.tamanhoBotaoSelecionado]}
                    accessibilityRole="button"
                    accessibilityState={{ selected }}
                  >
                    <Text
                      style={[
                        styles.tamanhoTexto,
                        selected && styles.tamanhoTextoSelecionado,
                      ]}
                    >
                      {size}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        </ScrollView>

        <View style={styles.barraBaixa}>
          <View>
            <Text style={styles.rotuloPreco}>Preço</Text>
            <Text style={styles.preco}>{formatPrice(product.preco)}</Text>
          </View>

          <Pressable
            onPress={handleBuy}
            style={({ pressed }) => [
              styles.botaoCompra,
              pressed && styles.botaoCompraPressionado,
            ]}
          >
            <Text style={styles.botaoCompraTexto}>Adicionar ao Carrinho.</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

function formatPrice(value: number) {
  return `$ ${value.toFixed(2)}`;
}

const styles = StyleSheet.create({
  areaSegura: {
    flex: 1,
    backgroundColor: "#121B2D",
  },
  tela: {
    flex: 1,
    backgroundColor: "#121B2D",
  },
  conteudoScroll: {
    paddingBottom: 18,
  },
  hero: {
    height: 330,
    backgroundColor: "#121B2D",
    position: "relative",
    overflow: "hidden",
  },
  imagemProduto: {
    width: "100%",
    height: "100%",
  },
  imagemtopo: {
    position: "absolute",
    top: 12,
    left: 16,
    right: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  botaoRedondo: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "rgba(88, 115, 188, 0.92)",
    alignItems: "center",
    justifyContent: "center",
  },
  conteudo: {
    paddingHorizontal: 19,
    paddingTop: 19,
  },
  tituloLinha: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    color: "#fff",
  },
  tituloContainer: {
    flex: 1,
  },
  nomeProduto: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "700",
  },
  sub: {
    color: "#fff",
    fontSize: 13,
    marginTop: 5,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingValor: {
    color: "#333333",
    fontSize: 15,
    fontWeight: "600",
  },
  reviewContagem: {
    color: "#999999",
    fontSize: 12,
  },
  separador: {
    height: 1,
    backgroundColor: "#26638f",
    marginTop: 20,
    marginBottom: 17,
  },
  tituloseccao: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
  },
  descricao: {
    color: "#fff",
    fontSize: 13,
    lineHeight: 21,
    marginTop: 15,
  },
  tamanhoHeading: {
    marginTop: 22,
    marginBottom: 15,
  },
  tamanhofileira: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  tamanhoBotao: {
    flex: 1,
    height: 43,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  tamanhoBotaoSelecionado: {
    borderColor: AZULADO,
    backgroundColor: "#FFF7F0",
  },
  tamanhoTexto: {
    color: "#555555",
    fontSize: 13,
  },
  tamanhoTextoSelecionado: {
    color: AZULADO,
    fontWeight: "600",
  },
  barraBaixa: {
    borderTopWidth: 1,
    borderTopColor: "#EEEEEE",
    paddingHorizontal: 19,
    paddingTop: 13,
    paddingBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#212d6b",
  },
  rotuloPreco: {
    color: "#fff",
    fontSize: 12,
    marginBottom: 4,
  },
  preco: {
    color: '#fff',
    fontSize: 16,
    fontWeight: "700",
  },
  botaoCompra: {
    width: "59%",
    height: 45,
    borderRadius: 24,
    backgroundColor: AZULADO,
    alignItems: "center",
    justifyContent: "center",
  },
  botaoCompraPressionado: {
    opacity: 0.82,
  },
  botaoCompraTexto: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },
});