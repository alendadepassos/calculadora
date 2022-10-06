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
        setOperacao(operacao);
    } 

    if(operacao==2) {
        let operacaonome = 'Subtração'; 
        const msg = `Sua operação é ${operacaonome}`;
        setResultado(msg, true);
        setOperacao(operacao);
    } 
    if(operacao==3) {
        let operacaonome = 'Multiplicação'; 
        const msg = `Sua operação é ${operacaonome}`;
        setResultado(msg, true);
        setOperacao(operacao);
    }  
    if(operacao==4) {
        let operacaonome = 'Divisão'; 
        const msg = `Sua operação é ${operacaonome}`;
        setResultado(msg, true);
        setOperacao(operacao);
    }  
    
})

function criaP(){
    const p = document.createElement('p');
    return p;
}

function criaInputs(){
    const divAtual = document.getElementById("operacaocampos");
    const ParagrafoNovo = document.createTextNode("Digite os Valores");
    const Input1 = document.createElement('input');
    const Input2 = document.createElement('input');
    const btnconfirma = document.createElement('button');
    const btntexto = document.createTextNode("Confirmar");
    btnconfirma.appendChild(btntexto);
    divAtual.appendChild(ParagrafoNovo);
    divAtual.appendChild(Input1);
    divAtual.appendChild(Input2);
    divAtual.appendChild(btnconfirma);
}

function setOperacao(operacao){
    criaInputs();
   // const Input1 = e.target.querySelector('#operacao');
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