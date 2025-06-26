const dotenv = require("dotenv");
const connectDB = require("./utils/db");
const app = require("./app");

dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
