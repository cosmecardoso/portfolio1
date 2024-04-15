document.addEventListener('DOMContentLoaded', function() {
    var sections = document.querySelectorAll('.section');

    function checkPosition() {
        sections.forEach(function(section) {
            var position = section.getBoundingClientRect().top;
            var screenHeight = window.innerHeight;

            if (position < screenHeight * 0.75) {
                section.classList.add('fade-in');
            }
        });
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);

    // Validação do Formulario
    var form = document.getElementById('contact-form');
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
    var errorElement = document.getElementById('error-message');
    var submitButton = document.getElementById('submit-button');
    var pdfButton = document.getElementById('cur');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var name = nameInput.value;
        var email = emailInput.value;
        var message = messageInput.value;
        
        if (name === '' || email === '' || message === '') {
            errorElement.innerText = 'Por favor preencha todos os campos.';
            return;
        }

        if (!isValidEmail(email)) {
            errorElement.innerText = 'Por favor insira um endereço de e-mail válido.';
            return;
        }

        // Se toda a validação for aprovada, ative o botão PDF
        pdfButton.disabled = false;
        errorElement.innerText = '';
    });

    function isValidEmail(email) {
        var emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    }
});

