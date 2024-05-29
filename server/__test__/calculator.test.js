// CALCULADORA DE EJEMPLO PARA VER JEST Y SUPERTEST FUNCIONAN
const {add,sub,mul,div} = require('../utils/calculator');


describe("Testing calculator functionalities",()=>{ //BDD grande
    describe("Adding numbers. Test add() function",()=>{ //BDD o Behavior Drive Development
        test('Adding 1 + 1 equals 2', () => { //Cada test es un TDD o Test Driver Development
            expect(add(1, 1)).toBe(2);
        })
    
        test('Adding 1 + "1" return NaN', () => {
            expect(add(1, "1")).toBe(NaN);
        })
    
        test('Adding without parameters return NaN', () => {
            expect(add(1)).toBe(NaN);
        })
    
        test('Adding arrays', () => {
            expect(add([1,2,3,4],[1,2,3,4])).toBe(NaN);
        })
    
        test('Adding NaNs', () => {
            expect(add(NaN,NaN)).toBe(NaN);
        })
    })
    
    
    describe("Multiplying numbers. Test mul() function",()=>{
        test('Multiplying 1 * 1 equals 1', () => {
            expect(mul(1, 1)).toBe(1);
        })
    
        test('Multiplying without parameters return null', () => {
            expect(mul()).toBeNull();
        })
        test('Multiplying without parameters return NaN', () => {
            expect(mul(10,"2")).toBe(NaN);
        })
    })
    
    describe("Substracting numbers. Testing add() function", () => {
        test('Subtracting 1 - 1 equals 0', () => {
            expect(sub(1, 1)).toBe(0);
        })
        test('Substracting 1 - "hola" equals NaN', () => {
            expect(sub(1,"hola")).toBe(NaN)
        })
        test('Substracting 1 - true equals NaN', () => {
            expect(sub(1,true)).toBe(NaN)
        })
        test('Substracting [] - [] equals NaN', () => {
            expect(sub([],[])).toBe(NaN)
        })
        test('Substracting  without parameters  equals NaN', () => {
            expect(sub()).toBe(NaN)
        })
    })
    
    describe("Dividing numbers. Testing div() function", () => {
        test('Dividing 1 / 1 equals 1', () => {
            expect(div(1, 1)).toBe(1);
        })
        test('Dividing 1 / 0 equals Infinity', () => {
            expect(div(1, 0)).toBe(Infinity);
        })
        test('Dividing without parameters', () => {
            expect(div()).toBeNull();
        })
        test('Dividing only parameter', () => {
            expect(div(1)).toBeNull();
        })
    })
})







/*   test('Multiplying 1 * 1 equals 1', () => {
    expect(mul(1, 1)).toBe(1)
  })
  test('Subtracting 1 - 1 equals 0', () => {
    expect(sub(1, 1)).toBe(0)
  })
  test('Dividing 1 / 1 equals 1', () => {
    expect(div(1, 1)).toBe(1)
  }) */