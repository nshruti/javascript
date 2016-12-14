describe("sum tests", function() {
    it("test positive numbers", function() {
        expect(sum(2, 3)).toEqual(4);
    })
    it("test with 0", function() {
        expect(sum(0, 3)).toEqual(3);
    })
    it("test with negative numbers", function() {
        expect(sum(0, -1)).toEqual(-1);
    })
    it("test with large numbers", function() {
        expect(sum(100000, -99999)).toEqual(1);
    })
})
