const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function main() {
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);

  console.log("WHAT IS THE WALLET ::", wallet);

  const encryptJsonKey = await wallet.encrypt(
    process.env.PRIVATE_PASSWORD,
    process.env.PRIVATE_KEY
  );

  console.log("WHAT IS THE ENCRYPTJSONKEY :", encryptJsonKey);

  fs.writeFileSync("./.encryptJsonKey.json", encryptJsonKey);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
