import * as dotenv from 'dotenv'
import { resolve } from 'path'

const MISSING_ENV = 'Envrionemt is Missing'

const env = process.env.NODE_ENV
if (env === undefined) throw new Error(MISSING_ENV)

const path = configureEnvPath(env)
dotenv.config({ path: path })

export const CONFIG = {
    MONGO_URI: process.env.MONGO_URI,
    ENV: process.env.NODE_ENV,
}

validateEnvironment()

function configureEnvPath(env: string): string | undefined {
    switch (env) {
        case 'dev': {
            const path = resolve(
                __dirname,
                `./../env/${process.env.NODE_ENV}.env`
            )
            console.log(process.env.MONGO_URI)
            return path
        }
        case 'prod': {
            return undefined // prod deployment will have system enviroment values
        }
        default:
            throw new Error('No Envrionemt is specified')
    }
}

function validateEnvironment() {
    Object.entries(CONFIG).map((key) => {
        if (key[1] === undefined || key[1] === null)
            throw new Error(`${key[0]} : MISSING_ENV`) // throw error if any enviroment values are missing
    })
}
