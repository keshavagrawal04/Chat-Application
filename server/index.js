require("dotenv").config();
const app = require("./app");

app.listen(8000, () => {
  console.log("Server Is Listening On 8000");
});
