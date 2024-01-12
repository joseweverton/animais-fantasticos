export default function initFetchBitCoin() {
  fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(cotacao => {
      const btcPreco = document.querySelector('.btc-preco')
      btcPreco.innerText = (1000 / cotacao.BRL.sell).toFixed(4)

    }).catch(erro => {
      console.log(error(erro))
    })
}





