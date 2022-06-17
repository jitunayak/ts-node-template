import * as dotenv from 'dotenv'
import { resolve } from 'path'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let path: any

const env = process.env.NODE_ENV
switch (env) {
    case 'dev': {
        path = resolve(__dirname, `./../env/${process.env.NODE_ENV}.env`)
        console.log(process.env.MONGO_URI)
        break
    }
    case 'prod': {
        break
    }
    default:
        throw new Error('No Envrionemt is specified')
}
dotenv.config({ path: path })

export const CONFIG = {
    MONGO_URI: process.env.MONGO_URI ?? 'default',
    ENV: process.env.NODE_ENV,
}
