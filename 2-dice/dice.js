const RANGE_MIN = 2;
const RANGE_MAX = 20;
const excludedNum = [18];

function isString(val) {
    return typeof val === 'string' || val instanceof String;
}

function getNumber(val) {
    const numVal = Number(val);

    if (Number.isNaN(numVal) || !Number.isFinite(numVal) || numVal <= 0) {
        return null;
    }

    if (numVal % 2 !== 0) {
        return null;
    }

    return numVal;
}

function getRange(min, max) {
    const minNum = getNumber(min);
    const maxNum = getNumber(max);

    if (!minNum || !maxNum || minNum > maxNum) {
        return [];
    }

    const list = [];

    for (let i = minNum; i <= maxNum; i += 2) {
        if (excludedNum.indexOf(i) !== -1) {
            continue;
        }

        list.push(`d${i}`);
    }

    return list;
}

function isDiceType(val) {
    const list = getRange(RANGE_MIN, RANGE_MAX)
    return list.indexOf(val) !== -1;
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomDice(type) {
    if (!isString(type) || !isDiceType(type)) {
        return null;
    }

    const maxNum = Number(type.slice(1, type.length));

    return random(1, maxNum);
}

console.log(getRandomDice('d16'));
