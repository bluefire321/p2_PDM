import { useState } from 'react';
import { View, Text, TextInput, ScrollView, Image, Pressable, } from 'react-native';
import { produtosQIV } from '../produtos';
import { estilosQIV } from '../ListaP.styles';

const categoriasQIV = [ 'Todos', 'An├®is', 'Rel├│gios', 'Colares', 'Pulseiras', ];

export default function ListaProdutosQIV() {
  const [categoriaSelecionadaQIV, setCategoriaSelecionadaQIV] =
    useState('Todos');

  const [buscaQIV, setBuscaQIV] = useState('');

  const produtosFiltradosQIV = produtosQIV.filter(
    (produtoQIV) => {
      const correspondeCategoriaQIV =
        categoriaSelecionadaQIV === 'Todos' ||
        produtoQIV.categoria === categoriaSelecionadaQIV;

      const correspondeBuscaQIV =
        produtoQIV.nome
          .toLowerCase()
          .includes(buscaQIV.toLowerCase());

      return correspondeCategoriaQIV && correspondeBuscaQIV;
    },
  );

  return (
    <ScrollView
      style={estilosQIV.container}
      contentContainerStyle={estilosQIV.conteudo}
      keyboardShouldPersistTaps="handled"
    >
      {/* Parte superior preta */}
      <View style={estilosQIV.topoQIV}>
        <Image
          source={{
            uri: 'https://img.magnific.com/fotos-gratis/mulher-curtindo-um-fone-de-ouvido-de-realidade-virtual_53876-129655.jpg?semt=ais_hybrid&w=740&q=80UI',
          }}
          style={estilosQIV.bannerQIV}
          resizeMode="cover"
        />

        <Text style={estilosQIV.titulo}>SmartGem</Text>

        <Text style={estilosQIV.subtitulo}>Bem-vindo! Que tal revolucionar o seu visual?</Text>

        <TextInput
          style={estilosQIV.pesquisa}
          placeholder="Buscar joias e acess├│rios..."
          placeholderTextColor="#8A96AA"
          value={buscaQIV}
          onChangeText={setBuscaQIV}
        />
      </View>

      <Text style={estilosQIV.tituloSecao}>Categorias</Text>

      <ScrollView
        horizontal
        style={estilosQIV.scrollCategorias}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={estilosQIV.listaCategorias}
      >
        {categoriasQIV.map((categoriaQIV) => {
          const selecionadaQIV =
            categoriaSelecionadaQIV === categoriaQIV;

          return (
            <Pressable
              key={categoriaQIV}
              onPress={() =>
                setCategoriaSelecionadaQIV(categoriaQIV)
              }
              style={[
                estilosQIV.categoria,
                selecionadaQIV &&
                  estilosQIV.categoriaAtiva,
              ]}
            >
              <Text
                style={[
                  estilosQIV.textoCategoria,
                  selecionadaQIV &&
                    estilosQIV.textoCategoriaAtiva,
                ]}
              >
                {categoriaQIV}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <Text style={estilosQIV.tituloSecao}>Nossos produtos</Text>

      <View style={estilosQIV.gradeProdutos}>
        {produtosFiltradosQIV.map((produtoQIV) => (
          <View
            key={produtoQIV.id}
            style={estilosQIV.cartaoProduto}
          >
            <Image
              source={{ uri: produtoQIV.imagem }}
              style={estilosQIV.imagemProduto}
              resizeMode="cover"
            />

            <Text style={estilosQIV.nomeProduto}>
              {produtoQIV.nome}
            </Text>

            <Text style={estilosQIV.precoProduto}>
              {produtoQIV.preco}
            </Text>

            <Pressable
              style={estilosQIV.botaoDetalhes}
              onPress={() =>
                console.log(
                  'Produto selecionado:',
                  produtoQIV.nome,
                )
              }
            >
              <Text style={estilosQIV.textoBotao}>Ver detalhes</Text>
            </Pressable>
          </View>
        ))}
      </View>

      {produtosFiltradosQIV.length === 0 && (
        <Text style={estilosQIV.mensagemVazia}>Nenhum produto encontrado.</Text>
      )}
    </ScrollView>
  );
}

