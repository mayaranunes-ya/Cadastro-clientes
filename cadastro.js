function funcaoCadastrarCliente() {
    // Identifica os campos no HTML e pega os valores.
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const telefone = document.getElementById('telefone').value

    // Verifica se os campos estão vazios.
    // Mostra mensagem de alerta no navegador.
    if (!nome || !email || !telefone) {
        alert('Por favor, preencha todos os campos.')
        return
    }

    // Cria uma variável com os dados do cliente.
    const novoCliente = {nome, email, telefone}

    // Pega a lista de clientes já existente ou cria uma vazia.
    let listaClientes = JSON.parse(localStorage.getItem('clientes')) || []

    // Adiciona um novo cliente na lista.
    listaClientes.push(novoCliente)

    // Salva no localStorage (Armazenamento local no navegador)
    localStorage.setItem('clientes', JSON.stringify(listaClientes))

    // Mensagem do navegador confirmando salvamento.
    alert('Cliente cadastrado com sucesso!')

    // Limpa o formulário.
    document.getElementById('formulario-cadastro').reset()
}