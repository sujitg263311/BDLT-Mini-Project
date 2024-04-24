import { ethers } from "ethers";
import NFTMinter from "./Nft-Minter.json";

export async function connectWallet() {
  await window.ethereum.request({ method: "eth_requestAccounts" });
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  console.log("signer", signer);
  const contract = new ethers.Contract(
    "0x0c57C5020Decf95FF3a258CAD772b9340d98EA85", // Paste your Deployed NFT contract address
    NFTMinter.abi,
    signer
  );

  return { signer, contract };
}

export async function connectMetaMask() {
  const { signer } = await connectWallet();
  const address = await signer.getAddress();
  const balance = await signer.getBalance();
  const formattedBalance = ethers.utils.formatEther(balance);
  return { address, formattedBalance };
}
