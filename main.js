onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const btn = document.querySelector(".button"); // Кнопка для відкриття
    const close = document.querySelector(".close");

    // Переконаємось, що модальне вікно спочатку закрите
    modal.classList.remove("active");

    // Відкриття модального вікна при натисканні на кнопку
    btn.addEventListener("click", function () {
        modal.classList.add("active");
    });

    // Закриття при натисканні на хрестик
    close.addEventListener("click", function () {
        modal.classList.remove("active");
    });

    // Закриття при натисканні за межі модального вікна
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.remove("active");
        }
    });
});