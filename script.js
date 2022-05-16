const tela = document.querySelector('.tela');
const botoes = document.querySelectorAll('button').forEach(e => {
    e.onclick = () => {
        const valor = e.value;
        if (valor == 'c' || valor == '=' || valor == 'del') {
            executeFunctions(valor);
        } else if (!isNaN(valor)) {
            exibirTela(valor);
        } else {
            const ultimoValor = getUltimoValor(tela.innerHTML);
            if (ultimoValor != '/' && ultimoValor != '*' && ultimoValor != '-' && ultimoValor != '+' && ultimoValor != '.') {
                exibirTela(valor);
            }
        }

    }
})

let clicks = 0;

function exibirTela(valor, limpar = false, zerarClick = false, valorType = 'number') {
    if (tela.innerHTML.length >= 13) {
        tela.style.fontSize = `${60 - clicks}px`
    } else {
        tela.style.fontSize = '60px';
    }

    if (tela.innerHTML.length >= 17 && valorType == 'number') {
        null
    } else {
        if (limpar) {
           tela.innerHTML = '';
        }
        if (clicks == 0) tela.innerHTML = '';

        let conteudoTela = tela.innerHTML;
        tela.innerHTML = conteudoTela + valor;

        zerarClick ? clicks = 0 : clicks++;
    }

}

function calcular(conta) {
    const resultado = eval(conta);
    if (resultado.toString().length > 13) {
        return resultado.toFixed(3);
    } else {
        return resultado;
    }

}

function getUltimoValor(valor) {
    const ultimoValor = valor.slice(-1);
    return ultimoValor;
}

function executeFunctions(valor) {
    switch (valor) {
        case 'c':
            exibirTela('0', true, true, 'function');
            break;
        case '=':
            const resultado = calcular(tela.innerHTML);
            exibirTela(resultado, true, false, 'function');
            break;
        case 'del':
            const tamanhoValor = tela.innerHTML.length;
            const semUltimoValor = tela.innerHTML.substring(0, tamanhoValor - 1);
            tamanhoValor == 1 ? exibirTela('0', true, true, 'function')
                : exibirTela(semUltimoValor, true, false, 'function');
            break;
    }
}

