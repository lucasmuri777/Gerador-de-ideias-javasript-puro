const btnGerarModelo = document.querySelector('#GerarModelo')


btnGerarModelo.addEventListener('click', carregarModelo)

function carregarModelo(){
    let id = document.querySelector('#idModeloSite').value
    let container = document.querySelector('#siteContainer')
    console.log(sites[id])
    container.innerHTML = sites[id].codigo
}