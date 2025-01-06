import React, { useState, useEffect } from "react";
import useEth from "../../contexts/EthContext/useEth";
import Paper from '@mui/material/Paper';

function UserDetails() {
  const { state: { accounts, web3 } } = useEth();
  const [ address ] = useState(accounts[0]);
  const [ balance, setBalance ] = useState(0);

  useEffect(() => {
    const fetchAccountBalance = async () => {
      try {
        const balanceInWei = await web3.eth.getBalance(address);
  
        setBalance(web3.utils.fromWei(balanceInWei, "ether"))
      } catch (error) {
        console.log("Error fetching balance: ", error);
      }
    };

    fetchAccountBalance();
  }, [address, web3]);

  return (
    <div>
      <Paper
        sx={{ p: 2, m: 2, width: '100%' }}
        elevation={5}
      >
        <b>User address:</b> {address}<br/>
        <b>Account balance:</b> {balance} ETH
      </Paper>
    </div>
  );
}

export default UserDetails;
