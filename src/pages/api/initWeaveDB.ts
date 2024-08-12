import WeaveDB from "weavedb-sdk";
import detectEthereumProvider from "@metamask/detect-provider";
import { ethers } from "ethers";

export const start = async () => {
  try {
    const db = new WeaveDB({
      contractTxId: process.env.NEXT_PUBLIC_CONTRACT_TXID,
    });
    await db.init();

    const ethProvider:any = await detectEthereumProvider();
    let ethersProvider, ethersSigner
    if (ethProvider) {
      const accounts = await ethProvider.request({
        method: "eth_requestAccounts",
      });

      // Initialize ethers provider and signer
      ethersProvider = new ethers.providers.Web3Provider(
        ethProvider,
        "any"
      );
      ethersSigner = ethersProvider.getSigner();

      // await checkSwitchChain();
      // await getPersonsFromContract();
    } else {
      console.log("Please install MetaMask!");
    }

    const result = await db.cget(`pp_campaign`);
    console.log("result: ", result);
    return(result)

    return {ethersProvider, ethersSigner, db}
  } catch (e:any) {
    return {error: new Error(e)}
  }
};

