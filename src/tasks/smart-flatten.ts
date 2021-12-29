import { task } from "hardhat/config";
import { NomicLabsHardhatPluginError } from "hardhat/plugins";
import { HardhatRuntimeEnvironment, TaskArguments } from "hardhat/types";

task("smart-flatten", async function (
  args: TaskArguments,
  hre: HardhatRuntimeEnvironment
) {
  let fileContent = await hre.run("flatten:get-flattened-sources", {
    files: args.files,
  });
  let count = 0;
  fileContent = fileContent.replace(
    /\/\/ SPDX-License-Identifier: [A-Za-z0-9.]+/gi,
    (x: string) => {
      if (count === 0) {
        count++;
        return x;
      } else {
        count++;
        return "";
      }
    }
  );
  return fileContent;
});
