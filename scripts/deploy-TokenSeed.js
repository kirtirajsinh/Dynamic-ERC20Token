const hre = require("hardhat");

async function main() {
    const TokenSeed = await hre.ethers.getContractFactory("TokenSeed");
    const tokenSeedContract = await TokenSeed.deploy();

    await tokenSeedContract.deployed();

    console.log("Contract deployed to:", tokenSeedContract.address);
}
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });