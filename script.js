
function enviarFormulario(){
    var contaCliente = new Object();

    contaCliente.nome = document.getElementById('nome').value
    contaCliente.idade = document.getElementById('idade').value
    contaCliente.email = document.getElementById('email').value
    contaCliente.telefone = document.getElementById('telefone').value
    contaCliente.cep = document.getElementById('cep').value
    contaCliente.cidade = document.getElementById('cidade').value
    contaCliente.rua = document.getElementById('rua').value
    contaCliente.bairro = document.getElementById('bairro').value

    // Converter para String Json
    var myJSON = JSON.stringify(contaCliente)
    console.log(myJSON)
    console.log(contaCliente)
    alert("Dados enviados!")
}
const preencherFormulario = (endereco) => {
    document.getElementById('rua').value = endereco.logradouro
    document.getElementById('bairro').value = endereco.bairro
    document.getElementById('cidade').value = endereco.localidade
}
//Autopreenchimento
const cepValido = (cep) => {
    if (cep.length == 8) {
        return true;
    }else{
        return false;
    }
}

//Buscar API
const pesquisarCep = async () => {
    const cep = document.getElementById('cep').value
    const url = `https://viacep.com.br/ws/${cep}/json/`
    if (cepValido(cep)) {
        const dados = await fetch(url);
        const endereco =await dados.json();
            preencherFormulario(endereco);
    }
}
document.getElementById('cep').addEventListener('focusout', pesquisarCep)