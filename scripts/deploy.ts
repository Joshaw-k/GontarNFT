import { ethers } from "hardhat";

async function main() {
  const gontar = await ethers.deployContract("Gontar", [
    "0x8103b0a8a00be2ddc778e6e7eaa21791cd364625",
    "0x779877a7b0d9e8603169ddbd7836e478b4624789",
    "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c",
  ]);

  await gontar.waitForDeployment();

  console.log(gontar.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
