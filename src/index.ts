import { extendConfig, extendEnvironment } from "hardhat/config";
import { lazyObject } from "hardhat/plugins";
import { HardhatConfig, HardhatUserConfig } from "hardhat/types";
import path from "path";

// This import is needed to let the TypeScript compiler know that it should include your type
// extensions in your npm package's types file.
import "./tasks/blockscount-verify";
import "./tasks/smart-flatten";
import "./type-extensions";

extendConfig(
  (config: HardhatConfig, userConfig: Readonly<HardhatUserConfig>) => {
    config.blockscoutVerify = userConfig.blockscoutVerify!;
  }
);

export * from "./types";
