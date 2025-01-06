import React, { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

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
      <Box component="form" noValidate autoComplete="off">
        <Stack spacing={2}>
          <TextField
            id="seller-address"
            label="Seller address"
            variant="outlined"
            value={seller}
            onChange={e => setSeller(e.target.value)}
          />
          <TextField
            id="article-name"
            label="Article name"
            variant="outlined"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <TextField
            id="article-description"
            label="Description"
            multiline
            rows={4}
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <TextField
            id="article-price"
            label="Article price"
            variant="outlined"
            value={price}
            onChange={handlePriceChange}
          />
          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={read}>Read article</Button>
            <Button variant="contained" onClick={write}>Update article</Button>
        </Stack>
        </Stack>
      </Box>
    </div>
  );
}

export default ContractBtns;
