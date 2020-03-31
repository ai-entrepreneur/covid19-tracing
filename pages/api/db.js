const { GoogleSpreadsheet } = require('google-spreadsheet')

// const creds = {
//   client_email: process.env.google_service_account_email,
//   private_key: process.env.google_private_key,
// }

const creds = require('./client_secret.json')

// const sheetId = '1nzXUdaIWC84QipdVGUKTiCSc5xntBbpMpzLm6Si33zk'
const sheetId = '1uTJ7rZQIQlBcv1UGS7YgYFG_xA8dDjmzq1-90dSU8lU'

const doc = new GoogleSpreadsheet(sheetId)
console.log("##########################")
console.log(sheetId)
console.log(creds)
module.exports = { doc, creds }
