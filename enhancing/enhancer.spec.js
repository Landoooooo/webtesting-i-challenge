const enhancer = require('./enhancer.js');
// test away!
describe('enhancer', () => {

    describe('fail', () => {
        it('if enchancement is less than 15, the durability of the item is decreased by 5', () => {
            const item = {
                name: 'test',
                enchancement: 5,
                durability: 5
            }

            const results = enhancer.fail(item)
            expect(results.durability).toBe(0)
        })

        it('if the enchancement is 15 or more the durability is decreased by 10', () => {
            const item = {
                name: 'test',
                enchancement: 20,
                durability: 15
            }

            const results = enhancer.fail(item)
            expect(results.durability).toBe(5)
        })

        it('if enchancement is greater than 16 the enchancement level decreases by 1', () => {
            const item = {
                name: 'test',
                enchancement: 20,
                durability: 10
            }

            const results = enhancer.fail(item)
            expect(results.enchancement).toBe(19)
        })
    })
    describe('succeed', () => {
        it('should increase enchancement by 1', () => {
            const item = {
                enchancement: 5
            }

            const results = enhancer.succeed(item)
            expect(results.enchancement).toBe(6)
        })
    })

    describe('repair', () => {
        it('should restore durability back to 100', () => {
            const item = {
                name: 'test',
                enchancement: 20,
                durability: 5
            }

            const results = enhancer.repair(item)
            expect(results.durability).toBe(100)
        })
    })
})