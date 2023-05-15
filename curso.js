
window.addEventListener("load", (event) => {

    //recupera os parametros enviados na URL
    let params = new URLSearchParams(location.search)

    //identifica os elementos na página pelo seu id
    const nome = document.querySelector("#nome-curso")
    const detalhes = document.querySelector("#detalhes-curso")

    fetch('http://localhost/~speroni/exemplo_backend/cursos.php?id='+params.get("id"))
    .then(response => response.json())
    .then(dados => {
        console.log(dados[0])
        curso = dados[0]
        nome.innerHTML = curso.nome
        detalhes.innerHTML = 'O curso tem duração de '+ curso.semestres +' semestres'
    })
    .catch(error => console.error(error))
})