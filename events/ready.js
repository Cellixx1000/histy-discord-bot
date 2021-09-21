const config = require("../config.json")

module.exports = (client) => {
  console.log(`${client.user.tag} está online!`);
  client.user.setActivity(`${config.botname} ${config.version}`);
};
