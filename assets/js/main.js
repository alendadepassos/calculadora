const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputOperacao = e.target.querySelector('#operacao');
    const input1 = e.target.querySelector('#valor1');
    const input2 = e.target.querySelector('#valor2');

    const operacao = Number(inputOperacao.value);
    const valor1 = Number(input1.value);
    const valor2 = Number(input2.value);


    if(!operacao){
        setResultado('Operação Inválida', false);
        return;
    }

    if(operacao>4){
        setResultado('Operação Inválida', false);
        return;
    }

    if(operacao==1) {
        let operacaonome = 'Adição';
        const msg = `Sua operação é ${operacaonome}`;
        setResultado(msg, true);
        resultadovalor = valor1+valor2;
        const msgresultado = `${valor1} + ${valor2} = ${resultadovalor}`;
        setResultadoConta(msgresultado, true);
        }

    if(operacao==2) {
        let operacaonome = 'Subtração';
        const msg = `Sua operação é ${operacaonome}`;
        setResultado(msg, true);
        resultadovalor = valor1-valor2;
        const msgresultado = `${valor1} - ${valor2} = ${resultadovalor}`;
        setResultadoConta(msgresultado, true);
        }
    
    if(operacao==3) {
        let operacaonome = 'Multiplicação';
        const msg = `Sua operação é ${operacaonome}`;
        setResultado(msg, true);
        resultadovalor = valor1*valor2;
        const msgresultado = `${valor1} x ${valor2} = ${resultadovalor}`;
        setResultadoConta(msgresultado, true);
        }

    if(operacao==4) {
        let operacaonome = 'Divisão';
        const msg = `Sua operação é ${operacaonome}`;
        setResultado(msg, true);
        resultadovalor = valor1/valor2;
        const msgresultado = `${valor1} / ${valor2} = ${resultadovalor}`;
        setResultadoConta(msgresultado, true);
        }

function criaP(){
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    
    const p = criaP();

    if(isValid){
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);

}

function setResultadoConta(msgresultado){
    const resultado = document.querySelector('#resultadooperacao');
    resultado.innerHTML = '';
    
    const p = criaP();
        
    p.classList.add('paragrafo-resultado');

    p.innerHTML = msgresultado;
    resultado.appendChild(p);

}

})