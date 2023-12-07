

const key = "1dd612492d71752004f49497a47e77ca"

function colocarDadosNaTela(dados){

  document.querySelector(".city").innerHTML = "Tempo em " + dados.name
  document.querySelector(".temperature").innerHTML = Math.floor(dados.main.temp) + "°C"
  document.querySelector(".text-forecast").innerHTML = dados.weather [0].description
  document.querySelector(".moisture").innerHTML = dados.main.humidity + "% Umidade"
  document.querySelector(".img-forecast").src = `https://openweathermap.org/img/wn/${dados.weather [0].icon}.png`


}


async function buscarCidade(cidade){

 const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())

 colocarDadosNaTela(dados)



}

function cliqueiNoBotao(){
     const cidade = document.querySelector(".input-city").value

     buscarCidade(cidade)
}
