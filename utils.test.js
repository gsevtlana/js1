const sum = require('./utils');


describe('Should sum two numbers', () => {


    test('Test Sum', () => {
        expect(sum(5, 4)).toEqual(9);
    });


    test('Test Sum 2', () => {
        expect(sum(5, 4)).not.toEqual(0);
    });

});
