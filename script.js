// Получаем модальное окно
var modal = document.getElementById("orderModal");

// Получаем элемент <span>, который закрывает модальное окно
var span = document.getElementsByClassName("close")[0];

// Функция для открытия модального окна
function openModal(productName) {
    modal.style.display = "block";
    document.getElementById("productName").value = productName;
}

// Когда пользователь нажимает на <span> (x), закрываем модальное окно
span.onclick = function() {
    modal.style.display = "none";
}

// Когда пользователь кликает в любом месте вне модального окна, закрываем его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Добавляем обработчики событий на кнопки "Купить"
document.querySelectorAll('.product-item button').forEach(button => {
    button.addEventListener('click', function() {
        var productName = this.parentElement.querySelector('h3').innerText;
        openModal(productName);
    });
});
