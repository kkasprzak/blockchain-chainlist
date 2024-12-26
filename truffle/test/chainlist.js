const ChainList = artifacts.require("ChainList");

contract("ChainList", function (/* accounts */) {
  it("should be initialized with empty values", async function () {
    const chainListInstance = await ChainList.deployed();
    var value = await chainListInstance.getArticle();

    assert.equal(value[0], 0x0, "seler is empty");
    assert.equal(value[1], "", "article name is empty");
    assert.equal(value[2], "", "article description is empty");
    assert.equal(value[3].toNumber(), 0, "article price is zero");
  });
});
