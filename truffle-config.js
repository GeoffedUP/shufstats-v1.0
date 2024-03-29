const path = require("path");

module.exports = {
  compilers: {
    solc: {
      version: '^0.5.10', // A version or constraint - Ex. "^0.5.0"
                         // Can also be set to "native" to use a native solc
      docker: '', // Use a version obtained through docker
      settings: {
        optimizer: { 
        },
        evmVersion: '', // Default: "byzantium"
      }
    }
  },

  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545
    }
  }
};
