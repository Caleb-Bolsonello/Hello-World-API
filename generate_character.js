const { Generator } = require('tiyl'); 
 
class Character_Randomizer {
    generate_character() {
        const generator = new Generator();
        const character = generator.generate();
        return character;
    }
}

module.exports = Character_Randomizer;