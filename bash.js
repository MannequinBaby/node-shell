pwd = require("./pwd");

process.stdout.write("prompt > "); //console.log
process.stdin.on("data", data => {
  //addEventListener
  const cmd = data.toString().trim();
  pwd(cmd);
  process.stdout.write("\nprompt> ");
  //  process.stdout.write("You typed: " + cmd);
});
