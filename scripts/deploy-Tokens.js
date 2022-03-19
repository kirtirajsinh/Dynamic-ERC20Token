const hre = require("hardhat");

async function main() {
  const Tokens = await hre.ethers.getContractFactory("MetaStorage");
  const tokensContract = await Tokens.deploy();

  await tokensContract.deployed();

  console.log("Contract deployed to:", tokensContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });