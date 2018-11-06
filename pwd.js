module.exports = function pwd(cmd) {
  if (cmd === "pwd") {
    process.stdout.write(`Current directory: ${process.cwd()}`);
  }
};
