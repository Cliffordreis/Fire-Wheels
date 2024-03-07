//confirmar checkbox
var checkBox = document.getElementById("check_cad");
var bnt_form = document.getElementById("bnt_form");

checkBox.addEventListener("change", function() {
    // Se a caixa de confirmação estiver marcada, habilita o botão, caso contrário, desabilita
    if (checkBox.checked) {
        bnt_form.disabled = false;
    } else {
        bnt_form.disabled = true;
    }
});

//confirmar senha
document.getElementById("formulario_cad").addEventListener("submit", function(event) {
    var senha_cad = document.getElementById("senha_cad").value;
    var senha_conf = document.getElementById("senha_conf").value;
    
    if (senha_cad !== senha_conf) {
        alert("A senha e a confirmação de senha não são iguais.");
        event.preventDefault(); // Impede o envio do formulário se as senhas não forem iguais
    }
});

//confirmar email
document.getElementById("formulario_cad").addEventListener("submit", function(event) {
    var email_cad = document.getElementById("email_cad").value;
    var email_conf = document.getElementById("email_conf").value;
    
    if (email_cad !== email_conf) {
        alert("O email e a confirmação do email não são iguais.");
        event.preventDefault(); // Impede o envio do formulário se as senhas não forem iguais
    }
});

//pattern automático de cep

// Obtém o elemento do campo de CEP
var cepInput = document.getElementById("cep");

// Adiciona um ouvinte de evento de entrada ao campo de CEP
cepInput.addEventListener("input", function() {
    // Obtém o valor atual do campo de CEP
    var cepValue = cepInput.value;
    
    // Remove qualquer caractere que não seja número do valor do CEP
    var formattedCep = cepValue.replace(/\D/g, "");
    
    // Verifica se o CEP tem o formato correto (XXXXX-XXX)
    if (/^(\d{5})(\d{3})?$/.test(formattedCep)) {
        // Se o formato estiver correto, adiciona o hífen automaticamente
        formattedCep = formattedCep.replace(/^(\d{5})(\d{3})$/, "$1-$2");
    }
    
    // Atualiza o valor do campo de CEP com o valor formatado
    cepInput.value = formattedCep;
});

//pattert automático de número de celular

// Seleciona o campo de entrada do número de celular pelo ID
var inputNumeroCelular = document.getElementById('numeroCelular');

// Adiciona um ouvinte de evento para o evento 'input' no campo de entrada
inputNumeroCelular.addEventListener('input', function(event) {
    // Obtém o valor atual do campo de entrada
    var numeroCelular = event.target.value;
    
    // Remove todos os caracteres não numéricos do número de celular
    numeroCelular = numeroCelular.replace(/\D/g, '');
    
    // Verifica se o número de celular tem pelo menos 11 dígitos
    if (numeroCelular.length >= 11) {
        // Formata o número de celular no formato desejado: 81 98888-8888
        numeroCelular = numeroCelular.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else {
        // Se o número de celular não tem pelo menos 11 dígitos, mantém o valor original
        numeroCelular = numeroCelular;
    }
    
    // Define o valor formatado de volta no campo de entrada
    event.target.value = numeroCelular;
});