const hero = {
    health: 5,
    power: 85,
    getStrength: function () {
        if (this.health <= 5) {
            return this.power - 10;
        } else return this.power;
    }
}
function whoIsStronger(getStrength) {
    const myStrength = 82;
    if (getStrength() < myStrength) {
        return "I am stronger";
    } else return "You are stronger";
}
console.log(whoIsStronger(hero.getStrength.bind(hero)));