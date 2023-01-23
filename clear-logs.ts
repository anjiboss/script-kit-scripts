// Name: Clear Script Kit Logs and Inspector

import "@johnlindquist/kit";

const tmpFolder = home(".kenv", "tmp");
const { stdout } = await $`ls ${tmpFolder}`.catch(() => {
  return { stdout: "" };
});

// get list of scripts folders
const scripts = stdout.split("\n");
// pop off the last empty line
scripts.pop();

let inspectMessage = "";
// remove the files under script folder
for (const script of scripts) {
  await $`rm -rf ${tmpFolder}/${script}`.catch(() => {
    div(`<h1>Some Error Happened!!</h1>`);
  });
  inspectMessage += `<div>removing log file under ${script} \n</div>`;
}
await div(inspectMessage);
