/*
Aqui estamos no frontend
Esse script captura o evento do botão
Ao clicar, faz uma requisição assíncrona fetch, usando o método POST
Essa requisição vai enviar os dados do formulário (FormData) para o backend.
Espera uma mensagem de resposta, que chegará em formato JSON
*/

const botao = document.querySelector("#bt_cadastrar")

botao.addEventListener('click', enviaDadosForm)

//funcao que fará o envio dos dados para o backend
function enviaDadosForm(event){
    //anula o efeito padrão do button (ex. submit)
    event.preventDefault() 
    
    console.log('clicou no Enviar')
    //localiza o form
    let form = document.querySelector("#form-cadastro");
    //pega os dados preenchidos nos inputs
    let dados = new FormData(form);
    fetch("http://localhost/~speroni/exemplo_backend/cadastro_curso.php",
     {//parametros da requisição
         method: "POST", //método HTTP POST
         body: dados     //dados enviados na requisição
     }
    )
    .then(response => response.json())//vai receber um JSON do backend
    .then(retorno => {//esse retorno vai conter a mensagem recebida
        alert(retorno.mensagem)
        window.location = "index.html"
    }) 
}