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
                <button type="button" class="botaoEditar" id="editar-${index}" data-toggle="modal" data-target="#exampleModal" onclick="editarCliente(${index})" >Editar</button>
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

function editarCliente(index) {
    // Obter a linha correspondente ao cliente para editar
    const linhaCliente = document.querySelector(`#editar-${index}`).closest('tr');

    // Obter as informações do cliente dentro da linha
    const nomeInput = linhaCliente.querySelector('td:nth-child(1)');
    const emailInput = linhaCliente.querySelector('td:nth-child(2)');
    const celularInput = linhaCliente.querySelector('td:nth-child(3)');
    const cidadeInput = linhaCliente.querySelector('td:nth-child(4)');

    // Preencher os campos com os dados existentes
    document.getElementById('nomeCliente').value = nomeInput.textContent;
    document.getElementById('emailCliente').value = emailInput.textContent;
    document.getElementById('telefoneCliente').value = celularInput.textContent;
    document.getElementById('cidadeCliente').value = cidadeInput.textContent;

    // Atualize o índice de edição no campo oculto (caso você precise rastrear qual cliente está sendo editado)
    document.getElementById('nomeCliente').dataset.index = index;
}


function limparCampos() {
    document.getElementById('nomeCliente').value = '';
    document.getElementById('emailCliente').value = '';
    document.getElementById('telefoneCliente').value = '';
    document.getElementById('cidadeCliente').value = '';
}
