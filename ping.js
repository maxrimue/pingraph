const { spawn } = require("child_process");
const regex = /(?:time=)(\d+\.\d+)/g;

module.exports = callback => {
  const ping = spawn("ping", ["1.1.1.1"]);

  ping.stdout.on("data", text => {
    const bufferedText = text.toString();
    const interpreted = regex.exec(text.toString());

    if (interpreted === null) {
      if (bufferedText.toLowerCase().includes("request timeout")) {
        callback({ type: "timeout", value: null });
      }
    } else {
      if (interpreted.length >= 2) {
        callback({ type: "response", value: interpreted[1] });
      }
    }
  });

  ping.stderr.on("data", data =>
    callback({ type: "error", value: data.toString() })
  );

  ping.on("exit", data => callback({ type: "exit", value: data.toString() }));
};
