class Hero {
    constructor(race, name, language) {
        this.race = race;
	    this.name = name;
        this.language = language;
    }

    speak() {
        console.log(`${this.name} ${this.language}`);
    };
}

class OrcHero extends Hero {
    constructor(race, name, language, hasWeapon) {
        super(race, name, language);
        this.hasWeapon = hasWeapon;
    }

    speak() {
        console.log(`${this.name} ${this.language} ${this.hasWeapon}`);
    }

    bump() {
        console.log(`${this.name} ${this.language}`);
    }
}

class ElfHero extends Hero {
    constructor(race, name, language, typeSpell) {
        super(race, name, language);
        this.typeSpell = typeSpell;
    }

    speak() {
        console.log(`${this.name} ${this.language} ${this.hasWeapon}`);
    }

    createSpell() {
        console.log(`${this.typeSpell}`);
    }
}

const orcHero = new OrcHero('DarkOrc', 'Boss', 'en-Orc', true);
orcHero.bump();

const elfHero = new ElfHero('ElfOrc', 'Moon', 'en-Elf', 'abr');
elfHero.createSpell();