// --- SCRIPT PARA O ACORDEÃO DO FAQ ---

// Seleciona todas as perguntas
const faqQuestions = document.querySelectorAll('.faq-question');

// Adiciona um evento de clique para cada pergunta
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Pega o elemento pai (.faq-item) da pergunta clicada
        const item = question.parentElement;
        
        // Adiciona ou remove a classe 'active' para abrir/fechar a resposta
        item.classList.toggle('active');

        // Opcional: Fechar outras perguntas quando uma é aberta
        faqQuestions.forEach(otherQuestion => {
            // Verifica se a outra pergunta não é a que foi clicada
            if (otherQuestion !== question) {
                otherQuestion.parentElement.classList.remove('active');
            }
        });
    });
});