// Aguarda o carregamento completo da página para rodar o script
document.addEventListener('DOMContentLoaded', function() {

    // --- 1. MELHORIAS NO CAMPO DE TELEFONE ---
    const phoneInput = document.getElementById('phone');

    if (phoneInput) {
        // Adiciona uma máscara enquanto o usuário digita
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não for dígito
            value = value.replace(/^(\d{2})(\d)/g, '($1) $2'); // Coloca parênteses nos dois primeiros dígitos
            value = value.replace(/(\d{5})(\d)/, '$1-$2'); // Coloca hífen depois do quinto dígito (para celular)
            e.target.value = value.slice(0, 15); // Limita o tamanho total
        });
    }

    // --- 2. FUNCIONALIDADE DO FORMULÁRIO DE ORÇAMENTO ---
    const budgetForm = document.getElementById('budget-form');

    if (budgetForm) {
        budgetForm.addEventListener('submit', function(event) {
            // Impede o envio padrão do formulário
            event.preventDefault();

            // Pega os valores dos campos
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const description = document.getElementById('description').value;

            // !! IMPORTANTE: Coloque aqui o número de WhatsApp da sua empresa !!
            const numeroWhatsAppEmpresa = '5527999222841'; // Exemplo: 55 para Brasil, 27 para DDD, e o número

            // Monta a mensagem para o WhatsApp
            const textoMensagem = `Olá! Gostaria de solicitar um orçamento.
    *Nome:* ${name}
    *E-mail:* ${email}
    *Telefone:* ${phone}
    *Serviço Requerido:* ${service}
    *Descrição:* ${description}`;

            // Codifica a mensagem para ser usada na URL
            const textoCodificado = encodeURIComponent(textoMensagem);

            // Cria a URL do WhatsApp
            const urlWhatsApp = `https://wa.me/${numeroWhatsAppEmpresa}?text=${textoCodificado}`;

            // Abre o WhatsApp em uma nova aba
            window.open(urlWhatsApp, '_blank');

            // Exibe mensagem de sucesso na tela e limpa o formulário
            const responseMessage = document.getElementById('response-message');
            responseMessage.textContent = 'Obrigado! Abrimos o WhatsApp para você concluir o envio do seu pedido de orçamento.';
            responseMessage.classList.remove('hidden');

            // Limpa o formulário após o envio
            this.reset();

            // Esconde a mensagem de sucesso após alguns segundos
            setTimeout(() => {
                responseMessage.classList.add('hidden');
            }, 5000); // 5 segundos
        });
    }
});