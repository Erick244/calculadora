function Calculadora() {
    const tela = document.querySelector('.tela');
    this.exibirTela = (elem, type) => {
        switch (type) {
            case 'numero':
                if (!limit()) {
                    tela.innerHTML == '0' ? tela.innerHTML = elem 
                    : tela.innerHTML += elem;
                }
                break;
            case 'sinal':
                if (!limit()) {
                    isSinal(getUltimoElem()) ? null : tela.innerHTML += elem;
                }
                break;
            case 'funcao':
                const funcoes = {
                    'del': deletarElem,
                    'c': limparTela,
                    '=': tela.innerHTML = calcular()
                };
                funcoes[elem]('0');
                break;
        }
    }

    
    const limit = () => {
        const quant = tela.innerHTML.length;
        if (quant >= 13 && quant < 18) {
            tela.style.fontSize = `${60 - quant}px`;
        } else if (quant == 18) {
            return true;
        }
    }

    const limparTela = (elem = String) => {
        tela.innerHTML = elem;
        tela.style.fontSize = `60px`;
    }

    const calcular = () => {
        return eval(tela.innerHTML);
    }

    const getUltimoElem = () => {
        return tela.innerHTML.slice(-1);
    }

    const isSinal = (elem) => {
        let resposta = null;
        elementos.sinais.forEach(sinal => {
            if (elem == sinal) resposta = true;
        })

        return resposta;
    }

    const deletarElem = () => {
        const quantElem = tela.innerHTML.length;
        const novoElem = tela.innerHTML.substring(0, quantElem-1);
        if (quantElem == 1) {
            limparTela('0');
        } else {
            tela.innerHTML = novoElem;
        }
    }
}

const elementos = {
    sinais: ['-', '+', '/', '*', '.'],
    funcoes: ['=', 'del', 'c'],
    numeros: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
};

document.querySelectorAll('button').forEach(botao => {
    botao.onclick = () => {
        const valor = botao.value;
        const botoes = new Calculadora();
        elementos.sinais.forEach((sinal) => {
            if (valor == sinal) botoes.exibirTela(valor, 'sinal');   
        });
        elementos.funcoes.forEach((funcao) => {

            if (valor == funcao) botoes.exibirTela(valor, 'funcao');
        });
        elementos.numeros.forEach((numero) => {

            if (valor == numero) botoes.exibirTela(valor, 'numero');
        });
    }
})

