'use strict';

const construct = document.querySelectorAll('.props__item');
const eS6 = document.querySelectorAll('.props__list');
const object = document.querySelectorAll('.props__item_five');
const region = document.querySelectorAll('.props__item_three');
const optimization = document.querySelectorAll('.props__item');

construct[3].prepend(eS6[5])

object[0].before(region[0]);
region[1].before(object[0]);
object[1].before(region[1]);
region[2].before(object[1]);
object[2].before(region[2]);
region[3].before(object[2]);
object[3].before(region[3]);
region[4].before(object[3]);
object[4].before(region[4]);
region[5].before(object[4]);
object[5].before(region[5]);
region[6].before(object[5]);
object[6].before(region[6]);



eS6[2].append(optimization[8]);
eS6[2].append(optimization[9]);


console.log(region)
console.log(object);

