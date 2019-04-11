const enhancer = require('./enhancer.js');
// test away!
describe('enhancer', () => {

    describe('fail()', () => {
        it('if enhancement is less than 15 the durability is decreased by 5', () => {
            expect(enhancer.fail({
                name: 'sword',
                durability: 50,
                enhancement: 10
            })).toEqual({
                name: 'sword',
                durability: 45,
                enhancement: 10
            })
        })

        it('if enhancement is 15 or more the durability is decreased by 10', () => {
            expect(enhancer.fail({
                name: 'sword',
                durability: 50,
                enhancement: 15
            })).toEqual({
                name: 'sword',
                durability: 40,
                enhancement: 15
            })
        })

        it('if enhancement is greater than 16 the enhancement level decreases by 1', () => {
            expect(enhancer.fail({
                name: 'sword',
                durability: 50,
                enhancement: 18
            })).toEqual({
                name: 'sword',
                durability: 40,
                enhancement: 17
            })
        })
    })

    describe('succeed()', () => {
        it('should increase an item enhancement by 1', () => {
            expect(enhancer.succeed({
                name: 'sword',
                durability: 50,
                enhancement: 10
            })).toEqual({
                name: 'sword',
                durability: 50,
                enhancement: 11
            })
        })
    })

    describe('repair()', () => {
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