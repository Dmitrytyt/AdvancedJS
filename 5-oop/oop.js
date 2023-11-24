const Hero = function(race, name, language) {
	this.race = race;
	this.name = name;
    this.language = language;
};

Hero.prototype.speak = function() {
	console.log(`${this.name} ${this.language}`);
};


const OrcHero = function(race, name, language, hasWeapon) {
	Hero.call(this, race, name, language);
	this.hasWeapon = hasWeapon;
};

OrcHero.prototype = Object.create(Hero.prototype);
OrcHero.prototype.constructor = OrcHero;

OrcHero.prototype.bump = function() {
	console.log(`${this.name} ${this.language}`);
};

const ElfHero = function(race, name, language, typeSpell) {
	Hero.call(this, race, name, language);
	this.typeSpell = typeSpell;
};

ElfHero.prototype = Object.create(Hero.prototype);
ElfHero.prototype.constructor = ElfHero;

ElfHero.prototype.createSpell = function() {
	console.log(`${this.typeSpell}`);
};

const orcHero = new OrcHero('DarkOrc', 'Boss', 'en-Orc', true);
orcHero.bump();

const elfHero = new ElfHero('ElfOrc', 'Moon', 'en-Elf', 'abr');
elfHero.createSpell();