var expect = chai.expect;

describe('MyFunction', function() {
    describe('#createDeck', function () {
        it('should return number card value', function () {
            var x = Deck.createDeck('king');
            expect(x).to.equal('13');
        });
    });
});