document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const closeBtns = document.querySelectorAll('.close');

    loginBtn.addEventListener('click', function() {
        loginModal.style.display = 'block';
    });

    registerBtn.addEventListener('click', function() {
        registerModal.style.display = 'block';
    });

    closeBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            loginModal.style.display = 'none';
            registerModal.style.display = 'none';
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target === loginModal || event.target === registerModal) {
            loginModal.style.display = 'none';
            registerModal.style.display = 'none';
        }
    });
});
