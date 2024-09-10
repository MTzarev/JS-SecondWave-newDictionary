function newDictionary(input) {
    let newArr = [];
    for (let line of input) {
        let objDictionary = {};
        let stringIn = JSON.parse(line);
        let key = Object.keys(stringIn).join(` `);
        objDictionary.key = key;
        let value = Object.values(stringIn).join(` `);
        objDictionary.value = value;

        newArr.push(objDictionary);
    }
    let sorted = newArr.sort((a, b) => a.key.localeCompare(b.key));
    for (let obj of sorted) {
        console.log(`Term: ${obj.key} => Definition: ${obj.value}`);
    }
}
newDictionary([
    '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
    '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
    '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
    '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
    '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} '
]);
