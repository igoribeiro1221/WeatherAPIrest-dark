const key = "e41ea2fe660d7990fbed032e19a92521"


function colocarDadosNaTela(dados) {
document.querySelector(".city").innerHTML = "Tempo em " + dados.name
document.querySelector(".country").innerHTML = dados.sys.country
document.querySelector(".temp").innerHTML = Math.round(dados.main.temp) + "°C"
document.querySelector(".img-prevision").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
document.querySelector(".weather").innerHTML = dados.weather[0].description
document.querySelector(".humi").innerHTML = "Umidade de " + dados.main.humidity + "%"
console.log(dados)
}

async function buscarCicade(cidade) {
  const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
  
  colocarDadosNaTela(dados)
}


function clicarNoBotao () {
  const cidade = document.querySelector(".input-city").value
  buscarCicade(cidade)
}