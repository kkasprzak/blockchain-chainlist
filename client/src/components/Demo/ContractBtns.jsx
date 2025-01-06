import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

function ContractBtns({ setValue }) {
  const { state: { contract, accounts } } = useEth();
  const [seller, setSeller] = useState(accounts[0]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handlePriceChange = e => {
    if (/^\d+$|^$/.test(e.target.value)) {
      setPrice(e.target.value);
    }
  };

  const read = async () => {
    const value = await contract.methods.getArticle().call({ from: accounts[0] });
    setValue({
      "seller": value[0],
      "name": value[1],
      "description": value[2],
      "price": value[3],
    });
  };

  const write = async e => {
    if (e.target.tagName === "INPUT") {
      return;
    }
    
    if (price === "") {
      alert("Please enter a price value.");
      return;
    }
    
    await contract.methods.sellArticle(
      seller,
      name,
      description,
      parseInt(price)
    ).send({ from: accounts[0] });
    
    // Reset form after successful submission
    setName("");
    setDescription("");
    setPrice("");
    // Don't reset seller as it should stay as accounts[0]
  };

  return (
    <div>

      <div className="multi-field-form">
        <div className="form-group">
          <label>Seller Address:</label>
          <input
            type="text"
            value={seller}
            onChange={e => setSeller(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Article Name:</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="text"
            placeholder="uint"
            value={price}
            onChange={handlePriceChange}
          />
        </div>
      </div>

      <div className="btns">
        <button onClick={read} className="input-btn">
          Read article
        </button>

        <button onClick={write} className="input-btn">
          Update article
        </button>
      </div>

    </div>
  );
}

export default ContractBtns;
