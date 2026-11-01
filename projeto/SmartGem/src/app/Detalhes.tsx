
import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { produtos, type Produto } from "../Data/DataDetalhes";

type Props = {
  product: Produto;
  onBack?: () => void;
};

const ORANGE = "#E97B16";

// Essa componente é responsável por exibir os detalhes de um produto específico. Ela utiliza o parâmetro "id" passado na navegação para buscar o produto correspondente na lista de produtos. Se o produto for encontrado, ele é exibido com suas informações detalhadas, incluindo imagem, nome, subtítulo, descrição, avaliação, tamanhos disponíveis e preço. O usuário pode selecionar um tamanho e adicionar o produto aos favoritos ou realizar a compra. Caso o produto não seja encontrado, uma mensagem de erro é exibida com a opção de voltar à tela anterior.
export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const router = useRouter();

  // Procura o produto correspondente ao ID recebido.
  const product = produtos.find(
    (item) => String(item.id) === id
  );

  // Verifica se o produto realmente existe.
  if (!product) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.screen}>
          <Text>Produto não encontrado.</Text>

          <Pressable onPress={() => router.back()}>
            <Text>Voltar</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <ProductDetailsContent
      product={product}
      onBack={() => router.back()}
    />
  );
}

// Componente responsável pela interface dos detalhes.
function ProductDetailsContent({ product, onBack }: Props) {
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
    <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
      <View style={styles.screen}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.hero}>
            <Image
              source={{ uri: product.imagem }}
              style={styles.productImage}
              resizeMode="cover"
            />

            <View style={styles.imageTopBar}>
              <Pressable
                onPress={onBack}
                style={styles.roundButton}
                accessibilityRole="button"
                accessibilityLabel="Voltar"
              >
                <Ionicons name="chevron-back" size={23} color="#292929" />
              </Pressable>

              <Pressable
                onPress={() => setIsFavorite((current) => !current)}
                style={styles.roundButton}
                accessibilityRole="button"
                accessibilityLabel={
                  isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"
                }
              >
                <Ionicons
                  name={isFavorite ? "heart" : "heart-outline"}
                  size={23}
                  color={isFavorite ? ORANGE : "#292929"}
                />
              </Pressable>
            </View>
          </View>

          <View style={styles.content}>
            <View style={styles.titleRow}>
              <View style={styles.titleContainer}>
                <Text style={styles.productName}>{product.nome}</Text>
                <Text style={styles.subtitle}>{product.subtitulo}</Text>
              </View>

              <View style={styles.rating}>
                <Ionicons name="star" size={19} color={ORANGE} />
                <Text style={styles.ratingValue}>{product.avaliacao.toFixed(1)}</Text>
                <Text style={styles.reviewCount}>({product.quantidadeDeReviews})</Text>
              </View>
            </View>

            <View style={styles.separator} />

            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>{product.descricao}</Text>

            <Text style={[styles.sectionTitle, styles.sizeHeading]}>Size</Text>
            <View style={styles.sizeRow}>
              {product.tamanhos.map((size) => {
                const selected = selectedSize === size;
                return (
                  <Pressable
                    key={size}
                    onPress={() => setSelectedSize(size)}
                    style={[styles.sizeButton, selected && styles.sizeButtonSelected]}
                    accessibilityRole="button"
                    accessibilityState={{ selected }}
                  >
                    <Text
                      style={[
                        styles.sizeText,
                        selected && styles.sizeTextSelected,
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

        <View style={styles.bottomBar}>
          <View>
            <Text style={styles.priceLabel}>Price</Text>
            <Text style={styles.price}>{formatPrice(product.preco)}</Text>
          </View>

          <Pressable
            onPress={handleBuy}
            style={({ pressed }) => [
              styles.buyButton,
              pressed && styles.buyButtonPressed,
            ]}
            accessibilityRole="button"
          >
            <Text style={styles.buyButtonText}>Buy Now</Text>
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
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContent: {
    paddingBottom: 18,
  },
  hero: {
    height: 330,
    backgroundColor: "#F4F4F4",
    position: "relative",
    overflow: "hidden",
  },
  productImage: {
    width: "100%",
    height: "100%",
  },
  imageTopBar: {
    position: "absolute",
    top: 12,
    left: 16,
    right: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  roundButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "rgba(255,255,255,0.92)",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    paddingHorizontal: 19,
    paddingTop: 19,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  titleContainer: {
    flex: 1,
  },
  productName: {
    color: "#202020",
    fontSize: 19,
    fontWeight: "700",
  },
  subtitle: {
    color: "#555555",
    fontSize: 13,
    marginTop: 5,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingValue: {
    color: "#333333",
    fontSize: 15,
    fontWeight: "600",
  },
  reviewCount: {
    color: "#999999",
    fontSize: 12,
  },
  separator: {
    height: 1,
    backgroundColor: "#EAEAEA",
    marginTop: 20,
    marginBottom: 17,
  },
  sectionTitle: {
    color: "#252525",
    fontSize: 15,
    fontWeight: "700",
  },
  description: {
    color: "#666666",
    fontSize: 13,
    lineHeight: 21,
    marginTop: 15,
  },
  sizeHeading: {
    marginTop: 22,
    marginBottom: 15,
  },
  sizeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  sizeButton: {
    flex: 1,
    height: 43,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  sizeButtonSelected: {
    borderColor: ORANGE,
    backgroundColor: "#FFF7F0",
  },
  sizeText: {
    color: "#555555",
    fontSize: 13,
  },
  sizeTextSelected: {
    color: ORANGE,
    fontWeight: "600",
  },
  bottomBar: {
    borderTopWidth: 1,
    borderTopColor: "#EEEEEE",
    paddingHorizontal: 19,
    paddingTop: 13,
    paddingBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
  },
  priceLabel: {
    color: "#A0A0A0",
    fontSize: 12,
    marginBottom: 4,
  },
  price: {
    color: ORANGE,
    fontSize: 16,
    fontWeight: "700",
  },
  buyButton: {
    width: "59%",
    height: 45,
    borderRadius: 24,
    backgroundColor: ORANGE,
    alignItems: "center",
    justifyContent: "center",
  },
  buyButtonPressed: {
    opacity: 0.82,
  },
  buyButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },
});