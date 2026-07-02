const dns = require("dns");

// Force Node to use Google DNS
dns.setServers(["8.8.8.8", "8.8.4.4"]);

console.log("DNS Servers:", dns.getServers());

dns.resolveSrv("_mongodb._tcp.cluster0.yulcxtv.mongodb.net", (err, records) => {
    console.log(err || records);
});