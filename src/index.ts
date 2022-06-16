import { CONFIG, loadConfiguration } from './config'

loadConfiguration()
console.log('Running Envrionemt:', CONFIG.ENV)
