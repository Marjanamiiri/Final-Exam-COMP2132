const message = document.querySelector("main");

const authorName  = "Marjan Amiri"
message.innerHTML = `<h2>COMP2132 Practical Exam</h2><p>The JavaScript used by this HTML is authored by ${authorName}</p>`


const $btnProducts = $('#products');
const $btnServices = $('#services');
const $menu        = $('.sub-nav');

$menu.hide();

$btnProducts.click(function () {
    $(this).next().slideToggle();
});
$btnServices.click(function () {
    $(this).next().slideToggle();
});
$btnProducts.mouseout(function () {
    $(this).next().slideUp();
});
$btnServices.mouseout(function () {
    $(this).next().slideUp();
});
