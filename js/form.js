
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    
     var form = document.querySelector("#form-adiciona");
    
    var peso = form.peso.value;
    var altura = form.altura.value;
    var nome = form.nome.value;
    var gordura = form.gordura.value;
    
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = document.createElement("td");
    nomeTd.classList.add("info-nome");
    nomeTd.textContent = nome;
    pacienteTr.appendChild(nomeTd);

    var pesoTd = document.createElement("td");
    pesoTd.classList.add("info-peso");
    pesoTd.textContent = peso;
    pacienteTr.appendChild(pesoTd);

    var alturaTd = document.createElement("td");
    alturaTd.classList.add("info-altura");
    alturaTd.textContent = altura;
    pacienteTr.appendChild(alturaTd);

    var gorduraTd = document.createElement("td");
    gorduraTd.classList.add("info-gordura");
    gorduraTd.textContent = gordura;
    pacienteTr.appendChild(gorduraTd);


    var imcTd = document.createElement("td");
    imcTd.classList.add("info-imc");
    imcTd.textContent = calculaImc(peso, altura);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
} );