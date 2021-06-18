//'use strict'
// объявляю переменные
let selector, height, width, background, fontSize, memo;

// создаю объект
const obj = new DomElement (
        selector = prompt('введите селектор'),        
        height = +prompt('введите высоту элемента'),
        width = +prompt('введите ширину элемента'),
        background = prompt('введите цвет фона элемента'),
        fontSize = +prompt('введите размер шрифта')
);
const resource = new DomElement (
        selector = prompt('введите селектор'),        
        height = +prompt('введите высоту элемента'),
        width = +prompt('введите ширину элемента'),
        background = prompt('введите цвет фона элемента'),
        fontSize = +prompt('введите размер шрифта')
);
// создаю класс
function DomElement(selector, height, width, background, fontSize){
        this.selector = selector;
        this.height = height;
        this.width = width;
        this.background = background;
        this.fontSize = fontSize;
}
DomElement(selector, height, width, background, fontSize);
// создаю элемент
DomElement.prototype.createElem = function() {
//проверяю что введено
        if(this.selector[0] === '.') {
                 document.body.innerHTML += `<div class=${this.selector.substr(1)}>${this.memo}</div>`;
                 let elem = document.querySelector(this.selector); 
// получаю стили                 
                    elem.style.cssText = `height:${this.height}px; width:${this.width}px; background:${this.background}; fontSize:${this.fontSize}px;` ;

//проверяю что введено                       
        } else if  (this.selector[0] === '#') {
        document.body.innerHTML += `<p id=${this.selector.substr(1)}>${this.memo}</p>`;
        let elem = document.querySelector(this.selector); 
// получаю стили
            elem.style.cssText = `height:${this.height}px; width:${this.width}px; background:${this.background}; fontSize:${this.fontSize}px;` ;
} return;
};
DomElement.prototype.text = function(){
        this.memo = prompt('Введите текст заметки');
};
// вызов первого объекта
obj.text();
obj.createElem();
//вызов второго объекта
resource.text();
resource.createElem();  //пока закомментировал