const app = require("./app");
const appMonitoring = require("./app-monitoring");

// This file launches the server

app.listen(5000, () => {
    console.log("http://localhost:5000/");
});