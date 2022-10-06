const form = document.querySelector('#formulario');

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

    if(operacao==1) {
        let operacaonome = 'Adição';
        const msg = `Sua operação é ${operacaonome}`;
        setResultado(msg, true);
    } 

    if(operacao==2) {
        let operacaonome = 'Subtração'; 
        const msg = `Sua operação é ${operacaonome}`;
        setResultado(msg, true);
    } 
    if(operacao==3) {
        let operacaonome = 'Multiplicação'; 
        const msg = `Sua operação é ${operacaonome}`;
        setResultado(msg, true);
    }  
    if(operacao==4) {
        let operacaonome = 'Divisão'; 
        const msg = `Sua operação é ${operacaonome}`;
        setResultado(msg, true);
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