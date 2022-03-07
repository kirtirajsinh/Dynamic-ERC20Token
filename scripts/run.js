const main = async () =>{
    const [owner, superCoder] = await hre.ethers.getSigners();
    const domainContractFactory = await hre.ethers.getContractFactory('TokenSeed')
    const domainContract = await domainContractFactory.deploy();
    await domainContract.deployed();
    console.log("Contract deployed to:", domainContract.address);

    let txn = await domainContract.create(100, 505, 18, "Bored", "Bore",owner.address)
    await txn.wait();

console.log("Token Deployed At:", txn.address)
}

const runMain = async () =>{
    try{
        await main();
        process.exit(0)
    }
    catch(e){
        console.error(e);
        process.exit(1);
    }
}

runMain();