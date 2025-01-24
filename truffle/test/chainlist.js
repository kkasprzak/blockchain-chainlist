const ChainList = artifacts.require("ChainList");

contract("ChainList", function (accounts) {
  it("should be initialized with empty values", async function () {
    const chainListInstance = await ChainList.deployed();
    var value = await chainListInstance.getArticle();

    assert.equal(value[0], 0x0, "seler is empty");
    assert.equal(value[1], "", "article name is empty");
    assert.equal(value[2], "", "article description is empty");
    assert.equal(value[3].toString(), "0", "article price is zero");
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
    assert.equal(value[3].toString(), web3.utils.toWei(price, "ether"), "article price is equal");
  })
  
  it("should trigger an event when a new article is sold", async function() {
    const chainListInstance = await ChainList.deployed();

    var receipt = await chainListInstance.sellArticle(
      accounts[1],
      "Dummy article name",
      "Dummy article description",
      web3.utils.toWei("20", "ether"),
      { from: accounts[1] }
    );

    assert.equal(receipt.logs.length, 1, "One event should have been triggered");
    assert.equal(receipt.logs[0].event, "LogSellArticle", "event should be LogSellArticle");
  });
});
