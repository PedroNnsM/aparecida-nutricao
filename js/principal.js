


var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

  if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
        
    }
} 

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

    
    // var paciente = obtemPacienteDoFormulario(form);
    
    // var erros = validaPaciente(paciente);
    
    // if (erros.length > 0) {
    //     exibeMensagensDeErro(erros);
    //     return;
    // }
    
    // adicionaPacienteNaTabela(paciente);
    
    // form.reset();
    
    // var mensagensErro = document.querySelector("#mensagens-erro");
    // mensagensErro.innerHTML = "";
}
);