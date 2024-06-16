// Получаем модальные окна
var modal = document.getElementById("orderModal");
var productDetail = document.getElementById("productDetail");

// Получаем элементы <span>, которые закрывают модальные окна
var span = document.getElementsByClassName("close")[0];
var closeDetail = document.getElementById("closeDetail");

// Функция для открытия модального окна заказа
function openModal(productName) {
    modal.style.display = "block";
    document.getElementById("productName").value = productName;
}

// Функция для открытия меню с деталями товара
function openProductDetail(product) {
    productDetail.style.display = "block";
    document.getElementById("detailName").innerText = product.name;
    document.getElementById("detailImage").src = product.image;
    document.getElementById("detailDescription").innerText = product.description;
    document.getElementById("detailPrice").innerText = product.price;
}

// Когда пользователь нажимает на <span> (x), закрываем модальное окно заказа
span.onclick = function() {
    modal.style.display = "none";
}

// Когда пользователь нажимает на <span> (x), закрываем модальное окно деталей товара
closeDetail.onclick = function() {
    productDetail.style.display = "none";
}

// Когда пользователь кликает в любом месте вне модального окна, закрываем его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == productDetail) {
        productDetail.style.display = "none";
    }
}

// Добавляем обработчики событий на карточки товаров и кнопки "Купить"
document.querySelectorAll('.product-item').forEach(item => {
    item.addEventListener('click', function(event) {
        var productData = JSON.parse(this.getAttribute('data-product'));
        if (event.target.classList.contains('buy-button')) {
            openModal(productData.name);
        } else {
            openProductDetail(productData);
        }
    });
});
