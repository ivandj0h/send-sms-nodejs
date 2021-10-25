# Send SMS Messages with Node.js and Express 
Sample code for sending an SMS message using Node.js and Express with the Vonage SMS API.



## Running Instructions

1. Clone this repository.

2. Run `npm install` in your project folder.

3. Provide string values for the environment variables in the `.env` file.  
Find your API key and secret in your [Vonage Dashboard](https://dashboard.nexmo.com/). You can choose a virtual number from the [Your Numbers](https://dashboard.nexmo.com/your-numbers) section.

4. Run `node index.js`.

5. Use [Postman](https://www.getpostman.com/) or a similar service to make a POST request to `https://localhost:3000/send` with the following JSON object in the request body:  
```json
{
    "toNumber": "YOUR_MOBILE_PHONE_NUMBER",
    "message": "Taco tracks on every corner! 🌮🌮"
}
```
Replace `YOUR_MOBILE_PHONE_NUMBER` with your personal number in E. 164 format, for example: 082123456789.