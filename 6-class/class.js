class Car {
    #brand;
    #model;
    #mileage;

    constructor(brand, model, mileage) {
        this.#brand = brand;
        this.#model = model;
        this.#mileage = mileage;
    }

    get mileage() {
        return this.#mileage;
    }

    set mileage(item) {
        this.#mileage = item;
    }

    info() {
        console.log({
            brand: this.#brand,
            model: this.#model,
            mileage: this.#mileage,
        });
    }
}

const Auto = new Car('Ford', 'Focus', '256');
Auto.info();