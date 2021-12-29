// We load the plugin here.
import { HardhatUserConfig } from "hardhat/types";

import "../../../src/index";
import { EVM_VERSION, SOLIDITY_VERSION } from "../../types";

const config: HardhatUserConfig = {
  solidity: "0.6.12",
  defaultNetwork: "hardhat",
  blockscoutVerify: {
    blockscoutURL: "",
    contracts: {
      ERC20Mock: {
        compilerVersion: SOLIDITY_VERSION.SOLIDITY_V_6_12,
        optimization: true,
        evmVersion: EVM_VERSION.EVM_ISTANBUL,
        optimizationRuns: 999999,
      },
    },
  },
};

export default config;
