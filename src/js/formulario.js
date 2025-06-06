document.addEventListener('DOMContentLoaded', function() { // 
    const formularioContato = document.querySelector('.form-contato');

    if (formularioContato) {
        
        formularioContato.addEventListener('submit', function(event) {
            let todosCamposPreenchidos = true; 
            const camposObrigatorios = formularioContato.querySelectorAll('input[required], textarea[required]');
            camposObrigatorios.forEach(function(campo) {
                if (campo.value.trim() === '') {
                    todosCamposPreenchidos = false; 
                    campo.classList.add('campo-invalido');  
                } else {
                    campo.classList.remove('campo-invalido'); // 
                }
            });

            
            if (!todosCamposPreenchidos) {
                event.preventDefault(); 
                alert('Por favor, preencha todos os campos obrigatórios para continuar.'); 
            }

        });
    }
});