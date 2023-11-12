const MIN_AGE = 14;

function beenBirthday(dateBirth, nowDate) {
    const startDate = new Date(`${nowDate.getFullYear()}-${nowDate.getMonth() + 1}-${nowDate.getDate()}`);
    dateBirth.setFullYear(startDate.getFullYear());

    return startDate.getTime() >= dateBirth.getTime(); 
}

function validateAge(birthday) {
    const dateBirth = new Date(birthday);
    const nowDate = new Date();
    const years = nowDate.getFullYear() - dateBirth.getFullYear();

    if (years > MIN_AGE) {
        return true;
    }

    if (years === MIN_AGE && beenBirthday(dateBirth, nowDate)) {
        return true;
    }

    return false;
}

console.log(validateAge('2009-11-16'));
