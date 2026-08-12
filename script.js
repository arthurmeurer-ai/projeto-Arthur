// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
    // Captura dos elementos do simulador
    const inputPatrimonio = document.getElementById('patrimonio');
    const inputRetorno = document.getElementById('retorno');
    const btnCotacoes = document.getElementById('btn-cotacoes');

    // Event listeners para os seletores interativos
    if (inputPatrimonio && inputRetorno) {
        inputPatrimonio.addEventListener('input', calcularRendimento);
        inputRetorno.addEventListener('input', calcularRendimento);
    }

    // Event listener para o botão de cotações
    if (btnCotacoes) {
        btnCotacoes.addEventListener('click', atualizarCotacoes);
    }
});

// Função para calcular o rendimento diário de uma fortuna
function calcularRendimento() {
    const patrimonioBilhoes = parseFloat(document.getElementById('patrimonio').value);
    const taxaAnual = parseFloat(document.getElementById('retorno').value);

    // Atualiza os rótulos dinâmicos na tela
    document.getElementById('patrimonio-val').innerText = `US$ ${patrimonioBilhoes} Bilhão${patrimonioBilhoes > 1 ? 'ões' : ''}`;
    document.getElementById('retorno-val').innerText = `${taxaAnual}%`;

    // Cálculo: (Patrimônio em dólares * Taxa) / 365 dias
    const patrimonioTotal = patrimonioBilhoes * 1000000000;
    const rendimentoAnual = patrimonioTotal * (taxaAnual / 100);
    const rendimentoDiario = rendimentoAnual / 365;

    // Formatação monetária em USD
    const formatado = rendimentoDiario.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    });

    document.getElementById('resultado-diario').innerText = formatado;
}

// Função para simular flutuações do mercado de metais preciosos
function atualizarCotacoes() {
    const ouroEl = document.getElementById('gold-price');
    const prataEl = document.getElementById('silver-price');

    if (!ouroEl || !prataEl) return;

    // Gera variações aleatórias leves (-2% a +2%)
    const varOuro = 1 + (Math.random() * 0.04 - 0.02);
    const varPrata = 1 + (Math.random() * 0.04 - 0.02);

    const novoOuro = Math.round(412500 * varOuro);
    const novaPrata = Math.round(5120 * varPrata);

    ouroEl.innerText = `R$ ${novoOuro.toLocaleString('pt-BR')}`;
    prataEl.innerText = `R$ ${novaPrata.toLocaleString('pt-BR')}`;
}
