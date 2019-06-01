const ping = require("./ping");

ping(({ type, value }) => console.log(`${type}: ${value}`));
