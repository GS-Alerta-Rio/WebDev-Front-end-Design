document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quiz-form');
    const resultsContainer = document.getElementById('quiz-results');

    // Defina aqui as respostas corretas para cada pergunta.
    // A chave é o 'name' do input radio (q1, q2, etc.) e o valor é a resposta correta.
    const correctAnswers = {
        q1: 'c', // Exemplo: Resposta correta para a questão 1 é 'c'
        q2: 'c',
        q3: 'a',
        q4: 'd',
        q5: 'd',
        q6: 'b',
        q7: 'a',
        q8: 'c',
        q9: 'b',
        q10: 'b'
        // Adicione as respostas para q2, q3, ..., q10
    };

    if (quizForm) {
        quizForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            let score = 0;
            const totalQuestions = Object.keys(correctAnswers).length;
            const userAnswers = {};

            // Coleta as respostas do usuário
            for (let i = 1; i <= totalQuestions; i++) {
                const questionName = `q${i}`;
                const selectedOption = quizForm.querySelector(`input[name="${questionName}"]:checked`);

                if (selectedOption) {
                    userAnswers[questionName] = selectedOption.value;
                    if (selectedOption.value === correctAnswers[questionName]) {
                        score++;
                    }
                } else {
                    userAnswers[questionName] = null; // Nenhuma resposta selecionada
                }
            }

            // Exibe o resultado
            if (resultsContainer) {
                resultsContainer.innerHTML = `
                    <h2>Seu Resultado:</h2>
                    <p>Você acertou ${score} de ${totalQuestions} perguntas!</p>
                `;
                // Opcional: Adicionar mais detalhes, como quais perguntas foram acertadas/erradas
            } else {
                console.error("Elemento de resultados não encontrado!");
            }
        });
    } else {
        console.error("Formulário do quiz não encontrado!");
    }
});