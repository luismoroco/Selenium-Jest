const FxPercentCal = require('./scripts/Fx');
const FxPercentDiff = require('./scripts/Fx1');


describe('Prueba : Percentage Calculator', () => {

    test('10 percent of 100 is equal to 10', async () => {
        expect(await FxPercentCal(10,100)).toBe(10);
    }, 50000);
    
    test('12.5 percent of 34.8 is equal to 4.35', async () => {
        expect(await FxPercentCal(12.5,34.8)).toBe(4.35);
    }, 50000);
    
    test('30 percent of 34.8 is equal to 10.44', async () => {
        expect(await FxPercentCal(30,34.8)).toBe(10.44);
    }, 50000);

    test('23.9 percent of 456 is equal to 108.984', async () => {
        expect(await FxPercentCal(23.9,456)).toBe(108.984);
    }, 50000);
});



describe('Prueba : Percentage Difference Calculator', () => {

    test('100 is a 900% increase of 10', async () => {
        expect(await FxPercentDiff(10, 100)).toBe('');
    }, 50000);
    
    test('23.8 is a 58.098591549296% increase of 56.8', async () => {
        expect(await FxPercentDiff(56.8, 23.8)).toBe('58.098591549296%');
    }, 50000);
    
    test('657 is a 22633.564013841% increase of 2.89', async () => {
        expect(await FxPercentDiff(2.89, 657)).toBe('22633.564013841%');
    }, 50000);

    test('33.6756 is a 25.177777777778% increase of 45', async () => {
        expect(await FxPercentDiff(45,33.67)).toBe('25.177777777778%');
    }, 50000);
    
});


