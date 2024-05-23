require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "ocean",
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
  networks: {
    ocean: {
      url: "https://rpc1.ocean.bahamut.io",
      chainId: 4058,
      accounts: ["475d1f48b1058d1bd6fb7c670501339953083a935e073d847ff1180f206e96ad"]
    }
  },
  experiments: {
    topLevelAwait: true,
  }
};
