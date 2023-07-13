async function buscaEndereco(cep) {
    try {
        var mensagemErro = document.getElementById('erro');
        mensagemErro.innerHTML = "";
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCepConvertida = await consultaCep.json();
        if (consultaCepConvertida.erro) {
            throw Error('CEP não existente!');
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');
        cidade.value = consultaCepConvertida.localidade;
        logradouro.value = consultaCepConvertida.logradouro;
        estado.value = consultaCepConvertida.uf;

        return consultaCepConvertida;
    } catch (erro) {
        mensagemErro.innerHTML = `<p> CEP inválido, tente novamente`
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));











