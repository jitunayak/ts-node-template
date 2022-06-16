import { config } from 'dotenv'
import { resolve } from 'path'

export function loadConfiguration() {
    switch (process.env.NODE_ENV) {
        case 'local': {
            config({
                path: resolve(
                    __dirname,
                    `./../env/${process.env.NODE_ENV}.env`
                ),
            })
            break
        }
        case 'dev': {
            config({
                path: resolve(
                    __dirname,
                    `./../env/${process.env.NODE_ENV}.env`
                ),
            })
            break
        }
        case 'prod': {
            config()
            break
        }
        default:
            throw new Error('No Envrionemt is specified')
    }
}

export const CONFIG = {
    MONGO_URI: process.env.MONGO_URI,
    ENV: process.env.NODE_ENV,
}
