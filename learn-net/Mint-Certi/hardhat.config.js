// require("@nomiclabs/hardhat-waffle");
// require("@nomiclabs/hardhat-ethers");
// require("dotenv").config();

// const { PRIVATE_KEY } = process.env;

// /**
//  * @type import('hardhat/config').HardhatUserConfig
//  */

// module.exports = {
//   defaultNetwork: "sphinx",
//   networks: {
//     hardhat: {},
//     sphinx: {
//       url: "https://dapps.shardeum.org/",
//       chainId: 8081,
//       accounts: [`0x${PRIVATE_KEY}`],
//     },
//   },
//   solidity: {
//     version: "0.8.17",
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200,
//       },
//     },
//   },
//   paths: {
//     sources: "./contracts",
//     tests: "./test",
//     cache: "./cache",
//     artifacts: "./artifacts",
//   },
//   mocha: {
//     timeout: 40000,
//   },
// };

//require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/",
      accounts: ["80b157c74ffdcac87e0ebae94590435f4d36856a9504dde7c8c07e118fc1e6e4"],
    }
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};