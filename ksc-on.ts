// Name: Control KeySpider VM

import "@johnlindquist/kit";

const machineName = "keyspider";

//  VBoxManage controlvm keyspider acpipowerbutton

try {
  const startVM = $`VBoxManage startvm ${machineName} --type=headless`;
  div(`<h1>Starting Machine ${machineName}</h1>`);
  await startVM;
  await div(`<h1>Machine ${machineName} Started</h1>`);
} catch (error) {
  await div(`<h1>Some Error Happened!!</h1>`);
}
