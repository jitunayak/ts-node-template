import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(__dirname, `./../env/${process.env.NODE_ENV}.env`) });

console.log(process.env.ENV);
