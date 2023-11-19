class Billing {
    amount = 2;

    calculateTotal(typeBilling) {
        return typeBilling.amount;
    }
}

class FixBilling extends Billing {
    calculateTotal() {
        return this.amount;
    }
}

class HourBilling extends Billing {
    constructor(hour) {
        super();
        this.hour = hour;
    }

    calculateTotal() {
        return this.amount * this.hour;
    }
}

class ItemBilling extends Billing {
    constructor(elem) {
        super();
        this.elem = elem;
    }

    calculateTotal() {
        return this.amount * this.elem;
    }
}

class Controller {
    bill(billing) {
        return billing.calculateTotal();
    }
}

const fixBilling = new FixBilling();
console.log(new Controller().bill(fixBilling));

const hourBilling = new HourBilling(5);
console.log(new Controller().bill(hourBilling));

const itemBilling = new ItemBilling(2);
console.log(new Controller().bill(itemBilling));
