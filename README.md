SLity is an upcoming NFT minter project due to be dropped on July 1st.

This projects will create an NFT minter and a fullstack DApp by connecting a smart contract to a React frontend
usingg Metamask and Web3 tools

It will involve:
Solidity, NFTs, Minter, Alchemy, Smart Contracts, Frontend, UI, Wallet, Pinata

With this project the aim is to create a simple UI where input will be linked to a digital asset, a title and a description.
It will:
    Connect to Metamask via the frontend project
    Call smart contract methods from frontend
    Sign transactions using Metamask


Publishing of NFT smart contracts will be on the Ethereum blockchain.  In an ERC-721 or ERC-1155 smart contract. - The difference is that ERC-1155 is a mulyi-token standard and includes batch functionality, whereas the ERC-721 is a single-token standard and therefore only supports transferring one token at a time

The project will call the minting function on that NFT smart contract to mint the NFT. Minting is simply the act of pubblishing a unique instance of your non fungible token on the blockchain.

The minting function will require passing og two variables as parameters, first the recipient, which secifies the address that will receive your freshly minted NFT, and second the NFT's tokenURI, a string that resolves to a JSON document describing the NFT's metadata.

The NFT's metadata is what brings it to life, allowing it to have properties, such as name, desc, image, and other attributes.

This will focus on on part 2, calling an  