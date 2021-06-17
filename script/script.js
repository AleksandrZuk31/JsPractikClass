//'use strict'
let selector, height, width, bg, fontSize;
// получаю значения переменных
// selector = prompt('введите селектор');
// console.log(selector);
// height = +prompt('введите высоту элемента');
// console.log(height);
// width = +prompt('введите ширину элемента');
// console.log(width);
// bg = prompt('введите цвет фона элемента');
// console.log(bg);
// fontSize = +prompt('введите размер шрифта');
// console.log(fontSize);
// создаю класс

let selector, height, width, bg, fontSize;
// получаю значения переменных
const obj = newDomElement (
        selector = prompt('введите селектор'),        
        height = +prompt('введите высоту элемента'),
        width = +prompt('введите ширину элемента'),
        background = prompt('введите цвет фона элемента'),
        fontSize = +prompt('введите размер шрифта'),
)

// создаю класс
function DomElement(this.selector, this.height, this.width, this.background, this.fontSize){
}; 
DomElement.prototype.createElem = function() {
if(this.selector[0] === '.') {
                 body.innerHTML = `<div class="text-block"></div>`;
this.selector.style.cssText = `${'this.height'px}; ${'this.width'px}; ${this.background}; ${'this.fontSize'px}` ;

                       
}
// создаю элемент
   
//проверяю что введено
        
             // добавляю значение для элемента
                    
                   
// получаю стили
                     

                //     console.log( computedStyle.selector);
                //     console.log( computedStyle.height ); 
                //     console.log( computedStyle.width ); 
                //     console.log( computedStyle.background );
                //     console.log( computedStyle.fontSize );

        //     } else if (selector[0] === '#') {
        //     const blockId = document.createElement('p');
        //             blockId.innerHTML = '<p id="text-pragraf"></p>';
        //             console.log(blockId);
        //             document.body.append(blockId);
        //     } return;
        // };      createElem();       
        //     };
        //             newDomElement()
