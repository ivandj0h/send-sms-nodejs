import dotenv from 'dotenv'
import Vonage from '@vonage/server-sdk'

dotenv.config()

const vonage = new Vonage({
  apiKey: process.env.VONAGE_API_KEY,
  apiSecret: process.env.VONAGE_API_SECRET
})

vonage.message.sendSms("Vonage", '447403969038', 'yo', (err, responseData) => {
    if (err) {
        console.log(err);
    } else {
        if(responseData.messages[0]['status'] === "0") {
            console.dir(responseData);
        } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
    }
})