
import {
  useEffect as useEffectIQV,
  useState as useStateIQV,
} from "react";

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

import {
  useLocalSearchParams,
  useRouter,
} from "expo-router";

import {
  produtos as produtosIQV,
  type Produto as ProdutoIQV,
} from "../Data/DataDetalhes";

// Propriedades utilizadas pelo componente de apresentação.
type PropriedadesIQV = {
  produtoIQV: ProdutoIQV;
  aoVoltarIQV?: () => void;
};

// Cor principal da interface.
const AZULADOIQV = "#1b2946";

// Componente responsável pela navegação e localização do produto.
export default function TelaDetalhesIQV() {
  const { id: idIQV } = useLocalSearchParams<{ id?: string }>();

  const roteadorIQV = useRouter();

  // Procura o produto correspondente ao ID recebido.
  const produtoEncontradoIQV = produtosIQV.find(
    (produtoIQV) => String(produtoIQV.id) === idIQV
  );

  // Verifica se o produto realmente existe.
  if (!produtoEncontradoIQV) {
    return (
      <SafeAreaView
        style={estilosIQV.areaSegura}
        edges={["top", "left", "right"]}
      >
        <View style={estilosIQV.tela}>
          <Text style={estilosIQV.tituloseccao}>
            Produto não encontrado.
          </Text>

          <Pressable
            onPress={() => roteadorIQV.back()}
            style={estilosIQV.botaoRedondo}
          >
            <Text>Voltar</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <ConteudoDetalhesIQV
      produtoIQV={produtoEncontradoIQV}
      aoVoltarIQV={() => roteadorIQV.back()}
    />
  );
}

// Componente responsável pela apresentação dos detalhes.
function ConteudoDetalhesIQV({
  produtoIQV,
  aoVoltarIQV,
}: PropriedadesIQV) {

  // Estados responsáveis pelo tamanho e pelos favoritos.
  const [tamanhoSelecionadoIQV, setTamanhoSelecionadoIQV] =
    useStateIQV("M");

  const [favoritoIQV, setFavoritoIQV] =
    useStateIQV(false);

  // Reinicia as opções quando o produto muda.
  useEffectIQV(() => {
    setTamanhoSelecionadoIQV("M");
    setFavoritoIQV(false);
  }, [produtoIQV.id]);

  // Função responsável pela demonstração da compra.
  const manipularCompraIQV = () => {
    Alert.alert(
      "Produto selecionado",
      `${produtoIQV.nome} • Tamanho ${tamanhoSelecionadoIQV}\nPreço: ${formatarPrecoIQV(produtoIQV.preco)}`,
      [{ text: "OK" }]
    );
  };

  return (
    <SafeAreaView
      style={estilosIQV.areaSegura}
      edges={["top", "left", "right"]}
    >
      <View style={estilosIQV.tela}>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={estilosIQV.conteudoScroll}
        >

          <View style={estilosIQV.hero}>

            <Image
              source={{ uri: produtoIQV.imagem }}
              style={estilosIQV.imagemProduto}
              resizeMode="cover"
            />

            <View style={estilosIQV.imagemTopo}>

              <Pressable
                onPress={aoVoltarIQV}
                style={estilosIQV.botaoRedondo}
                accessibilityRole="button"
                accessibilityLabel="Voltar"
              >
                <Ionicons
                  name="chevron-back"
                  size={23}
                  color="#292929"
                />
              </Pressable>

              <Pressable
                onPress={() =>
                  setFavoritoIQV(
                    (favoritoAtualIQV) => !favoritoAtualIQV
                  )
                }
                style={estilosIQV.botaoRedondo}
                accessibilityRole="button"
                accessibilityLabel={
                  favoritoIQV
                    ? "Remover dos favoritos"
                    : "Adicionar aos favoritos"
                }
              >
                <Ionicons
                  name={favoritoIQV ? "heart" : "heart-outline"}
                  size={23}
                  color={favoritoIQV ? "#45689f" : "#292929"}
                />
              </Pressable>

            </View>
          </View>

          <View style={estilosIQV.conteudo}>

            <View style={estilosIQV.tituloLinha}>

              <View style={estilosIQV.tituloContainer}>
                <Text style={estilosIQV.nomeProduto}>
                  {produtoIQV.nome}
                </Text>

                <Text style={estilosIQV.sub}>
                  {produtoIQV.subtitulo}
                </Text>
              </View>

              <View style={estilosIQV.rating}>
                <Ionicons
                  name="star"
                  size={19}
                  color="#ff5900"
                />

                <Text style={estilosIQV.ratingValor}>
                  {produtoIQV.avaliacao.toFixed(1)}
                </Text>

                <Text style={estilosIQV.reviewContagem}>
                  ({produtoIQV.quantidadeDeReviews})
                </Text>
              </View>

            </View>

            <View style={estilosIQV.separador} />

            <Text style={estilosIQV.tituloseccao}>
              Descrição
            </Text>

            <Text style={estilosIQV.descricao}>
              {produtoIQV.descricao}
            </Text>

            <Text
              style={[
                estilosIQV.tituloseccao,
                estilosIQV.tamanhoHeading,
              ]}
            >
              Tamanho
            </Text>

            <View style={estilosIQV.tamanhoFileira}>

              {produtoIQV.tamanhos.map((tamanhoIQV) => {

                const tamanhoEstaSelecionadoIQV =
                  tamanhoSelecionadoIQV === tamanhoIQV;

                return (
                  <Pressable
                    key={tamanhoIQV}
                    onPress={() =>
                      setTamanhoSelecionadoIQV(tamanhoIQV)
                    }
                    style={[
                      estilosIQV.tamanhoBotao,
                      tamanhoEstaSelecionadoIQV &&
                        estilosIQV.tamanhoBotaoSelecionado,
                    ]}
                    accessibilityRole="button"
                    accessibilityState={{
                      selected: tamanhoEstaSelecionadoIQV,
                    }}
                  >
                    <Text
                      style={[
                        estilosIQV.tamanhoTexto,
                        tamanhoEstaSelecionadoIQV &&
                          estilosIQV.tamanhoTextoSelecionado,
                      ]}
                    >
                      {tamanhoIQV}
                    </Text>
                  </Pressable>
                );
              })}

            </View>
          </View>
        </ScrollView>

        <View style={estilosIQV.barraBaixa}>

          <View>
            <Text style={estilosIQV.rotuloPreco}>
              Preço
            </Text>

            <Text style={estilosIQV.preco}>
              {formatarPrecoIQV(produtoIQV.preco)}
            </Text>
          </View>

          <Pressable
            onPress={manipularCompraIQV}
            style={({ pressed: pressionadoIQV }) => [
              estilosIQV.botaoCompra,
              pressionadoIQV &&
                estilosIQV.botaoCompraPressionado,
            ]}
            accessibilityRole="button"
          >
            <Text style={estilosIQV.botaoCompraTexto}>
              Adicionar ao Carrinho.
            </Text>
          </Pressable>

        </View>
      </View>
    </SafeAreaView>
  );
}

// Função responsável pela formatação dos preços.
function formatarPrecoIQV(valorIQV: number) {
  return `$ ${valorIQV.toFixed(2)}`;
}

// Estilização da tela.
const estilosIQV = StyleSheet.create({

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

  imagemTopo: {
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

  tamanhoFileira: {
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
    borderColor: AZULADOIQV,
    backgroundColor: "#FFF7F0",
  },

  tamanhoTexto: {
    color: "#555555",
    fontSize: 13,
  },

  tamanhoTextoSelecionado: {
    color: AZULADOIQV,
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
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  botaoCompra: {
    width: "59%",
    height: 45,
    borderRadius: 24,
    backgroundColor: AZULADOIQV,
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
