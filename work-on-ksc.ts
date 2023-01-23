// Name: Start KeySpider VBox then open VSCode in /opt/keyspider
import "@johnlindquist/kit";

const vmName = "keyspider";
const keyspiderFolder = "/opt/keyspider";
const turnOn = "ksc-on";
const sshName = "keyspider";

const isVMRunning =
  await $`vboxmanage showvminfo ${vmName} | grep -c "running (since"
`.catch(() => "0");
if (isVMRunning === "0") {
  $`${turnOn}`;
} else {
  div(`<h1 class="center">VM is already running</h1>`);
}

// Open VSCode in the KeySpider folder
await $`code --folder-uri=vscode-remote://ssh-remote+${sshName}+${keyspiderFolder}`;
