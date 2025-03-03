let slideIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slider-images img');
    const totalSlides = slides.length;

    slideIndex += direction;

    if (slideIndex < 0) {
        slideIndex = totalSlides - 1; // Si estamos en la primera, vuelve a la última imagen
    } else if (slideIndex >= totalSlides) {
        slideIndex = 0; // Si estamos en la última, vuelve a la primera imagen
    }

    // Mueve el slider a la imagen correcta
    const slider = document.querySelector('.slider-images');
    const slideWidth = slides[0].clientWidth;
    slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const role = document.getElementById('role').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Resetea el mensaje de error
    errorMessage.textContent = '';

    // Verificar el inicio de sesión
    if (role === '' || username === '' || password === '') {
        errorMessage.textContent = 'Por favor complete todos los campos.';
        return;
    }

    if (role === 'admin' && username === 'admin' && password === 'admin123') {
        alert('Bienvenido Administrador');
        window.location.href = '/index5.html'; // Redirige a la página del administrador
    } else if (role === 'client' && username === 'client' && password === 'client123') {
        alert('Bienvenido Cliente');
        window.location.href = '/client-dashboard'; // Redirige a la página del cliente
    } else if (role === 'provider' && username === 'provider' && password === 'provider123') {
        alert('Bienvenido Proveedor');
        window.location.href = '/provider-dashboard'; // Redirige a la página del proveedor
    } else {
        errorMessage.textContent = 'Credenciales incorrectas. Intenta de nuevo.';
    }
});

