const hre = require("hardhat");

async function main() {

  const SlityCatsNFT = await hre.ethers.getContractFactory("SlityCatsNFT");
  const slityCatsNFT = await SlityCatsNFT.deploy();

  await slityCatsNFT.deployed();

  console.log("SlityCatsNFT deployed to:", slityCatsNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
