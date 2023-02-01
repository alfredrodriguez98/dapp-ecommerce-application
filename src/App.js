import { useEffect, useState } from "react";
import { ethers } from "ethers";

// Components
import Navigation from "./components/Navigation";
import Section from "./components/Section";
import Product from "./components/Product";

// ABIs
import Dappazon from "./abis/Dappazon.json";

// Config
import config from "./config.json";

//Functional react component
function App() {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);

  const loadBlockchainData = async () => {
    //   const accounts = await window.ethereum.request({
    //     method: "eth_requestAccounts",
    //   });
    //   const account = ethers.utils.getAddress(accounts[0]);
    //   setAccount(account);
    // };

    //Connect to BC
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);
    //Connect to contract
    //Load products
  };

  useEffect(() => {
    loadBlockchainData();
  }, []);

  // console.log("loading.....");
  // const provider = new ethers.providers.Web3Provider(window.ethereum);
  // setProvider(provider);
  // const network = await provider.getNetwork();

  // const dappazon = new ethers.Contract(
  //   config[network.chainId].dappazon.address,
  //   Dappazon,
  //   provider
  // );
  // setDappazon(dappazon);
  // };

  return (
    <div>
      <Navigation account={account} setAccount={setAccount} />
      <h2>Best Sellers</h2>
      {/* <p>Wallet Address: {account}</p> */}
    </div>
  );
}

export default App;
