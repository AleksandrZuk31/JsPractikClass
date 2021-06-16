'use strict'
let selector, height, width, bg, fontSize;
// получаю значения переменных
selector = prompt('введите селектор');
console.log(selector);
height = +prompt('введите высоту элемента');
console.log(height);
width = +prompt('введите ширину элемента');
console.log(width);
bg = prompt('введите цвет фона элемента');
console.log(bg);
fontSize = +prompt('введите размер шрифта');
console.log(fontSize);
// создаю класс
let newDomElement = function (){
    selector = selector;
    height = height;
    width = width;
    bg = bg;
    fontSize = fontSize;
// создаю элемент
   createElem = function(){
//проверяю что введено
        if(selector[0] === '.') {
            const blockDiv = document.createElement('div');
                    blockDiv.classList.add('text-block');
                    blockDiv.innerHTML = '<div class="text-block"></div>';
                    console.log(blockDiv);
             // добавляю значение для элемента
                       let block = {
                         selector : selector.substr(1),
                         height : height,
                         width : width,
                         bg : bg,
                         fontSize : fontSize,
                       }      
               console.log(block);
                   document.body.append(blockDiv);
// получаю стили
                     let computedStyle = getComputedStyle(block);

                    console.log( computedStyle.selector);
                    console.log( computedStyle.height ); 
                    console.log( computedStyle.width ); 
                    console.log( computedStyle.background );
                    console.log( computedStyle.fontSize );

            } else if (selector[0] === '#') {
            const blockId = document.createElement('p');
                    blockId.innerHTML = '<p id="text-pragraf"></p>';
                    console.log(blockId);
                    document.body.append(blockId);
            } return;
        };      createElem();       
            };
                    newDomElement()
