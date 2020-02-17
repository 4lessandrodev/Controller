let ProdutoController = {
  criarProduto: (req, res) => {
    res.send('Produto cadastrado');
  },
  exibirProduto: (req, res) => {
    res.send({
      descricao: 'Abacate',
      preco: 10.90,
      quantidade: 10
    });
  }
};

module.exports = ProdutoController;