process.stdout.write("prompt > "); //console.log
process.stdin.on("data", data => {
  //addEventListener
  const cmd = data.toString().trim();
  process.stdout.write("You typed: " + cmd);
  process.stdout.write("\nprompt> ");
});
