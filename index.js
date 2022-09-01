//находим все позиции по классу item (картинки),
//добавляем прослушки при наведении мыши
//удаляем класс
//добавляем класс

const items = document.querySelectorAll('.item');

items.forEach (item => {
    item.addEventListener('mouseover', ()=>{
    removeFocus();
    item.classList.add ('selected');
    })

removeFocus = () => {
    items.forEach(item => {
    item.classList.remove ('selected');
    })
}
})
