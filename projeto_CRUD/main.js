'use strict'

//Interação com o layout

const cliente = {
    nome: document.getElementById('nomeCliente').value,
    email: document.getElementById('emailCliente').value,
    celular: document.getElementById('telefoneCliente').value,
    cidade: document.getElementById('cidadeCliente').value
}
const index = document.getElementById('nomeCliente').dataset.index

    function adicionarCliente (){
            if (cliente.nome && cliente.email && cliente.celular && cliente.cidade) {
                const newRow = document.createElement('tr');
                newRow.innerHTML = `
                    <td>${cliente.nome}</td>
                    <td>${cliente.email}</td>
                    <td>${cliente.celular}</td>
                    <td>${cliente.cidade}</td>
                    <td>
                        <button type="button" id="editar-${index}">Editar</button>
                        <button type="button" id="deletar-${index}" >Excluir</button>
                    </td>
                `;
                document.querySelector('table>tbody').appendChild(newRow);
            } 

          
    }
    


