import { config } from "dotenv";
config({ path: "./dev.env" });

console.log(process.env.ENV);
