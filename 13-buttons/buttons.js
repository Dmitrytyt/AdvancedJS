class Buttons {
    constructor({selectors, actionText} = {}) {
        this.selectors = selectors;
        this.actionText = actionText;
        this.init();
    }

    static run(options) {
        return new Buttons(options);
    }

    static updateCounter(selector) {
        const counter = document.querySelector(selector);
        counter.innerHTML = Number(counter.innerHTML) + 1;
    }

    static updateAction(elem, actionSelector, actionText) {
        const elements = document.querySelectorAll(actionSelector);

        if (elem.innerHTML === actionText) {
            return;
        }

        elements.forEach((el) => {
            el.innerHTML = elem.innerHTML;
        });

        elem.innerHTML = actionText;
    }

    onClick(e) {
        const {target} = e;

        if (!target || !target.closest(this.selectors.action)) {
            return;
        }

        const actionSelector = `${this.selectors.wrap} ${this.selectors.action}`;
        Buttons.updateAction(target, actionSelector, this.actionText);

        Buttons.updateCounter(this.selectors.counter);
    }

    init() {
        let elem = document.querySelector(this.selectors.wrap);

        if (elem.length !== 0) {
            elem.addEventListener('click', (e) => this.onClick(e));
        }
    }
}

Buttons.run({
    selectors: {
        wrap: '.buttons',
        counter: 'h1 span',
        action: 'button',
    },
    actionText: 'Нажата!',
});
