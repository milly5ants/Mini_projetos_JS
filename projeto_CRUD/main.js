function adicionarCliente() {
    const cliente = {
        nome: document.getElementById('nomeCliente').value,
        email: document.getElementById('emailCliente').value,
        celular: document.getElementById('telefoneCliente').value,
        cidade: document.getElementById('cidadeCliente').value
    };

    const index = document.getElementById('nomeCliente').dataset.index;

    if (cliente.nome && cliente.email && cliente.celular && cliente.cidade) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${cliente.nome}</td>
            <td>${cliente.email}</td>
            <td>${cliente.celular}</td>
            <td>${cliente.cidade}</td>
            <td>
                <button type="button" class="botaoEditar" id="editar-${index}" onclick="editarCliente(${index})" >Editar</button>
                <button type="button" class="botaoDeletar" id="deletar-${index}" onclick="excluirCliente(${index})">Excluir</button>
            </td>
        `;
        document.querySelector('table>tbody').appendChild(newRow);
    }
    limparCampos()
}

function excluirCliente(index) {
    const excluirRegistroCliente = document.getElementById(`deletar-${index}`).closest('tr');
    excluirRegistroCliente.remove();
}


function limparCampos() {
    document.getElementById('nomeCliente').value = '';
    document.getElementById('emailCliente').value = '';
    document.getElementById('telefoneCliente').value = '';
    document.getElementById('cidadeCliente').value = '';
}