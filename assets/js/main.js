const form = document.querySelector('#formulario');

//Recebe e valida a Operação selecionada
form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputOperacao = e.target.querySelector('#operacao');

    const operacao = Number(inputOperacao.value);

    if(!operacao){
        setResultado('Operação Inválida', false);
        return;
    }

    if(operacao>4){
        setResultado('Operação Inválida', false);
        return;
    }
    let operacaonome;

//Retorna a Operação selecionada

    if(operacao==1) {
        let operacaonome = 'Adição';
        const msg = `Sua operação é ${operacaonome}`;
        setResultado(msg, true);
        revelarInputs();
        capturavalores();
        valorresultado = valor1 + valor2;
        revelarresultado();
    } 

    if(operacao==2) {
        let operacaonome = 'Subtração'; 
        const msg = `Sua operação é ${operacaonome}`;
        setResultado(msg, true);
        revelarInputs();

    } 
    if(operacao==3) {
        let operacaonome = 'Multiplicação'; 
        const msg = `Sua operação é ${operacaonome}`;
        setResultado(msg, true);
        revelarInputs();

    }  
    if(operacao==4) {
        let operacaonome = 'Divisão'; 
        const msg = `Sua operação é ${operacaonome}`;
        setResultado(msg, true);
        revelarInputs();

    }  
    
})

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

//revela campos para inserir os valores
const revelar = document.querySelector('#operacaocampos')
function revelarInputs(){
    revelar.style.display = 'block'
}

function capturavalores (){
    const valor1 = document.querySelector('#valor1');
    const valor2 = document.querySelector('#valor2');
    let valorresultado;
    return valor1, valor2, valorresultado;
}

const revelarresultado = document.querySelector('#resultadooperacao')
function revelarResultado(){
    revelarresultado.style.display = 'block'
    
    const p = criaP();

    p.classList.add('paragrafo-resultado');

    p.innerHTML = valorresultado;
    revelarresultado.appendChild(p);
}