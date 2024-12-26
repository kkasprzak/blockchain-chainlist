const ChainList = artifacts.require("ChainList");

contract("ChainList", function (accounts) {
  it("should be initialized with empty values", async function () {
    const chainListInstance = await ChainList.deployed();
    var value = await chainListInstance.getArticle();

    assert.equal(value[0], 0x0, "seler is empty");
    assert.equal(value[1], "", "article name is empty");
    assert.equal(value[2], "", "article description is empty");
    assert.equal(value[3].toNumber(), 0, "article price is zero");
  });

  it("should sell an article", async function () {
    const chainListInstance = await ChainList.deployed();

    var seller = accounts[1];
    var name = "Dummy article name";
    var description = "Dummy article description";
    var price = "20";

    await chainListInstance.sellArticle(
      seller,
      name,
      description,
      web3.utils.toWei(price, "ether"),
      { from: seller }
    );

    var value = await chainListInstance.getArticle();

    assert.equal(value[0], seller, "seler is equal");
    assert.equal(value[1], name, "article name is equal");
    assert.equal(value[2], description, "article description is equal");
    assert.equal(value[3].toNumber(), web3.utils.toWei(price, "ether"), "article price is equal");
  })
  
});
