function enviar() {

const nascimento = document.querySelector('input').value.trim()
// ano atual
const ano_Atual = new Date().getFullYear();
const idade = ano_Atual - nascimento;
const paragrafo = document.getElementById('paragrafo');

// enquanto for vazio, 
// espaços ou não numérico, continua pedindo
if (nascimento === "" || isNaN(nascimento)) {
    alert("Por favor, insira um ano de nascimento válido.");
    return; // Importante: impede que o resto da
    //  função execute se o valor for vazio ou inválido

}

if (idade < 16) {
    paragrafo.textContent = `Com ${idade} anos, você não pode votar.`;
}

else if (idade >= 16 && idade <18) {
    paragrafo.textContent = `Com ${idade} anos, o voto é opcional.`;
}

else if (idade >= 18 && idade <65) {
    paragrafo.textContent =  `Com ${idade} anos, o voto é obrigatório.`;
}

else if (idade >= 65) {
    paragrafo.textContent = `Com ${idade} anos, o voto é opcional.`; 
}


}