//seleciona o elemento com id=dados
const dados = document.querySelector("#dados")

//evento de carregamento completo da página
window.addEventListener("load", (event) => {
    //requisição GET 
    fetch('http://localhost/~speroni/exemplo_backend/cursos.php')
    .then(response => response.json())
    .then(data => {
        //console.log(data)
        data.forEach(element => {
            let parag = document.createElement('p')
            let a = document.createElement('a')
            a.href = 'curso.html?id='+element.id
            a.innerHTML = element.nome
            parag.appendChild(a)
            dados.appendChild(parag)
            console.log(element) 
        });

    })
    .catch(error => console.error(error));
});

