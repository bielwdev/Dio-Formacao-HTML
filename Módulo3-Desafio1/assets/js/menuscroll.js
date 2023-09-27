// Variável para armazenar o valor atual do padding-top
var paddingTopValue = 0;
document.getElementById("menudireito").style.paddingLeft = "15px";

// Função para obter a altura total da página
function getPageHeight() {
    return Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
    );
}

// Variável para armazenar o valor atual do padding-top
var paddingTopValue = 0;
// Quantidade adicional que você deseja permitir para descer além do limite da página
var additionalScroll = 350;

// Função para obter a altura total da página
function getPageHeight() {
    return Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
    );
}

// Função para manipular o evento de rolagem (scroll) do mouse
function handleMouseScroll(event) {
    // Verifica a direção do scroll do mouse
    if (event.deltaY > 0) {
        // Scroll para baixo: Aumenta o valor do padding-top em 100
        paddingTopValue += 100;
    } else {
        // Scroll para cima: Diminui o valor do padding-top em 100
        paddingTopValue -= 100;
    }

    // Garante que o valor de paddingTopValue não seja menor que 0
    if (paddingTopValue < 0) {
        paddingTopValue = 0;
    }

    // Obtém a altura da janela do navegador
    var windowHeight = window.innerHeight;

    // Obtém a altura total da página
    var pageHeight = getPageHeight();

    // Garante que o valor de paddingTopValue não seja maior do que a altura da página menos a altura da janela mais a quantidade adicional
    if (paddingTopValue > pageHeight - windowHeight + additionalScroll) {
        paddingTopValue = pageHeight - windowHeight + additionalScroll;
    }

    // Aplica o novo valor de padding-top a um elemento com o ID "seuElemento"
    document.getElementById("menudireito").style.paddingTop = paddingTopValue + "px";

}

// Adiciona um ouvinte de evento para o evento de rolagem do mouse
window.addEventListener("wheel", handleMouseScroll);


// Adiciona uma função de timer
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

//Faz com que o menu volte ao topo ao clicar no botão de Voltar ao Topo
function voltaraotopo(){
    sleep(200).then(() => {document.getElementById("menudireito").style.paddingTop = "0px"});
  
}