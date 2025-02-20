document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Остановить стандартную отправку формы

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Проверка email и пароля перед перенаправлением
            if (email.match(/^[a-zA-Z0-9._%+-]+@(gmail\.com|mail\.ru)$/) && password.length >= 5) {
                console.log("Redirecting..."); // Проверка в консоли
                window.location.href = "https://getbootstrap.com/"; // Перенаправление
            } else {
                alert("Введите корректный email и пароль!");
            }
        });
    } else {
        console.error("Форма loginForm не найдена! Проверьте ID формы.");
    }
});