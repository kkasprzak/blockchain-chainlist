import { useState, useEffect } from "react";
import useEth from "../../contexts/EthContext/useEth";
import Contract from "./Contract";
import EventsList from "./EventsList";
import ContractBtns from "./ContractBtns";
import UserDetails from "./UserDetails";
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
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const read = async (contract) => {
      const value = await contract.methods.getArticle().call({ from: state.accounts[0] });
      setValue({
        "seller": value[0],
        "name": value[1],
        "description": value[2],
        "price": value[3],
      });
    };

    const listenToEvents = async (contract) => {
      try {
        contract.events.LogSellArticle(
          {
            fromBlock: 'latest',
          },
          (error, event) => {
            if (error) {
              console.error("Error while listening to events", error);
            } else {
              read(contract);
              setEvents([...events, event.returnValues._name]);
            }
          }
        );
      } catch (err) {
        console.error("Failed to subscribe to events", err);
      }
    };

    if (state.contract) {
      listenToEvents(state.contract);
    }
  }, [state, events]);

  const demo =
    <div>
        <UserDetails />
        <ContractBtns setValue={setValue} />
        <EventsList events={events} />
        <Contract value={value} />
    </div>;

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
