function enviarCorreio() {
    // 1. Pega os valores digitados
    const para = document.getElementById('para').value;
    const turma = document.getElementById('turma').value;
    const mensagem = document.getElementById('mensagem').value;

    // 2. Validação básica (não deixa enviar vazio)
    if (!para || !turma || !mensagem) {
        alert("Por favor, preencha todos os campos para enviar o correio!");
        return;
    }

    // 3. Número de WhatsApp da organização (Coloque o número real aqui com DDD)
    // Exemplo: 55 (Brasil) 11 (DDD) 999999999 (Número)
    const telefoneOrganizador = "5511999999999"; 

    // 4. Monta o texto que vai chegar no WhatsApp
    const texto = `*💌 NOVO CORREIO ELEGANTE! 💌*\n\n*Para:* ${para}\n*Turma:* ${turma}\n\n*Mensagem:* ${mensagem}`;

    // 5. Codifica o texto para formato de link (URL)
    const textoCodificado = encodeURIComponent(texto);

    // 6. Cria o link do WhatsApp e redireciona o usuário
    const urlWhatsApp = `https://wa.me/${telefoneOrganizador}?text=${textoCodificado}`;
    
    // Abre no WhatsApp
    window.open(urlWhatsApp, '_blank');
}