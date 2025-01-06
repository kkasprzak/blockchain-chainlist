import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import Contract from "./Contract";
import ContractBtns from "./ContractBtns";
import NoticeNoArtifact from "./NoticeNoArtifact";
import NoticeWrongNetwork from "./NoticeWrongNetwork";
import Container from '@mui/material/Container';

function Demo() {
  const { state } = useEth();
  const [value, setValue] = useState({
    "seller": "?",
    "name": "?",
    "description": "?",
    "price": "?"
  });

  const demo =
    <>
      <div className="contract-form">
        <ContractBtns setValue={setValue} />
      </div>
      
      <div className="contract-container">
        <Contract value={value} />
      </div>
    </>;

  return (
    <Container maxWidth="md">
      {
        !state.artifact ? <NoticeNoArtifact /> :
          !state.contract ? <NoticeWrongNetwork /> :
            demo
      }
    </Container>
  );
}

export default Demo;
