const sum = require('./mathLib')

const a = 1;
const b = 2;

describe("Test add scenario", () => {

     beforeEach(() => {
        console.log('Completed before all');
        expect.assertions(4); // expected assert calls
    }) 

    test("Add two big numbers", () => {
        expect(a).toBeDefined();
        expect(b).toBeDefined();
        expect(sum(a*100, b*100)).toBe(300);
        expect(sum(a*100, b*100)).not.toBeNull();
    })
    test("Add two small numbers", () => {
        expect(a).toBeDefined();
        expect(b).toBeDefined();
        expect(sum(a, b)).toBe(3);
        expect(sum(a, b)).not.toBeNull();
    })
})
