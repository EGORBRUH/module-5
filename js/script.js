'use strict';


const item = document.querySelectorAll('.item');
const list = document.querySelector('.items');
const imgItem = document.querySelectorAll('.item__image');
const textItem = document.querySelectorAll('.props__list');
const removeAds = document.querySelector('.ads')
const textItemFour = document.querySelectorAll('.props__item_four');
const textItemTwo = document.querySelectorAll('.props__item_two');
const contextItem = document.querySelectorAll('.content');
const textTitle = document.querySelectorAll('.item__title');
list.prepend(item[1]);
removeAds.remove();
console.log(textItem);
console.log(textTitle);
console.log(contextItem);
console.log(imgItem);

contextItem[4].prepend(imgItem[2]);
contextItem[4].append(textItem[2]);
imgItem[4].remove();
contextItem[4].style.background = '#46a75e';
contextItem[2].style.background = '#466ba7';
// contextItem[3].style.background = '#466ba7';
textItemFour[2].append(textItemFour[5]);
textItemTwo[7].append(textItemTwo[8]);
textItemTwo[8].append(textItemTwo[9]);
item[1].insertAdjacentElement('afterend', item[4]);
item[0].insertAdjacentElement('afterend', item[2]);
item[0].insertAdjacentElement('beforebegin', item[3]);

contextItem[5].append(textTitle[1]);
contextItem[2].append(textTitle[4]);
textTitle[1].insertAdjacentElement('afterend', textItem[5]);


const clone2 = textItem[3].cloneNode(true);
const imgClone = imgItem[4].cloneNode(true);
const titleClone = textTitle[4].cloneNode(true);
const clone = textItem[4].cloneNode(true);
textItem[3].remove();
textItem[4].remove();
textTitle[4].remove();
contextItem[3].append(clone);

contextItem[2].append(imgClone);
contextItem[2].append(titleClone);
contextItem[2].append(clone2);


// "afterend" – вставить html непосредственно после elem.
// "beforebegin" – вставить html непосредственно перед elem,


//
