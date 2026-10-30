document.addEventListener('DOMContentLoaded', () => {

    // Identifica o campo HTML de lista (<ul>).
    const listaClientes = document.getElementById('lista-clientes')

    // Recupera os clientes salvos.
    const clientes = JSON.parse(localStorage.getItem('clientes')) || []

    // Se não existir clientes, mostra a mensagem abaixo.
    if (clientes.length === 0) {
        listaClientes.innerHTML = `<li>Nenhum cliente cadastrado.</li>`
    }

    const gifsPapaiNoel = [
        'https://www.icegif.com/wp-content/uploads/2024/12/santa-claus-icegif-39.gif',
        'https://www.icegif.com/wp-content/uploads/2024/12/santa-claus-icegif-28.gif',
        'https://www.icegif.com/wp-content/uploads/2024/12/santa-claus-icegif-29.gif'
    ]
    const gifMariaMadalena = 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Ciseri-Il_trasporto_di_Cristo_al_sepolcro.gif'

    // Percorre a lista de clientes já cadastrados.
    clientes.forEach((cliente, indice) => {
        const nomeContemMaria = cliente.nome.toLocaleLowerCase('pt-BR').includes('maria')
        const li = document.createElement('li')
        li.classList.add('cliente-item')
        li.innerHTML = `
        <div class="dados-cliente">
            <strong>Nome:</strong> ${cliente.nome} <br>
            <strong>E-mail:</strong> ${cliente.email} <br>
            <strong>Telefone:</strong> ${cliente.telefone}
        </div>
        `

        const imagemCliente = document.createElement('img')
        imagemCliente.className = nomeContemMaria
            ? 'imagem-cliente imagem-maria-madalena'
            : 'imagem-cliente'
        imagemCliente.src = nomeContemMaria
            ? gifMariaMadalena
            : gifsPapaiNoel[indice % gifsPapaiNoel.length]
        imagemCliente.alt = nomeContemMaria
            ? 'Maria Madalena na pintura O transporte de Cristo ao sepulcro'
            : ''
        imagemCliente.loading = 'lazy'
        li.prepend(imagemCliente)

        // Cria na página de clientes.html os espaços necessários para exibir os
        // dados de cada cliente.
        listaClientes.appendChild(li)
    });

    })