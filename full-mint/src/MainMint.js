import { useState } from 'react';
import { ethers, BigNumber } from 'ethers';
import slityCatsNFT from './SlityCatsNFT.json';
import { ConstructorFragment } from 'ethers/lib/utils';

const slityCatsNFTAddress = "0x98BfE2763197b391cF54A5aCd63A17a28D3e50D5";

const MainMint = ({ accounts, setAccounts  }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                slityCatsNFTAddress,
                slityCatsNFT.abi,
                signer
            );
            try{
                const response = await contract.mint(BigNumber.from(mintAmount));
                console.log('response: ', response);
            } catch (err) {
              console.log("error", err)
            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if (mintAmount >= 3) return;
        setMintAmount(mintAmount + 1);
    };

    return (
        <div>
            <h1>SlityCats</h1>
            <p>It's 2078. Can the Slity Punk NFT save humans from the destructive rampant 
                NFT speculation? Mint SlityCats to find out.
                </p>
            {isConnected ? (
              <div>
                  <div>
                      <button onClick={handleDecrement}>-</button>
                      <input type="number" value={mintAmount} />
                      <button onClick={handleIncrement}>+</button>
                  </div>
                  <button onClick={handleMint}>Mint Now</button>
              </div>
            ) : (
                <p>You must be connected to Mint</p>    
            )}
        </div>
    );
};

export default MainMint;

