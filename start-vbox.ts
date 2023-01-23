// Name: Start a VirtualBox Machine

import "@johnlindquist/kit";
import { ProcessOutput } from "/Users/anji-alit/.kit/node_modules/zx";

const vBoxs = await $`VBoxManage list vms`.catch(() => {
  return {} as ProcessOutput;
});
const args = [];
// take only name part of the string
for (const vBox of vBoxs.stdout.split("\n")) {
  if (vBox.length === 0) continue;
  const boxName = vBox.split('"');
}
