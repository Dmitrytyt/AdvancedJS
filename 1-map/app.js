'use strict';

const list = [
    {id: 1, name: 'Вася'},
    {id: 2, name: 'Петя'},
    {id: 1, name: 'Вася'},
];

const idList = list.map(elem => elem.id);
const uniqIdList = [... new Set(idList)];
const result = [];

outer: for (const elem of uniqIdList) {
    for (const el of list) {
        if (elem === el.id) {
            result.push(el);
            continue outer;
        }
    }
}

console.log(result);