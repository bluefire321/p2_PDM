import { StyleSheet } from 'react-native';

export const estilosQIV = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121B2D',
  },

  topoQIV: {
    backgroundColor: '#2c3d58',
    marginHorizontal: -20,
    paddingHorizontal: 20,
    paddingTop: 65,
    paddingBottom: 20,
  },
  
  bannerQIV: {
    width: '100%',
    height: 105,
    borderRadius: 16,
    marginBottom: 24,
  },

  conteudo: {
    paddingHorizontal: 20,
    paddingTop: 0,
    paddingBottom: 110,
  },

  titulo: {
    color: '#E5ECF7',
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1,
  },

  subtitulo: {
    color: '#8FB3E2',
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 10,
    marginBottom: 28,
  },

  pesquisa: {
    backgroundColor: '#1B2940',
    color: '#E5ECF7',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#304362',
    paddingHorizontal: 16,
    height: 52,
    fontSize: 14,
  },

  tituloSecao: {
    color: '#E5ECF7',
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 15,
  },

  scrollCategorias: {
    flexGrow: 0,
  },

  listaCategorias: {
    alignItems: 'center',
    gap: 10,
    paddingRight: 8,
  },

  categoria: {
    paddingHorizontal: 17,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#1B2940',
    borderWidth: 1,
    borderColor: '#304362',
  },

  categoriaAtiva: {
    backgroundColor: '#8FB3E2',
    borderColor: '#8FB3E2',
  },

  textoCategoria: {
    color: '#C2CEE0',
    fontSize: 13,
  },

  textoCategoriaAtiva: {
    color: '  ',
    fontWeight: 'bold',
  },

  gradeProdutos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 14,
  },

  cartaoProduto: {
    width: '47%',
    backgroundColor: '#1B2940',
    borderRadius: 16,
    padding: 10,
    marginBottom: 2,
    borderWidth: 1,
    borderColor: '#293952',
  },

  imagemProduto: {
    width: '100%',
    height: 140,
    borderRadius: 11,
    backgroundColor: '#263750',
  },

  nomeProduto: {
    color: '#E5ECF7',
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 19,
    marginTop: 12,
  },

  precoProduto: {
    color: '#9FC5F2',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 7,
  },

  botaoDetalhes: {
    backgroundColor: '#8FB3E2',
    borderRadius: 10,
    paddingVertical: 11,
    alignItems: 'center',
    marginTop: 12,
  },

  textoBotao: {
    color: '#121B2D',
    fontSize: 12,
    fontWeight: 'bold',
  },

  mensagemVazia: {
    color: '#C2CEE0',
    textAlign: 'center',
    marginTop: 24,
    fontSize: 14,
  },
});
