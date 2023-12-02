function race(list) {
    return new Promise((resolve, reject) => {
        for (const item of list) {
            item.then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });
        }
    });
}

race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000)),
]).then(item => console.log(item));
