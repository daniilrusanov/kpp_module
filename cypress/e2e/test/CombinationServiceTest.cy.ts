import {CombinationService} from "../../../src/app/services/combination.service";

describe('CombinationService', () => {
    let combinationService: CombinationService;

    beforeEach(() => {
        combinationService = new CombinationService();
    });

    it('should generate all permutations of length 2 from elements ["a", "b", "c"]', () => {
        const result = combinationService.getCombinations(['a', 'b', 'c'], 2);
        const expected = [
            'a b', 'a c', 'b a', 'b c', 'c a', 'c b'
        ];
        expect(result).to.deep.equal(expected);
    });

    it('should generate all permutations of length 3 from elements ["a", "b", "c"]', () => {
        const result = combinationService.getCombinations(['a', 'b', 'c'], 3);
        const expected = [
            'a b c', 'a c b', 'b a c', 'b c a', 'c a b', 'c b a'
        ];
        expect(result).to.deep.equal(expected);
    });

    it('should return an empty array for empty input elements', () => {
        const result = combinationService.getCombinations([], 2);
        expect(result).to.deep.equal([]);
    });

    it('should return an empty array if length is greater than the number of elements', () => {
        const result = combinationService.getCombinations(['a', 'b'], 3);
        expect(result).to.deep.equal([]);
    });

    it('should generate permutations with one element', () => {
        const result = combinationService.getCombinations(['a'], 1);
        const expected = ['a'];
        expect(result).to.deep.equal(expected);
    });
});
