document.addEventListener('DOMContentLoaded', function() {
    let transacoes = [];
    let totalEntradas = 0;
    let totalSaidas = 0;

    function atualizarTotais() {
        document.getElementById('entradas').textContent = `R$ ${totalEntradas.toFixed(2)}`;
        document.getElementById('saidas').textContent = `R$ ${totalSaidas.toFixed(2)}`;
        document.getElementById('total').textContent = `R$ ${(totalEntradas - totalSaidas).toFixed(2)}`;
    }

    function adicionarTransacao() {
        const descricao = document.getElementById('descricao').value;
        const valor = parseFloat(document.getElementById('valor').value);
        const entrada = document.getElementById('entrada').checked;
        const saida = document.getElementById('saida').checked;

        if (!descricao || isNaN(valor)) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const tipo = entrada ? '+' : '-';
        if (entrada) {
            totalEntradas += valor;
        } else {
            totalSaidas += valor;
        }

        transacoes.push({
            descricao: descricao,
            valor: valor.toFixed(2),
            tipo: tipo
        });

        document.getElementById('descricao').value = '';
        document.getElementById('valor').value = '';

        atualizarTabela();
        atualizarTotais();
    }

    function atualizarTabela() {
        const tbody = document.getElementById('tbody');
        tbody.innerHTML = ''; // Limpa a tabela

        transacoes.forEach((transacao, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${transacao.descricao}</td>
                <td>R$ ${transacao.valor}</td>
                <td>${transacao.tipo}</td>
            `;
            tbody.appendChild(tr);
        });
    }

    document.getElementById('btnAdd').addEventListener('click', adicionarTransacao);
});
