// If your plugin extends types from another plugin, you should import the plugin here.

// To extend one of Hardhat's types, you need to import the module where it has been defined, and redeclare it.
import "hardhat/types/config";
import "hardhat/types/runtime";

import { EVM_VERSION, SOLIDITY_VERSION } from "./types";

declare module "hardhat/types/config" {
  // This is an example of an extension to one of the Hardhat config values.

  // We extend the UserConfig type, which represents the config as written
  // by the users. Things are normally optional here.
  export interface HardhatUserConfig {
    blockscoutVerify?: BlockscoutVerifyConfig;
  }

  export interface BlockscoutVerifyConfig {
    blockscoutURL: string;
    contracts: BlockscoutVerifyContract;
  }

  export interface BlockscoutVerifyContract {
    [contractName: string]: BlockscoutVerifyContractConfig | undefined;
  }

  export interface BlockscoutVerifyContractConfig {
    compilerVersion: SOLIDITY_VERSION;
    optimization: boolean;
    evmVersion: EVM_VERSION;
    optimizationRuns: number;
  }

  // We also extend the Config type, which represents the configuration
  // after it has been resolved. This is the type used during the execution
  // of tasks, tests and scripts.
  // Normally, you don't want things to be optional here. As you can apply
  // default values using the extendConfig function.
  export interface HardhatConfig {
    blockscoutVerify: BlockscoutVerifyConfig;
  }
}
