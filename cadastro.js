function funcaocadastrarcliente() {
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const telefone = document.getElementById('nome').value

}if (!nome || !email || !telefone) {
    alert('por favor, preencha todos os campos.')
    return
}

const novocliente = {nome, email, telefone}

let listaclientes = JSON.parse(localStorage.getitem('clientes')) || []

listaclientes.push(novocliente)

localStorage.setItem('clientes', JSON.stringify(listaclientes))

alert('cliente cadastrado com sucesso!')

document.getElementById('formulario-cadastro').reset()